/**
 * COMPREHENSIVE QUESTION AUTO-GENERATORS (src/data/generators.js)
 * 
 * Includes:
 * 1. Matematika Umum (SD, SMP, SMA Kelas 10, 11, 12 per Bab)
 * 2. Matematika Tingkat Lanjut (SMA Kelas 10, 11, 12 per Bab)
 * 3. Fisika Hybrid Generator (SMA Kelas 10, 11, 12 - GLB/GLBB, Usaha, Energi, Kalor, Listrik, Lorentz)
 * 4. Kimia Hybrid Generator (SMA Kelas 10, 11, 12 - Stoikiometri, Konfigurasi Elektron, pH, Sel Volta)
 * 5. Biologi Mendel Generator (SMA Kelas 12 Bab 1 Monohibrid & Bab 2 Dihibrid)
 * 6. 5 Pilihan Ganda (A, B, C, D, E) Generator
 */

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

export function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
}

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Universal 5-choice generator (A, B, C, D, E)
 */
export function generateMathChoices(ansStr, distractors = []) {
  const cleanAns = String(ansStr).trim();
  const choiceSet = new Set([cleanAns]);

  // 1. If predefined distractors provided, use them first
  if (Array.isArray(distractors) && distractors.length > 0) {
    for (const d of distractors) {
      if (d && String(d).trim() !== cleanAns) {
        choiceSet.add(String(d).trim());
        if (choiceSet.size === 5) break;
      }
    }
  }

  // 2. If it's a numeric answer (e.g. "24", "12.5", "1000000")
  const num = parseFloat(cleanAns.replace(/\s+/g, '').replace(/\./g, ''));
  const isPureNumber = !isNaN(num) && !cleanAns.includes('/') && !cleanAns.includes(':') && !cleanAns.includes('x');

  if (isPureNumber && choiceSet.size < 5) {
    const isInteger = Number.isInteger(num);
    const range = Math.max(2, Math.min(20, Math.round(Math.abs(num) * 0.3) || 5));
    let attempts = 0;

    while (choiceSet.size < 5 && attempts < 100) {
      attempts++;
      let delta = randInt(-range, range);
      if (delta === 0) delta = randInt(1, 3) * (Math.random() > 0.5 ? 1 : -1);
      let fakeNum = num + delta;

      if (!isInteger) {
        fakeNum = Math.round(fakeNum * 10) / 10;
      }

      if (fakeNum >= 0 || num < 0) {
        choiceSet.add(String(fakeNum));
      }
    }

    let offset = 1;
    while (choiceSet.size < 5) {
      choiceSet.add(String(num + offset));
      offset++;
    }
  }

  // 3. If it's a fraction (e.g. "3/4")
  if (cleanAns.includes('/') && choiceSet.size < 5) {
    const [numPart, denPart] = cleanAns.split('/').map(s => parseInt(s.trim(), 10));
    if (!isNaN(numPart) && !isNaN(denPart) && denPart !== 0) {
      let attempts = 0;
      while (choiceSet.size < 5 && attempts < 50) {
        attempts++;
        const fNum = Math.max(1, numPart + randInt(-2, 2));
        const fDen = Math.max(2, denPart + randInt(-2, 2));
        choiceSet.add(`${fNum}/${fDen}`);
      }
      let offset = 1;
      while (choiceSet.size < 5) {
        choiceSet.add(`${numPart + offset}/${denPart}`);
        offset++;
      }
    }
  }

  // 4. If it's a ratio (e.g. "3 : 1" or "9 : 3 : 3 : 1")
  if (cleanAns.includes(':') && choiceSet.size < 5) {
    const fallbackRatios = ["3 : 1", "1 : 2 : 1", "9 : 3 : 3 : 1", "1 : 1", "9 : 7", "15 : 1", "12 : 3 : 1", "1 : 1 : 1 : 1"];
    for (const r of fallbackRatios) {
      if (r !== cleanAns) {
        choiceSet.add(r);
        if (choiceSet.size === 5) break;
      }
    }
  }

  // 5. Fallback filler if still < 5
  let fillerIndex = 1;
  while (choiceSet.size < 5) {
    choiceSet.add(`${cleanAns} (Opsi ${String.fromCharCode(65 + fillerIndex)})`);
    fillerIndex++;
  }

  return shuffle(Array.from(choiceSet).slice(0, 5));
}

// ==========================================
// MATEMATIKA UMUM (SD & SMP & SMA)
// ==========================================

// SD Operations
function genPenjumlahan(kelas) {
  const max = kelas <= 2 ? 30 : (kelas <= 4 ? 100 : 500);
  const a = randInt(2, max);
  const b = randInt(2, max);
  const ans = a + b;
  return {
    type: 'Penjumlahan',
    question: `Berapakah hasil dari ${a} + ${b}?`,
    answer: String(ans),
    explanation: `${a} + ${b} = ${ans}`
  };
}

function genPengurangan(kelas) {
  const max = kelas <= 2 ? 30 : (kelas <= 4 ? 100 : 500);
  let a = randInt(5, max);
  let b = randInt(2, max);
  if (a < b) [a, b] = [b, a];
  const ans = a - b;
  return {
    type: 'Pengurangan',
    question: `Berapakah hasil dari ${a} - ${b}?`,
    answer: String(ans),
    explanation: `${a} - ${b} = ${ans}`
  };
}

