export class BodyTooLargeError extends Error {}

/** Bound bytes retained before decoding/parsing, including chunked requests. */
export async function readLimitedText(request: Request, maxBytes: number): Promise<string> {
  if (Number(request.headers.get('content-length')) > maxBytes) {
    await request.body?.cancel();
    throw new BodyTooLargeError();
  }
  if (!request.body) return '';
  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let bytes = 0;
  let text = '';
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) return text + decoder.decode();
      bytes += value.byteLength;
      if (bytes > maxBytes) {
        await reader.cancel();
        throw new BodyTooLargeError();
      }
      text += decoder.decode(value, { stream: true });
    }
  } finally {
    reader.releaseLock();
  }
}
