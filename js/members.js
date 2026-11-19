/* =====================================================
   DATA TIM — ubah isi di sini saja.
   Urutan array = urutan di piramid (atas → bawah, kiri → kanan)
     index 0       → puncak
     index 1 - 2   → baris tengah
     index 3 - 5   → baris bawah
   Foto: taruh file di assets/foto/ lalu isi nama filenya.
   Jika foto tidak ditemukan, otomatis tampil inisial.
   ===================================================== */

const TEAM = {
  judul: "Kelompok 3",
  subjudul: "Enam orang, satu tujuan: membangun produk yang rapi dan berguna.",
};

const MEMBERS = [
  {
    nama: "Aditia Permana Wibowo",
    peran: "Kepala Acara",
    foto: "assets/foto/adit.jpeg",
    deskripsi:
      "Memastikann acara berjalan dengan baik, di support dengan ilmu kebatinan saya",
    skill: ["pawang ujan", "tambah rezeki", "santet"],
    kontak: "orangoranganadit@dukunonline.com",
  },
  {
    nama: "Syafira Andyani Putri",
    peran: "Pelayan Masyarakat",
    foto: "assets/foto/asya.jpg",
    deskripsi:
      "Merancang tampilan dan alur pengguna agar mudah dipakai. Suka riset pengguna dan prototyping cepat.",
    skill: ["Figma", "Riset UX", "Prototyping"],
    kontak: "orangoranganadit@dukunonline.com",
  },
  {
    nama: "Kristina",
    peran: "Bagian Nuang Nuang",
    foto: "assets/foto/kristin.jpg",
    deskripsi:
      "Mengubah desain menjadi antarmuka yang responsif dan halus, dengan perhatian pada animasi dan aksesibilitas.",
    skill: ["HTML", "CSS", "JavaScript"],
    kontak: "orangoranganadit@dukunonline.com",
  },
  {
    nama: "Lukman Firdaus",
    peran: "Assiten Dukun",
    foto: "assets/foto/men.jpg",
    deskripsi:
      "menjaga acara nikahan dan lahan parkir dan mengamankan rendang di hajatan",
    skill: ["senior priwitan", "bikin banner", "mengatur lalin"],
    kontak: "orangoranganadit@dukunonline.com",
  },
  {
    nama: "AR Ruhul Jadid",
    peran: "Rakyat",
    foto: "assets/foto/ruhul.jpeg",
    deskripsi:
      "Memastikan setiap fitur berjalan sesuai harapan lewat pengujian manual dan otomatis sebelum rilis.",
    skill: ["Testing", "Cypress", "Dokumentasi"],
    kontak: "orangoranganadit@dukunonline.com",
  },
  {
    nama: "Billy Alamsyah",
    peran: "Karyawan Swasta",
    foto: "assets/foto/billy.jpeg",
    deskripsi:
      "Mengurus deployment, server, dan pipeline CI/CD agar rilis berjalan cepat dan minim masalah.",
    skill: ["Docker", "CI/CD", "Linux"],
    kontak: "orangoranganadit@dukunonline.com",
  },
];