function genPerkalian(kelas) {
  const a = randInt(2, kelas <= 4 ? 10 : 20);
  const b = randInt(2, kelas <= 4 ? 10 : 15);
  const ans = a * b;
  return {
    type: 'Perkalian',
    question: `Berapakah hasil dari ${a} × ${b}?`,
    answer: String(ans),
    explanation: `${a} × ${b} = ${ans}`
  };
}

function genPembagian(kelas) {
  const ans = randInt(2, kelas <= 4 ? 10 : 25);
  const divisor = randInt(2, kelas <= 4 ? 10 : 12);
  const dividend = ans * divisor;
  return {
    type: 'Pembagian',
    question: `Berapakah hasil dari ${dividend} ÷ ${divisor}?`,
    answer: String(ans),
    explanation: `${dividend} ÷ ${divisor} = ${ans}`
  };
}

// SMP / SMA Dasar
function genPersamaanLinear() {
  const x = randInt(1, 15);
  const a = randInt(2, 6);
  const b = randInt(1, 25);
  const c = a * x + b;
  return {
    type: 'Persamaan Linear',
    question: `Jika ${a}x + ${b} = ${c}, berapakah nilai x?`,
    answer: String(x),
    explanation: `${a}x = ${c} - ${b} = ${c - b}\nx = ${c - b} ÷ ${a} = ${x}`
  };
}

function genPecahan() {
  const b = randInt(2, 6);
  const d = randInt(2, 6);
  const a = randInt(1, b - 1);
  const c = randInt(1, d - 1);
  const num = a * d + c * b;
  const den = b * d;
  const g = gcd(num, den);
  const ans = (den / g === 1) ? String(num / g) : `${num / g}/${den / g}`;
  return {
    type: 'Operasi Pecahan',
    question: `Berapakah hasil dari ${a}/${b} + ${c}/${d}?`,
    answer: ans,
    explanation: `Samakan penyebut: (${a * d} + ${c * b}) / ${b * d} = ${num}/${den} = ${ans}`
  };
}

// --- SMA KELAS 10 ---
function genEksponenLogaritma() {
  const isLog = Math.random() > 0.5;
  if (isLog) {
    const base = randInt(2, 5);
    const exp = randInt(2, 4);
    const val = Math.pow(base, exp);
    return {
      type: 'Logaritma',
      question: `Berapakah nilai dari ^${base}log(${val})?`,
      answer: String(exp),
      explanation: `^${base}log(${val}) = x ⇔ ${base}^x = ${val} ➔ x = ${exp}`
    };
  } else {
    const base = randInt(2, 4);
    const m = randInt(2, 4);
    const n = randInt(1, 3);
    const ans = Math.pow(base, m + n);
    return {
      type: 'Eksponen',
      question: `Berapakah nilai dari (${base}^${m}) × (${base}^${n})?`,
      answer: String(ans),
      explanation: `${base}^${m} × ${base}^${n} = ${base}^(${m}+${n}) = ${base}^${m + n} = ${ans}`
    };
  }
}

function genDeretAritmatika() {
  const a = randInt(2, 15);
  const b = randInt(2, 7);
  const n = randInt(5, 12);
  const ans = a + (n - 1) * b;
  return {
    type: 'Barisan Aritmatika',
    question: `Diketahui barisan aritmatika: ${a}, ${a + b}, ${a + 2 * b}, ... Tentukan suku ke-${n} (U${n})!`,
    answer: String(ans),
    explanation: `Uₙ = a + (n - 1)b = ${a} + (${n} - 1)(${b}) = ${a} + ${((n - 1) * b)} = ${ans}`
  };
}

function genBarisanGeometri() {
  const a = randInt(2, 5);
  const r = randInt(2, 3);
  const n = randInt(3, 5);
  const ans = a * Math.pow(r, n - 1);
  return {
    type: 'Barisan Geometri',
    question: `Diketahui barisan geometri: ${a}, ${a * r}, ${a * r * r}, ... Tentukan suku ke-${n} (U${n})!`,
    answer: String(ans),
    explanation: `Uₙ = a · r^(n - 1) = ${a} · ${r}^(${n} - 1) = ${ans}`
  };
}

function genPersamaanKuadrat() {
  const x1 = randInt(1, 6);
  const x2 = randInt(1, 6);
  const b = -(x1 + x2);
  const c = x1 * x2;
  const bSign = b < 0 ? `- ${Math.abs(b)}x` : `+ ${b}x`;
  const cSign = c < 0 ? `- ${Math.abs(c)}` : `+ ${c}`;
  const askMax = Math.random() > 0.5;
  const ans = askMax ? Math.max(x1, x2) : Math.min(x1, x2);
  return {
    type: 'Persamaan Kuadrat',
    question: `Akar ${askMax ? 'terbesar' : 'terkecil'} dari persamaan kuadrat x² ${bSign} ${cSign} = 0 adalah...`,
    answer: String(ans),
    explanation: `Faktorisasi: (x - ${x1})(x - ${x2}) = 0 ➔ x₁ = ${x1}, x₂ = ${x2}. Akar ${askMax ? 'terbesar' : 'terkecil'} = ${ans}`
  };
}

function genSPLDV() {
  const x = randInt(1, 10);
  const y = randInt(1, 10);
  const eq1 = x + y;
  const eq2 = 2 * x + y;
  return {
    type: 'Sistem Persamaan Linear (SPLDV)',
    question: `Diketahui sistem persamaan:\nx + y = ${eq1}\n2x + y = ${eq2}\nBerapakah nilai dari x?`,
    answer: String(x),
    explanation: `Kurangkan persamaan kedua dengan pertama:\n(2x + y) - (x + y) = ${eq2} - ${eq1} ➔ x = ${x}`
  };
}

