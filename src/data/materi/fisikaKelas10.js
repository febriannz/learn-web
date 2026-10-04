export const MATERI_FISIKA_10 = [
  {
    id: 1,
    title: "Bab 1: Hakikat Fisika & Metode Ilmiah",
    summary: "Mengenal fisika sebagai ilmu dasar, konsep besaran dan model, serta langkah metode ilmiah yang benar.",
    sections: [
      {
        heading: "Fisika sebagai Ilmu Dasar",
        paragraphs: [
          "Fisika adalah ilmu yang mempelajari sifat materi dan energi serta interaksi keduanya di alam semesta. Ilmu ini bersifat kuantitatif sehingga hasilnya dapat diukur, dihitung, dan diprediksi dengan matematika."
        ],
        list: [
          "Materi tersusun dari bagian sangat kecil seperti atom, molekul, dan partikel dasar.",
          "Energi tidak dapat diciptakan dan dimusnahkan, hanya berubah bentuk.",
          "Hukum fisika berlaku sama di mana pun di alam semesta.",
          "Fisika menjelaskan gejala alam secara kuantitatif sehingga hasilnya dapat diuji.",
          "Fisika menjadi dasar bagi teknologi, kedokteran, pertanian, dan rekayasa."
        ]
      },
      {
        heading: "Besaran dan Model Fisika",
        paragraphs: [
          "Besaran adalah segala sesuatu yang dapat diukur dan dinyatakan dengan angka beserta satuan. Karena fenomena alam sangat kompleks, fisikawan menyederhanakannya menjadi model berupa sketsa, diagram, atau persamaan matematis."
        ],
        list: [
          "Besaran pokok antara lain panjang, massa, waktu, suhu, arus listrik, intensitas cahaya, dan jumlah zat.",
          "Besaran turunan dibentuk dari operasi matematika antarbesaran pokok.",
          "Model fisika meliputi sketsa benda, diagram garis, dan persamaan.",
          "Penyederhanaan dipilih sesuai kebutuhan agar perhitungan tidak terlalu rumit.",
          "Teori yang baik selalu menghasilkan prediksi yang dapat diverifikasi lewat percobaan."
        ]
      },
      {
        heading: "Tahapan Metode Ilmiah",
        paragraphs: [
          "Metode ilmiah adalah prosedur sistematis untuk memperoleh pengetahuan yang dapat dipertanggungjawabkan melalui pengamatan dan percobaan. Setiap langkah saling berkaitan dan dapat berulang bila muncul data baru yang belum terjelaskan."
        ],
        list: [
          "Mengamati fenomena atau permasalahan secara cermat dan terarah.",
          "Mengajukan hipotesis, yaitu dugaan sementara yang masih dapat diuji.",
          "Merancang percobaan dengan mengendalikan variabel secara cermat.",
          "Mengumpulkan dan menganalisis data secara objektif tanpa memihak.",
          "Menarik kesimpulan lalu mengomunikasikan hasil kepada publik ilmiah."
        ]
      },
      {
        heading: "Variabel dalam Percobaan",
        paragraphs: [
          "Dalam percobaan, variabel bebas diubah untuk melihat pengaruhnya terhadap variabel terikat, sedangkan variabel kontrol dijaga tetap konstan. Data yang diperoleh kemudian diolah untuk menilai apakah hipotesis diterima atau ditolak."
        ],
        list: [
          "Variabel bebas adalah faktor yang sengaja diubah oleh penguji.",
          "Variabel terikat adalah hasil pengamatan yang berubah sebagai akibat variabel bebas.",
          "Variabel kontrol adalah faktor yang dipertahankan agar pengaruhnya tidak ikut campur.",
          "Pengulangan percobaan dilakukan untuk mengurangi pengaruh galat acak.",
          "Kesimpulan harus didukung data dan tidak bertentangan dengan hukum fisika yang sudah teruji."
        ]
      }
    ],
    formulas: [
      { label: "Hubungan dua variabel percobaan", expr: "y = k · x", note: "y (variabel terikat), x (variabel bebas), k (tetapan hubungan, satuan y per satuan x)" },
      { label: "Rata-rata pengulangan pengukuran", expr: "x̄ = (x₁ + x₂ + x₃) / 3", note: "x̄ (nilai rata-rata, satuan sama dengan x), x₁ sampai x₃ (hasil tiap pengukuran)" },
      { label: "Perubahan sebuah besaran", expr: "ΔA = A₂ − A₁", note: "Δ (selisih atau perubahan), A₁ (nilai awal), A₂ (nilai akhir), satuan mengikuti A)" }
    ],
    examples: [
      {
        question: "Dalam percobaan, sebuah tali direntangkan oleh beban 0, 1, 2, 3, dan 4 kg dengan panjang terukur berturut-turut 10,0 cm; 12,0 cm; 14,0 cm; 16,0 cm; dan 18,0 cm. Tentukan tetapan hubungan panjang terhadap beban serta panjang tali tanpa beban.",
        steps: [
          "Diketahui: beban F = 0; 1; 2; 3; 4 kg dan panjang L = 10,0; 12,0; 14,0; 16,0; 18,0 cm.",
          "Hipotesis: panjang berbanding lurus dengan beban sehingga L = L₀ + k F.",
          "Hitung tetapan: k = ΔL / ΔF = (14,0 − 10,0) cm / (2 − 0) kg = 2,0 cm/kg.",
          "Uji dengan data lain: (18,0 − 14,0) cm / (4 − 2) kg = 2,0 cm/kg sehingga data konsisten.",
          "Beban nol: L = 10,0 cm + 2,0 cm/kg × 0 kg = 10,0 cm."
        ],
        answer: "Jadi tetapan hubungannya 2,0 cm/kg dan panjang tali tanpa beban adalah 10,0 cm."
      }
    ],
    tips: [
      "Catat setiap langkah percobaan dengan rapi agar penelitian bisa diulang orang lain.",
      "Selalu tulis data lengkap beserta satuannya, bukan hanya angkanya saja.",
      "Ulangi pengukuran beberapa kali lalu ambil rata-rata untuk mengurangi galat.",
      "Hubungkan teori fisika dengan kejadian sehari-hari agar lebih mudah dipahami."
    ]
  },
  {
    id: 2,
    title: "Bab 2: Besaran, Satuan & Dimensi",
    summary: "Mengenal besaran pokok dan turunan, sistem satuan SI, analisis dimensi, serta konversi satuan yang tepat.",
    sections: [
      {
        heading: "Besaran Pokok dan Besaran Turunan",
        paragraphs: [
          "Besaran pokok didefinisikan lebih dulu dan tidak bergantung pada besaran lain, sedangkan besaran turunan diperoleh dari perkalian atau pembagian besaran pokok. Contoh besaran turunan adalah kecepatan, gaya, dan tekanan."
        ],
        list: [
          "Terdapat tujuh besaran pokok dalam sistem SI.",
          "Massa pokok dinyatakan dalam kilogram, panjang dalam meter, dan waktu dalam sekon.",
          "Setiap besaran turunan memiliki satuannya sendiri yang berasal dari satuan pokok.",
          "Kecepatan termasuk besaran turunan karena berasal dari panjang dibagi waktu.",
          "Satuan turunan diberi nama khusus, misalnya newton untuk gaya dan pascal untuk tekanan."
        ]
      },
      {
        heading: "Sistem Satuan Internasional (SI)",
        paragraphs: [
          "Sistem SI disepakati dunia agar hasil pengukuran di berbagai negara dapat dibandingkan dan diulang. Setiap besaran sebaiknya dinyatakan dalam satuan pokok sebelum dihitung agar tidak terjadi kekeliruan satuan."
        ],
        list: [
          "Satuan panjang adalah meter (m), massa kilogram (kg), waktu sekon (s).",
          "Satuan suhu adalah kelvin (K), arus listrik ampere (A), dan jumlah zat mol.",
          "Kelipatan satuan memakai awalan kilo, senti, dan mili, misalnya 1 km = 1000 m.",
          "Simbol satuan ditulis dengan huruf kecil, kecuali satuan yang dinamai orang seperti Newton.",
          "Angka dan satuan dipisahkan spasi, misalnya 12 kg, bukan 12kg."
        ]
      },
      {
        heading: "Analisis Dimensi",
        paragraphs: [
          "Dimensi menyatakan jenis besaran melalui lambang M untuk massa, L untuk panjang, dan T untuk waktu. Analisis dimensi berguna memeriksa konsistensi persamaan dan menebak bentuk sebuah persamaan baru."
        ],
        list: [
          "Dimensi massa ditulis M, dimensi panjang L, dan dimensi waktu T.",
          "Dimensi suhu Θ, arus listrik I, dan intensitas cahaya J dipakai bila diperlukan.",
          "Persamaan yang benar harus memiliki dimensi kiri sama dengan dimensi kanan.",
          "Besaran tanpa dimensi disebut besaran skalar murni seperti koefisien gesek.",
          "Konstanta dapat berdimensi maupun tidak berdimensi sesuai persamaannya."
        ]
      },
      {
        heading: "Konversi Satuan",
        paragraphs: [
          "Konversi satuan dilakukan dengan mengalikan atau membagi faktor konversi sehingga nilai besaran tidak berubah. Besaran sering dikonversi lebih dulu ke satuan SI agar perhitungan satuannya konsisten."
        ],
        list: [
          "Konversi ke satuan yang lebih kecil dilakukan dengan mengalikan faktor konversi.",
          "Satuan yang lebih besar diperoleh dengan membagi faktor konversi.",
          "1 km = 10³ m, 1 ha = 10⁴ m², dan 1 liter = 10⁻³ m³.",
          "Kecepatan dikonversi dengan 1 m/s = 3,6 km/jam.",
          "Selalu ikuti satuan turunan yang dihasilkan dari setiap langkah pembagian."
        ]
      }
    ],
    formulas: [
      { label: "Bentuk umum dimensi besaran turunan", expr: "B = Mᵃ Lᵇ Tᶜ", note: "B (besaran turunan), a (eksponen massa), b (eksponen panjang), c (eksponen waktu)" },
      { label: "Dimensi kecepatan", expr: "v = s / t → L T⁻¹", note: "s (m), t (s), v (m/s)" },
      { label: "Dimensi gaya", expr: "F = m · a → M L T⁻²", note: "m (kg), a (m/s²), F (newton, N)" },
      { label: "Dimensi tekanan", expr: "p = F / A → M L⁻¹ T⁻²", note: "F (N), A (m²), p (pascal, Pa)" },
      { label: "Dimensi energi", expr: "E = ½ m v² → M L² T⁻²", note: "m (kg), v (m/s), dimensi sama dengan joule (J) dan newton-meter (N·m)" },
      { label: "Faktor konversi satuan", expr: "1 km = 10³ m; 1 ha = 10⁴ m²", note: "kalikan faktor konversi bila satuan awal lebih besar dari satuan tujuan" }
    ],
    examples: [
      {
        question: "Tentukan dimensi dari besaran tekanan yang didefinisikan sebagai gaya per satuan luas.",
        steps: [
          "Diketahui: dimensi gaya F adalah M L T⁻² dan dimensi luas A adalah L².",
          "Rumus: p = F / A.",
          "Penyelesaian dimensi: p = (M L T⁻²) / L² = M L⁻¹ T⁻².",
          "Periksa: dimensi kiri dan kanan sama sehingga persamaan konsisten."
        ],
        answer: "Jadi dimensi tekanan adalah M L⁻¹ T⁻² yang setara dengan satuan pascal."
      },
      {
        question: "Sebuah mobil menempuh jarak 108 km dalam waktu 1,5 jam. Berapa kecepatan rata-rata mobil dalam satuan meter per sekon?",
        steps: [
          "Diketahui: s = 108 km dan t = 1,5 jam.",
          "Konversi satuan: s = 108 × 10³ m = 108000 m dan t = 1,5 × 3600 s = 5400 s.",
          "Rumus: v = s / t.",
          "Penyelesaian: v = 108000 m / 5400 s = 20 m/s."
        ],
        answer: "Jadi kecepatan rata-rata mobil 20 m/s yang setara dengan 72 km/jam."
      }
    ],
    tips: [
      "Hafalkan tujuh besaran pokok beserta simbol dan satuannya.",
      "Tulis satuan pada setiap angka agar kesalahan satuan cepat terdeteksi.",
      "Gunakan analisis dimensi untuk mengecek jawaban soal sebelum menyimpulkan.",
      "Latih konversi satuan dengan satuan yang sering dipakai seperti km ke meter."
    ]
  },
  {
    id: 3,
    title: "Bab 3: Pengukuran (Jangka Sorong & Mikrometer)",
    summary: "Membaca hasil ukur jangka sorong dan mikrometer skrup beserta ketelitian dan galat alat ukur.",
    sections: [
      {
        heading: "Sifat Alat Ukur dan Ketelitian",
        paragraphs: [
          "Setiap alat ukur memiliki ketelitian tertentu, yaitu nilai terkecil yang masih dapat dibaca dengan alat tersebut. Ketelitian menentukan banyaknya angka penting pada hasil pengukuran sehingga tidak boleh melebihi ketelitian alat."
        ],
        list: [
          "Skala utama menunjukkan nilai utama hasil ukur, misalnya dalam milimeter.",
          "Skala nonius atau skala pembagi dipakai untuk membaca pecahan terkecil.",
          "Ketelitian jangka sorong umumnya 0,1 mm, 0,05 mm, atau 0,02 mm.",
          "Ketelitian mikrometer skrup umumnya 0,01 mm.",
          "Pembacaan selalu dibulatkan tepat sampai ketelitian alat, tidak lebih."
        ]
      },
      {
        heading: "Cara Pakai Jangka Sorong",
        paragraphs: [
          "Jangka sorong dipakai mengukur diameter luar, diameter dalam, dan kedalaman sebuah benda. Rahang utama dikunci setelah benda terjepit agar hasil ukur tidak bergeser saat dibaca."
        ],
        list: [
          "Buka rahang lalu jepit benda dengan halus tanpa dipaksa.",
          "Pastikan garis skala nonius yang berimpit dengan skala utama dicatat.",
          "Baca skala utama terlebih dahulu sebagai nilai bilangan bulat.",
          "Lanjutkan dengan skala nonius yang berimpit dikalikan ketelitian alat.",
          "Jumlahkan kedua bacaan untuk memperoleh hasil akhir."
        ]
      },
      {
        heading: "Cara Pakai Mikrometer Skrup",
        paragraphs: [
          "Mikrometer skrup memakai ulir sekrup sehingga putaran poros menggeser spindel secara halus. Satu putaran penuh umumnya menggeser spindel sejauh 0,5 mm yang dibagi menjadi 50 skala pembagi."
        ],
        list: [
          "Bersihkan ujung spindel dan anvil dari debu sebelum mengukur.",
          "Putar thimble perlahan sampai benda terjepit ringan, jangan dipaksa.",
          "Baca skala utama pada batang sebagai nilai bilangan bulat dan setengah milimeter.",
          "Baca skala pembagi pada thimble yang berimpit dengan garis nol.",
          "Hasil ukur mikrometer biasanya dinyatakan dalam milimeter."
        ]
      },
      {
        heading: "Galat dan Ketidakpastian Pengukuran",
        paragraphs: [
          "Hasil pengukuran selalu memiliki galat karena keterbatasan alat dan manusia. Pengukuran diulang beberapa kali untuk memperoleh nilai terbaik sekaligus mengetahui sebaran hasil ukur."
        ],
        list: [
          "Galat absolut adalah selisih hasil ukur terhadap nilai yang dianggap benar.",
          "Galat relatif menyatakan galat absolut dibanding nilai ukur dalam persen.",
          "Galat sistematis dapat dikurangi dengan mengkalibrasi alat ukur.",
          "Galat acak dikurangi dengan mengulang pengukuran lalu mengambil rata-rata.",
          "Semakin kecil galat relatif, semakin dapat dipercaya hasil pengukuran."
        ]
      }
    ],
    formulas: [
      { label: "Hasil ukur jangka sorong", expr: "bacaan = skala utama + (skala nonius × ketelitian)", note: "ketelitian 0,1 mm; 0,05 mm; atau 0,02 mm, hasil akhir dinyatakan dalam mm" },
      { label: "Hasil ukur mikrometer", expr: "bacaan = skala utama + (skala pembagi × 0,01 mm)", note: "skala pembagi (0 sampai 49), hasil akhir dinyatakan dalam mm" },
      { label: "Diameter benda berongga", expr: "d = hasil ukur₁ − hasil ukur₂", note: "hasil ukur₁ (rahang luar), hasil ukur₂ (rahang dalam), satuan mm" },
      { label: "Galat relatif pengukuran", expr: "galat relatif = (ketelitian / nilai ukur) × 100%", note: "hasil dalam persen, semakin kecil semakin baik ketelitiannya" },
      { label: "Rata-rata beberapa pengukuran", expr: "d̄ = (d₁ + d₂ + d₃) / 3", note: "d (mm), dipakai untuk mengurangi pengaruh galat acak" }
    ],
    examples: [
      {
        question: "Sebuah pensil diukur dengan jangka sorong ketelitian 0,1 mm. Skala utama menunjukkan 52 mm dan garis nonius ke-7 berimpit dengan skala utama. Berapa panjang pensil tersebut?",
        steps: [
          "Diketahui: skala utama 52 mm, garis nonius ke-7 berimpit, ketelitian 0,1 mm.",
          "Rumus: bacaan = skala utama + (skala nonius × ketelitian).",
          "Penyelesaian: bacaan = 52 mm + (7 × 0,1 mm) = 52 mm + 0,7 mm.",
          "Hasil akhir: 52,7 mm atau setara 5,27 cm."
        ],
        answer: "Jadi panjang pensil tersebut 52,7 mm."
      },
      {
        question: "Sebuah kawat diukur dengan mikrometer skrup ketelitian 0,01 mm. Skala utama menunjukkan 2,5 mm dan skala pembagi ke-45 berimpit dengan garis nol. Berapa diameter kawat?",
        steps: [
          "Diketahui: skala utama 2,5 mm, skala pembagi 45, ketelitian 0,01 mm.",
          "Rumus: bacaan = skala utama + (skala pembagi × 0,01 mm).",
          "Penyelesaian: bacaan = 2,5 mm + (45 × 0,01 mm) = 2,5 mm + 0,45 mm.",
          "Hasil akhir: 2,95 mm atau setara 0,295 cm."
        ],
        answer: "Jadi diameter kawat tersebut 2,95 mm."
      }
    ],
    tips: [
      "Selalu baca skala utama dulu baru skala nonius agar tidak terbalik.",
      "Catat ketelitian alat sebelum mengukur sebagai patokan pembulatan.",
      "Ukur diameter benda di beberapa titik untuk mendeteksi benda tidak bundar sempurna.",
      "Rapikan alat ukur setelah dipakai agar keteliannya tetap terjaga."
    ]
  },
  {
    id: 4,
    title: "Bab 4: Angka Penting & Notasi Ilmiah",
    summary: "Menentukan banyak angka penting, menulis notasi ilmiah, dan menghitung operasi sesuai aturan pembulatan.",
    sections: [
      {
        heading: "Aturan Angka Penting",
        paragraphs: [
          "Angka penting adalah angka yang benar-benar diketahui pasti ditambah satu angka perkiraan terakhir. Semua angka non nol di depan dihitung penting, sedangkan nol di depan angka pertama tidak dihitung."
        ],
        list: [
          "Semua angka non nol selalu dianggap angka penting.",
          "Nol di antara dua angka non nol termasuk angka penting, misalnya 4,505.",
          "Nol di belakang koma setelah angka non nol termasuk angka penting, misalnya 2,500.",
          "Nol di belakang angka non nol tanpa koma sering tidak pasti, misalnya 3500.",
          "Angka pengukuran harus ditulis lengkap dengan satuannya."
        ]
      },
      {
        heading: "Notasi Ilmiah",
        paragraphs: [
          "Notasi ilmiah menulis bilangan dalam bentuk a × 10 pangkat n dengan satu angka di depan koma. Cara ini memudahkan penulisan bilangan sangat besar maupun sangat kecil sekaligus menjaga angka pentingnya."
        ],
        list: [
          "Bentuk umum notasi ilmiah adalah a × 10ⁿ dengan 1 ≤ a < 10.",
          "Saat koma digeser ke kanan, eksponennya bernilai negatif.",
          "Saat koma digeser ke kiri, eksponennya bernilai positif.",
          "Nol di depan angka pertama tidak termasuk angka penting.",
          "Notasi ilmiah tetap mempertahankan seluruh angka penting hasil ukur."
        ]
      },
      {
        heading: "Operasi Aritmetika dan Pembulatan",
        paragraphs: [
          "Setiap operasi memiliki aturan pembulatan yang berbeda sesuai sifat angka yang terlibat. Pembulatan yang salah dapat membuat jawaban terlihat lebih teliti daripada data aslinya."
        ],
        list: [
          "Penjumlahan dan pengurangan mengikuti tempat desimal paling sedikit.",
          "Perkalian dan pembagian mengikuti faktor dengan angka penting paling sedikit.",
          "Bilangan hasil pembulatan dibulatkan ke angka terdekat, bukan selalu dibulatkan ke atas.",
          "Hasil sementara jangan dibulatkan terlalu cepat agar galat tidak menumpuk.",
          "Tulis hasil akhir sesuai jumlah angka penting yang paling membatasi."
        ]
      },
      {
        heading: "Kesalahan Pengukuran",
        paragraphs: [
          "Setiap pengukuran mengandung kesalahan baik karena keterbatasan alat maupun cara membaca. Kesalahan dinyatakan dalam bentuk absolut untuk nilai selisih dan relatif untuk perbandingannya."
        ],
        list: [
          "Kesalahan absolut = nilai ukur − nilai sebenarnya.",
          "Kesalahan relatif dinyatakan dalam persen terhadap nilai ukur.",
          "Kesalahan sistematis bersifat tetap arahnya dan dapat dikurangi kalibrasi.",
          "Kesalahan acak bersifat berubah dan dikurangi dengan pengulangan.",
          "Semakin kecil kesalahan relatif, semakin teliti pengukuran tersebut."
        ]
      }
    ],
    formulas: [
      { label: "Bentuk notasi ilmiah", expr: "N = a × 10ⁿ dengan 1 ≤ a < 10", note: "a (angka penting), n (eksponen bilangan bulat, boleh positif atau negatif)" },
      { label: "Penulisan desimal ke ilmiah", expr: "12500 = 1,25 × 10⁴", note: "geser koma 4 tempat ke kiri sehingga eksponen bernilai 4" },
      { label: "Aturan pembulatan perkalian", expr: "hasil = sesedikit mungkin angka penting", note: "hasil dibulatkan mengikuti faktor yang paling sedikit angka pentingnya" },
      { label: "Aturan pembulatan penjumlahan", expr: "hasil = sebelah koma paling sedikit", note: "dibulatkan sampai desimal yang paling sedikit di antara semua suku" },
      { label: "Kesalahan relatif", expr: "δ = (Δ / X) × 100%", note: "Δ (kesalahan absolut), X (nilai ukur), δ (kesalahan relatif dalam persen)" }
    ],
    examples: [
      {
        question: "Panjang meja terukur 126 cm dengan 3 angka penting dan lebar 84 cm dengan 2 angka penting. Hitung luas meja lalu tulis hasilnya dengan angka penting yang benar.",
        steps: [
          "Diketahui: l = 126 cm (3 angka penting), w = 84 cm (2 angka penting).",
          "Rumus: A = l × w.",
          "Penyelesaian: A = 126 × 84 = 10584 cm².",
          "Pembulatan: faktor 84 hanya punya 2 angka penting, maka 10584 dibulatkan menjadi 1,1 × 10⁴ cm²."
        ],
        answer: "Jadi luas meja 1,1 × 10⁴ cm² karena dibatasi 2 angka penting."
      },
      {
        question: "Ubah bilangan 0,0004560 ke dalam notasi ilmiah dan tentukan banyak angka pentingnya.",
        steps: [
          "Diketahui: bilangan 0,0004560.",
          "Geser koma ke kanan 4 tempat sehingga nilai berada antara 1 dan 10, yaitu 4,560.",
          "Karena koma digeser ke kanan 4 tempat, eksponen 10 bernilai −4.",
          "Nol di belakang koma setelah angka non nol ikut dihitung, jadi angka pentingnya ada 4."
        ],
        answer: "Jadi 0,0004560 = 4,560 × 10⁻⁴ dan memiliki 4 angka penting."
      }
    ],
    tips: [
      "Tandai dulu angka non nol sebelum menghitung banyak angka penting.",
      "Tulis bilangan besar dan kecil dengan notasi ilmiah agar ringkas dan benar.",
      "Perhatikan aturan pembulatan sebelum menulis jawaban akhir soal.",
      "Bandingkan jawaban dengan data asli agar hasil masih masuk akal."
    ]
  },
  {
    id: 5,
    title: "Bab 5: Vektor Fisika",
    summary: "Memahami sifat vektor, komponen, penjumlahan vektor, resultan, dan arah vektor hasil.",
    sections: [
      {
        heading: "Skalar dan Vektor",
        paragraphs: [
          "Besaran skalar hanya dinyatakan dengan besar dan satuan, sedangkan besaran vektor memerlukan besar, satuan, dan arah. Gaya, perpindahan, kecepatan, dan percepatan termasuk besaran vektor."
        ],
        list: [
          "Contoh besaran skalar adalah massa, waktu, suhu, energi, dan kerja.",
          "Contoh besaran vektor adalah gaya, perpindahan, kecepatan, dan percepatan.",
          "Vektor dituliskan dengan huruf tebal atau dengan tanda panah di atasnya.",
          "Panah vektor menunjukkan besar beserta arah perbesaran dan arah vektor.",
          "Dua vektor sama besar dan sama arah disebut vektor kongruen."
        ]
      },
      {
        heading: "Komponen Vektor",
        paragraphs: [
          "Setiap vektor dapat diuraikan menjadi komponen pada sumbu tegak lurus memakai fungsi trigonometri. Penguraian ini memudahkan penjumlahan vektor karena bekerja pada satu sumbu saja."
        ],
        list: [
          "Komponen sumbu x diperoleh dari perkalian besaran vektor dengan kosinus sudut.",
          "Komponen sumbu y diperoleh dari perkalian besaran vektor dengan sinus sudut.",
          "Sudut dihitung dari sumbu x positif agar tanda komponen konsisten.",
          "Vektor pada kuadran pertama memiliki kedua komponen bernilai positif.",
          "Besar vektor dapat dikembalikan dengan teorema Pythagoras dari kedua komponennya."
        ]
      },
      {
        heading: "Penjumlahan Dua Vektor",
        paragraphs: [
          "Penjumlahan vektor dapat dilakukan dengan metode segitiga, metode paralelogram, dan penjumlahan komponen. Hasil penjumlahan disebut vektor resultan yang mewakili gabungan kedua vektor tersebut."
        ],
        list: [
          "Pada metode segitiga, ujung vektor pertama disambungkan ke pangkal vektor kedua.",
          "Pada metode paralelogram, kedua vektor digambar dari titik yang sama.",
          "Resultan diagonal paralelogram adalah besar resultan kedua vektor.",
          "Untuk dua vektor tegak lurus, resultan memakai teorema Pythagoras.",
          "Penjumlahan komponen paling akurat untuk lebih dari dua vektor."
        ]
      },
      {
        heading: "Arah Resultan dan Vektor Resultan Nol",
        paragraphs: [
          "Selain besar, resultan juga memerlukan arah yang dinyatakan sebagai sudut terhadap salah satu vektor. Dua vektor dapat menghasilkan resultan nol bila besarnya sama dengan arah berlawanan."
        ],
        list: [
          "Arah resultan dihitung dengan fungsi tangen dari perbandingan komponen.",
          "Resultan vektor selalu berada di antara kedua vektor pembentuknya.",
          "Resultan nol terjadi bila dua vektor sama besar dan arahnya berlawanan.",
          "Vektor resultan nol berarti sistem gaya berada dalam kesetimbangan.",
          "Satuan resultan sama dengan satuan vektor yang dijumlahkan."
        ]
      }
    ],
    formulas: [
      { label: "Resultan dua vektor membentuk sudut", expr: "R = √(A² + B² + 2 A B cos θ)", note: "A dan B (satuan sama), θ (sudut antara kedua vektor), R (satuan A)" },
      { label: "Resultan dua vektor tegak lurus", expr: "R = √(A² + B²)", note: "berlaku bila θ = 90° karena cos 90° = 0, R (satuan A)" },
      { label: "Arah resultan", expr: "tan α = (B sin θ) / (A + B cos θ)", note: "α (sudut resultan terhadap vektor A), θ (sudut antara A dan B)" },
      { label: "Komponen vektor", expr: "Aₓ = A cos θ; Aᵧ = A sin θ", note: "Aₓ (komponen sumbu x), Aᵧ (komponen sumbu y), θ (sudut terhadap sumbu x)" },
      { label: "Resultan dengan metode komponen", expr: "R = √((ΣAₓ)² + (ΣAᵧ)²)", note: "ΣAₓ (jumlah komponen mendatar), ΣAᵧ (jumlah komponen tegak lurus), R (satuan A)" }
    ],
    examples: [
      {
        question: "Dua gaya masing-masing 3 N dan 4 N membentuk sudut 90° pada sebuah benda. Hitung besar resultan gaya dan sudut resultannya terhadap gaya 3 N.",
        steps: [
          "Diketahui: A = 3 N, B = 4 N, θ = 90°.",
          "Rumus: R = √(A² + B² + 2 A B cos 90°) dengan cos 90° = 0.",
          "Penyelesaian: R = √(3² + 4²) = √(9 + 16) = √25 = 5 N.",
          "Arah: tan α = 4 / 3 sehingga α ≈ 53° terhadap gaya 3 N."
        ],
        answer: "Jadi resultan kedua gaya adalah 5 N membentuk sudut 53° terhadap gaya 3 N."
      },
      {
        question: "Sebuah perahu menarik peti dengan gaya 60 N yang membentuk sudut 30° terhadap permukaan air. Tentukan komponen gaya mendatar dan komponen gaya tegak lurus.",
        steps: [
          "Diketahui: F = 60 N dan θ = 30° terhadap arah mendatar.",
          "Rumus komponen: Fₓ = F cos θ dan Fᵧ = F sin θ.",
          "Penyelesaian: Fₓ = 60 × cos 30° = 60 × 0,866 = 52,0 N.",
          "Fᵧ = 60 × sin 30° = 60 × 0,5 = 30 N."
        ],
        answer: "Jadi komponen gaya mendatar 52,0 N dan komponen tegak lurus 30 N."
      }
    ],
    tips: [
      "Gambar vektor dulu sebelum menghitung agar arah tidak tertukar.",
      "Gunakan sudut terhadap sumbu x positif supaya tanda komponen selalu benar.",
      "Penjumlahan komponen lebih aman dipakai daripada menggambar untuk soal rumit.",
      "Selalu tulis arah resultan bersama besarnya karena resultan itu vektor."
    ]
  },
  {
    id: 6,
    title: "Bab 6: Gerak Lurus (GLB & GLBB)",
    summary: "Menganalisis gerak lurus beraturan dan berubah beraturan memakai persamaan gerak dan grafik kecepatan waktu.",
    sections: [
      {
        heading: "Jarak, Perpindahan, dan Kelajuan",
        paragraphs: [
          "Jarak adalah panjang lintasan yang dilalui dan bersifat skalar, sedangkan perpindahan adalah selisih posisi akhir dan awal serta bersifat vektor. Besaran laju, kelajuan, dan kecepatan perlu dibedakan agar analisis gerak tepat."
        ],
        list: [
          "Posisi menyatakan letak benda terhadap titik acuan pada suatu sumbu.",
          "Perpindahan positif bila arah gerak searah dengan sumbu yang ditetapkan.",
          "Jarak tempuh selalu bernilai positif meski arah gerak berubah.",
          "Laju adalah besaran jarak tempuh per satuan waktu dan bersifat skalar.",
          "Kecepatan adalah perubahan perpindahan per satuan waktu dan bersifat vektor."
        ]
      },
      {
        heading: "Gerak Lurus Beraturan (GLB)",
        paragraphs: [
          "GLB adalah gerak pada lintasan lurus dengan kecepatan tetap sehingga percepatannya nol. Grafik kecepatan terhadap waktu berupa garis datar dan grafik perpindahan berupa garis lurus yang miring."
        ],
        list: [
          "Kecepatan tetap artinya besar dan arahnya tidak berubah sepanjang waktu.",
          "Percepatan GLB bernilai nol.",
          "Jarak tempuh sebanding lurus dengan waktu tempuh.",
          "Kelajuan rata-rata pada GLB sama dengan kecepatannya.",
          "Contoh GLB adalah lift bergerak naik dengan kecepatan konstan."
        ]
      },
      {
        heading: "Gerak Lurus Berubah Beraturan (GLBB)",
        paragraphs: [
          "GLBB adalah gerak lurus dengan percepatan tetap, artinya kecepatannya berubah dengan laju konstan. GLBB terbagi menjadi mempercepat bila arah percepatan searah kecepatan dan memperlambat bila berlawanan."
        ],
        list: [
          "Percepatan tetap menyebabkan kecepatan berubah sama banyak tiap sekon.",
          "Bila arah percepatan sama dengan arah gerak, benda mempercepat.",
          "Bila arah percepatan berlawanan dengan arah gerak, benda memperlambat.",
          "Perpindahan dipengaruhi kecepatan awal sekaligus percepatan.",
          "Benda yang dijatuhkan tegak lurus mengalami GLBB dengan percepatan gravitasi."
        ]
      },
      {
        heading: "Grafik Gerak dan Gravitasi Bumi",
        paragraphs: [
          "Grafik perpindahan terhadap waktu memiliki kemiringan yang menyatakan kecepatan, sedangkan grafik kecepatan terhadap waktu memiliki kemiringan yang menyatakan percepatan. Luas di bawah grafik kecepatan menyatakan perpindahan benda."
        ],
        list: [
          "Kemiringan grafik posisi waktu sama dengan kecepatan benda.",
          "Kemiringan grafik kecepatan waktu sama dengan percepatan benda.",
          "Luas grafik kecepatan waktu setara dengan perpindahan benda.",
          "Benda jatuh bebas memiliki percepatan tetap sebesar g ke arah bawah.",
          "Nilai g kira-kira 9,8 m/s² dan sering dibulatkan menjadi 10 m/s² dalam soal."
        ]
      }
    ],
    formulas: [
      { label: "Kecepatan rata-rata", expr: "v̄ = Δs / Δt = (s₂ − s₁) / (t₂ − t₁)", note: "v̄ (m/s), s (m), t (s)" },
      { label: "Persamaan GLB", expr: "s = v · t", note: "s (m), v (m/s) tetap sepanjang gerak, t (s)" },
      { label: "Kecepatan pada GLBB", expr: "v = v₀ + a · t", note: "v (m/s), v₀ (m/s), a (m/s²), t (s)" },
      { label: "Perpindahan pada GLBB", expr: "s = v₀ t + ½ a t²", note: "s (m), v₀ (m/s), a (m/s²), t (s)" },
      { label: "Persamaan tanpa waktu", expr: "v² = v₀² + 2 a s", note: "v (m/s), v₀ (m/s), a (m/s²), s (m)" },
      { label: "Percepatan gravitasi", expr: "g = 9,8 m/s² ≈ 10 m/s²", note: "berlaku untuk benda jatuh bebas, arahnya menuju pusat bumi" }
    ],
    examples: [
      {
        question: "Sebuah mobil bergerak dari kecepatan 10 m/s mengalami percepatan tetap 2 m/s² selama 6 sekon. Tentukan jarak yang ditempuh dan kecepatan akhir mobil.",
        steps: [
          "Diketahui: v₀ = 10 m/s, a = 2 m/s², t = 6 s.",
          "Kecepatan akhir: v = v₀ + a t = 10 + 2 × 6 = 22 m/s.",
          "Jarak tempuh: s = v₀ t + ½ a t².",
          "Penyelesaian: s = 10 × 6 + ½ × 2 × 6² = 60 + 36 = 96 m."
        ],
        answer: "Jadi mobil menempuh jarak 96 m dengan kecepatan akhir 22 m/s."
      },
      {
        question: "Sebuah benda dijatuhkan bebas dari ketinggian 45 m tanpa hambatan udara. Jika percepatan gravitasi 10 m/s², berapa waktu yang diperlukan dan kecepatan benda saat menyentuh tanah?",
        steps: [
          "Diketahui: h = 45 m, v₀ = 0, g = 10 m/s².",
          "Rumus: h = ½ g t² karena benda dimulai dari diam.",
          "Penyelesaian waktu: 45 = ½ × 10 × t² sehingga t² = 9 dan t = 3 s.",
          "Kecepatan akhir: v = g t = 10 × 3 = 30 m/s."
        ],
        answer: "Jadi benda mencapai tanah dalam 3 sekon dengan kecepatan 30 m/s."
      }
    ],
    tips: [
      "Tentukan dulu tanda positif untuk arah gerak sebelum menghitung.",
      "Pilih persamaan yang tidak memuat besaran tidak diketahui agar lebih cepat.",
      "Cek apakah percepatan dan kecepatan awal searah atau berlawanan.",
      "Gambar grafik sederhana untuk memastikan jawaban masuk akal."
    ]
  },
  {
    id: 7,
    title: "Bab 7: Gerak Parabola",
    summary: "Menganalisis gerak parabola sebagai gabungan gerak mendatar beraturan dan gerak tegak lurus berubah beraturan.",
    sections: [
      {
        heading: "Sifat Gerak Parabola",
        paragraphs: [
          "Gerak parabola adalah gerak benda yang dilemparkan dengan sudut tertentu terhadap dataran. Karena hanya gaya berat yang bekerja, gerak mendatarnya beraturan sedangkan gerak tegak lurusnya mengalami percepatan gravitasi."
        ],
        list: [
          "Lintasan benda berbentuk parabola yang terbuka ke bawah.",
          "Tidak ada percepatan pada arah mendatar sehingga kecepatan mendatar tetap.",
          "Kecepatan tegak lurus berkurang saat naik dan bertambah saat turun.",
          "Kecepatan total selalu berubah arah maupun besarannya.",
          "Puncak lintasan dicapai saat komponen kecepatan tegak lurus sama dengan nol."
        ]
      },
      {
        heading: "Komponen Kecepatan Awal",
        paragraphs: [
          "Kecepatan awal diuraikan menjadi komponen mendatar dengan kosinus dan komponen tegak lurus dengan sinus sudut peluncuran. Penguraian ini menjadi dasar seluruh perhitungan gerak parabola."
        ],
        list: [
          "Komponen mendatar memakai v₀ cos θ dan tetap sepanjang gerak.",
          "Komponen tegak lurus memakai v₀ sin θ dan berkurang karena gravitasi.",
          "Pada titik puncak, komponen kecepatan tegak lurus sama dengan nol.",
          "Makin besar sudut peluncuran, makin besar komponen tegak lurus awal.",
          "Sudut 45° memberi jangkauan maksimum bila titik awal dan akhir sama tinggi."
        ]
      },
      {
        heading: "Jangkauan dan Ketinggian Maksimum",
        paragraphs: [
          "Jangkauan adalah jarak mendatar terjauh yang ditempuh benda, sedangkan ketinggian maksimum adalah titik tertinggi pada lintasan. Keduanya bergantung pada kecepatan awal, sudut peluncuran, dan percepatan gravitasi."
        ],
        list: [
          "Jangkauan maksimum sebanding dengan kuadrat kecepatan awal.",
          "Jangkauan maksimum berbanding terbalik dengan percepatan gravitasi.",
          "Ketinggian maksimum sebanding dengan kuadrat sinus sudut peluncuran.",
          "Sudut peluncuran sin 2θ maksimum pada 45°, sehingga jangkauan terbesar di sana.",
          "Dua sudut peluncuran yang berjumlah 90° memiliki jangkauan sama besar."
        ]
      },
      {
        heading: "Waktu di Udara dan Bentuk Lintasan",
        paragraphs: [
          "Waktu benda berada di udara bergantung pada komponen kecepatan tegak lurus awal dan ketinggian titik peluncuran. Persamaan lintasan menghubungkan koordinat y dan x sehingga bentuk parabola dapat digambarkan."
        ],
        list: [
          "Waktu di udara dua kali waktu mencapai puncak bila titik awal dan akhir sama tinggi.",
          "Semakin besar sudut peluncuran, semakin lama benda berada di udara.",
          "Pada titik puncak, ketinggian maksimum dapat dihitung dari energi kinetik tegak lurus.",
          "Persamaan lintasan memuat tan θ pada suku linear terhadap jarak mendatar.",
          "Semua bentuk lintasan parabola bersifat simetris terhadap garis tegak lurus puncak."
        ]
      }
    ],
    formulas: [
      { label: "Komponen kecepatan mendatar", expr: "vₓ = v₀ cos θ", note: "vₓ (m/s) tetap, v₀ (m/s), θ (derajat terhadap dataran)" },
      { label: "Komponen kecepatan tegak lurus", expr: "vᵧ = v₀ sin θ − g t", note: "vᵧ (m/s), g (m/s²), t (s), berubah linier terhadap waktu" },
      { label: "Persamaan lintasan parabola", expr: "y = x tan θ − (g x²) / (2 v₀² cos² θ)", note: "y dan x (m), v₀ (m/s), θ (derajat), g (m/s²)" },
      { label: "Jangkauan maksimum", expr: "R = v₀² sin 2θ / g", note: "R (m), v₀ (m/s), θ (derajat), g (m/s²), berlaku di dataran datar" },
      { label: "Ketinggian maksimum", expr: "H = v₀² sin² θ / (2 g)", note: "H (m), v₀ (m/s), θ (derajat), g (m/s²)" },
      { label: "Waktu berada di udara", expr: "T = 2 v₀ sin θ / g", note: "T (s), berlaku bila titik peluncuran dan jatuh sama tinggi" }
    ],
    examples: [
      {
        question: "Sebuah bola dilemparkan mendatar dari ketinggian 45 m dengan kecepatan 20 m/s. Jika percepatan gravitasi 10 m/s², tentukan waktu bola di udara dan jarak mendatar yang ditempuh.",
        steps: [
          "Diketahui: vₓ = 20 m/s, h = 45 m, g = 10 m/s², v₀ᵧ = 0.",
          "Rumus arah tegak lurus: h = ½ g t².",
          "Penyelesaian waktu: 45 = ½ × 10 × t² sehingga t² = 9 dan t = 3 s.",
          "Rumus arah mendatar: x = vₓ t = 20 × 3 = 60 m."
        ],
        answer: "Jadi bola berada di udara 3 sekon dan jatuh 60 m dari titik peluncuran."
      },
      {
        question: "Sebuah peluru dilemparkan dengan kecepatan 30 m/s membentuk sudut 30° terhadap horizontal. Hitung jangkauan maksimum dan waktu peluru berada di udara, dengan g = 10 m/s².",
        steps: [
          "Diketahui: v₀ = 30 m/s, θ = 30°, g = 10 m/s².",
          "Rumus jangkauan: R = v₀² sin 2θ / g.",
          "Penyelesaian: R = (30² × sin 60°) / 10 = (900 × 0,866) / 10 = 77,9 m.",
          "Waktu di udara: T = (2 v₀ sin θ) / g = (2 × 30 × 0,5) / 10 = 3 s."
        ],
        answer: "Jadi jangkauan maksimum peluru 77,9 m dan waktu di udara 3 sekon."
      }
    ],
    tips: [
      "Uraikan kecepatan awal sebelum memasukkan waktu ke persamaan gerak.",
      "Ingat komponen mendatar selalu konstan karena tanpa percepatan.",
      "Perhatikan titik awal dan akhir sama tinggi atau tidak saat memilih rumus.",
      "Gunakan sudut 45° sebagai pengingat jangkauan maksimum di dataran datar."
    ]
  },
  {
    id: 8,
    title: "Bab 8: Gerak Melingkar",
    summary: "Menghubungkan besaran sudut, kecepatan sudut, percepatan sentripetal, dan gaya sentripetal pada lintasan melingkar.",
    sections: [
      {
        heading: "Gerak Melingkar Beraturan",
        paragraphs: [
          "Gerak melingkar beraturan terjadi bila benda berputar pada lintasan melingkar dengan kecepatan sudut tetap. Besar kecepatan linier tetap, tetapi arahnya selalu berubah sehingga tetap terjadi percepatan."
        ],
        list: [
          "Sudut tempuh dihitung dalam radian dengan kelilingan 2π rad.",
          "Satu putaran penuh sama dengan 360 derajat atau 2π radian.",
          "Kecepatan linier searah dengan garis singgung di titik benda.",
          "Percepatan sentripetal searah dengan jari-jari menuju pusat lingkaran.",
          "Gerak melingkar beraturan tetap memiliki percepatan meski besar kecepatan tetap."
        ]
      },
      {
        heading: "Hubungan Besaran Melingkar",
        paragraphs: [
          "Periode adalah waktu untuk satu putaran penuh, sedangkan frekuensi adalah banyak putaran tiap sekon. Besaran linier dan besaran sudut saling dihubungkan melalui jari-jari lintasan."
        ],
        list: [
          "Periode dinyatakan dalam sekon dan frekuensi dalam hertz.",
          "Periode dan frekuensi adalah besaran timbal balik satu sama lain.",
          "Kecepatan linier sama dengan kecepatan sudut dikalikan jari-jari.",
          "Makin besar jari-jari, makin besar kecepatan linier pada kecepatan sudut sama.",
          "Satu hertz sama dengan satu putaran per sekon."
        ]
      },
      {
        heading: "Percepatan dan Gaya Sentripetal",
        paragraphs: [
          "Percepatan sentripetal selalu menuju pusat lingkaran dan menyebabkan perubahan arah kecepatan. Gaya sentripetal adalah gaya resultan yang menghasilkan percepatan tersebut."
        ],
        list: [
          "Percepatan sentripetal sebanding dengan kuadrat kecepatan linier.",
          "Percepatan sentripetal berbanding terbalik dengan jari-jari lintasan.",
          "Gaya sentripetal berasal dari gesekan, tegangan tali, atau gaya normal.",
          "Gaya sentripetal bukan gaya tambahan, melainkan nama untuk gaya resultan.",
          "Arah gaya sentripetal selalu menuju pusat putaran."
        ]
      },
      {
        heading: "Penerapan dan Arah Vektor",
        paragraphs: [
          "Dalam kehidupan sehari-hari gaya sentripetal muncul pada mobil menikung, ayunan, dan benda yang berputar. Bila gaya pengikat putaran hilang, benda akan bergerak lurus searah tangen karena kelembaman."
        ],
        list: [
          "Ban mobil yang tidak licin menyediakan gesekan sebagai gaya sentripetal.",
          "Bila kecepatan mobil terlalu besar, gaya gesek tidak cukup sehingga mobil tergelincir.",
          "Percepatan tangensial muncul bila besar kecepatan linier berubah.",
          "Putaran roda kendaraan memuat komponen kecepatan sudut dan linier.",
          "Mikroskop elektron dan kincir memakai prinsip percepatan sentripetal yang sama."
        ]
      }
    ],
    formulas: [
      { label: "Kecepatan sudut", expr: "ω = Δθ / Δt", note: "ω (rad/s), Δθ (rad), Δt (s)" },
      { label: "Hubungan kecepatan linier dan sudut", expr: "v = ω · r", note: "v (m/s), ω (rad/s), r (m)" },
      { label: "Periode dan frekuensi", expr: "T = 1 / f", note: "T (s), f (Hz), satu putaran penuh sama dengan 2π rad" },
      { label: "Percepatan sentripetal", expr: "a = v² / r = ω² r", note: "a (percepatan sentripetal, m/s²), v (m/s), r (m), arah menuju pusat lingkaran" },
      { label: "Gaya sentripetal", expr: "F = m v² / r", note: "F (gaya sentripetal, N), m (kg), v (m/s), r (m)" },
      { label: "Percepatan tangensial", expr: "a = α · r", note: "a (percepatan tangensial, m/s²), α (percepatan sudut, rad/s²), r (m)" }
    ],
    examples: [
      {
        question: "Sebuah mobil bergerak pada lintasan melingkar berjari-jari 50 m dengan kecepatan 20 m/s. Jika massa mobil 1000 kg, berapa percepatan sentripetal dan gaya sentripetal yang bekerja?",
        steps: [
          "Diketahui: r = 50 m, v = 20 m/s, m = 1000 kg.",
          "Rumus percepatan sentripetal: a = v² / r.",
          "Penyelesaian: a = 20² / 50 = 400 / 50 = 8 m/s².",
          "Rumus gaya sentripetal: F = m a = 1000 × 8 = 8000 N."
        ],
        answer: "Jadi percepatan sentripetal 8 m/s² dan gaya sentripetal 8000 N menuju pusat lintasan."
      },
      {
        question: "Sebuah kincir berputar sebanyak 120 putaran dalam waktu 1 menit. Tentukan periode, frekuensi, dan kecepatan sudut kincir tersebut.",
        steps: [
          "Diketahui: 120 putaran dalam waktu 60 s.",
          "Frekuensi: f = 120 / 60 = 2 Hz.",
          "Periode: T = 1 / f = 1 / 2 = 0,5 s.",
          "Kecepatan sudut: ω = 2 π f = 2 × 3,14 × 2 = 12,57 rad/s."
        ],
        answer: "Jadi periode kincir 0,5 s, frekuensi 2 Hz, dan kecepatan sudut 12,57 rad/s."
      }
    ],
    tips: [
      "Selalu arahkan percepatan sentripetal ke pusat lingkaran, bukan ke tangen.",
      "Konversi putaran ke radian sebelum menghitung kecepatan sudut.",
      "Pilih antara v²/r atau ω² r sesuai besaran yang tersedia di soal.",
      "Ingat kecepatan linier tetap besarannya tetapi arahnya terus berubah."
    ]
  },
  {
    id: 9,
    title: "Bab 9: Hukum Newton & Penerapan",
    summary: "Mempelajari tiga hukum Newton beserta gaya berat, gaya normal, gesek, dan gaya pada bidang miring.",
    sections: [
      {
        heading: "Hukum I Newton",
        paragraphs: [
          "Hukum I Newton menyatakan bahwa benda cenderung mempertahankan keadaannya, yaitu diam atau bergerak lurus beraturan, selama resultan gaya yang bekerja nol. Sifat mempertahankan keadaan gerak ini disebut inersia."
        ],
        list: [
          "Benda diam akan tetap diam bila resultan gaya nol.",
          "Benda bergerak lurus beraturan tetap bergerak dengan kecepatan sama bila resultan gaya nol.",
          "Inersia sebanding dengan massa benda.",
          "Massa adalah ukuran inersia sebuah benda.",
          "Penumpang terdorong ke depan saat mobil mendadak berhenti karena inersia tubuh."
        ]
      },
      {
        heading: "Hukum II Newton",
        paragraphs: [
          "Hukum II Newton menyatakan bahwa percepatan benda berbanding lurus dengan resultan gaya dan berbanding terbalik dengan massanya. Percepatan selalu searah dengan resultan gaya yang bekerja."
        ],
        list: [
          "Percepatan bertambah bila resultan gaya diperbesar dengan massa tetap.",
          "Percepatan berkurang bila massa diperbesar dengan gaya tetap.",
          "Massa dan gaya dinyatakan dalam kilogram dan newton.",
          "Resultan gaya dihitung dengan menjumlahkan gaya-gaya secara vektor.",
          "Hukum II menjadi dasar perhitungan percepatan pada soal dinamika."
        ]
      },
      {
        heading: "Hukum III Newton",
        paragraphs: [
          "Hukum III Newton menyatakan bahwa setiap aksi selalu diiringi reaksi yang sama besar dan berlawanan arah. Kedua gaya bekerja pada dua benda berbeda sehingga tidak saling menghapus."
        ],
        list: [
          "Gaya aksi dan reaksi selalu sama besar dan berlawanan arah.",
          "Kedua gaya bekerja pada dua benda yang berbeda.",
          "Contohnya daya dorong dayung pada air dan air pada dayung.",
          "Roket didorong mundur oleh gas pembakaran sehingga roket melaju ke depan.",
          "Karena berada pada benda berbeda, gaya aksi dan reaksi tidak saling menghapus."
        ]
      },
      {
        heading: "Gaya Berat, Gaya Normal, dan Gaya Gesek",
        paragraphs: [
          "Gaya berat adalah gaya gravitasi bumi pada benda, sedangkan gaya normal adalah gaya tegak lurus permukaan terhadap benda yang menopangnya. Gaya gesek muncul di permukaan kontak dan berbanding lurus dengan gaya normal."
        ],
        list: [
          "Gaya normal selalu tegak lurus terhadap permukaan penyangga.",
          "Pada lantai datar, gaya normal sama besar dengan gaya berat benda.",
          "Gaya gesek statis mencegah benda mulai bergerak.",
          "Gaya gesek kinetis melawan arah gerak benda yang sudah bergerak.",
          "Koefisien gesek tidak memiliki satuan dan selalu lebih kecil dari satu."
        ]
      }
    ],
    formulas: [
      { label: "Kesetimbangan benda", expr: "ΣF = 0", note: "berlaku bila benda diam atau bergerak lurus beraturan, resultan gaya (N) sama dengan nol" },
      { label: "Hukum II Newton", expr: "F = m · a", note: "F (N), m (kg), a (m/s²), arah percepatan sama dengan arah resultan gaya" },
      { label: "Gaya berat", expr: "W = m · g", note: "W (N), m (kg), g = 9,8 m/s², arah menuju pusat bumi" },
      { label: "Gaya gesek", expr: "f = μ · N", note: "f (N), N (gaya normal, N), μ (koefisien gesek, tanpa satuan)" },
      { label: "Komponen gaya pada bidang miring", expr: "F∥ = m g sin θ; F⊥ = m g cos θ", note: "F∥ (menggelincir sepanjang bidang), F⊥ (menekan bidang), θ (sudut bidang)" },
      { label: "Hukum III Newton", expr: "F aksi = − F reaksi", note: "F aksi (gaya benda pertama pada kedua, N), F reaksi (gaya benda kedua pada pertama, N), sama besar dan berlawanan arah" }
    ],
    examples: [
      {
        question: "Sebuah mobil bermassa 1200 kg bergerak dengan percepatan 2,5 m/s². Berapa besar gaya resultan yang bekerja pada mobil tersebut?",
        steps: [
          "Diketahui: m = 1200 kg dan a = 2,5 m/s².",
          "Rumus: F = m · a.",
          "Penyelesaian: F = 1200 × 2,5 = 3000 N.",
          "Arah gaya sama dengan arah percepatan, yaitu ke arah gerak mobil."
        ],
        answer: "Jadi gaya resultan yang bekerja pada mobil adalah 3000 N."
      },
      {
        question: "Sebuah benda bermassa 4 kg ditarik tali pada lantai datar dengan gaya 25 N. Jika koefisien gesek kinetis 0,3 dan g = 10 m/s², hitung gaya gesek kinetis dan percepatan benda.",
        steps: [
          "Diketahui: m = 4 kg, F tarik = 25 N, μₖ = 0,3, g = 10 m/s².",
          "Gaya normal pada lantai datar: N = m g = 4 × 10 = 40 N.",
          "Gaya gesek kinetis: f = μ N = 0,3 × 40 = 12 N.",
          "Resultan gaya: ΣF = 25 − 12 = 13 N sehingga a = ΣF / m = 13 / 4 = 3,25 m/s²."
        ],
        answer: "Jadi gaya gesek kinetis 12 N dan percepatan benda 3,25 m/s²."
      }
    ],
    tips: [
      "Gambar seluruh gaya yang bekerja pada benda sebelum menulis persamaan.",
      "Tetapkan arah positif lalu beri tanda plus atau minus pada tiap gaya.",
      "Gaya normal tidak selalu sama dengan gaya berat, tergantung situasi.",
      "Pisahkan gaya aksi dan reaksi karena keduanya bekerja pada benda berbeda."
    ]
  },
  {
    id: 10,
    title: "Bab 10: Usaha & Energi",
    summary: "Menghitung usaha, energi kinetik, energi potensial, daya, serta menerapkan kekekalan energi mekanik.",
    sections: [
      {
        heading: "Usaha dan Daya",
        paragraphs: [
          "Usaha terjadi bila sebuah gaya bekerja pada benda sehingga benda mengalami perpindahan. Daya menyatakan seberapa cepat usaha dilakukan, sehingga usaha yang sama dapat menghasilkan daya berbeda bila waktu pengerjaannya berbeda."
        ],
        list: [
          "Usaha hanya terjadi bila ada perpindahan pada arah gaya.",
          "Usaha bersifat skalar dan dinyatakan dalam joule.",
          "Usaha oleh gaya tegak lurus perpindahan bernilai nol.",
          "Daya dinyatakan dalam watt yang setara dengan joule per sekon.",
          "Mesin yang bekerja lama dapat memiliki daya kecil meski total usahanya besar."
        ]
      },
      {
        heading: "Energi Kinetik",
        paragraphs: [
          "Energi kinetik adalah energi yang dimiliki benda karena sedang bergerak. Energi ini sebanding dengan massa dan dengan kuadrat kecepatan, sehingga kecepatan dua kali lipat menghasilkan energi empat kali lipat."
        ],
        list: [
          "Energi kinetik dinyatakan dalam joule.",
          "Makin besar massa, makin besar energi kinetik pada kecepatan sama.",
          "Makin cepat gerak benda, energi kinetiknya bertambah sangat cepat.",
          "Energi kinetik selalu bernilai positif karena kuadrat kecepatan.",
          "Kereta laju tinggi memiliki energi kinetik sangat besar sehingga sulit dihentikan."
        ]
      },
      {
        heading: "Energi Potensial dan Energi Mekanik",
        paragraphs: [
          "Energi potensial adalah energi tersimpan karena kedudukan atau kedudukan bendanya. Energi mekanik adalah jumlah energi kinetik dan energi potensial yang dimiliki benda."
        ],
        list: [
          "Energi potensial gravitasi bergantung pada ketinggian terhadap titik acuan.",
          "Titik acuan energi potensial dapat dipilih bebas sesuai kebutuhan soal.",
          "Semakin tinggi posisi benda, semakin besar energi potensialnya.",
          "Energi mekanik adalah jumlah energi kinetik dan energi potensial.",
          "Benda dilepas dari ketinggian menukar energi potensial menjadi energi kinetik."
        ]
      },
      {
        heading: "Kekekalan Energi dan Efisiensi",
        paragraphs: [
          "Energi tidak pernah hilang, hanya berubah bentuk dari satu jenis ke jenis lain. Pada sistem tanpa gesekan, energi mekanik awal sama dengan energi mekanik akhir, sedangkan pada sistem nyata sebagian berubah menjadi kalor."
        ],
        list: [
          "Hukum kekekalan energi menyatakan energi total selalu tetap.",
          "Energi kinetik dapat berubah menjadi energi potensial dan sebaliknya.",
          "Gesekan mengubah energi mekanik menjadi kalor yang terbuang.",
          "Efisiensi adalah perbandingan energi berguna dengan energi masukan.",
          "Efisiensi selalu lebih kecil dari 100% pada mesin nyata."
        ]
      }
    ],
    formulas: [
      { label: "Usaha oleh gaya konstan", expr: "W = F · s · cos θ", note: "W (joule, J), F (N), s (m), θ (sudut antara gaya dan perpindahan)" },
      { label: "Usaha oleh gaya berat", expr: "W = m g h", note: "W (J), m (kg), g (m/s²), h (m) selisih ketinggian, gaya berat bekerja ke bawah" },
      { label: "Energi kinetik", expr: "Eₖ = ½ m v²", note: "Eₖ (J), m (kg), v (m/s)" },
      { label: "Energi potensial gravitasi", expr: "Eₚ = m g h", note: "Eₚ (J), m (kg), g (m/s²), h (m) terhadap titik acuan" },
      { label: "Kekekalan energi mekanik", expr: "Eₖ₁ + Eₚ₁ = Eₖ₂ + Eₚ₂", note: "berlaku bila hanya gaya konservatif yang bekerja, seluruh suku dinyatakan dalam joule" },
      { label: "Daya", expr: "P = W / t = F · v", note: "P (watt, W), W (J), t (s), F (N), v (m/s)" }
    ],
    examples: [
      {
        question: "Seorang siswa mengangkat tas bermassa 5 kg setinggi 1,2 meter dalam waktu 2 sekon. Jika percepatan gravitasi 10 m/s², berapa usaha yang dilakukan dan berapa daya yang dikeluarkan?",
        steps: [
          "Diketahui: m = 5 kg, h = 1,2 m, t = 2 s, g = 10 m/s².",
          "Rumus usaha: W = m g h.",
          "Penyelesaian: W = 5 × 10 × 1,2 = 60 J.",
          "Daya: P = W / t = 60 J / 2 s = 30 W."
        ],
        answer: "Jadi usaha yang dilakukan 60 J dengan daya 30 W."
      },
      {
        question: "Sebuah benda bermassa 2 kg jatuh bebas dari ketinggian 20 m tanpa hambatan udara. Jika percepatan gravitasi 10 m/s², berapa energi kinetik benda saat menyentuh tanah?",
        steps: [
          "Diketahui: m = 2 kg, h = 20 m, g = 10 m/s², v₀ = 0.",
          "Energi mekanik awal hanya berupa Eₚ = m g h = 2 × 10 × 20 = 400 J.",
          "Prinsip kekekalan: Eₖ di tanah = Eₚ awal = 400 J karena Eₚ di tanah nol.",
          "Verifikasi: v = √(2 g h) = √400 = 20 m/s sehingga Eₖ = ½ × 2 × 20² = 400 J."
        ],
        answer: "Jadi energi kinetik benda saat menyentuh tanah adalah 400 J."
      }
    ],
    tips: [
      "Tentukan titik acuan ketinggian sebelum menghitung energi potensial.",
      "Perhatikan sudut antara gaya dan perpindahan saat menghitung usaha.",
      "Gunakan kekekalan energi bila prosesnya melibatkan perubahan ketinggian dan kecepatan.",
      "Selalu bandingkan energi awal dan akhir agar tidak ada energi yang terlewat."
    ]
  },
  {
    id: 11,
    title: "Bab 11: Momentum & Impuls",
    summary: "Memahami momentum, impuls, kekekalan momentum, tumbukan, dan koefisien restitusi dua benda.",
    sections: [
      {
        heading: "Momentum dan Impuls",
        paragraphs: [
          "Momentum adalah besaran vektor hasil kali massa dengan kecepatan suatu benda. Impuls adalah gaya yang dikalikan waktu bekerjanya dan setara dengan perubahan momentum benda tersebut."
        ],
        list: [
          "Momentum dinyatakan dalam kilogram meter per sekon.",
          "Momentum searah dengan arah kecepatan benda.",
          "Benda lebih berat atau lebih cepat memiliki momentum lebih besar.",
          "Impuls memiliki satuan yang sama dengan momentum.",
          "Pompa dan bantalan memperpanjang waktu tumbukan untuk memperkecil gaya."
        ]
      },
      {
        heading: "Kekekalan Momentum",
        paragraphs: [
          "Momentum total sebuah sistem kekal bila resultan gaya eksternal yang bekerja pada sistem bernilai nol. Prinsip ini sangat berguna pada tumbukan, ledakan, dan gerak mundur senjata."
        ],
        list: [
          "Momentum total sebelum tumbukan sama dengan momentum total sesudah tumbukan.",
          "Kekekalan momentum berlaku pada sumbu tertentu bila gaya eksternal di arah itu nol.",
          "Massa kedua benda perlu diperhatikan saat menghitung momentum gabungan.",
          "Arah momentum ditentukan oleh tanda positif dan negatif yang dipilih.",
          "Roket bergerak mundur karena momentum total roda dan gas tetap nol."
        ]
      },
      {
        heading: "Tumbukan Lenting dan Tidak Lenting",
        paragraphs: [
          "Tumbukan elastis sempurna mempertahankan energi kinetik total, sedangkan tumbukan tidak lenting mengubah sebagian energi kinetik menjadi kalor atau energi pemadatan. Kedua tumbukan tetap mematuhi kekekalan momentum."
        ],
        list: [
          "Tumbukan lenting sempurna memiliki koefisien restitusi sama dengan satu.",
          "Tumbukan tidak lenting memiliki koefisien restitusi sama dengan nol.",
          "Pada tumbukan menyatu, kedua benda bergerak dengan kecepatan sama sesudah tumbukan.",
          "Energi kinetik tidak kekal pada tumbukan tidak lenting.",
          "Momentum total selalu kekal pada kedua jenis tumbukan."
        ]
      },
      {
        heading: "Penerapan Momentum dan Impuls",
        paragraphs: [
          "Impuls dijelaskan oleh perubahan momentum, sehingga gaya besar pada waktu singkat memberi impuls yang sama dengan gaya kecil pada waktu panjang. Prinsip ini dipakai pada rem, bantalan benturan, dan pemukul bola."
        ],
        list: [
          "Gaya rata-rata sebanding terbalik dengan waktu tumbukan bila perubahan momentum tetap.",
          "Memperpanjang waktu benturan menurunkan gaya yang dirasakan benda.",
          "Helm dan airbag memperpanjang waktu tumbukan kepala saat kecelakaan.",
          "Tendangan dan pukulan memakai waktu kontak singkat agar gaya besar.",
          "Impuls gaya berat juga dihitung bila gaya tersebut bekerja selama waktu tertentu."
        ]
      }
    ],
    formulas: [
      { label: "Momentum", expr: "p = m · v", note: "p (kg·m/s), m (kg), v (m/s), arahnya sama dengan arah kecepatan" },
      { label: "Impuls", expr: "J = F · Δt = Δp", note: "J (N·s atau kg·m/s), F (N), Δt (s), Δp (perubahan momentum)" },
      { label: "Kekekalan momentum", expr: "m₁ v₁ + m₂ v₂ = m₁ v₁′ + m₂ v₂′", note: "berlaku bila resultan gaya eksternal nol, tanda ′ menyatakan keadaan sesudah tumbukan" },
      { label: "Tumbukan menyatu", expr: "v′ = (m₁ v₁ + m₂ v₂) / (m₁ + m₂)", note: "v′ (m/s), m₁ dan m₂ (kg), v₁ dan v₂ (m/s), sesudah tumbukan kedua benda satu kecepatan" },
      { label: "Koefisien restitusi", expr: "e = (v₂′ − v₁′) / (v₁ − v₂)", note: "e = 1 lenting sempurna, e = 0 tidak lenting, 0 < e < 1 lenting sebagian" },
      { label: "Gaya rata-rata", expr: "F = Δp / Δt", note: "F (N), Δp (kg·m/s), Δt (s), searah dengan perubahan momentum" }
    ],
    examples: [
      {
        question: "Sebuah bola bermassa 0,5 kg bergerak 8 m/s ke timur lalu menumbuk bola kedua bermassa 1,5 kg yang sedang diam. Kedua bola menyatu sesudah tumbukan. Berapa kecepatan akhir gabungan kedua bola?",
        steps: [
          "Diketahui: m₁ = 0,5 kg, v₁ = 8 m/s, m₂ = 1,5 kg, v₂ = 0, tumbukan menyatu.",
          "Rumus kekekalan momentum: m₁ v₁ + m₂ v₂ = (m₁ + m₂) v′.",
          "Penyelesaian: 0,5 × 8 + 1,5 × 0 = (0,5 + 1,5) v′ sehingga 4 = 2 v′.",
          "Maka v′ = 4 / 2 = 2 m/s ke arah yang sama dengan gerak bola pertama."
        ],
        answer: "Jadi kecepatan akhir kedua bola yang menyatu adalah 2 m/s."
      },
      {
        question: "Sebuah bola tenis bermassa 0,06 kg bergerak 20 m/s lalu dipukul kembali 30 m/s ke arah berlawanan. Jika kontak raket berlangsung 0,02 sekon, hitung perubahan momentum dan gaya rata-rata pada bola.",
        steps: [
          "Diketahui: m = 0,06 kg, v = −20 m/s (arah awal diambil negatif), v′ = +30 m/s, Δt = 0,02 s.",
          "Rumus: Δp = m (v′ − v).",
          "Penyelesaian: Δp = 0,06 × (30 − (−20)) = 0,06 × 50 = 3 kg·m/s.",
          "Gaya rata-rata: F = Δp / Δt = 3 / 0,02 = 150 N."
        ],
        answer: "Jadi perubahan momentum bola 3 kg·m/s dan gaya rata-ratanya 150 N."
      }
    ],
    tips: [
      "Tentukan arah positif dulu sebelum memberi tanda pada kecepatan.",
      "Kecekatan momentum total sebelum dan sesudah tumbukan adalah kunci soal tumbukan.",
      "Bedakan tumbukan menyatu dengan tumbukan pantul saat menentukan persamaan.",
      "Perhatikan waktu kontak untuk menilai besar gaya yang terjadi."
    ]
  },
  {
    id: 12,
    title: "Bab 12: Energi Terbarukan",
    summary: "Mengenal energi terbarukan seperti surya, angin, air, biomassa, dan geotermal beserta prinsip kerjanya.",
    sections: [
      {
        heading: "Energi Terbarukan dan Tidak Terbarukan",
        paragraphs: [
          "Energi terbarukan adalah energi yang sumbernya tersedia terus-menerus dan cepat diperbarui oleh alam, sedangkan energi tak terbarukan memerlukan jutaan tahun terbentuk. Penggunaan energi terbarukan menurunkan emisi gas rumah kaca."
        ],
        list: [
          "Contoh energi terbarukan adalah surya, angin, air, biomassa, dan panas bumi.",
          "Contoh energi tak terbarukan adalah batu bara, minyak bumi, dan gas alam.",
          "Energi terbarukan umumnya menghasilkan emisi karbon yang sangat rendah.",
          "Sumber tak terbarukan akan habis bila terus dieksploitasi tanpa peremajaan.",
          "Kombinasi berbagai sumber energi membuat pasokan listrik lebih andal."
        ]
      },
      {
        heading: "Energi Surya dan Angin",
        paragraphs: [
          "Energi surya diubah menjadi listrik oleh panel fotovoltaik, sedangkan energi angin menggerakkan turbin menjadi listrik. Keduanya bergantung pada kondisi alam sehingga perlu sistem penyimpanan atau cadangan."
        ],
        list: [
          "Panel surya mengubah radiasi matahari langsung menjadi arus listrik.",
          "Daya panel bergantung pada luas, iradiani, dan efisiensi panel.",
          "Angin menggerakkan baling-baling yang mengubah energi kinetik menjadi listrik.",
          "Daya angin sebanding dengan kuadrat kecepatan angin.",
          "Energi surya dan angin bersifat tidak menentu sehingga memerlukan penyimpanan."
        ]
      },
      {
        heading: "Energi Air dan Biomassa",
        paragraphs: [
          "Pembangkit listrik tenaga air memanfaatkan ketinggian air waduk untuk memutar turbin. Biomassa mengubah energi tersimpan pada organisme menjadi panas atau listrik melalui pembakaran atau fermentasi."
        ],
        list: [
          "Air terjun tinggi menghasilkan energi potensial yang besar untuk turbin.",
          "Debit air menentukan seberapa besar massa air per sekon yang menggerakkan turbin.",
          "PLTA dapat diatur jumlah produksinya sesuai kebutuhan listrik.",
          "Biomassa berasal dari kayu, limbah pertanian, dan sisa tanaman.",
          "Biogas dari pengolahan limbah dapat dipakai untuk memasak dan pembangkit listrik."
        ]
      },
      {
        heading: "Energi Geotermal dan Hemat Energi",
        paragraphs: [
          "Energi panas bumi memanfaatkan suhu tinggi di kerak bumi untuk menghasilkan uap dan listrik. Selain mengembangkan sumber baru, efisiensi pemakaian energi juga penting agar kebutuhan energi tidak membengkak."
        ],
        list: [
          "Pembangkit panas bumi memakai uap panas dari dalam bumi untuk memutar turbin.",
          "Sumber panas bumi tersedia terus-menerus dan tidak bergantung cuaca.",
          "Mengurangi waktu pemakaian peralatan menurunkan konsumsi energi.",
          "Peralatan hemat energi menekan biaya listrik rumah tangga.",
          "Energi terbarukan tetap memerlukan analisis dampak lingkungan dan sosial."
        ]
      }
    ],
    formulas: [
      { label: "Daya listrik panel surya", expr: "P = η × I × A", note: "P (watt, W), η (efisiensi antara 0 dan 1), I (iradiani, W/m²), A (m²)" },
      { label: "Energi listrik hasil panel", expr: "E = P · t", note: "E (Wh atau kWh), P (W), t (jam)" },
      { label: "Energi potensial air", expr: "Eₚ = m g h", note: "Eₚ (J), m (kg air), g (m/s²), h (m) selisih ketinggian air" },
      { label: "Daya turbin air", expr: "P = η ρ Q g h", note: "P (W), η (efisiensi turbin), ρ = 1000 kg/m³, Q (debit, m³/s), h (m)" },
      { label: "Daya angin maksimum", expr: "P = ½ ρ A v³", note: "P (W), ρ (kerapatan udara, kg/m³), A (m²) luas baling-baling, v (m/s) kecepatan angin" }
    ],
    examples: [
      {
        question: "Sebuah pembangkit listrik tenaga air memanfaatkan air berdebit 2 m³/s dari ketinggian 30 m. Jika efisiensi turbin 80% dan percepatan gravitasi 10 m/s², berapa daya yang dihasilkan?",
        steps: [
          "Diketahui: Q = 2 m³/s, h = 30 m, η = 0,8, ρ = 1000 kg/m³, g = 10 m/s².",
          "Rumus: P = η ρ Q g h.",
          "Penyelesaian: P = 0,8 × 1000 × 2 × 10 × 30 = 480000 W.",
          "Konversi satuan: 480000 W = 480 kW."
        ],
        answer: "Jadi daya yang dihasilkan pembangkit tersebut adalah 480 kW."
      },
      {
        question: "Sebuah panel surya berarea 4 m² dengan efisiensi 18% menerima iradiani 500 W/m² selama 5 jam. Berapa energi listrik yang dihasilkan panel tersebut?",
        steps: [
          "Diketahui: A = 4 m², η = 0,18, I = 500 W/m², t = 5 jam.",
          "Daya: P = η × I × A = 0,18 × 500 × 4 = 360 W.",
          "Energi: E = P × t = 360 × 5 = 1800 Wh.",
          "Konversi satuan: 1800 Wh = 1,8 kWh."
        ],
        answer: "Jadi energi listrik yang dihasilkan panel surya tersebut adalah 1,8 kWh."
      }
    ],
    tips: [
      "Hubungkan setiap sumber energi dengan besaran fisika yang mendasarinya.",
      "Perhatikan efisiensi karena energi keluar selalu lebih kecil dari energi masuk.",
      "Latih soal PLTA dan panel surya karena keduanya paling sering muncul.",
      "Catat satuan debit dan iradiani agar perhitungan daya tidak tertukar."
    ]
  }
];
