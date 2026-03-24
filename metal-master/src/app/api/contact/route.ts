import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import nodemailer from 'nodemailer';

interface ContactBody {
  name: string;
  email: string;
  phone: string;
  message: string;
  _honey?: string;
  _timestamp?: number;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_SUBMIT_TIME_MS = 3000;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_PHONE_LENGTH = 30;
const MAX_MESSAGE_LENGTH = 5000;
const MAX_BODY_SIZE = 10_000;

// --- Rate Limiting ---
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // max 5 emails per window per IP

interface RateLimitEntry {
  count: number;
  firstRequest: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

function cleanupRateLimitMap() {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap) {
    if (now - entry.firstRequest > RATE_LIMIT_WINDOW_MS) {
      rateLimitMap.delete(key);
    }
  }
}

function isRateLimited(ip: string): boolean {
  cleanupRateLimitMap();
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  if (now - entry.firstRequest > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

function getClientIp(headersList: Headers): string {
  return (
    headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headersList.get('x-real-ip') ||
    'unknown'
  );
}

const ALLOWED_ORIGINS = [
  process.env.NEXT_PUBLIC_SITE_URL,
  'http://localhost:3000',
  'http://localhost:3001',
].filter(Boolean) as string[];

function validateBody(body: ContactBody): string | null {
  const { name, email, phone, message, _honey, _timestamp } = body;

  if (_honey) {
    return 'spam';
  }

  if (_timestamp && Date.now() - _timestamp < MIN_SUBMIT_TIME_MS) {
    return 'Formularz wysłany zbyt szybko. Spróbuj ponownie.';
  }

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return 'Imię i nazwisko jest wymagane.';
  }
  if (name.trim().length > MAX_NAME_LENGTH) {
    return `Imię i nazwisko nie może przekraczać ${MAX_NAME_LENGTH} znaków.`;
  }

  if (!email || typeof email !== 'string' || email.trim().length === 0) {
    return 'Email jest wymagany.';
  }
  if (email.trim().length > MAX_EMAIL_LENGTH) {
    return `Email nie może przekraczać ${MAX_EMAIL_LENGTH} znaków.`;
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    return 'Podaj poprawny adres email.';
  }

  if (phone && typeof phone === 'string' && phone.trim().length > MAX_PHONE_LENGTH) {
    return `Numer telefonu nie może przekraczać ${MAX_PHONE_LENGTH} znaków.`;
  }

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return 'Wiadomość jest wymagana.';
  }
  if (message.trim().length > MAX_MESSAGE_LENGTH) {
    return `Wiadomość nie może przekraczać ${MAX_MESSAGE_LENGTH} znaków.`;
  }

  return null;
}

function buildEmailHtml(name: string, email: string, phone: string, message: string): string {
  const date = new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' });

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #c0392b; border-bottom: 2px solid #c0392b; padding-bottom: 10px;">
        Nowa wiadomość z formularza kontaktowego
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; color: #555; width: 140px;">Imię i nazwisko:</td>
          <td style="padding: 8px 12px;">${escapeHtml(name)}</td>
        </tr>
        <tr style="background: #f9f9f9;">
          <td style="padding: 8px 12px; font-weight: bold; color: #555;">Email:</td>
          <td style="padding: 8px 12px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; color: #555;">Telefon:</td>
          <td style="padding: 8px 12px;">${phone ? escapeHtml(phone) : '—'}</td>
        </tr>
        <tr style="background: #f9f9f9;">
          <td style="padding: 8px 12px; font-weight: bold; color: #555;">Data wysłania:</td>
          <td style="padding: 8px 12px;">${date}</td>
        </tr>
      </table>
      <div style="margin-top: 20px; padding: 16px; background: #f5f5f5; border-left: 4px solid #c0392b; border-radius: 4px;">
        <strong style="color: #555;">Wiadomość:</strong>
        <p style="margin: 8px 0 0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
      </div>
    </div>
  `;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    // --- Header validation ---
    const headersList = await headers();
    const contentType = headersList.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { success: false, error: 'Nieprawidłowy typ zawartości.' },
        { status: 415 }
      );
    }

    const origin = headersList.get('origin');
    if (origin && ALLOWED_ORIGINS.length > 0 && !ALLOWED_ORIGINS.includes(origin)) {
      return NextResponse.json(
        { success: false, error: 'Niedozwolone źródło żądania.' },
        { status: 403 }
      );
    }

    // --- Rate limiting ---
    const clientIp = getClientIp(headersList);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { success: false, error: 'Zbyt wiele wiadomości. Spróbuj ponownie za 15 minut.' },
        { status: 429 }
      );
    }

    // --- Body size check ---
    const rawBody = await request.text();
    if (rawBody.length > MAX_BODY_SIZE) {
      return NextResponse.json(
        { success: false, error: 'Żądanie jest zbyt duże.' },
        { status: 413 }
      );
    }

    let body: ContactBody;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        { success: false, error: 'Nieprawidłowy format danych.' },
        { status: 400 }
      );
    }

    const error = validateBody(body);
    if (error === 'spam') {
      return NextResponse.json({ success: true });
    }
    if (error) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    const name = body.name.trim();
    const email = body.email.trim();
    const phone = body.phone?.trim() || '';
    const message = body.message.trim();

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL) {
      console.error('Missing SMTP environment variables');
      return NextResponse.json(
        { success: false, error: 'Błąd konfiguracji serwera. Spróbuj później.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Metal Master - Formularz" <${SMTP_USER}>`,
      replyTo: email,
      to: CONTACT_EMAIL,
      subject: `Nowa wiadomość z formularza kontaktowego — ${name}`,
      html: buildEmailHtml(name, email, phone, message),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err instanceof Error ? err.message : err);
    return NextResponse.json(
      { success: false, error: 'Nie udało się wysłać wiadomości. Spróbuj ponownie później.' },
      { status: 500 }
    );
  }
}