function genTrigonometriDasar() {
  const items = [
    { q: 'sin 30°', a: '1/2', exp: 'sin 30° = 1/2' },
    { q: 'cos 60°', a: '1/2', exp: 'cos 60° = 1/2' },
    { q: 'tan 45°', a: '1', exp: 'tan 45° = 1' },
    { q: 'sin 90°', a: '1', exp: 'sin 90° = 1' },
    { q: 'cos 0°', a: '1', exp: 'cos 0° = 1' },
    { q: 'tan 0°', a: '0', exp: 'tan 0° = 0' }
  ];
  const item = items[randInt(0, items.length - 1)];
  return {
    type: 'Trigonometri Dasar',
    question: `Berapakah nilai dari ${item.q}?`,
    answer: item.a,
    distractors: ['0', '1/2', '1', '√2/2', '√3/2'],
    explanation: item.exp
  };
}

function genStatistikaDasar() {
  const base = randInt(5, 12);
  const diffs = [randInt(-3, 3), randInt(-3, 3), randInt(-3, 3), randInt(-3, 3)];
  const sumDiff = diffs.reduce((a, b) => a + b, 0);
  const fifth = -sumDiff;
  const data = [base + diffs[0], base + diffs[1], base + diffs[2], base + diffs[3], base + fifth];
  return {
    type: 'Statistika Dasar',
    question: `Tentukan nilai rata-rata (mean) dari kumpulan data berikut: ${data.join(', ')}!`,
    answer: String(base),
    explanation: `Jumlah data = ${data.reduce((a, b) => a + b, 0)}\nMean = ${data.reduce((a, b) => a + b, 0)} ÷ 5 = ${base}`
  };
}

function genPeluangDasar() {
  const isPerm = Math.random() > 0.5;
  const n = randInt(4, 6);
  const r = 2;
  if (isPerm) {
    const ans = n * (n - 1);
    return {
      type: 'Permutasi Dasar',
      question: `Berapa banyak cara menyusun ${r} pengurus (Ketua & Sekretaris) dari ${n} orang calon (P(${n}, ${r}))?`,
      answer: String(ans),
      explanation: `P(${n}, ${r}) = ${n}! / (${n} - ${r})! = ${n} × ${n - 1} = ${ans}`
    };
  } else {
    const ans = (n * (n - 1)) / 2;
    return {
      type: 'Kombinasi Dasar',
      question: `Berapa banyak cara memilih ${r} orang delegasi dari ${n} siswa (C(${n}, ${r}))?`,
      answer: String(ans),
      explanation: `C(${n}, ${r}) = ${n}! / (${r}! × (${n} - ${r})!) = (${n} × ${n - 1}) ÷ 2 = ${ans}`
    };
  }
}

// --- SMA KELAS 11 ---
function genLimitAljabar() {
  const a = randInt(2, 6);
  const ans = 2 * a;
  return {
    type: 'Limit Fungsi Aljabar',
    question: `Tentukan nilai dari lim(x ➔ ${a}) (x² - ${a * a}) / (x - ${a})!`,
    answer: String(ans),
    explanation: `(x² - ${a * a}) = (x - ${a})(x + ${a})\nlim(x ➔ ${a}) (x + ${a}) = ${a} + ${a} = ${ans}`
  };
}

function genLimitTrigo() {
  const a = randInt(2, 5);
  const b = randInt(2, 5);
  const g = gcd(a, b);
  const ans = (b / g === 1) ? String(a / g) : `${a / g}/${b / g}`;
  return {
    type: 'Limit Fungsi Trigonometri',
    question: `Tentukan nilai dari lim(x ➔ 0) sin(${a}x) / (${b}x)!`,
    answer: ans,
    explanation: `Sesuai sifat limit dasar trigonometri, lim(x ➔ 0) sin(ax) / (bx) = a/b = ${ans}`
  };
}

function genTurunanDasar() {
  const a = randInt(2, 5);
  const n = randInt(2, 4);
  const x0 = randInt(1, 3);
  const ans = a * n * Math.pow(x0, n - 1);
  return {
    type: 'Turunan Fungsi Dasar',
    question: `Jika f(x) = ${a}x^${n}, berapakah nilai turunan f'(${x0})?`,
    answer: String(ans),
    explanation: `f'(x) = ${a * n}x^${n - 1}\nf'(${x0}) = ${a * n} × (${x0})^${n - 1} = ${ans}`
  };
}

// --- SMA KELAS 12 ---
function genIntegralTakTentu() {
  const coeff = randInt(2, 5) * 3; // kelipatan 3
  const ans = coeff / 3;
  return {
    type: 'Integral Tak Tentu',
    question: `Tentukan hasil dari ∫ ${coeff}x² dx!`,
    answer: `${ans}x³ + C`,
    distractors: [`${coeff}x³ + C`, `${ans * 2}x³ + C`, `${ans}x² + C`, `${coeff / 2}x² + C`],
    explanation: `∫ axⁿ dx = a/(n+1) x^(n+1) + C ➔ ${coeff}/3 x³ + C = ${ans}x³ + C`
  };
}

