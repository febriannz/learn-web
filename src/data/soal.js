/**
 * QUESTION BANK AGGREGATOR MODULE (src/data/soal.js)
 * 
 * Modul ini berfungsi sebagai titik akses utama (barrel export) ke bank soal terpusat.
 * Struktur data bank soal telah dimodularisasi ke dalam folder:
 * src/data/bank_soal/
 *   ├── biologi/ (sd, smp, sma/kelas12 per bab)
 *   ├── fisika/ (sd, smp, sma/kelas12 per bab)
 *   ├── kimia/ (sd, smp, sma/kelas12 per bab)
 *   ├── sejarah/ (sd, smp, sma/kelas12 per bab - 100 soal)
 *   └── bahasa_indonesia/ (sd, smp, sma)
 */

export { BANK_SOAL } from './bank_soal/index.js';
