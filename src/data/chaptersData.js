/**
 * COMPLETE CURRICULUM CHAPTER MAPPING (src/data/chaptersData.js)
 * 
 * Mapping bab lengkap per mata pelajaran dan per kelas (Kelas 10, 11, 12 SMA & SD/SMP).
 */

export const CHAPTERS_DATA = {
  matematika_umum: {
    10: [
      { id: 1, name: "Bab 1: Eksponen & Logaritma" },
      { id: 2, name: "Bab 2: Barisan & Deret Aritmatika" },
      { id: 3, name: "Bab 3: Barisan & Deret Geometri" },
      { id: 4, name: "Bab 4: Persamaan & Fungsi Kuadrat" },
      { id: 5, name: "Bab 5: Sistem Persamaan Linear (SPLDV & SPLTV)" },
      { id: 6, name: "Bab 6: Fungsi Rasional & Operasi Aljabar" },
      { id: 7, name: "Bab 7: Vektor Dasar" },
      { id: 8, name: "Bab 8: Trigonometri Dasar" },
      { id: 9, name: "Bab 9: Statistika (Mean, Median, Modus, Kuartil)" },
      { id: 10, name: "Bab 10: Peluang Dasar (Permutasi & Kombinasi)" }
    ],
    11: [
      { id: 1, name: "Bab 1: Fungsi Trigonometri Lanjutan" },
      { id: 2, name: "Bab 2: Identitas Trigonometri" },
      { id: 3, name: "Bab 3: Limit Fungsi Aljabar" },
      { id: 4, name: "Bab 4: Limit Fungsi Trigonometri" },
      { id: 5, name: "Bab 5: Turunan Dasar (Pangkat, Perkalian, Rantai)" },
      { id: 6, name: "Bab 6: Fungsi Eksponen & Logaritma" }
    ],
    12: [
      { id: 1, name: "Bab 1: Turunan Lanjutan (Maks/Min, Kecepatan)" },
      { id: 2, name: "Bab 2: Integral Tak Tentu" },
      { id: 3, name: "Bab 3: Integral Tentu" },
      { id: 4, name: "Bab 4: Aplikasi Integral (Luas & Volume)" },
      { id: 5, name: "Bab 5: Peluang Bersyarat & Teorema Bayes" },
      { id: 6, name: "Bab 6: Statistika Inferensial" },
      { id: 7, name: "Bab 7: Pemodelan Matematika (Pertumbuhan & Peluruhan)" }
    ]
  },

  matematika_lanjut: {
    10: [
      { id: 1, name: "Bab 1: Polinomial & Operasi Suku Banyak" },
      { id: 2, name: "Bab 2: Vektor 3 Dimensi" },
      { id: 3, name: "Bab 3: Matriks & Determinan" }
    ],
    11: [
      { id: 1, name: "Bab 1: Geometri Analitik Parabola & Hiperbola" },
      { id: 2, name: "Bab 2: Transposisi Matriks & Invers" },
      { id: 3, name: "Bab 3: Turunan Fungsi Implisit" }
    ],
    12: [
      { id: 1, name: "Bab 1: Geometri Analitik (Lingkaran & Elips)" },
      { id: 2, name: "Bab 2: Turunan Aljabar, Trigonometri & Eksponensial" },
      { id: 3, name: "Bab 3: Kalkulus Integral (Riemann & Teorema Dasar)" },
      { id: 4, name: "Bab 4: Analisis Data & Distribusi Binomial / Normal" }
    ]
  },

  fisika: {
    10: [
      { id: 1, name: "Bab 1: Hakikat Fisika & Metode Ilmiah" },
      { id: 2, name: "Bab 2: Besaran, Satuan & Dimensi" },
      { id: 3, name: "Bab 3: Pengukuran (Jangka Sorong & Mikrometer)" },
      { id: 4, name: "Bab 4: Angka Penting & Notasi Ilmiah" },
      { id: 5, name: "Bab 5: Vektor Fisika" },
      { id: 6, name: "Bab 6: Gerak Lurus (GLB & GLBB)" },
      { id: 7, name: "Bab 7: Gerak Parabola" },
      { id: 8, name: "Bab 8: Gerak Melingkar" },
      { id: 9, name: "Bab 9: Hukum Newton & Penerapan" },
      { id: 10, name: "Bab 10: Usaha & Energi" },
      { id: 11, name: "Bab 11: Momentum & Impuls" },
      { id: 12, name: "Bab 12: Energi Terbarukan" }
    ],
    11: [
      { id: 1, name: "Bab 1: Fluida Statis" },
      { id: 2, name: "Bab 2: Fluida Dinamis" },
      { id: 3, name: "Bab 3: Suhu & Kalor" },
      { id: 4, name: "Bab 4: Teori Kinetik Gas" },
      { id: 5, name: "Bab 5: Termodinamika" },
      { id: 6, name: "Bab 6: Gelombang Mekanik" },
      { id: 7, name: "Bab 7: Bunyi & Efek Doppler" },
      { id: 8, name: "Bab 8: Cahaya & Optik Geometri" }
    ],
    12: [
      { id: 1, name: "Bab 1: Listrik Statis (Gaya Coulomb, Medan Listrik, Potensial & Kapasitor)" },
      { id: 2, name: "Bab 2: Listrik Arus Searah (Hukum Ohm, Hukum Kirchhoff & Hambatan)" },
      { id: 3, name: "Bab 3: Kemagnetan (Medan Magnet Kawat, Gaya Lorentz & GGL Induksi)" },
      { id: 4, name: "Bab 4: Arus Bolak-Balik / AC (Resistor, Induktor, Kapasitor & Rangkaian RLC)" },
      { id: 5, name: "Bab 5: Gelombang Elektromagnetik (Spektrum & Sifat-Sifat Gelombang EM)" },
      { id: 6, name: "Bab 6: Pengantar Elektronika & Teknologi Digital (Gerbang Logika & Sistem Digital)" },
      { id: 7, name: "Bab 7: Teori Relativitas (Relativitas Khusus, Dilatasi Waktu & Massa-Energi)" },
      { id: 8, name: "Bab 8: Gejala Kuantum (Foton, Efek Fotolistrik & Efek Compton)" },
      { id: 9, name: "Bab 9: Fisika Inti dan Radioaktivitas (Peluruhan, Reaksi Fisi & Fusi Nuklir)" }
    ]
  },

  kimia: {
    10: [
      { id: 1, name: "Bab 1: Pengenalan Ilmu Kimia & Keselamatan Kerja" },
      { id: 2, name: "Bab 2: Materi & Perubahannya" },
      { id: 3, name: "Bab 3: Perkembangan Model Atom" },
      { id: 4, name: "Bab 4: Konfigurasi Elektron & Bilangan Kuantum" },
      { id: 5, name: "Bab 5: Sistem Periodik Unsur (SPU)" },
      { id: 6, name: "Bab 6: Ikatan Kimia" },
      { id: 7, name: "Bab 7: Stoikiometri Dasar" },
      { id: 8, name: "Bab 8: Kimia Hijau & Nanoteknologi" }
    ],
    11: [
      { id: 1, name: "Bab 1: Termokimia" },
      { id: 2, name: "Bab 2: Laju Reaksi" },
      { id: 3, name: "Bab 3: Kesetimbangan Kimia" },
      { id: 4, name: "Bab 4: Asam-Basa & pH" },
      { id: 5, name: "Bab 5: Titrasi Asam-Basa" },
      { id: 6, name: "Bab 6: Larutan Penyangga (Buffer)" },
      { id: 7, name: "Bab 7: Hidrolisis Garam" },
      { id: 8, name: "Bab 8: Kelarutan & Hasil Kali Kelarutan (Ksp)" }
    ],
    12: [
      { id: 1, name: "Bab 1: Larutan dan Koloid (Asam Basa, Buffer, Hidrolisis, Sifat Koligatif & Koloid)" },
      { id: 2, name: "Bab 2: Elektrokimia (Redoks, Sel Volta, Sel Elektrolisis & Korosi)" },
      { id: 3, name: "Bab 3: Gugus Fungsi dalam Senyawa Karbon (Alkohol, Eter, Aldehid, Keton, Asam Karboksilat & Ester)" },
      { id: 4, name: "Bab 4: Makromolekul Organik (Polimer Sintetis, Karbohidrat, Protein & Lemak)" }
    ]
  },

  biologi: {
    10: [
      { id: 1, name: "Bab 1: Keanekaragaman Hayati & Klasifikasi" },
      { id: 2, name: "Bab 2: Virus" },
      { id: 3, name: "Bab 3: Bakteri & Archaea" },
      { id: 4, name: "Bab 4: Fungi / Jamur" },
      { id: 5, name: "Bab 5: Protista" },
      { id: 6, name: "Bab 6: Ekosistem & Interaksi" },
      { id: 7, name: "Bab 7: Bioteknologi Konvensional" },
      { id: 8, name: "Bab 8: Perubahan Lingkungan & Pelestarian" }
    ],
    11: [
      { id: 1, name: "Bab 1: Struktur & Fungsi Sel" },
      { id: 2, name: "Bab 2: Transport Membran" },
      { id: 3, name: "Bab 3: Metabolisme: Katabolisme" },
      { id: 4, name: "Bab 4: Metabolisme: Anabolisme" },
      { id: 5, name: "Bab 5: Jaringan Tumbuhan" },
      { id: 6, name: "Bab 6: Jaringan Hewan" },
      { id: 7, name: "Bab 7: Sistem Pencernaan" },
      { id: 8, name: "Bab 8: Sistem Pernapasan" },
      { id: 9, name: "Bab 9: Sistem Sirkulasi" },
      { id: 10, name: "Bab 10: Sistem Ekskresi" },
      { id: 11, name: "Bab 11: Sistem Koordinasi (Saraf & Hormon)" },
      { id: 12, name: "Bab 12: Sistem Reproduksi" },
      { id: 13, name: "Bab 13: Sistem Imun" }
    ],
    12: [
      { id: 1, name: "Bab 1: Enzim dan Metabolisme (Kerja Enzim, Katabolisme & Anabolisme)" },
      { id: 2, name: "Bab 2: Genetika dan Pewarisan Sifat (DNA/RNA, Sintesis Protein, Mitosis/Meiosis & Hukum Mendel)" },
      { id: 3, name: "Bab 3: Evolusi (Asal-usul Kehidupan, Mekanisme Seleksi Alam & Bukti Evolusi)" },
      { id: 4, name: "Bab 4: Inovasi Bioteknologi (Konvensional, Rekayasa Genetika, Kloning & Bioetika)" }
    ]
  },

  bahasa_indonesia: {
    10: [
      { id: 1, name: "Bab 1: Teks Laporan Hasil Observasi" },
      { id: 2, name: "Bab 2: Teks Eksposisi Logis" },
      { id: 3, name: "Bab 3: Teks Anekdot & Majas" },
      { id: 4, name: "Bab 4: Teks Hikayat & Sastra Melayu Klasik" }
    ],
    11: [
      { id: 1, name: "Bab 1: Teks Prosedur Kompleks" },
      { id: 2, name: "Bab 2: Teks Eksplanasi Fenomena Alam" },
      { id: 3, name: "Bab 3: Teks Ceramah & Bahasa Persuasif" },
      { id: 4, name: "Bab 4: Cerita Pendek & Unsur Intrinsik" }
    ],
    12: [
      { id: 1, name: "Bab 1: Membuat Surat Lamaran Pekerjaan" },
      { id: 2, name: "Bab 2: Menikmati Cerita Sejarah Indonesia (Novel Sejarah)" },
      { id: 3, name: "Bab 3: Menggali Informasi dan Memahami Teks Editorial/Opini" },
      { id: 4, name: "Bab 4: Menilai Karya Sastra (Kritik Sastra dan Esai)" },
      { id: 5, name: "Bab 5: Berargumen Melalui Debat atau Presentasi Ilmiah" },
      { id: 6, name: "Bab 6: Mengeksplorasi Tema Sosial Budaya (Naskah Drama / Artikel Kreatif)" }
    ]
  },

  sejarah: {
    10: [
      { id: 1, name: "Bab 1: Pengantar Ilmu Sejarah & Historiografi" },
      { id: 2, name: "Bab 2: Manusia Purba & Masa Praaksara Indonesia" },
      { id: 3, name: "Bab 3: Kerajaan Maritim Hindu-Buddha di Nusantara" },
      { id: 4, name: "Bab 4: Kerajaan Islam & Jalur Perdagangan Rempah" }
    ],
    11: [
      { id: 1, name: "Bab 1: Masuknya Bangsa Barat (VOC & Hindia Belanda)" },
      { id: 2, name: "Bab 2: Perlawanan Daerah Menentang Penjajahan" },
      { id: 3, name: "Bab 3: Pergerakan Nasional & Sumpah Pemuda 1928" },
      { id: 4, name: "Bab 4: Masa Pendudukan Jepang & Menuju Kemerdekaan" }
    ],
    12: [
      { id: 1, name: "Bab 1: Perjuangan Mempertahankan Kemerdekaan (1945–1950)" },
      { id: 2, name: "Bab 2: Demokrasi Liberal hingga Demokrasi Terpimpin" },
      { id: 3, name: "Bab 3: Indonesia Masa Orde Baru" },
      { id: 4, name: "Bab 4: Indonesia Masa Reformasi hingga Kini" }
    ]
  }
};
