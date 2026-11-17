/* ==========================================================================
   DATA-KIMIA-T5.JS — 100% BAHAN LENGKAP BUKU TEKS KIMIA KSSM TINGKATAN 5
   Sumber Rasmi: https://online.anyflip.com/wsjst/issq/mobile/index.html
   Semua 5 Bab & 22 Subtopik Rasmi KSSM Lengkap Tanpa Sebarang Tertinggal
   ========================================================================== */

const KIMIA_T5_DATA = [
  {
    "id": "kimia5-bab1",
    "babNum": "BAB 1",
    "title": "KESEIMBANGAN REDOKS",
    "icon": "⚡",
    "anyflipPages": "Buku Teks Kimia Tingkatan 5 KSSM (Halaman 2 – 57)",
    "synopsis": "Mengkaji konsep tindak balas redoks dari segi pemindahan oksigen, hidrogen, elektron dan perubahan nombor pengoksidaan, siri keupayaan elektrod piawai (E°), sel kimia voltan dan sel elektrolisis, pengekstrakan besi dan aluminium, serta mekanisme elektrokimia pengaratan besi dan kaedah pencegahannya.",
    "notes": [
      {
        "subtopic": "1.1 Pengoksidaan dan Penurunan",
        "summary": "Tindak balas redoks ialah tindak balas kimia di mana proses pengoksidaan dan proses penurunan berlaku secara serentak.",
        "verbatim": [
          "Empat Definisi Redoks:",
          "1. Dari segi Oksigen: Pengoksidaan ialah penerimaan oksigen; Penurunan ialah kehilangan oksigen.",
          "2. Dari segi Hidrogen: Pengoksidaan ialah kehilangan hidrogen; Penurunan ialah penerimaan hidrogen.",
          "3. Dari segi Elektron (OIL RIG): Pengoksidaan ialah kehilangan elektron (Oxidation Is Loss); Penurunan ialah penerimaan elektron (Reduction Is Gain).",
          "4. Dari segi Nombor Pengoksidaan: Pengoksidaan ialah penambahan nombor pengoksidaan; Penurunan ialah pengurangan nombor pengoksidaan.",
          "Agen Pengoksidaan vs Agen Penurunan: Agen pengoksidaan ialah bahan yang mengoksidakan bahan lain dan mengalami penurunan (cth: air klorin Cl₂, air bromin Br₂, KMnO₄ berasid, K₂Cr₂O₇ berasid); Agen penurunan ialah bahan yang menurunkan bahan lain dan mengalami pengoksidaan (cth: larutan FeSO₄, KI, SO₂).",
          "Tindak Balas Sesaran Logam dan Halogen: Logam yang lebih elektropositif menyesarkan logam kurang elektropositif daripada larutan garamnya; Halogen yang lebih reaktif menyesarkan halida kurang reaktif."
        ],
        "explanation": "Setengah persamaan pengoksidaan menunjukkan elektron di sebelah produk (kanan), manakala setengah persamaan penurunan menunjukkan elektron di sebelah bahan tindak balas (kiri)."
      },
      {
        "subtopic": "1.2 Keupayaan Elektrod Piawai",
        "summary": "Keupayaan Elektrod Piawai (E°) mengukur kecenderungan sesuatu spesies kimia untuk menerima elektron (mengalami penurunan) pada keadaan piawai (25 °C, 1 atm, 1.0 mol dm⁻³).",
        "verbatim": [
          "Elektrod Hidrogen Piawai (SHE): Dijadikan elektrod rujukan dengan nilai potensi E° ditetapkan tepat 0.00 V (2H⁺ + 2e⁻ ⇌ H₂).",
          "Nilai E° Lebih Positif (+): Menunjukkan kecenderungan yang lebih tinggi untuk menerima elektron; Merupakan agen pengoksidaan yang kuat; Lebih mudah mengalami penurunan di katod (cth: F₂ mempunyai E° paling positif = +2.87 V).",
          "Nilai E° Lebih Negatif (-): Menunjukkan kecenderungan yang lebih tinggi untuk menderma elektron; Merupakan agen penurunan yang kuat; Lebih mudah mengalami pengoksidaan di anod (cth: Li⁺ mempunyai E° paling negatif = -3.04 V).",
          "Menentukan Voltan Sel Piawai (E°_sel): E°_sel = E°_katod - E°_anod. Jika E°_sel bernilai positif, tindak balas adalah spontan."
        ],
        "explanation": "Nilai E° membolehkan ahli kimia meramalkan sama ada sesuatu tindak balas redoks boleh berlaku secara spontan atau sebaliknya."
      },
      {
        "subtopic": "1.3 Sel Kimia",
        "summary": "Sel elektrokimia (sel Daniell) yang menukarkan tenaga kimia kepada tenaga elektrik secara spontan berasaskan perbezaan nilai E° elektrod.",
        "verbatim": [
          "Sel Daniell: Menggunakan elektrod zink (Zn/Zn²⁺, E° = -0.76 V) dan kuprum (Cu/Cu²⁺, E° = +0.34 V) yang disambungkan dengan wayar luar dan jambatan garam (larutan KNO₃ pekat).",
          "- Anod (Terminal Negatif): Logam Zn dengan E° lebih negatif menderma elektron: Zn(p) -> Zn²⁺(ak) + 2e⁻ (Pengoksidaan). Elektrod Zn menipis.",
          "- Katod (Terminal Positif): Ion Cu²⁺ dengan E° lebih positif menerima elektron: Cu²⁺(ak) + 2e⁻ -> Cu(p) (Penurunan). Enapan perang kuprum terbentuk di katod.",
          "- Notasi Sel (Cell Notation): Zn(p) | Zn²⁺(ak, 1.0 M) || Cu²⁺(ak, 1.0 M) | Cu(p).",
          "- Voltan Sel Daniell: E°_sel = E°_katod - E°_anod = (+0.34) - (-0.76) = +1.10 V.",
          "Fungsi Jambatan Garam: Melengkapkan litar elektrik dan membenarkan ion mengalir untuk mengekalkan peneutralan cas elektrik dalam kedua-dua setengah sel."
        ],
        "explanation": "Aliran elektron sentiasa bergerak dari terminal negatif (anod) ke terminal positif (katod) melalui wayar penyambung luar."
      },
      {
        "subtopic": "1.4 Sel Elektrolisis",
        "summary": "Pengaliran arus elektrik merentasi elektrolit lebur atau akueus untuk menghasilkan perubahan kimia tidak spontan di anod dan katod.",
        "verbatim": [
          "Elektrolisis Sebatian Lebur: Hanya ada satu kation dan satu anion (cth: leburan plumbum(II) bromida PbBr₂; Pb²⁺ dinyahcas di katod membentuk enapan kelabu Pb; Br⁻ dinyahcas di anod membentuk gas bromin perang).",
          "Elektrolisis Larutan Akueus: Mengandungi ion daripada bahan larut dan ion H⁺ serta OH⁻ daripada penceraian air.",
          "Faktor Pemilihan Nyahcas Ion di Elektrod:",
          "1. Nilai E° ion: Di katod, kation dengan nilai E° lebih positif dipilih dinyahcas; Di anod, anion dengan nilai E° kurang positif dipilih dinyahcas;",
          "2. Kepekatan Ion: Jika larutan mengandungi ion halida pekat (Cl⁻, Br⁻, I⁻), ion halida dipilih dinyahcas di anod mengatasi ion OH⁻;",
          "3. Jenis Elektrod: Penggunaan elektrod aktif (seperti kuprum) dalam larutan CuSO₄ menyebabkan anod kuprum melarut (Cu -> Cu²⁺ + 2e⁻).",
          "Aplikasi Elektrolisis: Penyaduran logam, penulenan logam, dan pengekstrakan aluminium."
        ],
        "explanation": "Gas oksigen terhasil di anod apabila ion OH⁻ dinyahcas (4OH⁻ -> O₂ + 2H₂O + 4e⁻), manakala gas hidrogen terhasil di katod apabila ion H⁺ dinyahcas (2H⁺ + 2e⁻ -> H₂)."
      },
      {
        "subtopic": "1.5 Pengekstrakan Logam daripada Bijihnya",
        "summary": "Proses redoks pengekstrakan besi dalam Relau Bagas menggunakan karbon (kok) dan pengekstrakan aluminium daripada bauksit melalui elektrolisis leburan kriolit.",
        "verbatim": [
          "Pengekstrakan Besi dalam Relau Bagas:",
          "- Bahan dimasukkan dari atas: Bijih besi (hematit Fe₂O₃), arang kok (C), dan batu kapur (CaCO₃). Udara panas ditiup dari bawah.",
          "- Penghasilan Agen Penurunan: C + O₂ -> CO₂; CO₂ + C -> 2CO (gas karbon monoksida).",
          "- Penurunan Besi: Fe₂O₃ + 3CO -> 2Fe + 3CO₂. Leburan besi lebur yang tumpat terkumpul di dasar relau.",
          "- Penyingkiran Bendasing Silika: CaCO₃ terurai kepada CaO + CO₂; CaO (bes) bertindak balas dengan pasir silika SiO₂ (asid) membentuk sanga kalsium silikat CaSiO₃ yang terapung di atas leburan besi.",
          "Pengekstrakan Aluminium daripada Bauksit (Al₂O₃): Aluminium berada lebih tinggi daripada karbon dalam Siri Kereaktifan Logam, maka diekstrak melalui elektrolisis leburan Al₂O₃ yang dilarutkan dalam leburan kriolit (Na₃AlF₆) untuk merendahkan takat lebur daripada 2000 °C kepada 950 °C."
        ],
        "explanation": "Kriolit bertindak sebagai pelarut yang menjimatkan tenaga elektrik industri pengekstrakan aluminium secara drastik."
      },
      {
        "subtopic": "1.6 Pengaratan",
        "summary": "Mekanisme kakisan elektrokimia besi apabila bersentuhan dengan air dan oksigen, faktor mempercepatkan pengaratan, serta kaedah perlindungan anod korban.",
        "verbatim": [
          "Mekanisme Pengaratan Besi (Proses Elektrokimia):",
          "- Bahagian tengah titisan air (kepekatan O₂ rendah) bertindak sebagai Anod: Fe(p) -> Fe²⁺(ak) + 2e⁻ (Pengoksidaan);",
          "- Elektron mengalir melalui logam besi ke tepi titisan air (kepekatan O₂ tinggi) bertindak sebagai Katod: O₂ + 2H₂O + 4e⁻ -> 4OH⁻ (Penurunan);",
          "- Ion Fe²⁺ bergabung dengan ion OH⁻ membentuk ferum(II) hidroksida, Fe(OH)₂, yang dioksidakan lanjut oleh oksigen membentuk karat perang ferum(III) oksida terhidrat, Fe₂O₃·xH₂O.",
          "Faktor Mempercepatkan Pengaratan: Kehadiran asid (hujan asid) dan garam (air laut/elektrolit).",
          "Kaedah Pencegahan Pengaratan:",
          "1. Perlindungan Lapisan Fizikal: Mengecat, menyapu minyak/gris, menyalut plastik;",
          "2. Perlindungan Korban (Sacrificial Protection): Melekatkan logam yang lebih elektropositif (seperti zink atau magnesium) pada besi (cth: blok zink pada badan kapal laut, paip besi bawah tanah);",
          "3. Penyaduran Logam: Penyaduran timah pada tin makanan (tin plating) atau penggalvanian dengan zink (galvanization)."
        ],
        "explanation": "Zink melindungi besi melalui dua cara: membentuk lapisan pelindung zink oksida yang tidak telap, dan jika tercalar, zink bertindak sebagai anod korban yang terkakis menggantikan besi."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "desc": "Tentukan proses pengoksidaan dan penurunan mengikut 4 kaedah (Oksigen, Hidrogen, Elektron, No. Pengoksidaan)."
      },
      {
        "step": "Langkah 2",
        "desc": "Gunakan data Keupayaan Elektrod Piawai E° untuk mengira E°_sel = E°_katod - E°_anod."
      },
      {
        "step": "Langkah 3",
        "desc": "Fahami operasi Sel Daniell (notasi sel) dan 3 faktor pemilihan nyahcas ion sel elektrolisis."
      },
      {
        "step": "Langkah 4",
        "desc": "Kuasai tindak balas relau bagas besi dan mekanisme elektrokimia pengaratan besi."
      }
    ],
    "keypoints": [
      "OIL RIG: Oxidation Is Loss of electrons, Reduction Is Gain of electrons",
      "E° lebih positif = Agen pengoksidaan kuat (mudah terima e⁻ di katod)",
      "E° lebih negatif = Agen penurunan kuat (mudah derma e⁻ di anod)",
      "E°_sel = E°_katod - E°_anod (E°_sel positif = tindak balas spontan)",
      "Kriolit (Na₃AlF₆) merendahkan takat lebur bauksit dalam pengekstrakan aluminium",
      "Pengaratan besi ialah proses elektrokimia membentuk Fe₂O₃·xH₂O"
    ],
    "questions": [
      {
        "question": "Diberi nilai keupayaan elektrod piawai: Zn²⁺/Zn (E° = -0.76 V) dan Ag⁺/Ag (E° = +0.80 V). Berapakah voltan sel piawai E°_sel bagi sel kimia tersebut?",
        "options": [
          "+0.04 V",
          "+1.56 V",
          "-1.56 V",
          "+0.76 V"
        ],
        "answer": "+1.56 V",
        "explanation": "E°_sel = E°_katod - E°_anod = (+0.80 V) - (-0.76 V) = +1.56 V."
      },
      {
        "question": "Apakah fungsi gas karbon monoksida (CO) dalam proses pengekstrakan besi di dalam Relau Bagas?",
        "options": [
          "Bertindak sebagai agen penurunan yang menurunkan hematit Fe₂O₃ kepada besi",
          "Bertindak sebagai agen pengoksidaan kepada sanga",
          "Menurunkan takat lebur besi lebur",
          "Menghasilkan nyalaan api hijau"
        ],
        "answer": "Bertindak sebagai agen penurunan yang menurunkan hematit Fe₂O₃ kepada besi",
        "explanation": "Gas karbon monoksida (CO) merupakan agen penurunan utama yang menurunkan bijih besi ferum(III) oksida Fe₂O₃ kepada leburan besi mengikut persamaan: Fe₂O₃ + 3CO -> 2Fe + 3CO₂."
      }
    ],
    "struktur": [
      {
        "soalan": "Huraikan mekanisme elektrokimia pengaratan besi apabila titisan air terbentuk pada paku besi.",
        "markah": "4 Markah",
        "jawapan": "Bahagian tengah titisan air yang mempunyai kepekatan oksigen rendah bertindak sebagai anod di mana besi dioksidakan menderma elektron: Fe -> Fe²⁺ + 2e⁻ [2m]. Elektron mengalir ke tepi titisan air yang kaya oksigen bertindak sebagai katod di mana oksigen diturunkan: O₂ + 2H₂O + 4e⁻ -> 4OH⁻ [1m]. Ion Fe²⁺ dan OH⁻ bergabung membentuk ferum(II) hidroksida yang dioksidakan lanjut oleh oksigen membentuk karat perang Fe₂O₃·xH₂O [1m].",
        "panduanKoreksi": "2m anod Fe -> Fe²⁺ + 1m katod penurunan O₂ + 1m pembentukan karat Fe₂O₃."
      }
    ]
  },
  {
    "id": "kimia5-bab2",
    "babNum": "BAB 2",
    "title": "SEBATIAN KARBON",
    "icon": "🔬",
    "anyflipPages": "Buku Teks Kimia Tingkatan 5 KSSM (Halaman 58 – 111)",
    "synopsis": "Mengkaji siri homolog organik (alkana, alkena, alkuna, alkohol, asid karboksilik, ester), formula am, kumpulan berfungsi, sifat kimia dan saling pertukaran antara siri homolog, serta pembinaan isomer dan sistem penamaan IUPAC.",
    "notes": [
      {
        "subtopic": "2.1 Jenis-jenis Sebatian Karbon",
        "summary": "Sebatian karbon dikelaskan kepada sebatian organik (daripada benda hidup) dan sebatian bukan organik, serta hidrokarbon tepu dan tak tepu.",
        "verbatim": [
          "Hidrokarbon: Sebatian organik yang mengandungi karbon dan hidrogen sahaja.",
          "Hidrokarbon Tepu: Mengandungi hanya ikatan kovalen tunggal C-C (cth: alkana).",
          "Hidrokarbon Tak Tepu: Mengandungi sekurang-kurangnya satu ikatan ganda dua C=C (alkena) atau ikatan ganda tiga C≡C (alkuna).",
          "Sumber Utama Hidrokarbon: Petroleum dan gas asli yang terhasil daripada pereputan sisa fosil hidupan purba berjuta-juta tahun dahulu di bawah suhu dan tekanan tinggi."
        ],
        "explanation": "Penyulingan berperingkat petroleum mengasingkan hidrokarbon mengikut takat didih yang bergantung kepada saiz molekul."
      },
      {
        "subtopic": "2.2 Siri Homolog",
        "summary": "Keluarga sebatian organik yang mempunyai formula am yang sama, kumpulan berfungsi yang sama, sifat kimia serupa dan menunjukkan perubahan sifat fizikal secara beransur-ansur.",
        "verbatim": [
          "Ciri Siri Homolog: Setiap ahli berbeza dengan ahli sebelumnya sebanyak satu kumpulan metilena (-CH₂-), mempunyai jisim molekul relatif bertambah sebanyak 14 unit, dan boleh disediakan melalui kaedah umum yang sama.",
          "Enam Siri Homolog Utama:",
          "1. Alkana: Formula am C_nH_(2n+2), tiada kumpulan berfungsi (hanya ikatan tunggal C-C);",
          "2. Alkena: Formula am C_nH_(2n), kumpulan berfungsi ikatan ganda dua karbon-karbon (C=C);",
          "3. Alkuna: Formula am C_nH_(2n-2), kumpulan berfungsi ikatan ganda tiga karbon-karbon (C≡C);",
          "4. Alkohol: Formula am C_nH_(2n+1)OH, kumpulan berfungsi hidroksil (-OH);",
          "5. Asid Karboksilik: Formula am C_nH_(2n+1)COOH, kumpulan berfungsi karboksil (-COOH);",
          "6. Ester: Formula am C_nH_(2n+1)COOC_mH_(2m+1), kumpulan berfungsi karboksilat (-COO-)."
        ],
        "explanation": "Kumpulan berfungsi merupakan bahagian molekul yang paling reaktif dan menentukan sifat kimia bagi siri homolog tersebut."
      },
      {
        "subtopic": "2.3 Sifat Kimia dan Saling Pertukaran Sebatian antara Siri Homolog",
        "summary": "Tindak balas penukargantian alkana, tindak balas penambahan alkena, pengoksidaan alkohol, penghidratan alkena, penyahhidratan alkohol, dan pengesteran.",
        "verbatim": [
          "Tindak Balas Alkana: Pembakaran lengkap (hasilkan CO₂ + H₂O); Penukargantian dengan halogen dengan kehadiran sinaran UV (cth: CH₄ + Cl₂ -> CH₃Cl + HCl).",
          "Tindak Balas Penambahan Alkena: (1) Penghidrogenan (tambah H₂ guna mangkin nikel pada 180 °C tukar alkena ke alkana); (2) Penghidratan (tambah H₂O stim guna mangkin H₃PO₄ pada 300 °C tukar alkena ke alkohol); (3) Halogenasi (melunturkan warna perang air bromin tanpa cahaya); (4) Pempolimeran penambahan.",
          "Sifat Kimia Alkohol: (1) Pembakaran (nyalaan biru bersih tanpa jelaga); (2) Pengoksidaan dengan agen pengoksidaan (KMnO₄ berasid tukar alkohol primer kepada asid karboksilik: C₂H₅OH + 2[O] -> CH₃COOH + H₂O); (3) Penyahhidratan (singkirkan H₂O guna serpihan porselin panas menghasilkan alkena).",
          "Tindak Balas Pengesteran: Asid Karboksilik bertindak balas dengan Alkohol dengan kehadiran asid sulfurik pekat (mangkin) menghasilkan Ester dan Air: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ (etil etanoat) + H₂O. Ester mempunyai bau wangi buah-buahan manis."
        ],
        "explanation": "Penyahhidratan alkohol menukarkan alkohol kembali kepada alkena, membuktikan konsep saling pertukaran kimia organik."
      },
      {
        "subtopic": "2.4 Isomer dan Penamaan Mengikut IUPAC",
        "summary": "Fenomena keisomeran struktur (isomer rantai dan isomer kedudukan) serta peraturan penamaan sistematik sebatian organik mengikut piawaian IUPAC.",
        "verbatim": [
          "Maksud Isomer: Sebatian organik yang mempunyai formula molekul yang sama tetapi formula struktur yang berbeza.",
          "Jenis Isomer Struktur: (1) Isomer Rantai (perbezaan susunan rantai karbon lurus atau bercabang cth butana dan 2-metilpropana); (2) Isomer Kedudukan (perbezaan kedudukan kumpulan berfungsi pada rantai karbon cth propan-1-ol dan propan-2-ol, but-1-ena dan but-2-ena).",
          "Langkah Penamaan IUPAC:",
          "1. Kenal pasti rantai karbon terpanjang yang mengandungi kumpulan berfungsi;",
          "2. Nombor rantai karbon bermula dari hujung paling hampir dengan kumpulan berfungsi atau cabang;",
          "3. Namakan kumpulan cabang alkil (metil, etil) berserta nombor kedudukan karbon;",
          "4. Gabungkan nama cabang dan rantai induk secara berabjad (cth: 2-metilbutana, 3-kloropent-1-ena)."
        ],
        "explanation": "Semakin banyak bilangan atom karbon dalam molekul organik, semakin banyak bilangan isomer struktur yang mungkin wujud."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "desc": "Hafal formula am dan kumpulan berfungsi bagi 6 siri homolog organik."
      },
      {
        "step": "Langkah 2",
        "desc": "Kuasai tindak balas penambahan alkena (lunturkan air bromin dan KMnO₄ berasid)."
      },
      {
        "step": "Langkah 3",
        "desc": "Hafal tindak balas pengesteran (Asid karboksilik + Alkohol ⇌ Ester + H₂O dengan H₂SO₄ pekat)."
      },
      {
        "step": "Langkah 4",
        "desc": "Lukis dan namakan semua isomer bagi alkana, alkena dan alkohol mengikut sistem IUPAC."
      }
    ],
    "keypoints": [
      "Alkana: C_nH_(2n+2) (tiada kumpulan berfungsi); Alkena: C_nH_(2n) (C=C)",
      "Alkohol: -OH (kumpulan hidroksil); Asid Karboksilik: -COOH (karboksil); Ester: -COO-",
      "Alkena melunturkan warna perang air bromin secara tindak balas penambahan",
      "Pengoksidaan etanol oleh KMnO₄ berasid menghasilkan asid etanoik",
      "Pengesteran menghasilkan ester berbau wangi buah-buahan",
      "Isomer = Formula molekul sama, formula struktur berbeza"
    ],
    "questions": [
      {
        "question": "Ujian kimia manakah yang boleh digunakan untuk membezakan antara heksana (alkana) dengan heksena (alkena)?",
        "options": [
          "Menambahkan air kapur",
          "Menitiskan air bromin ke dalam sampel dalam keadaan gelap",
          "Menguji dengan kertas litmus merah lembap",
          "Menambahkan serbuk kalsium karbonat"
        ],
        "answer": "Menitiskan air bromin ke dalam sampel dalam keadaan gelap",
        "explanation": "Heksena (alkena) mengalami tindak balas penambahan dan melunturkan warna perang air bromin serta-merta tanpa cahaya, manakala heksana (alkana) tidak bertindak balas."
      },
      {
        "question": "Apakah nama ester yang terhasil daripada tindak balas antara asid propanoik dan etanol dengan kehadiran asid sulfurik pekat?",
        "options": [
          "Propil etanoat",
          "Etil propanoat",
          "Metil etanoat",
          "Etil butanoat"
        ],
        "answer": "Etil propanoat",
        "explanation": "Ester dinamakan bermula daripada alkohol (etanol -> etil) diikuti asid karboksilik (asid propanoik -> propanoat), menghasilkan etil propanoat."
      }
    ],
    "struktur": [
      {
        "soalan": "Tuliskan persamaan kimia bagi tindak balas pengesteran antara asid etanoik dan metanol dengan kehadiran mangkin asid sulfurik pekat. Nyatakan satu ciri fizikal ester yang terhasil.",
        "markah": "3 Markah",
        "jawapan": "Persamaan kimia: CH₃COOH + CH₃OH ⇌ CH₃COOCH₃ + H₂O [2m]. Ciri fizikal ester: Mempunyai bau manis wangi seperti buah-buahan / cecair tidak berwarna yang kurang tumpat daripada air [1m].",
        "panduanKoreksi": "2m persamaan kimia seimbang + 1m bau wangi buah-buahan/kurang tumpat."
      }
    ]
  },
  {
    "id": "kimia5-bab3",
    "babNum": "BAB 3",
    "title": "TERMOKIMIA",
    "icon": "🌡️",
    "anyflipPages": "Buku Teks Kimia Tingkatan 5 KSSM (Halaman 112 – 141)",
    "synopsis": "Mengkaji perubahan haba dalam tindak balas kimia (eksotermik dan endotermik), rajah profil tenaga, takrifan dan pengiraan empat jenis haba tindak balas (Haba Pemendakan, Haba Penyesaran, Haba Peneutralan, Haba Pembakaran), serta aplikasi pek sejuk dan pek panas.",
    "notes": [
      {
        "subtopic": "3.1 Perubahan Haba dalam Tindak Balas",
        "summary": "Tindak balas kimia melibatkan perubahan tenaga haba yang dikelaskan kepada tindak balas eksotermik (membebaskan haba) dan endotermik (menyerap haba).",
        "verbatim": [
          "Tindak Balas Eksotermik: Tindak balas kimia yang membebaskan haba ke persekitaran; Suhu persekitaran meningkat; Nilai perubahan entalpi ΔH bernilai NEGATIF (-); Jumlah kandungan tenaga bahan tindak balas lebih tinggi daripada hasil tindak balas; Tenaga yang dibebaskan semasa pembentukan ikatan lebih besar daripada tenaga yang diserap untuk pemecahan ikatan (cth: pembakaran, peneutralan asid-bes, tindak balas logam reaktif dengan air).",
          "Tindak Balas Endotermik: Tindak balas kimia yang menyerap haba dari persekitaran; Suhu persekitaran menurun; Nilai perubahan entalpi ΔH bernilai POSITIF (+); Jumlah kandungan tenaga bahan tindak balas lebih rendah daripada hasil tindak balas; Tenaga diserap untuk pemecahan ikatan melebihi tenaga dibebaskan semasa pembentukan ikatan (cth: penguraian terma kalsium karbonat, fotosintesis, melarutkan garam ammonium klorida dalam air).",
          "Rajah Profil Tenaga: Menunjukkan aras tenaga bahan, tenaga pengaktifan (Ea), dan perubahan entalpi ΔH."
        ],
        "explanation": "Prinsip pemecahan dan pembentukan ikatan: Pemecahan ikatan menyerap tenaga (Endotermik), pembentukan ikatan membebaskan tenaga (Eksotermik)."
      },
      {
        "subtopic": "3.2 Haba Tindak Balas",
        "summary": "Pengiraan kuantiti haba Q = mcθ dan penentuan empat haba tindak balas piawai (ΔH = ± Q / n) per mol bahan bertindak balas.",
        "verbatim": [
          "Formula Asas Pengiraan Haba: Q = m c Δθ (m = jisim larutan dalam gram / cm³, c = muatan haba tentu larutan ≈ 4.2 J g⁻¹ °C⁻¹, Δθ = perubahan suhu).",
          "Formula Haba Tindak Balas (ΔH): ΔH = ± Q / n (unit kJ mol⁻¹; n = bilangan mol ion/bahan bertindak balas = MV / 1000).",
          "Empat Jenis Haba Tindak Balas:",
          "1. Haba Pemendakan: Perubahan haba apabila 1 mol mendakan terbentuk daripada ion-ionnya dalam larutan akueus (cth: Ag⁺ + Cl⁻ -> AgCl);",
          "2. Haba Penyesaran: Perubahan haba apabila 1 mol logam disesarkan daripada larutan garamnya oleh logam yang lebih elektropositif (cth: Zn + Cu²⁺ -> Zn²⁺ + Cu);",
          "3. Haba Peneutralan: Perubahan haba apabila 1 mol air terbentuk daripada tindak balas peneutralan antara asid dan alkali (H⁺ + OH⁻ -> H₂O). Peneutralan asid kuat dan alkali kuat sentiasa mempunyai nilai malar ΔH ≈ -57 kJ mol⁻¹. Bagi asid lemah (cth CH₃COOH), nilai ΔH lebih rendah daripada -57 kJ mol⁻¹ kerana sebahagian haba diserap untuk mengionkan asid lemah secara lengkap dalam air.",
          "4. Haba Pembakaran: Haba yang dibebaskan apabila 1 mol bahan terbakar dengan lengkap dalam oksigen berlebihan (cth: pembakaran alkohol menghasilkan CO₂ dan H₂O)."
        ],
        "explanation": "Semakin bertambah bilangan atom karbon per molekul alkohol, semakin tinggi nilai haba pembakarannya kerana lebih banyak ikatan C-C dan C-H dibakar."
      },
      {
        "subtopic": "3.3 Aplikasi Tindak Balas Eksotermik dan Endotermik dalam Kehidupan Harian",
        "summary": "Aplikasi pek panas segera dan pek sejuk segera dalam rawatan kecederaan sukan dan pemanasan makanan kendiri.",
        "verbatim": [
          "Pek Panas Segera: Menggunakan tindak balas eksotermik untuk membebaskan haba; Mengandungi air dan kalsium klorida kontang (CaCl₂) atau magnesium sulfat (MgSO₄); Apabila beg dipecahkan, pelarutan garam membebaskan haba; Digunakan untuk melegakan kekejangan otot, mengurangkan kesakitan dan memanaskan makanan tentera dalam pek MRE (Meal Ready-to-Eat).",
          "Pek Sejuk Segera: Menggunakan tindak balas endotermik untuk menyerap haba dari persekitaran; Mengandungi air dan garam ammonium nitrat (NH₄NO₃); Apabila beg dipecahkan, pelarutan garam menyerap haba menyebabkan suhu menurun pantas; Digunakan untuk merawat kecederaan sukan, mengurangkan bengkak dan menurunkan suhu demam panas."
        ],
        "explanation": "Pek sejuk segera bertindak pantas mengecutkan salur darah kapilari yang pecah di kawasan kecederaan sukan untuk mengurangkan lebam."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "desc": "Bezakan tindak balas eksotermik (suhu naik, ΔH negatif) vs endotermik (suhu turun, ΔH positif)."
      },
      {
        "step": "Langkah 2",
        "desc": "Lukis dan label rajah profil tenaga berserta tenaga pengaktifan Ea dan ΔH."
      },
      {
        "step": "Langkah 3",
        "desc": "Kira haba dibebaskan Q = mcθ dan bilangan mol n = MV/1000 untuk mencari ΔH = -Q/n."
      },
      {
        "step": "Langkah 4",
        "desc": "Terangkan perbezaan haba peneutralan asid kuat vs asid lemah dan fungsi pek panas/sejuk."
      }
    ],
    "keypoints": [
      "Eksotermik: Bebaskan haba, suhu naik, ΔH negatif (-)",
      "Endotermik: Serap haba, suhu turun, ΔH positif (+)",
      "Formula Haba: Q = mcθ; Haba Tindak Balas ΔH = ± Q / n",
      "Peneutralan asid kuat + alkali kuat malar pada ΔH ≈ -57 kJ mol⁻¹",
      "Peneutralan asid lemah bernilai < 57 kJ mol⁻¹ (haba diserap untuk pengionan lengkap)",
      "Pek Panas guna CaCl₂ (eksotermik); Pek Sejuk guna NH₄NO₃ (endotermik)"
    ],
    "questions": [
      {
        "question": "Mengapakah haba peneutralan antara asid etanoik (asid lemah) dan larutan natrium hidroksida (alkali kuat) adalah kurang daripada -57 kJ mol⁻¹?",
        "options": [
          "Asid etanoik tidak larut dalam air",
          "Sebahagian tenaga haba diserap untuk mengionkan asid etanoik secara lengkap dalam air",
          "Tindak balas tersebut adalah tindak balas endotermik sepenuhnya",
          "Ion natrium menghalang tindak balas peneutralan berlaku"
        ],
        "answer": "Sebahagian tenaga haba diserap untuk mengionkan asid etanoik secara lengkap dalam air",
        "explanation": "Asid etanoik mengion separa dalam air. Sebahagian daripada haba yang dibebaskan semasa peneutralan diserap semula untuk memutuskan ikatan O-H bagi mengionkan molekul asid secara lengkap."
      },
      {
        "question": "Bahan kimia manakah yang terkandung di dalam pek sejuk segera yang digunakan oleh atlet untuk merawat bengkak kecederaan sukan?",
        "options": [
          "Kalsium klorida kontang",
          "Ammonium nitrat",
          "Natrium hidroksida",
          "Asid sulfurik"
        ],
        "answer": "Ammonium nitrat",
        "explanation": "Pelarutan ammonium nitrat dalam air merupakan proses endotermik yang menyerap banyak haba dari persekitaran, merendahkan suhu dengan cepat."
      }
    ],
    "struktur": [
      {
        "soalan": "Dalam satu eksperimen untuk menentukan haba pemendakan argentum klorida, 50 cm³ larutan AgNO₃ 0.5 mol dm⁻³ dicampurkan kepada 50 cm³ larutan NaCl 0.5 mol dm⁻³. Kenaikan suhu campuran ialah 3.0 °C. Diberi muatan haba tentu larutan c = 4.2 J g⁻¹ °C⁻¹ dan ketumpatan larutan = 1.0 g cm⁻³.\n(a) Hitung haba yang dibebaskan dalam eksperimen tersebut.\n(b) Hitung haba pemendakan argentum klorida.",
        "markah": "4 Markah",
        "jawapan": "(a) Jisim campuran m = 50 + 50 = 100 g. Q = mcθ = 100 × 4.2 × 3.0 = 1260 J = 1.26 kJ [2m].\n(b) Bilangan mol Ag⁺ = MV / 1000 = (0.5 × 50) / 1000 = 0.025 mol [1m]. Haba pemendakan ΔH = -Q / n = -1.26 kJ / 0.025 mol = -50.4 kJ mol⁻¹ [1m].",
        "panduanKoreksi": "2m Q = 1.26 kJ + 1m mol = 0.025 + 1m ΔH = -50.4 kJ mol⁻¹ (tanda negatif wajib)."
      }
    ]
  },
  {
    "id": "kimia5-bab4",
    "babNum": "BAB 4",
    "title": "POLIMER",
    "icon": "🧶",
    "anyflipPages": "Buku Teks Kimia Tingkatan 5 KSSM (Halaman 142 – 165)",
    "synopsis": "Mengkaji pengelasan polimer (sumber, sifat termoplastik/termoset/elastomer, jenis tindak balas pempolimeran penambahan dan kondensasi), struktur dan sifat getah asli, penggumpalan dan pencegahan lateks, proses pemvulkanan getah, serta perbandingan getah asli vs getah sintetik.",
    "notes": [
      {
        "subtopic": "4.1 Polimer",
        "summary": "Polimer ialah molekul berantai panjang yang dibina daripada gabungan ribuan unit molekul kecil berulang yang dinamakan monomer.",
        "verbatim": [
          "Pengelasan Polimer:",
          "- Berdasarkan Sumber: Polimer Semulajadi (kanji, selulosa, protein, getah asli); Polimer Sintetik (polietena, polivinil klorida / PVC, nilon, terilena).",
          "- Berdasarkan Ciri Termal:",
          "  1. Termoplastik: Boleh diacukan berulang kali apabila dipanaskan (rantai lurus tanpa rangkai silang cth polietena, polipropilena);",
          "  2. Termoset: Tidak boleh diacukan semula selepas dipanaskan, akan hangus/terurai (mempunyai rangkai silang tegar cth bakelit, melamina);",
          "  3. Elastomer: Boleh diregang dan kembali semula ke bentuk asal apabila daya dilepaskan (cth getah asli, stirena-butadiena / SBR).",
          "Dua Jenis Pempolimeran: (1) Pempolimeran Penambahan (monomer alkena berikatan ganda dua C=C bergabung membuka ikatan tanpa penyingkiran sebarang molekul kecil cth etena -> polietena); (2) Pempolimeran Kondensasi (monomer dengan dua kumpulan berfungsi bergabung dengan menyingkirkan molekul kecil seperti H₂O atau HCl cth nilon-6,6 dan poliester terilena)."
        ],
        "explanation": "Polimer termoset tidak melebur apabila dipanaskan kerana ikatan silang silang kovalen yang kuat menahan rantai polimer daripada menggelongsor."
      },
      {
        "subtopic": "4.2 Getah Asli",
        "summary": "Struktur polimer getah asli (cis-1,4-poliisoprena), sifat fizikal, mekanisme penggumpalan lateks oleh asid dan pencegahan oleh alkali, serta proses pemvulkanan getah.",
        "verbatim": [
          "Monomer Getah Asli: Isoprena (2-metilbuta-1,3-diena); Polimer semulajadi ialah poliisoprena.",
          "Sifat Getah Asli: Lembut, kenyal, tidak tahan haba (melekit pada suhu panas, keras dan rapuh pada suhu sejuk), mudah dioksidakan oleh oksigen/ozon kerana mempunyai ikatan ganda dua C=C.",
          "Mekanisme Penggumpalan Lateks:",
          "- Zarah lateks dikelilingi lapisan membran protein bercas negatif yang saling menolak antara satu sama lain;",
          "- Penambahan Asid (asid formik/etanoik): Ion hidrogen H⁺ meneutralkan cas negatif membran protein; Zarah-zarah berlanggar, membran pecah dan rantai polimer getah membelit membentuk gumpalan pepejal;",
          "- Penggumpalan Semula Jadi: Bakteria dalam lateks menguraikan protein menghasilkan asid laktik;",
          "- Pencegahan Penggumpalan: Penambahan larutan Alkali (ammonia, NH₃) membekalkan ion OH⁻ yang meneutralkan asid bakteria dan mengekalkan cas negatif membran.",
          "Pemvulkanan Getah: Proses memanaskan getah asli dengan sulfur (atau menggunakan cecair disulfur diklorida); Membentuk Rangkai Silang Sulfur antara rantai polimer getah; Rangkai silang sulfur menghalang rantai getah daripada menggelongsor apabila diregang dan menariknya kembali ke kedudukan asal.",
          "Sifat Getah Tervulkan: Jauh lebih kenyal, lebih keras dan kuat, takat lebur tinggi (tahan haba), dan lebih tahan pengoksidaan."
        ],
        "explanation": "Rangkai silang sulfur bertindak seperti spring elastik yang memulihkan bentuk tayar kenderaan selepas menerima hentakan jalan raya."
      },
      {
        "subtopic": "4.3 Getah Sintetik",
        "summary": "Polimer elastomer buatan manusia daripada bahan petroleum, ciri-ciri kelebihan dan perbandingannya dengan getah asli.",
        "verbatim": [
          "Getah Sintetik: Dihasilkan daripada monomer produk sampingan petroleum melalui pempolimeran buatan.",
          "Contoh Getah Sintetik: Getah Neoprena (polikloroprena - tahan minyak dan bahan kimia, hos petrol); Getah Stirena-Butadiena (SBR - tahan lelasan haba tinggi, tayar kenderaan); Getah Silikon (tahan suhu tinggi dan lengai, alatan pembedahan dan penyumbat botol bayi); Getah Nitril (sarung tangan makmal).",
          "Perbandingan Getah Asli vs Getah Sintetik: Getah asli mempunyai kekenyalan yang lebih unggul dan menyerap getaran lebih baik; Getah sintetik mempunyai ketahanan haba, rintangan minyak/bahan kimia, dan ketahanan lelasan yang jauh lebih tinggi."
        ],
        "explanation": "Tayar kapal terbang diperbuat daripada gabungan getah tervulkan dan getah sintetik untuk menggabungkan sifat kenyal penyerap hentakan dengan rintangan lelasan kelajuan tinggi."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "desc": "Bezakan 3 jenis polimer terma (termoplastik, termoset, elastomer) dan 2 jenis pempolimeran."
      },
      {
        "step": "Langkah 2",
        "desc": "Terangkan mekanisme penggumpalan lateks oleh asid dan pencegahan oleh alkali ammonia."
      },
      {
        "step": "Langkah 3",
        "desc": "Lukis dan terangkan struktur rangkai silang sulfur dalam pemvulkanan getah."
      },
      {
        "step": "Langkah 4",
        "desc": "Bandingkan kelebihan sifat getah asli vs getah sintetik (SBR, neoprena, silikon)."
      }
    ],
    "keypoints": [
      "Monomer getah asli ialah isoprena (2-metilbuta-1,3-diena)",
      "Lateks menggumpal apabila ion H⁺ (asid) meneutralkan cas negatif membran protein",
      "Ammonia (alkali) mengekalkan cas negatif zarah lateks untuk cegah penggumpalan",
      "Pemvulkanan membentuk rangkai silang sulfur antara rantai polimer getah",
      "Getah tervulkan: Lebih keras, lebih kenyal, tahan haba dan tahan pengoksidaan",
      "Getah Sintetik: SBR (tayar tahan lelas), Neoprena (hos petrol tahan minyak)"
    ],
    "questions": [
      {
        "question": "Apakah fungsi rangkai silang sulfur yang terbentuk dalam proses pemvulkanan getah asli?",
        "options": [
          "Menghapuskan semua ikatan kovalen antara atom karbon",
          "Menghalang rantai polimer getah daripada menggelongsor dan memulihkan bentuk asalnya",
          "Menjadikan getah mudah larut di dalam air",
          "Menukar getah menjadi polimer termoplastik"
        ],
        "answer": "Menghalang rantai polimer getah daripada menggelongsor dan memulihkan bentuk asalnya",
        "explanation": "Rangkai silang sulfur mengikat rantai polimer getah, menghalangnya daripada menggelongsor melepasi satu sama lain apabila diregang, menjadikan getah tervulkan sangat kenyal dan kuat."
      },
      {
        "question": "Bahan manakah yang perlu ditambahkan ke dalam lateks segar di ladang getah untuk mengelakkannya daripada menggumpal semasa dalam perjalanan ke kilang?",
        "options": [
          "Asid formik",
          "Larutan ammonia",
          "Serbuk sulfur",
          "Minyak petrol"
        ],
        "answer": "Larutan ammonia",
        "explanation": "Larutan ammonia (alkali) mengandungi ion hidroksida OH⁻ yang meneutralkan asid laktik yang dihasilkan oleh bakteria, mengekalkan cas negatif membran zarah getah dan mencegah penggumpalan."
      }
    ],
    "struktur": [
      {
        "soalan": "Huraikan mengapa getah tervulkan adalah lebih kenyal dan lebih tahan haba berbanding getah tak tervulkan.",
        "markah": "4 Markah",
        "jawapan": "Dalam getah tervulkan, terdapat rangkai silang sulfur di antara rantai-rantai polimer getah [1m]. Apabila daya regangan dikenakan, rantai getah tidak mudah menggelongsor dan rangkai silang sulfur menarik rantai kembali ke bentuk asalnya, menjadikannya lebih kenyal [2m]. Kehadiran rangkai silang sulfur juga memerlukan tenaga haba yang tinggi untuk diputuskan, menjadikannya mempunyai takat lebur yang lebih tinggi dan tahan haba [1m].",
        "panduanKoreksi": "1m kewujudan rangkai silang sulfur + 2m halang gelongsor/tarik balik + 1m tenaga haba tinggi putuskan ikatan."
      }
    ]
  },
  {
    "id": "kimia5-bab5",
    "babNum": "BAB 5",
    "title": "KIMIA KONSUMER DAN INDUSTRI",
    "icon": "🧴",
    "anyflipPages": "Buku Teks Kimia Tingkatan 5 KSSM (Halaman 166 – 203)",
    "synopsis": "Mengkaji kimia minyak dan lemak, penghasilan sabun dan detergen, tindakan pencucian dalam air lembut dan air liat, bahan tambah makanan, ubat-ubatan tradisional dan moden, bahan kosmetik, aplikasi nanoteknologi (grafen), serta teknologi hijau dalam pengurusan sisa industri.",
    "notes": [
      {
        "subtopic": "5.1 Minyak dan Lemak",
        "summary": "Minyak dan lemak ialah sebatian ester semulajadi yang terbentuk melalui tindak balas pengesteran antara satu molekul gliserol dan tiga molekul asid lemak.",
        "verbatim": [
          "Minyak vs Lemak: Minyak berada dalam keadaan cecair pada suhu bilik (kebanyakannya daripada tumbuhan cth minyak sawit, jagung); Lemak berada dalam keadaan pepejal pada suhu bilik (daripada haiwan cth mentega, lemak lembu).",
          "Pembentukan Trigliserida: 1 Gliserol + 3 Asid Lemak ⇌ 1 Trigliserida (lemak/minyak) + 3 H₂O.",
          "Asid Lemak Tepu (cth asid palmitik, asid stearik) hanya mengandungi ikatan tunggal C-C; Asid Lemak Tak Tepu (cth asid oleik, asid linoleik) mengandungi sekurang-kurangnya satu ikatan ganda dua C=C.",
          "Penghidrogenan Minyak Sayuran: Gas H₂ dialirkan ke dalam minyak sayuran panas dengan mangkin nikel pada 180 °C untuk memutuskan ikatan ganda dua C=C, menghasilkan lemak pepejal (marjerin)."
        ],
        "explanation": "Minyak sayuran tak tepu lebih sihat untuk jantung kerana tidak meningkatkan aras kolesterol berketumpatan rendah (LDL)."
      },
      {
        "subtopic": "5.2 Bahan Pencuci",
        "summary": "Penghasilan sabun melalui proses saponifikasi, penghasilan detergen sintetik, dan perbandingan keberkesanan tindakan pencucian dalam air liat.",
        "verbatim": [
          "Pembuatan Sabun (Saponifikasi): Hidrolisis ester lemak/minyak menggunakan larutan alkali pekat (NaOH untuk sabun keras, KOH untuk sabun mandi lembut): Minyak/Lemak + Alkali Pekat -> Sabun + Gliserol. Garam biasa (NaCl) ditambah untuk memendakkan sabun.",
          "Struktur Bahan Pencuci: Terdiri daripada dua bahagian: (1) Kepala Hidrofilik (larut dalam air, bercas ionik); (2) Ekor Hidrofobik (rantai hidrokarbon panjang, larut dalam minyak/gris).",
          "Tindakan Pencucian: (1) Bahan pencuci mengurangkan ketegangan permukaan air membasahi kain; (2) Ekor hidrofobik melarut dalam kotoran minyak manakala kepala hidrofilik melarut dalam air; (3) Pengadukan air menanggalkan gris menjadi titisan halus; (4) Titisan minyak bercas negatif saling menolak membentuk emulsi terapung yang dibilas bersih.",
          "Tindakan dalam Air Liat (Air Liat mengandungi ion Ca²⁺ dan Mg²⁺):",
          "- Sabun membentuk kekat (scum - mendakan garam tak larut kalsium stearat) yang membazirkan sabun dan meninggalkan kotoran putih pada pakaian;",
          "- Detergen TIDAK membentuk kekat dalam air liat kerana garam kalsium/magnesium detergen adalah larut dalam air (tindakan pencucian detergen lebih berkesan)."
        ],
        "explanation": "Walaupun detergen lebih berkesan dalam air liat, sabun lebih mesra alam kerana diperbuat daripada bahan organik yang mudah terbiodegradasi."
      },
      {
        "subtopic": "5.3 Bahan Tambah Makanan",
        "summary": "Bahan kimia semulajadi atau sintetik yang ditambah ke dalam makanan untuk mengawet, menambah perisa, menstabilkan emulsi, dan memperbaiki rupa.",
        "verbatim": [
          "Tujuh Kumpulan Bahan Tambah Makanan:",
          "1. Bahan Pengawet: Melambatkan kerosakan makanan dan merencat pertumbuhan mikrob (cth garam, gula, natrium benzoat, asid borik, natrium nitrit dalam sosej);",
          "2. Pengantioksida: Menghalang pengoksidaan lemak dan ketengikan minyak (cth asid askorbik / Vitamin C, BHA, BHT, tokoferol / Vitamin E);",
          "3. Perisa: Membaiki rasa makanan (cth monosodium glutamat - MSG, aspartam, ester sintetik perisa pisang/strawberi);",
          "4. Penstabil: Mencampurkan dua cecair yang tidak larut campur menjadi emulsi stabil (cth lesitin, gelatin, agar-agar, gam akasia);",
          "5. Pengemulsi: Membantu mencampurkan minyak dan air (cth monogliserida);",
          "6. Pemekat: Memekatkan tekstur cecair makanan (cth kanji, pektin);",
          "7. Pewarna: Mengembalikan warna asli atau menambahkan daya tarikan (cth karamel, tartrazina kuning, sunset yellow).",
          "Kesan Pengambilan Berlebihan: Alahan kulit, hiperaktif pada kanak-kanak, kanser (karsinogen daripada nitrit dan asid borik)."
        ],
        "explanation": "Penggunaan bahan pengawet terlarang seperti asid borik dan formalin dilarang keras di bawah Akta Makanan 1983."
      },
      {
        "subtopic": "5.4 Ubat-ubatan dan Bahan Kosmetik",
        "summary": "Pengelasan ubat tradisional dan ubat moden (analgesik, antibiotik, psikoteraputik, antihistamin, kortikosteroid), serta bahan kosmetik dan kesan sampingan bahan kimia berbahaya.",
        "verbatim": [
          "Ubat Tradisional: Diperoleh daripada herba dan haiwan semulajadi (cth halia - membuang angin; ginseng - stamina badan; lidah buaya - melegakan luka melecur).",
          "Kategori Ubat Moden:",
          "- Analgesik: Melegakan kesakitan (Aspirin - berasid, tidak sesuai untuk pesakit ulser gastrik; Parasetamol - selamat untuk perut; Kodeina - analgesik narkotik kuat);",
          "- Antibiotik: Membunuh bakteria patogen (Penisilin, Streptomisin);",
          "- Ubat Psikoteraputik: Merawat penyakit mental (Stimulan cth amfetamin; Antidepresan cth trankuiliser; Antipsikotik);",
          "- Antihistamin: Melegakan alahan, gatal dan selesema;",
          "- Kortikosteroid: Mengurangkan keradangan parah (cth hidrokortison, deksametason).",
          "Bahan Kosmetik & Bahaya Bahan Terlarang: Merkuri (merosakkan buah pinggang dan sistem saraf), Hidrokuinon (merah dan mengelupas kulit, kanser kulit), Tretinoin (merengsa kulit teruk)."
        ],
        "explanation": "Aspirin tidak boleh diberikan kepada kanak-kanak yang menghidap jangkitan virus kerana boleh mencetuskan Sindrom Reye yang berbahaya."
      },
      {
        "subtopic": "5.5 Aplikasi Nanoteknologi dalam Industri",
        "summary": "Pembangunan sains bahan berskala nano (1 hingga 100 nanometer) dan keistimewaan luar biasa bahan alotrop karbon grafen.",
        "verbatim": [
          "Skala Nano: Berukuran antara 1 hingga 100 nanometer (1 nm = 10⁻⁹ meter); Zarah nano mempunyai nisbah luas permukaan kepada isi padu yang sangat besar, memberikan sifat kereaktifan fizikal dan kimia yang berbeza.",
          "Grafen: Lapisan tunggal atom karbon yang tersusun dalam kekisi heksagon sarang lebah dua dimensi (2D).",
          "Sifat Luar Biasa Grafen: (1) Kekuatan mekanikal 200 kali lebih kuat daripada keluli tetapi sangat ringan; (2) Konduktor haba dan elektrik terbaik mengatasi kuprum; (3) Lut sinar (ketelusan 97.7%); (4) Fleksibel dan elastik boleh dilipat; (5) Kalis gas dan cecair.",
          "Aplikasi Grafen & Nanoteknologi: Skrin paparan sentuh fleksibel OLED, bateri cas super pantas (superkapasitor), cip semikonduktor komputer generasi baharu, sensor bioperubatan penghantar ubat kanser, dan penapis air penyahgaraman."
        ],
        "explanation": "Penemuan grafen memenangi Hadiah Nobel Fizik 2010 kerana membuka era baharu dalam bidang elektronik nano fleksibel."
      },
      {
        "subtopic": "5.6 Aplikasi Teknologi Hijau dalam Pengurusan Sisa Industri",
        "summary": "Pendekatan lestari berasaskan 12 prinsip Kimia Hijau dalam menangani sisa industri kimia, rawatan efluen kilang dan bioremediasi.",
        "verbatim": [
          "Konsep Kimia Hijau (Green Chemistry): Mereka bentuk produk dan proses kimia yang mengurangkan atau menghapuskan penggunaan dan penghasilan bahan berbahaya.",
          "Aplikasi Teknologi Hijau dalam Pengurusan Sisa:",
          "- Rawatan Air Sisa Kilang: Penggunaan mikrob pengurai dan alga dalam kolam pengoksidaan untuk menyingkirkan sebatian organik toksik;",
          "- Bioremediasi: Menggunakan mikroorganisma atau tumbuhan (fitoremediasi) untuk membersihkan tumpahan minyak dan menyerap logam berat daripada tanah tercemar;",
          "- Pengurusan Sisa Karbon: Teknologi Penangkapan dan Penyimpanan Karbon (CCS) untuk memerangkap CO₂ cerobong kilang dan menyuntiknya ke bawah tanah;",
          "- Bahan Api Boleh Baharu: Mengitar semula sisa minyak masak terpakai menjadi biodiesel mesra alam."
        ],
        "explanation": "Teknologi Hijau bukan sahaja memelihara ekosistem bumi tetapi juga meningkatkan kecekapan ekonomi kitaran (circular economy) industri."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "desc": "Kuasai proses saponifikasi penghasilan sabun dan struktur kepala hidrofilik/ekor hidrofobik."
      },
      {
        "step": "Langkah 2",
        "desc": "Bandingkan tindakan pencucian sabun vs detergen dalam air liat (pembentukan kekat)."
      },
      {
        "step": "Langkah 3",
        "desc": "Hafal 7 jenis bahan tambah makanan dan pengelasan ubat moden (analgesik, antibiotik)."
      },
      {
        "step": "Langkah 4",
        "desc": "Terangkan sifat unik grafen (konduktor super, kuat) dan aplikasi bioremediasi sisa."
      }
    ],
    "keypoints": [
      "Saponifikasi: Minyak + Alkali pekat (NaOH/KOH) -> Sabun + Gliserol",
      "Struktur sabun: Kepala hidrofilik (larut air), Ekor hidrofobik (larut gris/minyak)",
      "Sabun membentuk kekat (scum) dalam air liat (ion Ca²⁺ dan Mg²⁺); Detergen TIDAK membentuk kekat",
      "Bahan pengawet natrium benzoat merencat mikrob; Pengantioksida vitamin C halang ketengikan",
      "Analgesik: Aspirin (berasid), Parasetamol (mesra perut), Kodeina (narkotik)",
      "Grafen: 200× lebih kuat daripada keluli, konduktor haba/elektrik terbaik dunia"
    ],
    "questions": [
      {
        "question": "Mengapakah detergen lebih berkesan digunakan berbanding sabun apabila mencuci pakaian di kawasan yang menggunakan bekalan air liat?",
        "options": [
          "Detergen mempunyai pH yang lebih berasid",
          "Detergen tidak membentuk kekat dengan ion kalsium dan magnesium dalam air liat",
          "Detergen menghasilkan mendakan putih yang melekat pada kain",
          "Detergen menyerap semua ion klorin dalam air"
        ],
        "answer": "Detergen tidak membentuk kekat dengan ion kalsium dan magnesium dalam air liat",
        "explanation": "Detergen bertindak balas dengan ion Ca²⁺ dan Mg²⁺ dalam air liat membentuk garam yang larut dalam air, maka tiada kekat (scum) terbentuk dan buih pencucian kekal aktif."
      },
      {
        "question": "Bahan alotrop karbon dua dimensi (2D) manakah yang mempunyai kekuatan 200 kali lebih kuat daripada keluli dan merupakan konduktor elektrik terbaik?",
        "options": [
          "Grafit",
          "Berlian",
          "Grafen",
          "Karbon monoksida"
        ],
        "answer": "Grafen",
        "explanation": "Grafen ialah lapisan tunggal atom karbon heksagon 2D yang memiliki kekuatan mekanikal 200 kali ganda keluli dan kekonduksian haba serta elektrik yang luar biasa."
      }
    ],
    "struktur": [
      {
        "soalan": "Huraikan tindakan pencucian molekul sabun ke atas kotoran berminyak pada pakaian kotor.",
        "markah": "4 Markah",
        "jawapan": "Sabun mengurangkan ketegangan permukaan air bagi membasahi permukaan fabrik [1m]. Ekor hidrofobik sabun yang larut dalam gris melarut ke dalam kotoran minyak manakala kepala hidrofilik melarut di dalam air [1m]. Tindakan mengaduk air memecahkan kotoran berminyak kepada titisan-titisan kecil yang terapung [1m]. Kepala hidrofilik yang bercas negatif pada permukaan titisan minyak saling menolak antara satu sama lain, menghalang titisan bergabung semula membentuk emulsi yang mudah dibilas keluar [1m].",
        "panduanKoreksi": "1m kurangkan ketegangan permukaan + 1m ekor larut gris/kepala larut air + 1m pengadukan pecah gris + 1m tolakan cas emulsi/bilas."
      }
    ]
  }
];
