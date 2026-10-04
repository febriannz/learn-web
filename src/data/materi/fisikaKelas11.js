// MATERI BELAJAR FISIKA KELAS 11 SMA (Kurikulum Merdeka, Fase F)
// Data pembelajaran untuk aplikasi KuisPintar.

export const MATERI_FISIKA_11 = [
  {
    id: 1,
    title: "Bab 1: Fluida Statis",
    summary: "Memahami tekanan, tekanan hidrostatis, Hukum Pascal, dan Hukum Archimedes beserta penerapannya.",
    sections: [
      {
        heading: "Tekanan dan Satuannya",
        paragraphs: [
          "Tekanan adalah besarnya gaya yang bekerja pada setiap satuan luas permukaan. Semakin kecil luas bidang sentuh, semakin besar tekanan yang dihasilkan oleh gaya yang sama.",
          "Dalam sistem SI, tekanan dinyatakan dalam pascal yang disimbolkan Pa. Selain pascal, tekanan juga sering dinyatakan dalam atmosfer, cmHg, dan mH₂O."
        ],
        list: [
          "Tekanan adalah besaran skalar dan selalu bekerja tegak lurus terhadap permukaan bidang sentuh.",
          "Satuan tekanan: 1 Pa = 1 N/m², 1 atm = 1,013 × 10⁵ Pa ≈ 76 cmHg ≈ 10,3 mH₂O.",
          "Tekanan statis pada zat cair bekerja ke segala arah, termasuk ke samping dan ke atas.",
          "Semakin kecil luas alas, semakin besar tekanan yang diterima pada gaya yang tetap."
        ]
      },
      {
        heading: "Tekanan Hidrostatis",
        paragraphs: [
          "Tekanan hidrostatis adalah tekanan yang ditimbulkan oleh zat cair karena massa jenis dan kedalaman titik yang ditinjau. Semakin dalam posisi titik dalam zat cair, semakin besar tekanan yang diterimanya.",
          "Pada kedalaman yang sama tekanannya selalu sama, walaupun bentuk dan jumlah zat cair di atasnya berbeda-beda."
        ],
        list: [
          "Rumus tekanan hidrostatis P = ρ · g · h hanya bergantung pada kedalaman, massa jenis, dan percepatan gravitasi.",
          "Tekanan pada dasar wadah tidak dipengaruhi oleh bentuk wadah, dikenal sebagai paradoks hidrostatis.",
          "Tekanan total pada kedalaman h adalah P = P₀ + ρ · g · h dengan P₀ tekanan udara pada permukaan.",
          "Tekanan hidrostatis diteruskan ke segala arah dengan besar yang sama (prinsip Pascal).",
          "Pada kedalaman yang sama, tekanan pada air sama besar meskipun volumenya berbeda."
        ]
      },
      {
        heading: "Hukum Pascal dan Perangkat Hidrolik",
        paragraphs: [
          "Hukum Pascal menyatakan bahwa tekanan yang diberikan pada zat cair tertutup diteruskan ke segala arah dengan besar yang sama. Prinsip ini menjadi dasar kerja dongkrak hidrolik, rem truk, dan penekan hidrolik.",
          "Karena tekanan pada kedua sisi sama, gaya yang dihasilkan berbanding lurus dengan luas alas piston sehingga gaya kecil dapat menghasilkan gaya besar."
        ],
        list: [
          "Hukum Pascal: tekanan sama di setiap titik zat cair tertutup, yaitu F₁/A₁ = F₂/A₂.",
          "Pengali gaya pada perangkat hidrolik: F₂/F₁ = A₂/A₁, artinya piston lebih luas menghasilkan gaya lebih besar.",
          "Zat cair yang dipakai biasanya oli karena hampir tidak dapat dimampatkan.",
          "Keunggulan sistem hidrolik adalah mudah memindahkan gaya besar ke segala arah secara bersamaan."
        ]
      },
      {
        heading: "Hukum Archimedes dan Syarat Mengapung",
        paragraphs: [
          "Hukum Archimedes menyatakan bahwa benda yang terendam dalam zat cair akan mendapat gaya ke atas sebesar berat zat cair yang dipindahkan. Gaya ini disebut gaya apung atau gaya Archimedes.",
          "Apakah sebuah benda mengapung, melayang, atau tenggelam ditentukan oleh perbandingan massa jenis benda dengan massa jenis zat cairnya."
        ],
        list: [
          "Gaya apung: W_a = ρ_fluida · V · g dengan arah selalu ke atas.",
          "Benda mengapung bila ρ_benda ≤ ρ_fluida dan tenggelam bila ρ_benda > ρ_fluida.",
          "Pada benda yang terapung, berat benda sama dengan berat zat cair yang dipindahkan.",
          "Pada benda yang terapung, massa benda sama dengan massa zat cair yang dipindahkan meski volumenya berbeda.",
          "Hukum Archimedes berlaku pula untuk gas, misalnya balon udara yang terangkat karena massa jenis udara dingin lebih besar."
        ]
      }
    ],
    formulas: [
      { label: "Tekanan", expr: "P = F / A", note: "P tekanan (Pa), F gaya (N), A luas bidang sentuh (m²); 1 Pa = 1 N/m²." },
      { label: "Tekanan hidrostatis", expr: "P = ρ · g · h", note: "P (Pa), ρ massa jenis (kg/m³), g percepatan gravitasi (m/s²), h kedalaman (m)." },
      { label: "Tekanan total dalam zat cair", expr: "P = P₀ + ρ · g · h", note: "P₀ tekanan pada permukaan (Pa), misalnya 1,013 × 10⁵ Pa untuk udara atmosfer." },
      { label: "Hukum Pascal", expr: "F₁ / A₁ = F₂ / A₂", note: "F₁ dan F₂ gaya (N); A₁ dan A₂ luas penampang piston (m²)." },
      { label: "Gaya apung Archimedes", expr: "W_a = ρ_fluida · V · g", note: "W_a gaya ke atas (N), ρ_fluida massa jenis zat cair (kg/m³), V volume terendam (m³)." },
      { label: "Syarat keseimbangan benda terapung", expr: "ρ_benda ≤ ρ_fluida", note: "Benda mengapung atau melayang; bila ρ_benda > ρ_fluida maka benda tenggelam." }
    ],
    examples: [
      {
        question: "Sebuah titik berada pada kedalaman 2 m di dalam kolam berisi air dengan massa jenis 1000 kg/m³. Hitung tekanan hidrostatis pada titik itu dan tekanan total yang diterimanya, dengan tekanan udara 1,013 × 10⁵ Pa dan g = 10 m/s².",
        steps: [
          "Diketahui: h = 2 m, ρ = 1000 kg/m³, g = 10 m/s², P₀ = 1,013 × 10⁵ Pa.",
          "Rumus tekanan hidrostatis: P_hidro = ρ · g · h.",
          "P_hidro = 1000 × 10 × 2 = 20000 Pa = 2 × 10⁴ Pa.",
          "Rumus tekanan total: P = P₀ + ρ · g · h = 101300 + 20000 = 121300 Pa."
        ],
        answer: "Jadi tekanan hidrostatisnya 20000 Pa dan tekanan total yang diterima titik itu 1,213 × 10⁵ Pa."
      },
      {
        question: "Sebuah balok kayu bervolume 0,001 m³ dan bermassa 0,6 kg terendam seluruhnya dalam air (ρ = 1000 kg/m³, g = 10 m/s²). Berapa besar gaya apung yang dialami balok, dan apakah balok akan mengapung atau tenggelam?",
        steps: [
          "Diketahui: V = 0,001 m³, m = 0,6 kg, ρ_air = 1000 kg/m³, g = 10 m/s².",
          "Rumus gaya apung: W_a = ρ_air · V · g = 1000 × 0,001 × 10 = 10 N.",
          "Berat balok: W = m · g = 0,6 × 10 = 6 N, sehingga W_a lebih besar daripada W.",
          "Massa jenis balok: ρ_benda = m/V = 0,6/0,001 = 600 kg/m³, lebih kecil daripada ρ_air."
        ],
        answer: "Jadi gaya apung 10 N lebih besar daripada berat balok 6 N, sehingga balok mengapung di permukaan air."
      }
    ],
    tips: [
      "Hafalkan rumus tekanan hidrostatis P = ρ · g · h dan ingat hasilnya tidak bergantung pada bentuk wadah.",
      "Selalu samakan satuan ke SI terlebih dahulu, misalnya cm³ harus diubah menjadi m³ sebelum dihitung.",
      "Pada soal Archimedes, bandingkan dulu massa jenis benda dan zat cair untuk menentukan apakah benda mengapung atau tenggelam.",
      "Untuk soal perangkat hidrolik, gunakan perbandingan F/A pada kedua sisi piston karena tekanannya sama."
    ]
  },
  {
    id: 2,
    title: "Bab 2: Fluida Dinamis",
    summary: "Membahas aliran zat cair, debit, Hukum kontinuitas, Hukum Bernoulli, dan penerapannya.",
    sections: [
      {
        heading: "Aliran Zat Cair dan Debit",
        paragraphs: [
          "Aliran zat cair disebut ideal bila zat cair tidak lengket, tidak dapat dimampatkan, dan mengalir secara stasioner. Debit menggambarkan volume zat cair yang mengalir setiap satuan waktu.",
          "Debit selalu tetap pada setiap penampang pipa tertutup, sehingga kecepatan aliran berbanding terbalik dengan luas penampang pipa."
        ],
        list: [
          "Debit: Q = A · v dengan satuan m³/s, sedangkan 1 m³/s sama dengan 1000 liter/s.",
          "Aliran stasioner berarti kecepatan aliran pada setiap titik tidak berubah terhadap waktu.",
          "Aliran laminar terjadi bila partikel bergerak teratur berlapis, sedangkan aliran turbulen bergerak tidak beraturan.",
          "Satuan praktis debit dalam kehidupan sehari-hari adalah liter per detik atau meter kubik per jam."
        ]
      },
      {
        heading: "Hukum Kontinuitas",
        paragraphs: [
          "Hukum kontinuitas menyatakan bahwa debit zat cair yang mengalir melalui pipa selalu konstan. Akibatnya, pada bagian pipa yang menyempit kecepatan aliran menjadi lebih besar.",
          "Hukum ini berlaku untuk zat cair tak dapat dimampatkan yang mengalir secara stasioner."
        ],
        list: [
          "Hukum kontinuitas: A₁ · v₁ = A₂ · v₂.",
          "Makin sempit penampang pipa, makin cepat kecepatan aliran zat cair di penampang itu.",
          "Hukum ini setara dengan tetapnya debit Q pada seluruh penampang sepanjang pipa.",
          "Dipakai untuk menghitung kecepatan aliran pada penampang yang belum diketahui."
        ]
      },
      {
        heading: "Hukum Bernoulli",
        paragraphs: [
          "Hukum Bernoulli menyatakan bahwa jumlah tekanan statis, tekanan dinamis, dan tekanan akibat ketinggian pada aliran ideal selalu konstan. Bila kecepatan aliran besar, tekanan statisnya menjadi kecil.",
          "Hukum ini menjadi dasar kerja sayap pesawat terbang, tabung Venturi, dan alat penyemprot."
        ],
        list: [
          "Hukum Bernoulli: P + ½ · ρ · v² + ρ · g · h = konstan.",
          "Tekanan dinamis dinyatakan ½ · ρ · v², sedangkan tekanan akibat ketinggian adalah ρ · g · h.",
          "Untuk aliran mendatar dengan ketinggian tetap, P₁ + ½ · ρ · v₁² = P₂ + ½ · ρ · v₂².",
          "Pada sayap pesawat, udara melewati permukaan atas lebih cepat sehingga tekanan atas lebih kecil dan terjadi gaya angkat ke atas.",
          "Tekanan tidak boleh dianggap selalu sebanding dengan kecepatan karena ketinggian juga ikut menentukan."
        ]
      },
      {
        heading: "Penerapan dan Kerapatan Aliran",
        paragraphs: [
          "Tabung Venturi memanfaatkan penyempitan pipa untuk menurunkan tekanan statis sehingga zat cair lain dapat terisap. Pada alat penyemprot, udara yang berkecepatan tinggi membuat tekanan mengecil dan cairan terhisap ke atas.",
          "Pada zat cair kental terdapat gaya gesek internal antar lapisan yang melawan pergerakan zat cair, sifat ini disebut viskositas."
        ],
        list: [
          "Tabung Venturi: penyempitan pipa menaikkan kecepatan dan menurunkan tekanan statis aliran.",
          "Penyemprot parfum dan karburator bekerja karena perbedaan tekanan akibat aliran cepat.",
          "Viskositas adalah sifat zat cair untuk melawan aliran, air relatif encer sedangkan oli lebih kental.",
          "Bilangan Reynolds dipakai untuk memprediksi aliran menjadi laminar atau turbulen."
        ]
      }
    ],
    formulas: [
      { label: "Debit aliran", expr: "Q = A · v", note: "Q debit (m³/s), A luas penampang (m²), v kecepatan aliran (m/s); 1 m³/s = 10³ liter/s." },
      { label: "Hukum kontinuitas", expr: "A₁ · v₁ = A₂ · v₂", note: "A₁ dan A₂ luas penampang (m²), v₁ dan v₂ kecepatan aliran (m/s); debit tetap." },
      { label: "Hukum Bernoulli", expr: "P + ½ · ρ · v² + ρ · g · h = tetap", note: "P tekanan statis (Pa), ρ massa jenis (kg/m³), v (m/s), g (m/s²), h ketinggian (m)." },
      { label: "Hukum Bernoulli untuk aliran mendatar", expr: "P₁ + ½ · ρ · v₁² = P₂ + ½ · ρ · v₂²", note: "Berlaku bila ketinggian kedua titik sama, semua tekanan dalam Pa." },
      { label: "Tekanan dinamis", expr: "P_din = ½ · ρ · v²", note: "Tekanan akibat gerak zat cair (Pa); makin cepat aliran, makin besar tekanan dinamis." }
    ],
    examples: [
      {
        question: "Air mengalir dalam pipa dengan luas penampang 10 cm² dan kecepatan 2 m/s. Pipa itu menyempit menjadi 4 cm². Hitung kecepatan aliran pada penampang sempit dan debit alirannya.",
        steps: [
          "Diketahui: A₁ = 10 cm² = 10 × 10⁻⁴ m², v₁ = 2 m/s, A₂ = 4 cm² = 4 × 10⁻⁴ m².",
          "Rumus kontinuitas: A₁ · v₁ = A₂ · v₂ sehingga v₂ = v₁ · A₁/A₂.",
          "v₂ = 2 × 10/4 = 5 m/s, jadi aliran dipercepat pada penampang sempit.",
          "Rumus debit: Q = A₁ · v₁ = 10 × 10⁻⁴ × 2 = 2 × 10⁻³ m³/s = 2 liter/s."
        ],
        answer: "Jadi kecepatan pada penampang sempit 5 m/s dan debit alirannya 2 × 10⁻³ m³/s atau 2 liter/s."
      },
      {
        question: "Air mengalir pada pipa mendatar. Pada penampang pertama kecepatannya 2 m/s dan tekanannya 1,5 × 10⁵ Pa, sedangkan pada penampang kedua kecepatannya 5 m/s. Jika massa jenis air 1000 kg/m³, berapa tekanan pada penampang kedua?",
        steps: [
          "Diketahui: v₁ = 2 m/s, P₁ = 1,5 × 10⁵ Pa, v₂ = 5 m/s, ρ = 1000 kg/m³.",
          "Karena pipa mendatar dengan ketinggian tetap, gunakan P₁ + ½ · ρ · v₁² = P₂ + ½ · ρ · v₂².",
          "½ · ρ · v₁² = 0,5 × 1000 × 4 = 2000 Pa dan ½ · ρ · v₂² = 0,5 × 1000 × 25 = 12500 Pa.",
          "P₂ = 150000 + 2000 − 12500 = 139500 Pa."
        ],
        answer: "Jadi tekanan pada penampang kedua adalah 139500 Pa atau 1,395 × 10⁵ Pa."
      }
    ],
    tips: [
      "Ingat pola utama: pipa menyempit → kecepatan naik → tekanan statis turun.",
      "Gunakan Hukum kontinuitas dulu untuk mencari kecepatan yang belum diketahui sebelum memasukkan angka ke persamaan Bernoulli.",
      "Pastikan zat cair dianggap ideal dan kedua titik berada pada aliran yang sama sebelum memakai Hukum Bernoulli.",
      "Perhatikan satuan, yaitu cm² harus diubah ke m² dan liter per detik ke m³/s."
    ]
  },
  {
    id: 3,
    title: "Bab 3: Suhu & Kalor",
    summary: "Mengenal suhu, kalor, kapasitas kalor, perubahan wujud, dan cara perpindahan kalor.",
    sections: [
      {
        heading: "Suhu dan Skala Termometer",
        paragraphs: [
          "Suhu menyatakan derajat panas atau dingin suatu benda, sedangkan kalor adalah energi yang berpindah karena perbedaan suhu. Skala suhu yang umum dipakai adalah Celsius, Fahrenheit, Reamur, dan Kelvin.",
          "Skala Kelvin dipakai dalam perhitungan gas karena merupakan skala absolut, di mana 0 K disebut nol mutlak."
        ],
        list: [
          "Tiga skala utama adalah Celsius (°C), Fahrenheit (°F), dan Kelvin (K).",
          "Konversi: t(°F) = 1,8 × t(°C) + 32 dan t(°R) = 4/5 × t(°C).",
          "Hubungan suhu absolut: T(K) = t(°C) + 273, sehingga setiap kenaikan 1 °C setara dengan 1 K.",
          "Kalor selalu mengalir dari benda bersuhu tinggi menuju benda bersuhu rendah hingga setimbang.",
          "Perbedaan suhu ΔT sama besar pada skala Celsius maupun Kelvin."
        ]
      },
      {
        heading: "Kalor dan Kapasitas Kalor",
        paragraphs: [
          "Kalor yang dibutuhkan untuk menaikkan suhu suatu benda bergantung pada massa benda, kapasitas kalor jenisnya, dan besarnya kenaikan suhu. Besar kalor ini berkadar lurus dengan ketiga besaran tersebut.",
          "Kapasitas kalor jenis air sangat besar, yaitu 4200 J/kg·°C, sehingga air sering dipakai sebagai penyerap kalor."
        ],
        list: [
          "Kalor: Q = m · c · ΔT dengan c kapasitas kalor jenis dalam J/kg·°C.",
          "Kapasitas kalor suatu benda: C = m · c dengan satuan J/°C.",
          "Kalor jenis relatif adalah kapasitas kalor jenis dibagi kapasitas kalor jenis air.",
          "Kalor diperlukan untuk mengubah energi internal dan gerak partikel penyusun benda.",
          "Kalor juga dinyatakan dalam kilokalori dengan 1 kkal = 4200 J."
        ]
      },
      {
        heading: "Perubahan Wujud dan Kalor Laten",
        paragraphs: [
          "Pada perubahan wujud, suhu zat tetap tidak berubah meskipun kalor terus diserap atau dilepaskan. Kalor yang dibutuhkan disebut kalor laten atau kalor tersembunyi.",
          "Perubahan wujud terjadi pada titik lebur untuk padat dan cair, serta titik didih untuk cair dan gas, termasuk proses sebaliknya."
        ],
        list: [
          "Kalor peleburan: Q = m · L_f dengan L_f air sebesar 3,36 × 10⁵ J/kg.",
          "Kalor penguapan: Q = m · L_v dengan L_v air sebesar 2,26 × 10⁶ J/kg.",
          "Pencairan menyerap kalor, sedangkan pembekuan melepaskan kalor dengan suhu tetap.",
          "Saat es mencair pada 0 °C, suhunya tetap 0 °C sampai seluruh es berubah menjadi air.",
          "Pada perubahan wujud, kalor dipakai untuk memutus atau membentuk ikatan antarmolekul."
        ]
      },
      {
        heading: "Perpindahan Kalor",
        paragraphs: [
          "Kalor dapat berpindah melalui konduksi, konveksi, dan radiasi. Konduksi terjadi pada zat padat, konveksi pada zat cair dan gas, sedangkan radiasi dapat terjadi tanpa medium.",
          "Logam merupakan konduktor yang baik, sedangkan udara dan busa termasuk isolator yang baik."
        ],
        list: [
          "Konduksi adalah perpindahan kalor melalui sentuhan antarpartikel, contohnya pada sendok logam yang panas.",
          "Konveksi adalah perpindahan kalor disertai perpindahan massa zat, contohnya air yang mendidih.",
          "Radiasi adalah perpindahan kalor tanpa medium berupa gelombang elektromagnetik, contohnya panas Matahari.",
          "Radiasi terbaik berasal dari benda hitam, sedangkan benda terang memantulkan radiasi dengan baik."
        ]
      }
    ],
    formulas: [
      { label: "Kalor untuk kenaikan suhu", expr: "Q = m · c · ΔT", note: "Q kalor (J), m massa (kg), c kapasitas kalor jenis (J/kg·°C), ΔT perubahan suhu (°C)." },
      { label: "Konversi skala Fahrenheit", expr: "t(°F) = 1,8 × t(°C) + 32", note: "1,8 sama dengan 9/5; berguna untuk mengubah suhu Celsius ke Fahrenheit." },
      { label: "Suhu absolut", expr: "T(K) = t(°C) + 273", note: "T suhu Kelvin (K), t suhu Celsius (°C); dipakai pada semua perhitungan gas." },
      { label: "Kalor perubahan wujud", expr: "Q = m · L", note: "L kalor laten (J/kg); L_f air 3,36 × 10⁵ J/kg dan L_v air 2,26 × 10⁶ J/kg." },
      { label: "Kapasitas kalor benda", expr: "C = m · c", note: "C kapasitas kalor (J/°C), m massa (kg), c kapasitas kalor jenis (J/kg·°C)." },
      { label: "Daya pemanas", expr: "P = Q / t", note: "P daya (W), Q kalor (J), t waktu (s); 1 kW = 1000 W." }
    ],
    examples: [
      {
        question: "Sebanyak 2 kg air bersuhu 25 °C dipanaskan hingga mendidih pada suhu 100 °C. Berapa kalor yang dibutuhkan? Kapasitas kalor jenis air 4200 J/kg·°C.",
        steps: [
          "Diketahui: m = 2 kg, t_awal = 25 °C, t_akhir = 100 °C, c = 4200 J/kg·°C.",
          "Rumus: Q = m · c · ΔT dengan ΔT = 100 − 25 = 75 °C.",
          "Q = 2 × 4200 × 75 = 630000 J.",
          "Q = 6,3 × 10⁵ J sama dengan 630 kJ."
        ],
        answer: "Jadi kalor yang dibutuhkan untuk memanaskan air tersebut adalah 6,3 × 10⁵ J atau 630 kJ."
      },
      {
        question: "Es bermassa 0,5 kg pada suhu 0 °C mencair seluruhnya pada suhu yang tetap. Berapa kalor yang diserap selama pencairan? Kalor peleburan air 3,36 × 10⁵ J/kg.",
        steps: [
          "Diketahui: m = 0,5 kg, L_f = 3,36 × 10⁵ J/kg, suhu tetap 0 °C.",
          "Rumus kalor peleburan: Q = m · L_f.",
          "Q = 0,5 × 3,36 × 10⁵ = 1,68 × 10⁵ J.",
          "Selama pencairan suhu tidak berubah karena kalor dipakai untuk memutus ikatan antarmolekul."
        ],
        answer: "Jadi kalor yang diserap es tersebut adalah 1,68 × 10⁵ J atau 168 kJ."
      }
    ],
    tips: [
      "Tentukan dulu jenis prosesnya: kenaikan suhu memakai Q = mcΔT, sedangkan perubahan wujud memakai Q = mL.",
      "Perhatikan apakah soal menanyakan kalor yang diserap saat dipanaskan atau kalor yang dilepaskan saat didinginkan.",
      "Gunakan nilai 4200 J/kg·°C untuk kapasitas kalor jenis air agar perhitungan cepat dan rapi.",
      "Pada soal percampuran benda panas dengan benda dingin, gunakan prinsip kalor yang diserap sama dengan kalor yang dilepas."
    ]
  },
  {
    id: 4,
    title: "Bab 4: Teori Kinetik Gas",
    summary: "Menerangkan teori kinetik molekul gas, hukum gas ideal, hukum gas klasik, dan energi kinetik.",
    sections: [
      {
        heading: "Postulat Teori Kinetik Molekul Gas",
        paragraphs: [
          "Teori kinetik memandang gas sebagai kumpulan molekul yang bergerak acak dan bertumbukan secara elastis. Jumlah molekul sangat banyak, ukurannya sangat kecil, dan jarak antarmolekul jauh lebih besar daripada ukuran molekulnya.",
          "Suhu gas merupakan ukuran rata-rata energi kinetik translasi molekulnya, sehingga makin tinggi suhu makin cepat rata-rata gerak molekul."
        ],
        list: [
          "Molekul gas bergerak lurus beraturan sampai mengalami tumbukan.",
          "Tumbukan dianggap elastis, yaitu energi kinetik total sebelum dan sesudah tumbukan tetap sama.",
          "Gaya antarmolekul dianggap sangat kecil kecuali pada saat tumbukan.",
          "Tekanan gas terjadi akibat tumbukan molekul terhadap dinding wadah.",
          "Pada suhu sama, molekul gas ringan bergerak lebih cepat daripada molekul gas berat."
        ]
      },
      {
        heading: "Hukum Gas Ideal dan Konstanta Universal",
        paragraphs: [
          "Hukum gas ideal menghubungkan tekanan, volume, jumlah mol, dan suhu gas melalui persamaan PV = nRT. Konstanta gas universal R mempunyai nilai 8,31 J/(mol·K).",
          "Persamaan ini berlaku baik untuk gas ideal, sedangkan gas nyata sedikit menyimpang karena adanya gaya antarmolekul dan volume molekul."
        ],
        list: [
          "Persamaan gas ideal: P · V = n · R · T.",
          "P dalam Pa, V dalam m³, n adalah jumlah mol, dan T suhu absolut dalam Kelvin.",
          "R = 8,31 J/(mol·K) pada satuan SI, atau R = 0,082 L·atm/(mol·K).",
          "Jumlah mol: n = m/M, dengan m massa (kg) dan M massa molar (kg/mol).",
          "Suhu harus dinyatakan dalam Kelvin dalam setiap perhitungan gas."
        ]
      },
      {
        heading: "Hukum Gas Klasik",
        paragraphs: [
          "Hukum gas klasik merupakan penjabatan persamaan gas ideal ketika salah satu besaran dijaga tetap konstan. Hukum Boyle, Charles, dan Gay-Lussac menjelaskan hubungan tekanan, volume, dan suhu.",
          "Untuk keadaan awal dan akhir yang semuanya berubah, digunakan persamaan gabungan P₁V₁/T₁ = P₂V₂/T₂."
        ],
        list: [
          "Hukum Boyle: P₁V₁ = P₂V₂ bila suhu tetap (proses isotermik).",
          "Hukum Charles: V₁/T₁ = V₂/T₂ bila tekanan tetap (proses isobarik).",
          "Hukum Gay-Lussac: P₁/T₁ = P₂/T₂ bila volume tetap (proses isokhorik).",
          "Persamaan gabungan: P₁V₁/T₁ = P₂V₂/T₂ berlaku untuk semua proses tertutup.",
          "Pada hukum Charles dan Gay-Lussac, suhu harus dalam Kelvin agar perbandingan benar."
        ]
      },
      {
        heading: "Energi Kinetik dan Laju Rata-rata Molekul",
        paragraphs: [
          "Energi kinetik translasi gas ideal hanya bergantung pada suhu, tidak pada jenis gasnya. Laju rata-rata kuadrat atau laju rms molekul berkadar lurat dengan akar kuadrat suhu absolut.",
          "Pada suhu yang sama, molekul dengan massa molar besar mempunyai laju rms lebih kecil daripada molekul yang ringan."
        ],
        list: [
          "Energi kinetik translasi gas: E_k = (3/2) · n · R · T.",
          "Laju rms: v_rms = √(3 · R · T/M) dengan M massa molar dalam kg/mol.",
          "Makin tinggi suhu, makin besar laju rata-rata molekul gas.",
          "Kelimpahan molekul terhadap laju gerak mengikuti distribusi Maxwell-Boltzmann, jadi tidak semua molekul bergerak dengan laju sama.",
          "Untuk gas ideal, energi internal hanya ditentukan oleh suhu gas itu."
        ]
      }
    ],
    formulas: [
      { label: "Hukum gas ideal", expr: "P · V = n · R · T", note: "P (Pa), V (m³), n mol, R = 8,31 J/(mol·K), T suhu absolut (K)." },
      { label: "Persamaan gabungan hukum gas", expr: "P₁V₁/T₁ = P₂V₂/T₂", note: "Menghubungkan keadaan awal dan akhir; T₁ dan T₂ harus dalam Kelvin." },
      { label: "Hukum Boyle", expr: "P₁V₁ = P₂V₂", note: "Berlaku pada suhu tetap (proses isotermik); tekanan dan volume berbanding terbalik." },
      { label: "Hukum Charles", expr: "V₁/T₁ = V₂/T₂", note: "Berlaku pada tekanan tetap (isobarik); volume dan suhu absolut sebanding." },
      { label: "Energi kinetik translasi gas", expr: "E_k = (3/2) · n · R · T", note: "E_k energi kinetik (J) untuk n mol gas pada suhu T (K)." },
      { label: "Laju rata-rata kuadrat molekul", expr: "v_rms = √(3 · R · T/M)", note: "v_rms (m/s), R = 8,31 J/(mol·K), T (K), M massa molar (kg/mol)." }
    ],
    examples: [
      {
        question: "Sebanyak 2 mol gas ideal berada pada suhu 27 °C dengan volume 0,05 m³. Berapa tekanan gas itu? Gunakan R = 8,31 J/(mol·K).",
        steps: [
          "Diketahui: n = 2 mol, t = 27 °C sehingga T = 27 + 273 = 300 K, V = 0,05 m³.",
          "Rumus gas ideal: P = n · R · T / V.",
          "P = (2 × 8,31 × 300)/0,05 = 4986/0,05 = 99720 Pa.",
          "P = 9,972 × 10⁴ Pa, kira-kira sama dengan 1 atm."
        ],
        answer: "Jadi tekanan gas tersebut adalah 99720 Pa atau kira-kira 1 atm."
      },
      {
        question: "Gas dalam ruang tertutup bervolume 2 liter mempunyai tekanan 1 atm. Volume gas dikompres menjadi 0,5 liter pada suhu yang tetap. Berapa tekanan gas setelah dikompres?",
        steps: [
          "Diketahui: V₁ = 2 liter, P₁ = 1 atm, V₂ = 0,5 liter, suhu tetap.",
          "Karena suhu tetap, gunakan Hukum Boyle: P₁V₁ = P₂V₂.",
          "P₂ = (P₁ × V₁)/V₂ = (1 × 2)/0,5 = 4 atm.",
          "Tekanan menjadi empat kali lipat karena volume menjadi seperempatnya."
        ],
        answer: "Jadi tekanan gas setelah dikompres adalah 4 atm."
      }
    ],
    tips: [
      "Ubah semua suhu ke Kelvin sebelum memasukkan angka ke persamaan gas apa pun.",
      "Hafalkan nilai R = 8,31 J/(mol·K) lengkap dengan satuannya agar pilihan rumus tidak tertukar.",
      "Tentukan dulu besaran yang tetap, yaitu Boyle untuk suhu tetap, Charles untuk tekanan tetap, dan Gay-Lussac untuk volume tetap.",
      "Persamaan PV = nRT memerlukan tekanan dalam Pa dan volume dalam m³ agar hasil langsung dalam satuan SI."
    ]
  },
  {
    id: 5,
    title: "Bab 5: Termodinamika",
    summary: "Membahas sistem termodinamika, hukum I, II, dan III termodinamika beserta penerapannya.",
    sections: [
      {
        heading: "Sistem dan Besaran Termodinamika",
        paragraphs: [
          "Termodinamika mempelajari hubungan antara kalor, pekerjaan, dan energi internal suatu sistem. Sistem adalah bagian yang dipelajari, sedangkan sisanya disebut lingkungan.",
          "Energi internal adalah jumlah energi kinetik dan energi potensial seluruh partikel penyusun sistem."
        ],
        list: [
          "Sistem tertutup tidak kehilangan massa, sedangkan sistem terbuka memungkinkan massa masuk dan keluar.",
          "Energi internal mencakup energi gerak dan energi ikatan antarmolekul.",
          "Kalor dan pekerjaan adalah dua cara memindahkan energi antara sistem dan lingkungan.",
          "Suhu termasuk besaran intensif, sedangkan energi internal termasuk besaran ekstensif.",
          "Energi tidak dapat diciptakan maupun dimusnahkan, hanya berpindah bentuk."
        ]
      },
      {
        heading: "Hukum Pertama Termodinamika",
        paragraphs: [
          "Hukum pertama termodinamika adalah bentuk lain dari prinsip kekekalan energi pada sistem termodinamika. Perubahan energi internal sama dengan kalor yang diterima sistem dikurangi pekerjaan yang dilakukannya.",
          "Jika sistem menerima kalor dan tidak melakukan pekerjaan, energi internalnya bertambah sehingga suhunya naik."
        ],
        list: [
          "Hukum I: ΔU = Q − W, dengan W pekerjaan yang dilakukan sistem terhadap lingkungan.",
          "Sebagian buku memakai bentuk ΔU = Q + W dengan W sebagai pekerjaan yang diterima sistem.",
          "Untuk gas ideal, energi internal hanya bergantung pada suhu, sehingga ΔU positif bila suhunya naik.",
          "Pada proses siklis, sistem kembali ke keadaan awal sehingga ΔU sama dengan nol.",
          "Dalam wadah isolator sempurna tidak ada kalor masuk atau keluar sehingga Q = 0 dan ΔU = −W."
        ]
      },
      {
        heading: "Hukum Kedua dan Entropi",
        paragraphs: [
          "Hukum kedua termodinamika menyatakan bahwa kalor secara spontan hanya berpindah dari benda bersuhu tinggi ke benda bersuhu rendah. Entropi mengukur tingkat ketidakberaturan suatu sistem dan selalu bertambah pada proses spontan.",
          "Tidak ada mesin yang mempunyai efisiensi 100 persen karena selalu ada kalor yang dibuang ke lingkungan."
        ],
        list: [
          "Perubahan entropi pada proses reversibel: ΔS = Q/T dengan T suhu absolut.",
          "Proses spontan selalu berlangsung ke arah bertambahnya entropi total semesta.",
          "Mesin Carnot mempunyai efisiensi maksimum yang hanya bergantung pada suhu bakar dan suhu pendingin.",
          "Entropi dapat didekati sebagai besarnya ketidakaturan atau jumlah keadaan mikro sistem."
        ]
      },
      {
        heading: "Hukum Ketiga dan Proses Termodinamika",
        paragraphs: [
          "Hukum ketiga termodinamika menyatakan bahwa entropi kristal sempurna mendekati nol pada suhu 0 K, dan suhu 0 K tidak dapat dicapai secara sempurna. Hukum ini menjadi dasar penghitungan entropi mutlak.",
          "Proses khas dalam termodinamika adalah isotermik, isobarik, isokhorik, dan adiabatik, masing-masing dengan ciri besaran yang tetap."
        ],
        list: [
          "Isotermik: suhu tetap sehingga ΔU = 0 untuk gas ideal dan Q = W.",
          "Isobarik: tekanan tetap sehingga pekerjaan W = P · ΔV.",
          "Isokhorik: volume tetap sehingga pekerjaan nol dan Q sama dengan ΔU.",
          "Adiabatik: tidak ada kalor masuk atau keluar sehingga ΔU = −W.",
          "Efisiensi mesin Carnot: η = (T_h − T_c)/T_h dengan suhu dalam Kelvin."
        ]
      }
    ],
    formulas: [
      { label: "Hukum pertama termodinamika", expr: "ΔU = Q − W", note: "ΔU perubahan energi internal (J), Q kalor diterima sistem (J), W pekerjaan dilakukan sistem (J)." },
      { label: "Pekerjaan pada proses isobarik", expr: "W = P · ΔV", note: "W pekerjaan (J), P tekanan (Pa), ΔV perubahan volume (m³)." },
      { label: "Kalor pada proses isokhorik", expr: "Q = n · C_v · ΔT", note: "C_v kalor molar pada volume tetap (J/mol·°C); volume tidak berubah sehingga tidak ada pekerjaan." },
      { label: "Hubungan Mayer", expr: "C_p − C_v = R", note: "C_p dan C_v kalor molar (J/mol·K); R = 8,31 J/(mol·K); untuk gas diatomik C_v = (5/2)R dan C_p = (7/2)R." },
      { label: "Perubahan entropi", expr: "ΔS = Q / T", note: "ΔS entropi (J/K), Q kalor reversibel (J), T suhu absolut (K)." },
      { label: "Efisiensi mesin Carnot", expr: "η = (T_h − T_c) / T_h", note: "η efisiensi (persen bila dikali 100); T_h suhu bakar dan T_c suhu pendingin dalam Kelvin." }
    ],
    examples: [
      {
        question: "Sebuah sistem menerima kalor sebesar 500 J dan melakukan pekerjaan 200 J terhadap lingkungan. Berapa perubahan energi internal sistem itu?",
        steps: [
          "Diketahui: Q = 500 J (kalor diterima sistem), W = 200 J (pekerjaan dilakukan sistem).",
          "Rumus hukum pertama termodinamika: ΔU = Q − W.",
          "ΔU = 500 − 200 = 300 J.",
          "Nilai ΔU positif berarti energi internal sistem bertambah."
        ],
        answer: "Jadi energi internal sistem bertambah sebesar 300 J."
      },
      {
        question: "Gas pada tekanan 2 × 10⁴ Pa mengembang secara isobarik dari volume 0,03 m³ menjadi 0,08 m³. Berapa pekerjaan yang dilakukan gas itu?",
        steps: [
          "Diketahui: P = 2 × 10⁴ Pa, V₁ = 0,03 m³, V₂ = 0,08 m³, proses isobarik.",
          "Rumus pekerjaan isobarik: W = P · ΔV.",
          "ΔV = 0,08 − 0,03 = 0,05 m³.",
          "W = 2 × 10⁴ × 0,05 = 1000 J."
        ],
        answer: "Jadi pekerjaan yang dilakukan gas tersebut adalah 1000 J."
      }
    ],
    tips: [
      "Perhatikan konvensi tanda: bila sistem melakukan pekerjaan, energi internalnya justru berkurang.",
      "Selalu ubah suhu ke Kelvin sebelum memakai rumus entropi atau efisiensi mesin.",
      "Pada siklus termodinamika, energi internal kembali ke nilai awal sehingga ΔU sama dengan nol.",
      "Gunakan W = P · ΔV hanya untuk proses dengan tekanan tetap, yaitu proses isobarik."
    ]
  },
  {
    id: 6,
    title: "Bab 6: Gelombang Mekanik",
    summary: "Membahas hakikat gelombang, besaran gelombang, persamaan gelombang, energi, dan superposisi.",
    sections: [
      {
        heading: "Hakikat dan Jenis Gelombang",
        paragraphs: [
          "Gelombang adalah gangguan yang merambat sambil membawa energi tanpa memindahkan massa secara netto. Gelombang mekanik memerlukan medium, berbeda dengan gelombang elektromagnetik yang tidak memerlukan medium.",
          "Berdasarkan arah rambat terhadap arah getar, gelombang dibedakan menjadi gelombang transversal dan gelombang longitudinal."
        ],
        list: [
          "Gelombang transversal: arah getar tegak lurus arah rambat, contohnya gelombang pada tali.",
          "Gelombang longitudinal: arah getar searah arah rambat, contohnya bunyi dalam udara.",
          "Gelombang mekanik memerlukan medium, sedangkan gelombang elektromagnetik tidak.",
          "Gelombang membawa energi dan momentum, bukan membawa massa mediumnya.",
          "Gelombang permukaan pada air merupakan gabungan gerak transversal dan longitudinal."
        ]
      },
      {
        heading: "Besaran-besaran Gelombang",
        paragraphs: [
          "Amplitudo adalah simpangan maksimum, periode adalah waktu untuk satu getaran penuh, dan frekuensi adalah jumlah getaran per sekon. Hubungan kecepatan rambat, panjang gelombang, dan frekuensi dinyatakan dalam persamaan gelombang.",
          "Satu panjang gelombang adalah jarak yang ditempuh gelombang selama satu periode."
        ],
        list: [
          "Periode: T = 1/f dengan satuan sekon, sedangkan frekuensi f dinyatakan dalam hertz.",
          "Kecepatan rambat: v = λ · f dengan λ panjang gelombang dalam meter.",
          "Amplitudo menentukan besar energi gelombang, dan energi sebanding dengan kuadrat amplitudo.",
          "Dalam satu periode, gelombang merambat sejauh satu panjang gelombang.",
          "Frekuensi gelombang sama dengan frekuensi sumber getarnya."
        ]
      },
      {
        heading: "Persamaan Gelombang dan Energi",
        paragraphs: [
          "Persamaan gelombang sinus menjelaskan simpangan setiap titik sebagai fungsi waktu dan posisi. Partikel medium melakukan gerak harmonis sederhana dengan frekuensi sama seperti frekuensi sumbernya.",
          "Energi gelombang berpindah bersama rambatnya gangguan dari satu titik ke titik lain."
        ],
        list: [
          "Persamaan gelombang: y = A · sin(ω · t ± k · x).",
          "Besaran sudut: ω = 2π · f, sedangkan bilangan gelombang: k = 2π/λ.",
          "Tanda minus dipakai untuk gelombang merambat ke kanan dan tanda plus untuk ke kiri.",
          "Energi mekanik partikel dalam gerak harmonis: E = ½ · m · ω² · A².",
          "Energi kinetik maksimum partikel sama besar dengan energi potensial maksimumnya."
        ]
      },
      {
        heading: "Superposisi, Pantulan, dan Gelombang Berdiri",
        paragraphs: [
          "Ketika dua gelombang bertemu, masing-masing merambat tanpa mengganggu gelombang lain dan simpangan totalnya adalah jumlah penjumlahan keduanya. Interferensi konstruktif terjadi bila rapat puncak bertemu puncak secara bersamaan.",
          "Gelombang berdiri terbentuk dari superposisi dua gelombang sejajar yang merambat berlawanan arah dengan amplitudo sama besar."
        ],
        list: [
          "Prinsip superposisi: simpangan total y = y₁ + y₂.",
          "Interferensi konstruktif terjadi bila beda jalur sama dengan n · λ, destruktif bila (n + ½) · λ.",
          "Pada pemantulan keras, gelombang mengalami pergeseran fase 180° atau π radian.",
          "Gelombang berdiri mempunyai simpang diam yang disebut node dan bucu yang disebut antinode.",
          "Jarak antara dua node atau dua antinode berturut-turut sama dengan setengah panjang gelombang."
        ]
      }
    ],
    formulas: [
      { label: "Hubungan kecepatan, panjang gelombang, dan frekuensi", expr: "v = λ · f", note: "v kecepatan rambat (m/s), λ panjang gelombang (m), f frekuensi (Hz)." },
      { label: "Periode dan frekuensi", expr: "T = 1 / f", note: "T periode (s), f frekuensi (Hz); keduanya saling berkebalikan." },
      { label: "Kecepatan gelombang pada tali", expr: "v = √(F / μ)", note: "F ketegangan tali (N), μ kerapatan linier tali (kg/m); hasil dalam m/s." },
      { label: "Besaran sudut getaran", expr: "ω = 2π · f = 2π / T", note: "ω besaran sudut (rad/s), f frekuensi (Hz), T periode (s)." },
      { label: "Persamaan gelombang harmonis", expr: "y = A · sin(ω · t ± k · x)", note: "A amplitudo (m), k bilangan gelombang k = 2π/λ dengan satuan rad/m." },
      { label: "Panjang gelombang berdiri pada tali", expr: "λ = 2 · L / n", note: "L panjang tali (m), n = 1, 2, 3, ... untuk tali berujung tetap." }
    ],
    examples: [
      {
        question: "Sebuah gelombang pada tali mempunyai frekuensi 50 Hz dan panjang gelombang 4 m. Hitung kecepatan rambatnya dan waktu yang diperlukan untuk merambat sejauh 300 m.",
        steps: [
          "Diketahui: f = 50 Hz, λ = 4 m, jarak s = 300 m.",
          "Rumus kecepatan gelombang: v = λ · f.",
          "v = 4 × 50 = 200 m/s.",
          "Waktu rambat: t = s/v = 300/200 = 1,5 s."
        ],
        answer: "Jadi kecepatan rambat gelombang 200 m/s dan waktu untuk merambat 300 m adalah 1,5 s."
      },
      {
        question: "Sebuah tali dengan kerapatan linier 0,01 kg/m diberi ketegangan 400 N. Hitung kecepatan rambat gelombang pada tali itu.",
        steps: [
          "Diketahui: F = 400 N, μ = 0,01 kg/m.",
          "Rumus kecepatan gelombang pada tali: v = √(F/μ).",
          "v = √(400/0,01) = √40000 = 200 m/s.",
          "Bila ketegangan menjadi empat kali lipat, kecepatan gelombang menjadi dua kali lipat."
        ],
        answer: "Jadi kecepatan rambat gelombang pada tali tersebut adalah 200 m/s."
      }
    ],
    tips: [
      "Tentukan dulu jenis gelombang dan mediumnya sebelum memilih rumus kecepatannya.",
      "Samakan semua satuan, yaitu frekuensi dalam hertz dan jarak dalam meter, agar kecepatan keluar dalam m/s.",
      "Pada soal gelombang berdiri, ingat jarak antara dua node sama dengan setengah panjang gelombang.",
      "Amplitudo tidak memengaruhi kecepatan gelombang, hanya energinya yang sebanding dengan kuadrat amplitudo."
    ]
  },
  {
    id: 7,
    title: "Bab 7: Bunyi & Efek Doppler",
    summary: "Membahas sifat bunyi, kecepatan bunyi, resonansi, efek Doppler, dan gelombang sonik.",
    sections: [
      {
        heading: "Sifat dan Sumber Bunyi",
        paragraphs: [
          "Bunyi adalah gelombang mekanik longitudinal yang terjadi akibat getaran sumber dan memerlukan medium untuk merambat. Rentang pendengaran manusia kira-kira 20 Hz hingga 20.000 Hz.",
          "Bunyi berfrekuensi di bawah 20 Hz disebut infrasonik, sedangkan di atas 20.000 Hz disebut ultrasonik."
        ],
        list: [
          "Bunyi termasuk gelombang longitudinal karena partikel udaranya bergetar searah dengan arah rambat.",
          "Bunyi tidak dapat merambat melalui ruang hampa udara.",
          "Frekuensi menentukan tinggi-rendahnya nada, sedangkan amplitudo menentukan besar-kecilnya keras lembutnya bunyi.",
          "Rentang pendengaran manusia berkisar 20 Hz sampai 20 kHz.",
          "Sumber bunyi harus bergetar, misalnya senar gitar, pita suara, dan permukaan genderang."
        ]
      },
      {
        heading: "Kecepatan Bunyi dan Intensitas",
        paragraphs: [
          "Kecepatan bunyi dalam gas bergantung pada suhu dan jenis gasnya, di mana makin tinggi suhu makin cepat bunyi merambat. Pada udara bersuhu 0 °C, kecepatan bunyi kira-kira 331 m/s.",
          "Intensitas bunyi dinyatakan dalam watt per meter persegi, sedangkan sensitivitas pendengaran dinyatakan dalam skala desibel secara logaritmik."
        ],
        list: [
          "Perkiraan kecepatan bunyi dalam udara: v = 331 + 0,6 · t dengan t suhu dalam °C.",
          "Kecepatan bunyi terbesar pada zat padat, lebih kecil pada zat cair, dan terkecil pada gas.",
          "Level intensitas: β = 10 · log(I/I₀) dengan ambang pendengaran I₀ = 10⁻¹² W/m².",
          "Setiap kenaikan 10 dB berarti intensitas bertambah sepuluh kali lipat.",
          "Bunyi pada 0 dB bukan berarti tanpa bunyi, melainkan intensitasnya sama dengan ambang pendengaran."
        ]
      },
      {
        heading: "Resonansi dan Gelombang Berdiri Bunyi",
        paragraphs: [
          "Resonansi terjadi ketika frekuensi paksa sama dengan frekuensi alami benda, sehingga amplitudo getaran menjadi sangat besar. Pada pipa dan tali bundar terbentuk gelombang berdiri berupa simpang dan bucu yang tetap posisinya.",
          "Pipa yang terbuka di kedua ujung menghasilkan seluruh harmonik, sedangkan pipa tertutup di satu ujung hanya menghasilkan harmonik ganjil."
        ],
        list: [
          "Pipa terbuka-terbuka mempunyai frekuensi harmonik f = n · v/(2L) dengan n = 1, 2, 3, ...",
          "Pipa tertutup-terbuka hanya menghasilkan harmonik ganjil: f = (2n − 1) · v/(4L).",
          "Resonansi terjadi bila frekuensi paksa sama dengan frekuensi alami benda sehingga amplitudo membesar.",
          "Pada pipa terbuka terdapat bucu di kedua ujung, sedangkan pada pipa tertutup bucu berada di ujung terbuka.",
          "Gelombang berdiri bunyi berupa daerah rapat dan renggang yang tidak berpindah tempat."
        ]
      },
      {
        heading: "Efek Doppler dan Gelombang Sonik",
        paragraphs: [
          "Efek Doppler adalah perubahan frekuensi bunyi yang diamati karena adanya gerak relatif antara sumber dan pendengar. Bunyi terdengar lebih tinggi ketika sumber mendekat dan lebih rendah ketika sumber menjauh.",
          "Apabila kecepatan sumber melampaui kecepatan bunyi, terbentuk kerucut sonik yang disertai dentuman sonik."
        ],
        list: [
          "Sumber mendekat: frekuensi yang didengar lebih besar daripada frekuensi sumbernya.",
          "Sumber menjauh: frekuensi yang didengar lebih kecil daripada frekuensi sumbernya.",
          "Perubahan frekuensi Doppler juga terjadi pada gelombang cahaya dan disebut pergeseran merah.",
          "Ketika kecepatan sumber lebih besar dari kecepatan bunyi, terbentuk kerucut sonik dengan sudut sin θ = v/v_sumber.",
          "Sirene ambulans yang terdengar tinggi lalu rendah saat lewat adalah contoh nyata efek Doppler."
        ]
      }
    ],
    formulas: [
      { label: "Kecepatan bunyi dalam udara", expr: "v = 331 + 0,6 · t", note: "v kecepatan bunyi (m/s), t suhu udara dalam °C; pada 0 °C v = 331 m/s." },
      { label: "Hubungan bunyi dan panjang gelombang", expr: "v = λ · f", note: "v kecepatan bunyi (m/s), λ panjang gelombang bunyi (m), f frekuensi (Hz)." },
      { label: "Level intensitas bunyi", expr: "β = 10 · log(I / I₀)", note: "β level intensitas (dB), I intensitas (W/m²), I₀ = 10⁻¹² W/m²." },
      { label: "Efek Doppler", expr: "f' = f · (v ± v_o) / (v ∓ v_s)", note: "f frekuensi sumber (Hz), v kecepatan bunyi, v_o kecepatan pendengar, v_s kecepatan sumber; tanda atas untuk gerak mendekat." },
      { label: "Frekuensi pipa terbuka-terbuka", expr: "f = n · v / (2L)", note: "n = 1, 2, 3, ... (semua harmonik), L panjang pipa (m), v kecepatan bunyi (m/s)." }
    ],
    examples: [
      {
        question: "Sebuah ambulans bergerak mendekati pengendara yang diam dengan kecepatan 20 m/s. Frekuensi sirenenya 700 Hz dan kecepatan bunyi 340 m/s. Frekuensi apa yang didengar pengendara itu?",
        steps: [
          "Diketahui: f = 700 Hz, v = 340 m/s, v_sumber = 20 m/s mendekat, pendengar diam sehingga v_o = 0.",
          "Rumus Doppler untuk sumber yang mendekat: f' = f · v/(v − v_sumber).",
          "f' = 700 × 340/(340 − 20) = 700 × 340/320 = 743,75 Hz.",
          "Frekuensi yang didengar lebih tinggi karena sumber bergerak mendekati pendengar."
        ],
        answer: "Jadi frekuensi yang didengar pengendara adalah 743,75 Hz, kira-kira 744 Hz."
      },
      {
        question: "Sebuah bunyi terjadi pada suhu 27 °C dengan intensitas 10⁻⁸ W/m². Hitung kecepatan bunyi pada suhu itu dan level intensitas bunyi tersebut.",
        steps: [
          "Diketahui: t = 27 °C, I = 10⁻⁸ W/m², I₀ = 10⁻¹² W/m².",
          "Kecepatan bunyi: v = 331 + 0,6 × 27 = 331 + 16,2 = 347,2 m/s.",
          "Level intensitas: β = 10 · log(10⁻⁸/10⁻¹²) = 10 · log(10⁴) = 10 × 4.",
          "β = 40 dB."
        ],
        answer: "Jadi kecepatan bunyi pada suhu 27 °C adalah 347,2 m/s dan level intensitasnya 40 dB."
      }
    ],
    tips: [
      "Tentukan dulu arah gerak sumber dan pendengar sebelum memilih tanda pada rumus Doppler.",
      "Gunakan suhu dalam derajat Celsius untuk v = 331 + 0,6t, sedangkan suhu Kelvin dipakai pada perhitungan gas.",
      "Ingat bahwa bunyi adalah gelombang longitudinal sehingga selalu memerlukan medium untuk merambat.",
      "Pada soal pipa, perhatikan apakah ujungnya terbuka atau tertutup karena seri harmoniknya berbeda."
    ]
  },
  {
    id: 8,
    title: "Bab 8: Cahaya & Optik Geometri",
    summary: "Membahas sifat cahaya, pemantulan pada cermin, pembiasan, dan pembentukan bayangan oleh lensa.",
    sections: [
      {
        heading: "Sifat Cahaya dan Cermin Datar",
        paragraphs: [
          "Cahaya merambat lurus dalam medium homogen dan dapat mengalami pemantulan maupun pembiasan. Cermin datar menghasilkan bayangan maya, tegak, dan sama besar dengan bendanya.",
          "Jarak bayangan cermin datar sama dengan jarak benda ke cermin, sehingga perbesarannya selalu satu kali."
        ],
        list: [
          "Hukum pemantulan: sudut datang sama dengan sudut pantul, yaitu i = r.",
          "Sudut datang dan sudut pantul selalu diukur terhadap garis normal pada titik jatuhnya berkas.",
          "Bayangan pada cermin datar bersifat maya, tegak, sama besar, dan terbalik kiri-kanan.",
          "Cahaya mengikuti prinsip pembalikan jalur, yaitu bila arah rambat dibalik berkas tetap menempuh lintasan yang sama.",
          "Pada cermin datar jarak bayangan s′ = −s sehingga perbesaran M sama dengan 1."
        ]
      },
      {
        heading: "Cermin Lengkung",
        paragraphs: [
          "Cermin lengkung terdiri atas cermin cekung atau konkaf yang bersifat memfokuskan berkas dan cermin cembung atau konveks yang bersifat menyebarkan berkas. Jarak fokus cermin setengah dari jari-jari lengkungnya.",
          "Benda pada cermin cekung dapat membentuk bayangan nyata terbalik atau maya tegak, tergantung jarak benda terhadap titik fokusnya."
        ],
        list: [
          "Cermin cekung mempunyai f positif dan bersifat memfokuskan, sedangkan cermin cembung f negatif dan menyebar.",
          "Benda di luar titik fokus cermin cekung membentuk bayangan nyata, terbalik, dan diperkecil atau diperbesar.",
          "Benda di antara cermin cekung dengan titik fokusnya membentuk bayangan maya, tegak, dan diperbesar.",
          "Cermin cembung selalu membentuk bayangan maya, tegak, dan diperkecil berapa pun jarak bendanya.",
          "Persamaan umum cermin lengkung: 1/f = 1/s + 1/s′ dengan konvensi tanda yang konsisten.",
          "Perbesaran bayangan: M = −s′/s, tanda negatif berarti bayangan terbalik."
        ]
      },
      {
        heading: "Pembiasan Cahaya",
        paragraphs: [
          "Pembiasan adalah perubahan arah rambat cahaya ketika berpindah dari satu medium ke medium lain yang indeks biasnya berbeda. Cahaya yang menuju ke medium lebih rapat dibiaskan mendekati garis normal.",
          "Warna pelangi pada prisma terjadi karena dispersi, yaitu indeks bias kaca berbeda untuk setiap panjang gelombang cahaya."
        ],
        list: [
          "Hukum Snellius: n₁ · sin i = n₂ · sin r, dengan i sudut datang dan r sudut bias.",
          "Indeks bias udara hampir 1, air 1,33, dan kaca kira-kira 1,5.",
          "Indeks bias adalah rasio kecepatan cahaya di vakum terhadap kecepatannya dalam medium: n = c/v.",
          "Pemantulan sempurna terjadi bila cahaya datang dari medium lebih rapat ke lebih renggang dengan sudut datang melebihi sudut kritis.",
          "Serat optik bekerja dengan memanfaatkan peristiwa pemantulan sempurna berulang kali di dalam serat kaca."
        ]
      },
      {
        heading: "Lensa dan Pembentukan Bayangan",
        paragraphs: [
          "Lensa cembung atau konvergen memfokuskan berkas sejajar ke titik fokus, sedangkan lensa cekung atau divergen menyebar berkas sejajar seolah-olah berasal dari titik fokusnya. Lensa tipis memenuhi persamaan yang sama dengan cermin lengkung.",
          "Benda di luar fokus lensa cembung membentuk bayangan nyata dan terbalik, sedangkan benda di dalam jarak fokus membentuk bayangan maya dan tegak."
        ],
        list: [
          "Lensa cembung mempunyai f positif dan bersifat konvergen, lensa cekung f negatif dan divergen.",
          "Benda di luar titik fokus lensa cembung menghasilkan bayangan nyata, terbalik, dan diperkecil atau diperbesar.",
          "Benda berada di dalam jarak fokus lensa cembung menghasilkan bayangan maya, tegak, dan diperbesar.",
          "Persamaan lensa tipis: 1/f = 1/s + 1/s′ dengan konvensi tanda yang disepakati.",
          "Perbesaran: M = −s′/s; nilai mutlak M lebih besar dari 1 berarti bayangan diperbesar."
        ]
      }
    ],
    formulas: [
      { label: "Hukum pemantulan", expr: "i = r", note: "i sudut datang dan r sudut pantul, keduanya diukur terhadap garis normal." },
      { label: "Indeks bias medium", expr: "n = c / v", note: "n indeks bias (tanpa satuan), c = 3 × 10⁸ m/s kecepatan cahaya di vakum, v kecepatan cahaya dalam medium." },
      { label: "Hukum Snellius", expr: "n₁ · sin i = n₂ · sin r", note: "n₁ dan n₂ indeks bias medium, i sudut datang, r sudut bias dalam derajat." },
      { label: "Persamaan cermin dan lensa tipis", expr: "1/f = 1/s + 1/s′", note: "f jarak fokus, s jarak benda, s′ jarak bayangan, semua dengan satuannya sama dan konvensi tanda tetap." },
      { label: "Jarak fokus cermin lengkung", expr: "f = R / 2", note: "f jarak fokus (cm), R jari-jari lengkung cermin (cm)." },
      { label: "Perbesaran bayangan", expr: "M = −s′ / s = h′ / h", note: "M tanpa satuan; M negatif berarti terbalik, M positif berarti tegak, |M| lebih dari 1 berarti diperbesar." }
    ],
    examples: [
      {
        question: "Cahaya jatuh dari udara ke dalam sebuah zat bening dengan sudut datang 60°. Jika indeks bias zat itu kira-kira 1,73, hitung sudut biasnya. Indeks bias udara dianggap 1.",
        steps: [
          "Diketahui: n₁ = 1 (udara), i = 60°, n₂ = 1,73 (kira-kira √3).",
          "Rumus Snellius: n₁ · sin i = n₂ · sin r.",
          "sin r = (1 × sin 60°)/1,73 = 0,866/1,73 ≈ 0,5.",
          "r = sin⁻¹(0,5) = 30°."
        ],
        answer: "Jadi sudut biasnya 30°, cahaya dibiaskan mendekati garis normal karena masuk ke medium yang lebih rapat."
      },
      {
        question: "Sebuah benda diletakkan 30 cm di depan cermin cekung yang mempunyai jarak fokus 10 cm. Tentukan jarak bayangan, sifat bayangan, dan perbesarannya.",
        steps: [
          "Diketahui: s = 30 cm, f = 10 cm karena cermin cekung mempunyai fokus positif.",
          "Rumus cermin: 1/f = 1/s + 1/s′ sehingga 1/s′ = 1/10 − 1/30.",
          "1/s′ = (3 − 1)/30 = 2/30 = 1/15 sehingga s′ = 15 cm.",
          "Perbesaran: M = −s′/s = −15/30 = −0,5."
        ],
        answer: "Jadi bayangan berada 15 cm di depan cermin, bersifat nyata, terbalik, dan diperkecil setengah kali dengan M = −0,5."
      }
    ],
    tips: [
      "Konsistenlah memakai satu konvensi tanda sepanjang perhitungan cermin dan lensa.",
      "Gambar diagram berkas sederhana untuk memeriksa hasil hitungan cermin atau lensa.",
      "Ingat bahwa sudut datang dan sudut bias selalu diukur terhadap garis normal, bukan terhadap permukaan.",
      "Pastikan kalkulator memakai satuan derajat ketika menghitung fungsi sinus pada soal pembiasan."
    ]
  }
];
