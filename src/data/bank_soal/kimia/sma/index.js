import { BAB1_LARUTAN_KOLOID_SOAL } from './kelas12/bab1_larutan_koloid.js';
import { BAB2_ELEKTROKIMIA_SOAL } from './kelas12/bab2_elektrokimia.js';
import { BAB3_GUGUS_FUNGSI_SOAL } from './kelas12/bab3_gugus_fungsi.js';
import { BAB4_MAKROMOLEKUL_SOAL } from './kelas12/bab4_makromolekul.js';

const allQuestions = [
  ...BAB1_LARUTAN_KOLOID_SOAL,
  ...BAB2_ELEKTROKIMIA_SOAL,
  ...BAB3_GUGUS_FUNGSI_SOAL,
  ...BAB4_MAKROMOLEKUL_SOAL,

];

export const sma = {
  mudah: allQuestions.filter(q => q.level === 'mudah'),
  sedang: allQuestions.filter(q => q.level === 'sedang'),
  sulit: allQuestions.filter(q => q.level === 'sulit')
};
