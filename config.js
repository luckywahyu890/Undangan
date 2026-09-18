/*
  ====================================================================
  KONFIGURASI UNDANGAN
  ====================================================================
*/
window.WEDDING_CONFIG = {

  // Nama panggilan singkat
  nickname: {
    groom: "Tommy",
    bride: "Herinza"
  },

  // Data mempelai
  couple: {
    groom: {
      name: "Tommy Wahyu Kristanto S.H",
      role: "PUTRA KEDUA",
      father: "Bapak Lisyanto",
      mother: "Ibu Juharti",
      photo: "T.jpg"
    },
    bride: {
      name: "Herinza Azzarah Rori Tando",
      role: "PUTRI PERTAMA",
      father: "Bapak Hariyanto",
      mother: "Ibu Siti Haeroni",
      photo: "R.jpg"
    }
  },

  // Tanggal acara
  wedding: {
    dateISO: "2026-11-08T08:00:00+07:00",
    dateDisplay: "Minggu, 08 November 2026"
  },

  // Acara
  events: [
    {
      title: "Akad Nikah",
      when: "Minggu, 08 November 2026 · 08.00 – 10.00 WIB",
      place: "Kediaman Mempelai Pria"
    }
  ],

  // Lokasi
  location: {
    title: "Kediaman Keluarga",
    address: "PRXW+7XX, Dander, Kabupaten Bojonegoro, Jawa Timur",
    mapsQuery: "PRXW+7XX Dander, Kabupaten Bojonegoro, Jawa Timur"
  },

  // Kisah Kasih
  loveStory: [
    {
      phase: "Fase Pertama",
      title: "Pertemuan Pertama",
      text: "Setiap kejadian memiliki alasan, itu sebabnya terdapat hal indah di balik sebuah pertemuan. Berawal dari percakapan sederhana yang akhirnya tidak memiliki celah untuk terjeda."
    },
    {
      phase: "Fase Kedua",
      title: "Menjalin Kasih",
      text: "Bak alur cerita di dalam sebuah buku, banyak lika-liku yang menjadi cerita pilu hingga akhirnya menghadiahkan dua raga untuk bersatu."
    },
    {
      phase: "Fase Ketiga",
      title: "Meneguhkan Keyakinan",
      text: "Rasa ragu pernah membelenggu, namun keyakinan itu akhirnya kembali menjadi tujuan."
    },
    {
      phase: "Fase Keempat",
      title: "Bertumbuh Bersama",
      text: "Tuhan menggenapkan ganjil kami dengan cara yang paling istimewa. Kami merasa utuh dan tumbuh atas hal-hal sederhana."
    },
    {
      phase: "Fase Kelima",
      title: "Penyempurnaan Cinta",
      text: "Tuhan menguatkan kami dengan air mata. Tuhan menegarkan hati kami dengan kecewa. Maka Tuhan menyempurnakan kami karena cinta."
    }
  ],

  // Amplop Digital
  gift: {
    note: "Doa restu Bapak/Ibu/Saudara/i adalah karunia yang berarti bagi kami. Namun jika ingin memberi tanda kasih dari jauh, kami sediakan amplop digital berikut.",
    accounts: [
      {
        bank: "MANDIRI",
        number: "1430035094992",
        name: "a.n. Herinza Azzarah",
        copy: "1430035094992"
      },
      {
        bank: "MANDIRI",
        number: "1780011132889",
        name: "a.n. Tommy Wahyu",
        copy: "1780011132889"
      }
    ]
  },

  // Media
  media: {
    music: "korea.mp3",
    backgroundPhoto: "tomi.jpg"
  },

  // Kutipan
  quote: {
    text: "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan dari jenismu sendiri, agar kamu merasa tenteram kepadanya.",
    source: "QS. Ar-Rum : 21"
  },

  // Footer
  footer: {
    thanks: "Terima kasih atas doa dan kehadiran Bapak/Ibu/Saudara/i."
  },

  /*
    ==================================================================
    TIPOGRAFI JUDUL & SUB JUDUL
    ==================================================================
    Mengatur tampilan JUDUL (nama mempelai, judul tiap bagian) dan
    SUB JUDUL / eyebrow (label kecil di atasnya, mis. "THE WEDDING OF",
    "MEMPELAI", "KISAH KASIH KAMI", dst) di semua halaman/bagian.

    Boleh diisi dengan:
    - Nama font Google Fonts (pastikan link font-nya ada di <head> index.html)
    - Kode warna hex, mis. "#B08D57", atau nama variabel warna di atas
      seperti "var(--gold)" / "var(--ink)" / "var(--sage)"
    - Ketebalan (fontWeight): 300 = tipis, 400 = normal, 500 = sedang,
      600/700 = tebal
  */
  typography: {

    // Judul utama tiap bagian: nama mempelai, nama fase kisah kasih,
    // nama acara, judul lokasi, nama di footer, dst.
    heading: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 500,
      color: "var(--ink)"
    },

    // Sub judul kecil di atas judul (eyebrow), contoh:
    // "UNDANGAN PERNIKAHAN", "THE WEDDING OF", "MEMPELAI", "TANDA KASIH"
    eyebrow: {
      fontFamily: "'Jost', sans-serif",
      fontWeight: 400,
      color: "var(--gold)",
      fontSize: "13px",
      letterSpacing: "0.14em"
    },

    // Ukuran judul per bagian (opsional). Kosongkan/hapus baris yang
    // tidak ingin diubah agar memakai ukuran bawaan.
    sizes: {
      coverNames: "44px",       // Nama di layar sampul (cover)
      heroNames: "40px",        // Nama di bagian utama (hero)
      personName: "28px",       // Nama mempelai di bagian "Mempelai"
      loveStoryTitle: "22px",   // Judul tiap fase di "Kisah Kasih"
      eventTitle: "24px",       // Judul tiap acara (Akad, Resepsi, dll)
      locationTitle: "20px",    // Judul alamat di bagian "Lokasi"
      footerNames: "26px"       // Nama mempelai di footer
    }
  }

};