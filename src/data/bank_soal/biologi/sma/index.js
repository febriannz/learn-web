import { BAB1_ENZIM_METABOLISME_SOAL } from './kelas12/bab1_enzim_metabolisme.js';
import { BAB2_GENETIKA_SOAL } from './kelas12/bab2_genetika.js';
import { BAB3_EVOLUSI_SOAL } from './kelas12/bab3_evolusi.js';
import { BAB4_BIOTEKNOLOGI_SOAL } from './kelas12/bab4_bioteknologi.js';

const allQuestions = [
  ...BAB1_ENZIM_METABOLISME_SOAL,
  ...BAB2_GENETIKA_SOAL,
  ...BAB3_EVOLUSI_SOAL,
  ...BAB4_BIOTEKNOLOGI_SOAL,

];

export const sma = {
  mudah: allQuestions.filter(q => q.level === 'mudah'),
  sedang: allQuestions.filter(q => q.level === 'sedang'),
  sulit: allQuestions.filter(q => q.level === 'sulit')
};