function genIntegralTentu() {
  const a = randInt(1, 4) * 2; // Genap agar a/2 bulat
  const b = randInt(1, 3);
  const ans = 0.5 * a * (b * b);
  return {
    type: 'Integral Tentu',
    question: `Hitunglah nilai dari integral tentu ∫ [0 sampai ${b}] (${a}x) dx!`,
    answer: String(ans),
    explanation: `[½ × ${a}x²] batas 0 sampai ${b} = ½ × ${a} × (${b}²) - 0 = ${ans}`
  };
}

function genTurunanLanjutan() {
  // Kecepatan s(t) = at^2 + bt
  const a = randInt(2, 5);
  const b = randInt(2, 10);
  const t = randInt(1, 4);
  const ans = 2 * a * t + b;
  return {
    type: 'Aplikasi Turunan (Kecepatan)',
    question: `Posisi benda dirumuskan s(t) = ${a}t² + ${b}t meter. Tentukan kecepatan benda (v) pada saat t = ${t} detik!`,
    answer: String(ans),
    explanation: `Kecepatan v(t) = s'(t) = ${2 * a}t + ${b}\nSaat t = ${t}, v(${t}) = ${2 * a}(${t}) + ${b} = ${ans} m/s`
  };
}

function genBungaTunggal() {
  const modal = randInt(1, 10) * 1000000;
  const rate = randInt(3, 8);
  const tahun = randInt(1, 4);
  const bunga = modal * (rate / 100) * tahun;
  const total = modal + bunga;
  return {
    type: 'Investasi & Bunga Tunggal',
    question: `Modal sebesar Rp ${modal.toLocaleString('id-ID')} disimpan dengan bunga tunggal ${rate}%/tahun selama ${tahun} tahun. Berapakah total tabungan akhir?`,
    answer: String(total),
    explanation: `Bunga = Rp ${modal.toLocaleString('id-ID')} × ${rate}% × ${tahun} = Rp ${bunga.toLocaleString('id-ID')}\nTotal = Rp ${total.toLocaleString('id-ID')}`
  };
}

// ==========================================
// MATEMATIKA TINGKAT LANJUT
// ==========================================

function genMatriksDeterminan() {
  const a = randInt(1, 5);
  const b = randInt(1, 4);
  const c = randInt(1, 4);
  const d = randInt(1, 5);
  const ans = a * d - b * c;
  return {
    type: 'Matriks & Determinan',
    question: `Berapakah determinan dari matriks A = [[${a}, ${b}], [${c}, ${d}]]?`,
    answer: String(ans),
    explanation: `det(A) = ad - bc = (${a} × ${d}) - (${b} × ${c}) = ${a * d} - ${b * c} = ${ans}`
  };
}

function genGeometriLingkaran() {
  const r = randInt(3, 12);
  const r2 = r * r;
  return {
    type: 'Geometri Analitik Lingkaran',
    question: `Tentukan panjang jari-jari (r) dari persamaan lingkaran x² + y² = ${r2}!`,
    answer: String(r),
    explanation: `Persamaan lingkaran standar: x² + y² = r² ➔ r² = ${r2} ➔ r = √${r2} = ${r}`
  };
}

// Router Matematika
export function generateMathQuestion(subject = 'matematika_umum', kelas = 12, level = 'mudah', chapter = 0) {
  let pool = [];

  if (subject === 'matematika_lanjut') {
    if (chapter === 1) pool = [genGeometriLingkaran];
    else if (chapter === 2) pool = [genTurunanDasar, genTurunanLanjutan];
    else if (chapter === 3) pool = [genMatriksDeterminan];
    else pool = [genGeometriLingkaran, genMatriksDeterminan, genTurunanDasar, genIntegralTentu];
  } else {
    // Matematika Umum
    if (kelas <= 6) {
      pool = [genPenjumlahan, genPengurangan, genPerkalian, genPembagian];
    } else if (kelas <= 9) {
      pool = [genPerkalian, genPembagian, genPersamaanLinear, genPecahan];
    } else if (kelas === 10) {
      if (chapter === 1) pool = [genEksponenLogaritma];
      else if (chapter === 2) pool = [genDeretAritmatika];
      else if (chapter === 3) pool = [genBarisanGeometri];
      else if (chapter === 4) pool = [genPersamaanKuadrat];
      else if (chapter === 5) pool = [genSPLDV];
      else if (chapter === 8) pool = [genTrigonometriDasar];
      else if (chapter === 9) pool = [genStatistikaDasar];
      else if (chapter === 10) pool = [genPeluangDasar];
      else pool = [genEksponenLogaritma, genDeretAritmatika, genBarisanGeometri, genPersamaanKuadrat, genSPLDV, genTrigonometriDasar, genStatistikaDasar, genPeluangDasar];
    } else if (kelas === 11) {
      if (chapter === 1 || chapter === 2) pool = [genTrigonometriDasar];
      else if (chapter === 3) pool = [genLimitAljabar];
      else if (chapter === 4) pool = [genLimitTrigo];
      else if (chapter === 5) pool = [genTurunanDasar];
      else pool = [genLimitAljabar, genLimitTrigo, genTurunanDasar, genEksponenLogaritma];
    } else {
      // Kelas 12
      if (chapter === 1) pool = [genTurunanLanjutan];
      else if (chapter === 2) pool = [genIntegralTakTentu];
      else if (chapter === 3 || chapter === 4) pool = [genIntegralTentu];
      else if (chapter === 5) pool = [genPeluangDasar];
      else if (chapter === 6) pool = [genStatistikaDasar];
      else if (chapter === 7) pool = [genBungaTunggal];
      else pool = [genTurunanLanjutan, genIntegralTakTentu, genIntegralTentu, genPeluangDasar, genBungaTunggal];
    }
  }

  if (pool.length === 0) pool = [genPenjumlahan];
  const fn = pool[randInt(0, pool.length - 1)];
  const res = fn(kelas, level);
  res.choices = generateMathChoices(res.answer, res.distractors);
  res.level = level;
  return res;
}

