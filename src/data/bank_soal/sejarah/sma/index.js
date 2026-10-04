import { BAB1_PERJUANGAN_KEMERDEKAAN_SOAL } from './kelas12/bab1_perjuangan_kemerdekaan.js';
import { BAB2_DEMOKRASI_LIBERAL_TERPIMPIN_SOAL } from './kelas12/bab2_demokrasi_liberal_terpimpin.js';
import { BAB3_ORDE_BARU_SOAL } from './kelas12/bab3_orde_baru.js';
import { BAB4_REFORMASI_SOAL } from './kelas12/bab4_reformasi.js';

const allQuestions = [
  ...BAB1_PERJUANGAN_KEMERDEKAAN_SOAL,
  ...BAB2_DEMOKRASI_LIBERAL_TERPIMPIN_SOAL,
  ...BAB3_ORDE_BARU_SOAL,
  ...BAB4_REFORMASI_SOAL,

];

export const sma = {
  mudah: allQuestions.filter(q => q.level === 'mudah'),
  sedang: allQuestions.filter(q => q.level === 'sedang'),
  sulit: allQuestions.filter(q => q.level === 'sulit')
};
