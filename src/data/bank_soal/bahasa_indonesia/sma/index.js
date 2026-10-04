import { BAB1_SURAT_LAMARAN_SOAL } from './kelas12/bab1_surat_lamaran.js';
import { BAB2_CERITA_SEJARAH_SOAL } from './kelas12/bab2_cerita_sejarah.js';
import { BAB3_TEKS_EDITORIAL_SOAL } from './kelas12/bab3_teks_editorial.js';
import { BAB4_KRITIK_ESAI_SOAL } from './kelas12/bab4_kritik_esai.js';
import { BAB5_DEBAT_PRESENTASI_SOAL } from './kelas12/bab5_debat_presentasi.js';
import { BAB6_DRAMA_ARTIKEL_SOAL } from './kelas12/bab6_drama_artikel.js';

const allQuestions = [
  ...BAB1_SURAT_LAMARAN_SOAL,
  ...BAB2_CERITA_SEJARAH_SOAL,
  ...BAB3_TEKS_EDITORIAL_SOAL,
  ...BAB4_KRITIK_ESAI_SOAL,
  ...BAB5_DEBAT_PRESENTASI_SOAL,
  ...BAB6_DRAMA_ARTIKEL_SOAL
];

export const sma = {
  mudah: allQuestions.filter(q => q.level === 'mudah'),
  sedang: allQuestions.filter(q => q.level === 'sedang'),
  sulit: allQuestions.filter(q => q.level === 'sulit')
};