// ==========================================
// FISIKA HYBRID GENERATOR
// ==========================================

function genFisikaGLB() {
  const v = randInt(5, 25);
  const t = randInt(2, 10);
  const s = v * t;
  return {
    type: 'Gerak Lurus Beraturan (GLB)',
    question: `Sebuah mobil bergerak dengan kecepatan tetap ${v} m/s selama ${t} sekon. Berapakah jarak tempuh mobil tersebut?`,
    answer: `${s} m`,
    distractors: [`${s + 10} m`, `${s - 5} m`, `${s * 2} m`, `${Math.round(s / 2)} m`],
    explanation: `Jarak (s) = v × t = ${v} m/s × ${t} s = ${s} meter`
  };
}

function genFisikaGLBB() {
  const v0 = randInt(0, 10);
  const a = randInt(2, 6);
  const t = randInt(2, 5);
  const vt = v0 + a * t;
  return {
    type: 'Gerak Lurus Berubah Beraturan (GLBB)',
    question: `Benda bergerak dengan kecepatan awal ${v0} m/s dan mengalami percepatan ${a} m/s² selama ${t} sekon. Tentukan kecepatan akhirnya!`,
    answer: `${vt} m/s`,
    distractors: [`${vt + 4} m/s`, `${vt - 2} m/s`, `${vt + 10} m/s`, `${a * t} m/s`],
    explanation: `v_t = v_0 + a·t = ${v0} + (${a} × ${t}) = ${vt} m/s`
  };
}

function genFisikaUsahaEnergi() {
  const m = randInt(2, 8);
  const v = randInt(2, 6) * 2; // Genap agar Ek bulat
  const Ek = 0.5 * m * (v * v);
  return {
    type: 'Energi Kinetik',
    question: `Sebuah benda bermassa ${m} kg melaju dengan kecepatan ${v} m/s. Berapakah energi kinetik benda tersebut?`,
    answer: `${Ek} Joule`,
    distractors: [`${Ek * 2} Joule`, `${Ek + 20} Joule`, `${Math.round(Ek / 2)} Joule`, `${Ek + 50} Joule`],
    explanation: `Ek = ½ m v² = ½ × ${m} × (${v}²) = ½ × ${m} × ${v * v} = ${Ek} Joule`
  };
}

function genFisikaKalor() {
  const m = randInt(1, 4);
  const c = 4200; // air
  const dt = randInt(5, 20);
  const Q = m * c * dt;
  return {
    type: 'Suhu & Kalor',
    question: `Sebanyak ${m} kg air dipanaskan sehingga suhunya naik sebesar ${dt}°C. Jika kalor jenis air 4.200 J/kg°C, kalor yang diserap adalah...`,
    answer: `${Q.toLocaleString('id-ID')} Joule`,
    distractors: [
      `${(Q + 4200).toLocaleString('id-ID')} Joule`,
      `${(Q - 4200).toLocaleString('id-ID')} Joule`,
      `${(Q * 2).toLocaleString('id-ID')} Joule`,
      `${Math.round(Q / 2).toLocaleString('id-ID')} Joule`
    ],
    explanation: `Q = m · c · ΔT = ${m} kg × 4.200 J/kg°C × ${dt}°C = ${Q.toLocaleString('id-ID')} Joule`
  };
}

function genFisikaListrik() {
  const R = randInt(2, 10);
  const I = randInt(1, 5);
  const V = I * R;
  const P = V * I;
  return {
    type: 'Listrik Dinamis (Hukum Ohm)',
    question: `Sebuah lampu dengan hambatan ${R} Ohm dialiri arus listrik ${I} Ampere. Tentukan beda potensial (tegangan) pada lampu!`,
    answer: `${V} Volt`,
    distractors: [`${V + 2} Volt`, `${V - 1} Volt`, `${P} Volt`, `${R + I} Volt`],
    explanation: `V = I × R = ${I} A × ${R} Ω = ${V} Volt`
  };
}

function genFisikaLorentz() {
  const B = randInt(2, 5);
  const I = randInt(2, 6);
  const L = randInt(1, 4);
  const F = B * I * L;
  return {
    type: 'Medan Magnet & Gaya Lorentz',
    question: `Kawat sepanjang ${L} meter berarus ${I} A berada tegak lurus dalam medan magnet ${B} Tesla. Gaya Lorentz yang dialami kawat adalah...`,
    answer: `${F} Newton`,
    distractors: [`${F + 5} Newton`, `${F - 2} Newton`, `${F * 2} Newton`, `${B * I} Newton`],
    explanation: `F = B × I × L = ${B} T × ${I} A × ${L} m = ${F} Newton`
  };
}

