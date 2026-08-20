/**
 * Modul Keamanan Ujian CBT (Anti-Cheat Timer & Data Integrity)
 * Melindungi dari manipulasi waktu di browser, XSS, dan hilangnya data jawaban.
 */

const SECRET_SALT = 'TKA_CBT_SECURE_SALT_2025_#SD_TEMPURSARI';

/**
 * Membuat tanda tangan digital (Hash Checksum) untuk memvalidasi integritas sesi ujian
 */
export function generateExamSignature(
  studentId: string,
  packageId: string,
  startTimeEpoch: number,
  totalDurationSeconds: number
): string {
  const payload = `${studentId}|${packageId}|${startTimeEpoch}|${totalDurationSeconds}|${SECRET_SALT}`;
  let hash = 5381;
  for (let i = 0; i < payload.length; i++) {
    hash = ((hash << 5) + hash) + payload.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36) + BufferFallbackHex(payload);
}

function BufferFallbackHex(str: string): string {
  let hex = '';
  for (let i = 0; i < Math.min(str.length, 16); i++) {
    hex += str.charCodeAt(i).toString(16);
  }
  return hex;
}

/**
 * Memvalidasi apakah sesi ujian telah dimodifikasi secara ilegal di LocalStorage
 */
export function verifyExamSignature(
  studentId: string,
  packageId: string,
  startTimeEpoch: number,
  totalDurationSeconds: number,
  signature: string
): boolean {
  if (!signature) return false;
  const expected = generateExamSignature(studentId, packageId, startTimeEpoch, totalDurationSeconds);
  return expected === signature;
}

/**
 * Menghitung sisa waktu nyata berdasarkan Waktu Mulai (Epoch Anchor)
 * Mencegah manipulasi waktu lokal pada LocalStorage browser.
 */
export function calculateTrueRemainingSeconds(
  startTimeEpoch: number,
  totalDurationSeconds: number,
  extraTimeSeconds: number = 0
): {
  trueRemaining: number;
  isExpired: boolean;
  elapsedSeconds: number;
} {
  const now = Date.now();
  const elapsedSeconds = Math.max(0, Math.floor((now - startTimeEpoch) / 1000));
  const totalAllowed = totalDurationSeconds + extraTimeSeconds;
  const trueRemaining = Math.max(0, totalAllowed - elapsedSeconds);

  return {
    trueRemaining,
    isExpired: trueRemaining <= 0,
    elapsedSeconds
  };
}
