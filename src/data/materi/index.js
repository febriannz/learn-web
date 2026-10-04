/**
 * PUSAT DATA MATERI BELAJAR (src/data/materi/index.js)
 *
 * Berisi materi pelajaran per jenjang kelas (Kurikulum Merdeka) yang
 * ditampilkan pada fitur "Belajar Materi".
 *
 * Saat ini materi yang sudah tersedia:
 *   - Fisika Kelas 10, 11, 12 (Fase F)
 *
 * Cara menambah mapel / kelas baru:
 *   1. Buat file baru di folder ini (mis. kimiaKelas10.js) dengan skema
 *      { id, title, summary, sections[], formulas[], examples[], tips[] }
 *   2. Daftarkan ke objek MATERI_DATA di bawah.
 *   3. Set `available: true` pada MATERI_SUBJECTS agar muncul di UI.
 */

import { MATERI_FISIKA_10 } from './fisikaKelas10.js';
import { MATERI_FISIKA_11 } from './fisikaKelas11.js';
import { MATERI_FISIKA_12 } from './fisikaKelas12.js';

/** Struktur: MATERI_DATA[subjectId][kelas] = [chapter, ...] */
export const MATERI_DATA = {
  fisika: {
    10: MATERI_FISIKA_10,
    11: MATERI_FISIKA_11,
    12: MATERI_FISIKA_12
  }
};

/** Daftar mapel yang ditampilkan pada tab pemilih mata pelajaran. */
export const MATERI_SUBJECTS = [
  {
    id: 'fisika',
    name: 'Fisika',
    desc: 'Mekanika, fluida, termodinamika, gelombang, listrik, & fisika modern',
    available: true
  },
  {
    id: 'kimia',
    name: 'Kimia',
    desc: 'Materi & perubahannya, ikatan, stoikiometri, kinetika, & elektrokimia',
    available: false
  },
  {
    id: 'biologi',
    name: 'Biologi',
    desc: 'Sel, jaringan, sistem organ, genetika, evolusi, & bioteknologi',
    available: false
  },
  {
    id: 'matematika_umum',
    name: 'Matematika',
    desc: 'Aljabar, fungsi, trigonometri, statistika, & peluang',
    available: false
  },
  {
    id: 'bahasa_indonesia',
    name: 'Bahasa Indonesia',
    desc: 'Teks, sastra, & komunikasi',
    available: false
  },
  {
    id: 'sejarah',
    name: 'Sejarah',
    desc: 'Sejarah Indonesia & peradaban bangsa',
    available: false
  }
];

/** Ambil daftar bab materi untuk mapel & kelas tertentu ([] bila belum ada). */
export function getMateriList(subjectId, kelas) {
  return MATERI_DATA[subjectId]?.[kelas] || [];
}

/** Apakah ada materi untuk mapel tersebut? */
export function hasMateri(subjectId) {
  const gradeMap = MATERI_DATA[subjectId];
  if (!gradeMap) return false;
  return Object.values(gradeMap).some(list => Array.isArray(list) && list.length > 0);
}

/** Daftar kelas yang benar-benar punya materi untuk suatu mapel. */
export function getAvailableKelas(subjectId) {
  const gradeMap = MATERI_DATA[subjectId] || {};
  return Object.keys(gradeMap)
    .map(Number)
    .filter(kelas => Array.isArray(gradeMap[kelas]) && gradeMap[kelas].length > 0)
    .sort((a, b) => a - b);
}