function genFisikaCoulomb() {
  const q1 = randInt(2, 6);
  const q2 = randInt(2, 5);
  const r = randInt(1, 3);
  const F = Math.round((90 * q1 * q2) / (r * r));
  return {
    type: 'Listrik Statis (Gaya Coulomb)',
    question: `Dua muatan titik q₁ = ${q1} μC dan q₂ = ${q2} μC terpisah pada jarak ${r * 10} cm di udara (k = 9 × 10⁹ N·m²/C²). Besar gaya Coulomb antara kedua muatan adalah...`,
    answer: `${F} Newton`,
    distractors: [`${F + 15} Newton`, `${Math.round(F / 2)} Newton`, `${F * 2} Newton`, `${Math.max(5, F - 10)} Newton`],
    explanation: `F = k · (q₁ · q₂) / r² = (9 × 10⁹ × ${q1}×10⁻⁶ × ${q2}×10⁻⁶) / (${r * 0.1})² = ${F} Newton`
  };
}

function genFisikaRLC() {
  const R = 30;
  const XL = randInt(6, 10) * 10;
  const XC = randInt(2, 5) * 10;
  const deltaX = XL - XC;
  const Z = Math.round(Math.sqrt(R * R + deltaX * deltaX));
  return {
    type: 'Arus Bolak-Balik (Rangkaian RLC)',
    question: `Rangkaian seri RLC memiliki resistor R = ${R} Ω, reaktansi induktif XL = ${XL} Ω, dan reaktansi kapasitif XC = ${XC} Ω. Besar impedansi total (Z) rangkaian adalah...`,
    answer: `${Z} Ω`,
    distractors: [`${Z + 20} Ω`, `${R + deltaX} Ω`, `${XL + XC} Ω`, `${Math.round(Z * 0.7)} Ω`],
    explanation: `Z = √[ R² + (XL - XC)² ] = √[ ${R}² + (${XL} - ${XC})² ] = √[ ${R * R} + ${deltaX * deltaX} ] = ${Z} Ω`
  };
}

function genFisikaRelativitas() {
  const m = randInt(1, 4);
  const E = m * 9;
  return {
    type: 'Teori Relativitas (Kesetaraan Massa-Energi)',
    question: `Berapakah energi diam yang setara dengan massa ${m} kg suatu benda jika kelajuan cahaya c = 3 × 10⁸ m/s?`,
    answer: `${E} × 10¹⁶ Joule`,
    distractors: [`${m * 3} × 10¹⁶ Joule`, `${E * 2} × 10¹⁶ Joule`, `${E + 9} × 10¹⁶ Joule`, `${m * 6} × 10¹⁶ Joule`],
    explanation: `E₀ = m · c² = ${m} kg × (3 × 10⁸ m/s)² = ${m} × (9 × 10¹⁶) = ${E} × 10¹⁶ Joule`
  };
}

function genFisikaFoton() {
  const f = randInt(4, 8);
  const ef = Math.round(6.63 * f * 100) / 100;
  return {
    type: 'Gejala Kuantum (Energi Foton)',
    question: `Berapakah energi sebuah foton cahaya yang memiliki frekuensi ${f} × 10¹⁴ Hz jika konstanta Planck h = 6,63 × 10⁻³⁴ J·s?`,
    answer: `${ef} × 10⁻²⁰ Joule`,
    distractors: [`${Math.round((ef + 6.63) * 100) / 100} × 10⁻²⁰ Joule`, `${Math.round((ef / 2) * 100) / 100} × 10⁻²⁰ Joule`, `${Math.round(ef * 2 * 100) / 100} × 10⁻²⁰ Joule`, `${f} × 10⁻²⁰ Joule`],
    explanation: `E = h · f = (6,63 × 10⁻³⁴ J·s) × (${f} × 10¹⁴ Hz) = ${ef} × 10⁻²⁰ Joule`
  };
}

export function generateFisikaQuestion(kelas = 10, level = 'sedang', chapter = 0) {
  let pool = [genFisikaGLB, genFisikaGLBB, genFisikaUsahaEnergi];
  if (kelas === 11) pool = [genFisikaKalor, genFisikaUsahaEnergi, genFisikaGLB];
  if (kelas === 12) {
    if (chapter === 1) pool = [genFisikaCoulomb];
    else if (chapter === 2) pool = [genFisikaListrik];
    else if (chapter === 3) pool = [genFisikaLorentz];
    else if (chapter === 4) pool = [genFisikaRLC];
    else if (chapter === 7) pool = [genFisikaRelativitas];
    else if (chapter === 8) pool = [genFisikaFoton];
    else pool = [genFisikaCoulomb, genFisikaListrik, genFisikaLorentz, genFisikaRLC, genFisikaRelativitas, genFisikaFoton];
  }

  const fn = pool[randInt(0, pool.length - 1)];
  const res = fn();
  res.choices = generateMathChoices(res.answer, res.distractors);
  res.level = level;
  return res;
}

// ==========================================
// KIMIA HYBRID GENERATOR
// ==========================================

function genKimiaMol() {
  const n = randInt(1, 4);
  const Mr = 18; // H2O
  const massa = n * Mr;
  return {
    type: 'Stoikiometri Dasar',
    question: `Berapakah jumlah mol dari ${massa} gram air (H₂O) jika diketahui Mr H₂O = 18 g/mol?`,
    answer: `${n} mol`,
    distractors: [`${n + 1} mol`, `${n + 0.5} mol`, `${n * 2} mol`, `${Math.max(1, n - 1)} mol`],
    explanation: `Jumlah mol (n) = massa / Mr = ${massa} g ÷ 18 g/mol = ${n} mol`
  };
}

