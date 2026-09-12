/** Fixed-window limiter with bounded storage and no background timer. */
export function createRateLimiter({ windowMs, maxRequests, maxEntries }: {
  windowMs: number;
  maxRequests: number;
  maxEntries: number;
}) {
  const entries = new Map<string, { count: number; expiresAt: number }>();
  return (ip: string, now = Date.now()): boolean => {
    // Insertion order is expiry order; remove only the expired prefix.
    for (const [key, entry] of entries) {
      if (entry.expiresAt > now) break;
      entries.delete(key);
    }
    const entry = entries.get(ip);
    if (entry) {
      if (entry.count >= maxRequests) return true;
      entry.count++;
      return false;
    }
    // Fail closed: do not evict active limits, which would enable bypasses.
    if (entries.size >= maxEntries) return true;
    entries.set(ip, { count: 1, expiresAt: now + windowMs });
    return false;
  };
}
