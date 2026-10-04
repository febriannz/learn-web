/**
 * REPOSITORY BANK SOAL MODULAR (Kurikulum Merdeka)
 * 
 * Terorganisir secara rapi per:
 * - Mata Pelajaran (biologi, fisika, kimia, sejarah, bahasa_indonesia)
 * - Jenjang Pendidikan (SD, SMP, SMA)
 * - Bab Materi Spesifik Kelas 12
 */

import { biologi } from './biologi/index.js';
import { fisika } from './fisika/index.js';
import { kimia } from './kimia/index.js';
import { sejarah } from './sejarah/index.js';
import { bahasa_indonesia } from './bahasa_indonesia/index.js';

export const BANK_SOAL = {
  biologi,
  fisika,
  kimia,
  sejarah,
  bahasa_indonesia,
};