function genKimiaVolumeSTP() {
  const n = randInt(1, 3);
  const vol = Math.round(n * 22.4 * 10) / 10;
  return {
    type: 'Stoikiometri Gas (STP)',
    question: `Berapakah volume dari ${n} mol gas Oksigen (O₂) pada kondisi standar (STP, 0°C, 1 atm)?`,
    answer: `${vol} Liter`,
    distractors: [`${Math.round((vol + 2.2) * 10) / 10} Liter`, `${Math.round((vol - 4.4) * 10) / 10} Liter`, `44.8 Liter`, `11.2 Liter`],
    explanation: `Volume STP = n × 22,4 L = ${n} × 22,4 = ${vol} Liter`
  };
}

function genKimiaValensi() {
  const elements = [
    { name: 'Natrium (Na)', no: 11, val: '1', exp: 'Konfigurasi Na (Z=11): 2, 8, 1 ➔ Elektron valensi = 1' },
    { name: 'Magnesium (Mg)', no: 12, val: '2', exp: 'Konfigurasi Mg (Z=12): 2, 8, 2 ➔ Elektron valensi = 2' },
    { name: 'Aluminium (Al)', no: 13, val: '3', exp: 'Konfigurasi Al (Z=13): 2, 8, 3 ➔ Elektron valensi = 3' },
    { name: 'Klorin (Cl)', no: 17, val: '7', exp: 'Konfigurasi Cl (Z=17): 2, 8, 7 ➔ Elektron valensi = 7' },
    { name: 'Kalsium (Ca)', no: 20, val: '2', exp: 'Konfigurasi Ca (Z=20): 2, 8, 8, 2 ➔ Elektron valensi = 2' }
  ];
  const el = elements[randInt(0, elements.length - 1)];
  return {
    type: 'Konfigurasi Elektron',
    question: `Unsur ${el.name} memiliki nomor atom ${el.no}. Jumlah elektron valensinya adalah...`,
    answer: el.val,
    distractors: ['1', '2', '3', '5', '7'],
    explanation: el.exp
  };
}

function genKimiaPH() {
  const exp = randInt(2, 5);
  return {
    type: 'Asam-Basa & pH',
    question: `Suatu larutan asam kuat memiliki konsentrasi ion H⁺ sebesar 1 × 10^(-${exp}) M. Nilai pH larutan tersebut adalah...`,
    answer: String(exp),
    distractors: [String(exp + 1), String(exp - 1), String(14 - exp), String(exp + 2)],
    explanation: `pH = -log[H⁺] = -log(10^(-${exp})) = ${exp}`
  };
}

function genKimiaSelVolta() {
  const E_katoda = 0.34; // Cu
  const E_anoda = -0.76; // Zn
  const E_sel = Math.round((E_katoda - E_anoda) * 100) / 100;
  return {
    type: 'Elektrokimia (Sel Volta)',
    question: `Diketahui E° Cu²⁺/Cu = +0,34 V dan E° Zn²⁺/Zn = -0,76 V. Potensial sel standar (E° sel) untuk reaksi Zn + Cu²⁺ ➔ Zn²⁺ + Cu adalah...`,
    answer: `+${E_sel} V`,
    distractors: ['-1,10 V', '+0,42 V', '-0,42 V', '+1,52 V'],
    explanation: `E° sel = E° katoda - E° anoda = (+0,34 V) - (-0,76 V) = +1,10 V`
  };
}

function genKimiaKoligatif() {
  const gram = randInt(1, 3) * 18;
  const mol = gram / 180;
  const air = 500;
  const m = (mol * 1000) / air;
  const Kb = 0.52;
  const dTb = Math.round(m * Kb * 1000) / 1000;
  const Tb = Math.round((100 + dTb) * 1000) / 1000;
  return {
    type: 'Sifat Koligatif Larutan (Titik Didih)',
    question: `Sebanyak ${gram} gram glukosa (Mr = 180 g/mol) dilarutkan ke dalam 500 gram air murni (Kb air = 0,52 °C/m). Titik didih larutan tersebut adalah...`,
    answer: `${Tb} °C`,
    distractors: [`${Math.round((Tb + 0.1) * 1000) / 1000} °C`, `${Math.round((Tb - 0.05) * 1000) / 1000} °C`, `${dTb} °C`, `100,520 °C`],
    explanation: `Molalitas m = (${gram}/180) × (1000/500) = ${mol} × 2 = ${m} m.\nΔTb = m × Kb = ${m} × 0,52 = ${dTb} °C.\nTitik didih larutan Tb = 100 + ${dTb} = ${Tb} °C.`
  };
}

function genKimiaFaraday() {
  const Ar = 63.5;
  const n = 2;
  const e = Ar / n;
  const i = 10;
  const t = 965;
  const w = Math.round(e * (i * t / 96500) * 1000) / 1000;
  return {
    type: 'Elektrokimia (Hukum I Faraday)',
    question: `Pada elektrolisis larutan tembaga(II) sulfat (CuSO₄) dialirkan arus listrik sebesar ${i} Ampere selama ${t} detik. Massa tembaga (Ar Cu = 63,5 g/mol) yang terendapkan di katoda adalah...`,
    answer: `${w} gram`,
    distractors: [`${Math.round((w * 2) * 1000) / 1000} gram`, `${Math.round((w / 2) * 1000) / 1000} gram`, `6,35 gram`, `1,58 gram`],
    explanation: `w = (e · i · t) / 96.500\ne Cu = Ar / valensi = 63,5 / 2 = 31,75\nw = (31,75 × ${i} × ${t}) / 96.500 = ${w} gram`
  };
}

