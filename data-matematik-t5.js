/* ==========================================================================
   DATA-MATEMATIK-T5.JS — 100% BAHAN LENGKAP BUKU TEKS MATEMATIK KSSM TINGKATAN 5
   Sumber Rasmi: https://online.anyflip.com/curh/vizj/mobile/index.html
   Semua 8 Bab & 16 Subtopik Rasmi KSSM Lengkap Tanpa Sebarang Tertinggal
   ========================================================================== */

const MATEMATIK_T5_DATA = [
  {
    "id": "math5-bab1",
    "babNum": "BAB 1",
    "title": "UBAHAN",
    "icon": "∝",
    "anyflipPages": "Buku Teks Matematik Tingkatan 5 KSSM (Halaman 2 – 35)",
    "synopsis": "Mengkaji konsep hubungan perkadaran antara dua atau lebih pemboleh ubah merangkumi ubahan langsung, ubahan songsang dan ubahan bergabung, pembentukan persamaan dengan pemalar ubahan k, serta penyelesaian masalah kehidupan sebenar.",
    "notes": [
      {
        "subtopic": "1.1 Ubahan Langsung",
        "summary": "Hubungan di mana pemboleh ubah y bertambah apabila pemboleh ubah x bertambah pada kadar yang sama, ditulis sebagai y ∝ x atau y = kx.",
        "verbatim": [
          "Maksud Ubahan Langsung: Hubungan antara dua pemboleh ubah di mana nisbah y/x adalah malar. Ditulis sebagai y ∝ xⁿ dan dalam bentuk persamaan y = kxⁿ (k ialah pemalar ubahan, k ≠ 0).",
          "Graf Ubahan Langsung: Graf y melawan xⁿ ialah satu garis lurus yang bermula atau melalui titik asalan (0,0), dengan kecerunan garis lurus mewakili nilai pemalar k.",
          "Menentukan Nilai Pemalar k: k = y / xⁿ.",
          "Contoh Hubungan Kuasa: Jika y berubah secara langsung dengan punca kuasa dua x, maka y ∝ √x atau y = k√x."
        ],
        "explanation": "Gaji pekerja yang dibayar mengikut jam bekerja (G = kj) merupakan contoh klasik ubahan langsung dalam kehidupan sebenar."
      },
      {
        "subtopic": "1.2 Ubahan Songsang",
        "summary": "Hubungan di mana pemboleh ubah y berkurang apabila pemboleh ubah x bertambah, ditulis sebagai y ∝ 1/x atau y = k/x.",
        "verbatim": [
          "Maksud Ubahan Songsang: Hubungan antara dua pemboleh ubah di mana hasil darab xy adalah malar. Ditulis sebagai y ∝ 1/xⁿ dan dalam bentuk persamaan y = k / xⁿ atau xyⁿ = k (k ialah pemalar ubahan).",
          "Graf Ubahan Songsang: (1) Graf y melawan x berbentuk lengkung hiperbola; (2) Graf y melawan 1/xⁿ ialah garis lurus yang melalui titik asalan (0,0) dengan kecerunan sama dengan k.",
          "Menentukan Nilai Pemalar k: k = y × xⁿ.",
          "Aplikasi Ubahan Songsang: Masa perjalanan (t) berkadar songsang dengan laju kenderaan (v), iaitu t = k / v."
        ],
        "explanation": "Semakin banyak bilangan pekerja untuk mengecat dinding, semakin singkat masa yang diperlukan untuk menyelesaikannya."
      },
      {
        "subtopic": "1.3 Ubahan Bergabung",
        "summary": "Hubungan ubahan yang melibatkan gabungan ubahan langsung dan/atau ubahan songsang antara tiga atau lebih pemboleh ubah.",
        "verbatim": [
          "Bentuk Ubahan Bergabung: y berubah secara langsung dengan x dan secara songsang dengan z ditulis sebagai y ∝ x / z atau y = kx / z.",
          "Ubahan Bersama: Apabila pemboleh ubah y berubah secara langsung dengan dua atau lebih pemboleh ubah, cth: y ∝ xz atau y = kxz.",
          "Langkah Menyelesaikan Masalah Ubahan:",
          "1. Tulis hubungan menggunakan simbol perkadaran ∝;",
          "2. Tukar kepada bentuk persamaan dengan memasukkan pemalar k;",
          "3. Gantikan nilai-nilai yang diberi untuk mencari nilai pemalar k;",
          "4. Tulis semula persamaan lengkap dengan nilai k;",
          "5. Gantikan nilai baharu untuk mencari pemboleh ubah yang dikehendaki."
        ],
        "explanation": "Hukum Gas Unggul PV = nRT merupakan contoh saintifik ubahan bergabung dalam fizik dan kimia."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "desc": "Kenal pasti jenis ubahan (langsung: y = kx; songsang: y = k/x; bergabung: y = kx/z)."
      },
      {
        "step": "Langkah 2",
        "desc": "Cari nilai pemalar k daripada maklumat awal yang diberi."
      },
      {
        "step": "Langkah 3",
        "desc": "Tuliskan persamaan lengkap yang menghubungkan semua pemboleh ubah."
      },
      {
        "step": "Langkah 4",
        "desc": "Gantikan nilai baharu untuk mengira jawapan akhir dengan unit yang betul."
      }
    ],
    "keypoints": [
      "Ubahan Langsung: y ∝ x -> y = kx (k = y/x, graf melalui asalan)",
      "Ubahan Songsang: y ∝ 1/x -> y = k/x (k = xy)",
      "Ubahan Bergabung: y ∝ x/z -> y = kx/z",
      "Kecerunan graf y melawan 1/x mewakili pemalar k bagi ubahan songsang"
    ],
    "questions": [
      {
        "question": "Diberi y berubah secara langsung dengan kuasa dua x, dan y = 18 apabila x = 3. Berapakah nilai y apabila x = 5?",
        "options": [
          "30",
          "50",
          "90",
          "150"
        ],
        "answer": "50",
        "explanation": "Persamaan: y = kx². Gantikan: 18 = k(3)² -> 18 = 9k -> k = 2. Apabila x = 5: y = 2(5)² = 2(25) = 50."
      },
      {
        "question": "Diberi p berubah secara songsang dengan q, dan p = 4 apabila q = 6. Hitung nilai p apabila q = 3.",
        "options": [
          "2",
          "8",
          "12",
          "24"
        ],
        "answer": "8",
        "explanation": "Persamaan: p = k / q -> k = p × q = 4 × 6 = 24. Apabila q = 3: p = 24 / 3 = 8."
      }
    ],
    "struktur": [
      {
        "soalan": "Isi padu sebuah silinder, V cm³, berubah secara langsung dengan tinggi, h cm, dan kuasa dua jejari tapaknya, r cm. Diberi V = 308 cm³ apabila r = 7 cm dan h = 2 cm. Cari persamaan yang menghubungkan V, r dan h serta hitung nilai V apabila r = 14 cm dan h = 5 cm.",
        "markah": "4 Markah",
        "jawapan": "Hubungan: V = k r² h [1m]. Gantikan: 308 = k (7)² (2) -> 308 = 98k -> k = 308 / 98 = 22/7 [1m]. Persamaan: V = (22/7) r² h [1m]. Apabila r = 14 dan h = 5: V = (22/7) × 14² × 5 = (22/7) × 196 × 5 = 3080 cm³ [1m].",
        "panduanKoreksi": "1m bentuk formula + 1m nilai k = 22/7 + 1m persamaan + 1m nilai V = 3080 cm³."
      }
    ]
  },
  {
    "id": "math5-bab2",
    "babNum": "BAB 2",
    "title": "MATRIKS",
    "icon": "🔢",
    "anyflipPages": "Buku Teks Matematik Tingkatan 5 KSSM (Halaman 36 – 71)",
    "synopsis": "Mengkaji konsep matriks, peringkat matriks m × n, unsur dalam matriks a_ij, penambahan dan penolakan matriks, pendaraban skalar dan pendaraban dua matriks, penentu matriks, matriks songsang 2 × 2, serta penyelesaian sistem persamaan linear serentak.",
    "notes": [
      {
        "subtopic": "2.1 Matriks",
        "summary": "Matriks ialah susunan nombor dalam baris dan lajur yang dikurung dengan tanda [ ] atau ( ), ditentukan oleh peringkat matriks.",
        "verbatim": [
          "Peringkat Matriks: Matriks dengan m baris dan n lajur mempunyai peringkat m × n (disebut 'm dengan n').",
          "Notasi Unsur: Unsur pada baris ke-i dan lajur ke-j ditulis sebagai a_ij.",
          "Matriks Sama: Dua matriks adalah sama jika kedua-duanya mempunyai peringkat yang sama dan semua unsur sepadan adalah sama (jika A = B, maka a_ij = b_ij).",
          "Matriks Baris, Matriks Lajur, Matriks Segi Empat Sama, Matriks Sifar."
        ],
        "explanation": "Peringkat baris sentiasa disebut dahulu sebelum bilangan lajur (Baris × Lajur)."
      },
      {
        "subtopic": "2.2 Operasi Asas Matriks",
        "summary": "Operasi penambahan, penolakan, pendaraban dengan skalar, pendaraban antara dua matriks, matriks identiti, matriks songsang dan penyelesaian persamaan serentak.",
        "verbatim": [
          "Penambahan dan Penolakan Matriks: Hanya boleh dilakukan jika kedua-dua matriks mempunyai peringkat yang sama. Unsur sepadan ditambah atau ditolak secara terus.",
          "Pendaraban Matriks dengan Skalar: Setiap unsur dalam matriks didarabkan dengan pemalar skalar k, iaitu k[a_ij] = [k a_ij].",
          "Pendaraban Dua Matriks (A × B): Hanya boleh dilakukan jika bilangan lajur matriks pertama (A) sama dengan bilangan baris matriks kedua (B), iaitu (m × n) × (n × p) menghasilkan matriks berperingkat (m × p). Kaedah: Baris matriks pertama didarabkan dengan lajur matriks kedua.",
          "Matriks Identiti (I): Matriks segi empat sama di mana unsur pepenjuru utama ialah 1 dan unsur lain ialah 0. Sifat: AI = IA = A. Untuk matriks 2 × 2, I = [[1, 0], [0, 1]].",
          "Matriks Songsang (A⁻¹): Bagi matriks A = [[a, b], [c, d]], matriks songsang A⁻¹ wujud jika penentu |A| = ad - bc ≠ 0. Formula: A⁻¹ = (1 / (ad - bc)) × [[d, -b], [-c, a]]. Jika ad - bc = 0, matriks A tidak mempunyai matriks songsang.",
          "Penyelesaian Persamaan Linear Serentak Menggunakan Matriks:",
          "Bentuk persamaan: ax + by = p dan cx + dy = q ditukar kepada bentuk matriks [[a, b], [c, d]] [[x], [y]] = [[p], [q]]. Maka [[x], [y]] = [[a, b], [c, d]]⁻¹ [[p], [q]]."
        ],
        "explanation": "Pendaraban matriks tidak mematuhi hukum kalis tukar tertib, iaitu AB ≠ BA secara umumnya."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "desc": "Tentukan peringkat matriks (m baris × n lajur) dan semak kesamaan unsur."
      },
      {
        "step": "Langkah 2",
        "desc": "Lakukan penambahan/penolakan unsur sepadan atau pendaraban baris × lajur."
      },
      {
        "step": "Langkah 3",
        "desc": "Hitung penentu matriks |A| = ad - bc dan cari matriks songsang A⁻¹."
      },
      {
        "step": "Langkah 4",
        "desc": "Gunakan kaedah matriks songsang untuk menyelesaikan persamaan linear serentak."
      }
    ],
    "keypoints": [
      "Peringkat Matriks = Bilangan Baris × Bilangan Lajur",
      "Pendaraban A(m×n) × B(n×p) menghasilkan matriks C(m×p)",
      "Matriks Identiti I = [[1,0],[0,1]] bagi matriks 2×2",
      "Penentu Matriks 2×2: |A| = ad - bc",
      "Matriks Songsang A⁻¹ = (1 / (ad - bc)) [[d, -b], [-c, a]]",
      "Jika ad - bc = 0, matriks songsang TIDAK WUJUD"
    ],
    "questions": [
      {
        "question": "Diberi matriks A = [[3, 2], [4, 1]]. Berapakah nilai penentu bagi matriks A?",
        "options": [
          "-5",
          "5",
          "11",
          "-11"
        ],
        "answer": "-5",
        "explanation": "Penentu |A| = ad - bc = (3)(1) - (2)(4) = 3 - 8 = -5."
      },
      {
        "question": "Antara matriks berikut, yang manakah TIDAK mempunyai matriks songsang?",
        "options": [
          "[[2, 3], [1, 4]]",
          "[[4, 2], [6, 3]]",
          "[[1, 0], [0, 1]]",
          "[[5, -1], [2, 3]]"
        ],
        "answer": "[[4, 2], [6, 3]]",
        "explanation": "Matriks songsang tidak wujud jika ad - bc = 0. Bagi [[4, 2], [6, 3]], (4)(3) - (2)(6) = 12 - 12 = 0."
      }
    ],
    "struktur": [
      {
        "soalan": "Selesaikan persamaan linear serentak berikut dengan menggunakan kaedah matriks:\n2x + 3y = 12\nx - y = 1",
        "markah": "4 Markah",
        "jawapan": "Tukar ke bentuk matriks: [[2, 3], [1, -1]] [[x], [y]] = [[12], [1]] [1m]. Penentu = (2)(-1) - (3)(1) = -2 - 3 = -5 [1m]. [[x], [y]] = (1 / -5) [[-1, -3], [-1, 2]] [[12], [1]] [1m]. Maka [[x], [y]] = (-1/5) [[-12 - 3], [-12 + 2]] = (-1/5) [[-15], [-10]] = [[3], [2]]. Jadi, x = 3 dan y = 2 [1m].",
        "panduanKoreksi": "1m bentuk matriks + 1m penentu -5 + 1m songsangan + 1m nilai x = 3, y = 2."
      }
    ]
  },
  {
    "id": "math5-bab3",
    "babNum": "BAB 3",
    "title": "MATEMATIK PENGGUNA: INSURANS",
    "icon": "🛡️",
    "anyflipPages": "Buku Teks Matematik Tingkatan 5 KSSM (Halaman 72 – 93)",
    "synopsis": "Mengkaji pengurusan risiko dan konsep perlindungan insurans, perbezaan insurans hayat dan insurans am (motor, kebakaran, perubatan & kesihatan, kemalangan diri, perjalanan), pengiraan premium insurans, peruntukan deduktibel dan ko-insurans, serta pengiraan pampasan kerugian.",
    "notes": [
      {
        "subtopic": "3.1 Risiko dan Perlindungan Insurans",
        "summary": "Insurans berfungsi sebagai instrumen pemindahan risiko daripada individu kepada syarikat insurans untuk melindungi daripada kerugian kewangan akibat musibah.",
        "verbatim": [
          "Konsep Asas Insurans: Pemegang polisi membayar premium berkala kepada syarikat insurans; Syarikat insurans membayar pampasan ganti rugi jika berlaku risiko yang diinsuranskan berasaskan Prinsip Indemniti (mengembalikan pemegang polisi kepada kedudukan kewangan asal tanpa keuntungan).",
          "Dua Jenis Insurans Utama:",
          "1. Insurans Hayat: Memberikan perlindungan kewangan kepada waris sekiranya pemegang polisi meninggal dunia, hilang upaya kekal atau menghidap penyakit kritikal.",
          "2. Insurans Am: Memberi perlindungan terhadap kerugian harta benda dan liabiliti. Terdiri daripada: Insurans Motor (Akta, Pihak Ketiga, Pihak Ketiga Kebakaran & Kecurian, Komprehensif), Insurans Kebakaran, Insurans Perubatan dan Kesihatan, Insurans Kemalangan Diri, dan Insurans Perjalanan.",
          "Deduktibel: Suatu jumlah kerugian permulaan yang mesti ditanggung sendiri oleh pemegang polisi sebelum syarikat insurans membayar baki ganti rugi.",
          "Ko-insurans (Insurans Bersama): Perkongsian kos bersama antara pemegang polisi dengan syarikat insurans mengikut nisbah tertentu (cth: peratusan ko-insurans 80/20 di mana syarikat bayar 80% dan pemegang polisi bayar 20%).",
          "Ko-insurans dalam Insurans Harta: Jumlah insurans yang harus dibeli = Peratusan ko-insurans × Nilai boleh insurans harta.",
          "Formula Pampasan Penalti Ko-insurans: Bayaran Pampasan = (Jumlah insurans yang dibeli / Jumlah insurans yang harus dibeli) × Jumlah kerugian - Deduktibel (jika mengalami kerugian sebahagian dan nilai insurans tidak mencukupi)."
        ],
        "explanation": "Jika harta diinsuranskan kurang daripada jumlah yang sepatutnya (kurang insurans), pemegang polisi akan dikenakan penalti ko-insurans semasa menuntut pampasan."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "desc": "Bezakan insurans hayat dan 5 jenis insurans am (motor, kebakaran, kesihatan, kemalangan, perjalanan)."
      },
      {
        "step": "Langkah 2",
        "desc": "Fahami peranan Deduktibel (jumlah bayaran pertama ditanggung sendiri)."
      },
      {
        "step": "Langkah 3",
        "desc": "Hitung jumlah insurans yang harus dibeli berdasarkan peratusan ko-insurans."
      },
      {
        "step": "Langkah 4",
        "desc": "Gunakan formula pampasan: (Insurans dibeli / Insurans patut dibeli) × Kerugian - Deduktibel."
      }
    ],
    "keypoints": [
      "Insurans memindahkan risiko kewangan dengan membayar premium",
      "Prinsip Indemniti: Membayar ganti rugi setakat nilai kerugian sebenar (tiada untung)",
      "Deduktibel mesti ditolak daripada jumlah pampasan yang layak diterima",
      "Ko-insurans harta: Syarat nilai minimum perlindungan insurans yang wajib dibeli",
      "Insurans motor komprehensif memberi perlindungan paling menyeluruh (kereta sendiri + pihak ketiga)"
    ],
    "questions": [
      {
        "question": "Apakah maksud istilah 'Deduktibel' dalam polisi insurans?",
        "options": [
          "Diskaun bayaran premium tahunan",
          "Suatu jumlah wang yang mesti ditanggung sendiri oleh pemegang polisi sebelum pampasan dibayar",
          "Jumlah pampasan maksimum yang dibayar oleh syarikat insurans",
          "Cukai kerajaan yang dikenakan ke atas polisi insurans"
        ],
        "answer": "Suatu jumlah wang yang mesti ditanggung sendiri oleh pemegang polisi sebelum pampasan dibayar",
        "explanation": "Deduktibel ialah peruntukan di mana pemegang polisi perlu membayar sebahagian kerugian awal yang ditetapkan sebelum syarikat insurans menanggung bakinya."
      },
      {
        "question": "Encik Ali mempunyai polisi insurans perubatan dengan deduktibel sebanyak RM500. Jika bil rawatan hospitalnya berjumlah RM4,200, berapakah jumlah pampasan yang akan dibayar oleh syarikat insurans?",
        "options": [
          "RM500",
          "RM3,700",
          "RM4,200",
          "RM4,700"
        ],
        "answer": "RM3,700",
        "explanation": "Pampasan dibayar = Jumlah bil - Deduktibel = RM4,200 - RM500 = RM3,700."
      }
    ],
    "struktur": [
      {
        "soalan": "Rumah Encik Danial mempunyai nilai boleh insurans RM300,000. Polisi insurans kebakarannya memperuntukkan ko-insurans 80% dan deduktibel RM2,000. Encik Danial menginsuranskan rumahnya sebanyak RM200,000. Jika rumahnya terbakar dan mengalami kerugian RM60,000, hitung jumlah pampasan yang diterima oleh Encik Danial.",
        "markah": "4 Markah",
        "jawapan": "Jumlah insurans yang harus dibeli = 80% × RM300,000 = RM240,000 [1m]. Oleh kerana insurans yang dibeli (RM200,000) kurang daripada RM240,000, penalti ko-insurans dikenakan [1m]. Bayaran Pampasan = (RM200,000 / RM240,000) × RM60,000 - RM2,000 [1m] = RM50,000 - RM2,000 = RM48,000 [1m].",
        "panduanKoreksi": "1m insurans patut dibeli RM240,000 + 1m penalti ko-insurans + 1m jalan kerja formula + 1m pampasan RM48,000."
      }
    ]
  },
  {
    "id": "math5-bab4",
    "babNum": "BAB 4",
    "title": "MATEMATIK PENGGUNA: PERCUKAIAN",
    "icon": "📑",
    "anyflipPages": "Buku Teks Matematik Tingkatan 5 KSSM (Halaman 94 – 123)",
    "synopsis": "Mengkaji tujuan percukaian oleh kerajaan, lima jenis cukai di Malaysia (Cukai Pendapatan, Cukai Jalan, Cukai Pintu, Cukai Tanah, Cukai Jualan dan Perkhidmatan), pengiraan pendapatan bercukai, pelepasan dan rebat cukai, taksiran cukai pendapatan individu, serta tanggungjawab moral pembayar cukai.",
    "notes": [
      {
        "subtopic": "4.1 Percukaian",
        "summary": "Percukaian ialah bayaran wajib yang dikenakan oleh kerajaan terhadap individu atau syarikat untuk membiayai perbelanjaan negara, membina infrastruktur awam, dan mengagihkan semula pendapatan.",
        "verbatim": [
          "Tujuan Percukaian: Sumber pendapatan kerajaan membiayai pentadbiran negara, membina kemudahan awam (sekolah, hospital, jalan raya), instrumen kestabilan ekonomi, dan mengawal selia barangan berbahaya (cukai rokok/alkohol).",
          "Lima Jenis Cukai Utama di Malaysia:",
          "1. Cukai Pendapatan: Dikutip oleh Lembaga Hasil Dalam Negeri (LHDN) atas pendapatan penggajian atau perniagaan tahunan individu/syarikat.",
          "2. Cukai Jalan: Dikutip oleh Jabatan Pengangkutan Jalan (JPJ) atas kenderaan bermotor berasaskan kapasiti enjin (cc).",
          "3. Cukai Pintu / Taksiran: Dikutip oleh Pihak Berkuasa Tempatan (PBT / Majlis Perbandaran) atas pegangan harta tanah untuk membiayai penyelenggaraan bandar.",
          "4. Cukai Tanah: Dikutip oleh Pejabat Tanah dan Galian (PTG) negeri atas pemilikan tanah berimilik.",
          "5. Cukai Jualan dan Perkhidmatan (SST): Dikutip oleh Jabatan Kastam Diraja Malaysia (JKDM) ke atas jualan barangan kilang dan perkhidmatan berbayar (cth hotel, restoran).",
          "Pengiraan Cukai Pendapatan Individu:",
          "- Pendapatan Bercukai = Jumlah Pendapatan Tahunan - Pengecualian Cukai - Pelepasan Cukai.",
          "- Cukai Pendapatan Kasar dihitung menggunakan Jadual Kadar Cukai Pendapatan Progresif LHDN.",
          "- Cukai Pendapatan Bersih = Cukai Pendapatan Kasar - Rebat Cukai (cth rebat RM400 jika pendapatan bercukai ≤ RM35,000, rebat zakat/fitrah).",
          "- Potongan Cukai Berjadual (PCB): Jika Cukai Bersih > PCB, baki cukai perlu dibayar; Jika PCB > Cukai Bersih, lebihan bayaran dikembalikan oleh LHDN."
        ],
        "explanation": "Pelepasan cukai seperti caruman KWSP, insurans perubatan, pembelian komputer dan perbelanjaan gaya hidup mengurangkan jumlah pendapatan bercukai individu."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "desc": "Bezakan 5 jenis cukai di Malaysia dan pihak berkuasa yang memungutnya (LHDN, JPJ, PBT, PTG, Kastam)."
      },
      {
        "step": "Langkah 2",
        "desc": "Hitung Pendapatan Bercukai = Jumlah Pendapatan - Pengecualian - Pelepasan."
      },
      {
        "step": "Langkah 3",
        "desc": "Gunakan Jadual Kadar Cukai LHDN untuk mengira cukai pendapatan asas mengikut banjaran."
      },
      {
        "step": "Langkah 4",
        "desc": "Tolak Rebat Cukai (zakat/rebat individu) untuk mendapatkan cukai pendapatan bersih yang perlu dibayar."
      }
    ],
    "keypoints": [
      "Percukaian ialah sumber pendapatan utama kerajaan membiayai projek pembangunan",
      "5 Jenis Cukai: Pendapatan (LHDN), Jalan (JPJ), Pintu (PBT), Tanah (PTG), SST (Kastam)",
      "Pendapatan Bercukai = Jumlah Pendapatan - Pengecualian - Pelepasan",
      "Rebat cukai RM400 diberikan jika pendapatan bercukai tidak melebihi RM35,000",
      "Zakat ditolak terus secara 'ringgit ke ringgit' daripada cukai pendapatan kasar"
    ],
    "questions": [
      {
        "question": "Pihak berkuasa manakah yang bertanggungjawab memungut Cukai Pintu (Taksiran)?",
        "options": [
          "Lembaga Hasil Dalam Negeri (LHDN)",
          "Jabatan Kastam Diraja Malaysia (JKDM)",
          "Pihak Berkuasa Tempatan (PBT / Majlis Perbandaran)",
          "Jabatan Pengangkutan Jalan (JPJ)"
        ],
        "answer": "Pihak Berkuasa Tempatan (PBT / Majlis Perbandaran)",
        "explanation": "Cukai pintu dikutip oleh Pihak Berkuasa Tempatan (PBT) seperti Dewan Bandaraya atau Majlis Perbandaran untuk membiayai kos pembersihan, lampu jalan dan kemudahan awam setempat."
      },
      {
        "question": "Encik Hafiz mempunyai jumlah pendapatan tahunan RM54,000. Jumlah pelepasan cukainya ialah RM16,000 dan tiada pengecualian. Berapakah pendapatan bercukai Encik Hafiz?",
        "options": [
          "RM38,000",
          "RM54,000",
          "RM70,000",
          "RM16,000"
        ],
        "answer": "RM38,000",
        "explanation": "Pendapatan Bercukai = Jumlah Pendapatan - Pelepasan Cukai = RM54,000 - RM16,000 = RM38,000."
      }
    ],
    "struktur": [
      {
        "soalan": "Pendapatan bercukai Puan Sarah bagi suatu tahun taksiran ialah RM32,000. Mengikut jadual kadar cukai, cukai bagi RM20,000 pertama ialah RM150 dan kadar cukai bagi baki berikutnya ialah 3%. Puan Sarah juga telah membayar zakat sebanyak RM300. Hitung cukai pendapatan yang perlu dibayar oleh Puan Sarah.",
        "markah": "4 Markah",
        "jawapan": "Baki pendapatan bercukai = RM32,000 - RM20,000 = RM12,000 [1m]. Cukai atas baki = 3% × RM12,000 = RM360 [1m]. Jumlah cukai kasar = RM150 + RM360 = RM510. Oleh kerana pendapatan bercukai ≤ RM35,000, Puan Sarah layak rebat RM400 dan rebat zakat RM300 (Jumlah rebat RM700) [1m]. Cukai pendapatan bersih = RM510 - RM700 = RM0 (tidak perlu bayar cukai) [1m].",
        "panduanKoreksi": "1m baki RM12,000 + 1m cukai baki RM360 + 1m aplikasi rebat RM400 dan zakat + 1m cukai bersih RM0."
      }
    ]
  },
  {
    "id": "math5-bab5",
    "babNum": "BAB 5",
    "title": "KEKONGRUENAN, PEMBESARAN DAN GABUNGAN TRANSFORMASI",
    "icon": "📐",
    "anyflipPages": "Buku Teks Matematik Tingkatan 5 KSSM (Halaman 124 – 169)",
    "synopsis": "Mengkaji konsep kekongruenan poligon dan segitiga (Sisi-Sisi-Sisi, Sisi-Sudut-Sisi, Sudut-Sisi-Sudut, Sudut-Sudut-Sisi, Sudut-Sudut-Sudut), pembesaran dengan faktor skala k pada pusat pembesaran, perkaitan luas imej dan luas objek (Luas Imej = k² × Luas Objek), gabungan transformasi geometri, serta aplikasi corak teselasi seni bina.",
    "notes": [
      {
        "subtopic": "5.1 Kekongruenan",
        "summary": "Dua rajah adalah kongruen jika kedua-duanya mempunyai bentuk dan saiz yang sama persis, tanpa mengira orientasinya.",
        "verbatim": [
          "Ciri Kekongruenan: Semua panjang sisi sepadan adalah sama dan semua sudut sepadan adalah sama.",
          "Sifat Kekongruenan Segi Tiga: (1) SSS (Sisi-Sisi-Sisi); (2) SAS (Sisi-Sudut-Sisi); (3) ASA (Sudut-Sisi-Sudut); (4) AAS (Sudut-Sudut-Sisi); (5) RHS (Sudut Cakah / Hipotenus-Sisi bagi segi tiga bersudut tegak).",
          "Perbezaan Kongruen vs Serupa: Rajah kongruen mempunyai bentuk dan saiz yang sama (faktor skala = 1); Rajah serupa mempunyai bentuk yang sama tetapi saiz berbeza (nisbah sisi sepadan berkadaran)."
        ],
        "explanation": "Ujian kekongruenan segi tiga digunakan secara meluas dalam reka bentuk jambatan kekuda keluli untuk memastikan kestabilan struktur."
      },
      {
        "subtopic": "5.2 Pembesaran",
        "summary": "Transformasi yang mengubah saiz objek mengikut suatu faktor skala k pada suatu pusat pembesaran tertentu.",
        "verbatim": [
          "Faktor Skala (k): k = Panjang sisi imej / Panjang sisi objek sepadan = Jarak titik imej dari pusat / Jarak titik objek dari pusat.",
          "Ciri Faktor Skala k:",
          "- k > 1: Imej lebih besar daripada objek dan berada di sebelah yang sama dengan objek dari pusat pembesaran;",
          "- 0 < k < 1: Imej lebih kecil daripada objek di sebelah yang sama;",
          "- -1 < k < 0: Imej lebih kecil dan terbalik (songsang) di sebelah bertentangan pusat pembesaran;",
          "- k < -1: Imej lebih besar dan terbalik di sebelah bertentangan pusat pembesaran.",
          "Formula Hubungan Luas: Luas Imej = k² × Luas Objek.",
          "Luas Kawasan Berlorek: Luas Rantau Berlorek = Luas Imej - Luas Objek (atau sebaliknya mengikut rajah)."
        ],
        "explanation": "Faktor skala negatif bermakna imej terletak di sebelah bertentangan pusat pembesaran dan mengalami orientasi terbalik (putaran 180°)."
      },
      {
        "subtopic": "5.3 Gabungan Transformasi",
        "summary": "Pelaksanaan dua atau lebih transformasi (Translasi, Pantulan, Putaran, Pembesaran) secara berturutan mengikut tertib yang betul.",
        "verbatim": [
          "Tertib Gabungan Transformasi: Transformasi gabungan AB bermakna transformasi B dilakukan dahulu, diikuti oleh transformasi A ke atas imej pertama.",
          "Transformasi Kalis Tukar Tertib: Kebanyakan transformasi tidak kalis tukar tertib (AB ≠ BA), kecuali gabungan translasi atau putaran sepusat.",
          "Huraian Lengkap Transformasi Tunggal:",
          "- Translasi: Nyatakan vektor translasi (x ke kanan/kiri, y ke atas/bawah);",
          "- Pantulan: Nyatakan persamaan garis pantulan (cth: pantulan pada garis x = 3 atau paksi-y);",
          "- Putaran: Nyatakan sudut putaran (90° / 180°), arah putaran (ikut/lawan jam), dan koordinat pusat putaran;",
          "- Pembesaran: Nyatakan faktor skala k dan koordinat pusat pembesaran."
        ],
        "explanation": "Sentiasa selesaikan transformasi paling kanan terlebih dahulu apabila menganalisis simbol gabungan transformasi."
      },
      {
        "subtopic": "5.4 Teselasi",
        "summary": "Pola berulang bagi satu atau lebih bentuk geometri yang menutupi suatu satah sepenuhnya tanpa ruang kosong atau pertindihan.",
        "verbatim": [
          "Maksud Teselasi: Corak berulang yang menutup seluruh satah secara seragam tanpa ruang rongga atau pertindihan antara bentuk.",
          "Teselasi Sekata: Menggunakan satu jenis poligon sekata sahaja (hanya segi tiga sama sisi, segi empat sama, dan heksagon sekata boleh membentuk teselasi sekata kerana sudut pedalamannya adalah faktor kepada 360°).",
          "Teselasi Separa Sekata: Gabungan dua atau lebih jenis poligon sekata.",
          "Aplikasi Teselasi: Jubin lantai seramik, mozek seni bina Islam (istana Alhambra), reka bentuk seni Escher, dan sarang lebah heksagon semulajadi."
        ],
        "explanation": "Pentagon sekata tidak boleh membentuk teselasi sekata kerana sudut pedalamannya (108°) tidak membahagi tepat 360° (360° / 108° = 3.33)."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "desc": "Tentukan kekongruenan segi tiga menggunakan sifat SSS, SAS, ASA, AAS atau RHS."
      },
      {
        "step": "Langkah 2",
        "desc": "Cari faktor skala k dan gunakan formula Luas Imej = k² × Luas Objek."
      },
      {
        "step": "Langkah 3",
        "desc": "Lakukan gabungan transformasi AB dengan melaksanakan B dahulu kemudian A."
      },
      {
        "step": "Langkah 4",
        "desc": "Huraikan transformasi tunggal secara lengkap dan kenal pasti corak teselasi."
      }
    ],
    "keypoints": [
      "Kongruen = Bentuk & saiz sama; Serupa = Bentuk sama, saiz berbeza",
      "Faktor skala pembesaran: k = Sisi Imej / Sisi Objek",
      "Hubungan Luas: Luas Imej = k² × Luas Objek",
      "Gabungan Transformasi AB: Lakukan B dahulu, diikuti A",
      "Teselasi menutup satah tanpa sebarang ruang kosong atau pertindihan",
      "Hanya segi tiga sisi sama, segi empat sama dan heksagon sekata hasilkan teselasi sekata"
    ],
    "questions": [
      {
        "question": "Suatu objek dengan luas 15 cm² dibesarkan dengan faktor skala k = 3. Berapakah luas imej yang terhasil?",
        "options": [
          "45 cm²",
          "90 cm²",
          "135 cm²",
          "225 cm²"
        ],
        "answer": "135 cm²",
        "explanation": "Formula: Luas Imej = k² × Luas Objek = (3)² × 15 = 9 × 15 = 135 cm²."
      },
      {
        "question": "Bagi gabungan transformasi PQ ke atas titik A, transformasi manakah yang perlu dilaksanakan terlebih dahulu?",
        "options": [
          "Transformasi P dilaksanakan dahulu",
          "Transformasi Q dilaksanakan dahulu",
          "Kedua-dua transformasi dilakukan serentak",
          "Boleh dilakukan mengikut mana-mana urutan"
        ],
        "answer": "Transformasi Q dilaksanakan dahulu",
        "explanation": "Dalam notasi gabungan transformasi PQ, transformasi yang berada di sebelah kanan (Q) mesti dilakukan terlebih dahulu ke atas objek."
      }
    ],
    "struktur": [
      {
        "soalan": "Rajah menunjukkan sebuah objek dengan luas 24 cm² yang mengalami pembesaran pada pusat (2, 3) menghasilkan imej dengan luas 96 cm².\n(a) Hitung faktor skala pembesaran tersebut.\n(b) Jika luas rantau berlorek dihitung dengan menolak luas objek daripada luas imej, cari luas rantau berlorek.",
        "markah": "4 Markah",
        "jawapan": "(a) Luas Imej = k² × Luas Objek -> 96 = k² × 24 -> k² = 96 / 24 = 4 -> k = √4 = 2 [2m].\n(b) Luas Rantau Berlorek = Luas Imej - Luas Objek = 96 cm² - 24 cm² = 72 cm² [2m].",
        "panduanKoreksi": "2m faktor skala k = 2 + 2m luas rantau berlorek 72 cm²."
      }
    ]
  },
  {
    "id": "math5-bab6",
    "babNum": "BAB 6",
    "title": "NISBAH DAN GRAF FUNGSI TRIGONOMETRI",
    "icon": "📈",
    "anyflipPages": "Buku Teks Matematik Tingkatan 5 KSSM (Halaman 170 – 195)",
    "synopsis": "Mengkaji bulatan unit, penentuan nilai sinus, kosinus dan tangen bagi sudut 0° ≤ θ ≤ 360° dalam empat sukuan, sudut rujukan sepadan, tanda nisbah trigonometri (ASTC), serta melukis dan mentafsir graf fungsi trigonometri (sinus, kosinus, tangen) dengan perubahan amplitud dan tempoh.",
    "notes": [
      {
        "subtopic": "6.1 Nilai Sinus, Kosinus dan Tangen bagi Sudut θ, 0° ≤ θ ≤ 360°",
        "summary": "Penentuan nisbah trigonometri pada bulatan unit merentasi empat sukuan menggunakan sudut rujukan sepadan α dan hukum tanda sukuan.",
        "verbatim": [
          "Bulatan Unit (Jejari r = 1 unit): Titik P(x, y) pada bulatan unit: sin θ = y, kos θ = x, tan θ = y / x.",
          "Empat Sukuan dan Tanda Nisbah (ASTC - 'All Science Teachers Crazy' / 'Semua Suka Tengok Kartun'):",
          "- Sukuan I (0° < θ < 90°): Semua positif (Sin +, Kos +, Tan +); Sudut rujukan sepadan α = θ.",
          "- Sukuan II (90° < θ < 180°): Hanya Sin positif (Sin +, Kos -, Tan -); Sudut rujukan α = 180° - θ.",
          "- Sukuan III (180° < θ < 270°): Hanya Tan positif (Sin -, Kos -, Tan +); Sudut rujukan α = θ - 180°.",
          "- Sukuan IV (270° < θ < 360°): Hanya Kos positif (Sin -, Kos +, Tan -); Sudut rujukan α = 360° - θ.",
          "Sudut Khas: 30°, 45°, 60° (cth: sin 30° = 1/2, kos 60° = 1/2, tan 45° = 1, sin 45° = 1/√2)."
        ],
        "explanation": "Sentiasa cari sudut rujukan sepadan α (sudut tirus positif) terlebih dahulu, kemudian tentukan tanda (+/-) berdasarkan sukuan sudut asal θ."
      },
      {
        "subtopic": "6.2 Graf Fungsi Sinus, Kosinus dan Tangen",
        "summary": "Ciri-ciri bentuk gelombang, amplitud, tempoh, nilai maksimum dan minimum bagi graf fungsi y = a sin bx + c, y = a kos bx + c dan y = a tan bx + c.",
        "verbatim": [
          "Graf y = sin x: Berbentuk gelombang ombak bermula dari 0; Nilai maksimum = 1 (pada 90°), minimum = -1 (pada 270°); Amplitud = 1; Tempoh = 360° / 2π.",
          "Graf y = kos x: Berbentuk cawan bermula dari nilai maksimum 1 pada 0°; Nilai minimum = -1 (pada 180°); Amplitud = 1; Tempoh = 360°.",
          "Graf y = tan x: Graf tidak mempunyai amplitud (menghampiri infiniti); Garis asimptot pada x = 90° dan 270° (nilai tidak tertakrif); Tempoh = 180°.",
          "Kesan Perubahan Pemalar dalam y = a sin bx + c:",
          "- Nilai |a| menentukan Amplitud graf (ketinggian puncak gelombang dari garis tengah);",
          "- Nilai b menentukan Tempoh graf: Tempoh bagi sin dan kos = 360° / b (bilangan kitaran lengkap dalam 360°); Tempoh bagi tan = 180° / b;",
          "- Nilai c menentukan anjakan menegak paksi graf ke atas (+c) atau ke bawah (-c)."
        ],
        "explanation": "Fungsi tangen tidak mempunyai amplitud kerana grafnya memanjang ke infiniti positif dan infiniti negatif pada garis asimptot."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "desc": "Tentukan sukuan bagi sudut θ dan hitung sudut rujukan sepadan α."
      },
      {
        "step": "Langkah 2",
        "desc": "Tentukan tanda (+ atau -) mengikut petua ASTC bagi Sukuan I, II, III, IV."
      },
      {
        "step": "Langkah 3",
        "desc": "Kuasai bentuk asas graf y = sin x, y = kos x, dan y = tan x."
      },
      {
        "step": "Langkah 4",
        "desc": "Tentukan amplitud (|a|) dan tempoh (360°/b) bagi graf y = a sin bx + c."
      }
    ],
    "keypoints": [
      "Bulatan Unit: sin θ = y, kos θ = x, tan θ = y/x",
      "Petua Sukuan ASTC: Sukuan I (Semua +), II (Sin +), III (Tan +), IV (Kos +)",
      "Sudut rujukan α: Suku II (180°-θ), Suku III (θ-180°), Suku IV (360°-θ)",
      "Graf y = a sin bx + c: Amplitud = |a|, Tempoh = 360° / b",
      "Graf y = a tan bx: Tiada amplitud, asimptot pada 90° & 270°, Tempoh = 180° / b"
    ],
    "questions": [
      {
        "question": "Diberi sin θ = -0.5 dan 180° ≤ θ ≤ 270°. Apakah nilai bagi sudut θ?",
        "options": [
          "150°",
          "210°",
          "240°",
          "330°"
        ],
        "answer": "210°",
        "explanation": "Sudut rujukan α = sin⁻¹(0.5) = 30°. Sudut berada dalam Sukuan III, maka θ = 180° + α = 180° + 30° = 210°."
      },
      {
        "question": "Berapakah amplitud dan tempoh bagi fungsi trigonometri y = 3 kos 2x?",
        "options": [
          "Amplitud = 3, Tempoh = 180°",
          "Amplitud = 2, Tempoh = 360°",
          "Amplitud = 3, Tempoh = 360°",
          "Amplitud = 6, Tempoh = 180°"
        ],
        "answer": "Amplitud = 3, Tempoh = 180°",
        "explanation": "Bagi y = a kos bx: Amplitud = |a| = 3; Tempoh = 360° / b = 360° / 2 = 180°."
      }
    ],
    "struktur": [
      {
        "soalan": "Diberi fungsi trigonometri y = 2 sin 3x + 1 bagi 0° ≤ x ≤ 360°.\n(a) Nyatakan amplitud bagi graf tersebut.\n(b) Tentukan tempoh bagi satu kitaran lengkap graf tersebut.\n(c) Nyatakan nilai maksimum dan nilai minimum bagi y.",
        "markah": "4 Markah",
        "jawapan": "(a) Amplitud = 2 [1m].\n(b) Tempoh = 360° / 3 = 120° [1m].\n(c) Nilai maksimum y = a + c = 2 + 1 = 3 [1m]; Nilai minimum y = -a + c = -2 + 1 = -1 [1m].",
        "panduanKoreksi": "1m amplitud 2 + 1m tempoh 120° + 1m nilai maksimum 3 + 1m nilai minimum -1."
      }
    ]
  },
  {
    "id": "math5-bab7",
    "babNum": "BAB 7",
    "title": "SUKATAN SERAKAN DATA TERKUMPUL",
    "icon": "📊",
    "anyflipPages": "Buku Teks Matematik Tingkatan 5 KSSM (Halaman 196 – 225)",
    "synopsis": "Mengkaji pembinaan jadual kekerapan data terkumpul (selang kelas, had bawah, had atas, sempadan bawah, sempadan atas, titik tengah), pembinaan histogram, poligon kekerapan dan ogif, penentuan kuartil dan persentil daripada ogif, serta pengiraan min, varians dan sisihan piawai data terkumpul.",
    "notes": [
      {
        "subtopic": "7.1 Serakan",
        "summary": "Perwakilan data terkumpul melalui pembinaan jadual selang kelas berserta graf histogram, poligon kekerapan dan ogif kekerapan longgokan.",
        "verbatim": [
          "Parameter Selang Kelas: Had Bawah, Had Atas; Sempadan Bawah = (Had Bawah + Had Atas kelas sebelumnya) / 2; Sempadan Atas = (Had Atas + Had Bawah kelas berikutnya) / 2; Saiz Selang Kelas = Sempadan Atas - Sempadan Bawah; Titik Tengah = (Had Bawah + Had Atas) / 2.",
          "Histogram: Graf bar rapat tanpa ruang di antara palang; Paksi mengufuk mewakili sempadan kelas / titik tengah dan paksi mencancang mewakili kekerapan.",
          "Poligon Kekerapan: Graf garis yang menyambungkan titik tengah setiap selang kelas pada ketinggian kekerapannya; Dimulakan dan diakhiri dengan titik tengah selang kelas berkekerapan sifar di kedua-dua hujung.",
          "Ogif (Graf Kekerapan Longgokan): Lengkung berbentuk 'S' licin yang memplot kekerapan longgokan melawan sempadan atas setiap selang kelas; Bermula pada sempadan bawah kelas pertama berkekerapan longgokan sifar."
        ],
        "explanation": "Ogif membolehkan penentuan nilai median, kuartil pertama, kuartil ketiga dan persentil secara anggaran grafik."
      },
      {
        "subtopic": "7.2 Sukatan Serakan",
        "summary": "Pengiraan ukuran serakan data terkumpul: Julat, Julat Antara Kuartil, Varians (σ²) dan Sisihan Piawai (σ) serta tafsiran plot kotak.",
        "verbatim": [
          "Julat Data Terkumpul: Julat = Titik tengah kelas tertinggi - Titik tengah kelas terendah (atau Sempadan atas kelas tertinggi - Sempadan bawah kelas terendah).",
          "Kuartil daripada Ogif: Kuartil Pertama (Q₁) = kedudukan N/4; Median (Q₂) = kedudukan N/2; Kuartil Ketiga (Q₃) = kedudukan 3N/4 (N = jumlah kekerapan longgokan).",
          "Julat Antara Kuartil (IQR): IQR = Q₃ - Q₁.",
          "Min Data Terkumpul (x̄): x̄ = Σ(fx) / Σf (f = kekerapan, x = titik tengah).",
          "Varians Data Terkumpul (σ²): σ² = [Σ(fx²) / Σf] - (x̄)².",
          "Sisihan Piawai (σ): σ = √[Varians] = √([Σ(fx²) / Σf] - (x̄)²).",
          "Kelebihan Sisihan Piawai: Mengukur taburan data di sekitar min dalam unit ukuran asal; Nilai sisihan piawai kecil menandakan data adalah konsisten dan padat di sekitar min."
        ],
        "explanation": "Sisihan piawai merupakan sukatan serakan paling andal kerana mengambil kira setiap nilai data dalam taburan."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "desc": "Bina jadual kekerapan terkumpul: titik tengah, sempadan atas, dan kekerapan longgokan."
      },
      {
        "step": "Langkah 2",
        "desc": "Plotkan ogif (kekerapan longgokan vs sempadan atas) dan tentukan Q₁, Q₂, Q₃."
      },
      {
        "step": "Langkah 3",
        "desc": "Kira Julat Antara Kuartil: IQR = Q₃ - Q₁."
      },
      {
        "step": "Langkah 4",
        "desc": "Gunakan formula min x̄ = Σfx/Σf dan sisihan piawai σ = √[Σfx²/Σf - (x̄)²]."
      }
    ],
    "keypoints": [
      "Saiz Kelas = Sempadan Atas - Sempadan Bawah; Titik Tengah = (Had Bawah + Had Atas)/2",
      "Ogif memplot Kekerapan Longgokan melawan Sempadan Atas",
      "Kedudukan Kuartil: Q₁ (N/4), Median Q₂ (N/2), Q₃ (3N/4)",
      "Julat Antara Kuartil IQR = Q₃ - Q₁",
      "Formula Min: x̄ = Σ(fx) / Σf",
      "Formula Sisihan Piawai: σ = √([Σ(fx²) / Σf] - (x̄)²)"
    ],
    "questions": [
      {
        "question": "Daripada sebuah ogif dengan jumlah kekerapan N = 80, pada kedudukan kekerapan longgokan manakah nilai Kuartil Ketiga (Q₃) ditentukan?",
        "options": [
          "20",
          "40",
          "60",
          "80"
        ],
        "answer": "60",
        "explanation": "Kedudukan Kuartil Ketiga (Q₃) dihitung dengan formula 3N / 4 = 3(80) / 4 = 60."
      },
      {
        "question": "Apakah sukatan serakan yang mengukur perbezaan antara nilai Kuartil Ketiga (Q₃) dengan Kuartil Pertama (Q₁)?",
        "options": [
          "Min",
          "Varians",
          "Sisihan Piawai",
          "Julat Antara Kuartil"
        ],
        "answer": "Julat Antara Kuartil",
        "explanation": "Julat Antara Kuartil (Interquartile Range, IQR) ditakrifkan sebagai perbezaan antara kuartil ketiga dengan kuartil pertama (IQR = Q₃ - Q₁)."
      }
    ],
    "struktur": [
      {
        "soalan": "Jadual menunjukkan ringkasan data jisim bagi sekumpulan murid di mana Σf = 50, Σ(fx) = 2750 dan Σ(fx²) = 152,450. Hitung:\n(a) Min jisim murid tersebut.\n(b) Sisihan piawai bagi data tersebut.",
        "markah": "4 Markah",
        "jawapan": "(a) Min x̄ = Σ(fx) / Σf = 2750 / 50 = 55 kg [2m].\n(b) Varians σ² = [Σ(fx²) / Σf] - (x̄)² = (152,450 / 50) - (55)² = 3049 - 3025 = 24 [1m]. Sisihan piawai σ = √24 ≈ 4.90 kg [1m].",
        "panduanKoreksi": "2m min = 55 kg + 1m varians = 24 + 1m sisihan piawai = 4.90 kg."
      }
    ]
  },
  {
    "id": "math5-bab8",
    "babNum": "BAB 8",
    "title": "PEMODELAN MATEMATIK",
    "icon": "🧩",
    "anyflipPages": "Buku Teks Matematik Tingkatan 5 KSSM (Halaman 226 – 247)",
    "synopsis": "Mengkaji proses pemodelan matematik untuk menyelesaikan masalah dunia sebenar melalui enam peringkat berulang: mengenal pasti dan mendefinisikan masalah, membuat andaian dan mengenal pasti pemboleh ubah, mengaplikasikan matematik untuk membina model, menentusahkan dan mentafsir penyelesaian, memurnikan model matematik, serta melaporkan dapatan.",
    "notes": [
      {
        "subtopic": "8.1 Pemodelan Matematik",
        "summary": "Proses pemodelan matematik mewakili situasi dunia sebenar dalam bentuk persamaan, fungsi atau graf matematik bagi membuat unjuran dan ramalan penyelesaian.",
        "verbatim": [
          "Enam Peringkat Kitaran Pemodelan Matematik:",
          "1. Mengenal pasti dan mendefinisikan masalah: Memahami situasi dunia sebenar dan menyatakan matlamat persoalan dengan jelas;",
          "2. Membuat andaian dan mengenal pasti pemboleh ubah: Menyatakan andaian untuk mempermudah situasi (cth: mengabaikan geseran angin, kadar pertumbuhan malar) dan mentakrifkan pemboleh ubah bersandar dan tak bersandar;",
          "3. Mengaplikasikan matematik untuk membina model: Membina persamaan linear, kuadratik, fungsi eksponen atau graf geometri yang menggambarkan hubungan pemboleh ubah;",
          "4. Menentusahkan dan mentafsir penyelesaian dalam konteks masalah: Menyemak sama ada jawapan matematik munasabah dan selari dengan data dunia sebenar;",
          "5. Memurnikan model matematik: Menilai semula andaian atau menambah pemboleh ubah lain jika ramalan model tidak tepat (proses kitaran berulang);",
          "6. Melaporkan dapatan: Membentangkan kesimpulan, dapatan model dan cadangan tindakan penyelesaian dalam laporan berstruktur."
        ],
        "explanation": "Pemodelan matematik digunakan oleh pakar epidemiologi untuk meramalkan penularan wabak penyakit dan oleh perancang bandar untuk mengurus aliran trafik."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "desc": "Kenal pasti dan definisikan masalah situasi dunia sebenar."
      },
      {
        "step": "Langkah 2",
        "desc": "Tuliskan andaian yang munasabah dan takrifkan pemboleh ubah x dan y."
      },
      {
        "step": "Langkah 3",
        "desc": "Bina model persamaan matematik (linear, kuadratik, peratusan) dan selesaikan."
      },
      {
        "step": "Langkah 4",
        "desc": "Tafsir, tentusahkan dan murnikan model sebelum menulis laporan akhir."
      }
    ],
    "keypoints": [
      "Pemodelan matematik ialah proses kitaran berulang 6 langkah",
      "Andaian penting untuk memudahkan masalah dunia sebenar agar boleh diselesaikan",
      "Model matematik boleh berbentuk formula, persamaan, fungsi atau graf",
      "Menentusahkan model menyemak ketepatan hasil dengan data sebenar",
      "Jika model tidak tepat, model perlu dimurnikan dengan mengubah andaian"
    ],
    "questions": [
      {
        "question": "Apakah langkah pertama dalam kitaran proses pemodelan matematik?",
        "options": [
          "Melaporkan dapatan",
          "Mengaplikasikan matematik untuk membina model",
          "Mengenal pasti dan mendefinisikan masalah",
          "Memurnikan model matematik"
        ],
        "answer": "Mengenal pasti dan mendefinisikan masalah",
        "explanation": "Peringkat pertama pemodelan matematik ialah mengenal pasti dan mendefinisikan masalah dunia sebenar yang ingin diselesaikan."
      },
      {
        "question": "Mengapakah langkah membuat andaian perlu dilaksanakan semasa membina model matematik?",
        "options": [
          "Untuk membolehkan jawapan akhir diteka dengan pantas",
          "Untuk mempermudahkan situasi dunia sebenar yang kompleks supaya boleh dimodelkan",
          "Untuk menghapuskan semua nombor daripada persamaan",
          "Untuk mengelakkan keperluan menulis laporan dapatan"
        ],
        "answer": "Untuk mempermudahkan situasi dunia sebenar yang kompleks supaya boleh dimodelkan",
        "explanation": "Situasi dunia sebenar sangat kompleks dengan terlalu banyak pemboleh ubah, maka andaian dibuat untuk mengawal faktor tertentu agar matematik dapat diaplikasikan."
      }
    ],
    "struktur": [
      {
        "soalan": "Senaraikan empat peringkat pertama dalam kitaran proses pemodelan matematik mengikut urutan yang betul.",
        "markah": "4 Markah",
        "jawapan": "1. Mengenal pasti dan mendefinisikan masalah [1m]; 2. Membuat andaian dan mengenal pasti pemboleh ubah [1m]; 3. Mengaplikasikan matematik untuk membina model [1m]; 4. Menentusahkan dan mentafsir penyelesaian dalam konteks masalah [1m].",
        "panduanKoreksi": "1m peringkat 1 + 1m peringkat 2 + 1m peringkat 3 + 1m peringkat 4 (mengikut urutan)."
      }
    ]
  }
];
