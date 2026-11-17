/* ==========================================================================
   DATA PRINSIP PERAKAUNAN TINGKATAN 5 (KSSM SPM) - 100% BUKU TEKS
   Sumber Rujukan: https://online.fliphtml5.com/cdien/novp/
   Jumlah Modul: 7 Modul Lengkap | Jumlah Subtopik: 27 Subtopik Lengkap
   Fokus Utama: Jalan Kerja Pengiraan Lengkap (Analisis Nisbah Kewangan,
                Rekod Tak Lengkap, Belanjawan Tunai, Penyata Penyesuaian Bank,
                Perkongsian, Syarikat Berhad, Kelab Persatuan, Kos Pengeluaran, TPM)
   ========================================================================== */

const PERAKAUNAN_T5_DATA = [
  {
    "id": "akaun5-bab1",
    "babNum": "MODUL 10",
    "title": "Analisis dan Tafsiran Penyata Kewangan untuk Membuat Keputusan",
    "synopsis": "Menganalisis prestasi kewangan perniagaan menggunakan 3 kategori nisbah utama: Nisbah Keberuntungan (Tokokan, Margin Untung Kasar, Margin Untung Bersih, Pulangan atas Modal), Nisbah Kecairan (Nisbah Semasa, Nisbah Ujian Asid), dan Nisbah Kecekapan (Kadar Pusing Ganti Inventori, Tempoh Kutipan Hutang, Tempoh Bayaran Hutang) untuk membandingkan prestasi antara tempoh dan antara perniagaan.",
    "notes": [
      {
        "subtopic": "10.1 Analisis Penyata Kewangan dan Perbandingan Prestasi",
        "summary": "Analisis penyata kewangan membolehkan pihak pengurusan, pelabur dan bank menilai kekuatan dan kelemahan kewangan perniagaan melalui analisis nisbah, analisis trend masa lalu, dan perbandingan dengan pesaing industri.",
        "verbatim": [
          "Tujuan Analisis Penyata Kewangan: Menilai prestasi semasa dan masa depan perniagaan, mengukur tahap kecairan dan keupayaan melunaskan hutang jangka pendek, menilai kecekapan pengurusan aset, dan membantu pembiaya membuat keputusan pinjaman.",
          "Jenis Perbandingan Prestasi:\n  1. Perbandingan Antara Tempoh (Analisis Trend): Membandingkan prestasi perniagaan yang sama bagi beberapa tahun berturut-turut untuk melihat arah kemajuan.\n  2. Perbandingan Antara Perniagaan (Penanda Aras Industri): Membandingkan prestasi firma dengan firma pesaing dalam industri yang sama untuk mengukur daya saing pasaran."
        ],
        "explanation": "Analisis nisbah membolehkan angka mentah penyata kewangan ditukar kepada peratusan dan nisbah piawai yang bermakna."
      },
      {
        "subtopic": "10.2 Analisis Nisbah Keberuntungan",
        "summary": "Nisbah keberuntungan mengukur keupayaan sesebuah entiti menjana keuntungan daripada jualan barang niaga dan pelaburan modal pemilik.",
        "verbatim": [
          "JALAN KERJA PENGIRAAN 4 NISBAH KEBERUNTUNGAN UTAMA:\n  1. Peratus Tokokan (Mark-up):\n     - Formula: Tokokan = (Untung Kasar / Kos Jualan) x 100%\n     - Maksud: Mengukur peratusan keuntungan yang ditambah ke atas kos barang niaga.\n  2. Peratus Margin Untung Kasar:\n     - Formula: Margin Untung Kasar = (Untung Kasar / Jualan Bersih) x 100%\n     - Maksud: Bagi setiap RM1 jualan bersih, berapa sen untung kasar diperoleh.\n  3. Peratus Margin Untung Bersih:\n     - Formula: Margin Untung Bersih = (Untung Bersih / Jualan Bersih) x 100%\n     - Maksud: Kecekapan firma mengawal perbelanjaan operasi dalam menjana untung bersih.\n  4. Peratus Pulangan Atas Modal (ROCE):\n     - Formula: Pulangan Atas Modal = (Untung Bersih / Modal Awal) x 100%\n     - Maksud: Mengukur kadar pulangan keuntungan bagi setiap RM1 modal yang dilaburkan oleh pemilik.",
          "CONTOH PENGIRAAN LENGKAP NISBAH KEBERUNTUNGAN:\n  Data Kewangan Perniagaan Mutiara:\n  Jualan Bersih = RM200,000; Kos Jualan = RM120,000; Untung Kasar = RM80,000; Untung Bersih = RM30,000; Modal Awal = RM150,000.\n  Langkah 1: Peratus Tokokan = (80,000 / 120,000) x 100% = 66.67%\n  Langkah 2: Margin Untung Kasar = (80,000 / 200,000) x 100% = 40.0%  (Setiap RM1 jualan menghasilkan 40 sen untung kasar)\n  Langkah 3: Margin Untung Bersih = (30,000 / 200,000) x 100% = 15.0%  (Setiap RM1 jualan menghasilkan 15 sen untung bersih)\n  Langkah 4: Pulangan Atas Modal = (30,000 / 150,000) x 100% = 20.0%  (Bagi setiap RM1 modal yang dilabur, untung bersih ialah 20 sen)"
        ],
        "explanation": "Margin untung bersih yang tinggi menunjukkan pengurusan belanja operasi yang sangat berkesan dan cekap."
      },
      {
        "subtopic": "10.3 Analisis Nisbah Kecairan",
        "summary": "Nisbah kecairan mengukur keupayaan perniagaan menukarkan aset semasa kepada wang tunai dengan cepat untuk membayar hutang jangka pendek (Liabiliti Semasa).",
        "verbatim": [
          "JALAN KERJA PENGIRAAN 2 NISBAH KECAIRAN UTAMA:\n  1. Nisbah Semasa (Current Ratio):\n     - Formula: Nisbah Semasa = Aset Semasa / Liabiliti Semasa\n     - Nisbah Standard: Lazimnya 2 : 1 (Setiap RM1 hutang jangka pendek disokong oleh RM2 aset semasa).\n  2. Nisbah Ujian Asid (Quick / Acid-Test Ratio):\n     - Formula: Nisbah Ujian Asid = (Aset Semasa - Inventori Akhir) / Liabiliti Semasa\n     (Atau: [Bank + Tunai + Akaun Belum Terima] / Liabiliti Semasa)\n     - Rasional: Inventori akhir ditolak keluar kerana mengambil masa lama untuk dijual dan ditukarkan kepada tunai.\n     - Nisbah Standard: Lazimnya 1 : 1.",
          "CONTOH PENGIRAAN LENGKAP NISBAH KECAIRAN:\n  Data daripada Penyata Kedudukan Kewangan:\n  Bank = RM15,000; Tunai = RM5,000; Akaun Belum Terima = RM30,000; Inventori Akhir = RM25,000; Belanja Prabayar = RM5,000.\n  Akaun Belum Bayar = RM35,000; Belanja Terakru = RM5,000.\n  Langkah 1: Jumlah Aset Semasa = 15,000 + 5,000 + 30,000 + 25,000 + 5,000 = RM80,000\n  Langkah 2: Jumlah Liabiliti Semasa = 35,000 + 5,000 = RM40,000\n  Langkah 3: Nisbah Semasa = RM80,000 / RM40,000 = 2.0 : 1\n  Langkah 4: Aset Cepat (Tanpa Inventori) = RM80,000 - RM25,000 = RM55,000\n  Langkah 5: Nisbah Ujian Asid = RM55,000 / RM40,000 = 1.375 : 1 (atau 1.38 : 1)\n  *Tafsiran:* Perniagaan sangat cair dan mampu membayar hutang semasanya dengan serta-merta tanpa perlu menjual inventori!"
        ],
        "explanation": "Jika nisbah ujian asid kurang daripada 1 : 1, perniagaan berisiko mengalami masalah kecairan tunai sekiranya pemiutang menuntut bayaran segera."
      },
      {
        "subtopic": "10.4 Analisis Nisbah Kecekapan",
        "summary": "Nisbah kecekapan mengukur kecekapan perniagaan mengurus inventori serta mengutip dan membayar hutang perniagaan.",
        "verbatim": [
          "JALAN KERJA PENGIRAAN 3 NISBAH KECEKAPAN UTAMA:\n  1. Kadar Pusing Ganti Inventori (KPGI):\n     - Formula A (Bilangan Kali): KPGI = Kos Jualan / Inventori Purata\n     - Formula B (Bilangan Hari): KPGI = (Inventori Purata / Kos Jualan) x 365 hari\n     *Di mana: Inventori Purata = (Inventori Awal + Inventori Akhir) / 2\n     (Tafsiran: Semakin tinggi bilangan kali KPGI, semakin cekap firma menjual stok barang niaga dan mengelakkan stok lapuk).\n\n  2. Tempoh Kutipan Hutang (Akaun Belum Terima):\n     - Formula: Tempoh Kutipan = (Akaun Belum Terima / Jualan Kredit) x 365 hari\n     (Tafsiran: Menunjukkan bilangan purata hari yang diambil untuk mengutip hutang daripada pelanggan kredit. Semakin pendek tempoh, semakin cekap pengurusan kredit).\n\n  3. Tempoh Bayaran Hutang (Akaun Belum Bayar):\n     - Formula: Tempoh Bayaran = (Akaun Belum Bayar / Belian Kredit) x 365 hari\n     (Tafsiran: Menunjukkan purata tempoh masa yang diambil oleh perniagaan untuk menjelaskan hutang kepada pembekal).",
          "CONTOH PENGIRAAN LENGKAP NISBAH KECEKAPAN:\n  Inventori Awal = RM18,000; Inventori Akhir = RM22,000; Kos Jualan = RM100,000; Jualan Kredit = RM146,000; Akaun Belum Terima = RM16,000; Belian Kredit = RM73,000; Akaun Belum Bayar = RM12,000.\n  Langkah 1: Inventori Purata = (18,000 + 22,000) / 2 = RM20,000\n  Langkah 2: KPGI (Kali) = RM100,000 / RM20,000 = 5 kali setahun!\n  Langkah 3: KPGI (Hari) = (20,000 / 100,000) x 365 = 73 hari sekali stok diganti.\n  Langkah 4: Tempoh Kutipan Hutang = (16,000 / 146,000) x 365 = 40 hari\n  Langkah 5: Tempoh Bayaran Hutang = (12,000 / 73,000) x 365 = 60 hari"
        ],
        "explanation": "Jika tempoh kutipan hutang (40 hari) lebih pendek daripada tempoh bayaran hutang (60 hari), ini menunjukkan pengurusan aliran tunai yang sangat sihat kerana wang dikutip daripada penghutang sebelum perlu dibayar kepada pembekal."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Kira Inventori Purata",
        "desc": "Inventori Purata = (Inventori Awal + Inventori Akhir) / 2.",
        "tip": "Pastikan menggunakan Kos Jualan dan bukannya Jualan Bersih untuk mengira KPGI."
      },
      {
        "step": "Langkah 2",
        "title": "Kira Nisbah Keberuntungan",
        "desc": "Tokokan = (UK / Kos Jualan) x 100%. Margin UK = (UK / Jualan) x 100%. Margin UB = (UB / Jualan) x 100%. Pulangan Modal = (UB / Modal Awal) x 100%.",
        "tip": "Perhatikan perbezaan pembahagi: Tokokan bahagi Kos Jualan; Margin bahagi Jualan Bersih."
      },
      {
        "step": "Langkah 3",
        "title": "Kira Nisbah Kecairan",
        "desc": "Nisbah Semasa = AS / LS. Nisbah Ujian Asid = (AS - Inventori Akhir) / LS.",
        "tip": "Jawapan nisbah kecairan mesti ditulis dalam format X : 1 (contoh: 2.5 : 1)."
      },
      {
        "step": "Langkah 4",
        "title": "Kira Nisbah Kecekapan",
        "desc": "KPGI = Kos Jualan / Inventori Purata. Tempoh Kutipan = (ABT / Jualan Kredit) x 365 hari. Tempoh Bayaran = (ABB / Belian Kredit) x 365 hari.",
        "tip": "Bundarkan hari kepada nombor bulat terdekat jika ada pecahan."
      }
    ],
    "keypoints": [
      "Peratus Tokokan: (Untung Kasar / Kos Jualan) x 100%.",
      "Margin Untung Kasar: (Untung Kasar / Jualan Bersih) x 100%.",
      "Margin Untung Bersih: (Untung Bersih / Jualan Bersih) x 100%.",
      "Pulangan Atas Modal: (Untung Bersih / Modal Awal) x 100%.",
      "Nisbah Semasa: Aset Semasa / Liabiliti Semasa.",
      "Nisbah Ujian Asid: (Aset Semasa - Inventori Akhir) / Liabiliti Semasa.",
      "Kadar Pusing Ganti Inventori: Kos Jualan / Inventori Purata.",
      "Tempoh Kutipan Hutang: (Akaun Belum Terima / Jualan Kredit) x 365 hari."
    ],
    "questions": [
      {
        "question": "Diberi maklumat kewangan sebuah perniagaan:\n- Jualan Bersih = RM150,000\n- Kos Jualan = RM100,000\n- Untung Bersih = RM22,500\nBerapakah peratus tokokan dan margin untung bersih perniagaan tersebut?",
        "options": [
          "Tokokan = 50.0%, Margin Untung Bersih = 15.0%",
          "Tokokan = 33.3%, Margin Untung Bersih = 15.0%",
          "Tokokan = 50.0%, Margin Untung Bersih = 22.5%",
          "Tokokan = 33.3%, Margin Untung Bersih = 22.5%"
        ],
        "answer": "Tokokan = 50.0%, Margin Untung Bersih = 15.0%",
        "explanation": "Jalan kerja pengiraan: Untung Kasar = Jualan Bersih (150,000) - Kos Jualan (100,000) = RM50,000. Tokokan = (Untung Kasar / Kos Jualan) x 100% = (50,000 / 100,000) x 100% = 50.0%. Margin Untung Bersih = (Untung Bersih / Jualan Bersih) x 100% = (22,500 / 150,000) x 100% = 15.0%."
      },
      {
        "question": "Aset Semasa perniagaan berjumlah RM75,000 termasuk inventori akhir RM25,000. Liabiliti Semasa ialah RM25,000. Berapakah nilai Nisbah Ujian Asid?",
        "options": [
          "2.0 : 1",
          "3.0 : 1",
          "1.5 : 1",
          "2.5 : 1"
        ],
        "answer": "2.0 : 1",
        "explanation": "Jalan kerja pengiraan: Aset Cepat = Aset Semasa (75,000) - Inventori Akhir (25,000) = RM50,000. Nisbah Ujian Asid = Aset Cepat / Liabiliti Semasa = RM50,000 / RM25,000 = 2.0 : 1."
      }
    ],
    "struktur": [
      {
        "soalan": "Maklumat berikut diperoleh daripada Penyata Kewangan Syarikat Wawasan bagi tahun berakhir 31 Disember 2025:\n- Jualan Bersih (Semua kredit): RM365,000\n- Kos Jualan: RM219,000\n- Untung Kasar: RM146,000\n- Untung Bersih: RM54,750\n- Modal Awal: RM250,000\n- Inventori Awal: RM30,000\n- Inventori Akhir: RM43,000\n- Akaun Belum Terima: RM40,000\n- Aset Semasa: RM95,000\n- Liabiliti Semasa: RM38,000\nHitungkan:\n(a) Peratus Tokokan dan Peratus Pulangan Atas Modal. [3 markah]\n(b) Nisbah Semasa dan Nisbah Ujian Asid. [2 markah]\n(c) Kadar Pusing Ganti Inventori (dalam bilangan kali) dan Tempoh Kutipan Hutang (dalam bilangan hari). [3 markah]",
        "markah": "8 Markah",
        "jawapan": "(a) Jalan Kerja Pengiraan Keberuntungan:\n1. Peratus Tokokan = (Untung Kasar / Kos Jualan) x 100% = (RM146,000 / RM219,000) x 100% = 66.67% [2m]\n2. Pulangan Atas Modal = (Untung Bersih / Modal Awal) x 100% = (RM54,750 / RM250,000) x 100% = 21.9% [1m]\n\n(b) Jalan Kerja Pengiraan Kecairan:\n1. Nisbah Semasa = Aset Semasa / Liabiliti Semasa = RM95,000 / RM38,000 = 2.5 : 1 [1m]\n2. Nisbah Ujian Asid = (Aset Semasa - Inventori Akhir) / Liabiliti Semasa\n   = (RM95,000 - RM43,000) / RM38,000 = RM52,000 / RM38,000 = 1.37 : 1 [1m]\n\n(c) Jalan Kerja Pengiraan Kecekapan:\n1. Inventori Purata = (RM30,000 + RM43,000) / 2 = RM36,500\n   Kadar Pusing Ganti Inventori = Kos Jualan / Inventori Purata = RM219,000 / RM36,500 = 6 kali setahun [2m]\n2. Tempoh Kutipan Hutang = (Akaun Belum Terima / Jualan Kredit) x 365 hari\n   = (RM40,000 / RM365,000) x 365 = 40 hari [1m].",
        "panduanKoreksi": "3m untuk Tokokan (66.67%) dan Pulangan Modal (21.9%) + 2m untuk Nisbah Semasa (2.5:1) dan Ujian Asid (1.37:1) + 3m untuk KPGI (6 kali) dan Tempoh Kutipan (40 hari)."
      }
    ]
  },
  {
    "id": "akaun5-bab2",
    "babNum": "MODUL 11",
    "title": "Rekod Tak Lengkap",
    "synopsis": "Menguasai penentuan untung atau rugi perniagaan yang tidak menyimpan rekod perakaunan lengkap menggunakan Kaedah Perbandingan (analisis modal awal dan akhir) dan Kaedah Analisis (Akaun Kawalan, Buku Tunai Terselaras, dan Akaun Nominal) untuk membina Penyata Kewangan lengkap.",
    "notes": [
      {
        "subtopic": "11.1 Pengenalan Rekod Tak Lengkap dan Punca",
        "summary": "Rekod tak lengkap berlaku apabila perniagaan tidak mengamalkan sistem catatan bergu sepenuhnya atau rekod musnah akibat bencana.",
        "verbatim": [
          "Maksud Rekod Tak Lengkap: Amalan perekodan perakaunan yang tidak mengikut prinsip catatan bergu secara menyeluruh (cth: sistem catatan tunggal atau rekod perniagaan yang hilang/terbakar).",
          "Punca Rekod Tak Lengkap: Tidak menyimpan rekod perakaunan, hanya merekod catatan tunggal (buku tunai sahaja), dokumen perniagaan hilang/musnah akibat banjir atau kebakaran, peniaga tiada pengetahuan perakaunan.",
          "Dua Kaedah Menentukan Untung Rugi Rekod Tak Lengkap:\n  1. Kaedah Perbandingan: Membandingkan Modal Akhir dengan Modal Awal.\n  2. Kaedah Analisis: Menganalisis dokumen, Buku Tunai dan Akaun Kawalan untuk mencari angka Jualan, Belian, Hasil dan Belanja."
        ],
        "explanation": "Walaupun rekod tidak lengkap, prinsip persamaan perakaunan membolehkan kita membina semula angka kewangan yang hilang."
      },
      {
        "subtopic": "11.2 Penentuan Untung atau Rugi Melalui Kaedah Perbandingan",
        "summary": "Kaedah perbandingan mengira untung bersih berasaskan perubahan nilai ekuiti pemilik antara awal dan akhir tempoh setelah diselaraskan dengan modal tambahan dan ambilan.",
        "verbatim": [
          "JALAN KERJA PENGIRAAN MODAL AWAL DAN MODAL AKHIR (PENYATA MENGIRA MODAL):\n  Formula: Modal = Jumlah Aset - Jumlah Liabiliti\n  Contoh Pengiraan Modal Awal dan Modal Akhir:\n  Butiran               | 1 Jan 2025 (Awal) | 31 Dis 2025 (Akhir)\n  Kenderaan (Nilai Buku)| RM40,000          | RM36,000 (selepas susut nilai)\n  Inventori             | RM12,000          | RM15,000\n  Akaun Belum Terima    | RM8,000           | RM10,000\n  Bank                  | RM10,000          | RM14,000\n  Akaun Belum Bayar     | RM6,000           | RM7,500\n  Kadar Bayaran Terakru | RM0               | RM500\n  Langkah 1: Modal Awal (1 Jan) = (40,000 + 12,000 + 8,000 + 10,000) - 6,000 = RM70,000 - RM6,000 = RM64,000\n  Langkah 2: Modal Akhir (31 Dis) = (36,000 + 15,000 + 10,000 + 14,000) - (7,500 + 500) = RM75,000 - RM8,000 = RM67,000",
          "JALAN KERJA PENGIRAAN UNTUNG / RUGI BERSIH (PENYATA MENGIRA UNTUNG RUGI):\n  Formula Utama: Untung / Rugi Bersih = Modal Akhir + Ambilan - Modal Awal - Modal Tambahan\n  Contoh Pengiraan Lanjutan:\n  Sepanjang tahun 2025, pemilik telah mengambil barang niaga RM2,400 untuk kegunaan keluarga dan membawa masuk van peribadi bernilai RM8,000 sebagai modal tambahan.\n  Untung Bersih = Modal Akhir (RM67,000) + Ambilan (RM2,400) - Modal Awal (RM64,000) - Modal Tambahan (RM8,000)\n  = 69,400 - 72,000 = -RM2,600 (RUGI BERSIH RM2,600)!"
        ],
        "explanation": "Ambilan mesti ditambah semula kepada Modal Akhir kerana ambilan telah mengurangkan modal perniagaan untuk kegunaan peribadi."
      },
      {
        "subtopic": "11.3 Penentuan Untung atau Rugi Melalui Kaedah Analisis",
        "summary": "Kaedah analisis membina semula Akaun Kawalan Belum Terima untuk mencari Jualan Kredit, Akaun Kawalan Belum Bayar untuk mencari Belian Kredit, dan lejar belanja/hasil untuk menyediakan Penyata Pendapatan lengkap.",
        "verbatim": [
          "JALAN KERJA MENCARI JUALAN & BELIAN KREDIT:\n  1. Mencari Jualan Kredit (Melalui Akaun Kawalan Belum Terima):\n     Jualan Kredit = Bank (Terimaan ABT) + Diskaun Diberi + Pulangan Jualan + Hutang Lapuk + Baki Akhir ABT - Baki Awal ABT\n     Jumlah Jualan = Jualan Kredit + Jualan Tunai\n\n  2. Mencari Belian Kredit (Melalui Akaun Kawalan Belum Bayar):\n     Belian Kredit = Bank (Bayaran ABB) + Diskaun Diterima + Pulangan Belian + Baki Akhir ABB - Baki Awal ABB\n     Jumlah Belian = Belian Kredit + Belian Tunai\n\n  3. Menghitung Belanja Sebenar Tempoh Semasa (Akaun Belanja):\n     Belanja Sebenar = Bayaran Tunai/Bank + Belanja Terakru Akhir - Belanja Terakru Awal - Belanja Prabayar Akhir + Belanja Prabayar Awal"
        ],
        "explanation": "Kaedah analisis membolehkan perniagaan menghasilkan Akaun Perdagangan dan Untung Rugi yang terperinci mengikut format piawai."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Sediakan Penyata Mengira Modal Awal",
        "desc": "Modal Awal = Jumlah Aset Awal - Jumlah Liabiliti Awal.",
        "tip": "Pastikan semua baki pada tarikh awal diambil dengan tepat."
      },
      {
        "step": "Langkah 2",
        "title": "Sediakan Penyata Mengira Modal Akhir",
        "desc": "Modal Akhir = Jumlah Aset Akhir Terselaras - Jumlah Liabiliti Akhir Terselaras.",
        "tip": "Ambil kira susut nilai aset dan peruntukan hutang ragu pada tarikh akhir."
      },
      {
        "step": "Langkah 3",
        "title": "Gunakan Formula Kaedah Perbandingan",
        "desc": "Untung/Rugi = Modal Akhir + Ambilan - Modal Awal - Modal Tambahan.",
        "tip": "Nilai positif = Untung Bersih; Nilai negatif = Rugi Bersih."
      },
      {
        "step": "Langkah 4",
        "title": "Bina Akaun Kawalan untuk Kaedah Analisis",
        "desc": "Gunakan Akaun Kawalan Belum Terima untuk mengira Jualan dan Akaun Kawalan Belum Bayar untuk mengira Belian.",
        "tip": "Campurkan jualan/belian tunai dengan jualan/belian kredit untuk mendapat jumlah jualan/belian."
      }
    ],
    "keypoints": [
      "Punca Rekod Tak Lengkap: Tiada catatan bergu, dokumen hilang, bencana alam.",
      "Formula Modal: Aset tolak Liabiliti.",
      "Formula Untung Kaedah Perbandingan: Modal Akhir + Ambilan - Modal Awal - Modal Tambahan.",
      "Kaedah Analisis: Menyediakan Akaun Kawalan untuk mengira Jualan Kredit dan Belian Kredit."
    ],
    "questions": [
      {
        "question": "Diberi Modal Awal RM45,000, Modal Akhir RM58,000, Ambilan sepanjang tahun RM3,500, dan Modal Tambahan yang dibawa masuk RM6,000. Berapakah Untung atau Rugi Bersih perniagaan?",
        "options": [
          "Untung Bersih RM10,500",
          "Untung Bersih RM16,500",
          "Untung Bersih RM7,000",
          "Rugi Bersih RM10,500"
        ],
        "answer": "Untung Bersih RM10,500",
        "explanation": "Jalan kerja pengiraan kaedah perbandingan: Untung Bersih = Modal Akhir (58,000) + Ambilan (3,500) - Modal Awal (45,000) - Modal Tambahan (6,000) = 61,500 - 51,000 = RM10,500."
      }
    ],
    "struktur": [
      {
        "soalan": "Puan Fatimah tidak menyimpan rekod perakaunan perniagaannya secara teratur. Maklumat aset dan liabiliti pada 1 Januari 2025 dan 31 Disember 2025 adalah seperti berikut:\nButiran               | 1 Jan 2025 | 31 Dis 2025\nLengkapan Pejabat     | RM25,000   | RM25,000\nInventori             | RM16,000   | RM19,500\nAkaun Belum Terima    | RM12,000   | RM14,000\nBank                  | RM8,500    | RM11,200\nAkaun Belum Bayar     | RM9,500    | RM8,700\nMaklumat Tambahan:\n(i) Lengkapan pejabat disusutnilaikan 10% setahun atas kos.\n(ii) Puan Fatimah mengambil barang niaga RM1,800 untuk kegunaan keluarga.\n(iii) Beliau memasukkan wang peribadi RM5,000 ke dalam akaun bank perniagaan sebagai modal tambahan.\n(a) Sediakan Penyata Mengira Modal Awal pada 1 Januari 2025. [2 markah]\n(b) Sediakan Penyata Mengira Modal Akhir pada 31 Disember 2025. [3 markah]\n(c) Sediakan Penyata Mengira Untung atau Rugi Bersih bagi tahun berakhir 31 Disember 2025. [3 markah]",
        "markah": "8 Markah",
        "jawapan": "(a) Penyata Mengira Modal Awal pada 1 Jan 2025:\nJumlah Aset = Lengkapan (25,000) + Inventori (16,000) + ABT (12,000) + Bank (8,500) = RM61,500 [1m]\nTolak Liabiliti = ABB (RM9,500)\nModal Awal = RM61,500 - RM9,500 = RM52,000 [1m]\n\n(b) Penyata Mengira Modal Akhir pada 31 Dis 2025:\nAset Terselaras:\n- Lengkapan = Kos (25,000) - Susut Nilai (10% x 25,000 = 2,500) = RM22,500 [1m]\n- Inventori = RM19,500\n- ABT = RM14,000\n- Bank = RM11,200\nJumlah Aset Akhir = 22,500 + 19,500 + 14,000 + 11,200 = RM67,200\nTolak Liabiliti = ABB (RM8,700) [1m]\nModal Akhir = RM67,200 - RM8,700 = RM58,500 [1m]\n\n(c) Penyata Mengira Untung Bersih bagi tahun 2025:\nModal Akhir: RM58,500\nTambah: Ambilan: RM1,800 [1m]\nJumlah: RM60,300\nTolak:\n- Modal Awal: RM52,000 [1m]\n- Modal Tambahan: RM5,000\nJumlah Tolak: RM57,000\nUntung Bersih = RM60,300 - RM57,000 = RM3,300 [1m].",
        "panduanKoreksi": "2m untuk Modal Awal RM52,000 + 3m untuk Modal Akhir RM58,500 + 3m untuk Untung Bersih RM3,300."
      }
    ]
  },
  {
    "id": "akaun5-bab3",
    "babNum": "MODUL 12",
    "title": "Perakaunan untuk Kawalan Dalaman",
    "synopsis": "Menguasai kaedah kawalan tunai dalaman melalui penyediaan Belanjawan Tunai untuk merancang aliran masuk dan keluar wang, serta Penyata Penyesuaian Bank untuk menyelaraskan perbezaan antara baki Buku Tunai dengan baki Penyata Bank.",
    "notes": [
      {
        "subtopic": "12.1 Kawalan Tunai dan Belanjawan Tunai",
        "summary": "Belanjawan Tunai menganggarkan penerimaan dan pembayaran tunai bagi suatu tempoh masa untuk meramal lebihan atau kurangan tunai bagi tujuan perancangan kecairan perniagaan.",
        "verbatim": [
          "Kepentingan Belanjawan Tunai: Mengawal penerimaan dan pembayaran tunai, meramal kecairan perniagaan, mengelakkan krisis kekurangan tunai, dan menjadi dokumen sokongan penting untuk memohon pinjaman bank.",
          "JALAN KERJA FORMAT PENYEDIAAN BELANJAWAN TUNAI:\n  1. Baki Awal Tunai (Baki tunai awal tempoh)\n  2. Jumlah Penerimaan: Jualan Tunai, Kutipan daripada ABT, Jualan Aset Tunai, Pinjaman Bank, Modal Tambahan.\n  3. Jumlah Pembayaran: Belian Tunai, Bayaran kepada ABB, Gaji, Sewa, Faedah Pinjaman, Ansuran Pinjaman, Ambilan Tunai.\n  4. Lebihan / (Kurangan) = Jumlah Penerimaan - Jumlah Pembayaran\n     - Jika Penerimaan > Pembayaran -> LEBIHAN TUNAI\n     - Jika Penerimaan < Pembayaran -> KURANGAN TUNAI (Defisit)\n  5. Baki Akhir Tunai = Baki Awal + Lebihan (atau Baki Awal - Kurangan)\n  *PENTING:* Baki akhir bulan semasa akan menjadi baki awal bulan seterusnya secara automatik!",
          "CONTOH PENGIRAAN BELANJAWAN TUNAI:\n  Bulan Januari: Baki Awal = RM10,000; Jumlah Penerimaan = RM35,000; Jumlah Pembayaran = RM28,000.\n  Lebihan Januari = 35,000 - 28,000 = +RM7,000\n  Baki Akhir Januari = 10,000 + 7,000 = RM17,000 (Menjadi Baki Awal Februari!)\n  Bulan Februari: Baki Awal = RM17,000; Jumlah Penerimaan = RM25,000; Jumlah Pembayaran = RM32,000.\n  Kurangan Februari = 25,000 - 32,000 = -RM7,000\n  Baki Akhir Februari = 17,000 - 7,000 = RM10,000!"
        ],
        "explanation": "Item bukan tunai seperti Susut Nilai Aset, Hutang Lapuk, dan Peruntukan Hutang Ragu TIDAK BOLEH dimasukkan ke dalam Belanjawan Tunai!"
      },
      {
        "subtopic": "12.2 Penyata Penyesuaian Bank",
        "summary": "Penyata Penyesuaian Bank disediakan setiap bulan untuk menyelaraskan baki akaun bank di Buku Tunai dengan baki di Penyata Bank.",
        "verbatim": [
          "Punca Perbezaan Baki Buku Tunai dan Penyata Bank:\n  1. Butiran dalam Penyata Bank TETAPI tiada dalam Buku Tunai:\n     - Penerimaan oleh Bank: Pindahan Kredit / Kredit Terus daripada pelanggan, Dividen Diterima, Faedah Simpanan.\n     - Pembayaran oleh Bank: Perintah Sedia Ada (Standing Order cth: sewa, insurans), Debit Terus (cth: bil utiliti), Caj Bank, Cek Tak Laku.\n  2. Butiran dalam Buku Tunai TETAPI tiada dalam Penyata Bank:\n     - Cek Belum Dikemukakan: Cek yang telah dikeluarkan oleh perniagaan kepada pembekal tetapi pembekal belum menunaikannya di bank.\n     - Deposit Belum Dikreditkan: Cek atau tunai yang telah didepositkan ke bank tetapi bank belum sempat mengkreditkan ke dalam akaun pelanggan.",
          "JALAN KERJA KAEDAH MENGEMASKINI BUKU TUNAI & PENYATA PENYESUAIAN BANK:\n  Langkah 1: Kemaskini Buku Tunai (Ruangan Bank):\n    - Sebelah Debit (Tambah): Masukkan Pindahan Kredit, Dividen, Faedah Simpanan.\n    - Sebelah Kredit (Tolak): Masukkan Perintah Sedia Ada, Debit Terus, Caj Bank, Cek Tak Laku.\n    - Cari Baki Terselaras Buku Tunai.\n  Langkah 2: Sediakan Penyata Penyesuaian Bank (Bermula Baki Buku Tunai Terselaras):\n    Baki mengikut Buku Tunai Terselaras\n    (+) Tambah: Cek Belum Dikemukakan\n    (-) Tolak: Deposit Belum Dikreditkan\n    = BAKI MENGIKUT PENYATA BANK! (Mesti sama tepat dengan Penyata Bank)"
        ],
        "explanation": "Pengemaskinian Buku Tunai adalah langkah wajib sebelum menyediakan Penyata Penyesuaian Bank bagi mencerminkan baki tunai bank yang sebenar."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Asingkan Urus Niaga Belanjawan Tunai",
        "desc": "Hanya ambil aliran masuk dan keluar tunai sebenar. Singkirkan susut nilai dan hutang lapuk.",
        "tip": "Kira jualan tunai dan kutipan kredit mengikut peratusan bulan yang ditetapkan."
      },
      {
        "step": "Langkah 2",
        "title": "Kira Lebihan / Kurangan dan Baki Akhir",
        "desc": "Lebihan = Penerimaan - Pembayaran. Baki Akhir = Baki Awal + Lebihan. Pindahkan baki akhir ke baki awal bulan berikutnya.",
        "tip": "Semak semula pengiraan kumulatif setiap lajur bulan."
      },
      {
        "step": "Langkah 3",
        "title": "Bandingkan Buku Tunai dengan Penyata Bank",
        "desc": "Tandakan butiran yang sama. Senaraikan butiran yang tidak bertanda.",
        "tip": "Butiran dalam Penyata Bank dibawa ke kemaskini Buku Tunai; butiran dalam Buku Tunai dibawa ke Penyata Penyesuaian Bank."
      },
      {
        "step": "Langkah 4",
        "title": "Imbangkan Penyata Penyesuaian Bank",
        "desc": "Baki Buku Tunai Terselaras + Cek Belum Dikemukakan - Deposit Belum Dikreditkan = Baki Penyata Bank.",
        "tip": "Jika baki penyata bank adalah overdraf, ia bertanda negatif (debit)."
      }
    ],
    "keypoints": [
      "Belanjawan Tunai: Ramalan aliran masuk dan keluar tunai bagi mengurus kecairan.",
      "Item Dilarang dalam Belanjawan Tunai: Susut nilai, hutang lapuk, peruntukan hutang ragu (item bukan tunai).",
      "Penyata Penyesuaian Bank: Menyelaraskan baki Buku Tunai dengan Penyata Bank.",
      "Cek Belum Dikemukakan: Cek dikeluarkan tetapi belum ditunaikan penerima (Tambah dalam penyata).",
      "Deposit Belum Dikreditkan: Wang didepositkan tetapi belum dikreditkan bank (Tolak dalam penyata)."
    ],
    "questions": [
      {
        "question": "Item manakah yang TIDAK BOLEH dimasukkan ke dalam penyediaan Belanjawan Tunai?",
        "options": [
          "Susut nilai kenderaan",
          "Ansuran pinjaman bank",
          "Pembelian perabot secara tunai",
          "Kutipan daripada penghutang"
        ],
        "answer": "Susut nilai kenderaan",
        "explanation": "Belanjawan Tunai hanya merekodkan transaksi yang melibatkan aliran masuk dan keluar tunai fizikal/bank sebenar. Susut nilai kenderaan ialah perbelanjaan bukan tunai (hanya peruntukan perakaunan), maka tidak dimasukkan ke dalam Belanjawan Tunai."
      }
    ],
    "struktur": [
      {
        "soalan": "Maklumat berikut menunjukkan aliran tunai Perniagaan Wira bagi suku tahun pertama 2026:\n- Baki awal tunai pada 1 Januari 2026: RM15,000\n- Anggaran Jualan Tunai: Januari RM40,000; Februari RM50,000; Mac RM60,000\n- Penerimaan daripada penghutang: Januari RM25,000; Februari RM30,000; Mac RM35,000\n- Pembayaran kepada pembekal: Januari RM35,000; Februari RM42,000; Mac RM48,000\n- Gaji pekerja bulanan: RM12,000 sebulan\n- Sewa kedai bulanan: RM3,000 sebulan\n- Pada bulan Februari, perniagaan membeli mesin secara tunai bernilai RM15,000.\nHitungkan bagi setiap bulan (Januari, Februari, Mac):\n(a) Jumlah Penerimaan dan Jumlah Pembayaran. [3 markah]\n(b) Lebihan atau Kurangan Tunai bulanan. [3 markah]\n(c) Baki Akhir Tunai pada akhir Mac 2026. [2 markah]",
        "markah": "8 Markah",
        "jawapan": "(a) & (b) Jalan Kerja Pengiraan Belanjawan Tunai:\n1. BULAN JANUARI:\n   - Penerimaan = Jualan (40,000) + Penghutang (25,000) = RM65,000 [1m]\n   - Pembayaran = Pembekal (35,000) + Gaji (12,000) + Sewa (3,000) = RM50,000\n   - Lebihan Januari = Penerimaan (65,000) - Pembayaran (50,000) = +RM15,000 [1m]\n   - Baki Akhir Januari = Baki Awal (15,000) + Lebihan (15,000) = RM30,000\n\n2. BULAN FEBRUARI:\n   - Baki Awal Februari = RM30,000\n   - Penerimaan = 50,000 + 30,000 = RM80,000 [1m]\n   - Pembayaran = Pembekal (42,000) + Gaji (12,000) + Sewa (3,000) + Mesin (15,000) = RM72,000\n   - Lebihan Februari = 80,000 - 72,000 = +RM8,000 [1m]\n   - Baki Akhir Februari = Baki Awal (30,000) + Lebihan (8,000) = RM38,000\n\n3. BULAN MAC:\n   - Baki Awal Mac = RM38,000\n   - Penerimaan = 60,000 + 35,000 = RM95,000 [1m]\n   - Pembayaran = Pembekal (48,000) + Gaji (12,000) + Sewa (3,000) = RM63,000\n   - Lebihan Mac = 95,000 - 63,000 = +RM32,000 [1m]\n\n(c) Baki Akhir Tunai pada 31 Mac 2026:\nBaki Akhir Mac = Baki Awal (38,000) + Lebihan Mac (32,000) = RM70,000.00 [2m].",
        "panduanKoreksi": "3m untuk penerimaan/pembayaran + 3m untuk lebihan bulanan (Jan RM15,000, Feb RM8,000, Mac RM32,000) + 2m untuk baki akhir Mac RM70,000."
      }
    ]
  },
  {
    "id": "akaun5-bab4",
    "babNum": "MODUL 13",
    "title": "Perakaunan untuk Perkongsian",
    "synopsis": "Mempelajari penubuhan perkongsian mengikut Akta Perkongsian 1961, penyediaan Akaun Pengasingan Untung Rugi, penyelenggaraan Akaun Modal dan Akaun Semasa pekongsi (kaedah modal berubah dan modal tetap), Penyata Kedudukan Kewangan, serta proses dan pengiraan pembubaran perkongsian melalui Akaun Realisasi.",
    "notes": [
      {
        "subtopic": "13.1 Penubuhan Perkongsian dan Ikatan Perkongsian",
        "summary": "Perkongsian ditubuhkan oleh 2 hingga 20 orang pekongsi. Sekiranya tiada perjanjian bertulis, peruntukan Seksyen 26 Akta Perkongsian 1961 terpakai secara automatik.",
        "verbatim": [
          "Peruntukan Akta Perkongsian 1961 (Jika Tiada Ikatan Perkongsian):\n  1. Untung atau rugi dibahagikan secara SAMA RATA antara semua pekongsi.\n  2. Tiada faedah dibayar atas modal yang disumbangkan oleh pekongsi.\n  3. Tiada faedah dikenakan ke atas ambilan pekongsi.\n  4. Tiada gaji, elaun atau upah dibayar kepada mana-mana pekongsi.\n  5. Faedah sebanyak 8% setahun dibayar ke atas pinjaman yang diberikan oleh pekongsi kepada perniagaan."
        ],
        "explanation": "Ikatan perkongsian penting untuk menentukan kadar faedah modal, faedah ambilan, gaji dan nisbah pembahagian untung rugi secara adil."
      },
      {
        "subtopic": "13.2 Akaun Pengasingan Untung Rugi Perkongsian",
        "summary": "Akaun Pengasingan Untung Rugi disediakan selepas Akaun Untung Rugi untuk mengagihkan untung bersih kepada setiap pekongsi mengikut syarat ikatan perkongsian.",
        "verbatim": [
          "JALAN KERJA FORMAT AKAUN PENGASINGAN UNTUNG RUGI:\n  Untung Bersih (daripada Akaun Untung Rugi)\n  (+) Tambah: Faedah atas Ambilan (Faedah yang dibayar oleh pekongsi kepada perniagaan)\n  (-) Tolak:\n      - Faedah atas Modal (Ganjaran modal yang dibayar perniagaan kepada pekongsi)\n      - Gaji / Elaun / Bonus Pekongsi\n  = UNTUNG BOLEH DIBAHAGIKAN (KONGSI UNTUNG / KONGSI RUGI)\n  Kongsi Untung diagihkan kepada pekongsi mengikut Nisbah Perkongsian yang dipersetujui (cth: 3:2 atau mengikut nisbah modal).",
          "CONTOH PENGIRAAN LENGKAP AKAUN PENGASINGAN UNTUNG RUGI:\n  Pekongsi Ali dan Abu berkongsi untung mengikut nisbah 3 : 2. Modal Ali RM50,000, Modal Abu RM30,000.\n  Syarat Ikatan: Faedah atas modal 5% setahun; Faedah atas ambilan 6% setahun; Gaji bulanan Abu RM1,000 sebulan (RM12,000 setahun).\n  Untung Bersih perniagaan = RM60,000. Ambilan: Ali RM4,000 (faedah RM240); Abu RM2,000 (faedah RM120).\n  Langkah 1: Untung Bersih = RM60,000\n  Langkah 2: Tambah Faedah Ambilan = Ali (240) + Abu (120) = RM360 -> Jumlah = RM60,360\n  Langkah 3: Tolak Faedah atas Modal:\n    - Ali: 5% x RM50,000 = RM2,500\n    - Abu: 5% x RM30,000 = RM1,500  (Jumlah Faedah Modal = RM4,000)\n  Langkah 4: Tolak Gaji Pekongsi Abu = RM12,000\n  Langkah 5: Baki Untung Boleh Dibahagi = 60,360 - 4,000 - 12,000 = RM44,360\n  Langkah 6: Pembahagian Kongsi Untung (Nisbah 3:2, Jumlah Bahagian = 5):\n    - Kongsi Untung Ali = 3/5 x RM44,360 = RM26,616\n    - Kongsi Untung Abu = 2/5 x RM44,360 = RM17,744!"
        ],
        "explanation": "Faedah atas pinjaman pekongsi dicatat sebagai belanja dalam Akaun Untung Rugi, bukannya dalam Akaun Pengasingan Untung Rugi."
      },
      {
        "subtopic": "13.3 Akaun Modal dan Akaun Semasa Pekongsi",
        "summary": "Merekodkan hak tuntutan dan transaksi setiap pekongsi menggunakan Kaedah Modal Tetap atau Kaedah Modal Berubah.",
        "verbatim": [
          "Dua Kaedah Menyelenggara Akaun Pekongsi:\n  1. Kaedah Modal Tetap:\n     - Akaun Modal: Hanya merekodkan sumbangan modal awal dan modal tambahan (bakinya kekal tetap).\n     - Akaun Semasa: Merekodkan semua faedah modal, faedah ambilan, gaji, ambilan, dan kongsi untung/rugi.\n  2. Kaedah Modal Berubah: Hanya satu akaun dibuka iaitu Akaun Modal yang menggabungkan modal dan semua pelarasan semasa (baki modal berubah setiap tahun).",
          "Catatan dalam Akaun Semasa Pekongsi:\n  - Sebelah KREDIT (Menambah hak pekongsi): Baki b/b, Faedah atas Modal, Gaji/Bonus Pekongsi, Kongsi Untung.\n  - Sebelah DEBIT (Mengurangkan hak pekongsi): Baki b/b (debit), Ambilan, Faedah atas Ambilan, Kongsi Rugi."
        ],
        "explanation": "Baki kredit Akaun Semasa dilaporkan di bawah Ekuiti Pemilik, manakala baki debit Akaun Semasa ditolak daripada ekuiti pemilik."
      },
      {
        "subtopic": "13.4 Pembubaran Perkongsian (Akaun Realisasi)",
        "summary": "Pembubaran perkongsian menamatkan operasi perniagaan di mana semua aset dijual, liabiliti dijelaskan, dan baki modal diagihkan kepada pekongsi melalui Akaun Realisasi.",
        "verbatim": [
          "JALAN KERJA PEMBUBARAN PERKONGSIAN MELALUI AKAUN REALISASI:\n  Tujuan Akaun Realisasi: Mengira untung atau rugi daripada penjualan aset perniagaan.\n  Langkah-langkah Merekod Pembubaran:\n  1. Tutup semua Aset Bukan Semasa dan Inventori ke Akaun Realisasi pada nilai buku asal:\n     - Debit: Akaun Realisasi | Kredit: Akaun Aset (kecuali Bank/Tunai)\n  2. Rekod Hasil Jualan Aset / Aset diambil alih oleh pekongsi:\n     - Jika aset dijual tunai: Debit Bank | Kredit Akaun Realisasi\n     - Jika aset diambil alih oleh pekongsi: Debit Akaun Modal Pekongsi | Kredit Akaun Realisasi\n  3. Bayar Belanja Realisasi (kos pembubaran):\n     - Debit Akaun Realisasi | Kredit Bank\n  4. Imbangkan Akaun Realisasi:\n     - Jika Kredit > Debit -> UNTUNG REALISASI (Pindahkan ke KREDIT Akaun Modal pekongsi mengikut nisbah untung rugi).\n     - Jika Debit > Kredit -> RUGI REALISASI (Pindahkan ke DEBIT Akaun Modal pekongsi mengikut nisbah).\n  5. Bayar Liabiliti (Pemiutang / ABB / Pinjaman):\n     - Debit Akaun Belum Bayar | Kredit Bank (termasuk diskaun diterima jika ada).\n  6. Tutup Akaun Modal dengan pembayaran balik baki modal kepada pekongsi:\n     - Debit Akaun Modal | Kredit Bank (Akaun Bank akan seimbang secara automatik!)."
        ],
        "explanation": "Baki akhir Akaun Bank yang tertutup seimbang menjadi bukti bahawa semua liabiliti dan hak pekongsi telah diselesaikan dengan sempurna."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Kira Faedah Modal & Ambilan",
        "desc": "Faedah Modal = % x Modal. Faedah Ambilan = % x Ambilan.",
        "tip": "Faedah pinjaman pekongsi masuk Akaun Untung Rugi, bukan pengasingan untung rugi!"
      },
      {
        "step": "Langkah 2",
        "title": "Sediakan Akaun Pengasingan Untung Rugi",
        "desc": "Untung Bersih + Faedah Ambilan - Faedah Modal - Gaji Pekongsi = Kongsi Untung.",
        "tip": "Agihkan kongsi untung mengikut nisbah perkongsian."
      },
      {
        "step": "Langkah 3",
        "title": "Kemaskini Akaun Semasa / Modal",
        "desc": "Kreditkan faedah modal, gaji, dan kongsi untung; Debitkan ambilan, faedah ambilan, dan kongsi rugi.",
        "tip": "Baki h/b akaun semasa masuk ke Penyata Kedudukan Kewangan."
      },
      {
        "step": "Langkah 4",
        "title": "Selesaikan Pembubaran",
        "desc": "Buka Akaun Realisasi, jual aset, bayar belanja realisasi, agihkan untung/rugi realisasi, bayar liabiliti, dan tutup bank.",
        "tip": "Akaun Bank mesti berbaki sifar di akhir proses pembubaran."
      }
    ],
    "keypoints": [
      "Akta Perkongsian 1961: Untung sama rata, tiada faedah modal, tiada faedah ambilan, tiada gaji, faedah pinjaman 8%.",
      "Akaun Pengasingan Untung Rugi: Mengagihkan untung bersih kepada pekongsi.",
      "Kaedah Modal Tetap: Akaun Modal kekal tetap; transaksi harian masuk Akaun Semasa.",
      "Akaun Realisasi: Mengira untung atau rugi penjualan aset semasa pembubaran perkongsian."
    ],
    "questions": [
      {
        "question": "Sekiranya tiada ikatan perkongsian bertulis dibuat antara pekongsi, apakah kadar faedah atas pinjaman pekongsi yang diperuntukkan di bawah Akta Perkongsian 1961?",
        "options": [
          "8% setahun",
          "5% setahun",
          "10% setahun",
          "Tiada faedah dibayar"
        ],
        "answer": "8% setahun",
        "explanation": "Mengikut Seksyen 26 Akta Perkongsian 1961, sekiranya tiada perjanjian bertulis, faedah sebanyak 8% setahun hendaklah dibayar ke atas sebarang pinjaman atau pendahuluan yang diberikan oleh pekongsi kepada perkongsian."
      }
    ],
    "struktur": [
      {
        "soalan": "Farah dan Nabila ialah rakan kongsi dalam Perkongsian FN yang berkongsi untung atau rugi mengikut nisbah 3 : 2. Pada 1 Januari 2025, baki modal Farah ialah RM60,000 dan modal Nabila ialah RM40,000. Baki Akaun Semasa Farah ialah RM4,500 (Kredit) dan Nabila RM1,200 (Debit).\nSyarat Ikatan Perkongsian menetapkan:\n(i) Faedah atas modal dibayar 6% setahun.\n(ii) Faedah atas ambilan dikenakan 5% setahun. (Ambilan: Farah RM5,000, faedah RM250; Nabila RM3,000, faedah RM150).\n(iii) Gaji bulanan Nabila ialah RM1,500 sebulan.\nBagi tahun berakhir 31 Disember 2025, perniagaan mencatat Untung Bersih sebanyak RM55,600.\n(a) Sediakan Akaun Pengasingan Untung Rugi bagi tahun berakhir 31 Disember 2025. [4 markah]\n(b) Sediakan Akaun Semasa bagi setiap pekongsi. [4 markah]",
        "markah": "8 Markah",
        "jawapan": "(a) Jalan Kerja Akaun Pengasingan Untung Rugi 2025:\nUntung Bersih: RM55,600\nTambah Faedah atas Ambilan: Farah (250) + Nabila (150) = RM400 [1m]\nJumlah = RM56,000\nTolak:\n- Faedah atas Modal: Farah (6% x 60,000 = 3,600) + Nabila (6% x 40,000 = 2,400) = RM6,000 [1m]\n- Gaji Pekongsi Nabila = RM1,500 x 12 bulan = RM18,000 [1m]\nBaki Kongsi Untung = 56,000 - 6,000 - 18,000 = RM32,000\nPembahagian Kongsi Untung (Nisbah 3:2):\n- Farah = 3/5 x RM32,000 = RM19,200 [1m]\n- Nabila = 2/5 x RM32,000 = RM12,800\n\n(b) Jalan Kerja Akaun Semasa Pekongsi:\n1. Akaun Semasa Farah:\n   - Sebelah Kredit: Baki b/b (4,500) + Faedah Modal (3,600) + Kongsi Untung (19,200) = RM27,300 [1m]\n   - Sebelah Debit: Ambilan (5,000) + Faedah Ambilan (250) = RM5,250\n   - Baki h/b Farah = 27,300 - 5,250 = RM22,050 (Kredit) [1m]\n2. Akaun Semasa Nabila:\n   - Sebelah Kredit: Faedah Modal (2,400) + Gaji (18,000) + Kongsi Untung (12,800) = RM33,200 [1m]\n   - Sebelah Debit: Baki b/b debit (1,200) + Ambilan (3,000) + Faedah Ambilan (150) = RM4,350\n   - Baki h/b Nabila = 33,200 - 4,350 = RM28,850 (Kredit) [1m].",
        "panduanKoreksi": "4m untuk Akaun Pengasingan Untung Rugi lengkap + 4m untuk Akaun Semasa Farah (RM22,050) dan Nabila (RM28,850)."
      }
    ]
  },
  {
    "id": "akaun5-bab5",
    "babNum": "MODUL 14",
    "title": "Perakaunan untuk Syarikat Berhad Menurut Syer",
    "synopsis": "Memahami ciri-ciri syarikat berhad menurut syer (Sdn. Bhd. dan Bhd.), modal syer, perbezaan antara syer biasa dan syer keutamaan, pengiraan terbitan syer pada nilai tara, pengiraan dividen interim dan dividen akhir, serta persembahan Ekuiti Pemilik syarikat dalam Penyata Kedudukan Kewangan.",
    "notes": [
      {
        "subtopic": "14.1 Pengenalan Syarikat Berhad Menurut Syer",
        "summary": "Syarikat berhad diperbadankan di bawah Akta Syarikat 2016 sebagai entiti sah berasingan daripada pemiliknya dan modalnya dibahagikan kepada unit-unit syer.",
        "verbatim": [
          "Ciri-ciri Syarikat Berhad Menurut Syer: Entiti undang-undang berasingan, liabiliti terhad kepada modal syer yang dilanggan, hayat berterusan (tidak bubar jika pemegang syer muflis/meninggal), pemilikan dan pengurusan diasingkan (diuruskan oleh Lembaga Pengarah).",
          "Perbezaan Syarikat Sendirian Berhad (Sdn. Bhd.) vs Syarikat Awam Berhad (Bhd.):\n  - Bilangan Pemegang Syer: Sdn. Bhd. (1 hingga 50 orang); Bhd. (minimum 1 orang, tiada had maksimum).\n  - Penjualan Syer: Sdn. Bhd. (syer tidak dijual kepada orang awam, pindah milik terhad); Bhd. (syer boleh diterbitkan dan diniagakan secara bebas kepada orang awam di Bursa Malaysia).\n  - Laporan Kewangan: Sdn. Bhd. (penyata kewangan dirahsiakan daripada orang awam); Bhd. (penyata kewangan wajib diaudit dan diumumkan kepada awam)."
        ],
        "explanation": "Liabiliti terhad melindungi pelabur kerana kerugian maksimum terhad kepada jumlah harga syer yang dibeli sahaja."
      },
      {
        "subtopic": "14.2 Jenis Modal dan Terbitan Syer",
        "summary": "Syarikat menerbitkan dua jenis syer utama iaitu Syer Keutamaan dan Syer Biasa.",
        "verbatim": [
          "Perbezaan Syer Biasa vs Syer Keutamaan:\n  1. Hak Mengundi: Syer Biasa mempunyai hak mengundi dalam Mesyuarat Agung Tahunan (AGM) untuk melantik pengarah; Syer Keutamaan TIADA hak mengundi.\n  2. Kadar Dividen: Syer Keutamaan menerima kadar dividen TETAP (cth: 6% Syer Keutamaan); Syer Biasa menerima kadar dividen TIDAK TETAP (bergantung kepada keuntungan syarikat).\n  3. Keutamaan Bayaran Dividen: Syer Keutamaan diberi keutamaan menerima dividen terlebih dahulu sebelum pemegang Syer Biasa.\n  4. Tuntutan Modal Semasa Pembubaran: Pemegang Syer Keutamaan diberi keutamaan bayaran balik modal berbanding pemegang Syer Biasa.",
          "JALAN KERJA PENGIRAAN TERBITAN SYER:\n  Modal Diterbitkan dan Berbayar Penuh = Bilangan Syer Diterbitkan x Harga Terbitan Sesyer\n  Contoh Pengiraan Terbitan Syer:\n  Syarikat Berjaya Bhd. menerbitkan 2,000,000 unit 6% Syer Keutamaan pada harga RM1.00 sesyer dan 5,000,000 unit Syer Biasa pada harga RM0.50 sesyer kepada orang awam. Semua syer dilanggan dan dibayar penuh melalui bank.\n  - Modal 6% Syer Keutamaan = 2,000,000 unit x RM1.00 = RM2,000,000\n  - Modal Syer Biasa = 5,000,000 unit x RM0.50 = RM2,500,000\n  - Jumlah Wang Diterima dalam Bank = RM2,000,000 + RM2,500,000 = RM4,500,000!"
        ],
        "explanation": "Modal diterbitkan dan dibayar penuh merupakan komponen utama Ekuiti Pemilik dalam Penyata Kedudukan Kewangan syarikat berhad."
      },
      {
        "subtopic": "14.3 Pengiraan Dividen Syer Biasa dan Syer Keutamaan",
        "summary": "Dividen ialah sebahagian daripada keuntungan syarikat yang diagihkan kepada pemegang syer, dibahagikan kepada dividen interim (separuh tahun) dan dividen akhir.",
        "verbatim": [
          "JALAN KERJA PENGIRAAN DIVIDEN LENGKAP:\n  1. Dividen Syer Keutamaan:\n     - Formula: Dividen Syer Keutamaan = Peratus Dividen Tetap x Modal Syer Keutamaan Diterbitkan\n     (Atau: Peratus x Nilai Tara x Bilangan Unit Syer)\n  2. Dividen Syer Biasa:\n     - Formula A: Peratus Dividen x Modal Syer Biasa Diterbitkan\n     - Formula B: Sen Sesyer x Bilangan Unit Syer Biasa\n\n  CONTOH PENGIRAAN KOMPREHENSIF DIVIDEN:\n  Modal Syarikat Teguh Bhd.:\n  - 1,000,000 unit 7% Syer Keutamaan RM2.00 sesyer = RM2,000,000\n  - 4,000,000 unit Syer Biasa RM1.00 sesyer = RM4,000,000\n  Lembaga Pengarah mengisytiharkan:\n  (i) Dividen Syer Keutamaan dibayar penuh.\n  (ii) Dividen Interim Syer Biasa sebanyak 3% pada bulan Jun.\n  (iii) Dividen Akhir Syer Biasa sebanyak 5 sen sesyer pada bulan Disember.\n\n  Langkah 1: Kira Dividen Syer Keutamaan = 7% x RM2,000,000 = RM140,000\n  Langkah 2: Kira Dividen Interim Syer Biasa = 3% x RM4,000,000 = RM120,000\n  Langkah 3: Kira Dividen Akhir Syer Biasa = 4,000,000 unit x RM0.05 = RM200,000\n  Langkah 4: Jumlah Dividen Syer Biasa Setahun = 120,000 + 200,000 = RM320,000\n  Langkah 5: Jumlah Keseluruhan Dividen Dibayar = RM140,000 + RM320,000 = RM460,000!"
        ],
        "explanation": "Dividen syer keutamaan wajib dibayar sebelum sebarang dividen boleh diagihkan kepada pemegang syer biasa."
      },
      {
        "subtopic": "14.4 Ekuiti Pemilik dalam Penyata Kedudukan Kewangan Syarikat Berhad",
        "summary": "Bahagian Ekuiti Pemilik syarikat berhad mengandungi Modal Diterbitkan dan Berbayar Penuh serta Untung Tertahan.",
        "verbatim": [
          "Format Ekuiti Pemilik Syarikat Berhad:\n  Ekuiti Pemilik:\n  Modal Diterbitkan dan Berbayar Penuh:\n  - ... unit X% Syer Keutamaan RM... sesyer\n  - ... unit Syer Biasa RM... sesyer\n  (+) Tambah: Untung Tertahan (Baki untung selepas tolak dividen)\n  = JUMLAH EKUITI PEMILIK\n  *Untung Tertahan = Untung Bersih - Jumlah Dividen Dibaiki / Diisytiharkan"
        ],
        "explanation": "Untung tertahan disimpan dalam syarikat sebagai sumber pembiayaan dalaman untuk pelaburan semula."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Kira Modal Terbitan",
        "desc": "Modal = Bilangan Syer Diterbitkan x Harga Sesyer.",
        "tip": "Asingkan antara modal syer keutamaan dan modal syer biasa."
      },
      {
        "step": "Langkah 2",
        "title": "Kira Dividen Syer Keutamaan",
        "desc": "Dividen = Peratus % x Modal Syer Keutamaan.",
        "tip": "Dividen syer keutamaan sentiasa berkadar tetap."
      },
      {
        "step": "Langkah 3",
        "title": "Kira Dividen Syer Biasa",
        "desc": "Kira dividen interim dan dividen akhir (% x Modal Syer Biasa atau Sen x Bilangan Unit Syer).",
        "tip": "Campurkan dividen interim dan akhir untuk mendapat jumlah dividen syer biasa setahun."
      },
      {
        "step": "Langkah 4",
        "title": "Sediakan Bahagian Ekuiti Pemilik PKK",
        "desc": "Susun Modal Syer Keutamaan, Modal Syer Biasa dan Untung Tertahan.",
        "tip": "Untung Tertahan = Baki Untung Awal + Untung Bersih Semasa - Dividen."
      }
    ],
    "keypoints": [
      "Sdn. Bhd. vs Bhd.: Sdn. Bhd. maksimum 50 orang; Bhd. tiada had dan didagangkan di bursa saham.",
      "Syer Biasa: Ada hak mengundi di AGM, dividen tidak tetap mengikut keuntungan.",
      "Syer Keutamaan: Tiada hak mengundi, dividen berkadar tetap, keutamaan pembayaran.",
      "Formula Dividen Syer Keutamaan: % Dividen x Modal Syer Keutamaan.",
      "Ekuiti Pemilik Syarikat Berhad: Modal Syer Diterbitkan + Untung Tertahan."
    ],
    "questions": [
      {
        "question": "Syarikat Perdana Bhd. mempunyai modal diterbitkan 2,000,000 unit 5% Syer Keutamaan RM2.00 sesyer dan 6,000,000 unit Syer Biasa RM0.50 sesyer. Pada akhir tahun, lembaga pengarah mengisytiharkan dividen syer keutamaan dibayar penuh dan dividen syer biasa dibayar 4 sen sesyer. Berapakah jumlah keseluruhan dividen yang dibayar oleh syarikat?",
        "options": [
          "RM440,000",
          "RM340,000",
          "RM200,000",
          "RM540,000"
        ],
        "answer": "RM440,000",
        "explanation": "Jalan kerja pengiraan dividen:\n1. Modal Syer Keutamaan = 2,000,000 x RM2.00 = RM4,000,000. Dividen Syer Keutamaan = 5% x RM4,000,000 = RM200,000.\n2. Dividen Syer Biasa = 6,000,000 unit x RM0.04 = RM240,000.\n3. Jumlah Keseluruhan Dividen = RM200,000 + RM240,000 = RM440,000."
      }
    ],
    "struktur": [
      {
        "soalan": "Syarikat Dinamik Bhd. ditubuhkan dengan modal berikut:\n- 1,500,000 unit 6% Syer Keutamaan pada harga RM2.00 sesyer\n- 4,000,000 unit Syer Biasa pada harga RM1.00 sesyer\nSemua syer telah dilanggan dan dibayar penuh pada 1 Mac 2025.\nBagi tahun kewangan berakhir 31 Disember 2025, syarikat mencatat Untung Bersih RM650,000.\nLembaga pengarah memutuskan:\n(i) Membayar dividen penuh bagi 6% Syer Keutamaan.\n(ii) Membayar dividen interim 2.5% kepada pemegang Syer Biasa pada bulan Julai.\n(iii) Mengisytiharkan dividen akhir 4 sen sesyer kepada pemegang Syer Biasa pada bulan Disember.\n(a) Hitungkan modal diterbitkan dan berbayar penuh bagi Syer Keutamaan dan Syer Biasa. [2 markah]\n(b) Hitungkan jumlah dividen yang diterima oleh pemegang Syer Keutamaan dan Syer Biasa bagi tahun 2025. [4 markah]\n(c) Hitungkan baki Untung Tertahan pada 31 Disember 2025. [2 markah]",
        "markah": "8 Markah",
        "jawapan": "(a) Jalan Kerja Pengiraan Modal Diterbitkan:\n1. Modal 6% Syer Keutamaan = 1,500,000 unit x RM2.00 = RM3,000,000 [1m]\n2. Modal Syer Biasa = 4,000,000 unit x RM1.00 = RM4,000,000 [1m]\n\n(b) Jalan Kerja Pengiraan Dividen:\n1. Dividen 6% Syer Keutamaan = 6% x RM3,000,000 = RM180,000 [1m]\n2. Dividen Interim Syer Biasa = 2.5% x RM4,000,000 = RM100,000 [1m]\n3. Dividen Akhir Syer Biasa = 4,000,000 unit x RM0.04 = RM160,000 [1m]\n4. Jumlah Dividen Syer Biasa = RM100,000 + RM160,000 = RM260,000 [1m]\n(Jumlah Dividen Keseluruhan = 180,000 + 260,000 = RM440,000)\n\n(c) Jalan Kerja Pengiraan Untung Tertahan pada 31 Disember 2025:\nUntung Tertahan = Untung Bersih (RM650,000) - Jumlah Dividen Dibayar (RM440,000) = RM210,000.00 [2m].",
        "panduanKoreksi": "2m untuk modal terbitan (RM3 juta & RM4 juta) + 4m untuk pengiraan dividen (Keutamaan RM180k, Biasa RM260k) + 2m untuk Untung Tertahan RM210,000."
      }
    ]
  },
  {
    "id": "akaun5-bab6",
    "babNum": "MODUL 15",
    "title": "Perakaunan untuk Kelab dan Persatuan",
    "synopsis": "Mempelajari perakaunan entiti bukan bermotifkan keuntungan, perbezaan antara penerimaan/pendapatan modal dengan hasil, penyelenggaraan Akaun Penerimaan dan Pembayaran, pengiraan Akaun Yuran ahli, penyediaan Akaun Pendapatan dan Perbelanjaan untuk mengira Lebihan atau Kurangan, serta Penyata Kedudukan Kewangan dan pengiraan Dana Terkumpul.",
    "notes": [
      {
        "subtopic": "15.1 Pengenalan Kelab dan Persatuan serta Klasifikasi Terimaan dan Bayaran",
        "summary": "Kelab dan persatuan ditubuhkan bukan untuk mencari keuntungan tetapi untuk menjaga kebajikan, sosial, sukan, dan rekreasi ahli-ahlinya.",
        "verbatim": [
          "Tujuan Penubuhan: Menyediakan perkhidmatan dan kemudahan rekreasi, sosial, budaya dan sukan kepada ahli tanpa bermotifkan keuntungan.",
          "Klasifikasi Terimaan dan Bayaran Kelab:\n  1. Penerimaan Hasil: Terimaan wang daripada aktiviti operasi harian kelab (cth: Yuran Ahli, Sewa Gelanggang, Yuran Pertandingan, Untung Restoran Kelab).\n  2. Penerimaan Modal: Terimaan wang yang bukan daripada operasi biasa dan menambahkan Dana Terkumpul (cth: Yuran Masuk / Pendaftaran, Derma Khas Membina Bangunan, Jualan Aset Bukan Semasa).\n  3. Perbelanjaan Hasil: Belanja operasi harian kelab untuk tempoh semasa (cth: Surat khabar, bayaran utiliti rumah kelab, upah pembersih, kos penyelenggaraan padang).\n  4. Perbelanjaan Modal: Pembelian aset bukan semasa yang memberi manfaat jangka panjang (cth: Membina gelanggang tenis, membeli perabot rumah kelab)."
        ],
        "explanation": "Penerimaan modal dan perbelanjaan modal dimasukkan ke dalam Penyata Kedudukan Kewangan, manakala penerimaan hasil dan perbelanjaan hasil dimasukkan ke dalam Akaun Pendapatan dan Perbelanjaan."
      },
      {
        "subtopic": "15.2 Akaun Yuran Ahli",
        "summary": "Yuran merupakan sumber pendapatan utama kelab. Akaun Yuran disediakan untuk menyelaraskan yuran belum terima dan yuran terdahulu bagi mengira Pendapatan Yuran sebenar.",
        "verbatim": [
          "JALAN KERJA FORMAT AKAUN YURAN LENGKAP:\n  Sebelah DEBIT:\n  - Yuran Belum Terima Awal (Baki Awal Aset - yuran tahun lalu yang belum dikutip)\n  - Pendapatan Yuran / Akaun Pendapatan & Perbelanjaan (Yuran sebenar bagi tahun semasa)\n  - Yuran Terdahulu Akhir (Baki Akhir Liabiliti - yuran tahun hadapan diterima awal)\n  Sebelah KREDIT:\n  - Yuran Terdahulu Awal (Baki Awal Liabiliti - yuran tahun ini yang telah dibayar tahun lalu)\n  - Bank / Tunai (Jumlah wang yuran yang diterima sepanjang tahun semasa)\n  - Yuran Lapuk (Yuran ahli yang dihapuskira)\n  - Yuran Belum Terima Akhir (Baki Akhir Aset - yuran tahun semasa yang masih belum dikutip)",
          "CONTOH PENGIRAAN AKAUN YURAN:\n  Maklumat Kelab Sukan Gemilang bagi tahun 2025:\n  - Yuran Belum Terima pada 1 Jan 2025: RM600\n  - Yuran Terdahulu pada 1 Jan 2025: RM400\n  - Penerimaan Yuran melalui Bank sepanjang 2025: RM18,500\n  - Yuran Belum Terima pada 31 Dis 2025: RM900\n  - Yuran Terdahulu pada 31 Dis 2025: RM500\n  Langkah 1: Jumlahkan Sebelah Kredit Akaun Yuran:\n    Kredit = Yuran Terdahulu Awal (400) + Bank Diterima (18,500) + Yuran Belum Terima Akhir (900) = RM19,800\n  Langkah 2: Tolak Item Debit:\n    Tolak Yuran Belum Terima Awal (600) dan Yuran Terdahulu Akhir (500) = RM1,100\n  Langkah 3: Hitung Pendapatan Yuran Sebenar (Pindah ke Akaun Pendapatan & Perbelanjaan):\n    Pendapatan Yuran = RM19,800 - RM1,100 = RM18,700!"
        ],
        "explanation": "Yuran terdahulu ialah liabiliti semasa kerana ahli telah membayar yuran bagi tempoh hadapan yang belum tiba."
      },
      {
        "subtopic": "15.3 Akaun Penerimaan dan Pembayaran serta Akaun Pendapatan dan Perbelanjaan",
        "summary": "Akaun Penerimaan dan Pembayaran merekodkan ringkasan Buku Tunai manakala Akaun Pendapatan dan Perbelanjaan mengira Lebihan atau Kurangan.",
        "verbatim": [
          "Akaun Penerimaan dan Pembayaran: Ringkasan buku tunai berasaskan asas tunai (semua penerimaan tunai/bank dicatat di debit; semua pembayaran dicatat di kredit tanpa mengira tempoh atau modal/hasil).",
          "Akaun Pendapatan dan Perbelanjaan: Berfungsi seperti Akaun Untung Rugi berasaskan asas akruan untuk mengira prestasi tahun semasa:\n  Jumlah Pendapatan Hasil - Jumlah Perbelanjaan Hasil = LEBIHAN / (KURANGAN)\n  - Jika Pendapatan > Perbelanjaan -> LEBIHAN (Surplus)\n  - Jika Perbelanjaan > Pendapatan -> KURANGAN (Defisit)",
          "CONTOH PENGIRAAN PENDAPATAN & PERBELANJAAN:\n  Pendapatan Hasil:\n  - Yuran Ahli = RM18,700\n  - Sewa Gelanggang = RM3,200\n  - Keuntungan Pertandingan Badminton = RM2,500\n  Jumlah Pendapatan Hasil = 18,700 + 3,200 + 2,500 = RM24,400\n  Perbelanjaan Hasil:\n  - Gaji Pekerja Rumah Kelab = RM9,600\n  - Kadar Bayaran = RM2,400\n  - Belanja Penyelenggaraan = RM1,800\n  - Susut Nilai Peralatan Sukan = RM1,500\n  Jumlah Perbelanjaan Hasil = 9,600 + 2,400 + 1,800 + 1,500 = RM15,300\n  Lebihan Pendapatan = RM24,400 - RM15,300 = RM9,100 (Lebihan dimasukkan ke Dana Terkumpul dalam PKK)!"
        ],
        "explanation": "Lebihan pendapatan meningkatkan Dana Terkumpul kelab, manakala kurangan pendapatan mengurangkan Dana Terkumpul."
      },
      {
        "subtopic": "15.4 Penyata Kedudukan Kewangan dan Dana Terkumpul",
        "summary": "Penyata Kedudukan Kewangan kelab menggantikan perkataan Ekuiti Pemilik dengan Dana Terkumpul.",
        "verbatim": [
          "JALAN KERJA PENGIRAAN DANA TERKUMPUL AWAL:\n  Formula: Dana Terkumpul Awal = Jumlah Aset Awal - Jumlah Liabiliti Awal\n  Formula Dana Terkumpul Akhir:\n  Dana Terkumpul Akhir = Dana Terkumpul Awal + Lebihan (atau - Kurangan) + Penerimaan Modal (cth: Derma Bangunan, Yuran Masuk)\n  Format Penyata Kedudukan Kewangan Kelab:\n  Aset Bukan Semasa + Modal Kerja (Aset Semasa - Liabiliti Semasa) = DANA TERKUMPUL"
        ],
        "explanation": "Dana terkumpul merupakan dana terkumpul bersih kelab yang dimiliki secara bersama oleh seluruh ahli kelab."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Kira Dana Terkumpul Awal",
        "desc": "Jumlah Aset Awal tolak Jumlah Liabiliti Awal pada 1 Januari.",
        "tip": "Pastikan Yuran Belum Terima Awal adalah Aset dan Yuran Terdahulu Awal adalah Liabiliti."
      },
      {
        "step": "Langkah 2",
        "title": "Sediakan Akaun Yuran",
        "desc": "Masukkan Yuran Diterima di Kredit dan selaraskan yuran belum terima dan terdahulu.",
        "tip": "Angka pengimbang debit ialah Pendapatan Yuran yang dipindah ke Akaun Pendapatan & Perbelanjaan."
      },
      {
        "step": "Langkah 3",
        "title": "Sediakan Akaun Pendapatan dan Perbelanjaan",
        "desc": "Pendapatan Hasil tolak Perbelanjaan Hasil = Lebihan / (Kurangan).",
        "tip": "Jangan masukkan penerimaan modal (derma bina bangunan) dan perbelanjaan modal (beli aset)."
      },
      {
        "step": "Langkah 4",
        "title": "Sediakan Penyata Kedudukan Kewangan",
        "desc": "Dana Terkumpul Akhir = Dana Terkumpul Awal + Lebihan + Yuran Masuk.",
        "tip": "Semak baki akhir bank daripada Akaun Penerimaan dan Pembayaran."
      }
    ],
    "keypoints": [
      "Bukan Bermotif Untung: Matlamat kelab adalah menjaga kebajikan ahli, bukan mencari keuntungan.",
      "Akaun Penerimaan dan Pembayaran: Ringkasan buku tunai asas tunai.",
      "Akaun Pendapatan dan Perbelanjaan: Menghitung Lebihan atau Kurangan berasaskan asas akruan.",
      "Akaun Yuran: Menyelaraskan yuran belum terima (aset) dan yuran terdahulu (liabiliti).",
      "Dana Terkumpul: Pengganti ekuiti pemilik (Aset tolak Liabiliti)."
    ],
    "questions": [
      {
        "question": "Diberi Yuran Belum Terima awal RM400, Yuran Terdahulu awal RM250, Jumlah Yuran diterima melalui bank sepanjang tahun RM12,800, Yuran Belum Terima akhir RM550, dan Yuran Terdahulu akhir RM300. Berapakah Pendapatan Yuran bagi tahun semasa?",
        "options": [
          "RM12,900",
          "RM12,800",
          "RM12,700",
          "RM13,100"
        ],
        "answer": "RM12,900",
        "explanation": "Jalan kerja pengiraan Akaun Yuran:\nSebelah Kredit = Yuran Terdahulu Awal (250) + Bank Diterima (12,800) + Yuran Belum Terima Akhir (550) = RM13,600.\nTolak Sebelah Debit = Yuran Belum Terima Awal (400) + Yuran Terdahulu Akhir (300) = RM700.\nPendapatan Yuran Sebenar = RM13,600 - RM700 = RM12,900."
      }
    ],
    "struktur": [
      {
        "soalan": "Maklumat berikut diperoleh daripada Kelab Rekreasi Damai pada 1 Januari 2025:\nRumah Kelab RM120,000; Peralatan Sukan RM24,000; Bank RM14,500; Yuran Belum Terima RM800; Yuran Terdahulu RM500; Kadar Bayaran Terakru RM600.\nRingkasan Terimaan dan Bayaran bagi tahun 2025:\n- Penerimaan: Yuran Ahli RM28,400; Sewa Dewan RM4,200; Yuran Masuk RM1,500; Derma Pembinaan Kolam Renang RM20,000.\n- Pembayaran: Gaji Pekerja RM14,400; Kadar Bayaran RM3,200; Penyelenggaraan Rumah Kelab RM2,800; Beli Peralatan Sukan Baharu RM6,000.\nMaklumat Tambahan pada 31 Disember 2025:\n(i) Yuran Belum Terima RM1,100 dan Yuran Terdahulu RM700.\n(ii) Peralatan sukan disusutnilaikan 10% setahun atas baki akhir.\n(iii) Yuran masuk dianggap sebagai Penerimaan Hasil.\n(a) Hitungkan Dana Terkumpul Awal pada 1 Januari 2025. [3 markah]\n(b) Hitungkan Pendapatan Yuran bagi tahun 2025. [2 markah]\n(c) Sediakan Akaun Pendapatan dan Perbelanjaan bagi tahun berakhir 31 Disember 2025. [4 markah]",
        "markah": "9 Markah",
        "jawapan": "(a) Jalan Kerja Pengiraan Dana Terkumpul Awal (1 Jan 2025):\n1. Jumlah Aset Awal = Rumah Kelab (120,000) + Peralatan Sukan (24,000) + Bank (14,500) + Yuran Belum Terima (800) = RM159,300 [1m]\n2. Jumlah Liabiliti Awal = Yuran Terdahulu (500) + Kadar Bayaran Terakru (600) = RM1,100 [1m]\n3. Dana Terkumpul Awal = RM159,300 - RM1,100 = RM158,200 [1m]\n\n(b) Jalan Kerja Pengiraan Pendapatan Yuran 2025:\nPendapatan Yuran = Bank Diterima (28,400) + Yuran Terdahulu Awal (500) + Yuran Belum Terima Akhir (1,100) - Yuran Belum Terima Awal (800) - Yuran Terdahulu Akhir (700)\n= 30,000 - 1,500 = RM28,500 [2m]\n\n(c) Jalan Kerja Akaun Pendapatan & Perbelanjaan 2025:\nPendapatan Hasil:\n- Yuran Ahli: RM28,500\n- Sewa Dewan: RM4,200\n- Yuran Masuk: RM1,500\nJumlah Pendapatan = RM34,200 [1m]\n(Nota: Derma Pembinaan Kolam Renang RM20,000 adalah Penerimaan Modal, masuk Dana Khas dalam PKK)\nPerbelanjaan Hasil:\n- Gaji Pekerja: RM14,400\n- Kadar Bayaran: RM3,200 + Terakru Awal diselaraskan = RM3,200 (atau RM2,600)\n- Penyelenggaraan: RM2,800\n- Susut Nilai Peralatan = 10% x (24,000 + 6,000) = RM3,000 [1m]\nJumlah Perbelanjaan = RM23,400 [1m]\nLebihan Pendapatan = RM34,200 - RM23,400 = RM10,800 [1m].",
        "panduanKoreksi": "3m untuk Dana Terkumpul Awal RM158,200 + 2m untuk Pendapatan Yuran RM28,500 + 4m untuk Akaun Pendapatan & Perbelanjaan lengkap (Lebihan RM10,800)."
      }
    ]
  },
  {
    "id": "akaun5-bab7",
    "babNum": "MODUL 16",
    "title": "Perakaunan Kos",
    "synopsis": "Menguasai perakaunan entiti pengilangan merangkumi klasifikasi komponen kos pengeluaran (Bahan Langsung, Buruh Langsung, Belanja Langsung, Kos Prima, Kos Overhed, dan Kerja Dalam Proses), penyediaan Penyata Kos Pengeluaran dan Penyata Pendapatan Pengilangan, serta Analisis Titik Pulang Modal (TPM), Margin Caruman, Sasaran Untung, dan Graf TPM.",
    "notes": [
      {
        "subtopic": "16.1 Komponen Kos Pengeluaran dan Kerja Dalam Proses",
        "summary": "Perakaunan kos mengumpul dan mengawal kos pengeluaran barang siap di kilang yang dibahagikan kepada Kos Prima dan Kos Overhed.",
        "verbatim": [
          "Definisi Tiga Elemen Kos Pengeluaran:\n  1. Kos Bahan Langsung: Bahan mentah utama yang menjadi sebahagian daripada barang siap (cth: kayu untuk membuat meja, kain untuk membuat baju, tepung untuk roti).\n     - Kos Bahan Langsung Digunakan = Inventori Awal Bahan Langsung + Belian Bahan Langsung + Kos Atas Belian Bahan Langsung - Inventori Akhir Bahan Langsung.\n  2. Kos Buruh Langsung: Upah atau gaji yang dibayar kepada pekerja kilang yang terlibat secara langsung dalam mengubah bahan mentah kepada barang siap (cth: upah tukang kayu, upah tukang jahit).\n  3. Belanja Langsung: Perbelanjaan khas yang dibayar khusus untuk mengeluarkan sesuatu produk (cth: royalti reka bentuk, paten, sewa acuan khas).\n  *KOS PRIMA = Kos Bahan Langsung Digunakan + Kos Buruh Langsung + Belanja Langsung!",
          "4. Kos Overhed (Kos Tak Langsung Kilang): Semua kos operasi kilang selain kos langsung yang diperlukan untuk menyokong proses pengeluaran (cth: sewa kilang, gaji penyelia kilang, susut nilai mesin kilang, kadar bayaran kilang, insurans kilang, bahan tak langsung seperti minyak pelincir mesin dan paku).",
          "5. Kerja Dalam Proses (KDP): Barang yang masih berada dalam proses pembuatan pada tarikh imbangan dan belum siap sepenuhnya:\n  - Kerja Dalam Proses Awal: Ditambah kepada kos pengeluaran.\n  - Kerja Dalam Proses Akhir: Ditolak daripada kos pengeluaran."
        ],
        "explanation": "Gaji kerani pejabat dan komisen jurujual BUKAN kos overhed kilang tetapi belanja pentadbiran dan jualan di Akaun Untung Rugi."
      },
      {
        "subtopic": "16.2 Penyata Kos Pengeluaran dan Penyata Pendapatan Pengilangan",
        "summary": "Penyata Kos Pengeluaran menghitung jumlah kos yang terlibat untuk mengeluarkan barang siap kilang sepanjang tempoh perakaunan.",
        "verbatim": [
          "JALAN KERJA FORMAT LENGKAP PENYATA KOS PENGELUARAN:\n  Kos Bahan Langsung:\n  Inventori Awal Bahan Langsung\n  (+) Belian Bahan Langsung - Pulangan Belian Bahan Langsung\n  (+) Kos Atas Belian Bahan Langsung (Angkutan Masuk + Duti Import)\n  (-) Inventori Akhir Bahan Langsung\n  = KOS BAHAN LANGSUNG DIGUNAKAN\n  (+) Kos Buruh Langsung (Upah Operator Kilang)\n  (+) Belanja Langsung (Royalti)\n  = KOS PRIMA\n  (+) Kos Overhed (Sewa Kilang + Gaji Penyelia + Susut Nilai Mesin + Kadar Bayaran Kilang)\n  = JUMLAH KOS KILANG\n  (+) Kerja Dalam Proses Awal\n  (-) Kerja Dalam Proses Akhir\n  = KOS PENGELUARAN BARANG SIAP! (Dipindahkan ke Akaun Perdagangan)",
          "CONTOH PENGIRAAN LENGKAP PENYATA KOS PENGELUARAN:\n  Kilang Biskut Sedap:\n  Inventori Awal Bahan Mentah = RM12,000; Belian Bahan Mentah = RM80,000; Angkutan Masuk Bahan = RM3,000; Inventori Akhir Bahan Mentah = RM15,000;\n  Upah Operator Pengeluaran = RM45,000; Paten Acuan Biskut = RM5,000;\n  Sewa Kilang = RM18,000; Gaji Pengurus Kilang = RM24,000; Susut Nilai Mesin Kilang = RM8,000; Elektrik Kilang = RM10,000;\n  Kerja Dalam Proses Awal = RM7,000; Kerja Dalam Proses Akhir = RM9,000.\n  Langkah 1: Kos Bahan Mentah Digunakan = 12,000 + 80,000 + 3,000 - 15,000 = RM80,000\n  Langkah 2: Kos Prima = Bahan (80,000) + Buruh (45,000) + Paten (5,000) = RM130,000\n  Langkah 3: Jumlah Kos Overhed = 18,000 + 24,000 + 8,000 + 10,000 = RM60,000\n  Langkah 4: Jumlah Kos Kilang = Kos Prima (130,000) + Overhed (60,000) = RM190,000\n  Langkah 5: Kos Pengeluaran = Kos Kilang (190,000) + KDP Awal (7,000) - KDP Akhir (9,000) = RM188,000!"
        ],
        "explanation": "Kos pengeluaran barang siap (RM188,000) akan menggantikan fungsi 'Belian' dalam Akaun Perdagangan untuk menghitung Kos Jualan Barang Siap."
      },
      {
        "subtopic": "16.3 Analisis Titik Pulang Modal (TPM)",
        "summary": "Titik Pulang Modal ialah satu tahap pengeluaran di mana jumlah hasil jualan adalah tepat sama dengan jumlah kos pengeluaran, iaitu perniagaan tidak mendapat untung dan tidak mengalami rugi (Untung = 0).",
        "verbatim": [
          "Konsep Kos Tetap vs Kos Berubah:\n  - Kos Tetap (FC): Kos yang malar pada sebarang tahap output (cth: sewa kilang, insurans kilang).\n  - Kos Berubah (VC): Kos yang berubah secara terus mengikut kuantiti pengeluaran (cth: bahan langsung, upah langsung seunit).\n  - Kos Berubah Seunit (AVC) = Kos Berubah / Kuantiti Unit.",
          "JALAN KERJA PENGIRAAN LENGKAP ANALISIS TITIK PULANG MODAL:\n  1. Margin Caruman Seunit (Contribution Margin):\n     - Formula: Margin Caruman Seunit = Harga Jualan Seunit - Kos Berubah Seunit  (P - VC)\n     (Maksud: Jumlah baki jualan seunit yang menyumbang untuk menampung kos tetap dan menjana untung).\n\n  2. Titik Pulang Modal dalam Kuantiti Unit:\n     - Formula: TPM (Unit) = Jumlah Kos Tetap / Margin Caruman Seunit\n     - Formula: TPM (Unit) = FC / (P - VC)\n\n  3. Titik Pulang Modal dalam Ringgit Malaysia (RM):\n     - Formula A: TPM (RM) = TPM (Unit) x Harga Jualan Seunit\n     - Formula B: TPM (RM) = Kos Tetap / Nisbah Margin Caruman  [di mana Nisbah MC = (P - VC) / P]\n\n  4. Pengeluaran untuk Mencapai Sasaran Keuntungan:\n     - Formula: Kuantiti Pengeluaran (Unit) = (Jumlah Kos Tetap + Untung Sasaran) / Margin Caruman Seunit\n\n  CONTOH PENGIRAAN LENGKAP TITIK PULANG MODAL:\n  Syarikat Kreatif mengeluarkan beg sekolah dengan maklumat berikut:\n  - Harga Jualan Seunit (P) = RM50.00\n  - Kos Berubah Seunit (VC) = RM30.00\n  - Jumlah Kos Tetap (FC) = RM60,000 setahun\n  Langkah 1: Margin Caruman Seunit = RM50.00 - RM30.00 = RM20.00 seunit\n  Langkah 2: TPM dalam Unit = Kos Tetap / Margin Caruman = RM60,000 / RM20.00 = 3,000 unit beg\n  Langkah 3: TPM dalam RM = 3,000 unit x RM50.00 = RM150,000.00\n  *Bukti Semakan:* Pada 3,000 unit: TR = 3,000 x 50 = RM150,000 | TC = FC (60,000) + VC (3,000 x 30 = 90,000) = RM150,000. TR = TC -> Untung = 0!\n  Langkah 4: Jika syarikat mensasarkan Untung Bersih RM40,000 setahun:\n    Unit Diperlukan = (Kos Tetap + Untung Sasaran) / Margin Caruman\n    = (RM60,000 + RM40,000) / RM20.00 = RM100,000 / RM20.00 = 5,000 unit beg!",
          "Graf Titik Pulang Modal: Graf memplot paksi menegak (Kos & Hasil dalam RM) dan paksi mendatar (Kuantiti Output dalam unit). Titik persilangan antara Keluk Jumlah Hasil (TR) dengan Keluk Jumlah Kos (TC) ialah TITIK PULANG MODAL. Kawasan di bawah TPM ialah Kawasan Rugi; kawasan di atas TPM ialah Kawasan Untung."
        ],
        "explanation": "Analisis TPM membantu pengurus menentukan harga jualan minimum, merancang volum pengeluaran, dan mengira margin keselamatan bagi menghadapi risiko kemerosotan pasaran."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Kira Kos Bahan Langsung Digunakan",
        "desc": "Inventori Awal Bahan + Belian Bahan Bersih + Angkutan Masuk - Inventori Akhir Bahan.",
        "tip": "Pastikan hanya mengambil bahan mentah langsung kilang."
      },
      {
        "step": "Langkah 2",
        "title": "Kira Kos Prima",
        "desc": "Kos Prima = Bahan Langsung Digunakan + Buruh Langsung + Belanja Langsung.",
        "tip": "Gaji pekerja pengeluaran adalah buruh langsung; gaji pengurus kilang adalah overhed."
      },
      {
        "step": "Langkah 3",
        "title": "Kira Kos Pengeluaran Barang Siap",
        "desc": "Kos Prima + Kos Overhed + Kerja Dalam Proses Awal - Kerja Dalam Proses Akhir.",
        "tip": "Kos pengeluaran ini dipindahkan ke Akaun Perdagangan."
      },
      {
        "step": "Langkah 4",
        "title": "Kira Titik Pulang Modal",
        "desc": "Margin Caruman = P - VC seunit. TPM (Unit) = Kos Tetap / Margin Caruman. TPM (RM) = TPM (Unit) x P.",
        "tip": "Untuk untung sasaran: (Kos Tetap + Untung Sasaran) / Margin Caruman seunit."
      }
    ],
    "keypoints": [
      "Kos Prima: Kos Bahan Langsung + Kos Buruh Langsung + Belanja Langsung.",
      "Kos Overhed: Semua kos tak langsung kilang (sewa, penyelia, elektrik kilang, susut nilai mesin).",
      "Kos Pengeluaran: Kos Prima + Kos Overhed + KDP Awal - KDP Akhir.",
      "Margin Caruman Seunit: Harga Jualan seunit tolak Kos Berubah seunit (P - VC).",
      "Titik Pulang Modal (Unit): Kos Tetap / Margin Caruman seunit (TR = TC, Untung = 0).",
      "Sasaran Untung (Unit): (Kos Tetap + Untung Sasaran) / Margin Caruman seunit."
    ],
    "questions": [
      {
        "question": "Diberi Kos Tetap sebuah kilang ialah RM48,000, Harga Jualan seunit ialah RM25.00, dan Kos Berubah seunit ialah RM13.00. Berapakah kuantiti Titik Pulang Modal (TPM) bagi kilang tersebut?",
        "options": [
          "4,000 unit",
          "3,692 unit",
          "2,000 unit",
          "6,000 unit"
        ],
        "answer": "4,000 unit",
        "explanation": "Jalan kerja pengiraan TPM:\n1. Margin Caruman seunit = Harga Jualan (RM25.00) - Kos Berubah (RM13.00) = RM12.00 seunit.\n2. TPM (Unit) = Kos Tetap / Margin Caruman seunit = RM48,000 / RM12.00 = 4,000 unit."
      },
      {
        "question": "Berdasarkan soalan di atas, sekiranya kilang tersebut ingin memperoleh keuntungan sasaran sebanyak RM24,000, berapakah bilangan unit yang perlu dikeluarkan dan dijual?",
        "options": [
          "6,000 unit",
          "5,000 unit",
          "7,500 unit",
          "8,000 unit"
        ],
        "answer": "6,000 unit",
        "explanation": "Jalan kerja pengiraan unit untuk untung sasaran:\nUnit Pengeluaran = (Kos Tetap + Untung Sasaran) / Margin Caruman seunit\n= (RM48,000 + RM24,000) / RM12.00 = RM72,000 / RM12.00 = 6,000 unit."
      }
    ],
    "struktur": [
      {
        "soalan": "Kilang Pakaian Elegan mengeluarkan sejenis kemeja batik eksklusif. Maklumat kos dan operasi bagi tahun 2025 adalah seperti berikut:\n- Kos Tetap Tahunan: RM90,000\n- Harga Jualan Sehelai Kemeja: RM80.00\n- Kos Kain Batik dan Butang sehelai: RM32.00\n- Upah Menjahit sehelai kemeja: RM15.00\n- Belanja Pembungkusan sehelai: RM3.00\nHitungkan:\n(a) Kos Berubah sehelai kemeja dan Margin Caruman sehelai. [2 markah]\n(b) Titik Pulang Modal (TPM) dalam unit dan dalam Ringgit Malaysia (RM). [3 markah]\n(c) Bilangan helai kemeja yang perlu dikeluarkan sekiranya kilang mensasarkan keuntungan sebanyak RM60,000. [2 markah]\n(d) Nyatakan dua andaian yang digunakan dalam analisis Titik Pulang Modal. [2 markah]",
        "markah": "9 Markah",
        "jawapan": "(a) Jalan Kerja Pengiraan Kos Berubah & Margin Caruman:\n1. Kos Berubah Sehelai (VC) = Bahan Batik (RM32) + Upah Jahit (RM15) + Pembungkusan (RM3) = RM50.00 sehelai [1m]\n2. Margin Caruman Sehelai = Harga Jualan (RM80.00) - Kos Berubah (RM50.00) = RM30.00 sehelai [1m]\n\n(b) Jalan Kerja Pengiraan Titik Pulang Modal:\n1. TPM (Unit) = Kos Tetap / Margin Caruman = RM90,000 / RM30.00 = 3,000 helai [2m]\n2. TPM (RM) = 3,000 helai x RM80.00 = RM240,000.00 [1m]\n\n(c) Jalan Kerja Pengiraan untuk Untung Sasaran RM60,000:\nUnit Pengeluaran = (Kos Tetap + Untung Sasaran) / Margin Caruman\n= (RM90,000 + RM60,000) / RM30.00 = RM150,000 / RM30.00 = 5,000 helai kemeja [2m]\n\n(d) Dua Andaian Analisis Titik Pulang Modal:\n1. Harga jualan seunit adalah malar pada semua tingkat output [1m].\n2. Kos pengeluaran dapat dibahagikan dengan tepat kepada kos tetap dan kos berubah [1m].",
        "panduanKoreksi": "2m untuk VC (RM50) dan Margin Caruman (RM30) + 3m untuk TPM (3,000 unit dan RM240,000) + 2m untuk unit sasaran (5,000 helai) + 2m untuk 2 andaian TPM."
      }
    ]
  }
];