export function generateKimiaQuestion(kelas = 10, level = 'sedang', chapter = 0) {
  let pool = [genKimiaMol, genKimiaVolumeSTP, genKimiaValensi];
  if (kelas === 11) pool = [genKimiaPH, genKimiaMol, genKimiaVolumeSTP];
  if (kelas === 12) {
    if (chapter === 1) pool = [genKimiaPH, genKimiaKoligatif];
    else if (chapter === 2) pool = [genKimiaSelVolta, genKimiaFaraday];
    else pool = [genKimiaPH, genKimiaKoligatif, genKimiaSelVolta, genKimiaFaraday];
  }

  const fn = pool[randInt(0, pool.length - 1)];
  const res = fn();
  res.choices = generateMathChoices(res.answer, res.distractors);
  res.level = level;
  return res;
}

// ==========================================
// BIOLOGI GENERATOR: GENETIKA MENDEL (KELAS 12)
// ==========================================

export function generateBiologiMendelQuestion(subType = 0) {
  let res;
  const isDihibrid = subType === 2 ? true : (subType === 1 ? false : Math.random() > 0.5);
  if (isDihibrid) {
    // Dihibrid
    const isCount = Math.random() > 0.5;
    if (isCount) {
      const multiplier = randInt(10, 30);
      const total = multiplier * 16; // kelipatan 16
      const answerVal = multiplier * 9; // Bulat Kuning = 9/16 * total
      res = {
        type: 'Genetika Mendel: Persilangan Dihibrid',
        question: `Persilangan dihibrid heterozigot mandiri (BbKk × BbKk) menghasilkan ${total} keturunan. Berapakah perkiraan jumlah anakan dengan fenotipe Bulat Kuning (sifat dominan ganda)?`,
        answer: `${answerVal} tanaman`,
        distractors: [
          `${multiplier * 3} tanaman`,
          `${multiplier * 1} tanaman`,
          `${multiplier * 6} tanaman`,
          `${Math.round(total / 2)} tanaman`
        ],
        explanation: `Rasio fenotipe dihibrid F₂ = 9 (Bulat Kuning) : 3 (Bulat Hijau) : 3 (Kisut Kuning) : 1 (Kisut Hijau).\nJumlah Bulat Kuning = (9/16) × ${total} = ${answerVal} tanaman.`
      };
    } else {
      res = {
        type: 'Genetika Mendel: Rasio Fenotipe Dihibrid',
        question: `Rasio perbandingan fenotipe keturunan F₂ pada persilangan dihibrid dominan penuh menurut Hukum Mendel II adalah...`,
        answer: '9 : 3 : 3 : 1',
        distractors: ['3 : 1', '1 : 2 : 1', '9 : 7', '15 : 1'],
        explanation: `Hukum Asortasi Bebas Mendel (Dihibrid) menghasilkan rasio fenotipe klasik 9 : 3 : 3 : 1 pada generasi F₂.`
      };
    }
  } else {
    // Bab 1: Monohibrid
    const isCount = Math.random() > 0.5;
    if (isCount) {
      const multiplier = randInt(25, 75);
      const total = multiplier * 4; // kelipatan 4
      const dominantCount = multiplier * 3;
      res = {
        type: 'Genetika Mendel: Persilangan Monohibrid',
        question: `Kacang ercis berbiji bulat heterozigot (Bb) disilangkan sesamanya (Bb × Bb) dan menghasilkan ${total} anakan. Berapakah jumlah anakan yang diperkirakan berfenotipe biji bulat?`,
        answer: `${dominantCount} anakan`,
        distractors: [
          `${multiplier * 1} anakan`,
          `${multiplier * 2} anakan`,
          `${Math.round(total * 0.8)} anakan`,
          `${total} anakan`
        ],
        explanation: `Pada persilangan Bb × Bb, peluang fenotipe dominan (biji bulat: BB, Bb, Bb) adalah 3/4.\nJumlah biji bulat = (3/4) × ${total} = ${dominantCount} anakan.`
      };
    } else {
      const qTypes = [
        {
          q: 'Pada persilangan monohibrid dominan penuh (Bb × Bb), berapakah perbandingan rasio FENOTIPE pada generasi F₂?',
          a: '3 : 1',
          d: ['1 : 2 : 1', '9 : 3 : 3 : 1', '1 : 1', '2 : 1'],
          exp: 'Rasio fenotipe F₂ monohibrid dominan penuh adalah 3 dominan : 1 resesif (3 : 1).'
        },
        {
          q: 'Pada persilangan monohibrid (Bb × Bb), berapakah perbandingan rasio GENOTIPE (BB : Bb : bb) pada generasi F₂?',
          a: '1 : 2 : 1',
          d: ['3 : 1', '9 : 3 : 3 : 1', '1 : 1', '2 : 1 : 1'],
          exp: 'Rasio genotipe F₂ monohibrid adalah 1 BB : 2 Bb : 1 bb (1 : 2 : 1).'
        }
      ];
      const item = qTypes[randInt(0, qTypes.length - 1)];
      res = {
        type: 'Genetika Mendel: Rasio Monohibrid',
        question: item.q,
        answer: item.a,
        distractors: item.d,
        explanation: item.exp
      };
    }
  }

  res.choices = generateMathChoices(res.answer, res.distractors);
  res.level = 'sedang';
  return res;
}
