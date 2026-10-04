import { BAB1_LISTRIK_STATIS_SOAL } from './kelas12/bab1_listrik_statis.js';
import { BAB2_LISTRIK_DC_SOAL } from './kelas12/bab2_listrik_dc.js';
import { BAB3_KEMAGNETAN_SOAL } from './kelas12/bab3_kemagnetan.js';
import { BAB4_ARUS_AC_SOAL } from './kelas12/bab4_arus_ac.js';
import { BAB5_GELOMBANG_EM_SOAL } from './kelas12/bab5_gelombang_em.js';
import { BAB6_ELEKTRONIKA_DIGITAL_SOAL } from './kelas12/bab6_elektronika_digital.js';
import { BAB7_RELATIVITAS_SOAL } from './kelas12/bab7_relativitas.js';
import { BAB8_GEJALA_KUANTUM_SOAL } from './kelas12/bab8_gejala_kuantum.js';
import { BAB9_FISIKA_INTI_SOAL } from './kelas12/bab9_fisika_inti.js';

const allQuestions = [
  ...BAB1_LISTRIK_STATIS_SOAL,
  ...BAB2_LISTRIK_DC_SOAL,
  ...BAB3_KEMAGNETAN_SOAL,
  ...BAB4_ARUS_AC_SOAL,
  ...BAB5_GELOMBANG_EM_SOAL,
  ...BAB6_ELEKTRONIKA_DIGITAL_SOAL,
  ...BAB7_RELATIVITAS_SOAL,
  ...BAB8_GEJALA_KUANTUM_SOAL,
  ...BAB9_FISIKA_INTI_SOAL,

];

export const sma = {
  mudah: allQuestions.filter(q => q.level === 'mudah'),
  sedang: allQuestions.filter(q => q.level === 'sedang'),
  sulit: allQuestions.filter(q => q.level === 'sulit')
};
