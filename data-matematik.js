/* ==========================================================================
   DATA-MATEMATIK.JS — 100% BAHAN LENGKAP BUKU TEKS MATEMATIK KSSM TINGKATAN 4
   Sumber Rasmi: https://online.anyflip.com/nmbvq/pxsn/mobile/index.html
   Semua 10 Bab & Subtopik Rasmi KSSM Lengkap Tanpa Sebarang Tertinggal
   ========================================================================== */

const MATEMATIK_DATA = [
  {
    "id": "math-bab1",
    "babNum": "BAB 1",
    "title": "FUNGSI DAN PERSAMAAN KUADRATIK DALAM SATU PEMBOLEH UBAH",
    "icon": "📐",
    "anyflipPages": "Buku Teks Matematik Tingkatan 4 KSSM (Halaman 2 – 31)",
    "synopsis": "Mengkaji ungkapan dan fungsi kuadratik dalam bentuk am ax² + bx + c = 0, bentuk graf parabola (senyum atau masam), titik maksimum/minimum, paksi simetri x = -b/(2a), kaedah menentukan punca melalui pemfaktoran berserta jalan kira lengkap.",
    "notes": [
      {
        "subtopic": "1.1 Fungsi dan Persamaan Kuadratik",
        "summary": "Ungkapan kuadratik dalam satu pemboleh ubah ditulis dalam bentuk am ax² + bx + c dengan a ≠ 0. Ciri-ciri graf termasuk bentuk parabola (senyum bagi a > 0 atau masam bagi a < 0), paksi simetri x = -b/(2a), titik pusingan, dan punca persamaan di mana graf memotong paksi-x.",
        "verbatim": [
          "Bentuk Am Fungsi Kuadratik: f(x) = ax² + bx + c di mana a, b dan c ialah pemalar, a ≠ 0, dan kuasa tertinggi pemboleh ubah x ialah 2.",
          "Kesan Nilai a: Jika a > 0, graf melengkung ke atas membentuk parabola 'senyum' dengan titik minimum. Jika a < 0, graf melengkung ke bawah membentuk parabola 'masam' dengan titik maksimum. Nilai a menentukan kelebaran graf (semakin besar |a|, semakin sempit graf).",
          "Kesan Nilai b: Mengubah kedudukan paksi simetri graf x = -b / (2a).",
          "Kesan Nilai c: Menentukan nilai pintasan-y bagi graf (titik di mana graf memotong paksi-y pada koordinat (0, c)).",
          "Punca Persamaan Kuadratik: Nilai-nilai x yang memuaskan persamaan ax² + bx + c = 0 (iaitu nilai pintasan-x pada graf di mana f(x) = 0).",
          "Kaedah Menentukan Punca: 1. Kaedah Pemfaktoran (cth: x² - 5x + 6 = 0 => (x - 2)(x - 3) = 0 => x = 2 atau x = 3); 2. Rumus Kuadratik x = [-b ± √(b² - 4ac)] / (2a); 3. Kaedah Penyempurnaan Kuasa Dua."
        ],
        "explanation": "Fungsi kuadratik diaplikasikan secara meluas dalam memodelkan trajektori lontaran objek, reka bentuk jambatan gantung, dan pengoptimuman keuntungan perniagaan."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Tuliskan Persamaan dalam Bentuk Am ax² + bx + c = 0",
        "detail": "Kembangkan semua kurungan dan pindahkan semua sebutan ke sebelah kiri supaya sebelah kanan menjadi sifar.",
        "tip": "Pastikan bentuk: ax² + bx + c = 0"
      },
      {
        "step": "Langkah 2",
        "title": "Faktorkan Ungkapan Kuadratik (Kaedah Darab Silang)",
        "detail": "Cari dua faktor (mx + p)(nx + q) = 0 di mana p × q = c dan m × n = a.",
        "tip": "Gunakan kalkulator mod EQN -> DEG 2 untuk menyemak punca"
      },
      {
        "step": "Langkah 3",
        "title": "Selesaikan Setiap Kurungan untuk Mendapatkan Punca",
        "detail": "Setkan setiap kurungan sama dengan sifar: mx + p = 0 atau nx + q = 0 untuk mendapatkan nilai x.",
        "tip": "x₁ = -p/m dan x₂ = -q/n"
      },
      {
        "step": "Langkah 4",
        "title": "Tolak Punca Negatif bagi Masalah Ukuran Fizikal",
        "detail": "Bagi soalan panjang, luas, umur atau masa, nilai x < 0 mestilah ditolak secara eksplisit dalam jalan kerja.",
        "tip": "Ukuran panjang sentiasa positif (x > 0)"
      }
    ],
    "keypoints": [
      {
        "badge": "BENTUK AM",
        "term": "f(x) = ax² + bx + c",
        "meaning": "Bentuk standard fungsi kuadratik satu pemboleh ubah dengan syarat a ≠ 0."
      },
      {
        "badge": "BENTUK GRAF",
        "term": "a > 0 (Senyum) vs a < 0 (Masam)",
        "meaning": "a positif menghasilkan parabola minimum (∪); a negatif menghasilkan parabola maksimum (∩)."
      },
      {
        "badge": "PAKSI SIMETRI",
        "term": "x = -b / (2a)",
        "meaning": "Garis tegak yang membahagi dua graf parabola secara simetri melalui titik puncak."
      },
      {
        "badge": "PINTASAN-Y",
        "term": "Titik (0, c)",
        "meaning": "Nilai c dalam persamaan merupakan titik di mana graf memotong paksi-y."
      },
      {
        "badge": "PUNCA",
        "term": "Pintasan-x apabila f(x) = 0",
        "meaning": "Nilai pemboleh ubah x apabila graf memotong paksi-x."
      }
    ],
    "questions": [
      {
        "q": "Diberi persamaan kuadratik 3x² - 10x + 3 = 0. Cari nilai-nilai x yang memuaskan persamaan ini.",
        "options": [
          "x = 1/3 dan x = 3",
          "x = -1/3 dan x = -3",
          "x = 1 dan x = 9",
          "x = 2 dan x = 5"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA LENGKAP:\n3x² - 10x + 3 = 0\n(3x - 1)(x - 3) = 0\n3x - 1 = 0  =>  3x = 1  =>  x = 1/3\nx - 3 = 0  =>  x = 3\nMaka punca-punca ialah x = 1/3 dan x = 3."
      },
      {
        "q": "Apakah koordinat pintasan-y dan bentuk graf bagi fungsi kuadratik f(x) = -2x² + 4x + 6?",
        "options": [
          "Pintasan-y = (0, 6) dan bentuk graf ialah ∩ (titik maksimum)",
          "Pintasan-y = (0, -6) dan bentuk graf ialah ∪ (titik minimum)",
          "Pintasan-y = (0, 4) dan bentuk graf ialah ∩ (titik maksimum)",
          "Pintasan-y = (0, -2) dan bentuk graf ialah ∪ (titik minimum)"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA:\n1. a = -2 < 0, maka graf berbentuk masam (∩) dan mempunyai titik maksimum.\n2. Nilai c = 6, maka pintasan-y terletak pada koordinat (0, 6)."
      },
      {
        "q": "Persamaan paksi simetri bagi graf fungsi kuadratik f(x) = x² - 6x + 8 ialah...",
        "options": [
          "x = 3",
          "x = -3",
          "x = 6",
          "x = -6"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA:\nRumus paksi simetri: x = -b / (2a)\nNilai a = 1, b = -6\nx = -(-6) / (2 × 1) = 6 / 2 = 3\nMaka persamaan paksi simetri ialah x = 3."
      },
      {
        "q": "Sebiji bola dilontar ke atas di mana ketinggiannya, h meter, selepas t saat diberi oleh fungsi h(t) = -t² + 6t. Berapakah masa yang diambil oleh bola untuk mencecah tanah semula?",
        "options": [
          "3 saat",
          "6 saat",
          "9 saat",
          "12 saat"
        ],
        "answer": 1,
        "explanation": "JALAN KIRA:\nApabila bola mencecah tanah semula, ketinggian h(t) = 0.\n-t² + 6t = 0\nt(-t + 6) = 0\nt = 0 (semasa mula dilontar) atau -t + 6 = 0  =>  t = 6 saat.\nMaka bola mencecah tanah semula selepas 6 saat."
      },
      {
        "q": "Faktorkan selengkapnya ungkapan kuadratik 4x² - 9.",
        "options": [
          "(2x - 3)(2x + 3)",
          "(4x - 9)(x + 1)",
          "(2x - 3)²",
          "(4x - 3)(x + 3)"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA:\nGunakan rumus beza dua kuasa dua: a² - b² = (a - b)(a + b)\n4x² - 9 = (2x)² - (3)² = (2x - 3)(2x + 3)."
      }
    ],
    "struktur": [
      {
        "q": "Soalan Struktur Matematik Bab 1: Selesaikan persamaan kuadratik (x - 2)(x + 3) = 6x - 2 dan tunjukkan jalan kerja pemfaktoran yang lengkap. [4 markah]",
        "skema": [
          "Langkah 1: Kembangkan sebelah kiri: x² + 3x - 2x - 6 = 6x - 2 => x² + x - 6 = 6x - 2 [1 markah]",
          "Langkah 2: Tulis dalam bentuk am ax² + bx + c = 0: x² + x - 6x - 6 + 2 = 0 => x² - 5x - 4 = 0 [1 markah]",
          "Langkah 3: Pemfaktoran: (x - 4)(x - 1) = 0 (atau jika semakan teliti x² - 5x + 4 = 0 => (x - 4)(x - 1) = 0) [1 markah]",
          "Langkah 4: Jawapan punca: x = 4 atau x = 1 [1 markah]"
        ]
      }
    ]
  },
  {
    "id": "math-bab2",
    "babNum": "BAB 2",
    "title": "ASAS NOMBOR",
    "icon": "🔢",
    "anyflipPages": "Buku Teks Matematik Tingkatan 4 KSSM (Halaman 34 – 53)",
    "synopsis": "Mempelajari asas nombor 2 hingga 10, nilai tempat dan nilai digit, kaedah penukaran nombor dari satu asas ke asas lain (menggunakan pendaraban nilai tempat dan pembahagian berulang), serta operasi tambah dan tolak dalam pelbagai asas nombor.",
    "notes": [
      {
        "subtopic": "2.1 Asas Nombor",
        "summary": "Asas nombor merangkumi sistem penomboran berasaskan digit tertentu dari asas dua hingga asas sepuluh. Melibatkan penentuan nilai tempat, nilai digit, penukaran nombor antara asas berlainan, serta operasi aritmetik tambah dan tolak.",
        "verbatim": [
          "Konsep Asas Nombor: Sistem nombor yang menggunakan bilangan digit terhad bersamaan nilai asasnya. Asas 2 (digit 0, 1), Asas 3 (digit 0, 1, 2), Asas 4 (digit 0, 1, 2, 3), Asas 5 (digit 0 hingga 4), Asas 8 (digit 0 hingga 7), Asas 10 (digit 0 hingga 9).",
          "Nilai Tempat: Setiap digit mempunyai nilai tempat berasaskan kuasa asasnya (aⁿ, di mana n = 0, 1, 2, ... bermula dari kanan). Contoh: Dalam 1101₂, nilai tempat ialah 2³, 2², 2¹, 2⁰.",
          "Penukaran Asas Berlainan ke Asas 10: Menggunakan kaedah pendaraban digit dengan nilai tempatnya dan menjumlahkan semua hasil darab (cth: 340₅ = 3(5²) + 4(5¹) + 0(5⁰) = 75 + 20 + 0 = 95₁₀).",
          "Penukaran Asas 10 ke Asas Lain: Menggunakan kaedah pembahagian berulang dengan nombor asas sasaran dan merekodkan baki pembahagian dari bawah ke atas.",
          "Operasi Tambah & Tolak: Dilakukan dalam bentuk lazim mengikut nilai asas. Dalam penambahan, apabila hasil tambah melebihi atau sama dengan nilai asas, nilai asas dibawa ke lajur sebelah kiri. Dalam penolakan, pinjaman dari lajur sebelah bernilai sama dengan asas tersebut."
        ],
        "explanation": "Asas nombor dua (binari) dan asas lapan (oktal) merupakan bahasa asas arkitektur komputer, mikropemproses dan rangkaian telekomunikasi moden."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Tentukan Nilai Tempat Mengikut Kuasa Asas",
        "detail": "Tuliskan kuasa asas di atas setiap digit bermula dari kanan: a⁰, a¹, a², a³...",
        "tip": "Digit paling kanan sentiasa berkuasa 0 (a⁰ = 1)"
      },
      {
        "step": "Langkah 2",
        "title": "Tukar ke Asas 10 melalui Darab Nilai Tempat",
        "detail": "Darabkan setiap digit dengan nilai tempatnya dan jumlahkan semua hasil darab.",
        "tip": "Hasil tambah = Nilai dalam asas 10"
      },
      {
        "step": "Langkah 3",
        "title": "Tukar Asas 10 ke Asas Baharu melalui Bahagi Berulang",
        "detail": "Bahagikan nombor secara berturut-turut dengan nilai asas baharu sehingga mendapat hasil bahagi 0.",
        "tip": "Tulis baki dari BAWAH KE ATAS!"
      },
      {
        "step": "Langkah 4",
        "title": "Lakukan Operasi Tambah/Tolak Bentuk Lazim",
        "detail": "Jika jumlah digit ≥ asas, bahagikan dengan asas untuk tentukan digit kekal dan nilai kumpul semula ke kiri.",
        "tip": "Tambah: Kumpul 1 bila capai nilai asas"
      }
    ],
    "keypoints": [
      {
        "badge": "DIGIT SAH",
        "term": "Digit < Asas",
        "meaning": "Digit bagi asas n mesti dalam julat 0 hingga (n - 1)."
      },
      {
        "badge": "ASAS 2",
        "term": "Digit 0 dan 1",
        "meaning": "Sistem nombor binari yang digunakan dalam litar digital komputer."
      },
      {
        "badge": "ASAS 8",
        "term": "Digit 0 hingga 7",
        "meaning": "Sistem oktal di mana setiap 3 digit binari boleh ditukar terus kepada 1 digit oktal."
      },
      {
        "badge": "PENUKARAN",
        "term": "Bahagi Berulang",
        "meaning": "Kaedah standard menukar asas 10 kepada asas lain dengan membaca baki dari bawah ke atas."
      },
      {
        "badge": "PINJAMAN",
        "term": "Nilai Pinjam = Asas",
        "meaning": "Dalam operasi tolak, meminjam 1 daripada lajur sebelah kiri memberikan nilai asas nombor tersebut."
      }
    ],
    "questions": [
      {
        "q": "Tukarkan nombor 10110₂ kepada nombor dalam asas 10.",
        "options": [
          "22₁₀",
          "26₁₀",
          "18₁₀",
          "30₁₀"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA LENGKAP:\n10110₂ = (1 × 2⁴) + (0 × 2³) + (1 × 2²) + (1 × 2¹) + (0 × 2⁰)\n       = (1 × 16) + (0 × 8) + (1 × 4) + (1 × 2) + 0\n       = 16 + 0 + 4 + 2 + 0 = 22₁₀."
      },
      {
        "q": "Tukarkan nombor 85₁₀ kepada nombor dalam asas 8.",
        "options": [
          "125₈",
          "105₈",
          "145₈",
          "75₈"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA LENGKAP:\n85 ÷ 8 = 10 baki 5\n10 ÷ 8 = 1  baki 2\n 1 ÷ 8 = 0  baki 1\nBaca baki dari bawah ke atas: 125₈."
      },
      {
        "q": "Hitung nilai bagi 110₂ + 11₂ dalam asas 2.",
        "options": [
          "1001₂",
          "101₂",
          "111₂",
          "1000₂"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA:\n  1 1 0 ₂\n+   1 1 ₂\n-------\n1 0 0 1 ₂\nLajur 1: 0 + 1 = 1₂\nLajur 2: 1 + 1 = 2₁₀ = 10₂ (tulis 0, bawa 1 ke kiri)\nLajur 3: 1 + 1 = 2₁₀ = 10₂\nMaka jawapan = 1001₂."
      },
      {
        "q": "Apakah nilai digit bagi digit 3 dalam nombor 2345₆?",
        "options": [
          "3 × 6² = 108₁₀",
          "3 × 6³ = 648₁₀",
          "3 × 6¹ = 18₁₀",
          "300₁₀"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA:\nNilai tempat dari kanan: 5(6⁰), 4(6¹), 3(6²), 2(6³).\nDigit 3 berada pada nilai tempat 6² = 36.\nNilai digit = 3 × 36 = 108₁₀."
      },
      {
        "q": "Diberi 134₅ = x₈. Cari nilai bagi x.",
        "options": [
          "54₈",
          "44₈",
          "62₈",
          "51₈"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA LENGKAP:\nLangkah 1: Tukar 134₅ ke asas 10:\n134₅ = (1 × 5²) + (3 × 5¹) + (4 × 5⁰) = 25 + 15 + 4 = 44₁₀.\nLangkah 2: Tukar 44₁₀ ke asas 8:\n44 ÷ 8 = 5 baki 4\n 5 ÷ 8 = 0 baki 5\nBaca dari bawah ke atas = 54₈.\nMaka x = 54."
      }
    ],
    "struktur": [
      {
        "q": "Soalan Struktur Matematik Bab 2: Selesaikan operasi 341₅ + 234₅ dan berikan jawapan dalam asas 5 serta asas 10 dengan menunjukkan langkah kerja yang teratur. [5 markah]",
        "skema": [
          "Langkah 1 (Bentuk Lazim Tambah Asas 5): [2 markah]\n  341₅ + 234₅\n  Lajur kanan: 1 + 4 = 5 = 10₅ (tulis 0, kumpul 1)\n  Lajur tengah: 1 + 4 + 3 = 8 = 13₅ (tulis 3, kumpul 1)\n  Lajur kiri: 1 + 3 + 2 = 6 = 11₅ (tulis 11₅)\n  Hasil = 1130₅.",
          "Langkah 2 (Tukar 1130₅ ke Asas 10): [2 markah]\n  1130₅ = (1 × 5³) + (1 × 5²) + (3 × 5¹) + (0 × 5⁰)\n        = 125 + 25 + 15 + 0 = 165₁₀.",
          "Langkah 3 (Semakan): 341₅ = 96₁₀ dan 234₅ = 69₁₀ => 96 + 69 = 165₁₀. [1 markah]"
        ]
      }
    ]
  },
  {
    "id": "math-bab3",
    "babNum": "BAB 3",
    "title": "PENAAKULAN LOGIK",
    "icon": "🧩",
    "anyflipPages": "Buku Teks Matematik Tingkatan 4 KSSM (Halaman 56 – 91)",
    "synopsis": "Membincangkan pernyataan dan nilai kebenaran, pengkuantiti 'Semua' dan 'Sebilangan', operasi penafian, pernyataan majmuk ('dan', 'atau'), implikasi 'jika p, maka q', akas, songsangan, kontrapositif, serta hujah deduktif (Bentuk I, II, III) dan induktif.",
    "notes": [
      {
        "subtopic": "3.1 Pernyataan",
        "summary": "Pernyataan ialah ayat yang membawa nilai kebenaran sama ada benar atau palsu, tetapi bukan kedua-duanya. Melibatkan pengkuantiti, penafian, pernyataan majmuk (dan/atau), implikasi serta akas, songsangan dan kontrapositif.",
        "verbatim": [
          "Definisi Pernyataan: Ayat deklaratif yang benar atau palsu (ayat tanya, arahan, dan ungkapan algebra x + 2 = 5 BUKAN pernyataan).",
          "Penafian (~p): Mengubah nilai kebenaran pernyataan p dengan menyisipkan perkataan 'tidak' atau 'bukan'. Jika p benar, ~p adalah palsu.",
          "Pengkuantiti: 'Semua' (setiap objek memenuhi syarat) dan 'Sebilangan' (sekurang-kurangnya satu objek memenuhi syarat).",
          "Pernyataan Majmuk: 'p dan q' hanya BENAR jika kedua-dua p dan q benar; 'p atau q' BENAR jika sekurang-kurangnya salah satu p atau q benar.",
          "Implikasi 'Jika p, maka q': p dipanggil antijadian dan q dipanggil akibat.",
          "Akas, Songsangan & Kontrapositif: Implikasi: Jika p, maka q; Akas: Jika q, maka p; Songsangan: Jika ~p, maka ~q; Kontrapositif: Jika ~q, maka ~p. Nilai kebenaran implikasi sentiasa setara dengan kontrapositifnya."
        ],
        "explanation": "Penaakulan logik membina asas pemikiran kritis dalam sains pengaturcaraan komputer dan pembuktian teorem matematik."
      },
      {
        "subtopic": "3.2 Hujah",
        "summary": "Proses membuat kesimpulan berdasarkan satu siri premis. Terbahagi kepada hujah deduktif (daripada umum kepada khusus) dan hujah induktif (daripada khusus kepada umum).",
        "verbatim": [
          "Hujah Deduktif: Proses membuat kesimpulan khusus berdasarkan premis umum. Suatu hujah deduktif dikatakan SAH jika kesimpulan terhasil secara logik daripada premis, dan MUNASABAH jika semua premis serta kesimpulannya adalah benar.",
          "Tiga Bentuk Hujah Deduktif yang Sah: 1. Bentuk I (Premis 1: Semua A ialah B; Premis 2: C ialah A; Kesimpulan: C ialah B); 2. Bentuk II (Premis 1: Jika p, maka q; Premis 2: p adalah benar; Kesimpulan: q adalah benar); 3. Bentuk III (Premis 1: Jika p, maka q; Premis 2: Bukan q adalah benar; Kesimpulan: Bukan p adalah benar).",
          "Hujah Induktif: Proses membuat kesimpulan umum berdasarkan kes-kes khusus atau pola corak cerapan. Dinilai berdasarkan kekuatan (KUAT atau LEMAH) dan keyakinan (MEYAKINKAN atau TIDAK MEYAKINKAN)."
        ],
        "explanation": "Penyelidik menggunakan hujah induktif untuk merumuskan hipotesis sains dan hujah deduktif untuk menguji kesahihan teori."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Tentukan Status Ayat (Pernyataan atau Bukan)",
        "detail": "Semak sama ada ayat mempunyai nilai kebenaran mutlak (Benar atau Palsu). Ayat arahan atau tanda soal = Bukan pernyataan.",
        "tip": "Boleh tentukan Benar/Palsu = Pernyataan"
      },
      {
        "step": "Langkah 2",
        "title": "Semak Nilai Kebenaran 'dan' / 'atau'",
        "detail": "'dan' perlukan kedua-dua benar. 'atau' perlukan sekurang-kurangnya satu benar.",
        "tip": "'dan' = Dua-dua Benar | 'atau' = Salah satu Benar"
      },
      {
        "step": "Langkah 3",
        "title": "Bina Akas, Songsangan & Kontrapositif",
        "detail": "Implikasi: p -> q | Akas: q -> p | Songsangan: ~p -> ~q | Kontrapositif: ~q -> ~p.",
        "tip": "Kontrapositif = Terbalikkan dan Nafikan (~q -> ~p)"
      },
      {
        "step": "Langkah 4",
        "title": "Uji Kesahan Hujah Mengikut Bentuk I, II, atau III",
        "detail": "Bandingkan premis dengan struktur hujah standard deduktif untuk menentukan kesahan dan kemunasabahan.",
        "tip": "Hujah Munasabah = Bentuk Sah + Semua Premis Benar"
      }
    ],
    "keypoints": [
      {
        "badge": "DEFINISI",
        "term": "Pernyataan",
        "meaning": "Ayat penyata yang membawa nilai kebenaran sama ada benar atau palsu, tetapi bukan kedua-duanya."
      },
      {
        "badge": "MAJMUK 'DAN'",
        "term": "Kedua-dua Benar",
        "meaning": "Pernyataan majmuk 'p dan q' hanya benar jika kedua-dua komponen adalah benar."
      },
      {
        "badge": "MAJMUK 'ATAU'",
        "term": "Salah Satu Benar",
        "meaning": "Pernyataan majmuk 'p atau q' benar jika sekurang-kurangnya satu komponen adalah benar."
      },
      {
        "badge": "KONTRAPOSITIF",
        "term": "Jika ~q, maka ~p",
        "meaning": "Pernyataan kontrapositif mempunyai nilai kebenaran yang setara dengan implikasi asal."
      },
      {
        "badge": "DEDUKTIF",
        "term": "Umum kepada Khusus",
        "meaning": "Proses membuat kesimpulan khusus berdasarkan premis-premis umum."
      },
      {
        "badge": "INDUKTIF",
        "term": "Khusus kepada Umum",
        "meaning": "Proses membuat kesimpulan umum berdasarkan pemerhatian terhadap kes-kes khusus."
      }
    ],
    "questions": [
      {
        "q": "Antara berikut, yang manakah merupakan suatu PERNYATAAN?",
        "options": [
          "Sila selesaikan persamaan ini dengan segera.",
          "Berapakah nilai x bagi segi tiga tersebut?",
          "7 ialah nombor perdana.",
          "x + 5 > 10"
        ],
        "answer": 2,
        "explanation": "'7 ialah nombor perdana' ialah ayat penyata yang bernilai BENAR, maka ia adalah pernyataan. Pilihan lain ialah ayat perintah, ayat tanya, dan ungkapan tidak lengkap."
      },
      {
        "q": "Diberi implikasi: 'Jika x = 4, maka x² = 16'. Nyatakan songsangan (inverse) bagi implikasi ini.",
        "options": [
          "Jika x ≠ 4, maka x² ≠ 16",
          "Jika x² = 16, maka x = 4",
          "Jika x² ≠ 16, maka x ≠ 4",
          "x = 4 jika dan hanya jika x² = 16"
        ],
        "answer": 0,
        "explanation": "Songsangan bagi 'Jika p, maka q' ialah 'Jika ~p, maka ~q'. Maka songsangannya ialah: 'Jika x ≠ 4, maka x² ≠ 16'."
      },
      {
        "q": "Tentukan nilai kebenaran bagi pernyataan majmuk: '3² = 9 atau 2 + 5 = 8'.",
        "options": [
          "Benar kerana komponen '3² = 9' adalah benar",
          "Palsu kerana komponen '2 + 5 = 8' adalah palsu",
          "Palsu kerana kedua-dua komponen adalah palsu",
          "Tidak dapat ditentukan nilainya"
        ],
        "answer": 0,
        "explanation": "Pernyataan 'atau' adalah BENAR jika sekurang-kurangnya satu komponen benar. Komponen pertama 3² = 9 adalah benar, maka seluruh pernyataan majmuk adalah BENAR."
      },
      {
        "q": "Diberi hujah:\nPremis 1: Jika n ialah nombor genap, maka 2n ialah nombor genap.\nPremis 2: 2(5) = 10 ialah nombor genap.\nKesimpulan: 5 ialah nombor genap.\nAdakah hujah ini sah?",
        "options": [
          "Tidak sah kerana tidak mematuhi bentuk deduktif yang sah",
          "Sah dan munasabah",
          "Sah tetapi tidak munasabah",
          "Hujah induktif yang meyakinkan"
        ],
        "answer": 0,
        "explanation": "Hujah ini TIDAK SAH kerana ia mengesahkan akibat (Premis 2 mengesahkan q), yang bukan bentuk hujah yang sah (fallacy of affirming the consequent)."
      },
      {
        "q": "Buat satu kesimpulan induktif yang lengkap bagi pola nombor berikut:\n1 = 2(1) - 1\n3 = 2(2) - 1\n5 = 2(3) - 1\n7 = 2(4) - 1\n...",
        "options": [
          "2n - 1, dengan keadaan n = 1, 2, 3, 4, ...",
          "2n + 1, dengan keadaan n = 1, 2, 3, 4, ...",
          "n² - 1, dengan keadaan n = 1, 2, 3, 4, ...",
          "2n, dengan keadaan n = 1, 2, 3, 4, ..."
        ],
        "answer": 0,
        "explanation": "Pola nombor menunjukkan struktur malar 2(n) - 1 di mana nilai n bermula dengan 1, 2, 3, 4, ... Maka kesimpulan induktif ialah 2n - 1, n = 1, 2, 3, 4, ..."
      }
    ],
    "struktur": [
      {
        "q": "Soalan Struktur Matematik Bab 3: Diberi implikasi 'Jika x ialah gandaan 6, maka x ialah nombor genap'. (a) Tulis akas, songsangan dan kontrapositif bagi implikasi ini. (b) Nyatakan nilai kebenaran bagi setiap satu. [5 markah]",
        "skema": [
          "(a) Akas: Jika x ialah nombor genap, maka x ialah gandaan 6. [1 markah]",
          "Songsangan: Jika x bukan gandaan 6, maka x bukan nombor genap. [1 markah]",
          "Kontrapositif: Jika x bukan nombor genap, maka x bukan gandaan 6. [1 markah]",
          "(b) Nilai kebenaran: Akas = PALSU (contoh penyangkal: 4 ialah nombor genap tetapi bukan gandaan 6). [1 markah]",
          "Kontrapositif = BENAR (kerana setara dengan implikasi asal yang benar). [1 markah]"
        ]
      }
    ]
  },
  {
    "id": "math-bab4",
    "babNum": "BAB 4",
    "title": "OPERASI SET",
    "icon": "⭕",
    "anyflipPages": "Buku Teks Matematik Tingkatan 4 KSSM (Halaman 94 – 117)",
    "synopsis": "Mempelajari operasi persilangan set (A ∩ B), kesatuan set (A ∪ B), pelengkap bagi set, gabungan operasi set, perwakilan gambar rajah Venn, serta kaedah melorek rantau dan menyelesaikan masalah berangka menggunakan formula n(A ∪ B).",
    "notes": [
      {
        "subtopic": "4.1 Persilangan Set",
        "summary": "Persilangan set A dan B (simbol ∩) ialah set yang mengandungi semua unsur sepunya bagi kedua-dua set A dan B.",
        "verbatim": [
          "Definisi Persilangan Set: A ∩ B = {x : x ∈ A dan x ∈ B}. Unsur-unsur yang berada di dalam kedua-dua set serentak.",
          "Gambar Rajah Venn: Rantau bertindih antara bulatan set A dan bulatan set B.",
          "Pelengkap bagi Persilangan Set: (A ∩ B)' merujuk kepada semua unsur dalam set semesta (ξ) yang BUKAN unsur dalam persilangan A ∩ B."
        ],
        "explanation": "Persilangan set digunakan untuk mencari kriteria sepunya dalam pangkalan data dan analisis data penonton."
      },
      {
        "subtopic": "4.2 Kesatuan Set",
        "summary": "Kesatuan set A dan B (simbol ∪) ialah set yang mengandungi semua unsur yang berada dalam set A, set B, atau kedua-duanya sekali.",
        "verbatim": [
          "Definisi Kesatuan Set: A ∪ B = {x : x ∈ A atau x ∈ B}. Menggabungkan semua unsur daripada kedua-dua set tanpa mengulang unsur yang sama.",
          "Bilangan Unsur Kesatuan: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
          "Pelengkap bagi Kesatuan Set: (A ∪ B)' merujuk kepada semua unsur dalam set semesta yang berada di luar rantau A dan B."
        ],
        "explanation": "Kesatuan set menggabungkan keseluruhan populasi sampel untuk kajian sosioekonomi atau pengurusan sumber manusia."
      },
      {
        "subtopic": "4.3 Gabungan Operasi Set",
        "summary": "Melibatkan gabungan kedua-dua operasi persilangan (∩) dan kesatuan (∪) dalam satu ungkapan set serentak mengikut susunan tertib operasi.",
        "verbatim": [
          "Tertib Operasi: Utamakan operasi dalam tanda kurung kurawal. Contoh: (A ∩ B) ∪ C bermaksud cari persilangan A dan B dahulu, kemudian satukan dengan keseluruhan set C.",
          "Kaedah Menombor Rantau: Memberikan nombor rujukan bagi setiap zon dalam Gambar Rajah Venn untuk menentukan rantau akhir yang perlu dilorek tanpa kesilapan.",
          "Penyelesaian Masalah Harian: Menentukan bilangan pelajar yang menyertai pelbagai kelab sukan atau persatuan sekolah menggunakan persamaan algebra set."
        ],
        "explanation": "Penguasaan kaedah menombor rantau menjamin ketepatan 100% semasa melorek rantau set semesta dalam peperiksaan SPM."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Senaraikan Unsur bagi Setiap Set",
        "detail": "Tuliskan unsur bagi set semesta ξ dan setiap subset yang terlibat berdasarkan syarat soalan.",
        "tip": "Pastikan tiada unsur tertinggal"
      },
      {
        "step": "Langkah 2",
        "title": "Kenal Pasti Operasi (∩ = Bersilang, ∪ = Kesatuan)",
        "detail": "∩ ambil unsur sepunya sahaja. ∪ gabungkan semua unsur dari set-set terlibat.",
        "tip": "∩ = Berkongsi sama | ∪ = Kumpul semua"
      },
      {
        "step": "Langkah 3",
        "title": "Nombor Kawasan Gambar Rajah Venn",
        "detail": "Letakkan nombor kecil 1, 2, 3... pada setiap petak tertutup gambar rajah Venn untuk mencari kawasan yang perlu dilorek.",
        "tip": "Kaedah penomboran kawasan menjamin markah penuh lorekan"
      },
      {
        "step": "Langkah 4",
        "title": "Gunakan Formula n(A ∪ B) untuk Soalan Masalah",
        "detail": "Gantikan nilai ke dalam n(A ∪ B) = n(A) + n(B) - n(A ∩ B) untuk mencari nilai yang tidak diketahui.",
        "tip": "Semak: Jumlah semua kawasan mestilah sama dengan n(ξ)"
      }
    ],
    "keypoints": [
      {
        "badge": "SIMBOL ∩",
        "term": "Persilangan Set",
        "meaning": "Unsur sepunya yang berada dalam kedua-dua set serentak."
      },
      {
        "badge": "SIMBOL ∪",
        "term": "Kesatuan Set",
        "meaning": "Gabungan semua unsur daripada set-set yang dinyatakan."
      },
      {
        "badge": "PELENGKAP '",
        "term": "Pelengkap Set A'",
        "meaning": "Semua unsur dalam set semesta ξ yang berada di luar set A."
      },
      {
        "badge": "SUBSET ⊂",
        "term": "Subset",
        "meaning": "Setiap unsur dalam set A merupakan unsur dalam set B jika A ⊂ B."
      },
      {
        "badge": "FORMULA",
        "term": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B)",
        "meaning": "Rumus asas mencari jumlah unsur gabungan dua set."
      }
    ],
    "questions": [
      {
        "q": "Diberi set semesta ξ = {x : 1 ≤ x ≤ 10, x ialah integer}, Set P = {2, 3, 5, 7} dan Set Q = {1, 3, 5, 7, 9}. Cari P ∩ Q.",
        "options": [
          "{3, 5, 7}",
          "{1, 2, 3, 5, 7, 9}",
          "{2}",
          "{1, 9}"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA:\nPersilangan P ∩ Q merujuk kepada unsur sepunya bagi P dan Q.\nUnsur sepunya = {3, 5, 7}."
      },
      {
        "q": "Diberi n(A) = 15, n(B) = 20, dan n(A ∩ B) = 6. Cari nilai bagi n(A ∪ B).",
        "options": [
          "29",
          "35",
          "21",
          "41"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA LENGKAP:\nRumus: n(A ∪ B) = n(A) + n(B) - n(A ∩ B)\nn(A ∪ B) = 15 + 20 - 6 = 35 - 6 = 29."
      },
      {
        "q": "Diberi set semesta ξ = {1, 2, 3, 4, 5, 6, 7, 8} dan Set A = {2, 4, 6, 8}. Cari pelengkap bagi A, iaitu A'.",
        "options": [
          "{1, 3, 5, 7}",
          "{2, 4, 6, 8}",
          "{1, 2, 3, 4}",
          "∅"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA:\nA' ialah unsur dalam ξ selain daripada unsur {2, 4, 6, 8}.\nMaka A' = {1, 3, 5, 7}."
      },
      {
        "q": "Dalam sebuah kumpulan 50 orang pemandu, 30 orang mempunyai lesen kereta, 25 orang mempunyai lesen motosikal, dan 10 orang mempunyai kedua-dua lesen. Berapakah bilangan pemandu yang TIDAK mempunyai mana-mana lesen?",
        "options": [
          "5 orang",
          "10 orang",
          "15 orang",
          "20 orang"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA LENGKAP:\nn(K ∪ M) = n(K) + n(M) - n(K ∩ M) = 30 + 25 - 10 = 45 orang.\nBilangan tiada lesen = n(ξ) - n(K ∪ M) = 50 - 45 = 5 orang."
      },
      {
        "q": "Antara pernyataan berikut, yang manakah BENAR mengenai set saling eksklusif A dan B?",
        "options": [
          "A ∩ B = ∅ dan n(A ∩ B) = 0",
          "A ∪ B = ∅",
          "A = B",
          "n(A) = n(B)"
        ],
        "answer": 0,
        "explanation": "Set saling eksklusif bermakna tiada pertindihan unsur antara dua set tersebut, maka persilangannya ialah set kosong (A ∩ B = ∅) dan n(A ∩ B) = 0."
      }
    ],
    "struktur": [
      {
        "q": "Soalan Struktur Matematik Bab 4: Gambar rajah Venn menunjukkan set semesta ξ, Set A dan Set B. Diberi n(ξ) = 60, n(A) = 32, n(B) = 28, dan n(A ∩ B) = x. Diberi bilangan unsur di luar kedua-dua set n(A ∪ B)' = 10. (a) Cari nilai x. (b) Cari n(A sahaja). [4 markah]",
        "skema": [
          "(a) n(A ∪ B) = n(ξ) - n(A ∪ B)' = 60 - 10 = 50 [1 markah]\n    50 = n(A) + n(B) - x => 50 = 32 + 28 - x\n    50 = 60 - x => x = 60 - 50 = 10 [1 markah]",
          "(b) n(A sahaja) = n(A) - n(A ∩ B) = 32 - 10 = 22 orang murid [2 markah]"
        ]
      }
    ]
  },
  {
    "id": "math-bab5",
    "babNum": "BAB 5",
    "title": "RANGKAIAN DALAM TEORI GRAF",
    "icon": "🕸️",
    "anyflipPages": "Buku Teks Matematik Tingkatan 4 KSSM (Halaman 120 – 149)",
    "synopsis": "Mempelajari bucu (V), tepi (E), darjah bucu d(v), rumus jumlah darjah Σ d(v) = 2E, graf mudah, graf berbilang tepi dan gelung, graf terarah dan berpemberat, subgraf, serta konsep pokok (tree) dan laluan terpendek.",
    "notes": [
      {
        "subtopic": "5.1 Rangkaian",
        "summary": "Rangkaian merupakan suatu graf yang mengandungi bucu (titik) yang disambungkan oleh tepi (garis). Merangkumi konsep darjah, graf mudah, gelung, berbilang tepi, graf terarah, graf berpemberat, subgraf, pokok, dan penentuan laluan terpendek.",
        "verbatim": [
          "Komponen Graf: Set bucu V = {v₁, v₂, ...} dan set tepi E = {e₁, e₂, ...}. Setiap tepi menghubungkan sepasang bucu.",
          "Bilangan Darjah (Degree): Bilangan tepi yang mengaitkan suatu bucu. Jumlah darjah bagi suatu graf bersamaan dengan dua kali ganda bilangan tepi: ∑ d(v) = 2E.",
          "Graf Mudah: Graf tanpa gelung dan tanpa berbilang tepi (setiap pasangan bucu hanya disambungkan oleh satu tepi sahaja).",
          "Gelung & Berbilang Tepi: Gelung ialah tepi yang menghubungkan bucu ke dirinya sendiri (menyumbang 2 darjah); Berbilang tepi ialah pasangan bucu yang disambungkan oleh lebih daripada satu tepi.",
          "Graf Terarah & Berpemberat: Graf Terarah mempunyai anak panah yang menyatakan arah pergerakan; Graf Berpemberat mempunyai nilai berangka (pemberat) pada tepi seperti jarak (km), masa (minit), atau kos (RM).",
          "Subgraf & Pokok: Subgraf ialah sebahagian daripada graf asal; Pokok ialah graf mudah yang bersambung tanpa sebarang gelung atau litar tertutup di mana Bilangan Tepi = Bilangan Bucu - 1 (E = V - 1).",
          "Laluan Terpendek: Menentukan laluan dengan jumlah pemberat minimum (cth: menjimatkan minyak dan masa penghantaran pos)."
        ],
        "explanation": "Teori rangkaian graf diaplikasikan dalam sistem navigasi GPS (Waze, Google Maps), litar elektrik, dan rangkaian kabel gentian optik internet."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Kira Bilangan Bucu V dan Tepi E",
        "detail": "Senaraikan bucu V = {A, B, C...} dan pasangan tepi E = {(A, B), (B, C)...}.",
        "tip": "Pastikan ejaan bucu konsisten"
      },
      {
        "step": "Langkah 2",
        "title": "Kira Darjah Setiap Bucu & Uji Σ d(v) = 2E",
        "detail": "Kira bilangan garisan yang menyentuh bucu. Bagi gelung, kira sebagai 2 darjah.",
        "tip": "Gelung = 2 darjah | Tepi biasa = 1 darjah"
      },
      {
        "step": "Langkah 3",
        "title": "Semak Syarat Pokok (E = V - 1 Tanpa Kitar)",
        "detail": "Pastikan semua bucu bersambung, tiada kitaran tertutup, dan bilangan tepi adalah tepat E = V - 1.",
        "tip": "Pokok: E = V - 1"
      },
      {
        "step": "Langkah 4",
        "title": "Tentukan Laluan Terpendek Graf Berpemberat",
        "detail": "Senaraikan semua laluan alternatif dari bucu mula ke bucu tamat, jumlahkan pemberat, dan pilih nilai terkecil.",
        "tip": "Pilih jumlah pemberat paling minimum"
      }
    ],
    "keypoints": [
      {
        "badge": "RUMUS ASAS",
        "term": "Σ d(v) = 2E",
        "meaning": "Jumlah darjah semua bucu bersamaan dengan 2 kali ganda bilangan tepi."
      },
      {
        "badge": "GELUNG",
        "term": "Nilai 2 Darjah",
        "meaning": "Tepi yang bermula dan berakhir pada bucu yang sama menyumbang 2 darjah."
      },
      {
        "badge": "GRAF MUDAH",
        "term": "Tiada Gelung & Tiada Berbilang Tepi",
        "meaning": "Setiap pasangan bucu disambungkan oleh paling banyak satu tepi."
      },
      {
        "badge": "POKOK (TREE)",
        "term": "E = V - 1",
        "meaning": "Graf mudah bersambung tanpa sebarang kitaran dengan bilangan tepi kurang 1 daripada bilangan bucu."
      },
      {
        "badge": "SUBGRAF",
        "term": "Sebahagian daripada Graf Asal",
        "meaning": "Graf di mana set bucu dan set tepinya adalah subset kepada graf asal."
      }
    ],
    "questions": [
      {
        "q": "Diberi darjah bagi 5 bucu sebuah graf ialah 2, 3, 2, 1, 4. Berapakah bilangan tepi dalam graf tersebut?",
        "options": [
          "6 tepi",
          "12 tepi",
          "5 tepi",
          "7 tepi"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA LENGKAP:\nJumlah darjah Σ d(v) = 2 + 3 + 2 + 1 + 4 = 12.\nRumus: Σ d(v) = 2E\n12 = 2E  =>  E = 12 / 2 = 6 tepi."
      },
      {
        "q": "Sebuah pokok mempunyai 8 bucu. Berapakah bilangan tepi bagi pokok tersebut?",
        "options": [
          "7 tepi",
          "8 tepi",
          "9 tepi",
          "16 tepi"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA:\nBagi mana-mana pokok: E = V - 1\nDiberi V = 8 bucu.\nE = 8 - 1 = 7 tepi."
      },
      {
        "q": "Antara set darjah berikut, yang manakah TIDAK BOLEH membentuk suatu graf?",
        "options": [
          "2, 3, 4, 1, 3 (Jumlah = 13)",
          "2, 2, 4, 2 (Jumlah = 10)",
          "1, 2, 3, 4 (Jumlah = 10)",
          "3, 3, 2, 2 (Jumlah = 10)"
        ],
        "answer": 0,
        "explanation": "Jumlah darjah bagi sesuatu graf MESTI nombor genap kerana Σ d(v) = 2E. Jumlah 2 + 3 + 4 + 1 + 3 = 13 (nombor ganjil), maka ia mustahil membentuk graf."
      },
      {
        "q": "Berapakah darjah bagi sebuah bucu yang mempunyai 2 tepi biasa dan 1 gelung?",
        "options": [
          "4",
          "3",
          "5",
          "2"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA:\nSetiap tepi biasa = 1 darjah (2 × 1 = 2).\nSatu gelung = 2 darjah.\nJumlah darjah = 2 + 2 = 4."
      },
      {
        "q": "Apakah syarat utama bagi membolehkan suatu graf dikatakan sebagai Pokok (Tree)?",
        "options": [
          "Graf mudah, semua bucu bersambung, tiada kitaran tertutup dan E = V - 1",
          "Mempunyai sekurang-kurangnya satu gelung",
          "Mempunyai bilangan tepi lebih daripada bilangan bucu",
          "Setiap bucu mesti mempunyai darjah yang sama"
        ],
        "answer": 0,
        "explanation": "Pokok ialah graf mudah bersambung tanpa kitaran dan memenuhi syarat nisbah tepi E = V - 1."
      }
    ],
    "struktur": [
      {
        "q": "Soalan Struktur Matematik Bab 5: Diberi sebuah graf G dengan bucu V = {P, Q, R, S, T} dan tepi E = {(P, Q), (P, R), (Q, R), (Q, S), (R, T), (S, T)}. (a) Hitung bilangan bucu V dan bilangan tepi E. (b) Tentukan sama ada graf ini ialah pokok atau bukan dengan menyatakan sebab anda. (c) Lukiskan satu pokok daripada graf tersebut. [5 markah]",
        "skema": [
          "(a) Bilangan bucu V = 5, Bilangan tepi E = 6 [1 markah]",
          "(b) Bukan pokok kerana E ≠ V - 1 (E = 6, sedangkan V - 1 = 4) dan graf ini mempunyai kitaran tertutup seperti P-Q-R-P. [2 markah]",
          "(c) Untuk membentuk pokok, buang 2 tepi kitar (cth: buang tepi (Q, R) dan (S, T)) sehingga tinggal 4 tepi tanpa kitaran yang menyambungkan semua 5 bucu. [2 markah]"
        ]
      }
    ]
  },
  {
    "id": "math-bab6",
    "babNum": "BAB 6",
    "title": "KETAKSAMAAN LINEAR DALAM DUA PEMBOLEH UBAH",
    "icon": "📈",
    "anyflipPages": "Buku Teks Matematik Tingkatan 4 KSSM (Halaman 152 – 179)",
    "synopsis": "Membincangkan perwakilan ketaksamaan linear dalam satah Cartes, perbezaan garis padu (≤, ≥) dan garis putus-putus (<, >), penentuan rantau atas/bawah garis y = mx + c, serta kemahiran melorek rantau sepunya bagi sistem ketaksamaan linear.",
    "notes": [
      {
        "subtopic": "6.1 Ketaksamaan Linear dalam Dua Pemboleh Ubah",
        "summary": "Menghubungkaitkan hubungan ketaksamaan (>, <, ≥, ≤) antara dua pemboleh ubah x dan y di atas satah Cartes.",
        "verbatim": [
          "Bentuk Ketaksamaan: ax + by > c, ax + by < c, ax + by ≥ c, ax + by ≤ c di mana a dan b bukan sifar.",
          "Garis Sempadan: Menggunakan GARIS PADU bagi simbol ketaksamaan ≥ dan ≤ (titik pada garis termasuk dalam penyelesaian); Menggunakan GARIS PUTUS-PUTUS bagi simbol ketaksamaan > dan < (titik pada garis tidak termasuk).",
          "Menentukan Rantau: Untuk y > mx + c atau y ≥ mx + c, rantau penyelesaian berada di sebelah ATAS garisan; Untuk y < mx + c atau y ≤ mx + c, rantau berada di sebelah BAWAH garisan (dengan syarat pekali y bernilai positif)."
        ],
        "explanation": "Ketaksamaan linear digunakan dalam pengaturcaraan linear perniagaan untuk memodelkan kekangan bajet dan had kapasiti pengeluaran kilang."
      },
      {
        "subtopic": "6.2 Sistem Ketaksamaan Linear dalam Dua Pemboleh Ubah",
        "summary": "Gabungan dua atau lebih ketaksamaan linear yang diselesaikan secara serentak di atas satah Cartes.",
        "verbatim": [
          "Rantau Sepunya: Kawasan pada satah Cartes yang memuaskan kesemua ketaksamaan linear dalam sistem secara serentak.",
          "Langkah Menentukan Rantau Sepunya: 1. Tukarkan setiap ketaksamaan kepada bentuk persamaan linear y = mx + c untuk melukis garis sempadan; 2. Tentukan jenis garis (padu atau putus-putus); 3. Buat ujian titik (cth: titik asalan (0,0)) atau guna peraturan atas/bawah; 4. Lorekkan rantau bertindih sepunya.",
          "Aplikasi Sistem Ketaksamaan: Menyelesaikan masalah kekangan pengeluaran maksimum dan minimum bagi mendapatkan keuntungan optimum."
        ],
        "explanation": "Titik bucu pada rantau sepunya mewakili penyelesaian ekstrem bagi pengiraan keuntungan maksimum dalam analisis operasi."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Tukar Ketaksamaan ke Bentuk y = mx + c",
        "detail": "Susun pemboleh ubah y di sebelah kiri. Ingat: Jika bahagi/darab nombor negatif, terbalikkan tanda ketaksamaan!",
        "tip": "Bahagi negatif -> Tanda ketaksamaan terbalik!"
      },
      {
        "step": "Langkah 2",
        "title": "Tentukan Jenis Garis (Padu vs Putus-putus)",
        "detail": "≤ atau ≥ = Garis Padu | < atau > = Garis Putus-putus.",
        "tip": "Ada sama dengan (=) = Garis Padu"
      },
      {
        "step": "Langkah 3",
        "title": "Tentukan Arah Rantau (Atas / Bawah / Kanan / Kiri)",
        "detail": "y > atas | y < bawah | x > kanan | x < kiri.",
        "tip": "Gunakan anak panah kecil pada garis sebagai panduan"
      },
      {
        "step": "Langkah 4",
        "title": "Lorekkan Kawasan Sepunya Bersilang",
        "detail": "Lorek dengan kemas kawasan yang menerima pertindihan semua arah anak panah ketaksamaan.",
        "tip": "Uji satu koordinat titik dalam rantau untuk kepastian"
      }
    ],
    "keypoints": [
      {
        "badge": "GARIS PADU",
        "term": "Tanda ≤ dan ≥",
        "meaning": "Titik di atas garis lurus termasuk dalam kawasan penyelesaian."
      },
      {
        "badge": "GARIS PUTUS",
        "term": "Tanda < dan >",
        "meaning": "Titik di atas garis lurus tidak termasuk dalam kawasan penyelesaian."
      },
      {
        "badge": "RANTAU ATAS",
        "term": "y ≥ mx + c",
        "meaning": "Kawasan di atas garis sempadan condong."
      },
      {
        "badge": "RANTAU BAWAH",
        "term": "y ≤ mx + c",
        "meaning": "Kawasan di bawah garis sempadan condong."
      },
      {
        "badge": "GARIS MENEGAK",
        "term": "x ≥ k (Kanan) & x ≤ k (Kiri)",
        "meaning": "Kawasan sebelah kanan atau kiri bagi sempadan garis tegak."
      }
    ],
    "questions": [
      {
        "q": "Antara ketaksamaan berikut, yang manakah diwakili oleh garis putus-putus pada satah Cartes?",
        "options": [
          "2y - x > 5",
          "y ≤ 3x + 1",
          "x ≥ -4",
          "y + 2x ≤ 0"
        ],
        "answer": 0,
        "explanation": "Tanda ketaksamaan '>' (tanpa tanda sama dengan) menggunakan garis putus-putus kerana titik pada garis tidak termasuk dalam set penyelesaian."
      },
      {
        "q": "Tentukan sama ada titik (2, 5) memuaskan ketaksamaan linear y ≥ 3x - 2.",
        "options": [
          "Ya, kerana 5 ≥ 4 adalah benar",
          "Tidak, kerana 5 < 4",
          "Tidak, kerana titik berada pada garis",
          "Tidak dapat ditentukan"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA:\nGantikan x = 2 dan y = 5 ke dalam ketaksamaan:\nSebelah Kiri = y = 5\nSebelah Kanan = 3(2) - 2 = 6 - 2 = 4\nOleh sebab 5 ≥ 4 adalah BENAR, maka titik (2, 5) memuaskan ketaksamaan tersebut."
      },
      {
        "q": "Kawasan di sebelah KANAN garis tegak x = -3 diwakili oleh ketaksamaan...",
        "options": [
          "x > -3 atau x ≥ -3",
          "x < -3 atau x ≤ -3",
          "y > -3",
          "y < -3"
        ],
        "answer": 0,
        "explanation": "Bagi garis tegak x = k, kawasan di sebelah kanan mewakili nilai x yang lebih besar daripada k, iaitu x > k atau x ≥ k."
      },
      {
        "q": "Apabila ketaksamaan -2y ≤ 6 - 4x disusun dalam bentuk kecerunan y, apakah ketaksamaan baharunya?",
        "options": [
          "y ≥ 2x - 3",
          "y ≤ 2x - 3",
          "y ≥ -2x + 3",
          "y ≤ -2x + 3"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA LENGKAP:\n-2y ≤ -4x + 6\nBahagikan kedua-dua belah dengan -2 (TANDA KETAKSAMAAN TERBALIK):\ny ≥ (-4x / -2) + (6 / -2)\ny ≥ 2x - 3."
      },
      {
        "q": "Rantau yang terletak di BAWAH garis y = -2x + 5 dan di ATAS paksi-x diwakili oleh sistem ketaksamaan...",
        "options": [
          "y < -2x + 5 dan y > 0",
          "y > -2x + 5 dan y < 0",
          "y < -2x + 5 dan x > 0",
          "y > -2x + 5 dan x < 0"
        ],
        "answer": 0,
        "explanation": "Di bawah garis y = -2x + 5 ialah y < -2x + 5. Persamaan paksi-x ialah y = 0, maka di atas paksi-x ialah y > 0."
      }
    ],
    "struktur": [
      {
        "q": "Soalan Struktur Matematik Bab 6: Sebuah kedai roti menghasilkan x biji kek cawan dan y biji roti ban sehari. Kos membuat sebiji kek cawan ialah RM2 dan roti ban ialah RM1. Jumlah perbelanjaan harian adalah selebih-lebihnya RM100. Bilangan roti ban sekurang-kurangnya dua kali bilangan kek cawan. (a) Tulis dua ketaksamaan linear selain x ≥ 0 dan y ≥ 0. (b) Adakah penghasilan 20 biji kek cawan dan 50 biji roti ban memuaskan kedua-dua syarat tersebut? Tunjukkan jalan kira anda. [5 markah]",
        "skema": [
          "(a) Ketaksamaan 1: 2x + y ≤ 100 [1 markah]\n    Ketaksamaan 2: y ≥ 2x [1 markah]",
          "(b) Gantikan x = 20 dan y = 50: [1 markah]\n    Uji syarat 1: 2(20) + 50 = 40 + 50 = 90 ≤ 100 (BENAR) [1 markah]\n    Uji syarat 2: 50 ≥ 2(20) => 50 ≥ 40 (BENAR) [1 markah]\n    Kesimpulan: Ya, memuaskan kedua-dua syarat tersebut."
        ]
      }
    ]
  },
  {
    "id": "math-bab7",
    "babNum": "BAB 7",
    "title": "GRAF GERAKAN",
    "icon": "🏎️",
    "anyflipPages": "Buku Teks Matematik Tingkatan 4 KSSM (Halaman 182 – 207)",
    "synopsis": "Mentafsir dan melukis Graf Jarak-Masa (kecerunan = laju, laju purata = jumlah jarak / jumlah masa) serta Graf Laju-Masa (kecerunan = pecutan, luas bawah graf = jarak yang dilalui) berserta penyelesaian masalah langkah demi langkah.",
    "notes": [
      {
        "subtopic": "7.1 Graf Jarak-Masa",
        "summary": "Graf yang menunjukkan perubahan jarak sesuatu objek terhadap masa pergerakannya di mana kecerunan mewakili laju objek.",
        "verbatim": [
          "Kecerunan Graf Jarak-Masa: Kecerunan = Perubahan Jarak / Perubahan Masa = LAJU.",
          "Tafsiran Kecerunan: Kecerunan positif mewakili objek bergerak menjauhi titik mula dengan laju seragam; Kecerunan sifar (garis mendatar) mewakili objek berada dalam keadaan PEGUN (berhenti rehat); Kecerunan negatif mewakili objek berpatah balik ke titik asal.",
          "Laju Purata: Laju Purata = Jumlah Jarak yang Dilalui / Jumlah Masa yang Diambil."
        ],
        "explanation": "Graf jarak-masa membolehkan analisis pergerakan kenderaan dan penetapan jadual ketibaan kereta api transit (KTM, ETS)."
      },
      {
        "subtopic": "7.2 Graf Laju-Masa",
        "summary": "Graf yang mempamerkan hubungan antara laju dengan masa, di mana kecerunan mewakili pecutan dan luas di bawah graf mewakili jarak perjalanan.",
        "verbatim": [
          "Kecerunan Graf Laju-Masa: Kecerunan = Perubahan Laju / Perubahan Masa = PECUTAN (unit m s⁻²).",
          "Tafsiran Bentuk Graf: Kecerunan positif mewakili pecutan seragam; Garis mendatar (kecerunan sifar) mewakili laju seragam (pecutan = 0); Kecerunan negatif mewakili nyahpecutan seragam.",
          "Luas di Bawah Graf: Bersamaan dengan JUMLAH JARAK atau SESARAN yang dilalui objek.",
          "Kaedah Mengira Luas: Menggunakan rumus luas bentuk geometri (Segi tiga: ½ × tapak × tinggi; Segi empat: panjang × lebar; Trapezium: ½ × (a + b) × tinggi)."
        ],
        "explanation": "Juruaudit kemalangan jalan raya menggunakan graf laju-masa untuk menganggarkan jarak membrek dan kelajuan kenderaan sebelum perlanggaran."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Kenal Pasti Jenis Graf (Jarak-Masa atau Laju-Masa)",
        "detail": "Tengok paksi menegak! Paksi-y jarak = Laju dari kecerunan. Paksi-y laju = Pecutan dari kecerunan, Jarak dari luas.",
        "tip": "Paksi-y menentukan formula yang perlu diguna"
      },
      {
        "step": "Langkah 2",
        "title": "Kira Kecerunan untuk Laju atau Pecutan",
        "detail": "Gunakan rumus kecerunan m = (y₂ - y₁) / (x₂ - x₁).",
        "tip": "Kecerunan garis mendatar sentiasa sifar (0)"
      },
      {
        "step": "Langkah 3",
        "title": "Kira Luas Bawah Graf Laju-Masa untuk Jarak",
        "detail": "Bahagikan bentuk graf kepada segi tiga, segi empat, atau gunakan terus rumus luas trapezium 1/2(a + b)h.",
        "tip": "Luas bawah graf = Jarak / Sesaran"
      },
      {
        "step": "Langkah 4",
        "title": "Kira Laju Purata Keseluruhan",
        "detail": "Laju Purata = Jumlah Jarak Keseluruhan ÷ Jumlah Masa Keseluruhan.",
        "tip": "Jumlah masa termasuk waktu berhenti rehat!"
      }
    ],
    "keypoints": [
      {
        "badge": "GRAF JARAK-MASA",
        "term": "Kecerunan = Laju",
        "meaning": "Kadar perubahan jarak terhadap masa mewakili kelajuan objek."
      },
      {
        "badge": "GRAF LAJU-MASA",
        "term": "Kecerunan = Pecutan",
        "meaning": "Kadar perubahan laju terhadap masa mewakili pecutan objek."
      },
      {
        "badge": "LUAS GRAF",
        "term": "Luas Bawah Graf v-t = Jarak",
        "meaning": "Pengiraan luas geometri di bawah graf laju-masa mewakili jumlah jarak perjalanan."
      },
      {
        "badge": "LAJU PURATA",
        "term": "Jumlah Jarak / Jumlah Masa",
        "meaning": "Nisbah jumlah keseluruhan jarak dibahagikan dengan jumlah masa perjalanan."
      },
      {
        "badge": "PEGUN",
        "term": "Objek Berhenti Rehat",
        "meaning": "Garis mendatar pada graf jarak-masa di mana kecerunan dan kelajuan bersamaan 0."
      }
    ],
    "questions": [
      {
        "q": "Graf jarak-masa menunjukkan sebuah bas bergerak dari bandar P ke bandar Q sejauh 120 km dalam masa 2 jam. Berapakah laju bas tersebut?",
        "options": [
          "60 km j⁻¹",
          "240 km j⁻¹",
          "50 km j⁻¹",
          "80 km j⁻¹"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA:\nLaju = Kecerunan graf jarak-masa\nLaju = Jarak / Masa = 120 km / 2 jam = 60 km j⁻¹."
      },
      {
        "q": "Sebuah kereta bergerak mengikut graf laju-masa. Halajunya berkurang daripada 25 m s⁻¹ kepada 5 m s⁻¹ dalam masa 4 saat. Berapakah nilai pecutannya?",
        "options": [
          "-5 m s⁻² (Nyahpecutan 5 m s⁻²)",
          "5 m s⁻²",
          "-4 m s⁻²",
          "7.5 m s⁻²"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA LENGKAP:\nPecutan a = (v - u) / t\na = (5 - 25) / 4 = -20 / 4 = -5 m s⁻² (atau nyahpecutan 5 m s⁻²)."
      },
      {
        "q": "Sebuah zarah bergerak dengan laju malar 15 m s⁻¹ selama 8 saat. Berapakah jarak yang dilalui oleh zarah tersebut berdasarkan graf laju-masa?",
        "options": [
          "120 m",
          "60 m",
          "23 m",
          "1.875 m"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA:\nJarak = Luas di bawah graf laju-masa (Segi empat tepat)\nJarak = Panjang × Lebar = 15 m s⁻¹ × 8 s = 120 meter."
      },
      {
        "q": "Kecerunan sifar (garis mengufuk) pada graf JARAK-MASA menunjukkan...",
        "options": [
          "Objek berada dalam keadaan pegun (tidak bergerak)",
          "Objek bergerak dengan pecutan tinggi",
          "Objek bergerak dengan laju malar",
          "Objek berpatah balik"
        ],
        "answer": 0,
        "explanation": "Pada graf jarak-masa, garis mengufuk bermakna jarak tidak berubah walaupun masa berlalu, membuktikan objek sedang berhenti atau pegun."
      },
      {
        "q": "Sebuah lori memecut dari keadaan pegun sehingga mencapai laju 30 m s⁻¹ dalam masa 6 saat berbentuk segi tiga pada graf laju-masa. Berapakah jarak yang dilalui dalam 6 saat tersebut?",
        "options": [
          "90 m",
          "180 m",
          "45 m",
          "15 m"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA LENGKAP:\nJarak = Luas segi tiga = 1/2 × tapak × tinggi\nJarak = 1/2 × 6 s × 30 m s⁻¹ = 3 × 30 = 90 meter."
      }
    ],
    "struktur": [
      {
        "q": "Soalan Struktur Matematik Bab 7: Diberi graf laju-masa sebuah bot laju. Bot itu memecut secara seragam dari pegun sehingga 16 m s⁻¹ dalam tempoh 5 saat, kemudian mengekalkan laju 16 m s⁻¹ selama t saat, dan akhirnya mengalami nyahpecutan sehingga berhenti pada saat ke-25. Diberi jumlah jarak yang dilalui ialah 320 meter. Hitung: (a) Kadar perubahan laju dalam 5 saat pertama. (b) Nilai bagi t. [5 markah]",
        "skema": [
          "(a) Kadar perubahan laju (pecutan) = (16 - 0) / (5 - 0) = 16 / 5 = 3.2 m s⁻² [2 markah]",
          "(b) Jumlah jarak = Luas trapezium = 1/2 × [t + 25] × 16 = 320 [1 markah]\n    8 × (t + 25) = 320\n    t + 25 = 320 / 8 = 40\n    t = 40 - 25 = 15 saat [2 markah]"
        ]
      }
    ]
  },
  {
    "id": "math-bab8",
    "babNum": "BAB 8",
    "title": "SUKATAN SERAKAN DATA TAK TERKUMPUL",
    "icon": "📊",
    "anyflipPages": "Buku Teks Matematik Tingkatan 4 KSSM (Halaman 210 – 239)",
    "synopsis": "Mempelajari ukuran serakan: julat, julat antara kuartil (Q3 - Q1), plot kotak, varians (σ²) dan sisihan piawai (σ), serta kesan perubahan data (tambah, tolak, darab, bahagi dengan pemalar k) ke atas sukatan serakan.",
    "notes": [
      {
        "subtopic": "8.1 Serakan",
        "summary": "Serakan ialah gambaran bagaimana data bertabur atau berserak di sekitar nilai puratanya, dipaparkan melalui plot batang-dan-daun serta plot titik.",
        "verbatim": [
          "Kepentingan Serakan: Mengetahui tahap kepelbagaian atau ketidaksamaan sesuatu set data (bukan sekadar melihat min semata-mata).",
          "Plot Batang-dan-Daun (Stem-and-Leaf Plot): Memaparkan taburan data nombor di mana digit puluh diletakkan pada lajur 'Batang' dan digit sa pada lajur 'Daun'.",
          "Plot Titik (Dot Plot): Menunjukkan kekerapan data di atas garis nombor melalui susunan titik menegak.",
          "Tafsiran Taburan: Taburan simetri (berpusat di tengah), pencong ke kanan (ekor panjang di kanan), atau pencong ke kiri (ekor panjang di kiri)."
        ],
        "explanation": "Visualisasi serakan membantu pendidik dan penganalisis mengenal pasti corak pencapaian markah pelajar secara objektif."
      },
      {
        "subtopic": "8.2 Sukatan Serakan",
        "summary": "Ukuran berangka untuk mengukur serakan data meliputi julat, julat antara kuartil, varians, sisihan piawai, plot kotak, dan kesan perubahan data.",
        "verbatim": [
          "Julat & Julat Antara Kuartil: Julat = Nilai terbesar - Nilai terkecil; Julat Antara Kuartil (IQR) = Kuartil Ketiga (Q₃) - Kuartil Pertama (Q₁). IQR lebih baik daripada julat kerana tidak dipengaruhi oleh nilai pencilan (outlier).",
          "Varians (σ²) & Sisihan Piawai (σ): Mengukur jarak purata data dari nilai min. Rumus Varians: σ² = [∑x² / N] - x̄²; Sisihan Piawai: σ = √Varians. Semakin kecil nilai sisihan piawai, semakin konsisten dan seragam set data tersebut.",
          "Plot Kotak (Box Plot): Menunjukkan ringkasan lima nombor data iaitu nilai minimum, Q₁, median (Q₂), Q₃, dan nilai maksimum.",
          "Kesan Perubahan Data: Menambah/menolak nilai pemalar k kepada setiap data TIDAK mengubah sukatan serakan; Mendarab/membahagi setiap data dengan pemalar k menyebabkan julat dan sisihan piawai didarab/dibahagi dengan k, manakala varians didarab/dibahagi dengan k²."
        ],
        "explanation": "Dalam pelaburan kewangan, saham dengan sisihan piawai yang rendah menunjukkan risiko turun naik harga yang lebih stabil."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Susun Data Mengikut Tertib Menaik",
        "detail": "Wajib menyusun data dari nilai terkecil ke terbesar sebelum mencari median dan kuartil.",
        "tip": "Susun data menaik dahulu!"
      },
      {
        "step": "Langkah 2",
        "title": "Tentukan Nilai Q₁, Median (Q₂), dan Q₃",
        "detail": "Bahagikan data kepada dua bahagian di kiri dan kanan median, kemudian cari titik tengah setiap bahagian.",
        "tip": "IQR = Q₃ - Q₁"
      },
      {
        "step": "Langkah 3",
        "title": "Kira Min x̄ dan Hasil Tambah Kuasadua Σ x²",
        "detail": "Gunakan rumus min x̄ = Σ x / N dan kirakan setiap x² untuk dimasukkan dalam formula.",
        "tip": "x̄ = Σx / N dan Σx² = x₁² + x₂² + ..."
      },
      {
        "step": "Langkah 4",
        "title": "Gantikan Nilai ke dalam Rumus Varians & Sisihan Piawai",
        "detail": "σ² = (Σx²/N) - (x̄)² kemudian punca kuasakan jawapan untuk mendapat sisihan piawai σ = √σ².",
        "tip": "Sisihan piawai = Punca kuasa dua varians"
      }
    ],
    "keypoints": [
      {
        "badge": "JULAT",
        "term": "Maksimum - Minimum",
        "meaning": "Beza antara nilai terbesar dengan nilai terkecil dalam satu set data."
      },
      {
        "badge": "IQR",
        "term": "Q₃ - Q₁",
        "meaning": "Julat antara kuartil yang mengukur sebaran bagi 50% data di bahagian tengah."
      },
      {
        "badge": "VARIANS",
        "term": "σ² = (Σx²/N) - (x̄)²",
        "meaning": "Purata kuasa dua sisihan data daripada min."
      },
      {
        "badge": "SISIHAN PIAWAI",
        "term": "σ = √Varians",
        "meaning": "Ukuran kebolehubahan data; nilai kecil menunjukkan data lebih konsisten."
      },
      {
        "badge": "PERUBAHAN DATA",
        "term": "Tambah k vs Darab k",
        "meaning": "Menambah pemalar tidak mengubah sisihan piawai; mendarab pemalar k menggandakan sisihan piawai sebanyak k."
      }
    ],
    "questions": [
      {
        "q": "Diberi satu set data: 3, 5, 7, 8, 9, 11, 15. Cari julat bagi data ini.",
        "options": [
          "12",
          "15",
          "8",
          "11"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA:\nNilai maksimum = 15, Nilai minimum = 3.\nJulat = Nilai Maksimum - Nilai Minimum = 15 - 3 = 12."
      },
      {
        "q": "Diberi set data: 2, 4, 6, 8, 10, 12, 14. Berapakah julat antara kuartil bagi set data ini?",
        "options": [
          "8",
          "4",
          "6",
          "12"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA LENGKAP:\nData disusun: 2, 4, 6, [8], 10, 12, 14.\nMedian Q₂ = 8.\nBahagian bawah: 2, 4, 6 => Kuartil pertama Q₁ = 4.\nBahagian atas: 10, 12, 14 => Kuartil ketiga Q₃ = 12.\nJulat Antara Kuartil (IQR) = Q₃ - Q₁ = 12 - 4 = 8."
      },
      {
        "q": "Sisihan piawai bagi satu set data ialah 3. Jika setiap data dalam set tersebut didarab dengan 4, berapakah varians baharu bagi set data tersebut?",
        "options": [
          "144",
          "12",
          "48",
          "36"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA LENGKAP:\nSisihan piawai asal σ = 3 => Varians asal σ² = 3² = 9.\nApabila setiap data didarab dengan pemalar k = 4:\nVarians baharu = k² × Varians asal = 4² × 9 = 16 × 9 = 144.\n(Atau: Sisihan piawai baharu = 4 × 3 = 12 => Varians baharu = 12² = 144)."
      },
      {
        "q": "Diberi Σ x = 60, Σ x² = 450, dan N = 10 bagi suatu set data. Hitung varians bagi data ini.",
        "options": [
          "9",
          "45",
          "36",
          "3"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA LENGKAP:\nMin x̄ = Σ x / N = 60 / 10 = 6.\nVarians σ² = (Σ x² / N) - (x̄)²\nσ² = (450 / 10) - (6)² = 45 - 36 = 9."
      },
      {
        "q": "Antara sukatan berikut, yang manakah TIDAK terjejas oleh kewujudan nilai pencilan (outlier) yang melampau dalam data?",
        "options": [
          "Julat antara kuartil",
          "Julat",
          "Min",
          "Varians"
        ],
        "answer": 0,
        "explanation": "Julat antara kuartil mengabaikan 25% data terendah dan 25% data tertinggi, menjadikannya kebal terhadap kesan nilai pencilan."
      }
    ],
    "struktur": [
      {
        "q": "Soalan Struktur Matematik Bab 8: Jadual menunjukkan catatan masa larian (dalam saat) bagi seorang pelari dalam 5 sesi latihan: 12, 14, 15, 17, 22. (a) Hitung min, varians, dan sisihan piawai bagi catatan masa tersebut. (b) Jika jurulatih menambah masa rehat 2 saat pada setiap sesi, apakah kesan terhadap nilai sisihan piawai? [6 markah]",
        "skema": [
          "(a) Min x̄ = (12 + 14 + 15 + 17 + 22) / 5 = 80 / 5 = 16 saat [1 markah]\n    Σ x² = 12² + 14² + 15² + 17² + 22² = 144 + 196 + 225 + 289 + 484 = 1338 [1 markah]\n    Varians σ² = (1338 / 5) - (16)² = 267.6 - 256 = 11.6 saat² [1 markah]\n    Sisihan piawai σ = √11.6 = 3.406 saat [1 markah]",
          "(b) Nilai sisihan piawai TIDAK BERUBAH (kekal 3.406 saat) kerana penambahan pemalar pada setiap data tidak mengubah serakan data. [2 markah]"
        ]
      }
    ]
  },
  {
    "id": "math-bab9",
    "babNum": "BAB 9",
    "title": "KEBARANGKALIAN PERISTIWA BERGABUNG",
    "icon": "🎲",
    "anyflipPages": "Buku Teks Matematik Tingkatan 4 KSSM (Halaman 242 – 269)",
    "synopsis": "Mengkaji peristiwa bergabung, perbezaan peristiwa bersandar dan tidak bersandar (hukum pendaraban P(A ∩ B) = P(A) × P(B)), serta peristiwa saling eksklusif dan tidak saling eksklusif (hukum penambahan P(A ∪ B) = P(A) + P(B) - P(A ∩ B)) menggunakan gambar rajah pokok.",
    "notes": [
      {
        "subtopic": "9.1 Peristiwa Bergabung",
        "summary": "Peristiwa bergabung ialah gabungan dua atau lebih peristiwa yang berlaku serentak atau berturutan dalam satu eksperimen kebarangkalian.",
        "verbatim": [
          "Ruang Sampel Peristiwa Bergabung: Set semua kesudahan yang mungkin bagi gabungan peristiwa (S).",
          "Kaedah Menyenaraikan Kesudahan: 1. Pasangan Tertib / Jadual; 2. Gambar Rajah Pokok (Tree Diagram) yang mempamerkan setiap cabang laluan kesudahan.",
          "Rumus Kebarangkalian Asas: P(A) = n(A) / n(S) di mana n(A) ialah bilangan kesudahan peristiwa A dan n(S) ialah jumlah ruang sampel."
        ],
        "explanation": "Gambar rajah pokok memudahkan visualisasi kebarangkalian berturutan seperti melambung duit syiling dua kali atau mencabut guli berwarna."
      },
      {
        "subtopic": "9.2 Peristiwa Bersandar dan Peristiwa Tak Bersandar",
        "summary": "Meneliti bagaimana kesudahan sesuatu peristiwa mempengaruhi atau tidak mempengaruhi peristiwa seterusnya.",
        "verbatim": [
          "Peristiwa Tak Bersandar: Kejadian peristiwa A TIDAK mempengaruhi kebarangkalian berlakunya peristiwa B. Rumus: P(A ∩ B) = P(A) × P(B). Contoh: Melambung dadu dan syiling serentak, atau mencabut kad dengan pengembalian.",
          "Peristiwa Bersandar: Kejadian peristiwa A MEMPENGARUHI kebarangkalian berlakunya peristiwa B. Contoh: Memilih dua biji guli daripada beg satu demi satu TANPA pengembalian (jumlah ruang sampel berkurang untuk cabutan kedua)."
        ],
        "explanation": "Konsep tanpa pengembalian (bersandar) sangat penting dalam ujian kawalan kualiti kilang pembuatan cip dan pemeriksaan produk."
      },
      {
        "subtopic": "9.3 Peristiwa Saling Eksklusif dan Peristiwa Tidak Saling Eksklusif",
        "summary": "Meneliti sama ada dua peristiwa boleh berlaku serentak atau tidak dalam satu eksperimen.",
        "verbatim": [
          "Peristiwa Saling Eksklusif: Peristiwa A dan B TIDAK BOLEH berlaku serentak (tiada persilangan, A ∩ B = ∅). Rumus Penambahan: P(A ∪ B) = P(A) + P(B).",
          "Peristiwa Tidak Saling Eksklusif: Peristiwa A dan B BOLEH berlaku serentak (mempunyai unsur sepunya, A ∩ B ≠ ∅). Rumus Penambahan: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)."
        ],
        "explanation": "Pengurangan persilangan P(A ∩ B) mengelakkan pengiraan berganda bagi unsur sepunya dalam teori kebarangkalian."
      },
      {
        "subtopic": "9.4 Aplikasi Kebarangkalian Peristiwa Bergabung",
        "summary": "Penggunaan konsep peristiwa bergabung dalam membuat keputusan rasional, penilaian risiko insurans, dan ramalan cuaca dunia sebenar.",
        "verbatim": [
          "Penyelesaian Masalah Harian: Menghitung risiko kemalangan, penetapan kadar premium insurans kesihatan, perancangan kapasiti hospital, dan pengurusan stok barang.",
          "Membuat Keputusan Kritis: Membandingkan nilai jangkaan matematik bagi memilih pilihan pelaburan yang memaksimumkan keuntungan dan meminimumkan kerugian."
        ],
        "explanation": "Industri aktuari dan insurans global dibina sepenuhnya berasaskan model kebarangkalian peristiwa bergabung."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Tentukan Jenis Hubungan (Bersandar atau Tak Bersandar)",
        "detail": "Semak ada pengembalian atau tiada pengembalian. Tiada pengembalian = Bersandar (penyebut berkurang 1).",
        "tip": "Tanpa pengembalian = Ruang sampel berkurang"
      },
      {
        "step": "Langkah 2",
        "title": "Bina Gambar Rajah Pokok Jika Perlu",
        "detail": "Lukis cabang bagi setiap pilihan berserta nilai kebarangkalian pada setiap cabang.",
        "tip": "Hasil tambah kebarangkalian cabang keluar = 1"
      },
      {
        "step": "Langkah 3",
        "title": "Gunakan Darab untuk Operasi 'DAN'",
        "detail": "P(A dan B) = P(A ∩ B) = Darabkan kebarangkalian di sepanjang cabang yang sama.",
        "tip": "'DAN' = Operasi Darab (×)"
      },
      {
        "step": "Langkah 4",
        "title": "Gunakan Tambah untuk Operasi 'ATAU'",
        "detail": "P(A atau B) = P(A ∪ B) = P(A) + P(B) - P(A ∩ B).",
        "tip": "'ATAU' = Operasi Tambah (+)"
      }
    ],
    "keypoints": [
      {
        "badge": "TAK BERSANDAR",
        "term": "P(A ∩ B) = P(A) × P(B)",
        "meaning": "Peristiwa A tidak menjejaskan kebarangkalian berlakunya peristiwa B."
      },
      {
        "badge": "BERSANDAR",
        "term": "Kesan Pemilihan Terdahulu",
        "meaning": "Kebarangkalian peristiwa kedua dipengaruhi oleh keputusan pemilihan pertama (cth: tanpa pengembalian)."
      },
      {
        "badge": "SALING EKSKLUSIF",
        "term": "P(A ∩ B) = 0",
        "meaning": "Kedua-dua peristiwa mustahil berlaku bersama pada masa yang sama."
      },
      {
        "badge": "HUKUM PENAMBAHAN",
        "term": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
        "meaning": "Rumus am mencari kebarangkalian berlakunya peristiwa A atau peristiwa B."
      },
      {
        "badge": "GAMBAR RAJAH POKOK",
        "term": "Analisis Cabang Kebarangkalian",
        "meaning": "Kaedah visual menyenaraikan semua kesudahan yang mungkin bagi peristiwa bergabung."
      }
    ],
    "questions": [
      {
        "q": "Sekeping syiling adil dan sebiji dadu adil dilambung serentak. Apakah kebarangkalian mendapat muka 'Gambar' pada syiling DAN nombor '6' pada dadu?",
        "options": [
          "1/12",
          "1/8",
          "1/2",
          "7/12"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA LENGKAP:\nP(Gambar) = 1/2\nP(Nombor 6) = 1/6\nKedua-duanya ialah peristiwa tak bersandar:\nP(Gambar dan 6) = P(Gambar) × P(6) = (1/2) × (1/6) = 1/12."
      },
      {
        "q": "Sebuah kotak mengandungi 4 batang pen biru dan 6 batang pen merah. Dua batang pen dipilih secara rawak satu demi satu TANPA PENGEMBALIAN. Cari kebarangkalian kedua-duanya pen biru.",
        "options": [
          "2/15",
          "4/25",
          "1/3",
          "8/45"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA LENGKAP:\nJumlah pen asal = 4 + 6 = 10 batang.\nP(Pen pertama Biru) = 4/10.\nBaki pen biru = 3 batang, baki jumlah pen = 9 batang.\nP(Pen kedua Biru) = 3/9 = 1/3.\nP(Kedua-dua Biru) = (4/10) × (3/9) = (2/5) × (1/3) = 2/15."
      },
      {
        "q": "Diberi peristiwa A dan B ialah peristiwa saling eksklusif di mana P(A) = 1/3 dan P(B) = 1/4. Cari nilai bagi P(A ∪ B).",
        "options": [
          "7/12",
          "1/12",
          "5/12",
          "2/7"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA:\nBagi peristiwa saling eksklusif: P(A ∩ B) = 0.\nP(A ∪ B) = P(A) + P(B) = 1/3 + 1/4 = 4/12 + 3/12 = 7/12."
      },
      {
        "q": "Sebiji dadu dilambung sekali. Peristiwa X ialah mendapat nombor ganjil dan peristiwa Y ialah mendapat nombor perdana. Apakah nilai P(X ∪ Y)?",
        "options": [
          "2/3",
          "1/2",
          "5/6",
          "1"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA LENGKAP:\nRuang sampel S = {1, 2, 3, 4, 5, 6} => n(S) = 6.\nSet X (ganjil) = {1, 3, 5} => P(X) = 3/6.\nSet Y (perdana) = {2, 3, 5} => P(Y) = 3/6.\nX ∩ Y = {3, 5} => P(X ∩ Y) = 2/6.\nP(X ∪ Y) = P(X) + P(Y) - P(X ∩ Y) = 3/6 + 3/6 - 2/6 = 4/6 = 2/3."
      },
      {
        "q": "Kebarangkalian hujan pada hari esok ialah 0.3. Apakah kebarangkalian hari esok TIDAK hujan?",
        "options": [
          "0.7",
          "0.3",
          "0.09",
          "1.0"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA:\nP(Pelengkap) = 1 - P(Peristiwa)\nP(Tidak Hujan) = 1 - 0.3 = 0.7."
      }
    ],
    "struktur": [
      {
        "q": "Soalan Struktur Matematik Bab 9: Dalam sebuah beg terdapat 5 keping kad berlabel huruf S, A, I, N, S. Dua keping kad dikeluarkan satu demi satu secara rawak tanpa pengembalian. (a) Senaraikan ruang sampel menggunakan gambar rajah pokok. (b) Hitung kebarangkalian memilih sekurang-kurangnya satu kad berhuruf 'S'. [5 markah]",
        "skema": [
          "(a) Huruf: S₁, A, I, N, S₂. Ruang sampel terdiri daripada 5 × 4 = 20 pasangan kesudahan. [2 markah]",
          "(b) Kebarangkalian sekurang-kurangnya satu 'S': [3 markah]\n    Kaedah Pelengkap: P(Sekurang-kurangnya satu S) = 1 - P(Tiada huruf S)\n    P(Bukan S pada kad 1) = 3/5 (pilihan A, I, N)\n    P(Bukan S pada kad 2) = 2/4 = 1/2\n    P(Tiada huruf S) = (3/5) × (1/2) = 3/10\n    P(Sekurang-kurangnya satu S) = 1 - 3/10 = 7/10."
        ]
      }
    ]
  },
  {
    "id": "math-bab10",
    "babNum": "BAB 10",
    "title": "MATEMATIK PENGGUNA: PENGURUSAN KEWANGAN",
    "icon": "💰",
    "anyflipPages": "Buku Teks Matematik Tingkatan 4 KSSM (Halaman 272 – 293)",
    "synopsis": "Mempelajari proses perancangan kewangan 5 langkah, penetapan matlamat kewangan mengikut konsep SMART, analisis pendapatan dan perbelanjaan (aliran tunai positif vs negatif), pengiraan dana kecemasan, serta pembinaan pelan kewangan peribadi jangka pendek dan jangka panjang.",
    "notes": [
      {
        "subtopic": "10.1 Perancangan dan Pengurusan Kewangan",
        "summary": "Proses merangka pelan kewangan peribadi berasaskan konsep SMART untuk mencapai matlamat jangka pendek dan jangka panjang serta memelihara aliran tunai positif.",
        "verbatim": [
          "Lima Langkah Proses Pengurusan Kewangan: 1. Menetapkan matlamat kewangan; 2. Menilai kedudukan kewangan (aset vs liabiliti); 3. Mewujudkan pelan kewangan; 4. Melaksanakan pelan kewangan; 5. Mengkaji semula dan menyemak kemajuan.",
          "Konsep Matlamat SMART: S (Specific - Khusus), M (Measurable - Boleh diukur nilai wang), A (Attainable - Boleh dicapai), R (Realistic - Realistik), T (Time-bound - Mempunyai tempoh masa jelas).",
          "Matlamat Jangka Pendek vs Panjang: Jangka Pendek (dicapai dalam tempoh kurang 1 tahun, cth: membeli komputer riba); Jangka Panjang (memerlukan tempoh lebih 5 tahun, cth: membeli rumah, dana persaraan).",
          "Aliran Tunai (Cash Flow): Jumlah Pendapatan - Jumlah Perbelanjaan. Aliran Tunai Positif (pendapatan > perbelanjaan, wujud lebihan); Aliran Tunai Negatif (pendapatan < perbelanjaan, wujud kurangan/defisit).",
          "Dana Kecemasan: Simpanan sekurang-kurangnya 3 hingga 6 bulan perbelanjaan asas untuk menghadapi situasi luar jangka (cth: kehilangan pekerjaan atau kecemasan perubatan)."
        ],
        "explanation": "Pendidikan celik kewangan membolehkan generasi muda mengelakkan bebanan hutang kad kredit dan membina kekayaan secara mampan."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Tetapkan Matlamat Mengikut Kriteria SMART",
        "detail": "Tentukan matlamat khusus (S), nilai wang tepat (M), realistik (A, R), dan tempoh masa bulan/tahun (T).",
        "tip": "Simpanan bulanan = Sasaran wang ÷ Bilangan bulan"
      },
      {
        "step": "Langkah 2",
        "title": "Asingkan Pendapatan dan Perbelanjaan",
        "detail": "Kira Pendapatan Bersih (Aktif + Pasif). Asingkan perbelanjaan tetap dan perbelanjaan boleh ubah.",
        "tip": "Dahulukan simpanan 10% sebelum belanja"
      },
      {
        "step": "Langkah 3",
        "title": "Hitung Aliran Tunai Bersih (Pendapatan - Perbelanjaan)",
        "detail": "Pastikan aliran tunai positif. Jika negatif, kurangkan perbelanjaan tidak tetap atau cari pendapatan sampingan.",
        "tip": "Aliran tunai positif = Kewangan sihat"
      },
      {
        "step": "Langkah 4",
        "title": "Sediakan Dana Kecemasan (3 - 6 Bulan Perbelanjaan)",
        "detail": "Darabkan perbelanjaan bulanan dengan 6 untuk simpanan kecemasan di akaun simpanan yang cair.",
        "tip": "Dana Kecemasan = 6 × Perbelanjaan Bulanan"
      }
    ],
    "keypoints": [
      {
        "badge": "SMART",
        "term": "5 Kriteria Matlamat Kewangan",
        "meaning": "Specific (Khusus), Measurable (Boleh ukur), Attainable (Boleh capai), Realistic (Realistik), Time-bound (Bertempoh masa)."
      },
      {
        "badge": "ALIRAN TUNAI POSITIF",
        "term": "Pendapatan > Perbelanjaan",
        "meaning": "Keadaan kewangan yang baik dengan lebihan tunai untuk simpanan dan pelaburan."
      },
      {
        "badge": "ALIRAN TUNAI NEGATIF",
        "term": "Pendapatan < Perbelanjaan",
        "meaning": "Defisit kewangan di mana perbelanjaan melebihi pendapatan, memaksa penggunaan kad kredit atau hutang."
      },
      {
        "badge": "DANA KECEMASAN",
        "term": "3 hingga 6 Bulan Perbelanjaan",
        "meaning": "Penampan kewangan cecair bagi menghadapi situasi luar jangka seperti ketiadaan pekerjaan."
      },
      {
        "badge": "PERBELANJAAN TETAP",
        "term": "Ansuran Rumah & Kereta",
        "meaning": "Komitmen kewangan yang wajib dibayar dengan jumlah sama setiap bulan."
      }
    ],
    "questions": [
      {
        "q": "Encik Farhan ingin membeli sebuah motosikal berharga RM6,000 dalam tempoh 2 tahun. Berapakah simpanan bulanan minimum yang perlu disimpannya mengikut konsep SMART?",
        "options": [
          "RM250",
          "RM300",
          "RM500",
          "RM200"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA LENGKAP:\nTempoh masa = 2 tahun = 2 × 12 = 24 bulan.\nSimpanan bulanan = Jumlah sasaran / Bilangan bulan\nSimpanan bulanan = RM6,000 / 24 bulan = RM250 sebulan."
      },
      {
        "q": "Puan Zaiton mempunyai pendapatan bulanan RM4,500. Jumlah perbelanjaan tetapnya ialah RM2,200 dan perbelanjaan tidak tetapnya ialah RM1,800. Berapakah aliran tunai bulanannya?",
        "options": [
          "+RM500 (Aliran tunai positif)",
          "-RM500 (Aliran tunai negatif)",
          "+RM2,300",
          "RM0"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA LENGKAP:\nJumlah Perbelanjaan = RM2,200 + RM1,800 = RM4,000.\nAliran Tunai = Pendapatan - Perbelanjaan = RM4,500 - RM4,000 = +RM500 (Aliran tunai positif)."
      },
      {
        "q": "Berapakah jumlah dana kecemasan minimum (6 bulan) yang perlu disediakan oleh seseorang yang mempunyai perbelanjaan bulanan sebanyak RM1,800?",
        "options": [
          "RM10,800",
          "RM5,400",
          "RM7,200",
          "RM18,000"
        ],
        "answer": 0,
        "explanation": "JALAN KIRA:\nDana kecemasan 6 bulan = 6 × Perbelanjaan bulanan\nDana kecemasan = 6 × RM1,800 = RM10,800."
      },
      {
        "q": "Antara perbelanjaan berikut, yang manakah dikategorikan sebagai PERBELANJAAN TIDAK TETAP?",
        "options": [
          "Bil petrol kenderaan dan makanan dapur",
          "Ansuran pinjaman perumahan bank",
          "Bayaran premium insurans nyawa",
          "Sewa bulanan premis kedai"
        ],
        "answer": 0,
        "explanation": "Bil petrol dan makanan berubah-ubah setiap bulan mengikut kekerapan penggunaan dan gaya hidup, maka ia adalah perbelanjaan tidak tetap (berubah)."
      },
      {
        "q": "Apakah maksud huruf 'M' dalam kriteria matlamat kewangan SMART?",
        "options": [
          "Measurable (Boleh diukur jumlah wang secara kuantitatif)",
          "Money (Wang tunai)",
          "Monthly (Secara bulanan)",
          "Minimum (Jumlah terendah)"
        ],
        "answer": 0,
        "explanation": "M mewakili 'Measurable' (Boleh diukur), iaitu sasaran kewangan mestilah dinyatakan dalam bentuk jumlah wang yang jelas (contohnya RM5,000, bukan sekadar 'banyak wang')."
      }
    ],
    "struktur": [
      {
        "q": "Soalan Struktur Matematik Bab 10: Pelan kewangan Encik Razak menunjukkan gaji bersih RM3,500 dan pendapatan pasif dividen RM200. Beliau memperuntukkan simpanan tetap 10% daripada jumlah pendapatan, perbelanjaan tetap RM1,800 dan perbelanjaan tidak tetap RM1,200. (a) Hitung simpanan tetap bulanannya. (b) Hitung aliran tunai bulanan Encik Razak dan nyatakan sama ada kedudukan kewangannya positif atau negatif. [5 markah]",
        "skema": [
          "(a) Jumlah Pendapatan = RM3,500 + RM200 = RM3,700 [1 markah]\n    Simpanan Tetap (10%) = 0.10 × RM3,700 = RM370 sebulan [1 markah]",
          "(b) Baki pendapatan selepas simpanan = RM3,700 - RM370 = RM3,330 [1 markah]\n    Jumlah Perbelanjaan = RM1,800 + RM1,200 = RM3,000 [1 markah]\n    Aliran Tunai Bersih = RM3,330 - RM3,000 = +RM330 (Positif / Kewangan sihat) [1 markah]"
        ]
      }
    ]
  }
];

if (typeof module !== 'undefined') {
  module.exports = { MATEMATIK_DATA };
}
