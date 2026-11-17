/* ==========================================================================
   DATA PRINSIP PERAKAUNAN TINGKATAN 4 (KSSM SPM) - 100% BUKU TEKS
   Sumber Rujukan: https://online.fliphtml5.com/pixbj/tfvw/
   Jumlah Modul: 9 Modul Lengkap | Jumlah Subtopik: 33 Subtopik Lengkap
   Fokus Utama: Jalan Kerja Pengiraan Lengkap (Persamaan Perakaunan, Diskaun,
                Panjar Tunai Runcit, Lejar, Akaun Kawalan, Kos Jualan & Untung,
                Pelarasan Akruan, Susut Nilai, dan Pembetulan Kesilapan)
   ========================================================================== */

const PERAKAUNAN_DATA = [
  {
    "id": "akaun-bab1",
    "babNum": "MODUL 1",
    "title": "Pengenalan kepada Perakaunan",
    "synopsis": "Mendedahkan asas perakaunan, kitaran perakaunan yang lengkap, subbidang perakaunan, kerjaya dan badan profesional, andaian, prinsip serta batasan dalam perakaunan, dan ciri entiti perniagaan.",
    "notes": [
      {
        "subtopic": "1.1 Perakaunan, Subbidang Perakaunan, Kerjaya dan Badan Profesional",
        "summary": "Perakaunan merupakan proses merekod, mengelas, meringkas, mentafsir dan melaporkan maklumat kewangan. Terdapat 4 subbidang utama dan pelbagai badan profesional perakaunan yang mengawal selia profesion.",
        "verbatim": [
          "Maksud Simpan Kira: Proses merekodkan urus niaga perniagaan secara tepat dan bersistem berdasarkan sistem catatan bergu.",
          "Maksud Perakaunan: Meliputi proses mengumpul, merekod, mengelas, meringkaskan, menganalisis, mentafsir, dan melaporkan maklumat kewangan sesebuah entiti kepada pihak berkepentingan untuk pembuatan keputusan.",
          "Kitaran Perakaunan (8 Peringkat Lengkap):\n  1. Dokumen Perniagaan (Sumber maklumat)\n  2. Buku Catatan Pertama (Jurnal, Buku Tunai, Buku Tunai Runcit)\n  3. Lejar (Catatan bergu)\n  4. Imbangan Duga (Menguji ketepatan catatan)\n  5. Pelarasan pada tarikh imbangan\n  6. Imbangan Duga Terselaras\n  7. Penyata Kewangan (Penyata Pendapatan & Penyata Kedudukan Kewangan)\n  8. Catatan Penutupan",
          "Empat Subbidang Perakaunan: (1) Perakaunan Kewangan; (2) Perakaunan Pengurusan; (3) Pengauditan; (4) Percukaian.",
          "Badan Profesional & Kawal Selia di Malaysia:\n  - Institut Akauntan Malaysia (MIA): Mengawal selia profesion perakaunan dan pendaftaran akauntan di Malaysia.\n  - Lembaga Piawaian Perakaunan Malaysia (MASB): Menggubal dan menerbitkan piawaian perakaunan entiti (MFRS / MPERS).\n  - Institut Akauntan Awam Bertauliah Malaysia (MICPA): Melatih dan menganjurkan peperiksaan profesional akauntan berkanun."
        ],
        "explanation": "Kitaran perakaunan berulang setiap tempoh perakaunan bermula daripada dokumen sumber hingga penyediaan laporan kewangan tahunan."
      },
      {
        "subtopic": "1.2 Sejarah Perakaunan dan Perkembangannya",
        "summary": "Sistem perakaunan berkembang daripada rekod tanah liat di Babylonia purba kepada sistem catatan bergu yang diasaskan oleh Luca Pacioli pada tahun 1494, dan kini menggunakan perisian berkomputer moden.",
        "verbatim": [
          "Bapa Perakaunan: Luca Pacioli, seorang rahib matematik Itali yang menerbitkan buku 'Summa de Arithmetica, Geometria, Proportioni et Proportionalita' pada tahun 1494 yang menghuraikan kaedah catatan bergu Venice.",
          "Evolusi Perakaunan: Dari catatan tunggal purba -> Sistem Catatan Bergu -> Era Revolusi Perindustrian (perakaunan kos pengilangan) -> Era Perisian Perakaunan Komputer & Cloud Accounting (cth: UBS, AutoCount, SAP, Xero)."
        ],
        "explanation": "Sistem catatan bergu memastikan setiap urus niaga memberikan kesan dua kali (debit dan kredit) dengan jumlah nilai yang sama."
      },
      {
        "subtopic": "1.3 Penyata Kewangan dan Pengguna Penyata Kewangan",
        "summary": "Penyata kewangan terdiri daripada Penyata Pendapatan dan Penyata Kedudukan Kewangan yang digunakan oleh pihak dalaman dan luaran untuk membuat keputusan ekonomi.",
        "verbatim": [
          "Dua Penyata Kewangan Utama:\n  1. Penyata Pendapatan (Akaun Perdagangan dan Untung Rugi): Mengukur prestasi keuntungan perniagaan bagi suatu tempoh perakaunan (Untung Kasar & Untung Bersih).\n  2. Penyata Kedudukan Kewangan (PKK / Kunci Kira-Kira): Menunjukkan kedudukan kewangan entiti pada tarikh tertentu (Aset, Liabiliti dan Ekuiti Pemilik).",
          "Pengguna Penyata Kewangan:\n  - Pengguna Dalaman: Pemilik perniagaan (menilai keuntungan), pihak pengurusan (merancang operasi), pekerja (jaminan pekerjaan dan kenaikan gaji).\n  - Pengguna Luaran: Bank/Pemberi pinjaman (keupayaan membayar hutang), pembekal (kelayakan kredit), Lembaga Hasil Dalam Negeri (taksiran cukai pendapatan), pelabur/bakal rakan kongsi (pulangan pelaburan)."
        ],
        "explanation": "Ciri kualitatif penyata kewangan merangkumi kebolehfahaman, kerelevanan, kebolehpercayaan, dan kebolehbandingan."
      },
      {
        "subtopic": "1.4 Andaian, Prinsip dan Batasan dalam Perakaunan",
        "summary": "Amalan perakaunan dipandu oleh Konsep Perakaunan Diterima Umum (GAAP) yang terdiri daripada andaian, prinsip, dan batasan perakaunan.",
        "verbatim": [
          "Empat Andaian Perakaunan:\n  1. Entiti Berasingan: Perniagaan dianggap sebagai entiti yang berasingan daripada pemiliknya. Segala urusan peribadi pemilik (cth: ambilan tunai peribadi) tidak boleh dicampuradukkan dengan perniagaan.\n  2. Usaha Berterusan: Perniagaan diandaikan beroperasi untuk tempoh masa yang tidak terhad dan tidak dibubarkan dalam jangka pendek.\n  3. Wang Sebagai Ukuran: Semua urus niaga mesti dinyatakan dan direkodkan dalam unit ukuran wang yang stabil (Ringgit Malaysia).\n  4. Tempoh Perakaunan: Jangka hayat perniagaan dibahagikan kepada tempoh masa yang tetap dan sama panjang (lazimnya 12 bulan) untuk mengukur prestasi kewangan.",
          "Tiga Prinsip Perakaunan:\n  1. Ketekalan: Kaedah perakaunan yang dipilih (cth: kaedah susut nilai) mesti digunakan secara berterusan dari satu tempoh ke tempoh berikutnya untuk membolehkan perbandingan.\n  2. Prinsip Kos (Kos Sejarah): Aset perniagaan mesti direkodkan pada harga kos belian asal dan bukannya harga pasaran semasa.\n  3. Pengiktirafan Hasil dan Belanja (Asas Akruan): Hasil diiktiraf apabila diperoleh (bukan bila tunai diterima) dan belanja diiktiraf apabila berlaku (bukan bila tunai dibayar).",
          "Batasan Perakaunan:\n  - Kos Manfaat: Manfaat yang diperoleh daripada penyediaan sesuatu maklumat perakaunan mestilah melebihi kos untuk menyediakannya."
        ],
        "explanation": "Prinsip kos sejarah memastikan nilai aset yang direkodkan disokong oleh bukti dokumen perniagaan yang objektif dan boleh disahkan."
      },
      {
        "subtopic": "1.5 Entiti Perniagaan",
        "summary": "Empat bentuk entiti pemilikan perniagaan ialah Milikan Tunggal, Perkongsian, Syarikat Berhad, dan Koperasi yang mempunyai ciri perundangan dan modal tersendiri.",
        "verbatim": [
          "Perbandingan 4 Entiti Perniagaan:\n  1. Milikan Tunggal: Dimiliki oleh 1 orang, modal peribadi/pinjaman, liabiliti tidak terhad, untung dinikmati sendiri.\n  2. Perkongsian: Dimiliki oleh 2 hingga 20 orang pekongsi (perkongsian am) atau hingga 50 orang (perkongsian profesional), liabiliti tidak terhad, untung/rugi diagihkan mengikut ikatan perkongsian.\n  3. Syarikat Sendirian Berhad (Sdn. Bhd.): Dimiliki oleh 1 hingga 50 pemegang syer, modal terbitan syer, liabiliti terhad kepada modal syer yang dilanggan, entiti sah berasingan.\n  4. Koperasi: Dimiliki oleh sekurang-kurangnya 50 orang anggota, modal yuran anggota, liabiliti terhad, faedah dividen dan rebat."
        ],
        "explanation": "Liabiliti tidak terhad bermaksud sekiranya perniagaan muflis, harta peribadi pemilik boleh disita untuk melunaskan baki hutang perniagaan."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Fahami Urutan Kitaran Perakaunan",
        "desc": "Ingat urutan 8 peringkat: Dokumen -> Buku Catatan Pertama -> Lejar -> Imbangan Duga -> Pelarasan -> Imbangan Duga Terselaras -> Penyata Kewangan -> Penutupan.",
        "tip": "Kitaran ini sentiasa bermula dengan Dokumen Sumber dan berakhir dengan Penutupan Akaun."
      },
      {
        "step": "Langkah 2",
        "title": "Bezakan 4 Subbidang",
        "desc": "Perakaunan Kewangan (penyata untuk pihak luar), Pengurusan (analisis dalaman), Pengauditan (pemeriksaan bebas), Percukaian (pematuhan cukai LHDN).",
        "tip": "Pengauditan dijalankan oleh juruaudit bertauliah untuk memberi pendapat benar dan saksama."
      },
      {
        "step": "Langkah 3",
        "title": "Terapkan Andaian & Prinsip",
        "desc": "Padankan situasi urus niaga dengan konsep: Ambilan peribadi (Entiti Berasingan), Mesin direkod harga beli (Prinsip Kos), Susut nilai kaedah sama (Ketekalan).",
        "tip": "Soalan objektif SPM kerap menguji senario perniagaan dan meminta murid menamakan prinsip yang dipatuhi atau dilanggar."
      },
      {
        "step": "Langkah 4",
        "title": "Kenal Pasti Entiti Perniagaan",
        "desc": "Tentukan jenis liabiliti: Milikan tunggal & perkongsian am (Liabiliti tidak terhad); Syarikat berhad & koperasi (Liabiliti terhad).",
        "tip": "Liabiliti terhad melindungi aset peribadi pemilik daripada tuntutan pemiutang."
      }
    ],
    "keypoints": [
      "Simpan Kira vs Perakaunan: Simpan kira merekod data; perakaunan mentafsir, menganalisis dan melaporkan maklumat kewangan.",
      "Kitaran Perakaunan: Dokumen -> BCP -> Lejar -> Imbangan Duga -> Pelarasan -> ID Terselaras -> Penyata Kewangan -> Penutupan.",
      "Badan Perakaunan Malaysia: MIA (kawal selia profesion), MASB (piawaian MFRS), MICPA (latihan akauntan bertauliah).",
      "Andaian Perakaunan: Entiti Berasingan, Usaha Berterusan, Wang Sebagai Ukuran, Tempoh Perakaunan.",
      "Prinsip Perakaunan: Ketekalan, Prinsip Kos (Kos Sejarah), Pengiktirafan Hasil dan Belanja (Asas Akruan).",
      "Liabiliti Terhad: Liabiliti pemegang syer terhad kepada jumlah modal yang dilaburkan sahaja."
    ],
    "questions": [
      {
        "question": "Encik Hafiz mengambil wang tunai perniagaan sebanyak RM300 untuk membayar yuran tuisyen anaknya. Beliau merekodkan transaksi tersebut sebagai Ambilan dan bukannya Belanja Perniagaan. Apakah andaian perakaunan yang dipatuhi oleh Encik Hafiz?",
        "options": [
          "Entiti Berasingan",
          "Usaha Berterusan",
          "Wang Sebagai Ukuran",
          "Ketekalan"
        ],
        "answer": "Entiti Berasingan",
        "explanation": "Andaian Entiti Berasingan menetapkan bahawa urusan kewangan peribadi pemilik mesti diasingkan daripada urusan perniagaan. Pengambilan tunai untuk kegunaan peribadi direkodkan sebagai Ambilan."
      },
      {
        "question": "Perniagaan Maju Jaya merekodkan sebuah lori yang dibeli dengan harga RM80,000 pada harga kos tersebut, walaupun harga pasaran lori terpakai tersebut kini bernilai RM65,000. Apakah prinsip perakaunan yang diaplikasikan?",
        "options": [
          "Prinsip Kos",
          "Ketekalan",
          "Pengiktirafan Hasil dan Belanja",
          "Entiti Berasingan"
        ],
        "answer": "Prinsip Kos",
        "explanation": "Prinsip Kos (Kos Sejarah) menetapkan bahawa sesuatu aset bukan semasa hendaklah direkodkan pada harga kos belian asal sebagaimana yang tercatat dalam dokumen sumber, bukan nilai pasaran semasa."
      }
    ],
    "struktur": [
      {
        "soalan": "Nyatakan prinsip atau andaian perakaunan yang dipatuhi bagi setiap situasi berikut:\n(a) Perniagaan mengandaikan operasi perniagaan akan terus beroperasi untuk tempoh masa yang berterusan dan tidak akan dibubarkan dalam masa terdekat. [1 markah]\n(b) Puan Aminah menggunakan kaedah baki berkurangan secara berterusan selama lima tahun berturut-turut untuk mengira susut nilai kenderaan syarikatnya. [1 markah]\n(c) Encik Johan membayar bil elektrik kediaman peribadinya menggunakan cek syarikat dan mendebitkan Akaun Ambilan. [1 markah]\n(d) Gaji pekerja bulan Disember berjumlah RM4,000 yang belum dibayar telah direkodkan sebagai belanja bagi tahun kewangan tersebut. [1 markah]",
        "markah": "4 Markah",
        "jawapan": "(a) Andaian Usaha Berterusan [1m]\n(b) Prinsip Ketekalan [1m]\n(c) Andaian Entiti Berasingan [1m]\n(d) Prinsip Pengiktirafan Hasil dan Belanja (Asas Akruan) [1m]",
        "panduanKoreksi": "1 markah bagi setiap jawapan tepat prinsip/andaian perakaunan."
      }
    ]
  },
  {
    "id": "akaun-bab2",
    "babNum": "MODUL 2",
    "title": "Klasifikasi Akaun dan Persamaan Perakaunan",
    "synopsis": "Menguasai lima unsur utama perakaunan (Aset, Liabiliti, Ekuiti Pemilik, Hasil, Belanja), kedudukannya dalam Penyata Kewangan, analisis kesan setiap urus niaga terhadap Persamaan Perakaunan tanpa dan dengan hasil serta belanja, penyediaan jadual persamaan, dan catatan pembukaan perniagaan.",
    "notes": [
      {
        "subtopic": "2.1 Komponen Penyata Pendapatan dan Penyata Kedudukan Kewangan",
        "summary": "Lima elemen utama perakaunan diklasifikasikan ke dalam dua penyata kewangan: Hasil dan Belanja di dalam Penyata Pendapatan, manakala Aset, Liabiliti dan Ekuiti Pemilik di dalam Penyata Kedudukan Kewangan.",
        "verbatim": [
          "Lima Unsur Perakaunan:\n  1. Aset: Harta dan sumber bernilai ekonomi yang dimiliki oleh perniagaan untuk menjana pendapatan.\n  2. Liabiliti: Tanggungan atau hutang perniagaan kepada pihak luar yang perlu dilunaskan pada masa hadapan.\n  3. Ekuiti Pemilik: Hak tuntutan pemilik terhadap aset perniagaan setelah ditolak semua liabiliti.\n  4. Hasil: Wang yang diterima atau akan diterima oleh perniagaan daripada jualan barang niaga, perkhidmatan atau sumber lain.\n  5. Belanja: Kos yang dibayar atau perlu dibayar oleh perniagaan dalam operasi untuk menjana hasil.",
          "Komponen Penyata Pendapatan: Hasil Operasi (cth: Jualan) dan Hasil Bukan Operasi (cth: Sewa Diterima, Faedah Simpanan); Belanja Operasi (cth: Gaji, Sewa, Kadar Bayaran) dan Belanja Bukan Operasi (cth: Faedah Pinjaman Bank, Rugi Pelupusan Aset).",
          "Komponen Penyata Kedudukan Kewangan: Aset Bukan Semasa (tahan lebih setahun), Aset Semasa (boleh ditukar kepada tunai dalam masa setahun), Liabiliti Semasa (hutang jangka pendek diselesaikan dalam masa setahun), Liabiliti Bukan Semasa (hutang jangka panjang melebihi setahun), dan Ekuiti Pemilik."
        ],
        "explanation": "Penentuan komponen yang tepat adalah prasyarat untuk menyediakan Akaun Perdagangan dan Untung Rugi serta Kunci Kira-Kira yang seimbang."
      },
      {
        "subtopic": "2.2 Item Setiap Komponen Penyata Kewangan",
        "summary": "Setiap komponen mengandungi item spesifik yang perlu diklasifikasikan dengan betul antara semasa dan bukan semasa.",
        "verbatim": [
          "Pengelasan Aset:\n  - Aset Bukan Semasa (ABS): Premis, Tanah, Kenderaan, Mesin, Perabot, Lengkapan, Alatan Pejabat.\n  - Aset Semasa (AS): Inventori Akhir, Akaun Belum Terima (ABT), Bank, Tunai, Tunai Runcit, Belanja Prabayar, Hasil Terakru.",
          "Pengelasan Liabiliti:\n  - Liabiliti Semasa (LS): Akaun Belum Bayar (ABB), Overdraf Bank, Belanja Terakru, Hasil Belum Terperoleh, Pinjaman Bank Jangka Pendek.\n  - Liabiliti Bukan Semasa (LBS): Pinjaman Bank Jangka Panjang, Gadai Janji.",
          "Ekuiti Pemilik (EP): Modal Awal + Untung Bersih (atau - Rugi Bersih) - Ambilan = Modal Akhir."
        ],
        "explanation": "Aset Semasa disusun dalam Penyata Kedudukan Kewangan mengikut urutan kecairan: bermula daripada yang paling lambat ditukar kepada tunai (Inventori) hingga yang paling cair (Tunai)."
      },
      {
        "subtopic": "2.3 Persamaan Perakaunan (Tanpa dan Dengan Mengambil Kira Hasil serta Belanja)",
        "summary": "Persamaan perakaunan menjadi asas kepada sistem catatan bergu. Setiap urus niaga memberikan kesan seimbang kepada aset, liabiliti, dan ekuiti pemilik.",
        "verbatim": [
          "Bentuk Asas Persamaan Perakaunan:\n  Aset = Liabiliti + Ekuiti Pemilik  (A = L + EP)\n  Ekuiti Pemilik = Aset - Liabiliti\n  Liabiliti = Aset - Ekuiti Pemilik",
          "Bentuk Diperluas (Mengambil Kira Hasil, Belanja dan Ambilan):\n  Aset = Liabiliti + Modal Awal + Untung Bersih - Ambilan\n  Aset = Liabiliti + Modal Awal + (Hasil - Belanja) - Ambilan\n  Atau disusun semula: Aset + Belanja + Ambilan = Liabiliti + Modal + Hasil",
          "JALAN KERJA PENGIRAAN PERSAMAAN PERAKAUNAN (Analisis Urus Niaga):\n  Contoh Urus Niaga & Kesannya Terhadap Aset, Liabiliti dan Ekuiti Pemilik:\n  1. Pemilik memulakan perniagaan dengan tunai di bank RM20,000:\n     -> Bank (Aset) (+) RM20,000 | Modal (Ekuiti) (+) RM20,000\n  2. Membeli barang niaga secara kredit daripada Pembekal Chan RM4,000:\n     -> Inventori (Aset) (+) RM4,000 | Akaun Belum Bayar (Liabiliti) (+) RM4,000\n  3. Menjual barang niaga berkos RM1,500 pada harga RM2,200 secara tunai:\n     -> Tunai (Aset) (+) RM2,200\n     -> Inventori (Aset) (-) RM1,500\n     -> Untung Jualan / Modal (Ekuiti) (+) RM700  (iaitu RM2,200 - RM1,500)\n  4. Membayar sewa kedai RM800 dengan cek:\n     -> Bank (Aset) (-) RM800 | Belanja Sewa / Modal (Ekuiti) (-) RM800\n  5. Pemilik mengambil barang niaga RM150 untuk kegunaan keluarga:\n     -> Inventori (Aset) (-) RM150 | Ambilan (Ekuiti) (-) RM150\n  6. Membayar Pembekal Chan RM2,000 dengan cek dan terima diskaun RM100:\n     -> Bank (Aset) (-) RM1,900\n     -> Akaun Belum Bayar (Liabiliti) (-) RM2,000\n     -> Diskaun Diterima / Modal (Ekuiti) (+) RM100\n  Jadual Rumusan Persamaan: Jumlah Aset SENTIASA SAMA dengan Jumlah (Liabiliti + Ekuiti Pemilik)!"
        ],
        "explanation": "Memahami bahawa jualan barang niaga melebihi harga kos menambah Ekuiti Pemilik (melalui untung kasar), manakala jualan bawah harga kos mengurangkan Ekuiti Pemilik (rugi)."
      },
      {
        "subtopic": "2.4 Catatan Pembukaan Perniagaan",
        "summary": "Catatan pembukaan merekodkan kedudukan awal aset, liabiliti, dan modal pemilik pada permulaan perniagaan atau pada awal setiap tempoh perakaunan baharu di dalam Jurnal Am.",
        "verbatim": [
          "Format Catatan Pembukaan dalam Jurnal Am:\n  Debit: Semua Aset\n  Kredit: Semua Liabiliti\n  Kredit: Modal (Nilai Pengimbang)\n  Formula Mengira Modal Awal: Modal Awal = Jumlah Aset - Jumlah Liabiliti\n  Contoh Pengiraan Catatan Pembukaan:\n  Pada 1 Januari, baki-baki perniagaan ialah: Kenderaan RM30,000, Inventori RM8,000, Bank RM12,000, Tunai RM1,500, Akaun Belum Terima RM3,500, Akaun Belum Bayar RM5,000, Pinjaman Bank RM15,000.\n  Jumlah Aset = 30,000 + 8,000 + 12,000 + 1,500 + 3,500 = RM55,000\n  Jumlah Liabiliti = 5,000 + 15,000 = RM20,000\n  Modal Awal = Jumlah Aset (RM55,000) - Jumlah Liabiliti (RM20,000) = RM35,000\n  Catatan Jurnal Am:\n  Db. Kenderaan RM30,000\n  Db. Inventori RM8,000\n  Db. Bank RM12,000\n  Db. Tunai RM1,500\n  Db. Akaun Belum Terima RM3,500\n  Kt. Akaun Belum Bayar RM5,000\n  Kt. Pinjaman Bank RM15,000\n  Kt. Modal RM35,000\n  (Merekodkan aset, liabiliti dan ekuiti pemilik pada tarikh pembukaan)"
        ],
        "explanation": "Catatan pembukaan wajib diimbangi. Jumlah lajur debit mesti sama dengan jumlah lajur kredit."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Klasifikasikan Item",
        "desc": "Tentukan sama ada item urus niaga merupakan Aset, Liabiliti, Ekuiti Pemilik, Hasil, atau Belanja.",
        "tip": "Ingat: Belanja mengurangkan Ekuiti Pemilik, Hasil menambahkan Ekuiti Pemilik."
      },
      {
        "step": "Langkah 2",
        "title": "Tentukan Kesan Tambah/Kurang",
        "desc": "Kaji sama ada aset bertambah (+), aset berkurang (-), liabiliti (+/-), atau ekuiti (+/-).",
        "tip": "Urus niaga jualan berkos RM1,000 dijual RM1,400: Inventori (-1,000), Tunai (+1,400), Modal (+400)."
      },
      {
        "step": "Langkah 3",
        "title": "Bina Jadual Persamaan",
        "desc": "Masukkan angka ke dalam lajur: Aset = Liabiliti + Ekuiti Pemilik. Kira baki setiap lajur.",
        "tip": "Pastikan jumlah baki akhir lajur aset tepat sama dengan jumlah lajur liabiliti dan ekuiti."
      },
      {
        "step": "Langkah 4",
        "title": "Kira Modal Awal untuk Catatan Pembukaan",
        "desc": "Gunakan rumus Modal Awal = Jumlah Aset - Jumlah Liabiliti sebelum merekod catatan pembukaan dalam Jurnal Am.",
        "tip": "Debitkan semua aset dan kreditkan semua liabiliti serta modal."
      }
    ],
    "keypoints": [
      "Persamaan Perakaunan: Aset = Liabiliti + Ekuiti Pemilik.",
      "Persamaan Diperluas: Aset = Liabiliti + Modal Awal + (Hasil - Belanja) - Ambilan.",
      "Pengaruh Untung terhadap Modal: Untung Bersih (Hasil > Belanja) menambah Modal; Rugi Bersih mengurangkan Modal.",
      "Pengaruh Ambilan: Ambilan mengurangkan aset (tunai/inventori) dan mengurangkan Ekuiti Pemilik.",
      "Modal Awal: Jumlah Aset tolak Jumlah Liabiliti.",
      "Penyata Kedudukan Kewangan: Mempersembahkan kedudukan aset, liabiliti dan ekuiti pada tarikh tertentu."
    ],
    "questions": [
      {
        "question": "Perniagaan menjual barang niaga yang berkos RM2,400 pada harga RM3,200 secara kredit kepada Kedai Rahmat. Apakah kesan urus niaga ini terhadap persamaan perakaunan?",
        "options": [
          "Inventori (-) RM2,400, Akaun Belum Terima (+) RM3,200, Untung/Modal (+) RM800",
          "Inventori (-) RM3,200, Akaun Belum Terima (+) RM3,200, Tiada kesan ke atas Modal",
          "Tunai (+) RM3,200, Inventori (-) RM2,400, Liabiliti (+) RM800",
          "Inventori (-) RM2,400, Akaun Belum Bayar (+) RM3,200, Modal (-) RM800"
        ],
        "answer": "Inventori (-) RM2,400, Akaun Belum Terima (+) RM3,200, Untung/Modal (+) RM800",
        "explanation": "Jalan kerja analisis: Penjualan secara kredit mewujudkan Akaun Belum Terima (+) RM3,200. Kos barang niaga dikeluarkan daripada stor, jadi Inventori (-) RM2,400. Perbezaan harga jualan dan kos (RM3,200 - RM2,400 = RM800) merupakan Untung Kasar yang menambahkan Ekuiti Pemilik / Modal (+) RM800."
      },
      {
        "question": "Pada 1 Mac, baki perniagaan adalah seperti berikut: Premis RM120,000, Inventori RM15,000, Bank RM25,000, Akaun Belum Bayar RM18,000, dan Pinjaman Bank RM40,000. Berapakah Modal Awal perniagaan tersebut?",
        "options": [
          "RM102,000",
          "RM160,000",
          "RM58,000",
          "RM120,000"
        ],
        "answer": "RM102,000",
        "explanation": "Jalan kerja pengiraan: Jumlah Aset = Premis (120,000) + Inventori (15,000) + Bank (25,000) = RM160,000. Jumlah Liabiliti = Akaun Belum Bayar (18,000) + Pinjaman Bank (40,000) = RM58,000. Modal Awal = Jumlah Aset - Jumlah Liabiliti = RM160,000 - RM58,000 = RM102,000."
      }
    ],
    "struktur": [
      {
        "soalan": "Perniagaan Perabot Johan memulakan operasi pada 1 Julai dengan aset dan liabiliti berikut:\nBank RM35,000; Inventori RM12,000; Kenderaan RM40,000; Akaun Belum Bayar (Pembekal Kayu) RM15,000.\nSepanjang bulan Julai, urus niaga berikut berlaku:\n(i) Membeli barang niaga berkos RM5,000 secara kredit daripada Pembekal Kayu.\n(ii) Menjual barang niaga berkos RM3,000 pada harga RM4,500 dengan cek.\n(iii) Membayar sewa kedai RM1,200 dengan cek.\n(iv) Pemilik mengambil tunai bank RM400 untuk kegunaan sendiri.\n(a) Hitungkan Modal Awal pada 1 Julai. [2 markah]\n(b) Hitungkan baki akhir bagi Bank, Inventori, Akaun Belum Bayar dan Modal pada 31 Julai. [4 markah]",
        "markah": "6 Markah",
        "jawapan": "(a) Jalan Kerja Pengiraan Modal Awal pada 1 Julai:\n1. Jumlah Aset = Bank (RM35,000) + Inventori (RM12,000) + Kenderaan (RM40,000) = RM87,000 [1m]\n2. Modal Awal = Jumlah Aset (RM87,000) - Liabiliti (ABB RM15,000) = RM72,000 [1m]\n\n(b) Jalan Kerja Pengiraan Baki Akhir pada 31 Julai:\n1. Baki Bank = Baki Awal (35,000) + Jualan (4,500) - Sewa (1,200) - Ambilan (400) = RM37,900 [1m]\n2. Baki Inventori = Baki Awal (12,000) + Belian (5,000) - Kos Jualan (3,000) = RM14,000 [1m]\n3. Baki Akaun Belum Bayar = Baki Awal (15,000) + Belian Kredit (5,000) = RM20,000 [1m]\n4. Baki Modal Akhir = Modal Awal (72,000) + Untung Jualan (4,500 - 3,000 = 1,500) - Sewa (1,200) - Ambilan (400) = RM71,900 [1m]\n(Semakan Persamaan: Aset = 37,900 + 14,000 + 40,000 = RM91,900 | Liabiliti + Modal = 20,000 + 71,900 = RM91,900 - Tepat!).",
        "panduanKoreksi": "2m untuk Modal Awal RM72,000 + 4m untuk baki akhir Bank (RM37,900), Inventori (RM14,000), ABB (RM20,000), Modal (RM71,900)."
      }
    ]
  },
  {
    "id": "akaun-bab3",
    "babNum": "MODUL 3",
    "title": "Dokumen Perniagaan Sebagai Sumber Maklumat",
    "synopsis": "Mengenal pasti fungsi dokumen perniagaan, perbezaan dokumen sumber dan dokumen bukan sumber, pengiraan diskaun niaga dan diskaun tunai, aliran pertukaran dokumen antara pembeli dan penjual, serta penganalisisan dokumen sumber untuk catatan pertama.",
    "notes": [
      {
        "subtopic": "3.1 Dokumen Perniagaan dan Kepentingannya",
        "summary": "Dokumen perniagaan merupakan bukti bertulis yang sah bagi setiap transaksi jual beli, mengelakkan pertikaian, menjadi rujukan rekod perakaunan dan bahan bukti audit.",
        "verbatim": [
          "Fungsi Dokumen Perniagaan: Bukti sah bertulis transaksi, rekod kawalan dalaman, sumber maklumat untuk catatan dalam Buku Catatan Pertama, rujukan had kredit dan syarat pembayaran, serta bukti undang-undang.",
          "Perbezaan Dokumen Sumber vs Dokumen Bukan Sumber:\n  - Dokumen Sumber: Dokumen yang menjadi asas catatan pertama dalam buku perakaunan (cth: Invois, Resit Rasmi, Nota Debit, Nota Kredit, Bil Tunai, Baucar Pembayaran, Keratan Cek, Slip Daftar Tunai).\n  - Dokumen Bukan Sumber: Dokumen sokongan/maklumat yang TIDAK digunakan untuk merekod urus niaga (cth: Surat Tanya, Sebut Harga, Nota Minta, Pesanan Belian, Nota Serahan, Penyata Akaun)."
        ],
        "explanation": "Penyata Akaun bukan dokumen sumber; ia hanya penyata peringatan berkala yang dihantar oleh pemiutang kepada penghutang untuk menyemak baki hutang."
      },
      {
        "subtopic": "3.2 Dokumen Sumber Perniagaan",
        "summary": "Setiap dokumen sumber mempunyai fungsi tertentu dan menentukan jurnal khas atau buku tunai yang akan digunakan.",
        "verbatim": [
          "Fungsi Dokumen Sumber Utama:\n  1. Invois: Dikeluarkan oleh penjual kepada pembeli bagi jualan/belian barang niaga secara KREDIT. (Salinan invois dipegang penjual -> Jurnal Jualan; Asal invois dipegang pembeli -> Jurnal Belian).\n  2. Nota Kredit: Dihantar oleh penjual untuk MENGURANGKAN jumlah hutang pembeli (kerana pulangan barang rosak/salah atau terlebih caj dalam invois). (Salinan -> Jurnal Pulangan Jualan; Asal -> Jurnal Pulangan Belian).\n  3. Nota Debit: Dihantar oleh penjual untuk MENAMBAH jumlah hutang pembeli (kerana terkurang caj dalam invois atau caj faedah bayaran lewat). (Salinan -> Jurnal Jualan; Asal -> Jurnal Belian).\n  4. Resit Rasmi: Bukti penerimaan wang tunai atau cek daripada pelanggan.\n  5. Baucar Pembayaran: Dokumen dalaman sebagai bukti pengeluaran wang tunai/cek untuk bayaran belanja.\n  6. Bil Tunai / Slip Daftar Tunai: Bukti jual beli barang niaga secara TUNAI.\n  7. Keratan Cek: Bukti pembayaran melalui akaun bank perniagaan."
        ],
        "explanation": "Pengelasan Asal vs Salinan: Pemegang dokumen ASAL ialah pihak penerima (pembeli/pembayar), manakala pemegang dokumen SALINAN ialah pihak pengeluar (penjual/penerima wang)."
      },
      {
        "subtopic": "3.3 Pengiraan Diskaun Niaga dan Diskaun Tunai",
        "summary": "Diskaun niaga diberikan untuk menggalakkan belian pukal, manakala diskaun tunai diberikan untuk menggalakkan pembayaran hutang dengan cepat dalam tempoh kredit yang ditetapkan.",
        "verbatim": [
          "JALAN KERJA PENGIRAAN DISKAUN NIAGA (Tercatat dalam Invois):\n  - Diskaun niaga ditolak terus daripada Harga Senarai dalam Invois.\n  - Nilai Bersih Invois = Harga Senarai - Diskaun Niaga\n  - Diskaun niaga TIDAK DIREKODKAN dalam mana-mana akaun lejar!\n  Contoh Pengiraan Invois:\n  Membeli 50 unit kipas meja pada harga senarai RM80 seunit dengan diskaun niaga 20%.\n  Jumlah Harga Senarai = 50 unit x RM80 = RM4,000.00\n  Tolak Diskaun Niaga (20% x RM4,000) = -RM800.00\n  Jumlah Bersih Invois (Jumlah Hutang Sebenar) = RM3,200.00  (Direkodkan dalam Jurnal Belian)",
          "JALAN KERJA PENGIRAAN DISKAUN TUNAI (Syarat Kredit):\n  - Diskaun tunai diberikan jika hutang dibayar dalam tempoh syarat kredit (cth: '5% 10 hari, 2% 30 hari, n/60').\n  - Maksud Syarat: Diskaun 5% jika bayar dalam masa 10 hari; diskaun 2% jika bayar antara hari ke-11 hingga ke-30; tiada diskaun selepas 30 hari; hutang mesti lunas dalam 60 hari.\n  - Diskaun Tunai DIBERI direkodkan dalam Lejar (sebagai belanja), manakala Diskaun Tunai DITERIMA direkodkan (sebagai hasil)!\n  Contoh Pengiraan Pembayaran Hutang:\n  Invois bertarikh 4 Mei bernilai bersih RM3,200 dengan syarat '5% 10 hari, n/30'.\n  Situasi A: Bayaran dibuat pada 12 Mei (8 hari selepas invois -> Layak diskaun 5%):\n    - Jumlah Hutang = RM3,200.00\n    - Diskaun Tunai (5% x RM3,200) = RM160.00\n    - Jumlah Cek Dibayar = RM3,200 - RM160 = RM3,040.00\n  Situasi B: Bayaran dibuat pada 20 Mei (16 hari selepas invois -> Tidak layak diskaun):\n    - Jumlah Cek Dibayar = RM3,200.00 sepenuhnya."
        ],
        "explanation": "Diskaun tunai dihitung daripada nilai bersih invois (selepas tolak diskaun niaga dan pulangan barang), bukan harga senarai asal."
      },
      {
        "subtopic": "3.4 Aliran Dokumen Perniagaan Antara Pembeli dengan Penjual",
        "summary": "Proses urus niaga kredit mematuhi susunan kronologi dokumen daripada fasa pertanyaan hingga pembayaran muktamad.",
        "verbatim": [
          "Kronologi Lengkap Aliran Dokumen:\n  1. Pembeli hantar Surat Tanya kepada penjual.\n  2. Penjual balas dengan Sebut Harga / Katalog.\n  3. Pembeli hantar Pesanan Belian (Purchase Order).\n  4. Penjual hantar Nota Serahan bersama barang untuk diperiksa pembeli.\n  5. Penjual hantar Invois rasmi (tuntutan bayaran).\n  6. Jika berlaku kerosakan barang, pembeli hantar Nota Debit / Penjual balas dengan Nota Kredit.\n  7. Penjual hantar Penyata Akaun pada hujung bulan.\n  8. Pembeli membuat pembayaran dengan Cek bersama Keratan Cek / Baucar Pembayaran.\n  9. Penjual mengeluarkan Resit Rasmi sebagai bukti terima bayaran."
        ],
        "explanation": "Nota serahan hanya mengandungi maklumat kuantiti dan jenis barang tanpa ruangan harga bagi membolehkan pihak penerima memeriksa barang fizikal."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Bezakan Sumber vs Bukan Sumber",
        "desc": "Ingat bahawa Pesanan Belian, Nota Serahan, dan Penyata Akaun tidak direkodkan ke dalam buku catatan pertama.",
        "tip": "Hanya dokumen yang melibatkan perpindahan nilai muktamad (invois, resit, nota kredit/debit) yang direkodkan."
      },
      {
        "step": "Langkah 2",
        "title": "Kira Diskaun Niaga",
        "desc": "Tolak Diskaun Niaga daripada Jumlah Harga Senarai: Nilai Invois = Harga Senarai - Diskaun Niaga.",
        "tip": "Diskaun niaga tidak dibuka akaun lejar."
      },
      {
        "step": "Langkah 3",
        "title": "Semak Kelayakan Diskaun Tunai",
        "desc": "Kira bilangan hari dari tarikh invois hingga tarikh pembayaran untuk menentukan peratus diskaun tunai yang layak.",
        "tip": "Kira hari bermula sehari selepas tarikh invois dikeluarkan."
      },
      {
        "step": "Langkah 4",
        "title": "Kira Amaun Bayaran Bersih",
        "desc": "Amaun Cek Dibayar = Jumlah Hutang Bersih - Diskaun Tunai.",
        "tip": "Diskaun diberi adalah belanja bagi penjual; diskaun diterima adalah hasil bagi pembeli."
      }
    ],
    "keypoints": [
      "Dokumen Sumber: Invois, Nota Debit, Nota Kredit, Resit Rasmi, Baucar Pembayaran, Bil Tunai.",
      "Dokumen Bukan Sumber: Penyata Akaun, Pesanan Belian, Nota Serahan, Sebut Harga.",
      "Nota Kredit: Mengurangkan hutang pembeli (pulangan barang rosak / terlebih caj).",
      "Nota Debit: Menambah hutang pembeli (terkurang caj / caj faedah).",
      "Diskaun Niaga: Ditolak dalam invois untuk menggalakkan belian pukal; tiada catatan lejar.",
      "Diskaun Tunai: Ditawarkan mengikut syarat kredit (cth: 5% 10 hari) untuk menggalakkan bayaran segera."
    ],
    "questions": [
      {
        "question": "Kedai Runcit Lee menerima invois daripada Pembekal Bersatu bertarikh 10 April bernilai RM5,000 dengan syarat kredit '10% 10 hari, 5% 20 hari, n/30'. Pada 18 April, Kedai Runcit Lee membayar penuh hutang tersebut dengan cek. Berapakah jumlah bayaran yang dibuat?",
        "options": [
          "RM4,500",
          "RM4,750",
          "RM5,000",
          "RM4,000"
        ],
        "answer": "RM4,500",
        "explanation": "Jalan kerja pengiraan: Tempoh bayaran dari 10 April ke 18 April ialah 8 hari (kurang daripada 10 hari), maka layak diskaun tunai 10%. Diskaun tunai = 10% x RM5,000 = RM500. Jumlah bayaran dengan cek = RM5,000 - RM500 = RM4,500."
      },
      {
        "question": "Antara dokumen perniagaan berikut, manakah merupakan dokumen bukan sumber yang tidak digunakan untuk merekodkan urus niaga?",
        "options": [
          "Penyata Akaun",
          "Nota Kredit",
          "Baucar Pembayaran",
          "Resit Rasmi"
        ],
        "answer": "Penyata Akaun",
        "explanation": "Penyata Akaun dihantar pada akhir bulan sebagai ringkasan urus niaga dan peringatan baki hutang kepada penghutang, dan ia bukan dokumen sumber untuk mencatat urus niaga."
      }
    ],
    "struktur": [
      {
        "soalan": "Maklumat berikut dipetik daripada invois yang diterima oleh Perniagaan Sentosa daripada Pembekal Berjaya:\n- Tarikh Invois: 15 Ogos 2025\n- Butiran Barang: 100 kotak minuman kesihatan @ RM60 sekotak\n- Diskaun Niaga: 15%\n- Syarat Pembayaran: 5% 14 hari, n/30\n(a) Hitungkan nilai bersih invois yang akan direkodkan ke dalam Jurnal Belian Perniagaan Sentosa. [2 markah]\n(b) Sekiranya Perniagaan Sentosa menjelaskan hutang invois tersebut pada 26 Ogos 2025 dengan cek, hitungkan:\n    (i) Jumlah diskaun tunai yang diterima. [2 markah]\n    (ii) Jumlah bayaran sebenar yang dibayar melalui cek. [1 markah]",
        "markah": "5 Markah",
        "jawapan": "(a) Jalan Kerja Pengiraan Nilai Bersih Invois:\n1. Jumlah Harga Senarai = 100 kotak x RM60 = RM6,000.00 [1m]\n2. Diskaun Niaga (15%) = 15% x RM6,000 = RM900.00\n3. Nilai Bersih Invois = RM6,000 - RM900 = RM5,100.00 [1m]\n\n(b) Jalan Kerja Pengiraan Bayaran pada 26 Ogos:\n1. Tempoh bayaran dari 15 Ogos hingga 26 Ogos = 11 hari (layak diskaun 5% kerana <= 14 hari).\n2. (i) Diskaun Tunai Diterima = 5% x RM5,100 = RM255.00 [2m]\n3. (ii) Jumlah Bayaran Cek = RM5,100 - RM255 = RM4,845.00 [1m].",
        "panduanKoreksi": "2m untuk nilai bersih invois RM5,100 + 2m untuk diskaun tunai RM255 + 1m untuk cek dibayar RM4,845."
      }
    ]
  },
  {
    "id": "akaun-bab4",
    "babNum": "MODUL 4",
    "title": "Buku Catatan Pertama",
    "synopsis": "Menguasai kemahiran merekod urus niaga ke dalam Jurnal Am, Jurnal Khas (Jurnal Jualan, Jurnal Belian, Jurnal Pulangan Jualan, Jurnal Pulangan Belian), Buku Tunai tiga ruangan berserta catatan kontra, dan Buku Tunai Runcit mengikut Sistem Panjar Wang Runcit.",
    "notes": [
      {
        "subtopic": "4.1 Pengenalan Buku Catatan Pertama",
        "summary": "Buku Catatan Pertama (BCP) ialah buku perakaunan pertama di mana urus niaga direkodkan daripada dokumen sumber mengikut urutan kronologi tarikh.",
        "verbatim": [
          "Jenis-jenis Buku Catatan Pertama: (1) Jurnal Am; (2) Jurnal Khas; (3) Buku Tunai; (4) Buku Tunai Runcit.",
          "Kepentingan BCP: Merekod urus niaga mengikut tarikh urutan, mengurangkan kesilapan merekod lejar, memudahkan rujukan dan semakan silang, serta menyediakan butiran urus niaga lengkap berserta keterangan."
        ],
        "explanation": "BCP bertindak sebagai jambatan penghubung antara dokumen sumber dengan lejar."
      },
      {
        "subtopic": "4.2 Jurnal Am",
        "summary": "Jurnal Am digunakan untuk merekodkan catatan pembukaan, pembelian dan jualan aset bukan semasa secara kredit, ambilan barang niaga, modal tambahan bukan tunai, pelarasan tarikh imbangan, dan pembetulan kesilapan.",
        "verbatim": [
          "Kegunaan Jurnal Am:\n  1. Catatan Pembukaan: Merekod baki awal aset, liabiliti dan ekuiti pemilik.\n  2. Belian dan Jualan Aset Bukan Semasa Secara Kredit: (Contoh: Beli kenderaan kredit RM45,000 -> Db. Kenderaan, Kt. Syarikat Motor Indah).\n  3. Ambilan Barang Niaga / Aset: (Contoh: Ambil barang RM300 untuk derma -> Db. Derma, Kt. Belian; Ambil perabot untuk anak -> Db. Ambilan, Kt. Perabot).\n  4. Modal Tambahan Selain Tunai: (Contoh: Bawa masuk komputer peribadi RM2,500 ke dalam perniagaan -> Db. Alatan Pejabat, Kt. Modal).\n  5. Catatan Penutupan dan Pelarasan.",
          "Format Jurnal Am: Mengandungi lajur Tarikh, Butiran, Folio, Debit (RM) dan Kredit (RM) berserta keterangan ringkas di bawah setiap catatan."
        ],
        "explanation": "Belian barang niaga secara kredit TIDAK direkod dalam Jurnal Am tetapi dalam Jurnal Belian."
      },
      {
        "subtopic": "4.3 Jurnal Khas",
        "summary": "Jurnal Khas merekodkan urus niaga berulang yang khusus melibatkan jual beli barang niaga secara kredit serta pulangannya.",
        "verbatim": [
          "Empat Jurnal Khas Utama:\n  1. Jurnal Jualan: Merekod jualan barang niaga secara KREDIT (sumber: Salinan Invois, Salinan Nota Debit).\n  2. Jurnal Belian: Merekod belian barang niaga secara KREDIT (sumber: Asal Invois, Asal Nota Debit).\n  3. Jurnal Pulangan Jualan (Jurnal Masuk): Merekod pulangan barang niaga daripada pelanggan kredit (sumber: Salinan Nota Kredit).\n  4. Jurnal Pulangan Belian (Jurnal Keluar): Merekod pulangan barang niaga kepada pembekal kredit (sumber: Asal Nota Kredit).",
          "Penutupan Jurnal Khas pada Akhir Bulan:\n  - Jumlah Jurnal Jualan dipos ke KREDIT Akaun Jualan dalam Lejar Am.\n  - Jumlah Jurnal Belian dipos ke DEBIT Akaun Belian dalam Lejar Am.\n  - Jumlah Jurnal Pulangan Jualan dipos ke DEBIT Akaun Pulangan Jualan.\n  - Jumlah Jurnal Pulangan Belian dipos ke KREDIT Akaun Pulangan Belian."
        ],
        "explanation": "Setiap individu pelanggan dan pembekal dipos secara harian ke Lejar Subsidiari masing-masing."
      },
      {
        "subtopic": "4.4 Buku Tunai",
        "summary": "Buku Tunai tiga ruangan menggabungkan Buku Catatan Pertama dan Lejar untuk merekod semua penerimaan dan pembayaran tunai, cek (bank) serta diskaun.",
        "verbatim": [
          "Format Buku Tunai 3 Ruangan: Lajur Diskaun Diberi, Tunai, Bank di sebelah DEBIT (Terimaan) dan lajur Diskaun Diterima, Tunai, Bank di sebelah KREDIT (Pembayaran).",
          "Catatan Kontra (Huruf 'K'): Urus niaga yang melibatkan pemindahan wang antara Tunai dan Bank yang dicatat serentak di kedua-dua belah Buku Tunai tanpa dipos ke lejar lain:\n  1. Pindahan tunai pejabat ke bank: Debit Bank, Kredit Tunai (K).\n  2. Mengeluarkan wang dari bank untuk kegunaan perniagaan: Debit Tunai, Kredit Bank (K).",
          "JALAN KERJA PENGIRAAN BUKU TUNAI & IMBANG KEDUA-DUA BELAH:\n  - Jumlah lajur Tunai dan Bank diimbangi untuk mencari Baki h/b dan Baki b/b.\n  - Ruangan Diskaun TIDAK DIIMBANGKAN! Jumlah lajur Diskaun Diberi (Debit) dipos terus ke Debit Akaun Diskaun Diberi di Lejar Am, dan Jumlah lajur Diskaun Diterima (Kredit) dipos ke Kredit Akaun Diskaun Diterima."
        ],
        "explanation": "Mengeluarkan tunai bank untuk kegunaan peribadi pemilik BUKAN catatan kontra, tetapi catatan Ambilan (Kredit Bank, Debit Akaun Ambilan)."
      },
      {
        "subtopic": "4.5 Buku Tunai Runcit (Sistem Panjar)",
        "summary": "Buku Tunai Runcit menguruskan pembayaran perbelanjaan kecil secara tunai mengikut Sistem Panjar Wang Runcit.",
        "verbatim": [
          "Sistem Panjar Wang Runcit: Ketua juruwang menetapkan sejumlah dana tetap (panjar, cth: RM250) kepada juruwang runcit. Pada akhir tempoh, ketua juruwang akan membayar balik (rekupmen) jumlah tepat yang telah dibelanjakan untuk mengembalikan dana kepada amaun panjar asal.",
          "JALAN KERJA PENGIRAAN BUKU TUNAI RUNCIT (SISTEM PANJAR):\n  Dana Panjar Awal (1 Mei) = RM300.00\n  Perbelanjaan Sepanjang Bulan Mei:\n  - 4 Mei: Alat tulis pejabat = RM45.00\n  - 10 Mei: Belanja pos dan setem = RM30.00\n  - 15 Mei: Tambang teksi kecemasan = RM25.00\n  - 22 Mei: Jamuan minuman mesyuarat = RM50.00\n  - 28 Mei: Upah mencuci pejabat = RM40.00\n  Langkah 1: Hitung Jumlah Perbelanjaan Runcit:\n    Jumlah Belanja = 45 + 30 + 25 + 50 + 40 = RM190.00\n  Langkah 2: Hitung Baki Akhir Tunai Runcit pada 31 Mei:\n    Baki Akhir = Dana Panjar (RM300) - Jumlah Belanja (RM190) = RM110.00\n  Langkah 3: Hitung Jumlah Rekupmen (Bayaran Balik dari Bank pada 1 Jun):\n    Jumlah Rekupmen = Tepat sama dengan Jumlah Belanja = RM190.00!\n    Maka pada 1 Jun, Dana kembali menjadi: Baki b/b (110) + Bank (190) = RM300.00!",
          "Lajur Analisis Pembayaran: Disediakan mengikut jenis belanja kerap (cth: Alat Tulis, Belanja Pos, Belanja Perjalanan, Belanja Pejabat)."
        ],
        "explanation": "Sistem panjar memudahkan kawalan dalaman kerana juruwang runcit mesti menyertakan baucar runcit bagi setiap tuntutan rekupmen."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Tentukan Buku Catatan yang Betul",
        "desc": "Jual/beli kredit barang niaga -> Jurnal Khas. Urus niaga tunai/cek -> Buku Tunai. Belanja kecil -> Buku Tunai Runcit. Selain itu -> Jurnal Am.",
        "tip": "Beli aset bukan semasa secara kredit sentiasa masuk Jurnal Am."
      },
      {
        "step": "Langkah 2",
        "title": "Kenal Pasti Catatan Kontra",
        "desc": "Tandakan 'K' bagi transaksi pindahan tunai ke bank atau keluarkan tunai bank untuk pejabat.",
        "tip": "Catatan kontra memberi kesan serentak pada lajur tunai dan bank dalam buku yang sama."
      },
      {
        "step": "Langkah 3",
        "title": "Kira Baki dan Rekupmen BTR",
        "desc": "Baki h/b Tunai Runcit = Panjar Awal - Jumlah Belanja. Rekupmen = Jumlah Belanja.",
        "tip": "Amaun rekupmen sentiasa sama dengan jumlah lajur perbelanjaan runcit."
      },
      {
        "step": "Langkah 4",
        "title": "Pos ke Lejar Am",
        "desc": "Pos jumlah jurnal khas ke akaun berkaitan di lejar pada akhir bulan.",
        "tip": "Diskaun diberi dipos ke debit lejar; diskaun diterima ke kredit lejar."
      }
    ],
    "keypoints": [
      "Jurnal Am: Catatan pembukaan, belian/jualan aset bukan semasa kredit, ambilan barang, pembetulan kesilapan.",
      "Jurnal Khas: Jurnal Jualan, Jurnal Belian, Jurnal Pulangan Jualan, Jurnal Pulangan Belian.",
      "Catatan Kontra: Pindahan antara lajur Tunai dan Bank dalam Buku Tunai bertanda 'K'.",
      "Lajur Diskaun Buku Tunai: Tidak diimbangi; jumlah dipos terus ke Akaun Diskaun Diberi (Db) dan Diterima (Kt).",
      "Sistem Panjar: Jumlah rekupmen wang dari bank bersamaan dengan jumlah tepat perbelanjaan yang telah digunakan."
    ],
    "questions": [
      {
        "question": "Perniagaan Cemerlang menetapkan dana panjar wang runcit sebanyak RM250. Pada akhir bulan, jumlah pembayaran runcit yang telah dibuat ialah RM185. Berapakah jumlah wang yang perlu dituntut daripada ketua juruwang untuk rekupmen bulan hadapan?",
        "options": [
          "RM185",
          "RM65",
          "RM250",
          "RM435"
        ],
        "answer": "RM185",
        "explanation": "Jalan kerja pengiraan: Di bawah Sistem Panjar Wang Runcit, amaun rekupmen (tuntutan bayaran balik) pada awal tempoh berikutnya mestilah tepat sama dengan jumlah perbelanjaan yang telah digunakan iaitu RM185, supaya baki dana kembali kepada amaun panjar asal RM250 (Baki ada RM65 + Rekupmen RM185 = RM250)."
      },
      {
        "question": "Urus niaga manakah yang direkodkan ke dalam Jurnal Am?",
        "options": [
          "Membeli van perniagaan bernilai RM60,000 secara kredit daripada Auto Maju Sdn. Bhd.",
          "Membeli barang niaga bernilai RM4,000 secara kredit daripada Pembekal Tan",
          "Menjual barang niaga bernilai RM1,500 secara tunai kepada pelanggan",
          "Menerima bayaran sewa kedai RM800 dengan cek"
        ],
        "answer": "Membeli van perniagaan bernilai RM60,000 secara kredit daripada Auto Maju Sdn. Bhd.",
        "explanation": "Pembelian atau jualan aset bukan semasa (seperti van, mesin, perabot) secara kredit direkodkan ke dalam Jurnal Am, manakala belian barang niaga kredit direkod dalam Jurnal Belian."
      }
    ],
    "struktur": [
      {
        "soalan": "Perniagaan Perintis mengamalkan Sistem Panjar Wang Runcit dengan dana peruntukan RM300 bermula 1 Oktober 2025. Sepanjang Oktober, perbelanjaan runcit berikut telah dibayar:\n- 5 Okt: Alat tulis pejabat RM45\n- 12 Okt: Belanja pos dan kurier RM35\n- 18 Okt: Tambang grab menghantar dokumen RM20\n- 25 Okt: Jamuan mesyuarat staf RM65\n- 29 Okt: Upah baiki kunci pintu pejabat RM30\n(a) Hitungkan jumlah perbelanjaan runcit bagi bulan Oktober. [1 markah]\n(b) Hitungkan baki wang tunai runcit pada 31 Oktober 2025. [2 markah]\n(c) Berapakah jumlah wang yang akan diterima daripada juruwang utama pada 1 November 2025 untuk mengembalikan dana panjar kepada amaun asal? [1 markah]",
        "markah": "4 Markah",
        "jawapan": "(a) Jalan Kerja Pengiraan Jumlah Belanja Runcit:\nJumlah Belanja = RM45 + RM35 + RM20 + RM65 + RM30 = RM195.00 [1m]\n\n(b) Jalan Kerja Pengiraan Baki Akhir Tunai Runcit:\nBaki Akhir = Dana Panjar Awal (RM300.00) - Jumlah Belanja (RM195.00) = RM105.00 [2m]\n\n(c) Jumlah Rekupmen pada 1 November 2025 = RM195.00 [1m] (iaitu amaun tepat bersamaan jumlah belanja untuk menjadikan dana RM105 + RM195 = RM300.00).",
        "panduanKoreksi": "1m untuk jumlah belanja RM195 + 2m untuk baki akhir RM105 + 1m untuk rekupmen RM195."
      }
    ]
  },
  {
    "id": "akaun-bab5",
    "babNum": "MODUL 5",
    "title": "Lejar",
    "synopsis": "Menguasai sistem catatan bergu dalam lejar am dan lejar subsidiari, peraturan mendebit dan mengkredit akaun, proses pengimbangan akaun lejar, serta penyediaan Akaun Kawalan Belum Terima dan Akaun Kawalan Belum Bayar.",
    "notes": [
      {
        "subtopic": "5.1 Pengenalan Lejar dan Pengelasan Akaun",
        "summary": "Lejar ialah buku akaun utama yang mengandungi akaun-akaun individu untuk mengumpul maklumat urus niaga daripada Buku Catatan Pertama.",
        "verbatim": [
          "Bentuk Lejar: Format 'T' tradisional (mempunyai sebelah Debit di kiri dan sebelah Kredit di kanan) dan Format Lajur Baki.",
          "Pengelasan Lejar:\n  1. Lejar Am: Mengandungi Akaun Nyata (Aset), Akaun Nominal (Hasil & Belanja), Akaun Modal dan Ambilan.\n  2. Lejar Khas / Subsidiari:\n     - Lejar Jualan: Mengandungi akaun-akaun individu pelanggan kredit (Akaun Belum Terima).\n     - Lejar Belian: Mengandungi akaun-akaun individu pembekal kredit (Akaun Belum Bayar)."
        ],
        "explanation": "Pembahagian lejar kepada lejar am dan subsidiari memudahkan pembahagian tugas staf dan merahsiakan maklumat perniagaan."
      },
      {
        "subtopic": "5.2 Sistem Catatan Bergu dan Kaedah Merekod Lejar",
        "summary": "Setiap urus niaga mesti didebitkan ke dalam satu akaun dan dikreditkan ke dalam akaun yang lain dengan nilai yang sama.",
        "verbatim": [
          "HUKUM SISTEM CATATAN BERGU:\n  1. Aset bertambah -> DEBIT | Aset berkurang -> KREDIT\n  2. Belanja bertambah -> DEBIT | Belanja berkurang -> KREDIT\n  3. Liabiliti bertambah -> KREDIT | Liabiliti berkurang -> DEBIT\n  4. Ekuiti Pemilik (Modal) bertambah -> KREDIT | Modal berkurang -> DEBIT\n  5. Hasil bertambah -> KREDIT | Hasil berkurang -> DEBIT\n  *Rumusan Hafalan SPM:* 'ALBEH' -> Aset & Belanja bertambah di DEBIT; Liabiliti, Ekuiti & Hasil bertambah di KREDIT!",
          "Contoh Merekod Catatan Bergu:\n  - Membeli perabot pejabat secara tunai RM1,500:\n    Debit: Akaun Perabot (Aset bertambah) RM1,500\n    Kredit: Akaun Tunai (Aset berkurang) RM1,500\n  - Menjual barang niaga secara kredit kepada Aiman RM2,000:\n    Debit: Akaun Aiman / ABT (Aset bertambah) RM2,000\n    Kredit: Akaun Jualan (Hasil bertambah) RM2,000"
        ],
        "explanation": "Prinsip catatan bergu menjamin persamaan matematik Aset = Liabiliti + Ekuiti sentiasa seimbang."
      },
      {
        "subtopic": "5.3 Pengimbangan dan Penutupan Akaun Lejar",
        "summary": "Pada akhir tempoh, semua akaun diimbangi untuk mencari baki hantar ke bawah (baki h/b) dan dibawa ke bawah (baki b/b).",
        "verbatim": [
          "Prosedur Mengimbangi Akaun Format 'T':\n  1. Jumlahkan kedua-dua belah debit dan kredit.\n  2. Letakkan jumlah yang lebih besar di baris jumlah kedua-dua belah.\n  3. Tolak jumlah kecil daripada jumlah besar untuk mencari perbezaan (Baki h/b).\n  4. Catat 'Baki h/b' di sebelah yang mempunyai jumlah lebih kecil.\n  5. Bawa baki tersebut ke sebelah bertentangan pada hari pertama bulan berikutnya sebagai 'Baki b/b'.",
          "Baki Normal Akaun:\n  - Akaun Aset dan Belanja sentiasa berbaki normal DEBIT (Baki b/b di sebelah Debit).\n  - Akaun Liabiliti, Ekuiti Pemilik dan Hasil sentiasa berbaki normal KREDIT (Baki b/b di sebelah Kredit)."
        ],
        "explanation": "Akaun nominal (Hasil dan Belanja) ditutup ke Akaun Perdagangan atau Akaun Untung Rugi, bukannya dibimbangkan baki h/b."
      },
      {
        "subtopic": "5.4 Akaun Kawalan Belum Terima dan Akaun Kawalan Belum Bayar",
        "summary": "Akaun Kawalan disediakan di Lejar Am untuk menyemak ketepatan baki keseluruhan dalam Lejar Subsidiari, mengesan kesilapan dan mencegah penipuan.",
        "verbatim": [
          "JALAN KERJA FORMAT AKAUN KAWALAN BELUM TERIMA (LEJAR JUALAN):\n  Sebelah DEBIT (Menambah Hutang Pelanggan):\n  - Baki Awal b/b (Baki Debit ABT)\n  - Jualan Kredit (daripada Jurnal Jualan)\n  - Faedah dikenakan atas bayaran lewat\n  - Cek Tak Laku (Cek tendang)\n  Sebelah KREDIT (Mengurangkan Hutang Pelanggan):\n  - Bank / Tunai (Penerimaan bayaran daripada ABT)\n  - Diskaun Diberi\n  - Pulangan Jualan (daripada Jurnal Pulangan Jualan)\n  - Hutang Lapuk (Hutang dihapus kira)\n  - Pindahan Kontra (Pindahan ke Lejar Belian)\n  - Baki Akhir h/b (Jumlah baki ABT akhir)",
          "JALAN KERJA FORMAT AKAUN KAWALAN BELUM BAYAR (LEJAR BELIAN):\n  Sebelah KREDIT (Menambah Hutang kepada Pembekal):\n  - Baki Awal b/b (Baki Kredit ABB)\n  - Belian Kredit (daripada Jurnal Belian)\n  - Faedah dikenakan oleh pembekal\n  Sebelah DEBIT (Mengurangkan Hutang kepada Pembekal):\n  - Bank / Tunai (Bayaran kepada ABB)\n  - Diskaun Diterima\n  - Pulangan Belian (daripada Jurnal Pulangan Belian)\n  - Pindahan Kontra (Pindahan ke Lejar Jualan)\n  - Baki Akhir h/b (Jumlah baki ABB akhir)",
          "CONTOH PENGIRAAN LENGKAP AKAUN KAWALAN BELUM TERIMA:\n  Baki awal ABT: RM8,500. Sepanjang bulan: Jualan kredit RM24,000; Terima cek daripada ABT RM19,500; Diskaun diberi RM500; Pulangan jualan RM800; Hutang lapuk RM200; Cek tak laku RM600.\n  Langkah 1: Jumlahkan Sebelah Debit = 8,500 + 24,000 + 600 = RM33,100\n  Langkah 2: Jumlahkan Kredit Sebelum Baki = 19,500 + 500 + 800 + 200 = RM21,000\n  Langkah 3: Hitung Baki Akhir h/b ABT = 33,100 - 21,000 = RM12,100!"
        ],
        "explanation": "Item seperti Jualan Tunai, Belian Tunai, dan Peruntukan Hutang Ragu TIDAK MASUK ke dalam Akaun Kawalan kerana tidak melibatkan akaun pelanggan/pembekal kredit."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Gunakan Hukum ALBEH",
        "desc": "Aset dan Belanja bertambah di Debit; Liabiliti, Ekuiti, dan Hasil bertambah di Kredit.",
        "tip": "Pastikan nilai debit sentiasa menyamai nilai kredit bagi setiap urus niaga."
      },
      {
        "step": "Langkah 2",
        "title": "Asingkan Urus Niaga Akaun Kawalan",
        "desc": "Hanya masukkan urus niaga kredit. Jualan tunai, belian tunai, dan peruntukan hutang ragu TIDAK dimasukkan ke Akaun Kawalan.",
        "tip": "Awas: Jangan masukkan diskaun niaga ke dalam Akaun Kawalan."
      },
      {
        "step": "Langkah 3",
        "title": "Kira Baki h/b dan Baki b/b",
        "desc": "Jumlahkan kedua-dua belah, cari perbezaan baki h/b di sebelah kecil, dan bawa ke sebelah bertentangan sebagai baki b/b.",
        "tip": "Baki akhir ABT normal berada di sebelah kredit sebagai h/b dan didebitkan sebagai b/b."
      },
      {
        "step": "Langkah 4",
        "title": "Semak Baki Lejar Subsidiari",
        "desc": "Pastikan baki akhir Akaun Kawalan sama dengan jumlah senarai baki lejar subsidiari.",
        "tip": "Persamaan ini membuktikan tiada kesilapan aritmetik di dalam lejar subsidiari."
      }
    ],
    "keypoints": [
      "Hukum Catatan Bergu: Debit Aset/Belanja yang bertambah; Kredit Liabiliti/Modal/Hasil yang bertambah.",
      "Akaun Nominal: Hasil dan Belanja (ditutup ke Akaun Perdagangan dan Untung Rugi).",
      "Akaun Nyata: Aset (diimbangi membawa baki b/b ke tempoh hadapan).",
      "Akaun Kawalan Belum Terima: Mencari jumlah Jualan Kredit atau Baki Akhir ABT.",
      "Akaun Kawalan Belum Bayar: Mencari jumlah Belian Kredit atau Baki Akhir ABB.",
      "Item Dilarang Masuk Akaun Kawalan: Jualan Tunai, Belian Tunai, Peruntukan Hutang Ragu."
    ],
    "questions": [
      {
        "question": "Antara butiran berikut, manakah yang TIDAK dicatat di dalam Akaun Kawalan Belum Terima?",
        "options": [
          "Jualan Tunai",
          "Diskaun Diberi",
          "Hutang Lapuk",
          "Pulangan Jualan"
        ],
        "answer": "Jualan Tunai",
        "explanation": "Jualan tunai direkodkan terus ke dalam Buku Tunai dan Akaun Jualan. Ia tidak melibatkan Akaun Belum Terima (pelanggan kredit), maka tidak dicatat dalam Akaun Kawalan Belum Terima."
      },
      {
        "question": "Diberi baki awal Akaun Belum Bayar RM6,000, Belian Kredit RM18,000, Bayaran cek kepada pembekal RM14,500, Diskaun Diterima RM500, dan Pulangan Belian RM800. Berapakah baki akhir Akaun Belum Bayar?",
        "options": [
          "RM8,200",
          "RM7,700",
          "RM9,000",
          "RM8,700"
        ],
        "answer": "RM8,200",
        "explanation": "Jalan kerja pengiraan Akaun Kawalan Belum Bayar:\nSebelah Kredit (Hutang bertambah) = Baki Awal (6,000) + Belian Kredit (18,000) = RM24,000.\nSebelah Debit (Hutang berkurang) = Bank (14,500) + Diskaun Diterima (500) + Pulangan Belian (800) = RM15,800.\nBaki Akhir ABB (h/b) = RM24,000 - RM15,800 = RM8,200."
      }
    ],
    "struktur": [
      {
        "soalan": "Maklumat berikut diambil daripada buku Perniagaan Megah bagi bulan Jun 2025:\n- 1 Jun: Baki Akaun Belum Terima RM14,200\n- Jualan Kredit RM36,000\n- Jualan Tunai RM8,000\n- Penerimaan cek daripada penghutang RM32,400\n- Diskaun diberi RM1,100\n- Pulangan jualan RM900\n- Hutang lapuk dihapuskira RM400\n- Cek tak laku RM800\n(a) Sediakan Akaun Kawalan Belum Terima bagi bulan Jun 2025. [5 markah]\n(b) Nyatakan mengapakah jualan tunai tidak dicatat dalam akaun kawalan tersebut. [1 markah]",
        "markah": "6 Markah",
        "jawapan": "(a) Jalan Kerja Penyediaan Akaun Kawalan Belum Terima:\nSebelah Debit:\n- Baki b/b: RM14,200 [1m]\n- Jualan Kredit: RM36,000 [1m]\n- Bank (Cek Tak Laku): RM800 [1m]\n(Jumlah Debit = RM51,000)\n\nSebelah Kredit:\n- Bank (Terimaan Cek): RM32,400 [1m]\n- Diskaun Diberi: RM1,100\n- Pulangan Jualan: RM900\n- Hutang Lapuk: RM400\n- Baki h/b (Pengimbang): RM51,000 - (32,400 + 1,100 + 900 + 400) = RM16,200 [1m]\n(Jumlah Kredit = RM51,000)\n\n(b) Jualan tunai tidak dicatatkan kerana urus niaga tunai tidak melibatkan hutang pelanggan kredit (Akaun Belum Terima) [1m].",
        "panduanKoreksi": "5m untuk Akaun Kawalan tepat (Debit RM51,000, Baki akhir h/b RM16,200) + 1m untuk sebab jualan tunai tidak dicatat."
      }
    ]
  },
  {
    "id": "akaun-bab6",
    "babNum": "MODUL 6",
    "title": "Imbangan Duga",
    "synopsis": "Memahami fungsi Imbangan Duga untuk menguji ketepatan catatan bergu aritmetik lejar, penyediaan Imbangan Duga, hubungan antara Imbangan Duga dengan Inventori Akhir, serta penyediaan Penyata Kewangan.",
    "notes": [
      {
        "subtopic": "6.1 Fungsi dan Penyediaan Imbangan Duga",
        "summary": "Imbangan Duga ialah senarai semua baki debit dan baki kredit akaun lejar pada tarikh tertentu untuk menguji ketepatan catatan bergu.",
        "verbatim": [
          "Fungsi Imbangan Duga: Menguji ketepatan pengiraan catatan bergu dalam lejar, menyemak ketepatan aritmetik baki akaun, memudahkan penyediaan Penyata Kewangan akhir tahun, dan membuktikan jumlah baki debit sama dengan jumlah baki kredit.",
          "JALAN KERJA PENGIRAAN PENYEDIAAN IMBANGAN DUGA:\n  Peraturan Penempatan Lajur Imbangan Duga:\n  1. Lajur DEBIT: Semua Akaun Aset (cth: Premis, Kenderaan, Bank, ABT), Semua Akaun Belanja (cth: Gaji, Sewa, Belian, Kadar Bayaran, Angkutan Masuk), Ambilan, dan Pulangan Jualan.\n  2. Lajur KREDIT: Semua Akaun Liabiliti (cth: ABB, Pinjaman Bank, Overdraf), Ekuiti Pemilik (Modal), Semua Akaun Hasil (cth: Jualan, Sewa Diterima, Komisen Diterima), Pulangan Belian, Peruntukan Hutang Ragu, dan Susut Nilai Terkumpul.",
          "Batasan Imbangan Duga: Walaupun Imbangan Duga seimbang, ini TIDAK bermakna tiada kesilapan dalam lejar, kerana terdapat 6 jenis kesilapan tidak ketara yang tidak menjejaskan keseimbangan (cth: kesilapan ketinggalan, kesilapan komisen, kesilapan prinsip, dsb)."
        ],
        "explanation": "Inventori yang berada di dalam senarai Imbangan Duga ialah Inventori Awal. Inventori Akhir dinilai pada tarikh imbangan melalui pengiraan fizikal stok."
      },
      {
        "subtopic": "6.2 Hubungan antara Imbangan Duga, Inventori Akhir dan Penyata Kewangan",
        "summary": "Inventori akhir dinilai pada harga terendah antara kos dan nilai pasaran (nilai realisasi bersih) mengikut Prinsip Konservatisme.",
        "verbatim": [
          "Penilaian Inventori Akhir: Inventori akhir dinilai berasaskan Harga Terendah antara Kos dengan Nilai Pasaran (Nilai Realisasi Bersih).\n  Contoh: Jika Nilai Kos = RM15,000 dan Nilai Pasaran = RM13,500 -> Nilai Inventori Akhir yang direkodkan ialah RM13,500!\n  Kesan Catatan Bergu Inventori Akhir:\n  Debit: Akaun Inventori (Aset Semasa dalam Penyata Kedudukan Kewangan)\n  Kredit: Akaun Perdagangan (Menolak Kos Jualan)"
        ],
        "explanation": "Pengiktirafan inventori akhir pada nilai terendah mengelakkan keuntungan dan nilai aset dilaporkan terlebih tinggi."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Asingkan Baki Debit dan Kredit",
        "desc": "Aset, Belanja, Ambilan, Pulangan Jualan letak di DEBIT. Liabiliti, Ekuiti, Hasil, Pulangan Belian letak di KREDIT.",
        "tip": "Ingat akronim ALBEH."
      },
      {
        "step": "Langkah 2",
        "title": "Periksa Penilaian Inventori Akhir",
        "desc": "Pilih nilai paling rendah antara harga kos dan harga pasaran.",
        "tip": "Nilai kos RM10,000 vs pasaran RM8,500 -> Ambil RM8,500."
      },
      {
        "step": "Langkah 3",
        "title": "Jumlahkan Kedua-dua Lajur",
        "desc": "Jumlah Debit mesti sama dengan Jumlah Kredit.",
        "tip": "Jika tidak seimbang, semak semula baki akaun songsang seperti Pulangan Jualan (Debit) dan Pulangan Belian (Kredit)."
      }
    ],
    "keypoints": [
      "Fungsi Imbangan Duga: Menyemak ketepatan aritmetik catatan bergu.",
      "Lajur Debit: Aset, Belanja, Ambilan, Pulangan Jualan.",
      "Lajur Kredit: Liabiliti, Modal, Hasil, Pulangan Belian, Peruntukan Hutang Ragu, Susut Nilai Terkumpul.",
      "Inventori Akhir: Dinilai pada harga terendah antara kos dan nilai pasaran."
    ],
    "questions": [
      {
        "question": "Item manakah yang dicatat di sebelah KREDIT dalam Imbangan Duga?",
        "options": [
          "Pulangan Belian",
          "Pulangan Jualan",
          "Angkutan Masuk",
          "Ambilan"
        ],
        "answer": "Pulangan Belian",
        "explanation": "Pulangan Belian mengurangkan nilai belanja belian, maka berbaki normal Kredit, manakala Pulangan Jualan, Angkutan Masuk dan Ambilan berbaki Debit."
      }
    ],
    "struktur": [
      {
        "soalan": "Pada 31 Disember, pengiraan fizikal stok sebuah perniagaan mendapati nilai kos inventori ialah RM28,000 manakala nilai pasaran bersih ialah RM25,500.\n(a) Berapakah nilai inventori akhir yang perlu dicatat dalam Penyata Kewangan? [1 markah]\n(b) Nyatakan prinsip perakaunan yang terlibat. [1 markah]\n(c) Nyatakan kesan catatan bergu bagi inventori akhir tersebut. [2 markah]",
        "markah": "4 Markah",
        "jawapan": "(a) Nilai Inventori Akhir = RM25,500 [1m] (iaitu nilai terendah antara kos dan nilai pasaran).\n(b) Prinsip Konservatisme (atau Berhemat) [1m].\n(c) Catatan Bergu: Debit Akaun Inventori (Aset Semasa dalam PKK) [1m] dan Kredit Akaun Perdagangan (menolak kos jualan) [1m].",
        "panduanKoreksi": "1m nilai RM25,500 + 1m prinsip konservatisme + 2m catatan bergu tepat."
      }
    ]
  },
  {
    "id": "akaun-bab7",
    "babNum": "MODUL 7",
    "title": "Penyata Kewangan Milikan Tunggal Tanpa Pelarasan",
    "synopsis": "Menyediakan Akaun Perdagangan dan Untung Rugi untuk mengira Untung Kasar dan Untung Bersih, serta Penyata Kedudukan Kewangan (format penyata dan format T) bagi perniagaan milikan tunggal tanpa pelarasan, berserta catatan penutupan akaun.",
    "notes": [
      {
        "subtopic": "7.1 Akaun Perdagangan (Pengiraan Kos Jualan dan Untung Kasar)",
        "summary": "Akaun Perdagangan disediakan untuk menghitung Untung Kasar atau Rugi Kasar hasil daripada aktiviti jual beli barang niaga.",
        "verbatim": [
          "JALAN KERJA PENGIRAAN LENGKAP AKAUN PERDAGANGAN:\n  1. Jualan Bersih = Jualan - Pulangan Jualan\n  2. Belian Bersih = Belian - Pulangan Belian\n  3. Kos Atas Belian = Duti Import / Duti Atas Belian + Tambang Masuk (Angkutan Masuk) + Insurans Atas Belian + Upah Atas Belian\n  4. Kos Belian = Belian Bersih + Kos Atas Belian\n  5. Kos Barang Untuk Dijual = Inventori Awal + Kos Belian\n  6. Kos Jualan = Kos Barang Untuk Dijual - Inventori Akhir\n  7. UNTUNG KASAR = Jualan Bersih - Kos Jualan  (Jika negatif = Rugi Kasar)",
          "Contoh Pengiraan Lengkap:\n  Jualan RM80,000; Pulangan Jualan RM2,000; Inventori Awal RM10,000; Belian RM45,000; Pulangan Belian RM1,500; Angkutan Masuk RM1,200; Duti Import RM800; Inventori Akhir RM12,000.\n  Langkah 1: Jualan Bersih = 80,000 - 2,000 = RM78,000\n  Langkah 2: Belian Bersih = 45,000 - 1,500 = RM43,500\n  Langkah 3: Kos Atas Belian = 1,200 + 800 = RM2,000\n  Langkah 4: Kos Belian = 43,500 + 2,000 = RM45,500\n  Langkah 5: Kos Jualan = Inventori Awal (10,000) + Kos Belian (45,500) - Inventori Akhir (12,000) = RM43,500\n  Langkah 6: Untung Kasar = Jualan Bersih (78,000) - Kos Jualan (43,500) = RM34,500!"
        ],
        "explanation": "Kos atas belian merujuk kepada belanja langsung yang dibayar untuk membawa barang niaga masuk ke dalam premis perniagaan."
      },
      {
        "subtopic": "7.2 Akaun Untung Rugi (Pengiraan Untung Bersih)",
        "summary": "Akaun Untung Rugi disediakan untuk menghitung Untung Bersih atau Rugi Bersih perniagaan setelah mengambil kira semua hasil dan belanja operasi.",
        "verbatim": [
          "JALAN KERJA PENGIRAAN UNTUNG BERSIH:\n  Untung Bersih = Untung Kasar + Jumlah Hasil - Jumlah Belanja\n  Contoh Pengiraan:\n  Untung Kasar (dari Akaun Perdagangan) = RM34,500\n  Tambah Hasil: Komisen Diterima RM1,500; Sewa Diterima RM2,000; Diskaun Diterima RM600 (Jumlah Hasil = RM4,100)\n  Tolak Belanja: Gaji Pekerja RM12,000; Sewa Kedai RM6,000; Kadar Bayaran RM1,800; Belanja Am RM800; Diskaun Diberi RM500; Angkutan Keluar RM900 (Jumlah Belanja = RM22,000)\n  Untung Bersih = 34,500 + 4,100 - 22,000 = RM16,600!"
        ],
        "explanation": "Untung Bersih akan dipindahkan ke Penyata Kedudukan Kewangan untuk menambahkan Ekuiti Pemilik."
      },
      {
        "subtopic": "7.3 Penyata Kedudukan Kewangan (PKK)",
        "summary": "Penyata Kedudukan Kewangan menyenaraikan baki aset, liabiliti dan ekuiti pemilik pada tarikh tutup akaun.",
        "verbatim": [
          "Format Penyata Kedudukan Kewangan:\n  Aset Bukan Semasa (ABS)\n  + Modal Kerja (Aset Semasa - Liabiliti Semasa)\n  = Jumlah Aset Bersih\n  Dibiayai oleh:\n  Ekuiti Pemilik: Modal Awal + Untung Bersih - Ambilan = Modal Akhir\n  + Liabiliti Bukan Semasa (Pinjaman Bank Jangka Panjang)\n  = Jumlah Ekuiti & Liabiliti Bukan Semasa\n  Formula Modal Kerja: Modal Kerja = Aset Semasa (AS) - Liabiliti Semasa (LS)"
        ],
        "explanation": "Modal kerja positif menunjukkan perniagaan mempunyai keupayaan tunai mencukupi untuk membiayai operasi harian dan membayar hutang jangka pendek."
      },
      {
        "subtopic": "7.4 Penutupan Akaun Hasil, Belanja dan Inventori",
        "summary": "Akaun nominal dipindahkan ke Akaun Perdagangan dan Akaun Untung Rugi melalui catatan penutupan dalam Jurnal Am.",
        "verbatim": [
          "Catatan Penutupan Jurnal Am:\n  - Tutup Jualan: Db. Jualan, Kt. Akaun Perdagangan\n  - Tutup Belian, Angkutan Masuk, Duti: Db. Akaun Perdagangan, Kt. Belian, Angkutan Masuk\n  - Tutup Inventori Awal: Db. Akaun Perdagangan, Kt. Inventori\n  - Rekod Inventori Akhir: Db. Inventori, Kt. Akaun Perdagangan\n  - Pindah Untung Kasar: Db. Akaun Perdagangan, Kt. Akaun Untung Rugi\n  - Pindah Untung Bersih: Db. Akaun Untung Rugi, Kt. Akaun Modal"
        ],
        "explanation": "Proses penutupan menjadikan baki semua akaun hasil dan belanja sifar bagi memulakan kiraan tempoh kewangan baharu."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Kira Kos Jualan",
        "desc": "Kos Jualan = Inventori Awal + Belian Bersih + Kos Atas Belian - Inventori Akhir.",
        "tip": "Ingat kos atas belian: Duti import, tambang masuk, insurans belian, upah belian."
      },
      {
        "step": "Langkah 2",
        "title": "Kira Untung Kasar",
        "desc": "Untung Kasar = Jualan Bersih - Kos Jualan.",
        "tip": "Jualan Bersih = Jualan tolak Pulangan Jualan."
      },
      {
        "step": "Langkah 3",
        "title": "Kira Untung Bersih",
        "desc": "Untung Bersih = Untung Kasar + Hasil - Belanja.",
        "tip": "Angkutan keluar adalah belanja di Akaun Untung Rugi, BUKAN kos jualan!"
      },
      {
        "step": "Langkah 4",
        "title": "Sediakan Penyata Kedudukan Kewangan",
        "desc": "Susun Aset Bukan Semasa, Aset Semasa, Liabiliti Semasa (kira Modal Kerja = AS - LS), dan Ekuiti Pemilik.",
        "tip": "Modal Akhir = Modal Awal + Untung Bersih - Ambilan."
      }
    ],
    "keypoints": [
      "Formula Kos Jualan: Inventori Awal + Belian Bersih + Kos Atas Belian - Inventori Akhir.",
      "Formula Untung Kasar: Jualan Bersih - Kos Jualan.",
      "Formula Untung Bersih: Untung Kasar + Jumlah Hasil - Jumlah Belanja.",
      "Formula Modal Kerja: Aset Semasa - Liabiliti Semasa.",
      "Ekuiti Pemilik: Modal Awal + Untung Bersih - Ambilan = Modal Akhir."
    ],
    "questions": [
      {
        "question": "Diberi Inventori Awal RM15,000, Belian RM50,000, Pulangan Belian RM2,000, Angkutan Masuk RM1,500, dan Inventori Akhir RM12,500. Berapakah Kos Jualan?",
        "options": [
          "RM52,000",
          "RM49,500",
          "RM54,000",
          "RM56,000"
        ],
        "answer": "RM52,000",
        "explanation": "Jalan kerja pengiraan: Belian Bersih = 50,000 - 2,000 = RM48,000. Kos Belian = 48,000 + 1,500 (Angkutan Masuk) = RM49,500. Kos Jualan = Inventori Awal (15,000) + Kos Belian (49,500) - Inventori Akhir (12,500) = RM52,000."
      }
    ],
    "struktur": [
      {
        "soalan": "Maklumat berikut diperoleh daripada buku Perniagaan Anugerah pada 31 Disember 2025:\nJualan RM120,000; Pulangan Jualan RM3,000; Inventori Awal RM18,000; Belian RM65,000; Pulangan Belian RM2,500; Duti Import RM1,500; Angkutan Masuk RM2,000; Inventori Akhir RM16,000; Jumlah Belanja Operasi RM24,000; Komisen Diterima RM3,500.\n(a) Hitungkan Jualan Bersih dan Kos Jualan. [3 markah]\n(b) Hitungkan Untung Kasar dan Untung Bersih Perniagaan Anugerah. [3 markah]",
        "markah": "6 Markah",
        "jawapan": "(a) Jalan Kerja Pengiraan:\n1. Jualan Bersih = Jualan (120,000) - Pulangan Jualan (3,000) = RM117,000 [1m]\n2. Belian Bersih = Belian (65,000) - Pulangan Belian (2,500) = RM62,500\n3. Kos Atas Belian = Duti Import (1,500) + Angkutan Masuk (2,000) = RM3,500\n4. Kos Jualan = Inventori Awal (18,000) + Belian Bersih (62,500) + Kos Belian (3,500) - Inventori Akhir (16,000) = RM68,000 [2m]\n\n(b) Jalan Kerja Pengiraan Keuntungan:\n1. Untung Kasar = Jualan Bersih (117,000) - Kos Jualan (68,000) = RM49,000 [1m]\n2. Untung Bersih = Untung Kasar (49,000) + Hasil Komisen (3,500) - Belanja (24,000) = RM28,500 [2m].",
        "panduanKoreksi": "3m untuk Jualan Bersih (RM117,000) dan Kos Jualan (RM68,000) + 3m untuk Untung Kasar (RM49,000) dan Untung Bersih (RM28,500)."
      }
    ]
  },
  {
    "id": "akaun-bab8",
    "babNum": "MODUL 8",
    "title": "Pelarasan Pada Tarikh Imbangan dan Penyata Kewangan",
    "synopsis": "Menguasai prinsip perakaunan asas akruan untuk melaraskan belanja terakru, belanja prabayar, hasil terakru, hasil belum terperoleh, hutang lapuk, peruntukan hutang ragu, kaedah susut nilai aset bukan semasa, pelupusan aset, serta penyediaan penyata kewangan lengkap terselaras.",
    "notes": [
      {
        "subtopic": "8.1 Pelarasan Belanja Terakru dan Belanja Prabayar",
        "summary": "Melaraskan perbelanjaan sebenar tempoh perakaunan mengikut Asas Akruan.",
        "verbatim": [
          "JALAN KERJA PENGIRAAN BELANJA TERAKRU & PRABAYAR:\n  1. Belanja Terakru: Belanja yang telah dinikmati manfaatnya dalam tempoh semasa tetapi belum dibayar sehingga tarikh imbangan.\n     - Formula Catatan Belanja Semasa = Belanja Dibayar + Belanja Terakru\n     - Kesan PKK: Masuk ke Liabiliti Semasa!\n  2. Belanja Prabayar: Belanja yang telah dibayar pada tempoh semasa tetapi untuk manfaat tempoh akan datang.\n     - Formula Catatan Belanja Semasa = Belanja Dibayar - Belanja Prabayar\n     - Kesan PKK: Masuk ke Aset Semasa!\n  Contoh Pengiraan:\n  Buku Tunai mencatat Bayaran Sewa RM13,000. Sewa bulanan ialah RM1,000 (Sewa setahun sepatutnya = RM12,000).\n  Sewa Prabayar = RM13,000 - RM12,000 = RM1,000 (Aset Semasa)\n  Belanja Sewa dalam Akaun Untung Rugi = RM12,000."
        ],
        "explanation": "Asas akruan memastikan hanya belanja yang berkaitan dengan tempoh perakaunan semasa diambil kira dalam pengiraan keuntungan."
      },
      {
        "subtopic": "8.2 Pelarasan Hasil Terakru dan Hasil Belum Terperoleh",
        "summary": "Melaraskan pendapatan hasil sebenar yang diperoleh dalam tempoh perakaunan.",
        "verbatim": [
          "JALAN KERJA PENGIRAAN HASIL TERAKRU & BELUM TERPEROLEH:\n  1. Hasil Terakru: Hasil yang sudah diperoleh tetapi wang belum diterima pada tarikh imbangan.\n     - Formula Hasil Semasa = Hasil Diterima + Hasil Terakru\n     - Kesan PKK: Masuk ke Aset Semasa!\n  2. Hasil Belum Terperoleh: Hasil yang sudah diterima wangnya tetapi perkhidmatan/barang belum diserahkan (hasil terdahulu).\n     - Formula Hasil Semasa = Hasil Diterima - Hasil Belum Terperoleh\n     - Kesan PKK: Masuk ke Liabiliti Semasa!"
        ],
        "explanation": "Hasil belum terperoleh menjadi liabiliti kerana perniagaan berhutang obligasi perkhidmatan kepada pelanggan."
      },
      {
        "subtopic": "8.3 Hutang Lapuk, Hutang Lapuk Terpulih dan Peruntukan Hutang Ragu",
        "summary": "Mengiktiraf kerugian penghutang yang tidak dapat dikutip dan menganggarkan risiko hutang ragu mengikut Prinsip Konservatisme.",
        "verbatim": [
          "1. Hutang Lapuk: Hutang pelanggan yang disahkan tidak dapat dikutip semula akibat muflis atau meninggal dunia.\n   - Catatan: Debit Hutang Lapuk (Belanja), Kredit Akaun Belum Terima (mengurangkan baki ABT).\n2. Hutang Lapuk Terpulih: Penerimaan semula wang hutang yang telah dihapuskira sebelum ini (diiktiraf sebagai Hasil).\n3. JALAN KERJA PENGIRAAN PERUNTUKAN HUTANG RAGU (PHR):\n   Formula PHR Baru = Peratus PHR x (Akaun Belum Terima - Hutang Lapuk Belum Direkod)\n   Pelarasan PHR Akhir Tahun (Bandingkan PHR Baru dengan PHR Lama):\n   - Jika PHR Baru > PHR Lama -> Wujud PERTAMBAHAN PHR (Catat sebagai BELANJA di Akaun Untung Rugi).\n   - Jika PHR Baru < PHR Lama -> Wujud PENGURANGAN PHR (Catat sebagai HASIL di Akaun Untung Rugi).\n   Contoh Pengiraan:\n   Baki ABT = RM20,500; Maklumat tambahan: Seorang pelanggan muflis berhutang RM500 dihapus kira sebagai hutang lapuk. PHR diselaraskan kepada 5% atas baki ABT bersih. Baki PHR lama dalam Imbangan Duga = RM800.\n   Langkah 1: ABT Bersih = RM20,500 - RM500 = RM20,000\n   Langkah 2: PHR Baru = 5% x RM20,000 = RM1,000\n   Langkah 3: Pelarasan = PHR Baru (1,000) - PHR Lama (800) = RM200 (Pertambahan PHR -> Belanja RM200)\n   Langkah 4: Dalam PKK: ABT (20,000) tolak PHR Baru (1,000) = Nilai Realisasi Bersih RM19,000!"
        ],
        "explanation": "PHR mengurangkan baki Akaun Belum Terima dalam Penyata Kedudukan Kewangan agar dilaporkan pada nilai realisasi bersih."
      },
      {
        "subtopic": "8.4 Susut Nilai dan Susut Nilai Terkumpul Aset Bukan Semasa",
        "summary": "Susut nilai mengagihkan kos aset bukan semasa sepanjang usia gunanya mengikut Prinsip Pemadanan.",
        "verbatim": [
          "JALAN KERJA PENGIRAAN DUA KAEDAH SUSUT NILAI UTAMA:\n  1. Kaedah Garis Lurus (Atas Kos):\n     - Formula A: Susut Nilai = (Kos Asal - Nilai Skrap/Sisa) / Usia Guna (Tahun)\n     - Formula B: Susut Nilai = Peratus Susut Nilai x Kos Asal Aset\n     (Amaun susut nilai adalah TETAP sama setiap tahun!)\n     Contoh: Mesin berkos RM50,000 disusutnilaikan 10% setahun atas kos. Susut nilai tahunan = 10% x RM50,000 = RM5,000 setahun.\n\n  2. Kaedah Baki Berkurangan:\n     - Formula: Susut Nilai = Peratus Susut Nilai x Nilai Buku Bersih\n     - Susut Nilai = Peratus x (Kos Asal - Susut Nilai Terkumpul Awal)\n     (Amaun susut nilai semakin berkurang setiap tahun!)\n     Contoh: Kenderaan berkos RM60,000, susut nilai 20% setahun kaedah baki berkurangan. Susut nilai terkumpul awal = RM12,000.\n     Nilai Buku Bersih Awal = RM60,000 - RM12,000 = RM48,000\n     Susut Nilai Tahun Semasa = 20% x RM48,000 = RM9,600!\n     Susut Nilai Terkumpul Baru = 12,000 + 9,600 = RM21,600\n     Nilai Buku Baru dalam PKK = RM60,000 - RM21,600 = RM38,400."
        ],
        "explanation": "Susut nilai tahunan dicatat sebagai Belanja di Akaun Untung Rugi, manakala Susut Nilai Terkumpul ditolak daripada Kos Aset Bukan Semasa di Penyata Kedudukan Kewangan."
      },
      {
        "subtopic": "8.5 Pelupusan Aset Bukan Semasa secara Tunai",
        "summary": "Pelupusan aset berlaku apabila aset bukan semasa dijual atau ditamatkan penggunaannya, menghasilkan untung atau rugi pelupusan.",
        "verbatim": [
          "JALAN KERJA PENGIRAAN UNTUNG / RUGI PELUPUSAN ASET:\n  1. Nilai Buku Bersih Aset = Kos Asal Aset - Jumlah Susut Nilai Terkumpul pada Tarikh Pelupusan\n  2. Untung / Rugi Pelupusan = Harga Jualan Pelupusan - Nilai Buku Bersih Aset\n     - Jika Harga Jualan > Nilai Buku -> UNTUNG PELUPUSAN (Catat sebagai HASIL di Akaun Untung Rugi)\n     - Jika Harga Jualan < Nilai Buku -> RUGI PELUPUSAN (Catat sebagai BELANJA di Akaun Untung Rugi)\n  Contoh Pengiraan:\n  Sebuah van dibeli dengan kos RM40,000 telah disusutnilaikan sebanyak RM28,000 sehingga tarikh dijual. Van tersebut dijual pada harga RM15,000 secara tunai.\n  Nilai Buku Van = Kos (40,000) - SN Terkumpul (28,000) = RM12,000\n  Untung Pelupusan = Harga Jual (15,000) - Nilai Buku (12,000) = +RM3,000 (Untung Pelupusan RM3,000 direkod sebagai Hasil)."
        ],
        "explanation": "Akaun Pelupusan Aset dibuka untuk mengumpulkan kos aset, susut nilai terkumpul, harga jualan dan mengira untung/rugi pelupusan."
      },
      {
        "subtopic": "8.6 Penyata Kewangan Lengkap dengan Pelarasan",
        "summary": "Menggabungkan semua item pelarasan ke dalam Penyata Pendapatan dan Penyata Kedudukan Kewangan untuk menghasilkan laporan kewangan yang benar dan saksama.",
        "verbatim": [
          "Rumusan Kesan Pelarasan dalam Penyata Kewangan:\n  1. Belanja Terakru: + Belanja (AUR) & Liabiliti Semasa (PKK)\n  2. Belanja Prabayar: - Belanja (AUR) & Aset Semasa (PKK)\n  3. Hasil Terakru: + Hasil (AUR) & Aset Semasa (PKK)\n  4. Hasil Belum Terperoleh: - Hasil (AUR) & Liabiliti Semasa (PKK)\n  5. Pertambahan PHR: Belanja (AUR) & tolak ABT dalam PKK\n  6. Pengurangan PHR: Hasil (AUR) & tolak ABT dalam PKK\n  7. Susut Nilai: Belanja (AUR) & tolak Kos ABS dalam PKK"
        ],
        "explanation": "Semua pelarasan melibatkan satu kesan ke atas Akaun Untung Rugi dan satu kesan ke atas Penyata Kedudukan Kewangan."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Kira Pelarasan Belanja & Hasil",
        "desc": "Terakru (+) dan Prabayar/Belum Terperoleh (-).",
        "tip": "Jangan lupa masukkan baki terakru/prabayar ke bahagian Aset Semasa atau Liabiliti Semasa dalam PKK."
      },
      {
        "step": "Langkah 2",
        "title": "Kira Hutang Lapuk & PHR",
        "desc": "Tolak hutang lapuk daripada ABT dahulu, kemudian darab peratus PHR. Bandingkan dengan PHR lama.",
        "tip": "Pertambahan PHR = Belanja; Pengurangan PHR = Hasil."
      },
      {
        "step": "Langkah 3",
        "title": "Kira Susut Nilai",
        "desc": "Garis lurus darab Kos Asal; Baki berkurangan darab Nilai Buku (Kos - SN Terkumpul).",
        "tip": "Susut nilai tahun semasa dicampur ke SN terkumpul lama untuk ditolak dalam PKK."
      },
      {
        "step": "Langkah 4",
        "title": "Sediakan Penyata Kewangan Seimbang",
        "desc": "Pindahkan angka terselaras ke Penyata Pendapatan dan PKK.",
        "tip": "Pastikan Untung Bersih terselaras dipindahkan ke Ekuiti Pemilik."
      }
    ],
    "keypoints": [
      "Belanja Terakru: Belanja (+), Liabiliti Semasa (+).",
      "Belanja Prabayar: Belanja (-), Aset Semasa (+).",
      "Hasil Terakru: Hasil (+), Aset Semasa (+).",
      "Hasil Belum Terperoleh: Hasil (-), Liabiliti Semasa (+).",
      "Susut Nilai Kaedah Garis Lurus: % x Kos Asal (amaun malar).",
      "Susut Nilai Kaedah Baki Berkurangan: % x (Kos - Susut Nilai Terkumpul).",
      "Untung Pelupusan: Harga Jualan tolak Nilai Buku Bersih Aset."
    ],
    "questions": [
      {
        "question": "Kenderaan bernilai kos RM50,000 mempunyai susut nilai terkumpul RM18,000. Kadar susut nilai ialah 10% setahun mengikut kaedah baki berkurangan. Berapakah susut nilai kenderaan bagi tahun semasa?",
        "options": [
          "RM3,200",
          "RM5,000",
          "RM1,800",
          "RM6,800"
        ],
        "answer": "RM3,200",
        "explanation": "Jalan kerja pengiraan kaedah baki berkurangan: Nilai Buku Awal = Kos (50,000) - SN Terkumpul (18,000) = RM32,000. Susut nilai tahun semasa = 10% x RM32,000 = RM3,200."
      }
    ],
    "struktur": [
      {
        "soalan": "Maklumat berikut dipetik daripada Imbangan Duga Perniagaan Saujana pada 31 Disember 2025:\n- Akaun Belum Terima: RM32,000\n- Peruntukan Hutang Ragu: RM900\n- Kenderaan: RM60,000\n- Susut Nilai Terkumpul Kenderaan: RM12,000\n- Insurans: RM3,600\nMaklumat Tambahan pada 31 Disember 2025:\n(i) Seorang pelanggan disahkan muflis dan hutangnya RM2,000 dihapus kira sebagai hutang lapuk.\n(ii) Peruntukan hutang ragu diselaraskan kepada 5% atas baki Akaun Belum Terima bersih.\n(iii) Kenderaan disusutnilaikan 10% setahun mengikut kaedah garis lurus.\n(iv) Insurans prabayar berjumlah RM600.\nHitungkan:\n(a) Amaun hutang lapuk dan pertambahan/pengurangan peruntukan hutang ragu untuk Akaun Untung Rugi. [3 markah]\n(b) Amaun susut nilai kenderaan dan belanja insurans bagi tahun 2025. [2 markah]\n(c) Nilai bersih Akaun Belum Terima dan nilai buku kenderaan yang akan ditunjukkan dalam Penyata Kedudukan Kewangan. [2 markah]",
        "markah": "7 Markah",
        "jawapan": "(a) Jalan Kerja Pengiraan Hutang Lapuk & PHR:\n1. Hutang Lapuk = RM2,000 (Belanja) [1m]\n2. Baki ABT Bersih = RM32,000 - RM2,000 = RM30,000\n3. PHR Baru = 5% x RM30,000 = RM1,500\n4. Pelarasan PHR = PHR Baru (1,500) - PHR Lama (900) = RM600 (Pertambahan PHR -> Belanja) [2m]\n\n(b) Jalan Kerja Pengiraan Susut Nilai & Insurans:\n1. Susut Nilai Kenderaan (Garis Lurus) = 10% x Kos (RM60,000) = RM6,000 (Belanja) [1m]\n2. Belanja Insurans = Insurans Dibayar (3,600) - Prabayar (600) = RM3,000 (Belanja) [1m]\n\n(c) Jalan Kerja Nilai dalam PKK:\n1. ABT Bersih dalam PKK = ABT (30,000) - PHR Baru (1,500) = RM28,500 [1m]\n2. Nilai Buku Kenderaan = Kos (60,000) - SN Terkumpul Baru (12,000 + 6,000 = 18,000) = RM42,000 [1m].",
        "panduanKoreksi": "3m untuk bahagian (a) + 2m untuk bahagian (b) + 2m untuk nilai bersih PKK."
      }
    ]
  },
  {
    "id": "akaun-bab9",
    "babNum": "MODUL 9",
    "title": "Pembetulan Kesilapan",
    "synopsis": "Mengenal pasti dan membetulkan kesilapan ketara (yang menjejaskan keseimbangan Imbangan Duga) menggunakan Akaun Tergantung, serta enam kesilapan tidak ketara (yang tidak menjejaskan Imbangan Duga) melalui catatan Jurnal Am dan penyediaan Penyata Mengira Untung Bersih Terselaras.",
    "notes": [
      {
        "subtopic": "9.1 Kesilapan Ketara dan Akaun Tergantung",
        "summary": "Kesilapan ketara menyebabkan jumlah debit tidak sama dengan jumlah kredit dalam Imbangan Duga.",
        "verbatim": [
          "Punca Kesilapan Ketara:\n  1. Kesilapan pengiraan baki akaun atau jumlah lajur Imbangan Duga.\n  2. Catatan sebelah sahaja (debit direkod, kredit tertinggal atau sebaliknya).\n  3. Catatan amaun berbeza di sebelah debit dan kredit.\n  4. Catatan dua kali di sebelah yang sama (kedua-duanya didebitkan atau kedua-duanya dikreditkan).\n  5. Baki lejar didebitkan dipindahkan ke sebelah kredit Imbangan Duga (kesilapan pemindahan baki).",
          "Akaun Tergantung: Akaun sementara yang dibuka untuk mengimbangkan perbezaan amaun debit dan kredit dalam Imbangan Duga sementara menanti punca kesilapan dikesan dan dibetulkan."
        ],
        "explanation": "Apabila semua kesilapan ketara telah dibetulkan melalui Jurnal Am, baki Akaun Tergantung akan menjadi sifar secara automatik."
      },
      {
        "subtopic": "9.2 Kesilapan Tidak Ketara",
        "summary": "Enam jenis kesilapan yang tidak menjejaskan keseimbangan Imbangan Duga di mana kedua-dua lajur debit dan kredit tetap seimbang.",
        "verbatim": [
          "Enam Jenis Kesilapan Tidak Ketara:\n  1. Kesilapan Ketinggalan Satu Urus Niaga: Urus niaga langsung tidak direkodkan ke dalam mana-mana buku (cth: Jualan tunai RM500 langsung tidak direkod -> Db. Tunai RM500, Kt. Jualan RM500).\n  2. Kesilapan Komisen: Catatan bergu dibuat pada akaun peribadi individu yang salah tetapi dalam kelas akaun yang betul (cth: Bayaran oleh pelanggan Ahmad RM400 dikreditkan ke Akaun Amad -> Db. Akaun Amad RM400, Kt. Akaun Ahmad RM400).\n  3. Kesilapan Prinsip: Catatan dibuat dalam kelas akaun yang salah dan melanggar prinsip perakaunan (cth: Membeli van pejabat RM40,000 didebitkan ke Akaun Belian -> Db. Kenderaan RM40,000, Kt. Belian RM40,000).\n  4. Kesilapan Amaun: Jumlah angka salah direkodkan di kedua-dua belah debit dan kredit (cth: Belian kredit RM650 direkod RM560 di kedua-dua lejar -> Db. Belian RM90, Kt. ABB RM90).\n  5. Kesilapan Terbalik / Songsang: Catatan debit dikreditkan dan catatan kredit didebitkan (cth: Bayar sewa RM800 dengan cek: didebitkan Akaun Bank dan dikreditkan Akaun Sewa -> Betulkan dengan amaun DUA KALI GANDA: Db. Sewa RM1,600, Kt. Bank RM1,600).\n  6. Kesilapan Saling Mengimbangi: Dua kesilapan berasingan yang membatalkan kesan kesilapan masing-masing (cth: Akaun Gaji terkurang catat RM100 dan Akaun Komisen Diterima juga terkurang catat RM100)."
        ],
        "explanation": "Kesilapan prinsip adalah yang paling serius kerana ia mengelirukan antara perbelanjaan modal (Aset) dengan perbelanjaan hasil (Belanja)."
      },
      {
        "subtopic": "9.3 Penyata Untung Bersih Terselaras",
        "summary": "Selepas kesilapan dibetulkan melalui Jurnal Am, Penyata Mengira Untung Bersih Terselaras disediakan untuk menunjukkan untung bersih sebenar perniagaan.",
        "verbatim": [
          "JALAN KERJA PENGIRAAN UNTUNG BERSIH TERSELARAS:\n  Untung Bersih Sebelum Pembetulan Kesilapan\n  (+) Tambah:\n      - Hasil yang tertinggal catat\n      - Belanja yang terlebih catat\n      - Inventori akhir yang terkurang catat\n  (-) Tolak:\n      - Belanja yang tertinggal catat\n      - Hasil yang terlebih catat\n      - Inventori akhir yang terlebih catat\n  = UNTUNG BERSIH TERSELARAS!\n  Contoh Pengiraan:\n  Untung Bersih belum terselaras = RM25,000\n  Kesilapan yang ditemui:\n  1. Belian perabot RM2,000 tersilap rekod ke Akaun Belian (Belanja terlebih catat RM2,000 -> Tambah RM2,000)\n  2. Komisen diterima RM450 tertinggal catat (Hasil tertinggal -> Tambah RM450)\n  3. Belanja kadar bayaran RM350 tertinggal rekod (Belanja tertinggal -> Tolak RM350)\n  Untung Bersih Terselaras = 25,000 + 2,000 + 450 - 350 = RM27,100!"
        ],
        "explanation": "Pembetulan yang hanya melibatkan Aset dan Liabiliti (seperti pembetulan Akaun Belum Terima atau Bank) TIDAK memberi kesan kepada Untung Bersih."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Kenal Pasti Jenis Kesilapan",
        "desc": "Tentukan sama ada kesilapan ketinggalan, komisen, prinsip, amaun, songsang, atau saling mengimbangi.",
        "tip": "Kesilapan songsang memerlukan pembetulan dua kali ganda amaun."
      },
      {
        "step": "Langkah 2",
        "title": "Sediakan Catatan Jurnal Am",
        "desc": "Debitkan akaun yang sepatutnya didebit dan kreditkan akaun yang tersilap rekod.",
        "tip": "Sertakan keterangan pembetulan di bawah catatan jurnal."
      },
      {
        "step": "Langkah 3",
        "title": "Analisis Kesan ke atas Untung Bersih",
        "desc": "Hanya ambil kira pembetulan yang melibatkan Akaun Hasil atau Belanja.",
        "tip": "Belian aset direkod sebagai belanja belian: untung bersih sebelum ini terkurang, jadi MESTI DITAMBAH."
      },
      {
        "step": "Langkah 4",
        "title": "Kira Untung Bersih Terselaras",
        "desc": "Untung asal + (Hasil tertinggal / Belanja terlebih) - (Belanja tertinggal / Hasil terlebih).",
        "tip": "Periksa semula pengiraan aritmetik akhir."
      }
    ],
    "keypoints": [
      "Kesilapan Ketara: Menjejaskan Imbangan Duga (diimbangi sementara dengan Akaun Tergantung).",
      "Kesilapan Tidak Ketara: Ketinggalan, Komisen, Prinsip, Amaun, Songsang, Saling Mengimbangi.",
      "Kesilapan Prinsip: Melanggar konsep perakaunan (cth: beli aset direkod sebagai belanja).",
      "Kesilapan Songsang: Terbalik debit dan kredit; dibetulkan dengan amaun berganda.",
      "Penyata Untung Bersih Terselaras: Membetulkan untung bersih daripada kesilapan hasil dan belanja."
    ],
    "questions": [
      {
        "question": "Belian alat pendingin hawa pejabat bernilai RM3,500 secara tunai telah didebitkan ke dalam Akaun Belian. Apakah jenis kesilapan ini dan bagaimanakah ia dibetulkan dalam Jurnal Am?",
        "options": [
          "Kesilapan Prinsip: Debit Akaun Lengkapan RM3,500, Kredit Akaun Belian RM3,500",
          "Kesilapan Komisen: Debit Akaun Belian RM3,500, Kredit Akaun Lengkapan RM3,500",
          "Kesilapan Ketinggalan: Debit Akaun Tunai RM3,500, Kredit Akaun Lengkapan RM3,500",
          "Kesilapan Amaun: Debit Akaun Lengkapan RM7,000, Kredit Akaun Belian RM7,000"
        ],
        "answer": "Kesilapan Prinsip: Debit Akaun Lengkapan RM3,500, Kredit Akaun Belian RM3,500",
        "explanation": "Merekodkan belian aset bukan semasa (alatan pejabat/lengkapan) ke dalam akaun belanja (Belian) merupakan kesilapan prinsip kerana melanggar klasifikasi akaun. Catatan pembetulan: Debit Akaun Lengkapan RM3,500 dan Kredit Akaun Belian RM3,500."
      }
    ],
    "struktur": [
      {
        "soalan": "Untung bersih Perniagaan Bestari bagi tahun berakhir 31 Disember 2025 sebelum pembetulan kesilapan ialah RM34,000. Selepas semakan, kesilapan berikut ditemui:\n(i) Belian komputer pejabat RM3,000 telah didebitkan ke dalam Akaun Belian.\n(ii) Belanja membaiki kenderaan RM600 telah tertinggal catat dalam mana-mana buku.\n(iii) Gaji pekerja RM1,500 telah terlebih catat dalam Akaun Gaji sebanyak RM300.\n(iv) Hasil komisen diterima RM850 telah didebitkan ke Akaun Komisen Diterima dan dikreditkan ke Buku Tunai.\n(a) Sediakan catatan Jurnal Am untuk membetulkan kesilapan (i) dan (iv). [4 markah]\n(b) Sediakan Penyata Mengira Untung Bersih Terselaras bagi tahun berakhir 31 Disember 2025. [4 markah]",
        "markah": "8 Markah",
        "jawapan": "(a) Catatan Jurnal Am Pembetulan Kesilapan:\n(i) Db. Alatan Pejabat / Komputer RM3,000\n    Kt. Belian RM3,000 [2m]\n    (Membetulkan kesilapan prinsip belian komputer didebitkan ke Akaun Belian)\n(iv) Db. Bank / Tunai RM1,700\n     Kt. Komisen Diterima RM1,700 [2m]\n     (Membetulkan kesilapan songsang hasil komisen diterima dengan amaun berganda RM850 x 2 = RM1,700)\n\n(b) Jalan Kerja Penyata Untung Bersih Terselaras:\nUntung Bersih Belum Terselaras: RM34,000\nTambah:\n- Belian komputer terlebih rekod dalam belanja belian: +RM3,000 [1m]\n- Belanja gaji terlebih rekod: +RM300 [1m]\n- Komisen diterima (pembetulan hasil): +RM1,700 (atau pelarasan hasil komisen +RM850 x 2)\nTolak:\n- Belanja membaiki kenderaan tertinggal rekod: -RM600 [1m]\nUntung Bersih Terselaras = RM34,000 + RM3,000 + RM300 + RM1,700 - RM600 = RM38,400 [1m].",
        "panduanKoreksi": "4m untuk Jurnal Am (i dan iv) + 4m untuk Penyata Untung Bersih Terselaras lengkap (Untung Terselaras RM38,400)."
      }
    ]
  }
];
