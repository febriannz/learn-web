# React + Vite

Aplikasi **KuisPintar** — platform latihan soal multi-mapel (SD, SMP, SMA) dengan generator soal otomatis, bank soal, dan fitur belajar materi.

## Menjalankan

```bash
npm install
npm run dev     # development server
npm run build   # build produksi
npm run lint    # oxlint
```

## Fitur Belajar Materi

Halaman **Belajar Materi** (`src/components/LearnView.jsx`) dapat dibuka lewat tombol
**Belajar Materi** pada navbar atau kartu "Baru" di halaman utama.

Isi materi per bab meliputi: peta isi bab, penjelasan per subbab, rumus penting,
contoh soal beserta langkah penyelesaian, dan tips belajar. Progres bab yang sudah
dipelajari disimpan di `localStorage` (`kuispintar_materi_read`), dan tiap bab punya
tautan langsung ke latihan soalnya.

### Menambah materi

Struktur data ada di `src/data/materi/`:

```
src/data/materi/
├── index.js            # MATERI_DATA, MATERI_SUBJECTS, helper akses
├── fisikaKelas10.js    # MATERI_FISIKA_10
├── fisikaKelas11.js    # MATERI_FISIKA_11
└── fisikaKelas12.js    # MATERI_FISIKA_12
```

Skema tiap bab (wajib cocok dengan `id`/`name` di `src/data/chaptersData.js`):

```js
{
  id: 1,
  title: "Bab 1: ...",          // persis seperti chaptersData
  summary: "Ringkasan 1 kalimat",
  sections: [{ heading, paragraphs: ["..."], list: ["..."] }],
  formulas: [{ label, expr, note }],
  examples: [{ question, steps: ["..."], answer }],
  tips: ["..."]
}
```

Untuk menambah mapel baru: buat file serupa, daftarkan ke `MATERI_DATA`,
lalu set `available: true` pada entri mapel di `MATERI_SUBJECTS`.

---

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
