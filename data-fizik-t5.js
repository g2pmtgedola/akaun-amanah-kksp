/* ==========================================================================
   DATA-FIZIK-T5.JS — 100% BAHAN LENGKAP BUKU TEKS FIZIK KSSM TINGKATAN 5
   Sumber Rasmi: https://online.anyflip.com/aurga/yoeq/mobile/
   Semua 7 Bab & 25 Subtopik Rasmi KSSM Lengkap Tanpa Sebarang Tertinggal
   ========================================================================== */

const FIZIK_T5_DATA = [
  {
    "id": "fizik5-bab1",
    "babNum": "BAB 1",
    "title": "DAYA DAN GERAKAN II",
    "icon": "⚙️",
    "anyflipPages": "Buku Teks Fizik Tingkatan 5 KSSM (Halaman 2 – 37)",
    "synopsis": "Mengkaji daya paduan bagi objek pegun, halaju malar dan memecut, leraian daya kepada komponen serenjang Fx dan Fy, keseimbangan daya (daya paduan sifar, segi tiga daya tertutup), serta sifat kekenyalan pepejal, Hukum Hooke (F = kx), dan tenaga keupayaan kenyal (Ep = 1/2 kx² = 1/2 Fx).",
    "notes": [
      {
        "subtopic": "1.1 Daya Paduan",
        "summary": "Daya paduan (F) ialah daya tunggal yang mewakili jumlah vektor bagi dua atau lebih daya yang bertindak ke atas sesuatu objek.",
        "verbatim": [
          "Definisi Daya Paduan: Daya tunggal yang terhasil daripada gabungan secara vektor dua atau lebih daya yang bertindak pada suatu objek.",
          "Menentukan Daya Paduan:",
          "- Dua daya selari searah: F = F₁ + F₂",
          "- Dua daya selari bertentangan arah: F = F₁ - F₂ (mengikut arah daya lebih besar)",
          "- Dua daya berserenjang (90°): Gunakan Teorem Pythagoras F = √(F₁² + F₂²) dan arah tan θ = F_y / F_x",
          "- Dua daya pada sudut bukan 90°: Gunakan kaedah segi empat selari daya atau petua segi tiga daya.",
          "Daya Paduan dalam Gerakan:",
          "- F_paduan = 0 (Keseimbangan daya): Objek pegun atau bergerak dengan halaju malar (Hukum Gerakan Newton Pertama).",
          "- F_paduan ≠ 0: Objek mengalami pecutan seragam, F = ma (Hukum Gerakan Newton Kedua).",
          "Situasi Lif Bergerak:",
          "- Lif pegun / halaju malar: R = mg (bacaan penimbang sama berat sebenar)",
          "- Lif memecut ke atas: R - mg = ma => R = m(g + a) (berat ketara bertambah)",
          "- Lif memecut ke bawah: mg - R = ma => R = m(g - a) (berat ketara berkurang)",
          "- Kabel lif putus (jatuh bebas, a = g): R = 0 (keadaan tanpa berat)"
        ],
        "explanation": "Daya tindak balas normal (R) pada penimbang menunjukkan berat ketara penumpang bergantung kepada arah dan magnitud pecutan lif."
      },
      {
        "subtopic": "1.2 Leraian Daya",
        "summary": "Leraian daya ialah proses memecahkan satu daya tunggal kepada dua komponen berserenjang, iaitu komponen mengufuk (Fx) dan komponen menegak (Fy).",
        "verbatim": [
          "Konsep Leraian Daya: Satu daya F yang condong pada sudut θ terhadap garis mengufuk boleh dileraikan kepada dua komponen serenjang:",
          "- Komponen mengufuk: F_x = F cos θ",
          "- Komponen menegak: F_y = F sin θ",
          "Aplikasi Leraian Daya:",
          "1. Menolak atau Menarik Pemotong Rumput:",
          "   - Menarik pemotong rumput pada sudut θ: Komponen Fy bertindak ke atas mengurangkan tindak balas normal (R = mg - F sin θ), mesin terasa lebih ringan.",
          "   - Menolak pemotong rumput pada sudut θ: Komponen Fy bertindak ke bawah menambah tindak balas normal (R = mg + F sin θ), mesin menekan rumput lebih kuat untuk memotong rumput tebal.",
          "2. Objek di Atas Satah Condong bersudut θ:",
          "   - Berat objek, W = mg dileraikan:",
          "   - Komponen selari satah ke bawah: W_selari = mg sin θ",
          "   - Komponen berserenjang satah: W_serenjang = mg cos θ (diimbangi oleh tindak balas normal R = mg cos θ jika tiada gerakan tegak).",
          "   - Daya geseran, fr menentang pergerakan objek."
        ],
        "explanation": "Bagi satah condong tanpa geseran, daya paduan yang menyebabkan objek meluncur turun ialah F = mg sin θ = ma, menghasilkan pecutan a = g sin θ tanpa bergantung kepada jisim objek."
      },
      {
        "subtopic": "1.3 Keseimbangan Daya",
        "summary": "Objek dikatakan berada dalam keseimbangan daya apabila semua daya yang bertindak ke atasnya menghasilkan daya paduan sifar (F_paduan = 0).",
        "verbatim": [
          "Syarat Keseimbangan Daya: Jumlah daya dalam semua arah adalah sifar (ΣFx = 0 dan ΣFy = 0).",
          "Keadaan Gerakan: Objek kekal pegun atau bergerak dengan halaju seragam dalam garis lurus.",
          "Segi Tiga Daya: Apabila tiga daya yang bertindak ke atas satu objek berada dalam keseimbangan, vektor ketiga-tiga daya boleh disusun hujung-ke-pangkal membentuk segi tiga daya tertutup dengan arah anak panah berterusan satu pusingan.",
          "Contoh Situasi Keseimbangan Daya:",
          "- Gambar tergantung pada tali dengan dua tegangan tali T: T sin θ mengimbangi berat gambar W, T cos θ seimbang kiri dan kanan.",
          "- Kapal terbang terbang pada ketinggian dan halaju malar: Daya angkat (Lift) = Berat (Weight), Daya tujah (Thrust) = Daya seretan (Drag).",
          "- Objek pegun di atas satah condong kasar: Tindak balas normal R mengimbangi mg cos θ, dan daya geseran fr mengimbangi mg sin θ."
        ],
        "explanation": "Jika tiga daya membentuk segi tiga daya tertutup, petua sinus atau petua kosinus boleh digunakan untuk mengira magnitud daya yang tidak diketahui."
      },
      {
        "subtopic": "1.4 Kekenyalan",
        "summary": "Kekenyalan ialah sifat bahan yang membolehkan objek kembali kepada bentuk dan saiz asalnya selepas daya yang bertindak ke atasnya dialihkan.",
        "verbatim": [
          "Hukum Hooke: Pemanjangan suatu spring (x) adalah berkadar terus dengan daya yang dikenakan (F) ke atas spring asalkan tidak melebihi had kenyal spring.",
          "Formula Hukum Hooke: F = kx (di mana k = pemalar spring dalam N m⁻¹ atau N cm⁻¹; x = pemanjangan).",
          "Pemalar Spring (k): Kecerunan graf F melawan x mewakili nilai pemalar spring k. Semakin curam kecerunan graf, semakin tinggi nilai k, bermakna spring semakin keras dan kurang memanjang.",
          "Had Kenyal (Elastic Limit): Daya maksimum yang boleh dikenakan sebelum spring mengalami perubahan bentuk kekal (deformasi plastik).",
          "Tenaga Keupayaan Kenyal (E_p): Kerja yang dilakukan untuk memampatkan atau meregangkan spring, sama dengan luas di bawah graf F melawan x:",
          "  E_p = 1/2 Fx = 1/2 kx²",
          "Faktor Mempengaruhi Pemalar Spring k:",
          "- Panjang spring: Spring pendek mempunyai k lebih tinggi (lebih keras) berbanding spring panjang.",
          "- Diameter dawai spring: Dawai lebih tebal menghasilkan k lebih tinggi (lebih keras).",
          "- Diameter gegelung spring: Gegelung berdiameter lebih kecil mempunyai k lebih tinggi (lebih keras).",
          "- Jenis bahan spring: Spring keluli lebih keras berbanding spring kuprum.",
          "Susunan Spring:",
          "- Dua spring serupa bersiri: Pemanjangan berganda (x_total = 2x), pemalar spring berkesan menjadi separuh (k_berkesan = k/2).",
          "- Dua spring serupa selari: Pemanjangan separuh (x_total = x/2), pemalar spring berkesan berganda (k_berkesan = 2k)."
        ],
        "explanation": "Susunan spring selari menanggung beban secara bersama-sama, menjadikan sistem spring lebih tegar dan mampu menampung beban lebih berat."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "desc": "Tentukan daya paduan mengikut arah daya (selari, berserenjang guna Pythagoras, atau bersudut guna segi empat selari)."
      },
      {
        "step": "Langkah 2",
        "desc": "Leraikan daya condong kepada komponen Fx = F cos θ dan Fy = F sin θ."
      },
      {
        "step": "Langkah 3",
        "desc": "Bina segi tiga daya tertutup untuk sistem dalam keseimbangan (F paduan = 0)."
      },
      {
        "step": "Langkah 4",
        "desc": "Gunakan F = kx dan E_p = 1/2 kx² untuk analisis graf kenyal serta susunan siri dan selari spring."
      }
    ],
    "keypoints": [
      "F_paduan = ma (Hukum Gerakan Newton Kedua)",
      "Fx = F cos θ, Fy = F sin θ untuk leraian daya",
      "Keseimbangan daya = F_paduan sifar = segi tiga daya tertutup",
      "Hukum Hooke: F = kx (Kecerunan graf F lawan x = k)",
      "Tenaga keupayaan kenyal: Ep = 1/2 Fx = 1/2 kx²",
      "Spring selari: k_berkesan = 2k (lebih keras); Spring siri: k_berkesan = k/2"
    ],
    "questions": [
      {
        "question": "Sebuah kotak seberat 50 N ditarik dengan daya F = 20 N pada sudut 30° dengan satah ufuk. Berapakah magnitud komponen daya mengufuk (Fx)?",
        "options": [
          "10.0 N",
          "17.3 N",
          "25.0 N",
          "43.3 N"
        ],
        "answer": "17.3 N",
        "explanation": "Komponen mengufuk Fx = F cos 30° = 20 × cos 30° = 20 × 0.866 = 17.32 N."
      },
      {
        "question": "Satu spring memanjang sebanyak 4 cm apabila digantung beban 8 N. Berapakah tenaga keupayaan kenyal yang tersimpan dalam spring tersebut?",
        "options": [
          "0.16 J",
          "0.32 J",
          "1.60 J",
          "3.20 J"
        ],
        "answer": "0.16 J",
        "explanation": "Ep = 1/2 Fx. Tukar x = 4 cm = 0.04 m. Ep = 1/2 × 8 N × 0.04 m = 0.16 J."
      }
    ],
    "struktur": [
      {
        "soalan": "Seorang penumpang berjisim 60 kg berada di dalam sebuah lif. Lif itu memecut ke atas dengan pecutan 2 m s⁻². Hitung daya tindak balas normal yang bertindak ke atas kaki penumpang tersebut (Ambil g = 9.81 m s⁻²).",
        "markah": "3 Markah",
        "jawapan": "Persamaan gerakan lif memecut ke atas: R - mg = ma [1m]. Maka R = m(g + a) = 60(9.81 + 2) [1m] = 60(11.81) = 708.6 N [1m].",
        "panduanKoreksi": "1m formula R - mg = ma + 1m gantian nilai + 1m jawapan tepat unit N."
      }
    ]
  },
  {
    "id": "fizik5-bab2",
    "babNum": "BAB 2",
    "title": "TEKANAN",
    "icon": "🌊",
    "anyflipPages": "Buku Teks Fizik Tingkatan 5 KSSM (Halaman 38 – 87)",
    "synopsis": "Mengkaji formula dan aplikasi tekanan cecair (P = hρg), tekanan atmosfera (barometer Fortin/merkuri), tekanan gas (manometer), Prinsip Pascal dalam sistem hidraulik (F1/A1 = F2/A2), Prinsip Archimedes dan daya apungan (Fb = ρVg), serta Prinsip Bernoulli dan aerofoil.",
    "notes": [
      {
        "subtopic": "2.1 Tekanan Cecair",
        "summary": "Tekanan cecair disebabkan oleh berat turus cecair yang bertindak ke atas permukaan di bawahnya dan bertindak ke semua arah sama rata.",
        "verbatim": [
          "Formula Tekanan Cecair: P = hρg (h = kedalaman cecair dalam m; ρ = ketumpatan cecair dalam kg m⁻³; g = pecutan graviti 9.81 m s⁻²).",
          "Ciri-ciri Tekanan Cecair:",
          "- Bertambah mengikut kedalaman (h): Semakin dalam cecair, semakin tinggi tekanan.",
          "- Bertambah mengikut ketumpatan cecair (ρ): Cecair lebih tumpat menghasilkan tekanan lebih tinggi pada kedalaman sama.",
          "- Tidak bergantung kepada luas permukaan atau bentuk bekas.",
          "- Bertindak ke semua arah pada suatu titik dan seragam pada aras kedalaman mendatar yang sama.",
          "Tekanan Sebenar pada Kedalaman h: P_sebenar = P_atm + hρg (di mana P_atm ialah tekanan atmosfera).",
          "Aplikasi Tekanan Cecair:",
          "- Empangan air: Dinding empangan dibina lebih tebal di bahagian dasar untuk menahan tekanan cecair yang sangat tinggi di dasar.",
          "- Penitis ubat dan beg cecair intravena (IV): Diletakkan pada kedudukan lebih tinggi daripada badan pesakit supaya tekanan cecair cukup tinggi untuk mengatasi tekanan darah dalam vena."
        ],
        "explanation": "Bentuk dinding empangan yang menirus ke atas dan tebal di dasar secara langsung membuktikan bahawa tekanan cecair berkadar terus dengan kedalaman."
      },
      {
        "subtopic": "2.2 Tekanan Atmosfera",
        "summary": "Tekanan atmosfera ialah tekanan yang dikenakan oleh berat lapisan udara atmosfera yang menyelubungi bumi ke atas semua permukaan.",
        "verbatim": [
          "Kewujudan Tekanan Atmosfera: Udara di atmosfera bumi mempunyai jisim dan ditarik oleh graviti menghasilkan daya berat ke atas setiap unit luas permukaan bumi (1 atm ≈ 101,300 Pa ≈ 760 mm Hg = 76 cm Hg ≈ 10.3 m air).",
          "Alat Pengukur Tekanan Atmosfera:",
          "- Barometer Merkuri Ringkas: Turus merkuri setinggi 76 cm disokong oleh tekanan atmosfera di luar. Ruang di atas merkuri ialah ruang vakum Torricelli.",
          "- Barometer Fortin: Barometer merkuri makmal berketepatan tinggi dengan skala vernier.",
          "- Barometer Aneroid: Menggunakan kotak logam separa vakum yang mengembang dan menguncup mengikut perubahan tekanan, mudah alih (altimeter kapal terbang).",
          "Faktor Mempengaruhi Tekanan Atmosfera: Ketinggian dari aras laut. Semakin tinggi dari aras laut, ketumpatan udara berkurang dan berat turus udara berkurang, maka tekanan atmosfera berkurang.",
          "Aplikasi Tekanan Atmosfera: Straw minuman, penyedut getah (suction cup), picagari, pembersih hampagas (vacuum cleaner)."
        ],
        "explanation": "Apabila udara disedut keluar dari straw minuman, tekanan di dalam straw menjadi lebih rendah daripada tekanan atmosfera di luar. Tekanan atmosfera menolak air masuk ke dalam straw."
      },
      {
        "subtopic": "2.3 Tekanan Gas",
        "summary": "Tekanan gas terhasil daripada perlanggaran molekul-molekul gas yang sentiasa bergerak secara rawak dengan dinding bekas mengikut Teori Kinetik Gas.",
        "verbatim": [
          "Punca Tekanan Gas: Perlanggaran berterusan molekul gas yang melantun pada dinding bekas mengenakan perubahan momentum, menghasilkan daya impuls per unit luas (P = F/A).",
          "Alat Pengukur Tekanan Gas:",
          "1. Manometer Tiub-U: Mengandungi cecair (air atau merkuri) untuk mengukur perbezaan tekanan antara bekalan gas dan atmosfera:",
          "   - Jika aras merkuri sama tinggi: P_gas = P_atm",
          "   - Jika turus sebelah terbuka lebih tinggi sebanyak h: P_gas = P_atm + hρg (atau P_atm + h cm Hg)",
          "   - Jika turus sebelah bekalan gas lebih tinggi sebanyak h: P_gas = P_atm - hρg",
          "2. Tolok Bourdon: Menggunakan tiub kuprum berbentuk-C yang melurus apabila tekanan gas tinggi dialirkan ke dalamnya, memutarkan jarum penunjuk pada skala bacaan."
        ],
        "explanation": "Manometer mengukur tekanan relatif gas berbanding tekanan atmosfera di sekeliling."
      },
      {
        "subtopic": "2.4 Prinsip Pascal",
        "summary": "Prinsip Pascal menyatakan bahawa tekanan yang dikenakan ke atas suatu bendalir tertutup akan dipindahkan secara seragam ke semua arah dalam bendalir tersebut.",
        "verbatim": [
          "Pernyataan Prinsip Pascal: Tekanan yang dikenakan pada mana-mana bahagian bendalir yang terkurung dipindahkan sama rata ke seluruh bahagian cecair tanpa berkurang.",
          "Prinsip Sistem Hidraulik:",
          "- Tekanan pada omboh kecil: P₁ = F₁ / A₁",
          "- Tekanan pada omboh besar: P₂ = F₂ / A₂",
          "- Menurut Prinsip Pascal: P₁ = P₂ => F₁ / A₁ = F₂ / A₂",
          "- Daya output: F₂ = (A₂ / A₁) × F₁",
          "- Faktor Pengganda Daya: Nisbah A₂/A₁ membolehkan daya kecil F₁ menghasilkan daya besar F₂ untuk mengangkat beban berat.",
          "Pemuliharaan Isi Padu Cecair Tak Boleh Mampat: V₁ = V₂ => A₁ × d₁ = A₂ × d₂ (jarak sesaran omboh kecil d₁ jauh lebih besar daripada sesaran omboh besar d₂).",
          "Aplikasi Prinsip Pascal: Jek hidraulik kereta, brek hidraulik kereta, jengkaut hidraulik, kerusi rawatan doktor gigi."
        ],
        "explanation": "Sistem hidraulik menggandakan daya tetapi tidak menghasilkan tenaga percuma kerana kerja yang dilakukan oleh kedua-dua omboh adalah sama (W = F₁d₁ = F₂d₂)."
      },
      {
        "subtopic": "2.5 Prinsip Archimedes",
        "summary": "Prinsip Archimedes menyatakan bahawa apabila suatu objek direndam sepenuhnya atau sebahagiannya di dalam bendalir, objek tersebut mengalami daya apungan yang sama dengan berat bendalir yang disesarkan.",
        "verbatim": [
          "Pernyataan Prinsip Archimedes: Daya apungan (F_B) = Berat bendalir yang disesarkan (W_cecair).",
          "Formula Daya Apungan: F_B = ρ V g",
          "  (di mana ρ = ketumpatan bendalir dlm kg m⁻³; V = isi padu bendalir tersesar / isi padu objek terendam dlm m³; g = 9.81 m s⁻²).",
          "Keapungan Objek:",
          "- F_B = Berat objek (W): Objek terapung dalam keseimbangan (Prinsip Keapungan). Ketumpatan purata objek ≤ ketumpatan cecair.",
          "- F_B < Berat objek: Objek tenggelam ke dasar. Daya paduan ke bawah = W - F_B.",
          "- F_B > Berat objek: Objek memecut naik ke atas permukaan cecair sehingga F_B menyamai berat objek.",
          "Berat Ketara Objek Terendam: W_ketara = W_sebenar_di_udara - F_B.",
          "Aplikasi Prinsip Archimedes:",
          "1. Hidrometer: Mengukur ketumpatan cecair (tenggelam lebih dalam cecair kurang tumpat).",
          "2. Kapal Selam: Mengawal keapungan menggunakan tangki balast (mengisi air untuk menyelam, mengepam keluar air dengan udara termampat untuk timbul).",
          "3. Belon Udara Panas: Ketumpatan udara panas di dalam belon lebih rendah daripada udara sejuk sekeliling, menghasilkan daya apungan melebihi berat belon.",
          "4. Garisan Plimsoll pada Kapal Kargo: Menandakan aras muatan selamat kapal mengikut ketumpatan air laut dan suhu berbeza."
        ],
        "explanation": "Daya apungan berpunca daripada perbezaan tekanan cecair antara permukaan atas dan permukaan bawah objek yang terendam."
      },
      {
        "subtopic": "2.6 Prinsip Bernoulli",
        "summary": "Prinsip Bernoulli menyatakan bahawa di kawasan di mana halaju bendalir (cecair atau gas) bertambah, tekanan dalam bendalir tersebut akan berkurang.",
        "verbatim": [
          "Pernyataan Prinsip Bernoulli: Halaju bendalir tinggi -> Tekanan bendalir rendah; Halaju bendalir rendah -> Tekanan bendalir tinggi.",
          "Kesan Tiub Venturi: Apabila cecair mengalir melalui bahagian tiub yang sempit (konstriksi), halaju cecair bertambah, menyebabkan tekanan cecair di bahagian sempit menurun.",
          "Aplikasi Prinsip Bernoulli:",
          "1. Bentuk Aerofoil Sayap Kapal Terbang:",
          "   - Bentuk melengkung di atas menyebabkan udara mengalir lebih laju di bahagian atas berbanding bawah.",
          "   - Tekanan di bahagian atas sayap menjadi lebih rendah daripada tekanan di bahagian bawah.",
          "   - Perbezaan tekanan ini menghasilkan satu daya paduan ke atas yang dinamakan Daya Angkat (Lift Force).",
          "2. Penunu Bunsen: Gas mengalir laju melalui muncung sempit menghasilkan tekanan rendah, menyedut masuk udara dari luar melalui lubang udara untuk pembakaran lengkap (nyalaan biru).",
          "3. Penyembur Racun / Minyak Wangi: Aliran udara laju di muncung menghasilkan tekanan rendah menyedut cecair naik melalui tiub tegak.",
          "4. Pukulan Bola Melengkung (Kesan Magnus): Putaran bola menyebabkan kelajuan udara di satu sisi lebih tinggi daripada sisi lain, menghasilkan perbezaan tekanan yang melengkungkan trajektori bola."
        ],
        "explanation": "Daya angkat sayap kapal terbang terhasil secara langsung akibat perbezaan tekanan antara bahagian atas dan bawah aerofoil mengikut Prinsip Bernoulli."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "desc": "Kuasai formula tekanan cecair P = hρg dan tekanan gas menggunakan manometer Tiub-U."
      },
      {
        "step": "Langkah 2",
        "desc": "Gunakan formula Prinsip Pascal F1/A1 = F2/A2 untuk sistem hidraulik pengganda daya."
      },
      {
        "step": "Langkah 3",
        "desc": "Gunakan Prinsip Archimedes FB = ρVg dan Prinsip Keapungan (FB = Berat objek) untuk objek terapung."
      },
      {
        "step": "Langkah 4",
        "desc": "Hubungkaitkan halaju bendalir tinggi dengan tekanan rendah dalam aerofoil dan tiub Venturi (Prinsip Bernoulli)."
      }
    ],
    "keypoints": [
      "Tekanan cecair: P = hρg (bergantung kepada kedalaman dan ketumpatan)",
      "Tekanan atmosfera standard: 1 atm = 760 mmHg = 101.3 kPa",
      "Prinsip Pascal: Tekanan dipindahkan seragam ke semua arah (F1/A1 = F2/A2)",
      "Prinsip Archimedes: Daya apungan FB = ρVg = berat bendalir tersesar",
      "Prinsip Keapungan: Objek terapung apabila FB = Berat objek",
      "Prinsip Bernoulli: Halaju bendalir bertambah, tekanan bendalir berkurang (Daya Angkat aerofoil)"
    ],
    "questions": [
      {
        "question": "Sebuah jek hidraulik mempunyai omboh kecil berluas 0.02 m² dan omboh besar berluas 0.80 m². Berapakah daya F1 yang perlu dikenakan pada omboh kecil untuk mengangkat kereta seberat 16,000 N?",
        "options": [
          "200 N",
          "400 N",
          "800 N",
          "1,600 N"
        ],
        "answer": "400 N",
        "explanation": "Menurut Prinsip Pascal: F1/A1 = F2/A2 => F1/0.02 = 16,000/0.80 => F1 = (16,000 / 0.80) × 0.02 = 20,000 × 0.02 = 400 N."
      },
      {
        "question": "Satu blok logam mempunyai isi padu 0.005 m³ direndam sepenuhnya ke dalam air berkutumpatan 1,000 kg m⁻³. Hitung daya apungan yang bertindak ke atas blok tersebut. (Ambil g = 9.81 m s⁻²).",
        "options": [
          "4.9 N",
          "49.05 N",
          "98.1 N",
          "490.5 N"
        ],
        "answer": "49.05 N",
        "explanation": "FB = ρ V g = 1,000 kg m⁻³ × 0.005 m³ × 9.81 m s⁻² = 49.05 N."
      }
    ],
    "struktur": [
      {
        "soalan": "Terangkan bagaimana bentuk aerofoil pada sayap kapal terbang membolehkan kapal terbang menjana daya angkat mengikut Prinsip Bernoulli.",
        "markah": "4 Markah",
        "jawapan": "Sayap kapal terbang mempunyai bentuk keratan rentas aerofoil di mana bahagian permukaan atas lebih melengkung berbanding bahagian bawah [1m]. Apabila kapal terbang bergerak, udara di bahagian atas bergerak dengan halaju lebih tinggi berbanding udara di bahagian bawah [1m]. Menurut Prinsip Bernoulli, halaju udara yang lebih tinggi menghasilkan tekanan yang lebih rendah di bahagian atas, manakala halaju rendah menghasilkan tekanan lebih tinggi di bahagian bawah [1m]. Perbezaan tekanan ini menghasilkan satu daya paduan bersih yang bertindak ke atas iaitu daya angkat [1m].",
        "panduanKoreksi": "1m bentuk aerofoil atas melengkung + 1m halaju atas tinggi + 1m tekanan atas rendah Prinsip Bernoulli + 1m beza tekanan hasil daya angkat."
      }
    ]
  },
  {
    "id": "fizik5-bab3",
    "babNum": "BAB 3",
    "title": "ELEKTRIK",
    "icon": "⚡",
    "anyflipPages": "Buku Teks Fizik Tingkatan 5 KSSM (Halaman 88 – 135)",
    "synopsis": "Mengkaji arus elektrik (I = Q/t), beza keupayaan (V = W/Q), Hukum Ohm (V = IR), faktor mempengaruhi rintangan dan kerintangan konduktor (R = ρl/A), daya gerak elektrik (d.g.e.) dan rintangan dalam bateri (E = V + Ir), serta tenaga dan kuasa elektrik (E = VIt, P = VI, kos penggunaan elektrik).",
    "notes": [
      {
        "subtopic": "3.1 Arus dan Beza Keupayaan",
        "summary": "Arus elektrik ialah kadar pengaliran cas, manakala beza keupayaan ialah kerja yang dilakukan untuk menggerakkan satu unit cas antara dua titik dalam medan elektrik.",
        "verbatim": [
          "Definisi Arus Elektrik (I): Kadar pengaliran cas elektrik merentasi konduktor:",
          "  I = Q / t  (I dalam Ampere, A; Q dalam Coulomb, C; t dalam saat, s). Cas satu elektron e = 1.6 × 10⁻¹⁹ C; Q = ne.",
          "Definisi Beza Keupayaan (V): Kerja (W) yang dilakukan untuk menggerakkan satu unit cas (Q) dari satu titik ke titik lain dalam medan elektrik:",
          "  V = W / Q  (V dalam Volt, V = J C⁻¹).",
          "Hukum Ohm: Arus elektrik (I) yang mengalir melalui konduktor ohm adalah berkadar terus dengan beza keupayaan (V) merentasinya, asalkan suhu dan keadaan fizikal lain dikekalkan malar:",
          "  V = IR (R = rintangan konduktor dalam Ohm, Ω).",
          "Graf V melawan I: Bagi konduktor ohm (cth: dawai konstantan pada suhu tetap), graf ialah garis lurus melalui asalan dengan kecerunan bersamaan rintangan R. Bagi filamen mentol atau diod (bukan ohm), graf melengkung kerana suhu berubah mempengaruhi rintangan."
        ],
        "explanation": "Ammeter disambung secara bersiri kerana mempunyai rintangan sangat rendah, manakala voltmeter disambung secara selari kerana mempunyai rintangan sangat tinggi."
      },
      {
        "subtopic": "3.2 Rintangan",
        "summary": "Rintangan ialah tentangan terhadap pengaliran cas elektrik dalam konduktor, bergantung kepada panjang, luas keratan rentas, jenis bahan (kerintangan) dan suhu konduktor.",
        "verbatim": [
          "Faktor Mempengaruhi Rintangan Konduktor (R):",
          "1. Panjang konduktor (l): R berkadar terus dengan l (R ∝ l). Dawai lebih panjang mempunyai rintangan lebih tinggi.",
          "2. Luas keratan rentas (A): R berkadar songsang dengan A (R ∝ 1/A). Dawai lebih tebal (diameter besar) mempunyai rintangan lebih rendah.",
          "3. Suhu: Bagi konduktor logam, rintangan bertambah apabila suhu meningkat kerana getaran atom logam mengganggu laluan elektron.",
          "4. Kerintangan bahan (ρ): Ciri intrinsik bahan konduktor.",
          "Formula Kerintangan Dawai:",
          "  R = ρ l / A  =>  ρ = R A / l",
          "  (ρ = kerintangan dalam unit Ω m; l = panjang dlm m; A = luas keratan rentas dlm m² = πd²/4).",
          "Pengelasan Bahan Mengikut Kerintangan:",
          "- Konduktor: Kerintangan sangat rendah (10⁻⁸ Ω m, cth: kuprum, perak).",
          "- Semikonduktor: Kerintangan sederhana (10⁻⁵ hingga 10² Ω m, cth: silikon, germanium).",
          "- Penebat: Kerintangan sangat tinggi (10¹² Ω m, cth: getah, kaca).",
          "- Superkonduktor: Bahan yang mempunyai rintangan sifar pada suhu genting (Tc)."
        ],
        "explanation": "Dawai kuprum digunakan sebagai kabel elektrik domestik kerana kerintangannya sangat rendah, mengurangkan kehilangan tenaga haba (I²Rt)."
      },
      {
        "subtopic": "3.3 Daya Gerak Elektrik (d.g.e.) dan Rintangan Dalam",
        "summary": "Daya gerak elektrik (E) ialah jumlah tenaga yang dibekalkan oleh sumber elektrik untuk menggerakkan satu unit cas mengelilingi satu litar lengkap, manakala rintangan dalam (r) ialah rintangan terhadap pengaliran cas di dalam sumber elektrik itu sendiri.",
        "verbatim": [
          "Definisi Daya Gerak Elektrik (E): Tenaga yang dibekalkan oleh satu sumber elektrik untuk menggerakkan 1 coulomb cas mengelilingi litar lengkap (E = W / Q, unit Volt, V).",
          "Perbezaan d.g.e. (E) vs Beza Keupayaan Terminal (V):",
          "- Litar terbuka (arus I = 0): Bacaan voltmeter merentasi terminal bateri = d.g.e. (E).",
          "- Litar tertutup (arus I mengalir): Bacaan voltmeter terminal V adalah kurang daripada E kerana kehilangan voltan merentasi rintangan dalam (susutan voltan Ir).",
          "Formula Hubungan E, V, dan r:",
          "  E = V + Ir = I(R + r)  =>  V = E - Ir",
          "Graf V melawan I (Eksperimen Penentuan d.g.e. dan r):",
          "- Persamaan: V = -r I + E (sepadan y = mx + c)",
          "- Pintasan pada paksi-V (tegak) = d.g.e. sel (E)",
          "- Kecerunan graf (kecerunan negatif) = - r (magnitud kecerunan = rintangan dalam r)."
        ],
        "explanation": "Apabila arus yang mengalir dalam litar meningkat, susutan voltan dalaman Ir meningkat, menyebabkan voltan terminal V bateri menyusut."
      },
      {
        "subtopic": "3.4 Tenaga dan Kuasa Elektrik",
        "summary": "Mengkaji penggunaan tenaga elektrik oleh alat elektrik, kadar penggunaan tenaga (kuasa), dan pengiraan kos penggunaan elektrik harian.",
        "verbatim": [
          "Formula Tenaga Elektrik (E):",
          "  E = V Q = V I t = I² R t = (V² / R) t  (Unit: Joule, J)",
          "Formula Kuasa Elektrik (P):",
          "  P = E / t = V I = I² R = V² / R  (Unit: Watt, W = J s⁻¹)",
          "Kadar Kuasa Perkakas Elektrik (cth: '240 V, 1000 W'): Bermaksud perkakas menggunakan 1000 Joule tenaga elektrik setiap saat apabila disambungkan kepada bekalan kuasa 240 V.",
          "Pengiraan Kos Elektrik:",
          "- Unit tenaga elektrik yang dibilkan oleh TNB ialah kilowatt-jam (kWj):",
          "  Bilangan unit (kWj) = [Kuasa (kW)] × [Masa penggunaan (jam)]",
          "  Kos = Bilangan unit (kWj) × Kadar tarif per unit (sen/kWj).",
          "Langkah Penjimatan Tenaga: Menggunakan lampu LED berkecekapan tinggi, mematikan suis apabila tidak digunakan, menggunakan perkakas bertaraf 5-bintang EE (Energy Efficiency)."
        ],
        "explanation": "Lampu LED menukarkan peratusan tenaga elektrik yang lebih besar kepada cahaya berbanding mentol filamen yang membazirkan banyak tenaga sebagai haba."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "desc": "Kuasai formula asas I = Q/t, V = W/Q dan Hukum Ohm V = IR."
      },
      {
        "step": "Langkah 2",
        "desc": "Kira rintangan konduktor menggunakan formula kerintangan R = ρl/A."
      },
      {
        "step": "Langkah 3",
        "desc": "Tentukan d.g.e. (E) dan rintangan dalam (r) daripada formula E = V + Ir dan graf V lawan I."
      },
      {
        "step": "Langkah 4",
        "desc": "Kira tenaga E = VIt, kuasa P = VI dan bil elektrik bulanan berasaskan unit kWj."
      }
    ],
    "keypoints": [
      "Hukum Ohm: V = IR (arus berkadar terus dengan beza keupayaan)",
      "Kerintangan: R = ρl/A (panjang l menambah R, luas A mengurangkan R)",
      "d.g.e. dan rintangan dalam: E = V + Ir = I(R + r)",
      "Graf V lawan I: Pintasan-y = E, Kecerunan = -r",
      "Kuasa: P = VI = I²R = V²/R (Unit: Watt)",
      "1 unit tenaga elektrik = 1 kWj = 1 kW × 1 jam = 3.6 × 10⁶ J"
    ],
    "questions": [
      {
        "question": "Satu sel kering disambungkan kepada litar luar. Apabila suis terbuka, voltmeter membaca 1.5 V. Apabila suis ditutup dan arus 0.5 A mengalir, voltmeter membaca 1.2 V. Berapakah rintangan dalam sel tersebut?",
        "options": [
          "0.3 Ω",
          "0.6 Ω",
          "2.4 Ω",
          "3.0 Ω"
        ],
        "answer": "0.6 Ω",
        "explanation": "E = 1.5 V (suis terbuka), V = 1.2 V, I = 0.5 A. Susutan voltan Ir = E - V = 1.5 - 1.2 = 0.3 V. Maka r = (Ir) / I = 0.3 V / 0.5 A = 0.6 Ω."
      },
      {
        "question": "Sebuah cerek elektrik berlabel 240 V, 2000 W digunakan selama 3 jam setiap hari selama 30 hari. Berapakah kos penggunaan jika tarif elektrik ialah RM 0.20 per kWj?",
        "options": [
          "RM 12.00",
          "RM 24.00",
          "RM 36.00",
          "RM 48.00"
        ],
        "answer": "RM 36.00",
        "explanation": "Kuasa = 2000 W = 2 kW. Jumlah masa = 3 jam × 30 hari = 90 jam. Tenaga (kWj) = 2 kW × 90 jam = 180 kWj. Kos = 180 × RM 0.20 = RM 36.00."
      }
    ],
    "struktur": [
      {
        "soalan": "Huraikan maksud d.g.e. dan mengapa beza keupayaan merentasi terminal bateri menyusut apabila arus mengalir dalam litar tertutup.",
        "markah": "3 Markah",
        "jawapan": "d.g.e. ialah jumlah tenaga elektrik yang dibekalkan oleh bateri untuk menggerakkan 1 coulomb cas mengelilingi litar lengkap [1m]. Apabila arus mengalir dalam litar tertutup, cas elektrik perlu mengatasi rintangan dalam (r) elektrolit dan plat bateri itu sendiri [1m]. Sebahagian tenaga elektrik hilang sebagai tenaga haba di dalam bateri (susutan voltan Ir), menyebabkan beza keupayaan terminal V = E - Ir menjadi kurang daripada d.g.e. [1m].",
        "panduanKoreksi": "1m takrif d.g.e. + 1m ada rintangan dalam r + 1m formula susutan voltan V = E - Ir."
      }
    ]
  },
  {
    "id": "fizik5-bab4",
    "babNum": "BAB 4",
    "title": "KEELEKTROMAGNETAN",
    "icon": "🧲",
    "anyflipPages": "Buku Teks Fizik Tingkatan 5 KSSM (Halaman 136 – 177)",
    "synopsis": "Mengkaji interaksi antara medan magnet kekal dan medan magnet konduktor pembawa arus yang menghasilkan medan lastik (daya paduan, Petua Tangan Kiri Fleming, motor elektrik), fenomena aruhan elektromagnet (Hukum Faraday, Hukum Lenz, Petua Tangan Kanan Fleming, penjana elektrik), serta operasi transformer dan penghantaran tenaga elektrik voltan tinggi.",
    "notes": [
      {
        "subtopic": "4.1 Daya ke atas Konduktor Pembawa Arus dalam Suatu Medan Magnet",
        "summary": "Interaksi antara medan magnet daripada magnet kekal dengan medan magnet yang dihasilkan oleh konduktor pembawa arus menghasilkan satu medan magnet paduan yang dikenali sebagai medan lastik (catapult field).",
        "verbatim": [
          "Pembentukan Medan Lastik: Medan magnet kekal berinteraksi dengan medan magnet sekeliling konduktor berarus. Pada bahagian di mana garisan daya kedua-dua medan searah, medan magnet menjadi lebih kuat; pada bahagian di mana arah garisan bertentangan, medan magnet melemah. Ketidakseimbangan ini menghasilkan daya tolakan (daya lastik) dari rantau medan kuat ke rantau medan lemah.",
          "Petua Tangan Kiri Fleming: Digunakan untuk menentukan arah daya gerakan konduktor:",
          "- Ibu Jari = Arah Gerakan / Daya (F)",
          "- Jari Telunjuk = Arah Medan Magnet (Utara ke Selatan)",
          "- Jari Hantu = Arah Arus Konduktor (Positif ke Negatif)",
          "Faktor Mempengaruhi Magnitud Daya: Daya F bertambah apabila arus (I) bertambah, kekuatan medan magnet (B) bertambah, atau panjang wayar dalam medan magnet (l) bertambah (F = BIl sin θ).",
          "Aplikasi: Motor Arus Terus (A.T.):",
          "- Gegelung segi empat tepat diletakkan dalam medan magnet.",
          "- Pasangan daya bertentangan pada kedua-dua sisi menghasilkan tork pemutar.",
          "- Fungsi Komutator (Gelang Belah): Menyongsangkan arah arus dalam gegelung setiap separuh putaran supaya gegelung sentiasa berputar dalam satu arah yang sama.",
          "- Fungsi Berus Karbon: Mengekalkan sentuhan elektrik antara litar luar dengan komutator berputar."
        ],
        "explanation": "Tanpa komutator gelang belah, gegelung motor akan berayun ke hadapan dan ke belakang pada kedudukan menegak dan tidak dapat berputar secara berterusan."
      },
      {
        "subtopic": "4.2 Aruhan Elektromagnet",
        "summary": "Penghasilan daya gerak elektrik (d.g.e.) teraruh merentasi konduktor apabila terdapat perubahan fluks magnet atau pemotongan garisan fluks magnet oleh konduktor.",
        "verbatim": [
          "Konsep Aruhan Elektromagnet: Apabila dawai konduktor digerakkan memotong garisan medan magnet, atau magnet digerakkan keluar masuk solenoid, d.g.e. teraruh terhasil merentasi hujung konduktor.",
          "Hukum Faraday: Magnitud d.g.e. teraruh adalah berkadar terus dengan kadar pemotongan fluks magnet (atau kadar perubahan fluks magnet). d.g.e. teraruh bertambah jika halaju gerakan laju, kekuatan magnet tinggi, atau bilangan lilitan solenoid banyak.",
          "Hukum Lenz: Arah arus teraruh sentiasa mengalir dalam arah yang menghasilkan medan magnet yang menentang perubahan fluks magnet yang menghasilkannya.",
          "- Kutub magnet U ditolak masuk ke solenoid -> Solenoid menghasilkan kutub U di hujung hadapan untuk menolak magnet (arus mengalir melawan arah jam).",
          "- Kutub magnet U ditarik keluar dari solenoid -> Solenoid menghasilkan kutub S di hujung hadapan untuk menarik magnet (arus mengalir mengikut arah jam).",
          "Petua Tangan Kanan Fleming: Digunakan untuk menentukan arah arus teraruh bagi dawai lurus yang memotong medan magnet (Ibu jari = Gerakan konduktor, Telunjuk = Medan magnet, Jari Hantu = Arus teraruh).",
          "Penjana Arus Terus (A.T.) vs Penjana Arus Ulang-alik (A.U.): Penjana A.T. menggunakan komutator gelang belah, manakala penjana A.U. menggunakan dua gelang gelincir."
        ],
        "explanation": "Hukum Lenz merupakan manifestasi prinsip keabadian tenaga: kerja mekanikal dilakukan untuk mengatasi daya tolakan magnet, dan kerja ini ditukarkan kepada tenaga elektrik."
      },
      {
        "subtopic": "4.3 Transformer",
        "summary": "Transformer ialah alat yang menaikkan atau menurunkan beza keupayaan arus ulang-alik (A.U.) berdasarkan prinsip aruhan elektromagnet saling antara gegelung primer dan gegelung sekunder.",
        "verbatim": [
          "Struktur Transformer: Dua gegelung wayar kuprum bertebat (gegelung primer Np dan sekunder Ns) yang dililit pada teras besi lembut berlamina.",
          "Prinsip Kerja: Arus ulang-alik dalam gegelung primer menghasilkan fluks magnet yang sentiasa berubah-ubah arah dan magnitud dalam teras besi, mengaruhkan d.g.e. ulang-alik merentasi gegelung sekunder mengikut Hukum Faraday. (Transformer TIDAK berfungsi dengan arus terus A.T. kerana fluks magnet tidak berubah).",
          "Formula Transformer Ideal (Kecekapan 100%):",
          "  V_p / V_s = N_p / N_s  dan  P_primer = P_sekunder (V_p I_p = V_s I_s)",
          "Jenis Transformer:",
          "1. Transformer Injak Naik: Ns > Np, Vs > Vp, Is < Ip (Menaikkan voltan, menurunkan arus).",
          "2. Transformer Injak Turun: Ns < Np, Vs < Vp, Is > Ip (Menurunkan voltan, menaikkan arus).",
          "Kecekapan Transformer: Kecekapan (%) = (Kuasa Output / Kuasa Input) × 100% = (Vs Is / Vp Ip) × 100%.",
          "Punca Kehilangan Tenaga dalam Transformer & Cara Mengatasinya:",
          "- Rintangan gegelung (haba I²R): Gunakan dawai kuprum tebal berintangan rendah.",
          "- Arus pusar (eddy currents) dalam teras besi: Gunakan teras besi berlamina (kepingan besi diasingkan varnis penebat).",
          "- Histerisis (tenaga memagnet dan menyahmagnet): Gunakan teras besi lembut yang mudah dimagnetkan.",
          "- Kebocoran fluks magnet: Lilit gegelung sekunder di atas gegelung primer.",
          "Penghantaran Tenaga Elektrik Voltan Tinggi (Grid Nasional): Voltan dinaikkan sehingga ratusan kilovolt (132 kV - 500 kV) untuk merendahkan arus penghantaran (I) mengikut P = VI, sekali gus mengurangkan kehilangan kuasa terma dalam kabel (P_hilang = I²R)."
        ],
        "explanation": "Penghantaran kuasa pada voltan tinggi mengurangkan arus transmisi I secara drastik, menghasilkan pengurangan kehilangan tenaga kabel sehingga puluhan ribu kali ganda."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "desc": "Gunakan Petua Tangan Kiri Fleming untuk menentukan arah medan lastik dan putaran motor A.T."
      },
      {
        "step": "Langkah 2",
        "desc": "Gunakan Hukum Faraday dan Hukum Lenz untuk menentukan magnitud dan kutub arah arus teraruh."
      },
      {
        "step": "Langkah 3",
        "desc": "Gunakan formula transformer Vp/Vs = Np/Ns dan kuasa Vp Ip = Vs Is."
      },
      {
        "step": "Langkah 4",
        "desc": "Fahami reka bentuk teras besi berlamina dan transmisi voltan tinggi Rangkaian Grid Nasional."
      }
    ],
    "keypoints": [
      "Petua Tangan Kiri Fleming: Ibu jari = Gerakan, Telunjuk = Medan (U->S), Jari Hantu = Arus",
      "Komutator gelang belah motor AT menyongsangkan arus setiap separuh putaran",
      "Hukum Faraday: d.g.e. teraruh berkadar terus dengan kadar perubahan fluks magnet",
      "Hukum Lenz: Arah arus teraruh sentiasa menentang perubahan fluks magnet",
      "Formula transformer: Vp/Vs = Np/Ns",
      "Teras besi berlamina mengurangkan kehilangan tenaga arus pusar"
    ],
    "questions": [
      {
        "question": "Sebuah transformer injak turun mempunyai 1,200 lilitan primer dan 60 lilitan sekunder. Jika voltan input ialah 240 V A.U., berapakah voltan output sekunder?",
        "options": [
          "12 V",
          "24 V",
          "48 V",
          "4,800 V"
        ],
        "answer": "12 V",
        "explanation": "Vs = (Ns / Np) × Vp = (60 / 1,200) × 240 = (1/20) × 240 = 12 V."
      },
      {
        "question": "Mengapakah tenaga elektrik dihantar melalui kabel Rangkaian Grid Nasional pada voltan yang sangat tinggi?",
        "options": [
          "Untuk memendekkan jarak perjalanan elektron",
          "Untuk mengurangkan arus penghantaran dan meminimumkan kehilangan kuasa I²R",
          "Kerana arus terus hanya boleh mengalir pada voltan tinggi",
          "Untuk meningkatkan kelajuan putaran turbin di stesen jana kuasa"
        ],
        "answer": "Untuk mengurangkan arus penghantaran dan meminimumkan kehilangan kuasa I²R",
        "explanation": "Kuasa P = VI malar; voltan dinaikkan sangat tinggi mengurangkan arus I dalam kabel. Kehilangan kuasa haba ialah P = I²R, maka pengurangan I mengurangkan kehilangan tenaga dengan ketara."
      }
    ],
    "struktur": [
      {
        "soalan": "Nyatakan Hukum Lenz dan terangkan kutub magnet yang terbentuk di hujung solenoid apabila kutub utara sebatang magnet bar digerakkan mendekati solenoid tersebut.",
        "markah": "3 Markah",
        "jawapan": "Hukum Lenz menyatakan bahawa arah arus teraruh sentiasa mengalir dalam arah yang menentang perubahan fluks magnet yang menghasilkannya [1m]. Apabila kutub utara magnet ditolak mendekati solenoid, fluks magnet bertambah. Untuk menentang kemaraan magnet tersebut, kutub utara akan terbentuk di hujung solenoid yang menghadap magnet [1m]. Daya tolakan magnet antara dua kutub yang sama (Utara dan Utara) menentang gerakan magnet bar tersebut [1m].",
        "panduanKoreksi": "1m takrif Hukum Lenz + 1m kutub utara terbentuk + 1m daya tolakan menentang gerakan."
      }
    ]
  },
  {
    "id": "fizik5-bab5",
    "babNum": "BAB 5",
    "title": "ELEKTRONIK",
    "icon": "💻",
    "anyflipPages": "Buku Teks Fizik Tingkatan 5 KSSM (Halaman 178 – 205)",
    "synopsis": "Mengkaji pancaran termion dan ciri-ciri sinar katod dalam Osiloskop Sinar Katod (O.S.K.), fungsi semikonduktor dan diod simpang p-n dalam rektifikasi gelombang penuh dan separuh berserta kapasitor pelicin arus, serta susunan transistor npn dan pnp sebagai penguat arus dan suis automatik terkawal litar pembahagi voltan.",
    "notes": [
      {
        "subtopic": "5.1 Elektron",
        "summary": "Pancaran termion ialah proses pembebasan elektron dari permukaan logam yang dipanaskan, menghasilkan alur elektron bertenaga tinggi yang dikenali sebagai sinar katod.",
        "verbatim": [
          "Pancaran Termion: Apabila dawai filamen tungsten dipanaskan oleh arus elektrik, elektron bebas di permukaan logam memperoleh tenaga haba yang mencukupi untuk mengatasi fungsi kerja logam dan terbebas ke ruang vakum.",
          "Faktor Mempengaruhi Kadar Pancaran Termion: Suhu filamen bertambah, luas permukaan filamen bertambah, dan jenis logam (fungsi kerja rendah).",
          "Sinar Katod: Alur elektron berkelajuan tinggi yang dipancarkan dari katod memecut ke arah anod dalam tiub vakum di bawah voltan lampau tinggi (E.H.T.).",
          "Ciri-ciri Sinar Katod:",
          "- Bergerak dalam garis lurus dalam ruang vakum menghasilkan bayang-bayang tajam palang Maltese.",
          "- Mempunyai momentum dan tenaga kinetik (boleh memutarkan roda kincir ringan).",
          "- Bercas negatif (terpesong ke plat positif dalam medan elektrik, dan terpesong mengikut Petua Tangan Kiri Fleming dalam medan magnet).",
          "- Menghasilkan pendarcahaya hijau apabila menghentam skrin pendarfluor bersalut zink sulfida.",
          "Persamaan Tenaga Elektron: Tenaga keupayaan elektrik = Tenaga kinetik maksimum elektron:",
          "  E_p = E_k  =>  e V = 1/2 m v²_maks",
          "  (di mana e = 1.6 × 10⁻¹⁹ C; V = voltan anod V_EHT; m = 9.11 × 10⁻³¹ kg; v = halaju elektron dlm m s⁻¹).",
          "Osiloskop Sinar Katod (O.S.K.): Digunakan untuk memaparkan bentuk gelombang voltan, mengukur beza keupayaan puncak-ke-puncak (skala Y-gain) dan frekuensi gelombang (skala Dasar-masa / Time-base)."
        ],
        "explanation": "Tiub sinar katod mesti dikosongkan (ruang vakum tinggi) supaya elektron tidak berlanggar dengan molekul udara yang boleh merencatkan pergerakannya."
      },
      {
        "subtopic": "5.2 Diod Semikonduktor",
        "summary": "Diod semikonduktor diperbuat daripada cantuman semikonduktor jenis-p dan jenis-n yang hanya membenarkan arus elektrik mengalir dalam satu arah sahaja.",
        "verbatim": [
          "Semikonduktor Intrinsik & Pendopan (Doping):",
          "- Semikonduktor tulen (cth: Silikon, Germanium) didopkan dengan atom bendasing:",
          "- Pendopan atom trivalen (cth: Boron, Indium) -> Menghasilkan Semikonduktor Jenis-p (majoriti pembawa cas ialah hol/lohong).",
          "- Pendopan atom pentavalen (cth: Fosforus, Arsenik) -> Menghasilkan Semikonduktor Jenis-n (majoriti pembawa cas ialah elektron bebas).",
          "Diod Simpang p-n:",
          "- Pincang Depan (Forward Bias): Terminal positif bateri disambung ke jenis-p, terminal negatif ke jenis-n. Lapisan susutan menipis, rintangan simpang rendah, arus mengalir dan mentol menyala.",
          "- Pincang Songsang (Reverse Bias): Terminal positif bateri disambung ke jenis-n, terminal negatif ke jenis-p. Lapisan susutan menebal, rintangan simpang sangat tinggi, tiada arus mengalir.",
          "Aplikasi Diod - Rektifikasi (Menukar A.U. kepada A.T.):",
          "1. Rektifikasi Separuh Gelombang: Menggunakan satu diod tunggal. Hanya separuh kitaran positif A.U. dibenarkan melaluinya, separuh negatif disekat.",
          "2. Rektifikasi Gelombang Penuh (Susunan Tetimbang 4 Diod): Menggunakan 4 diod yang disusun dalam bentuk jambatan. Kedua-dua separuh kitaran positif dan negatif dialirkan pada arah yang sama merentasi perintang beban.",
          "Peranan Kapasitor sebagai Perata Arus: Kapasitor disambung selari dengan beban untuk menyimpan cas semasa voltan puncak dan melepaskan cas semasa voltan menurun, meratakan output voltan menjadi arus terus yang licin."
        ],
        "explanation": "Kapasitor bertindak seperti takungan elektrik sementara yang menyalurkan arus elektrik secara berterusan semasa kitaran voltan jatuh."
      },
      {
        "subtopic": "5.3 Transistor",
        "summary": "Transistor ialah peranti elektronik semikonduktor tiga terminal (Tapak B, Pengumpul C, Pengeluar E) yang berfungsi sebagai penguat arus dan suis automatik.",
        "verbatim": [
          "Jenis Transistor: Transistor npn dan transistor pnp (terminal Pengeluar mempunyai tanda anak panah: keluar = npn 'not pointing in', masuk = pnp).",
          "Hubungan Arus Transistor: I_E = I_B + I_C (di mana arus pengeluar IE bersamaan jumlah arus tapak IB dan arus pengumpul IC; IB sangat kecil ~ μA, IC besar ~ mA).",
          "Transistor Sebagai Penguat Arus (Amplifier):",
          "- Perubahan kecil pada arus tapak (ΔIB) menghasilkan perubahan yang sangat besar pada arus pengumpul (ΔIC). Faktor gandaan arus β = IC / IB.",
          "- Mikrofon disambungkan ke litar tapak, pembesar suara disambungkan ke litar pengumpul.",
          "Transistor Sebagai Suis Automatik (Litar Pembahagi Voltan):",
          "- Transistor hanya 'dihidupkan' (arus IC mengalir) apabila beza keupayaan tapak V_B melebihi voltan simpang ambang (sekitar 0.7 V bagi silikon):",
          "  V_B = [ R₂ / (R₁ + R₂) ] × V_CC",
          "Aplikasi Suis Kawalan Sensor:",
          "1. Suis Kawalan Cahaya (Lampu Jalan Automatik): Menggunakan Perintang Peka Cahaya (LDR). Waktu gelap, rintangan LDR sangat tinggi, voltan tapak VB meningkat melebihi 0.7 V, transistor ON dan geganti menghidupkan lampu jalan.",
          "2. Suis Penggera Kebakaran (Kawalan Suhu): Menggunakan Termistor. Suhu tinggi menurunkan rintangan termistor, menaikkan voltan perintang siri sehingga VB > 0.7 V, transistor ON dan loceng berbunyi."
        ],
        "explanation": "Litar pembahagi voltan membolehkan perubahan rintangan fizikal sensor (cahaya atau haba) mengawal voltan tapak transistor secara automatik."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "desc": "Fahami pancaran termion dan guna formula eV = 1/2 mv² untuk sinar katod."
      },
      {
        "step": "Langkah 2",
        "desc": "Kuasai fungsi diod pincang depan/songsang serta rektifikasi tetimbang 4 diod dan kapasitor perata."
      },
      {
        "step": "Langkah 3",
        "desc": "Kuasai tiga terminal transistor (B, C, E) dan formula arus IE = IB + IC."
      },
      {
        "step": "Langkah 4",
        "desc": "Analisis litar pembahagi voltan suis automatik transistor menggunakan LDR dan termistor."
      }
    ],
    "keypoints": [
      "Pancaran termion: Pelepasan elektron dari filamen tungsten panas",
      "Tenaga kinetik elektron sinar katod: eV = 1/2 m v²",
      "Diod membenarkan arus mengalir satu arah sahaja (pincang depan)",
      "Rektifikasi gelombang penuh: Jambatan 4 diod menukar AU kepada AT",
      "Kapasitor selari meratakan riak voltan arus terus",
      "Transistor npn/pnp berfungsi sebagai penguat arus dan suis automatik (VB > 0.7 V)"
    ],
    "questions": [
      {
        "question": "Beza keupayaan 2,500 V dikenakan merentasi anod dan katod dalam tiub sinar katod. Berapakah tenaga kinetik maksimum yang diperoleh oleh elektron? (Cas elektron e = 1.6 × 10⁻¹⁹ C).",
        "options": [
          "1.6 × 10⁻¹⁹ J",
          "4.0 × 10⁻¹⁶ J",
          "2.5 × 10⁻¹³ J",
          "5.0 × 10⁻¹² J"
        ],
        "answer": "4.0 × 10⁻¹⁶ J",
        "explanation": "Ek = e V = (1.6 × 10⁻¹⁹ C) × 2,500 V = 4.0 × 10⁻¹⁶ J."
      },
      {
        "question": "Apakah komponen elektronik yang perlu disambungkan selari merentasi perintang beban untuk meratakan voltan output selepas rektifikasi gelombang penuh?",
        "options": [
          "Diod Zener",
          "Kapasitor",
          "Perintang LDR",
          "Induktor"
        ],
        "answer": "Kapasitor",
        "explanation": "Kapasitor berfungsi sebagai perata arus (smoothing capacitor) yang mengecas semasa puncak voltan dan menyahcas semasa voltan merosot."
      }
    ],
    "struktur": [
      {
        "soalan": "Huraikan prinsip operasi litar suis kawalan cahaya automatik berasaskan perintang peka cahaya (LDR) dan transistor npn apabila persekitaran menjadi gelap.",
        "markah": "4 Markah",
        "jawapan": "Dalam keadaan gelap, rintangan perintang peka cahaya (LDR) meningkat dengan ketara [1m]. Berdasarkan konsep litar pembahagi voltan, beza keupayaan merentasi terminal tapak (VB) bertambah melebihi voltan minimum hidup transistor (0.7 V) [1m]. Arus tapak IB mula mengalir, sekali gus menghidupkan transistor (transistor ON) [1m]. Ini membolehkan arus pengumpul IC yang besar mengalir melalui geganti untuk menyalakan lampu [1m].",
        "panduanKoreksi": "1m rintangan LDR tinggi waktu gelap + 1m VB naik > 0.7 V + 1m arus tapak IB mengalir & transistor ON + 1m arus IC menyalakan lampu."
      }
    ]
  },
  {
    "id": "fizik5-bab6",
    "babNum": "BAB 6",
    "title": "FIZIK NUKLEAR",
    "icon": "☢️",
    "anyflipPages": "Buku Teks Fizik Tingkatan 5 KSSM (Halaman 206 – 229)",
    "synopsis": "Mengkaji reputan radioaktif (alfa α, beta β, gama γ), persamaan nuklear dan siri reputan, konsep separuh hayat (T1/2), tenaga nuklear daripada pembelahan nukleus (fission) dan pelakuran nukleus (fusion), pengiraan cacat jisim (Δm) menggunakan formula Einstein E = mc², serta komponen utama reaktor nuklear.",
    "notes": [
      {
        "subtopic": "6.1 Reputan Radioaktif",
        "summary": "Proses pereputan spontan dan rawak bagi nukleus yang tidak stabil untuk mencapai kestabilan dengan memancarkan sinaran radioaktif.",
        "verbatim": [
          "Jenis Sinaran Radioaktif:",
          "1. Zarah Alfa (α, ⁴₂He): Nukleus helium, bercas positif (+2e), kuasa pengionan paling tinggi, kuasa penembusan rendah (dihalang oleh sehelai kertas), terpesong lemah dalam medan elektrik.",
          "2. Zarah Beta (β, ⁰₋₁e): Elektron berkelajuan tinggi, bercas negatif (-1e), kuasa pengionan sederhana, kuasa penembusan sederhana (dihalang oleh kepingan aluminium 5 mm), terpesong kuat dalam medan elektrik ke arah plat positif.",
          "3. Sinar Gama (γ): Gelombang elektromagnet berfrekuensi tinggi, neutral (tidak bercas), kuasa pengionan paling rendah, kuasa penembusan sangat tinggi (hanya dihalang oleh blok plumbum atau konkrit tebal).",
          "Persamaan Reputan Radioaktif:",
          "- Reputan Alfa: ᴬ_Z X -> ᴬ⁻⁴_(Z-2) Y + ⁴₂He",
          "- Reputan Beta: ᴬ_Z X -> ᴬ_(Z+1) Y + ⁰₋₁e",
          "- Pelepasan Gama: ᴬ_Z X* -> ᴬ_Z X + γ (nombor jisim dan nombor proton tidak berubah).",
          "Separuh Hayat (T₁/₂): Masa yang diambil untuk separuh daripada bilangan nukleus radioaktif asal mereput, atau keaktifan sampel menjadi separuh daripada nilai asalnya:",
          "  N = N₀ × (1/2)ⁿ  di mana n = t / T₁/₂ (n = bilangan separuh hayat)."
        ],
        "explanation": "Reputan radioaktif bersifat rawak kerana tidak dapat diramalkan nukleus mana yang akan mereput pada masa tertentu, dan bersifat spontan kerana tidak dipengaruhi oleh faktor persekitaran seperti suhu atau tekanan."
      },
      {
        "subtopic": "6.2 Tenaga Nuklear",
        "summary": "Penghasilan tenaga nuklear melalui tindak balas pembelahan nukleus dan pelakuran nukleus akibat kehilangan jisim yang ditukarkan kepada tenaga mengikut persamaan E = mc².",
        "verbatim": [
          "Tindak Balas Nuklear:",
          "1. Pembelahan Nukleus (Nuclear Fission): Pembelahan satu nukleus berat (cth: Uranium-235) kepada dua atau lebih nukleus yang lebih ringan apabila dibedil oleh neutron bertenaga rendah, membebaskan 2 atau 3 neutron baharu serta tenaga nuklear yang besar.",
          "   - Tindak Balas Berantai (Chain Reaction): Neutron baharu membedil nukleus Uranium-235 yang lain, menghasilkan pembelahan berterusan. Jisim genting diperlukan.",
          "2. Pelakuran Nukleus (Nuclear Fusion): Percantuman dua nukleus ringan (cth: Deuterium ²₁H dan Tritium ³₁H) pada suhu dan tekanan sangat tinggi untuk membentuk satu nukleus yang lebih berat (⁴₂He) dan satu neutron, membebaskan kuantiti tenaga yang lebih besar daripada pembelahan nukleus (berlaku di teras Matahari).",
          "Cacat Jisim (Mass Defect, Δm): Jumlah jisim zarah sebelum tindak balas adalah lebih besar daripada jumlah jisim zarah selepas tindak balas:",
          "  Δm = Jisim sebelum - Jisim selepas",
          "Formula Kesetaraan Jisim-Tenaga Einstein: E = Δm c²",
          "  (di mana E = tenaga nuklear dlm Joule; Δm = cacat jisim dlm kg; c = halaju cahaya = 3.0 × 10⁸ m s⁻¹; 1 u.j.a. = 1.66 × 10⁻²⁷ kg).",
          "Komponen Reaktor Nuklear:",
          "- Rod Bahan Api (Uranium-235): Menjana haba daripada pembelahan nukleus.",
          "- Moderator (Grafit / Air Berat): Memperlahankan neutron pantas supaya boleh membelah nukleus seterusnya.",
          "- Rod Kawalan (Boron / Kadmium): Menyerap neutron berlebihan untuk mengawal kadar tindak balas berantai.",
          "- Agen Penyejuk (Air / Natrium Lebur): Menyerap haba terhasil dan memindahkan haba ke penukar haba untuk menghasilkan stim pemutar turbin.",
          "- Perisai Konkrit Tebal: Menghalang sinaran radioaktif gama berbahaya terlepas ke persekitaran."
        ],
        "explanation": "Pelakuran nukleus memerlukan suhu jutaan darjah Celsius untuk mengatasi daya tolakan elektrostatik yang sangat kuat antara dua nukleus positif."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "desc": "Seimbangkan nombor nukleon (atas) dan nombor proton (bawah) dalam persamaan reputan alfa dan beta."
      },
      {
        "step": "Langkah 2",
        "desc": "Gunakan konsep separuh hayat N = N0 (1/2)^n untuk mencari keaktifan atau usia sampel."
      },
      {
        "step": "Langkah 3",
        "desc": "Hitung cacat jisim Δm (dalam u.j.a. kemudian tukar kepada kg menggunakan 1 u = 1.66 × 10⁻²⁷ kg)."
      },
      {
        "step": "Langkah 4",
        "desc": "Kira tenaga nuklear E = Δm c² dan fahami peranan rod kawalan dan moderator dalam reaktor nuklear."
      }
    ],
    "keypoints": [
      "Alfa (⁴₂He) paling tumpat mengion; Gama (γ) paling kuat menembusi",
      "Persamaan reputan mesti seimbang nombor nukleon dan nombor proton",
      "Separuh hayat T₁/₂: Masa untuk keaktifan merosot menjadi separuh",
      "Pembelahan nukleus membelah atom berat; Pelakuran nukleus mencantum atom ringan",
      "Cacat jisim Δm ditukarkan kepada tenaga mengikut E = mc²",
      "Moderator memperlahankan neutron; Rod kawalan menyerap neutron"
    ],
    "questions": [
      {
        "question": "Bahan radioaktif iodin-131 mempunyai separuh hayat 8 hari. Jika sampel asal mengandungi 80 g iodin-131, berapakah jisim yang tinggal selepas 24 hari?",
        "options": [
          "40 g",
          "20 g",
          "10 g",
          "5 g"
        ],
        "answer": "10 g",
        "explanation": "Bilangan separuh hayat n = 24 hari / 8 hari = 3. Selepas n = 3: 80 g -> 40 g (8 hari) -> 20 g (16 hari) -> 10 g (24 hari)."
      },
      {
        "question": "Dalam satu tindak balas nuklear, cacat jisim yang terhasil ialah 3.0 × 10⁻²⁹ kg. Berapakah kuantiti tenaga nuklear yang dibebaskan? (c = 3.0 × 10⁸ m s⁻¹).",
        "options": [
          "2.7 × 10⁻¹² J",
          "9.0 × 10⁻²¹ J",
          "2.7 × 10⁻²⁰ J",
          "8.1 × 10⁻¹³ J"
        ],
        "answer": "2.7 × 10⁻¹² J",
        "explanation": "E = Δm c² = (3.0 × 10⁻²⁹ kg) × (3.0 × 10⁸ m s⁻¹)² = 3.0 × 10⁻²⁹ × 9.0 × 10¹⁶ = 2.7 × 10⁻¹² J."
      }
    ],
    "struktur": [
      {
        "soalan": "Nyatakan dua fungsi rod kawalan boron dan moderator grafit dalam sebuah reaktor nuklear penjana kuasa elektrik.",
        "markah": "4 Markah",
        "jawapan": "Fungsi rod kawalan boron adalah untuk menyerap neutron berlebihan dalam reaktor [1m], supaya kadar tindak balas berantai dapat dikawal pada tahap kritikal yang selamat [1m]. Fungsi moderator grafit adalah untuk memperlahankan pergerakan neutron yang bergerak pantas terhasil daripada pembelahan [1m], membolehkan neutron tersebut diserap dengan cekap oleh nukleus Uranium-235 untuk mengekalkan pembelahan seterusnya [1m].",
        "panduanKoreksi": "2m rod kawalan (serap neutron + kawal kadar tindak balas) + 2m moderator (perlahankan neutron pantas + tingkatkan kebarangkalian pembelahan)."
      }
    ]
  },
  {
    "id": "fizik5-bab7",
    "babNum": "BAB 7",
    "title": "FIZIK KUANTUM",
    "icon": "🌌",
    "anyflipPages": "Buku Teks Fizik Tingkatan 5 KSSM (Halaman 230 – 253)",
    "synopsis": "Mengkaji teori kuantum cahaya, konsep kuantum tenaga dan foton (E = hf), sifat kedualan gelombang-zarah de Broglie (λ = h/p), fenomena kesan fotoelektrik dan ciri-cirinya, Teori Fotoelektrik Einstein (hf = W + 1/2 mv²_maks), fungsi kerja logam (W = hf0), serta aplikasi fotoelektrik dalam sel suria dan fotosel.",
    "notes": [
      {
        "subtopic": "7.1 Teori Kuantum Cahaya",
        "summary": "Cahaya menunjukkan sifat berbutir yang terdiri daripada paket-paket tenaga diskret yang dinamakan foton, mencabar teori gelombang klasik Maxwell.",
        "verbatim": [
          "Sinaran Jasad Hitam: Jasad hitam unggul ialah penyerap dan pemancar sinaran elektromagnet yang sempurna. Teori klasik gagal menerangkan spektrum sinaran jasad hitam pada panjang gelombang pendek (Malapetaka Ultraungu / Ultraviolet Catastrophe).",
          "Teori Kuantum Max Planck (1900): Tenaga elektromagnet dipancarkan atau diserap dalam bentuk paket tenaga diskret yang tidak boleh dibahagikan lagi, dikenali sebagai kuantum tenaga.",
          "Formula Tenaga Kuantum / Foton: E = h f = h c / λ",
          "  (di mana h = Pemalar Planck = 6.63 × 10⁻³⁴ J s; f = frekuensi cahaya dlm Hz; c = 3.0 × 10⁸ m s⁻¹; λ = panjang gelombang dlm m).",
          "Kuasa Alur Foton (P): P = n E / t = n h f (di mana n/t ialah bilangan foton yang dipancarkan per saat).",
          "Hipotesis de Broglie (1924) & Kedualan Gelombang-Zarah:",
          "- Zarah berjisim (seperti elektron) juga boleh menunjukkan sifat gelombang:",
          "  λ = h / p = h / (m v)  (Panjang gelombang de Broglie λ).",
          "- Aplikasi: Mikroskop Elektron yang menggunakan panjang gelombang de Broglie elektron yang sangat pendek untuk mencapai kuasa pembesaran sehingga 500,000 kali ganda (jauh lebih tinggi daripada mikroskop cahaya)."
        ],
        "explanation": "Panjang gelombang de Broglie bagi objek makroskopik seperti bola sepak adalah terlalu kecil (~10⁻³⁴ m) untuk dikesan kesan pembelauannya."
      },
      {
        "subtopic": "7.2 Kesan Fotoelektrik",
        "summary": "Kesan fotoelektrik ialah pemancaran elektron (fotoelektron) dari permukaan logam apabila logam disinari oleh cahaya atau sinaran elektromagnet yang mempunyai frekuensi mencukupi.",
        "verbatim": [
          "Ciri-ciri Utama Kesan Fotoelektrik:",
          "1. Frekuensi Ambang (f₀): Pemancaran fotoelektron hanya berlaku jika frekuensi cahaya tuju f melebihi nilai minimum yang dinamakan frekuensi ambang (f ≥ f₀). Jika f < f₀, tiada fotoelektron dipancarkan walau sekuat mana pun keamatan cahaya.",
          "2. Pelepasan Serta-merta: Fotoelektron terpancar serta-merta tanpa sebarang kelengahan masa (~10⁻⁹ s) apabila disinari cahaya dengan f ≥ f₀.",
          "3. Tenaga Kinetik Maksimum Bebas daripada Keamatan Cahaya: Tenaga kinetik maksimum fotoelektron (Ek_maks) hanya bergantung kepada frekuensi cahaya f, dan tidak bergantung kepada keamatan cahaya.",
          "4. Keamatan Cahaya Mempengaruhi Arus Fotoelektrik: Peningkatan keamatan cahaya meningkatkan bilangan foton per saat, sekaligus meningkatkan bilangan fotoelektron yang terpancar per saat (arus fotoelektrik bertambah)."
        ],
        "explanation": "Fizik klasik meramalkan bahawa cahaya berkeamatan tinggi boleh mengumpul tenaga dari semasa ke semasa untuk melepaskan elektron, tetapi eksperimen membuktikan pelepasan adalah serta-merta mengikut sifat foton."
      },
      {
        "subtopic": "7.3 Teori Fotoelektrik Einstein",
        "summary": "Albert Einstein menjelaskan kesan fotoelektrik menggunakan konsep foton Planck, di mana satu foton memindahkan seluruh tenaganya kepada satu elektron mengikut prinsip keabadian tenaga.",
        "verbatim": [
          "Persamaan Fotoelektrik Einstein: Tenaga foton tuju = Fungsi kerja logam + Tenaga kinetik maksimum fotoelektron",
          "  h f = W + E_k_maks  =>  h f = h f₀ + 1/2 m v²_maks",
          "  (di mana W = h f₀ = Fungsi Kerja logam, iaitu tenaga minimum yang diperlukan untuk melepaskan elektron dari permukaan logam).",
          "Panjang Gelombang Ambang (λ₀): λ₀ = c / f₀ => W = h c / λ₀.",
          "Graf Tenaga Kinetik Maksimum (Ek_maks) Melawan Frekuensi Cahaya (f):",
          "- Graf berbentuk garis lurus dengan persamaan: E_k_maks = h f - W",
          "- Kecerunan graf mewakili nilai Pemalar Planck (h).",
          "- Pintasan paksi mendatar (f) mewakili Frekuensi Ambang (f₀).",
          "- Pintasan paksi menegak (tenaga) mewakili magnitud Fungsi Kerja (-W).",
          "Aplikasi Kesan Fotoelektrik:",
          "1. Sel Suria (Fotovoltik): Menukarkan tenaga cahaya matahari kepada tenaga elektrik secara langsung.",
          "2. Fotosel Pengesan Cahaya: Digunakan pada pintu gelangsar automatik pasar raya, penggera keselamatan anti-penceroboh, dan lampu jalan automatik.",
          "3. Pengesan Pengimbas Kod Bar: Menggunakan pantulan cahaya pada fotosel untuk membaca data barangan."
        ],
        "explanation": "Satu elektron hanya boleh menyerap tenaga daripada satu foton tunggal (interaksi satu-dengan-satu)."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "desc": "Kira tenaga foton menggunakan formula E = hf = hc/λ dan panjang gelombang de Broglie λ = h/(mv)."
      },
      {
        "step": "Langkah 2",
        "desc": "Fahami 4 ciri eksperimen kesan fotoelektrik (f ambang, serta-merta, Ek bergantung f, arus bergantung keamatan)."
      },
      {
        "step": "Langkah 3",
        "desc": "Selesaikan masalah menggunakan Persamaan Einstein hf = W + 1/2 mv²_maks."
      },
      {
        "step": "Langkah 4",
        "desc": "Kuasai tafsiran graf Ek_maks lawan f (kecerunan = h, pintasan paksi-x = f0, pintasan paksi-y = -W)."
      }
    ],
    "keypoints": [
      "Kuantum tenaga foton: E = hf = hc/λ (h = 6.63 × 10⁻³⁴ J s)",
      "Panjang gelombang de Broglie: λ = h / p = h / (mv)",
      "Kesan fotoelektrik: Pembebasan elektron apabila f ≥ f0",
      "Persamaan Fotoelektrik Einstein: hf = W + Ek_maks = hf0 + 1/2 mv²_maks",
      "Fungsi kerja logam: W = hf0 (tenaga minimum pelepasan elektron)",
      "Kecerunan graf Ek_maks lawan f sentiasa bersamaan Pemalar Planck (h)"
    ],
    "questions": [
      {
        "question": "Cahaya monokromatik dengan panjang gelombang 500 nm disinarkan ke atas permukaan logam. Berapakah tenaga satu foton cahaya tersebut? (h = 6.63 × 10⁻³⁴ J s, c = 3.0 × 10⁸ m s⁻¹).",
        "options": [
          "1.98 × 10⁻¹⁹ J",
          "3.98 × 10⁻¹⁹ J",
          "5.21 × 10⁻¹⁹ J",
          "6.63 × 10⁻¹⁹ J"
        ],
        "answer": "3.98 × 10⁻¹⁹ J",
        "explanation": "E = h c / λ = (6.63 × 10⁻³⁴ × 3.0 × 10⁸) / (500 × 10⁻⁹) = 1.989 × 10⁻²⁵ / 5.0 × 10⁻⁷ = 3.978 × 10⁻¹⁹ J ≈ 3.98 × 10⁻¹⁹ J."
      },
      {
        "question": "Fungsi kerja bagi logam natrium ialah 3.6 × 10⁻¹⁹ J. Berapakah frekuensi ambang f₀ bagi logam natrium tersebut? (h = 6.63 × 10⁻³⁴ J s).",
        "options": [
          "2.4 × 10¹⁴ Hz",
          "5.43 × 10¹⁴ Hz",
          "7.82 × 10¹⁴ Hz",
          "1.12 × 10¹⁵ Hz"
        ],
        "answer": "5.43 × 10¹⁴ Hz",
        "explanation": "W = h f₀ => f₀ = W / h = (3.6 × 10⁻¹⁹ J) / (6.63 × 10⁻³⁴ J s) = 5.43 × 10¹⁴ Hz."
      }
    ],
    "struktur": [
      {
        "soalan": "Nyatakan maksud fungsi kerja logam dan terangkan mengapa pertambahan keamatan cahaya tidak meningkatkan tenaga kinetik maksimum fotoelektron terpancar.",
        "markah": "3 Markah",
        "jawapan": "Fungsi kerja logam ialah tenaga minimum yang diperlukan oleh sebutir elektron untuk terlepas dari permukaan logam tersebut [1m]. Menurut teori foton Einstein, pemindahan tenaga berlaku secara satu-dengan-satu antara satu foton dengan satu elektron [1m]. Pertambahan keamatan cahaya hanya menambah bilangan foton sesaat (menghasilkan lebih banyak fotoelektron), tetapi tenaga setiap foton E = hf kekal sama, maka tenaga kinetik maksimum fotoelektron tidak berubah [1m].",
        "panduanKoreksi": "1m takrif fungsi kerja + 1m interaksi 1 foton - 1 elektron + 1m keamatan hanya tambah bilangan foton bukan tenaga foton."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FIZIK_T5_DATA;
}
