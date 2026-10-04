export const MATERI_FISIKA_12 = [
  {
    id: 1,
    title: "Bab 1: Listrik Statis (Gaya Coulomb, Medan Listrik, Potensial & Kapasitor)",
    summary: "Mempelajari gaya antarmuatan, medan listrik, potensial listrik, dan penyimpanan energi pada kapasitor.",
    sections: [
      {
        heading: "Hukum Coulomb",
        paragraphs: [
          "Dua muatan listrik q₁ dan q₂ saling menarik atau menolak dengan gaya yang besarnya berbanding lurus dengan hasil kali kedua muatan dan berbanding terbalik dengan kuadrat jarak antar keduanya. Gaya itu bekerja sepanjang garis penghubung kedua muatan dan tergolong gaya jarak jauh.",
          "Jarak sangat memengaruhi besarnya gaya. Bila jarak antara kedua muatan digandakan, gaya Coulomb menjadi seperempat dari nilai semula."
        ],
        list: [
          "Gaya tarik terjadi antara muatan sejenis, sedangkan gaya tolak terjadi antara muatan berbeda jenis.",
          "k = 9 × 10⁹ N·m²/C² disebut konstanta Coulomb.",
          "Hukum Coulomb dipakai pada keadaan listrik statis, yaitu muatan yang diam atau bergerak sangat lambat.",
          "Makin besar muatan dan makin kecil jaraknya, makin besar gaya yang bekerja antara keduanya."
        ]
      },
      {
        heading: "Medan Listrik",
        paragraphs: [
          "Medan listrik adalah ruang di sekitar suatu muatan tempat muatan lain mengalami gaya listrik. Besarnya medan listrik didefinisikan sebagai gaya per satuan muatan uji, yaitu E = F/q.",
          "Medan listrik digambarkan dengan garis khayal yang keluar dari muatan positif dan masuk ke muatan negatif. Arah medan selalu sama dengan arah gaya yang dialami muatan uji positif."
        ],
        list: [
          "Satuan medan listrik adalah N/C, yang setara dengan V/m.",
          "Garis medan yang makin rapat menandakan medan listrik yang makin kuat.",
          "Untuk muatan titik berlaku E = k·Q/r², sedangkan untuk pelat sejajar medannya seragam dan besarnya E = σ/ε₀.",
          "Medan listrik adalah besaran vektor, sehingga untuk banyak muatan digunakan aturan superposisi dengan penjumlahan vektor."
        ]
      },
      {
        heading: "Potensial Listrik dan Energi Potensial",
        paragraphs: [
          "Potensial listrik adalah energi potensial per satuan muatan uji, V = E_p/q, sehingga nilainya tidak bergantung pada besar muatan uji. Satuannya volt (V), yaitu joule per coulomb.",
          "Memindahkan muatan positif menuju muatan positif lain memerlukan usaha sehingga energi potensialnya bertambah. Muatan bergerak sendiri dari titik berpotensial tinggi ke titik berpotensial rendah."
        ],
        list: [
          "Hubungan usaha dan selisih potensial: W = q·ΔV = q·(V_B − V_A).",
          "Untuk muatan titik berlaku V = k·Q/r, bernilai positif jika Q positif.",
          "Pada medan listrik seragam berlaku ΔV = E·d dengan d adalah jarak sepanjang arah medan.",
          "Elektron yang bergerak dari potensial rendah menuju potensial tinggi memperoleh energi kinetik."
        ]
      },
      {
        heading: "Kapasitor dan Energi Tersimpan",
        paragraphs: [
          "Kapasitor adalah komponen yang mampu menyimpan muatan listrik pada dua pelat yang berdekatan dan dipisahkan oleh bahan dielektrik. Kapasitas didefinisikan sebagai C = Q/V dan dinyatakan dalam farad (F).",
          "Kapasitor dipakai untuk menyaring arus, menyimpan energi, serta mengatur waktu pada rangkaian elektronika. Bila kapasitor dirangkai, kapasitas totalnya bergantung pada susunan seri atau paralelnya."
        ],
        list: [
          "Kapasitor paralel: C_total = C₁ + C₂ + ... + Cₙ.",
          "Kapasitor seri: 1/C_total = 1/C₁ + 1/C₂ + ... + 1/Cₙ.",
          "Energi tersimpan dalam kapasitor U = ½·C·V² = ½·Q·V = Q²/(2C).",
          "Memasukkan bahan dielektrik berkonstanta κ membuat kapasitas menjadi C = κ·C₀."
        ]
      }
    ],
    formulas: [
      {
        label: "Hukum Coulomb",
        expr: "F = k · (q₁ · q₂) / r²",
        note: "F dalam newton, q dalam coulomb, r dalam meter, dan k = 9 × 10⁹ N·m²/C²."
      },
      {
        label: "Medan listrik",
        expr: "E = F / q = k · Q / r²",
        note: "E dalam N/C atau V/m; bentuk kedua berlaku untuk medan di sekitar muatan titik Q."
      },
      {
        label: "Potensial listrik",
        expr: "V = k · Q / r   dan   ΔV = E · d",
        note: "V dalam volt; ΔV adalah selisih potensial dua titik pada medan listrik seragam."
      },
      {
        label: "Gaya dan energi potensial",
        expr: "W = q · ΔV   dan   E_p = q · V",
        note: "W dan E_p dalam joule, q dalam coulomb, ΔV dalam volt."
      },
      {
        label: "Kapasitas kapasitor",
        expr: "C = Q / V",
        note: "C dalam farad (F); 1 F = 1 C/V; pada praktik dipakai μF = 10⁻⁶ F dan pF = 10⁻¹² F."
      },
      {
        label: "Energi tersimpan kapasitor",
        expr: "U = ½ · C · V² = ½ · Q · V = Q² / (2 C)",
        note: "U dalam joule; besarnya sama dengan usaha yang diperlukan untuk mengisi kapasitor."
      }
    ],
    examples: [
      {
        question: "Dua muatan positif q₁ = 3 μC dan q₂ = 5 μC berjarak 0,3 m satu sama lain. Hitung besar gaya yang bekerja antara keduanya.",
        steps: [
          "Diketahui: q₁ = 3 μC = 3 × 10⁻⁶ C, q₂ = 5 μC = 5 × 10⁻⁶ C, r = 0,3 m, k = 9 × 10⁹ N·m²/C².",
          "Rumus: F = k · (q₁ · q₂) / r².",
          "Penyelesaian: F = (9 × 10⁹ × 3 × 10⁻⁶ × 5 × 10⁻⁶) / (0,3)².",
          "F = (9 × 10⁹ × 15 × 10⁻¹²) / 0,09 = 0,135 / 0,09 = 1,5 N.",
          "Karena kedua muatan sama-sama positif, arah gayanya adalah saling menolak."
        ],
        answer: "Jadi gaya tolak antara kedua muatan adalah 1,5 N."
      },
      {
        question: "Sebuah kapasitor berkapasitas 4 μF diberi tegangan 12 V. Hitung muatan yang tersimpan dan energi yang tersimpan pada kapasitor tersebut.",
        steps: [
          "Diketahui: C = 4 μF = 4 × 10⁻⁶ F, V = 12 V.",
          "Rumus: Q = C · V untuk muatan dan U = ½ · C · V² untuk energi.",
          "Penyelesaian muatan: Q = 4 × 10⁻⁶ × 12 = 48 × 10⁻⁶ C = 48 μC.",
          "Penyelesaian energi: U = ½ × 4 × 10⁻⁶ × 12² = ½ × 4 × 10⁻⁶ × 144 = 288 × 10⁻⁶ J.",
          "Energi tersimpan menjadi U = 2,88 × 10⁻⁴ J."
        ],
        answer: "Jadi muatan yang tersimpan adalah 48 μC dan energi yang tersimpan adalah 2,88 × 10⁻⁴ J."
      }
    ],
    tips: [
      "Hafalkan nilai k = 9 × 10⁹ N·m²/C² dan ubah semua muatan ke coulomb sebelum memasukkan angka ke rumus.",
      "Gambar dulu arah gaya pada tiap muatan, baru tentukan besar dan arah resultan gayanya.",
      "Ingat bedanya potensial listrik V dengan energi potensial E_p, yaitu V = E_p/q.",
      "Latih soal rangkaian kapasitor seri dan paralel secara berurutan sebelum menghitung energinya."
    ]
  },
  {
    id: 2,
    title: "Bab 2: Listrik Arus Searah (Hukum Ohm, Hukum Kirchhoff & Hambatan)",
    summary: "Membahas kuat arus, hukum Ohm, rangkaian seri dan paralel, hukum Kirchhoff, serta daya listrik.",
    sections: [
      {
        heading: "Kuat Arus dan Hukum Ohm",
        paragraphs: [
          "Kuat arus listrik adalah banyaknya muatan listrik yang mengalir tiap sekon, yaitu I = Q/t, dengan satuan ampere (A). Pada rangkaian luar, arus konvensional mengalir dari terminal positif menuju terminal negatif sumber.",
          "Hukum Ohm menyatakan bahwa tegangan pada suatu penghantar sebanding dengan kuat arus yang mengalir, selama hambatan dan suhu penghantar tetap, sehingga diperoleh V = I · R."
        ],
        list: [
          "Satuan kuat arus ampere (A), tegangan volt (V), dan hambatan ohm (Ω).",
          "1 A = 1 C/s dan 1 Ω = 1 V/A.",
          "Grafik tegangan terhadap arus pada hambatan ohmik berupa garis lurus yang melalui titik asal.",
          "Hambatan sebanding dengan panjang penghantar dan berbanding terbalik dengan luas penampangnya."
        ]
      },
      {
        heading: "Rangkaian Seri, Paralel dan Hambatan Penghantar",
        paragraphs: [
          "Pada rangkaian seri, kuat arus sama pada semua hambatan, sedangkan tegangan terbagi sebanding dengan besar hambatan. Pada rangkaian paralel, tegangan sama pada semua cabang, sedangkan arus terbagi sebanding terbalik dengan hambatan tiap cabang.",
          "Hambatan sepanjang kawat bergantung pada resistivitas bahan, panjang kawat, dan luas penampang kawat. Bahan tertentu seperti nikelin memiliki resistivitas yang jauh lebih besar daripada tembaga."
        ],
        list: [
          "Rangkaian seri: R_total = R₁ + R₂ + ... + Rₙ.",
          "Rangkaian paralel: 1/R_total = 1/R₁ + 1/R₂ + ... + 1/Rₙ.",
          "Untuk dua hambatan paralel berlaku R_total = (R₁ · R₂)/(R₁ + R₂).",
          "Tegangan pada rangkaian seri terbagi: V = V₁ + V₂ + ... + Vₙ.",
          "Arus pada rangkaian paralel terbagi: I = I₁ + I₂ + ... + Iₙ."
        ]
      },
      {
        heading: "Hukum Kirchhoff",
        paragraphs: [
          "Hukum Kirchhoff I atau hukum simpul menyatakan bahwa jumlah arus yang masuk sama dengan jumlah arus yang keluar pada suatu simpul. Hukum Kirchhoff II atau hukum loop menyatakan bahwa jumlah GGL pada suatu loop tertutup sama dengan jumlah penurunan tegangan.",
          "Kedua hukum ini dipakai untuk menganalisis rangkaian yang rumit, terutama rangkaian yang memiliki lebih dari satu sumber tegangan atau percabangan arus yang banyak."
        ],
        list: [
          "Hukum simpul: ΣI_masuk = ΣI_keluar pada setiap simpul.",
          "Hukum loop: ΣV_loop = 0, artinya jumlah kenaikan tegangan sama dengan jumlah penurunan tegangan.",
          "Sumber tegangan berhambatan dalam memiliki tegangan terminal V = ε − I·r.",
          "Tentukan arah arus dan arah putaran loop secara konsisten sebelum menyusun persamaan loop."
        ]
      },
      {
        heading: "Daya dan Energi Listrik",
        paragraphs: [
          "Daya listrik adalah laju energi listrik yang diubah oleh suatu perangkat, yaitu P = V · I, dengan satuan watt (W). Energi yang dipakai suatu peralatan dihitung dengan E = P · t dan pada tagihan listrik dicatat dalam kilowatt-jam (kWh).",
          "Sebagian daya berubah menjadi panas pada hambatan, hal yang dimanfaatkan pada lampu pemanas dan setrika, namun merugikan pada pengaliran daya melalui kabel transmisi."
        ],
        list: [
          "P = V · I = I² · R = V²/R.",
          "E = P · t dengan 1 kWh = 3,6 × 10⁶ J.",
          "Tegangan terminal sumber: V_terminal = ε − I·r.",
          "Efisiensi dihitung sebagai daya keluar dibagi daya masuk, lalu dikalikan 100 persen."
        ]
      }
    ],
    formulas: [
      {
        label: "Kuat arus listrik",
        expr: "I = Q / t",
        note: "I dalam ampere (A), Q dalam coulomb (C), t dalam sekon (s)."
      },
      {
        label: "Hukum Ohm",
        expr: "V = I · R",
        note: "V dalam volt, I dalam ampere, R dalam ohm (Ω)."
      },
      {
        label: "Hambatan sepanjang penghantar",
        expr: "R = ρ · L / A",
        note: "ρ adalah resistivitas dalam Ω·m, L panjang dalam meter, A luas penampang dalam m²."
      },
      {
        label: "Kombinasi hambatan",
        expr: "R_seri = R₁ + R₂ + ... + Rₙ   dan   1/R_par = 1/R₁ + 1/R₂ + ... + 1/Rₙ",
        note: "Untuk dua hambatan paralel berlaku R_par = (R₁ · R₂)/(R₁ + R₂)."
      },
      {
        label: "Hukum Kirchhoff",
        expr: "ΣI_masuk = ΣI_keluar   dan   ΣV_loop = 0",
        note: "Hukum I berlaku pada simpul, hukum II berlaku pada setiap loop tertutup."
      },
      {
        label: "Daya dan energi listrik",
        expr: "P = V · I = I² · R = V² / R   dan   E = P · t",
        note: "P dalam watt, E dalam joule; 1 kWh = 3,6 × 10⁶ J."
      }
    ],
    examples: [
      {
        question: "R₁ = 4 Ω dan R₂ = 6 Ω disusun paralel, lalu diseri dengan R₃ = 3,6 Ω. Rangkaian dihubungkan ke sumber tegangan 12 V. Hitung arus total dan daya yang dikeluarkan sumber.",
        steps: [
          "Diketahui: R₁ = 4 Ω, R₂ = 6 Ω disusun paralel, R₃ = 3,6 Ω diseri, V = 12 V.",
          "Rumus: R_par = (R₁ · R₂)/(R₁ + R₂), R_total = R_par + R₃, I = V/R_total, P = V · I.",
          "Penyelesaian hambatan paralel: R_par = (4 × 6)/(4 + 6) = 24/10 = 2,4 Ω.",
          "Hambatan total: R_total = 2,4 + 3,6 = 6 Ω, sehingga arus I = 12/6 = 2 A.",
          "Daya yang dikeluarkan sumber: P = 12 × 2 = 24 W."
        ],
        answer: "Jadi arus total rangkaian adalah 2 A dan daya yang dikeluarkan sumber adalah 24 W."
      },
      {
        question: "Sebuah baterai ber-GGL 12 V memiliki hambatan dalam 1 Ω dan dihubungkan kepada hambatan luar 5 Ω. Hitung arus pada rangkaian dan tegangan terminal baterai.",
        steps: [
          "Diketahui: ε = 12 V, r = 1 Ω, R = 5 Ω.",
          "Rumus: I = ε/(R + r) dan V_terminal = ε − I·r.",
          "Penyelesaian hambatan total: R_total = 5 + 1 = 6 Ω.",
          "Kuat arus: I = 12/6 = 2 A.",
          "Tegangan terminal: V_terminal = 12 − (2 × 1) = 10 V."
        ],
        answer: "Jadi arus pada rangkaian adalah 2 A dan tegangan terminal baterai adalah 10 V."
      }
    ],
    tips: [
      "Tentukan dahulu apakah hambatan disusun seri atau paralel sebelum menghitung hambatan penggantinya.",
      "Pada hukum Kirchhoff, tuliskan arah loop dan arah arus pilihanmu secara konsisten agar tanda persamaan tidak tertukar.",
      "Ubah semua satuan ke satuan SI terlebih dahulu, yaitu ohm, volt, ampere, dan sekon.",
      "Gunakan P = I²R untuk menghitung daya hilang pada kabel transmisi karena arus dikuadratkan."
    ]
  },
  {
    id: 3,
    title: "Bab 3: Kemagnetan (Medan Magnet Kawat, Gaya Lorentz & GGL Induksi)",
    summary: "Mempelajari medan magnet akibat arus, gaya Lorentz, induksi elektromagnetik, dan transformator.",
    sections: [
      {
        heading: "Medan Magnet Akibat Arus Listrik",
        paragraphs: [
          "Arus listrik menghasilkan medan magnet di sekitarnya. Arah medan magnet di sekitar kawat lurus dapat ditentukan dengan aturan genggam kanan, yaitu ibu jari searah arus dan jari-jari yang melingkari kawat menunjukkan arah garis medan.",
          "Besar medan magnet pada suatu titik sebanding dengan kuat arus dan berbanding terbalik dengan jarak titik itu dari kawat. Medan menjadi jauh lebih kuat bila kawat dililitkan menjadi solenoida."
        ],
        list: [
          "Garis medan magnet selalu berupa kurva tertutup dan tidak pernah berpotongan.",
          "Pada kawat lurus panjang, medan magnet sebanding dengan I dan berbanding terbalik dengan jarak dari kawat.",
          "Pada solenoida berlaku B = μ₀ · n · I, dengan n adalah jumlah lilitan per meter.",
          "Muatan diam tidak mengalami gaya magnet, hanya muatan yang bergerak yang mengalami gaya magnet.",
          "Kelajuan medan magnet di ruang hampa sama dengan kelajuan cahaya, yaitu 3 × 10⁸ m/s."
        ]
      },
      {
        heading: "Gaya Lorentz dan Gaya Magnet pada Kawat",
        paragraphs: [
          "Gaya Lorentz adalah gaya yang dialami muatan bergerak yang berada dalam medan magnet. Arah gaya selalu tegak lurus terhadap arah gerak muatan dan arah medan magnet, sehingga gaya ini tidak mengubah besar kecepatan, hanya mengubah arah lintasan.",
          "Karena selalu tegak lurus kecepatan, partikel bermuatan bergerak melingkar dengan jari-jari tertentu. Pada kawat berarus yang berada dalam medan magnet muncul gaya total, prinsip yang dipakai pada motor listrik."
        ],
        list: [
          "Gaya Lorentz pada muatan: F = q · v · B · sin θ, dengan θ sudut antara v dan B.",
          "Bila kecepatan sejajar medan magnet, gaya magnet yang dialami muatan bernilai nol.",
          "Gaya magnet pada kawat berarus: F = B · I · L · sin θ.",
          "Arah gaya ditentukan dengan aturan tangan kanan untuk v × B atau aturan tangan kiri untuk kawat berarus.",
          "Partikel bermuatan yang masuk medan magnet tegak lurus bergerak melingkar dengan jari-jari r = m·v/(q·B)."
        ]
      },
      {
        heading: "Induksi Elektromagnetik (Faraday dan Lenz)",
        paragraphs: [
          "Hukum Faraday menyatakan bahwa GGL induksi sebanding dengan laju perubahan fluks magnetik yang memotong kumparan. Semakin cepat fluks magnetik berubah, semakin besar GGL yang diinduksikan.",
          "Hukum Lenz menyatakan bahwa arah arus induksi selalu melawan perubahan yang menyebabkannya. Aturan ini merupakan wujud kekekalan energi, yaitu energi tidak dapat diciptakan dan tidak dapat dimusnahkan."
        ],
        list: [
          "Fluks magnetik: Φ = B · A · cos θ, dengan satuan weber (Wb).",
          "GGL induksi rata-rata: ε = N · ΔΦ/Δt, dengan N jumlah lilitan.",
          "GGL muncul bila luas kumparan berubah, medan magnet berubah, atau kumparan diputar.",
          "Mendekatkan atau menjauhkan magnet terhadap kumparan juga menghasilkan arus induksi.",
          "Arah arus induksi selalu berusaha mempertahankan nilai fluks magnetik awal."
        ]
      },
      {
        heading: "Transformator dan Pemanfaatan Induksi",
        paragraphs: [
          "Transformator bekerja berdasarkan induksi elektromagnetik untuk menaikkan atau menurunkan tegangan arus bolak-balik. Rasio tegangan sama dengan rasio jumlah lilitan kumparan primer dan sekunder.",
          "Transformator sangat penting pada sistem transmisi listrik karena tegangan yang tinggi mengurangi kehilangan daya pada kabel. Prinsip yang sama dipakai pada dinamo, generator, dan pengisi daya perangkat elektronik."
        ],
        list: [
          "Hubungan tegangan transformator: V_p/V_s = N_p/N_s.",
          "Pada transformator ideal, daya primer sama dengan daya sekunder, yaitu V_p·I_p = V_s·I_s.",
          "Transformator naik tegangan memiliki N_s lebih besar daripada N_p, sedangkan transformator turun tegangan sebaliknya.",
          "Transformator hanya bekerja pada arus bolak-balik karena fluks magnetiknya terus berubah."
        ]
      }
    ],
    formulas: [
      {
        label: "Gaya magnet pada kawat berarus",
        expr: "F = B · I · L · sin θ",
        note: "F dalam newton, B dalam tesla (T), I dalam ampere, L dalam meter."
      },
      {
        label: "Gaya Lorentz pada muatan",
        expr: "F = q · v · B · sin θ",
        note: "q dalam coulomb, v dalam m/s; gaya selalu tegak lurus terhadap v dan B."
      },
      {
        label: "Fluks magnetik",
        expr: "Φ = B · A · cos θ",
        note: "Φ dalam weber (Wb); 1 Wb = 1 T·m²; θ adalah sudut antara B dan normal bidang A."
      },
      {
        label: "GGL induksi (Faraday dan Lenz)",
        expr: "ε = N · (ΔΦ / Δt)",
        note: "ε dalam volt; tanda negatif menunjukkan arah arus induksi melawan perubahan fluks."
      },
      {
        label: "Rasio transformator",
        expr: "V_p / V_s = N_p / N_s",
        note: "P adalah primer dan s adalah sekunder; pada transformator ideal berlaku V_p·I_p = V_s·I_s."
      },
      {
        label: "Jari-jari lintasan partikel bermuatan",
        expr: "r = m · v / (q · B)",
        note: "Berlaku bila partikel masuk tegak lurus medan magnet; m dalam kg, v dalam m/s."
      }
    ],
    examples: [
      {
        question: "Sebuah kawat berarus 4 A sepanjang 0,3 m diletakkan dalam medan magnet seragam 0,5 T dengan sudut 30° terhadap arah medan. Hitung besar gaya magnet yang dialami kawat itu.",
        steps: [
          "Diketahui: I = 4 A, L = 0,3 m, B = 0,5 T, θ = 30°, dan sin 30° = 0,5.",
          "Rumus: F = B · I · L · sin θ.",
          "Penyelesaian: F = 0,5 × 4 × 0,3 × 0,5.",
          "F = 1,2 × 0,5 = 0,3 N."
        ],
        answer: "Jadi gaya magnet yang dialami kawat adalah 0,3 N."
      },
      {
        question: "Sebuah kumparan berisi 200 lilitan mengalami perubahan fluks magnetik dari 0,02 Wb menjadi 0,06 Wb selama 0,01 sekon. Hitung GGL induksi yang muncul pada kumparan itu.",
        steps: [
          "Diketahui: N = 200, Φ_awal = 0,02 Wb, Φ_akhir = 0,06 Wb, Δt = 0,01 s.",
          "Rumus: ε = N · ΔΦ/Δt.",
          "Penyelesaian perubahan fluks: ΔΦ = 0,06 − 0,02 = 0,04 Wb.",
          "ε = 200 × 0,04/0,01 = 200 × 4 = 800 V."
        ],
        answer: "Jadi GGL induksi yang muncul pada kumparan adalah 800 V."
      }
    ],
    tips: [
      "Gunakan aturan tangan kanan untuk arah medan kawat dan aturan tangan kiri untuk arah gaya, lalu latih pada sketsa sederhana.",
      "Ingat bahwa gaya Lorentz tegak lurus kecepatan sehingga tidak mengubah energi kinetik partikel.",
      "Pada soal induksi, perhatikan apakah yang berubah adalah B, luas A, atau sudut θ karena ketiganya memengaruhi fluks.",
      "Ingat transformator hanya bekerja pada arus bolak-balik, bukan pada arus searah."
    ]
  },
  {
    id: 4,
    title: "Bab 4: Arus Bolak-Balik / AC (Resistor, Induktor, Kapasitor & Rangkaian RLC)",
    summary: "Mempelajari arus bolak-balik, reaktansi, rangkaian RLC, resonansi, dan daya pada AC.",
    sections: [
      {
        heading: "Arus dan Tegangan Bolak-Balik",
        paragraphs: [
          "Arus bolak-balik adalah arus yang besar dan arahnya berubah secara periodik, biasanya berbentuk sinusoidal. Pada jaringan listrik rumah tangga yang dicantumkan adalah nilai efektif, yaitu tegangan yang menghasilkan pemanasan sama dengan tegangan searah setara.",
          "Frekuensi jaringan listrik di Indonesia adalah 50 Hz, artinya arus berubah arah 100 kali tiap sekon. Besaran bolak-balik dinyatakan dalam nilai puncak dan nilai efektif (rms)."
        ],
        list: [
          "Tegangan dan arus bolak-balik dapat ditulis V = V_m · sin ωt.",
          "Nilai efektif: V_rms = V_m/√2 ≈ 0,707 · V_m.",
          "Frekuensi f = 1/T dan frekuensi sudut ω = 2πf.",
          "Arus searah memiliki arah tetap, sedangkan arus bolak-balik berubah arah secara periodik."
        ]
      },
      {
        heading: "Resistor, Kapasitor dan Induktor pada AC",
        paragraphs: [
          "Resistor, kapasitor, dan induktor memiliki cara khas menahan arus bolak-balik. Resistor menahan arus melalui hambatan biasa, induktor melalui reaktansi induktif, dan kapasitor melalui reaktansi kapasitif.",
          "Tegangan pada resistor sefase dengan arusnya, tegangan pada induktor mendahului arus 90 derajat, dan tegangan pada kapasitor tertinggal arus 90 derajat. Perbedaan fase ini menyebabkan munculnya impedansi."
        ],
        list: [
          "Reaktansi induktif: X_L = ωL = 2πfL, satuan ohm.",
          "Reaktansi kapasitif: X_C = 1/(ωC) = 1/(2πfC), satuan ohm.",
          "Reaktansi induktor makin besar bila frekuensi makin tinggi, sedangkan reaktansi kapasitor sebaliknya.",
          "Resistor tidak mengubah beda fase antara tegangan dan arusnya."
        ]
      },
      {
        heading: "Rangkaian RLC dan Resonansi",
        paragraphs: [
          "Rangkaian RLC adalah rangkaian yang menggabungkan resistor, induktor, dan kapasitor dalam satu rangkaian seri. Impedansinya merupakan gabungan hambatan dengan reaktansi bersih, sehingga arus yang mengalir lebih kecil daripada pada resistor murni.",
          "Pada frekuensi tertentu reaktansi induktor dan kapasitor saling meniadakan sehingga impedansi menjadi minimum sama dengan R dan arus menjadi maksimum. Keadaan ini disebut resonansi dan menjadi dasar kerja radio serta televisi dalam memilih stasiun."
        ],
        list: [
          "Impedansi rangkaian seri: Z = √(R² + (X_L − X_C)²).",
          "Arus efektif: I_rms = V_rms/Z.",
          "Resonansi terjadi bila X_L = X_C, sehingga impedansi minimum sama dengan R.",
          "Frekuensi resonansi: f₀ = 1/(2π√(L · C)).",
          "Faktor daya cos φ = R/Z, dengan φ adalah beda fase tegangan dan arus."
        ]
      },
      {
        heading: "Daya dalam Rangkaian AC",
        paragraphs: [
          "Daya rata-rata pada rangkaian AC diperoleh dari perkalian tegangan efektif, arus efektif, dan faktor daya. Hanya resistor yang menyerap daya rata-rata, sedangkan induktor dan kapasitor hanya menyalurkan lalu mengembalikan energinya.",
          "Faktor daya yang rendah membuat arus mengalir lebih besar tanpa bertambahnya daya yang bermanfaat, sehingga perusahaan listrik mewajibkan koreksi faktor daya pada konsumen besar."
        ],
        list: [
          "P = V_rms · I_rms · cos φ.",
          "cos φ = R/Z disebut faktor daya, bernilai antara nol dan satu.",
          "Daya rata-rata pada resistor: P = I_rms² · R.",
          "Induktor dan kapasitor ideal tidak mengubah energi menjadi panas."
        ]
      }
    ],
    formulas: [
      {
        label: "Tegangan bolak-balik",
        expr: "V = V_m · sin ωt   dan   V_rms = V_m / √2",
        note: "V_m nilai puncak dalam volt, V_rms nilai efektif dalam volt."
      },
      {
        label: "Frekuensi sudut",
        expr: "ω = 2πf = 2π / T",
        note: "ω dalam rad/s, f dalam hertz, T periode dalam sekon."
      },
      {
        label: "Reaktansi induktor dan kapasitor",
        expr: "X_L = ωL   dan   X_C = 1 / (ωC)",
        note: "X_L dan X_C dalam ohm (Ω); L dalam henri (H), C dalam farad (F)."
      },
      {
        label: "Impedansi rangkaian seri RLC",
        expr: "Z = √(R² + (X_L − X_C)²)",
        note: "Z dalam ohm; nilai Z selalu lebih besar atau sama dengan R."
      },
      {
        label: "Frekuensi resonansi RLC",
        expr: "f₀ = 1 / (2π √(L · C))",
        note: "Berlaku bila X_L = X_C sehingga arus mencapai nilai maksimum."
      },
      {
        label: "Daya rata-rata AC",
        expr: "P = V_rms · I_rms · cos φ",
        note: "P dalam watt; cos φ = R/Z disebut faktor daya."
      }
    ],
    examples: [
      {
        question: "Pada rangkaian seri AC berfrekuensi 50 Hz diketahui R = 30 Ω, X_L = 50 Ω, dan X_C = 10 Ω dengan tegangan efektif 100 V. Hitung impedansi, arus efektif, dan daya rata-rata yang diterima rangkaian.",
        steps: [
          "Diketahui: R = 30 Ω, X_L = 50 Ω, X_C = 10 Ω, V_rms = 100 V.",
          "Rumus: Z = √(R² + (X_L − X_C)²), I_rms = V_rms/Z, dan P = V_rms · I_rms · cos φ dengan cos φ = R/Z.",
          "Penyelesaian reaktansi bersih: X_L − X_C = 50 − 10 = 40 Ω.",
          "Impedansi: Z = √(30² + 40²) = √(900 + 1600) = √2500 = 50 Ω.",
          "Arus efektif: I_rms = 100/50 = 2 A, faktor daya cos φ = 30/50 = 0,6, sehingga P = 100 × 2 × 0,6 = 120 W."
        ],
        answer: "Jadi impedansi rangkaian 50 Ω, arus efektif 2 A, dan daya rata-rata 120 W."
      },
      {
        question: "Hitung frekuensi resonansi sebuah rangkaian RLC seri yang memiliki induktor L = 0,1 H dan kapasitor C = 10 μF.",
        steps: [
          "Diketahui: L = 0,1 H, C = 10 μF = 10 × 10⁻⁶ F = 10⁻⁵ F.",
          "Rumus: f₀ = 1/(2π √(L · C)).",
          "Penyelesaian hasil kali L dan C: L · C = 0,1 × 10⁻⁵ = 10⁻⁶, sehingga √(L · C) = 10⁻³ s.",
          "f₀ = 1/(2π × 10⁻³) = 1/0,00628 ≈ 159 Hz."
        ],
        answer: "Jadi frekuensi resonansi rangkaian tersebut sekitar 159 Hz."
      }
    ],
    tips: [
      "Perhatikan satuan sebelum menghitung reaktansi, yaitu frekuensi hertz, induktansi henri, dan kapasitansi farad.",
      "Ingat bahwa pada resonansi X_L = X_C sehingga impedansi hanya bernilai R dan arus menjadi maksimum.",
      "Pada soal daya AC selalu gunakan nilai efektif (rms), bukan nilai puncak.",
      "Tegangan jaringan 220 V adalah tegangan efektif, sehingga tegangan puncaknya sekitar 311 V."
    ]
  },
  {
    id: 5,
    title: "Bab 5: Gelombang Elektromagnetik (Spektrum & Sifat-Sifat Gelombang EM)",
    summary: "Mempelajari spektrum gelombang elektromagnetik, sifat, dan pemanfaatannya bagi kehidupan.",
    sections: [
      {
        heading: "Aliran Energi Gelombang Elektromagnetik",
        paragraphs: [
          "Gelombang elektromagnetik adalah gelombang yang terbentuk oleh medan listrik dan medan magnet yang saling tegak lurus dan merambat ke segala arah. James Clerk Maxwell membuktikan bahwa cahaya termasuk gelombang elektromagnetik yang merambat di ruang hampa dengan kelajuan 3 × 10⁸ m/s.",
          "Gelombang elektromagnetik membawa energi tanpa memerlukan medium, sehingga dapat merambat dari Matahari ke Bumi melalui ruang hampa."
        ],
        list: [
          "Gelombang elektromagnetik terdiri atas medan listrik E dan medan magnet B yang saling tegak lurus.",
          "Merambat tanpa medium dan merupakan gelombang transversal yang dapat mengalami polarisasi.",
          "Kelajuan di ruang hampa c = 3 × 10⁸ m/s.",
          "Cahaya tampak hanya merupakan sebagian sangat kecil dari seluruh spektrum gelombang elektromagnetik."
        ]
      },
      {
        heading: "Spektrum Gelombang Elektromagnetik",
        paragraphs: [
          "Spektrum gelombang elektromagnetik diurutkan berdasarkan panjang gelombang atau frekuensi, meliputi gelombang radio, mikro, infrared, cahaya tampak, ultraviolet, sinar X, dan sinar gamma. Makin tinggi frekuensinya, makin besar energi tiap fotonnya.",
          "Gelombang radio dipakai untuk komunikasi, mikro untuk oven dan radar, infrared untuk pengendali jauh, ultraviolet untuk sterilisasi, sinar X untuk diagnosis medis, dan sinar gamma untuk terapi serta pemeriksaan industri."
        ],
        list: [
          "Urutan frekuensi naik: radio, mikro, infrared, tampak, ultraviolet, sinar X, gamma.",
          "Urutan panjang gelombang sebaliknya, yaitu gelombang radio paling panjang dan gamma paling pendek.",
          "Cahaya tampak memiliki rentang panjang gelombang sekitar 400 nm untuk ungu sampai 700 nm untuk merah.",
          "Sinar X dan sinar gamma berenergi tinggi sehingga bersifat ionisasi dan berbahaya bila terpapar berlebihan."
        ]
      },
      {
        heading: "Sifat dan Hubungan Besaran Gelombang EM",
        paragraphs: [
          "Semua gelombang elektromagnetik di ruang hampa bergerak dengan kelajuan yang sama yaitu c, sehingga frekuensi dan panjang gelombang saling berbanding terbalik. Hubungan ini dipakai untuk menghitung panjang gelombang dari frekuensi yang diketahui atau sebaliknya.",
          "Intensitas gelombang berkurang bila jarak ke sumber makin jauh sesuai kebalikan kuadrat jarak, karena energi tersebar ke permukaan bola yang makin luas."
        ],
        list: [
          "Hubungan c = λ · f berlaku untuk semua gelombang elektromagnetik di ruang hampa.",
          "Makin pendek panjang gelombang, makin tinggi frekuensi dan energi tiap fotonnya.",
          "Intensitas berbanding terbalik dengan kuadrat jarak dari sumber titik.",
          "Gelombang elektromagnetik membawa energi dan momentum, sehingga dapat menekan benda kecil."
        ]
      },
      {
        heading: "Pemanfaatan Gelombang Elektromagnetik",
        paragraphs: [
          "Setiap bagian spektrum gelombang elektromagnetik dimanfaatkan sesuai dengan sifatnya untuk kehidupan sehari-hari maupun industri. Pemilihan jenis gelombang didasarkan pada kemampuannya menembus atau dipantulkan oleh bahan tertentu."
        ],
        list: [
          "Gelombang radio dan mikro dipakai untuk komunikasi, siaran, dan radar.",
          "Infrared dipakai pada pengendali jauh, kamera termal, dan pengering makanan.",
          "Ultraviolet dipakai untuk sterilisasi alat kesehatan dan membantu pembentukan vitamin D.",
          "Sinar X dipakai untuk memeriksa tulang, sedangkan sinar gamma untuk terapi tumor.",
          "Cahaya tampak dimanfaatkan pada panel surya untuk menghasilkan listrik."
        ]
      }
    ],
    formulas: [
      {
        label: "Hubungan cepat rambat gelombang",
        expr: "c = λ · f",
        note: "c = 3 × 10⁸ m/s di ruang hampa, λ dalam meter, f dalam hertz."
      },
      {
        label: "Panjang gelombang dari frekuensi",
        expr: "λ = c / f   dan   f = c / λ",
        note: "Ubah satuannya dulu, 1 nm = 10⁻⁹ m dan 1 MHz = 10⁶ Hz."
      },
      {
        label: "Periode dan frekuensi",
        expr: "T = 1 / f",
        note: "T periode dalam sekon, f frekuensi dalam hertz."
      },
      {
        label: "Intensitas gelombang dari sumber titik",
        expr: "I = P / (4π · r²)",
        note: "I berbanding terbalik dengan kuadrat jarak r; bila jarak digandakan, intensitas menjadi seperempat."
      },
      {
        label: "Energi foton gelombang EM",
        expr: "E = h · f = h · c / λ",
        note: "h = 6,63 × 10⁻³⁴ J·s; penerapan lanjutannya dibahas pada bab gejala kuantum."
      }
    ],
    examples: [
      {
        question: "Sebuah stasiun radio memancarkan gelombang dengan frekuensi 100 MHz. Hitung panjang gelombang gelombang tersebut.",
        steps: [
          "Diketahui: f = 100 MHz = 100 × 10⁶ Hz = 10⁸ Hz, c = 3 × 10⁸ m/s.",
          "Rumus: λ = c/f.",
          "Penyelesaian: λ = (3 × 10⁸)/(10⁸).",
          "λ = 3 m."
        ],
        answer: "Jadi panjang gelombang gelombang radio tersebut adalah 3 meter."
      },
      {
        question: "Cahaya hijau memiliki panjang gelombang 500 nm. Hitung frekuensi dan energi tiap fotonnya. Gunakan h = 6,63 × 10⁻³⁴ J·s dan 1 eV = 1,6 × 10⁻¹⁹ J.",
        steps: [
          "Diketahui: λ = 500 nm = 5 × 10⁻⁷ m, c = 3 × 10⁸ m/s, h = 6,63 × 10⁻³⁴ J·s.",
          "Rumus: f = c/λ dan E = h · f.",
          "Penyelesaian frekuensi: f = (3 × 10⁸)/(5 × 10⁻⁷) = 6 × 10¹⁴ Hz.",
          "Energi foton: E = 6,63 × 10⁻³⁴ × 6 × 10¹⁴ = 3,98 × 10⁻¹⁹ J ≈ 4 × 10⁻¹⁹ J.",
          "Dalam elektronvolt: E = (3,98 × 10⁻¹⁹)/(1,6 × 10⁻¹⁹) ≈ 2,5 eV."
        ],
        answer: "Jadi frekuensinya 6 × 10¹⁴ Hz dan energi tiap foton sekitar 4 × 10⁻¹⁹ J atau 2,5 eV."
      }
    ],
    tips: [
      "Hafalkan urutan spektrum gelombang elektromagnetik dari frekuensi terendah sampai tertinggi beserta pemanfaatannya.",
      "Selalu ubah satuan panjang gelombang ke meter sebelum menghitung frekuensi atau energi.",
      "Gunakan aturan kebalikan kuadrat jarak pada soal intensitas, yaitu jarak dua kali berarti intensitas seperempat.",
      "Ingat semua gelombang elektromagnetik merambat dengan kelajuan sama di ruang hampa, yaitu c = 3 × 10⁸ m/s."
    ]
  },
  {
    id: 6,
    title: "Bab 6: Pengantar Elektronika & Teknologi Digital (Gerbang Logika & Sistem Digital)",
    summary: "Mempelajari komponen elektronika, gerbang logika, tabel kebenaran, dan sistem digital biner.",
    sections: [
      {
        heading: "Pengantar Elektronika dan Semikonduktor",
        paragraphs: [
          "Elektronika mempelajari perangkat yang bekerja dengan mengatur aliran elektron, mulai dari resistor dan kapasitor hingga transistor dan mikroprosesor. Bahan semikonduktor seperti silikon menjadi dasar pembuatan dioda dan transistor karena konduktivitasnya dapat diatur.",
          "Rangkaian digital bekerja hanya dengan dua keadaan logika yaitu 0 dan 1, sehingga tahan terhadap gangguan dan mudah diproses oleh komputer."
        ],
        list: [
          "Komponen pasif meliputi resistor, kapasitor, dan induktor.",
          "Komponen aktif meliputi dioda, transistor, dan integrated circuit.",
          "Semikonduktor diberi doping agar memiliki kelebihan elektron tipe n atau kekurangan elektron tipe p.",
          "Dioda hanya mengalirkan arus satu arah, sedangkan transistor berfungsi sebagai sakelar dan penguat."
        ]
      },
      {
        heading: "Gerbang Logika Dasar (AND, OR, NOT)",
        paragraphs: [
          "Gerbang logika adalah blok dasar rangkaian digital yang menghasilkan keluaran berdasarkan kombinasi masukan. Gerbang AND mengeluarkan 1 hanya jika semua masukan bernilai 1, gerbang OR mengeluarkan 1 bila minimal satu masukan bernilai 1, dan gerbang NOT membalik keadaan masukan.",
          "Setiap gerbang logika dijelaskan melalui tabel kebenaran yang memuat semua kemungkinan kombinasi masukan beserta keluarannya."
        ],
        list: [
          "AND dinyatakan Y = A ∧ B, keluaran 1 hanya bila A = 1 dan B = 1.",
          "OR dinyatakan Y = A ∨ B, keluaran 1 bila A atau B bernilai 1.",
          "NOT dinyatakan Y = ¬A, membalik nilai masukan menjadi 0 jika masukan 1 dan sebaliknya.",
          "Simbol ∧ untuk AND, ∨ untuk OR, dan ¬ untuk NOT pada penulisan logika."
        ]
      },
      {
        heading: "Gerbang Lanjutan (NAND, NOR, XOR) dan Hukum De Morgan",
        paragraphs: [
          "Gerbang NAND adalah kebalikan dari gerbang AND, sedangkan gerbang NOR adalah kebalikan dari gerbang OR. Gerbang XOR mengeluarkan 1 bila kedua masukan berbeda, sangat berguna pada penjumlah biner dan komparator.",
          "Hukum De Morgan memudahkan penyederhanaan rangkaian logika, yaitu negasi hasil AND sama dengan OR dari negasi masing-masing masukan."
        ],
        list: [
          "NAND dinyatakan Y = ¬(A ∧ B) dan NOR dinyatakan Y = ¬(A ∨ B).",
          "XOR dinyatakan Y = (A ∧ ¬B) ∨ (¬A ∧ B) dan bernilai 1 bila A ≠ B.",
          "Hukum De Morgan pertama: ¬(A ∧ B) = ¬A ∨ ¬B.",
          "Hukum De Morgan kedua: ¬(A ∨ B) = ¬A ∧ ¬B.",
          "Seluruh gerbang logika dapat dibangun hanya dengan memakai gerbang NAND saja."
        ]
      },
      {
        heading: "Sistem Digital: Biner dan Rangkaian",
        paragraphs: [
          "Komputer menyimpan dan memproses data dalam bentuk bilangan biner yang hanya memakai angka 0 dan 1. Setiap bilangan desimal dapat dikonversi ke biner dengan cara membagi dua lalu mengurutkan sisa pembagian.",
          "Rangkaian kombinasional seperti pencacah dan pengode memiliki keluaran yang hanya bergantung pada masukan saat itu, sedangkan rangkaian sekuensial seperti flip-flop dan register juga bergantung pada keadaan sebelumnya serta memerlukan sinyal clock."
        ],
        list: [
          "Bilangan biner memakai basis 2 dengan nilai tempat 2⁰, 2¹, 2², dan seterusnya.",
          "Konversi biner ke desimal dilakukan dengan menjumlahkan nilai tempat yang bernilai 1.",
          "Keluaran logika diwakili tegangan rendah untuk 0 dan tegangan tinggi untuk 1.",
          "Sistem digital menjadi dasar mikroprosesor, memori, dan sistem tertanam."
        ]
      }
    ],
    formulas: [
      {
        label: "Gerbang logika dasar",
        expr: "Y = A ∧ B   untuk AND,   Y = A ∨ B   untuk OR,   Y = ¬A   untuk NOT",
        note: "Nilai 1 berarti benar atau tegangan tinggi, nilai 0 berarti salah atau tegangan rendah."
      },
      {
        label: "Gerbang NAND dan NOR",
        expr: "Y = ¬(A ∧ B)   untuk NAND,   Y = ¬(A ∨ B)   untuk NOR",
        note: "Keluarannya kebalikan dari gerbang AND dan OR."
      },
      {
        label: "Gerbang XOR",
        expr: "Y = (A ∧ ¬B) ∨ (¬A ∧ B)",
        note: "XOR bernilai 1 bila kedua masukan berbeda, bernilai 0 bila keduanya sama."
      },
      {
        label: "Hukum De Morgan",
        expr: "¬(A ∧ B) = ¬A ∨ ¬B   dan   ¬(A ∨ B) = ¬A ∧ ¬B",
        note: "Dipakai untuk menyederhanakan ekspresi dan rangkaian logika."
      },
      {
        label: "Konversi biner ke desimal",
        expr: "D = bₙ · 2ⁿ + bₙ₋₁ · 2ⁿ⁻¹ + ... + b₁ · 2¹ + b₀ · 2⁰",
        note: "b adalah bit 0 atau 1; jumlahkan nilai tempat yang bernilai 1."
      },
      {
        label: "Frekuensi sinyal digital",
        expr: "f = 1 / T",
        note: "f dalam hertz, T periode sinyal dalam sekon."
      }
    ],
    examples: [
      {
        question: "Konversikan bilangan biner 11010 ke dalam bilangan desimal.",
        steps: [
          "Diketahui: bilangan biner 11010 dengan bit paling kanan bernilai tempat 2⁰.",
          "Tulis nilai tempatnya: 1 × 2⁴ + 1 × 2³ + 0 × 2² + 1 × 2¹ + 0 × 2⁰.",
          "Penyelesaian: 16 + 8 + 0 + 2 + 0 = 26.",
          "Jadi bilangan biner 11010 sama dengan 26 dalam bilangan desimal."
        ],
        answer: "Jadi bilangan 11010 basis 2 bernilai 26 dalam bilangan desimal."
      },
      {
        question: "Diketahui masukan A = 1, B = 1, dan C = 0 pada rangkaian logika Y = ¬(A ∧ B) ∨ (B ∧ C). Tentukan nilai keluaran Y.",
        steps: [
          "Diketahui: A = 1, B = 1, C = 0.",
          "Hitung bagian dalam kurung: A ∧ B = 1 ∧ 1 = 1, lalu negasinya ¬(1) = 0.",
          "Hitung suku kedua: B ∧ C = 1 ∧ 0 = 0.",
          "Gabungkan dengan gerbang OR: Y = 0 ∨ 0 = 0."
        ],
        answer: "Jadi nilai keluaran Y adalah 0."
      }
    ],
    tips: [
      "Susun tabel kebenaran terlebih dahulu untuk setiap soal logika sebelum menentukan nilai keluaran.",
      "Hafalkan tabel NAND dan XOR karena keduanya paling sering muncul dalam soal sistem digital.",
      "Gunakan hukum De Morgan untuk menyederhanakan ekspresi logika yang panjang.",
      "Latih konversi biner ke desimal dan sebaliknya dengan memakai nilai tempat 2 pangkat i."
    ]
  },
  {
    id: 7,
    title: "Bab 7: Teori Relativitas (Relativitas Khusus, Dilatasi Waktu & Massa-Energi)",
    summary: "Mempelajari postulat Einstein, dilatasi waktu, kontraksi panjang, dan kesetimbangan massa-energi.",
    sections: [
      {
        heading: "Postulat Relativitas Khusus",
        paragraphs: [
          "Albert Einstein pada tahun 1905 merumuskan teori relativitas khusus yang berlaku untuk pengamat dalam keadaan diam atau bergerak lurus dengan kelajuan tetap, disebut sistem inersia. Postulat pertama menyatakan hukum fisika berlaku sama untuk semua pengamat inersia, postulat kedua menyatakan kelajuan cahaya di ruang hampa sama untuk semua pengamat.",
          "Konsekuensinya, besaran seperti waktu, panjang, dan massa bergantung pada kecepatan pengamat, bukan merupakan besaran mutlak."
        ],
        list: [
          "Postulat 1: hukum fisika berlaku sama untuk semua pengamat inersia.",
          "Postulat 2: kelajuan cahaya di ruang hampa c = 3 × 10⁸ m/s sama untuk semua pengamat.",
          "Tidak ada benda yang dapat bergerak lebih cepat daripada cahaya di ruang hampa.",
          "Teori ini berpengaruh nyata hanya pada kecepatan yang mendekati kelajuan cahaya."
        ]
      },
      {
        heading: "Dilatasi Waktu",
        paragraphs: [
          "Waktu berjalan lebih lambat bagi pengamat yang bergerak relatif terhadap pengamat diam. Waktu yang berlangsung paling singkat disebut waktu proper, yaitu waktu yang diukur oleh pengamat yang berada bersama peristiwa, sedangkan pengamat bergerak mengukur waktu yang lebih panjang.",
          "Efek ini bukan kesalahan ukuran jam, melainkan sifat ruang-waktu. Efek ini telah dibuktikan melalui partikel muon dan jam atom yang dipasang pada pesawat terbang."
        ],
        list: [
          "Rumus dilatasi waktu: Δt = γ · Δt₀.",
          "Δt₀ adalah waktu proper yang diukur pada sistem yang diam terhadap peristiwa.",
          "Faktor Lorentz γ = 1/√(1 − v²/c²) selalu bernilai lebih besar atau sama dengan satu.",
          "Makin mendekati kelajuan cahaya, makin lambat waktu berjalan pada sistem yang bergerak."
        ]
      },
      {
        heading: "Kontraksi Panjang",
        paragraphs: [
          "Panjang suatu benda yang bergerak relatif terhadap pengamat diam terukur lebih pendek daripada panjang diamnya. Kontraksi hanya terjadi sepanjang arah gerak, sedangkan ukuran pada arah tegak lurus arah gerak tidak berubah.",
          "Sebaliknya, bagi pengamat yang ikut bergerak bersama benda tersebut, benda itu tampak berukuran normal sesuai panjang diamnya."
        ],
        list: [
          "Rumus kontraksi panjang: L = L₀/γ.",
          "L₀ adalah panjang diam atau panjang proper benda.",
          "Kontraksi hanya terjadi pada arah gerak benda.",
          "Karena γ selalu lebih besar atau sama dengan satu, maka panjang terukur L selalu kurang atau sama dengan L₀."
        ]
      },
      {
        heading: "Relativitas Massa, Energi dan Kesetimbangan",
        paragraphs: [
          "Massa suatu benda bertambah ketika bergerak mendekati kelajuan cahaya, dan energi total setara dengan massa melalui persamaan E = m·c². Sedikit massa dapat menghasilkan energi yang sangat besar karena nilai c² sangat besar.",
          "Persamaan ini menjadi dasar kerja pembangkit listrik tenaga nuklir dan menjelaskan energi yang dipancarkan Matahari hasil reaksi fusi hydrogen."
        ],
        list: [
          "Energi diam suatu benda: E₀ = m₀·c².",
          "Energi kinetik relativistik: K = (γ − 1)·m₀·c².",
          "Kesetimbangan energi dan momentum: E² = (p·c)² + (m₀·c²)².",
          "Penjumlahan kecepatan u = (u' + v)/(1 + u'·v/c²) selalu menghasilkan nilai tidak lebih besar dari c."
        ]
      }
    ],
    formulas: [
      {
        label: "Faktor Lorentz",
        expr: "γ = 1 / √(1 − v²/c²)",
        note: "v kecepatan benda, c = 3 × 10⁸ m/s; nilainya selalu γ ≥ 1."
      },
      {
        label: "Dilatasi waktu",
        expr: "Δt = γ · Δt₀",
        note: "Δt₀ waktu proper dalam sekon, Δt waktu yang diukur pengamat diam."
      },
      {
        label: "Kontraksi panjang",
        expr: "L = L₀ / γ",
        note: "L₀ panjang diam dalam meter, L panjang terukur pada pengamat diam."
      },
      {
        label: "Kesetimbangan massa dan energi",
        expr: "E = m · c²   dan   E₀ = m₀ · c²",
        note: "E dalam joule, m dalam kg; energi setara massa dikalikan 9 × 10¹⁶ bila m = 1 kg."
      },
      {
        label: "Energi kinetik relativistik",
        expr: "K = (γ − 1) · m₀ · c²",
        note: "Pada kecepatan rendah, K mendekati nilai klasik ½ · m₀ · v²."
      },
      {
        label: "Penjumlahan kecepatan relativistik",
        expr: "u = (u' + v) / (1 + u' · v / c²)",
        note: "Hasil penjumlahan selalu bernilai kurang dari atau sama dengan c."
      }
    ],
    examples: [
      {
        question: "Sebuah pesawat luar angkasa bergerak dengan kelajuan 0,6c. Jika waktu yang diukur di dalam pesawat untuk suatu perjalanan adalah 10 tahun, berapa lama waktu yang berlalu menurut pengamat di Bumi?",
        steps: [
          "Diketahui: v = 0,6c sehingga v²/c² = 0,36, dan Δt₀ = 10 tahun.",
          "Rumus: γ = 1/√(1 − v²/c²) dan Δt = γ · Δt₀.",
          "Penyelesaian faktor Lorentz: γ = 1/√(1 − 0,36) = 1/√0,64 = 1/0,8 = 1,25.",
          "Dilatasi waktu: Δt = 1,25 × 10 = 12,5 tahun."
        ],
        answer: "Jadi waktu yang berlalu di Bumi adalah 12,5 tahun, sedangkan di dalam pesawat hanya 10 tahun."
      },
      {
        question: "Hitung energi yang setara dengan massa 1 kg. Gunakan c = 3 × 10⁸ m/s.",
        steps: [
          "Diketahui: m = 1 kg, c = 3 × 10⁸ m/s.",
          "Rumus: E = m · c².",
          "Penyelesaian: E = 1 × (3 × 10⁸)² = 1 × 9 × 10¹⁶.",
          "E = 9 × 10¹⁶ J."
        ],
        answer: "Jadi energi yang setara dengan massa 1 kg adalah 9 × 10¹⁶ J, setara dengan ledakan sekitar 21 kiloton TNT."
      }
    ],
    tips: [
      "Ingat bahwa faktor Lorentz γ selalu lebih besar atau sama dengan satu untuk setiap kecepatan.",
      "Tentukan dulu sistem mana yang mengukur waktu proper, yaitu sistem yang berada bersama peristiwa.",
      "Pada soal massa dan energi, ubah massa ke kilogram dan gunakan c = 3 × 10⁸ m/s agar hasil dalam joule.",
      "Relativitas hanya berpengaruh nyata bila kecepatan mendekati kelajuan cahaya."
    ]
  },
  {
    id: 8,
    title: "Bab 8: Gejala Kuantum (Foton, Efek Fotolistrik & Efek Compton)",
    summary: "Mempelajari kuantisasi energi, foton, efek fotolistrik, efek Compton, dan dualisme gelombang partikel.",
    sections: [
      {
        heading: "Kuantisasi Energi dan Foton",
        paragraphs: [
          "Max Planck pada tahun 1900 menyatakan bahwa energi radiator hanya dapat berupa paket-paket tertentu yang disebut kuantum, dengan besar E = h · f. Albert Einstein melanjutkan gagasan itu dengan menganggap cahaya tersusun atas partikel berenergi yang disebut foton.",
          "Makin tinggi frekuensi cahaya, makin besar energi tiap fotonnya, sedangkan banyaknya foton per satuan waktu menentukan intensitas cahaya."
        ],
        list: [
          "Konstanta Planck h = 6,63 × 10⁻³⁴ J·s atau setara 4,14 × 10⁻¹⁵ eV·s.",
          "Energi foton: E = h · f = h · c / λ.",
          "Frekuensi tinggi berarti foton berenergi besar, bukan cahaya yang lebih terang.",
          "Intensitas cahaya berkaitan dengan jumlah foton yang menyamper tiap satuan waktu."
        ]
      },
      {
        heading: "Efek Fotolistrik",
        paragraphs: [
          "Efek fotolistrik adalah lepasnya elektron dari permukaan logam ketika disinari cahaya berfrekuensi cukup tinggi. Efek ini tidak dapat dijelaskan dengan teori gelombang karena elektron yang lepas tidak bergantung pada intensitas cahaya, melainkan pada frekuensinya.",
          "Setiap logam memiliki fungsi kerja minimum tertentu. Cahaya yang frekuensinya di bawah frekuensi ambang tidak mampu mengeluarkan elektron seberapa pun terangnya cahaya itu."
        ],
        list: [
          "Persamaan efek fotolistrik: h · f = φ + K_maks.",
          "Frekuensi ambang: f₀ = φ/h, cahaya dengan f kurang dari f₀ tidak menghasilkan fotoelektron.",
          "Tegangan henti memenuhi e · U_henti = K_maks.",
          "Bila frekuensi dinaikkan, energi kinetik elektron yang lepas bertambah.",
          "Bila intensitas dinaikkan, jumlah elektron yang lepas bertambah, tetapi energinya tetap."
        ]
      },
      {
        heading: "Efek Compton",
        paragraphs: [
          "Arthur Compton pada tahun 1923 menembakkan sinar X ke elektron bebas dan menemukan sinar pantul yang panjang gelombangnya lebih panjang daripada sinar datang. Peristiwa ini membuktikan bahwa foton memiliki momentum dan memantul seperti partikel.",
          "Pergeseran panjang gelombang bergantung pada sudut hambur dan tidak bergantung pada jenis bahan sasaran."
        ],
        list: [
          "Persamaan Compton: Δλ = (h/mₑ·c) · (1 − cos θ).",
          "Panjang gelombang Compton elektron: h/(mₑ·c) = 2,43 × 10⁻¹² m.",
          "Pergeseran terbesar terjadi pada pantul balik θ = 180°, yaitu Δλ = 2 × 2,43 × 10⁻¹² m.",
          "Pada sudut hambur θ = 90°, pergeserannya Δλ = 2,43 × 10⁻¹² m."
        ]
      },
      {
        heading: "Dualisme Gelombang dan Partikel",
        paragraphs: [
          "Louis de Broglie pada tahun 1924 mengusulkan bahwa setiap partikel yang bergerak memiliki sifat gelombang dengan panjang gelombang tertentu. Gagasan ini kemudian dibuktikan melalui pola difraksi elektron.",
          "Dualisme ini menjadi dasar mekanika kuantum yang menjelaskan perilaku partikel pada skala atom, di mana elektron tidak dapat digambarkan lagi sebagai titik yang bergerak menurut lintasan pasti."
        ],
        list: [
          "Panjang gelombang de Broglie: λ = h/p = h/(m · v).",
          "Makin besar massa dan kecepatan partikel, makin kecil panjang gelombangnya.",
          "Efek fotolistrik dan efek Compton menegaskan sifat foton sebagai partikel berenergi.",
          "Elektron dalam atom memiliki panjang gelombang sebanding dengan jarak antaratom, sehingga mengalami difraksi."
        ]
      }
    ],
    formulas: [
      {
        label: "Energi foton",
        expr: "E = h · f = h · c / λ",
        note: "E dalam joule, h = 6,63 × 10⁻³⁴ J·s, f dalam hertz, λ dalam meter."
      },
      {
        label: "Persamaan efek fotolistrik",
        expr: "h · f = φ + K_maks",
        note: "φ fungsi kerja logam dalam joule atau eV, K_maks energi kinetik maksimum elektron."
      },
      {
        label: "Frekuensi ambang dan tegangan henti",
        expr: "f₀ = φ / h   dan   e · U_henti = K_maks",
        note: "Cahaya dengan f kurang dari f₀ tidak menghasilkan fotoelektron."
      },
      {
        label: "Pergeseran panjang gelombang Compton",
        expr: "Δλ = (h / (mₑ · c)) · (1 − cos θ)",
        note: "h/(mₑ·c) = 2,43 × 10⁻¹² m, θ sudut hambur foton terhadap arah datang."
      },
      {
        label: "Panjang gelombang de Broglie",
        expr: "λ = h / p = h / (m · v)",
        note: "Berlaku untuk setiap partikel yang bergerak, termasuk elektron."
      }
    ],
    examples: [
      {
        question: "Sebuah logam memiliki fungsi kerja φ = 2,0 eV dan disinari cahaya berfrekuensi 8 × 10¹⁴ Hz. Hitung energi tiap foton, energi kinetik maksimum elektron yang lepas, dan tegangan hentinya. Gunakan h = 6,63 × 10⁻³⁴ J·s dan 1 eV = 1,6 × 10⁻¹⁹ J.",
        steps: [
          "Diketahui: φ = 2,0 eV = 3,2 × 10⁻¹⁹ J, f = 8 × 10¹⁴ Hz, h = 6,63 × 10⁻³⁴ J·s.",
          "Rumus: E_poton = h · f, K_maks = E_poton − φ, dan e · U_henti = K_maks.",
          "Penyelesaian foton: E = 6,63 × 10⁻³⁴ × 8 × 10¹⁴ = 5,304 × 10⁻¹⁹ J ≈ 3,3 eV.",
          "Energi kinetik maksimum: K_maks = 3,3 eV − 2,0 eV = 1,3 eV ≈ 2,1 × 10⁻¹⁹ J.",
          "Tegangan henti: U_henti = K_maks/e = 1,3 V."
        ],
        answer: "Jadi energi foton 3,3 eV, energi kinetik maksimum elektron 1,3 eV, dan tegangan henti 1,3 V."
      },
      {
        question: "Sinar X dengan panjang gelombang 0,05 nm menghantam elektron bebas lalu dipantulkan dengan sudut hambur 90°. Hitung pergeseran panjang gelombang Compton dan panjang gelombang sinar pantulnya.",
        steps: [
          "Diketahui: λ = 0,05 nm = 50 pm, θ = 90°, cos 90° = 0, h/(mₑ·c) = 2,43 pm.",
          "Rumus: Δλ = (h/(mₑ·c)) · (1 − cos θ) dan λ_pantul = λ + Δλ.",
          "Penyelesaian pergeseran: Δλ = 2,43 pm × (1 − 0) = 2,43 pm.",
          "Panjang gelombang pantul: λ_pantul = 50 pm + 2,43 pm = 52,43 pm ≈ 0,0524 nm."
        ],
        answer: "Jadi pergeseran panjang gelombang 2,43 pm dan panjang gelombang sinar pantul menjadi sekitar 0,0524 nm."
      }
    ],
    tips: [
      "Pada efek fotolistrik, frekuensi menentukan energi elektron, sedangkan intensitas menentukan jumlah elektron yang lepas.",
      "Ubah energi dari eV ke joule dengan membagi 1,6 × 10⁻¹⁹ agar satuan perhitungan konsisten.",
      "Ingat pergeseran Compton hanya terjadi bila foton memantul pada elektron bebas, bukan pada elektron terikat.",
      "Gunakan nilai tetap h = 6,63 × 10⁻³⁴ J·s dan h/(mₑ·c) = 2,43 × 10⁻¹² m agar perhitungan lebih cepat."
    ]
  },
  {
    id: 9,
    title: "Bab 9: Fisika Inti dan Radioaktivitas (Peluruhan, Reaksi Fisi & Fusi Nuklir)",
    summary: "Mempelajari struktur inti, jenis radioaktivitas, waktu paruh, fisi, dan fusi nuklir.",
    sections: [
      {
        heading: "Struktur Inti Atom dan Defek Massa",
        paragraphs: [
          "Inti atom tersusun atas proton dan neutron yang disebut nukleon, sedangkan selubung inti berisi elektron. Nomor massa A adalah jumlah proton Z dengan neutron N, sedangkan Z menentukan jenis unsur.",
          "Massa inti selalu lebih kecil daripada jumlah massa proton dan neutron penyusunnya. Selisih massa yang disebut defek massa itu berubah menjadi energi pengikat inti."
        ],
        list: [
          "A = Z + N, dengan Z disebut nomor atom yaitu jumlah proton.",
          "Massa proton dan neutron masing-masing sekitar 1,67 × 10⁻²⁷ kg.",
          "Massa proton 1,0073 u, massa neutron 1,0087 u, dan massa elektron jauh lebih kecil.",
          "Energi pengikat inti dihitung dari defek massa melalui ΔE = Δm · c².",
          "Makin besar energi pengikat per nukleon, makin stabil inti tersebut."
        ]
      },
      {
        heading: "Radioaktivitas: Peluruhan Alfa, Beta dan Gamma",
        paragraphs: [
          "Radioaktivitas adalah peluruhan inti tak stabil yang memancarkan partikel atau gelombang untuk mencapai keadaan yang lebih stabil. Peluruhan alfa memancarkan inti helium, peluruhan beta memancarkan elektron, dan peluruhan gamma memancarkan sinar gamma berenergi tinggi.",
          "Pada peluruhan beta, sebuah neutron di dalam inti berubah menjadi proton sehingga nomor atom bertambah satu sedangkan nomor massa tetap sama."
        ],
        list: [
          "Peluruhan alfa ⁴₂α mengurangi nomor massa sebesar 4 dan nomor atom sebesar 2.",
          "Peluruhan beta ⁰₋₁e menambah nomor atom sebesar 1 dengan nomor massa tetap.",
          "Peluruhan gamma ⁰₀γ hanya memancarkan energi tanpa mengubah nomor massa dan nomor atom.",
          "Sinar alfa dapat dihentikan selembar kertas, sinar beta oleh pelat aluminium tipis, dan sinar gamma oleh pelat timbal tebal.",
          "Ketiga radiasi bersifat ionisasi dan dapat merusak jaringan tubuh bila terpapar berlebihan."
        ]
      },
      {
        heading: "Hukum Peluruhan Radioaktif dan Waktu Paruh",
        paragraphs: [
          "Jumlah inti radioaktif yang belum meluruh berkurang secara eksponensial terhadap waktu. Waktu paruh adalah waktu yang diperlukan agar separuh dari jumlah inti awal mengalami peluruhan.",
          "Aktivitas suatu sampel dinyatakan dalam becquerel, yaitu jumlah peluruhan per sekon. Semakin besar konstanta peluruhan, semakin cepat peluruhan dan semakin pendek waktu paruhnya."
        ],
        list: [
          "Hukum peluruhan: N = N₀ · (½)^(t/T).",
          "Hubungan konstanta peluruhan: λ = 0,693/T, dengan T waktu paruh.",
          "Aktivitas: A = λ · N dengan satuan becquerel (Bq).",
          "Setelah n kali waktu paruh, jumlah inti tersisa N₀ · (½)ⁿ.",
          "Waktu paruh bersifat tetap dan tidak bergantung pada suhu maupun keadaan zat."
        ]
      },
      {
        heading: "Fisi dan Fusi Nuklir",
        paragraphs: [
          "Fisi nuklir adalah pemecahan inti berat seperti uranium 235 menjadi inti yang lebih ringan dengan dibantu neutron. Reaksi ini melepaskan energi sangat besar dan menjadi dasar pembangkit listrik tenaga nuklir serta bom atom.",
          "Fusi nuklir adalah penggabungan dua inti ringan menjadi inti yang lebih berat dan berlangsung di Matahari. Energi yang dilepas per satuan massa pada fusi lebih besar daripada fisi, sekaligus menghasilkan limbah radioaktif yang jauh lebih sedikit."
        ],
        list: [
          "Fisi: inti berat terurai menjadi inti lebih ringan, neutron, dan energi.",
          "Fusi: inti ringan hidrogen menyatu menjadi inti helium, neutron, dan energi.",
          "Energi reaksi dihitung dari defek massa melalui ΔE = Δm · c².",
          "Batang kontrol bor pada reaktor nuklir menyerap neutron untuk mengatur laju reaksi fisi agar tetap terkendali.",
          "Reaksi fusi memerlukan suhu plasma jutaan derajat agar inti dapat saling mendekat dan menyatu."
        ]
      }
    ],
    formulas: [
      {
        label: "Komponen inti atom",
        expr: "A = Z + N",
        note: "A nomor massa, Z nomor atom atau jumlah proton, N jumlah neutron."
      },
      {
        label: "Notasi partikel peluruhan",
        expr: "⁴₂α,   ⁰₋₁e,   ⁰₀γ",
        note: "Melambangkan partikel alfa inti helium, elektron, dan foton gamma."
      },
      {
        label: "Hukum peluruhan radioaktif",
        expr: "N = N₀ · (½)^(t/T)",
        note: "N₀ jumlah inti awal, T waktu paruh, t waktu pengamatan dalam satuan sama."
      },
      {
        label: "Konstanta peluruhan dan aktivitas",
        expr: "λ = 0,693 / T   dan   A = λ · N",
        note: "λ dalam per sekon, aktivitas A dalam becquerel yaitu peluruhan per sekon."
      },
      {
        label: "Energi dari defek massa",
        expr: "ΔE = Δm · c²",
        note: "Δm dalam kg, c = 3 × 10⁸ m/s, ΔE dalam joule."
      },
      {
        label: "Keseimbangan reaksi nuklir",
        expr: "Σ A kiri = Σ A kanan   dan   Σ Z kiri = Σ Z kanan",
        note: "Jumlah nomor massa dan nomor atom harus sama di kedua sisi persamaan reaksi."
      }
    ],
    examples: [
      {
        question: "Sebuah sampel nuklir memiliki waktu paruh 5 hari dan massa awal 80 gram. Berapa massa sampel yang tersisa setelah 20 hari?",
        steps: [
          "Diketahui: T = 5 hari, N₀ = 80 g, t = 20 hari.",
          "Rumus: N = N₀ · (½)^(t/T).",
          "Penyelesaian banyaknya waktu paruh: t/T = 20/5 = 4.",
          "N = 80 × (½)⁴ = 80 × 1/16 = 5 g."
        ],
        answer: "Jadi massa sampel yang tersisa setelah 20 hari adalah 5 gram."
      },
      {
        question: "Suatu reaksi nuklir mengubah massa sebesar 3,0 × 10⁻²⁸ kg menjadi energi. Hitung energi yang dilepaskan oleh reaksi tersebut.",
        steps: [
          "Diketahui: Δm = 3,0 × 10⁻²⁸ kg, c = 3 × 10⁸ m/s.",
          "Rumus: ΔE = Δm · c².",
          "Penyelesaian: ΔE = 3,0 × 10⁻²⁸ × (3 × 10⁸)² = 3,0 × 10⁻²⁸ × 9 × 10¹⁶.",
          "ΔE = 27 × 10⁻¹² = 2,7 × 10⁻¹¹ J."
        ],
        answer: "Jadi energi yang dilepaskan adalah 2,7 × 10⁻¹¹ J."
      }
    ],
    tips: [
      "Tentukan dahulu jenis peluruhan dari perubahan nomor massa dan nomor atom yang diberikan pada soal.",
      "Hitung banyaknya waktu paruh terlebih dahulu agar perhitungan peluruhan menjadi lebih sederhana.",
      "Selalu seimbangkan jumlah nomor massa dan nomor atom di kedua sisi persamaan reaksi nuklir.",
      "Hubungkan defek massa dengan energi melalui ΔE = Δm · c², dan ingat massa dikalikan 9 × 10¹⁶ bila massa dalam kg."
    ]
  }
];
