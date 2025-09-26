// This file will contain all your articles data
// You can expand this with your 25+ articles

export interface Article {
  id: string
  title: string
  date: string
  category: string
  author: string
  excerpt: string
  readTime: string
  content: string
  tags: string[]
}

export const articlesData: Record<string, Article> = {
  "analisis-pajak-cryptocurrency": {
    id: "analisis-pajak-cryptocurrency",
    title: "ANALISIS PENGENAAN PAJAK CRYPTOCURRENCY BAGI INVESTOR DI INDONESIA",
    date: "Nov 15, 2024",
    category: "Finance and Banking",
    author: "Muhammad Zahy, Natasa Nur Izzatul Romah, Yonathan Kevin A.",
    readTime: "15 min read",
    excerpt:
      "Analisis mendalam mengenai regulasi pajak cryptocurrency di Indonesia dan dampaknya terhadap investor, termasuk perbandingan dengan negara lain dan aspek yuridis penerapannya...",
    content: `
      <h2>Pendahuluan</h2>
      <p>Besarnya partisipasi dari masyarakat Indonesia untuk ikut terlibat dalam transaksi dan investasi kripto telah mendorong pemerintah untuk mempertimbangkan pengaturan pajak guna mengatur perkembangan kripto yang kian melonjak di Indonesia. Berdasarkan data resmi dari Kementerian Keuangan, OJK, dan Bappebti, terjadi lonjakan signifikan dalam jumlah investor baru pada tahun 2020, mencapai 4 juta orang, dengan total transaksi kripto mencapai Rp64,9 triliun. Pada tahun 2021, jumlah investor tersebut melonjak menjadi 11,2 juta orang dengan nilai transaksi mencapai Rp859,4 triliun.</p>

      <p>Hal ini mendorong kebutuhan akan regulasi untuk mengatur Pajak Penghasilan (PPh) dan Pajak Pertambahan Nilai (PPN) dalam transaksi kripto. Pemerintah Indonesia berencana memberlakukan ketentuan baru tentang PPh dan PPN yang bersifat final mulai tanggal 1 Mei 2022. Regulasi ini juga telah diatur dalam Peraturan Menteri Keuangan (PMK) Nomor 68/PMK/03/2022 tentang Pajak Pertambahan Nilai dan Pajak Penghasilan atas Transaksi Perdagangan Aset Kripto.</p>

      <p>Langkah ini mencerminkan komitmen pemerintah untuk mengatur transparansi dan konsistensi dalam kripto dan menjaga keadilan pajak di sektor tersebut. Pengenalan regulasi baru ini menandakan pengakuan resmi oleh hukum Indonesia terhadap kripto sebagai aset atau komoditas yang dilegalkan di Indonesia.</p>

      <h2>Konsepsi Cryptocurrency</h2>
      <p>Menurut Lansky (2018), Kripto adalah mata uang digital yang menggunakan kriptografi untuk mengamankan dan memverifikasi transaksi melalui sistem blockchain terdesentralisasi serta transfer ke segala negara dengan cepat dan murah. Di Indonesia sendiri, larangan terkait penggunaan kripto sebagai alat pembayaran dituangkan secara tegas dalam Peraturan Bank Indonesia Nomor 18/40/PBI/2016 yang melarang lembaga keuangan untuk menggunakan atau menyediakan layanan terkait mata uang kripto sebagai alat pembayaran.</p>

      <p>Kripto tidak diakui sebagai mata uang atau alat pembayaran yang sah. Hal ini juga sesuai dengan ketentuan peraturan perundang-undangan mengenai mata uang yang diatur dalam Undang-Undang Nomor 7 Tahun 2011 tentang Mata Uang yaitu disebutkan bahwa alat pembayaran yang sah di Indonesia adalah rupiah. Sementara itu, kripto tetap diakui oleh Indonesia sebagai komoditas.</p>

      <h2>Potensi Ekonomi dari Kripto</h2>
      <p>Saat ini, kripto mulai digandrungi oleh sebagian besar masyarakat karena kecanggihan dan kemudahannya dalam bertransaksi. Pertumbuhan investor aset kripto ini menunjukkan antusiasme dari masyarakat terhadap aset kripto ini semakin tinggi, seiring dengan edukasi dan literasi yang gencar dilakukan, baik dari pemerintah maupun para influencer media sosial.</p>

      <p>Berdasarkan data yang dikeluarkan oleh Badan Pengawas Perdagangan Berjangka Komoditi (Bappebti), total investor kripto di Indonesia mencapai 18,06 juta orang hingga Oktober 2023. Jumlah investor kripto tersebut meningkat sebesar 10,1% jika dibandingkan Oktober 2022 yang hanya berjumlah 16,4 juta orang. Hal ini terus bertumbuh mencapai 18,83 juta orang hingga Januari 2024. Jumlah tersebut bahkan melampaui jumlah investor pasar modal dan tentu menjadikan Indonesia sebagai pasar potensial investasi kripto.</p>

      <h2>Pengenaan Pajak bagi Investor Kripto di Indonesia</h2>
      <p>Pajak merupakan salah satu sumber komponen pokok penerimaan negara yang diatur oleh peraturan perundang-undangan. Menurut Aini (1985), terdapat teori-teori dalam Pemungutan Pajak, yakni:</p>
      
      <ul>
        <li><strong>Teori Asuransi:</strong> Teori yang berpandangan bahwa pajak dianggap sebagai sebuah premi yang wajib dibayarkan oleh masyarakat kepada negara karena negara telah memberikan perlindungan dan pelayanan publik;</li>
        <li><strong>Teori Bakti/Kewajiban Pajak Mutlak:</strong> Teori ini menyatakan bahwa negara berhak untuk memungut pajak dan warga memiliki kewajiban membayar pajak sebagai bentuk bakti terhadap negara;</li>
        <li><strong>Teori Kepentingan:</strong> Teori ini melihat bahwasanya pemungutan pajak harus memperhatikan kepentingan masyarakat secara keseluruhan;</li>
        <li><strong>Teori Daya Pikul:</strong> Teori ini menekankan bahwa pajak yang dipungut negara merupakan beban yang harus ditanggung oleh warga negara sesuai dengan kemampuan finansial masing-masing warga negara.</li>
      </ul>

      <p>Berdasarkan Peraturan Menteri Keuangan Nomor 68/PMK.03/2022, aset kripto dikenakan Pajak Pertambahan Nilai (PPN) sebesar 0,11% dari nilai transaksi pada bursa yang telah terdaftar di Bappebti dan PPN sebesar 0,22% dari nilai transaksi pada bursa yang tidak terdaftar di Bappebti, ditambah Pajak Penghasilan (PPh) sebesar 0,1%.</p>

      <h3>Perbandingan dengan Negara Lain</h3>
      <p>Pajak kripto yang diterapkan Pemerintah Indonesia memang masih tergolong tinggi jika disandingkan dengan kebijakan perpajakan kripto pada negara-negara lainnya:</p>
      
      <ul>
        <li><strong>Amerika Serikat:</strong> Regulasi kripto sama halnya dengan instrumen investasi saham, obligasi, dan properti sehingga pajak yang diterapkan berupa pengenaan pajak capital gain;</li>
        <li><strong>Tiongkok:</strong> Mengenakan pajak penghasilan (PPh) atas keuntungan yang diperoleh dari transaksi kripto tanpa PPN;</li>
        <li><strong>Thailand:</strong> Membebaskan pajak PPN sebesar 7% untuk transaksi kripto yang berlaku efektif pada 1 Januari 2024, hanya menerapkan PPh final sebesar 15%.</li>
      </ul>

      <h2>Dampak Penerapan Pajak Aset Kripto</h2>
      
      <h3>Dampak Positif</h3>
      <p>Penerapan pajak terhadap aset kripto menjadi salah satu dampak positif bagi peningkatan pajak yang akan berimplikasi pada peningkatan perekonomian negara dan memberikan kontribusi nyata bagi pembangunan nasional serta peningkatan kesejahteraan masyarakat. Terbukti dengan adanya penerapan pajak pendapatan negara meningkat secara signifikan yaitu pada akhir Januari 2024 pendapatan negara dari pajak kripto mencapai Rp 39,13 miliar.</p>

      <h3>Dampak Negatif</h3>
      <p>Penerapan pajak yang tinggi terhadap aset kripto di Indonesia juga akan menimbulkan dampak negatif, seperti penurunan minat masyarakat dan volume nilai transaksi aset kripto di Indonesia. Pajak yang tinggi akan membuat para investor lebih berhati-hati dalam bertransaksi, dan memungkinkan beberapa investor kripto akan memilih untuk mengurangi aktivitas perdagangan kripto.</p>

      <h2>Analisis Yuridis</h2>
      <p>Kripto termasuk objek pajak penghasilan dan telah resmi diperdagangkan. Dalam pasal 4 UU PPh disebut yang menjadi objek pajak penghasilan, yaitu setiap tambahan kemampuan ekonomis yang diterima baik dari Indonesia atau luar Indonesia yang dapat dipakai untuk menambah kekayaan wajib pajak.</p>

      <p>Peraturan Menteri Keuangan (PMK) Nomor 68 Tahun 2022 tentang Pajak Pertambahan Nilai dan Pajak Penghasilan atas Transaksi Perdagangan Aset Kripto menyatakan bahwa kripto termasuk ke dalam kelompok investasi dengan kategori investasi lainnya sehingga diperkenankan pajak sesuai aturannya.</p>

      <p>Dalam konteks regulasi pajak atas transaksi aset kripto di Indonesia, PMK 68/PMK.03/2022 menjadi tonggak penting yang menandai upaya pemerintah dalam menyediakan kerangka hukum yang lebih jelas dan konsisten serta menjaga peluang pertumbuhan pasar kripto domestik.</p>

      <h2>Simpulan</h2>
      <p>Masyarakat di Indonesia sekarang sudah mulai melek tentang dunia investasi, terutama para pemuda. Pada tahun 2021 terjadi peningkatan jumlah investor di Indonesia. Awalnya belum ada regulasi tegas tentang pemberlakuan pajak untuk para investor yang berinvestasi di kripto, namun pada 1 Januari 2022 sudah diterapkan pengaturan pengenaan pajak bagi para investor yaitu Pajak Penghasilan (PPh) dan Pajak Pertambahan Nilai (PPN).</p>

      <p>Pajak yang ditetapkan oleh pemerintah jumlahnya cukup besar. Hal ini menimbulkan rasa resah bagi para investor. Pemerintah Indonesia masih berupaya melakukan regulasi pajak untuk meningkatkan tarif negara dan minat para investor untuk berinvestasi kripto. Investor harus menyadari tanggung jawab mereka dalam melaporkan keuntungan dan membayar pajak yang sesuai.</p>

      <p>Kesadaran hukum dan kepatuhan pajak dari para pelaku pasar kripto akan mendukung penerimaan negara dan mengurangi risiko aktivitas ilegal. Dengan demikian, pemerintah dapat memanfaatkan potensi penerimaan pajak dari sektor ini untuk pembangunan ekonomi dan sosial.</p>
    `,
    tags: ["Cryptocurrency", "Pajak", "Regulasi", "Indonesia", "Investasi", "PMK 68/2022", "PPN", "PPh"],
  },

  "transformasi-usaha-mikro-syariah": {
    id: "transformasi-usaha-mikro-syariah",
    title: "TRANSFORMASI SOSIAL UNIT USAHA MIKRO MELALUI STRATEGI MANAJEMEN RESIKO PERTUMBUHAN PERUSAHAAN SYARIAH",
    date: "Nov 12, 2024",
    category: "Finance and Banking",
    author: "Dr. Ahmad Santoso",
    readTime: "12 min read",
    excerpt: "Strategi transformasi sosial untuk unit usaha mikro dengan pendekatan syariah dalam manajemen risiko...",
    content: `
      <h2>Abstrak</h2>
      <p>Penelitian ini mengkaji strategi transformasi sosial unit usaha mikro melalui implementasi manajemen risiko berbasis prinsip syariah.</p>
      
      <h2>Latar Belakang</h2>
      <p>Unit usaha mikro memiliki peran penting dalam perekonomian Indonesia. Namun, banyak usaha mikro menghadapi tantangan dalam manajemen risiko.</p>
      
      <h2>Kesimpulan dan Rekomendasi</h2>
      <p>Strategi manajemen risiko berbasis syariah terbukti efektif dalam mendorong transformasi sosial unit usaha mikro.</p>
    `,
    tags: ["Usaha Mikro", "Syariah", "Manajemen Risiko", "Transformasi Sosial", "UMKM"],
  },

  "perlindungan-investor-monopoli": {
    id: "perlindungan-investor-monopoli",
    title: "PERLINDUNGAN INVESTOR TERHADAP PRAKTIK MONOPOLI PASAR MODAL",
    date: "Nov 10, 2024",
    category: "Capital Market Law",
    author: "Prof. Siti Nurhaliza",
    readTime: "10 min read",
    excerpt: "Kajian komprehensif tentang perlindungan hukum bagi investor dalam menghadapi praktik monopoli...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Investor Protection", "Market Manipulation", "Capital Market", "Securities Law"],
  },

  "analisis-subsidi-bbm-indonesia": {
    id: "analisis-subsidi-bbm-indonesia",
    title:
      "ANALISIS PENGARUH KEBIJAKAN SUBSIDI BBM DI INDONESIA TERHADAP PENJUALAN BBM NON-SUBSIDI DAN BEBAN ANGGARAN PENDAPATAN DAN BELANJA NEGARA (APBN)",
    date: "Nov 08, 2024",
    category: "Energy and Mineral Resources",
    author:
      "Riama Stefany Aurelia Sianturi, Nindita Putri Nirwasita, Devina Putri Fananda, Nikola Heda Dzikri Ramadhan",
    readTime: "18 min read",
    excerpt:
      "Evaluasi komprehensif dampak kebijakan subsidi BBM terhadap ekonomi nasional, persaingan usaha, dan beban APBN Indonesia...",
    content: `
      <h2>Pendahuluan</h2>
      <h3>A. Latar Belakang</h3>
      <p>Manusia memiliki hubungan yang erat dengan energi sebab terkait dengan pemenuhan kehidupan manusia, termasuk kebutuhan transportasi hingga keperluan industri. Kebutuhan energi ini masih bergantung dengan bahan bakar fosil, terutama minyak bumi. Perkembangan ekonomi dunia yang begitu cepat serta ketegangan geopolitik antarnegara menjadi faktor penting meningkatnya kebutuhan minyak bumi dunia. Meskipun Indonesia kaya akan sumber daya minyak bumi, Indonesia masih mengimpor BBM dari luar negeri. Hal ini menyebabkan harga BBM di Indonesia menjadi tidak stabil. Sebab, seluruh peristiwa yang terjadi di dunia internasional dapat menyebabkan meningkatnya harga BBM di Indonesia. Salah satu peristiwa tersebut adalah terjadinya konflik di Timur Tengah.</p>

      <p>Indonesia memang menjadi salah satu negara penghasil minyak bumi. Namun, kenyataannya Indonesia masih saja mengimpor minyak maupun produk minyak atau BBM dari luar negeri selama lebih dari satu dekade. Bahkan, impor minyak Indonesia terus melambung setiap tahunnya.<sup>1</sup> Berdasarkan data Badan Pusat Statistik (BPS), selama tahun 2022, impor minyak mentah RI tercatat mencapai 15,26 juta ton, melonjak 11% dibandingkan impor minyak mentah pada 2021 yang tercatat sebesar 13,78 juta ton. Berdasarkan data BPS, impor minyak mentah terbesar kedua RI berasal Timur Tengah, yakni Arab Saudi.</p>

      <p>Sebagai negara sebagai net-importer, Indonesia akan terimbas kenaikan harga minyak dunia. Hal ini dikarenakan Indonesia menjadi negara yang membeli minyak dari negara-negara lain dengan jumlah lebih banyak daripada jumlah yang dijualnya ke negara-negara tersebut.<sup>2</sup> Pengamat ekonomi energi Universitas Gadjah Mada (UGM) Dr Fahmy Radhi, MBA mengatakan konflik Iran-Israel berisiko memicu kenaikan harga minyak dunia. Akibatnya, harga bahan bakar minyak (BBM) di Indonesia bisa naik. Hal ini berarti bahwa harga minyak dunia bisa naik akibat konflik Iran-Israel karena lokasi konflik di seputar Selat Hormuz. Kondisi ini berisiko mengganggu jalur rantai pasokan (supply chain) minyak dunia. Akibatnya, pasokan minyak terhambat dan biaya distribusi naik.</p>

      <p>Kenaikan harga BBM merupakan masalah pokok yang masih dihadapi hingga saat ini. Situasi ini memicu masalah serius di dalam pilar pemerintah dan berdampak terhadap kesejahteraan masyarakat. Kebutuhan akan BBM sangat krusial bagi masyarakat, hal ini dikarenakan BBM termasuk salah satu aspek penting penunjang taraf kehidupan. Dalam sektor nasional bahan bakar minyak (BBM) memiliki peran sentral dalam memenuhi kebutuhan energi dan sebagai roda penggerak perekonomian.</p>

      <p>Tingginya konsumsi BBM di Indonesia menunjukkan betapa pentingnya komoditas tersebut sebagai kebutuhan yang harus dipenuhi. Ketergantungan terhadap impor BBM membuat harga jualnya sangat dipengaruhi oleh harga minyak dunia yang fluktuatif. Naiknya harga BBM membebani Anggaran Pendapatan dan Belanja Negara (APBN), maka pemerintah merasa perlu melakukan penyesuaian terhadap pemberian subsidi bahan bakar minyak. Adanya pemberian subsidi memberikan kemudahan untuk masyarakat, namun demikian kebijakan ini masih terdapat beberapa kendala, antara lain, terjadinya salah sasaran dalam pemberian subsidi atau dapat dikatakan pemberian subsidi dinikmati oleh masyarakat menengah keatas yang tergolong mampu. Kondisi ini mendorong masyarakat untuk mempertanyakan efektivitas penyaluran subsidi oleh pemerintah. Selain itu dalam pemberian subsidi menyebabkan masyarakat tidak menggunakan BBM dengan bijak, sehingga terjadi peningkatan konsumsi yang menyebabkan beban subsidi APBN meningkat. Dilema yang dirasakan pemerintah masih dihadapi hingga sekarang, untuk mengurangi defisit APBN yang terus terjadi maka pemerintah harus mulai mengambil langkah, salah satunya dengan menaikkan harga subsidi BBM. Namun penerapan kebijakan tersebut ditakutkan akan menyebabkan inflasi dan berdampak terhadap turunnya daya beli masyarakat di berbagai sektor ekonomi.</p>

      <h3>B. Rumusan Masalah</h3>
      <ol>
        <li>Bagaimana dampak subsidi BBM dalam sektor industri minyak terhadap perusahaan migas swasta yang menjual BBM non-subsidi?</li>
        <li>Bagaimana pengaruh pemberian subsidi BBM terhadap Beban Anggaran Pendapatan dan Belanja Negara (APBN)?</li>
      </ol>

      <h2>Pembahasan</h2>
      <h3>A. Dampak Subsidi BBM dalam Sektor Industri Minyak terhadap Perusahaan Minyak dan Gas Swasta yang Menjual BBM Non-subsidi</h3>
      <p>Undang-Undang Dasar 1945 merupakan landasan konstitusional bagi Indonesia yang memuat dasar-dasar, cita-cita, dan prinsip-prinsip penyelenggaraan kehidupan nasional. Tercantum dalam Pasal 33 Ayat (2) Undang-Undang Dasar 1945 bahwa negara diberi kewenangan untuk menguasai cabang produksi penting bukan semata-mata untuk menguasai, namun dimaksudkan agar negara dapat memenuhi kewajibannya sebagaimana diamanatkan dalam Undang-Undang Dasar 1945. Selain itu, penguasaan negara harus mampu memenuhi serta mencakup tiga hal, yaitu ketersediaan yang cukup, distribusi yang merata, dan terjangkaunya harga bagi banyak orang.</p>

      <p>Sebenarnya, kebijakan subsidi bahan bakar minyak (BBM) sudah ada sejak pemerintahan Presiden Sukarno. Pada era orde lama (1966), pemerintah menerapkan subsidi untuk tiga jenis bahan bakar, yaitu Premium, Solar, dan minyak tanah.<sup>3</sup> Mengutip jurnal The Habibie Center, harga Premium yang semula Rp0,30 menjadi Rp1 per liter, minyak tanah dari Rp0,20 menjadi 0,6 per liter, dan solar dari Rp0,2 menjadi Rp0,8 per liter.</p>

      <p>Sedangkan pada masa pemerintahan<sup>4</sup> Presiden Soeharto (1967–1998), terdapat perubahan harga bahan bakar minyak terjadi sebanyak 21 kali. Pada awal tahun menjabat, Pemerintah Orde Baru menaikkan harga Premium menjadi Rp4 per liter, Solar Rp3,5 per liter, dan minyak tanah Rp1,8 per liter. Hingga akhir masa jabatan Presiden Suharto, harga tiga bahan bakar ini menjadi masing-masing Rp1.000, Rp550, dan Rp280.</p>

      <p>Kebijakan subsidi BBM dikeluarkan oleh pemerintah bertujuan untuk menekan harga BBM dalam negeri agar tetap berada pada level terjangkau. Hal ini dilakukan agar masyarakat tetap mampu membeli BBM walaupun harga minyak dunia semakin meningkat. Berdasarkan Siaran Pers Nomor: 419.Pers/04/SJI/2024 Kementerian Energi dan Sumber Daya Mineral, lonjakan harga minyak mentah Indonesia (Indonesian Crude Price/ICP) pada Juli 2024 menjadi USD 82 per barel memberikan penjelasan yang kuat mengenai kenaikan harga BBM non-subsidi di Indonesia. Fluktuasi harga BBM non-subsidi sangat dipengaruhi oleh harga minyak mentah dunia, termasuk ICP, mengalami kenaikan, maka secara otomatis biaya produksi BBM juga ikut meningkat. Kenaikan biaya produksi ini kemudian berimbas pada penyesuaian harga jual BBM non-subsidi agar perusahaan penyedia BBM tetap dapat beroperasi secara efisien.</p>

      <p>Selain harga minyak mentah dunia yang tercermin dalam Indonesian Crude Price (ICP), terdapat dua faktor eksternal lainnya yang sangat mempengaruhi penyesuaian harga BBM di dalam negeri, yaitu Mean of Platts Singapore (MOPS) dan nilai tukar rupiah terhadap dolar Amerika Serikat. MOPS, sebagai patokan harga minyak di kawasan Asia Tenggara, memiliki pengaruh signifikan terhadap perhitungan harga dasar BBM. Sebagaimana tertuang dalam Keputusan Menteri Energi dan Sumber Daya Mineral Nomor 245.K/MG.01/MEM.M/2022, formula harga dasar BBM mengacu pada rata-rata dalam perhitungan harga jual eceran jenis BBM umum jenis bensin dan minyak solar yang disalurkan melalui stasiun pengisian BBM umum dan/atau stasiun pengisian bahan bakar nelayan, penyesuaian harga BBM Pertamina mengacu pada rata-rata MOPS dalam periode tertentu.<sup>5</sup> Fluktuasi MOPS yang cenderung mengikuti pergerakan harga minyak mentah dunia akan berdampak langsung pada harga jual BBM dalam negeri. Selain itu, nilai tukar rupiah yang melemah terhadap dolar Amerika Serikat akan meningkatkan biaya impor minyak mentah, sehingga turut mendorong kenaikan harga BBM. Dapat disimpulkan bahwa harga BBM di Indonesia sangat sensitif terhadap pergerakan harga minyak dunia, fluktuasi nilai tukar, serta kebijakan pemerintah yang tercermin dalam formula harga dasar BBM.</p>

      <p><sup>6</sup>Persaingan dalam dunia usaha merupakan syarat mutlak (condition sine qua non) bagi terselenggaranya suatu perekonomian yang berorientasi pada pasar (market economy). Dalam konteks ini, kenaikan harga BBM akan mempengaruhi perusahaan migas swasta dalam banyak hal, salah satunya adalah adanya persaingan usaha dan persaingan tidak sehat. Dalam setiap persaingan terdapat dua unsur krusial, yaitu adanya dua pihak atau lebih yang berupaya untuk saling mengungguli dan adanya kehendak di antara mereka untuk mencapai tujuan yang sama. Kenaikan BBM tersebut memunculkan suatu bentuk persaingan di bidang ekonomi, yaitu persaingan usaha (business competition) yang berarti adanya persaingan antar penjual dalam "merebut" pembeli dan pangsa pasar.</p>

      <p>Sebenarnya peranan hukum dalam persaingan usaha adalah memastikan adanya persaingan yang sehat dan adil (fair competition) dan mencegah adanya persaingan tidak sehat (unfair competition). Hal ini perlu menjadi perhatian pemerintah karena peningkatan harga BBM akan mendorong laju inflasi dan akan meningkatkan risiko usaha. Jika hal ini tidak segera diselesaikan, usaha-usaha mikro akan terkena imbasnya pula. Apabila struktur pasar, dalam hal ini para perusahaan migas swasta mengalami persaingan usaha tidak sehat, maka konsumen akan sangat dirugikan.. Sebab, konsumen tidak dapat memilih produk dengan bebas dan memiliki posisi yang rentan terhadap produsen karena konsumen tidak memiliki bargain.</p>

      <p>Dampak subsidi BBM dalam sektor industri minyak terhadap perusahaan minyak gas dan swasta semakin kompleks akibat adanya ketidaktepatan sasaran dan ketidakjelasan regulasi. Kenaikan harga BBM mendorong konsumen untuk beralih ke BBM bersubsidi, yang seharusnya ditujukan untuk masyarakat berpenghasilan rendah sebagaimana tercantum dalam revisi Peraturan Presiden Nomor 191 Tahun 2014 Tentang Penyediaan, Pendistribusian, dan Harga Jual Eceran Bahan Bakar Minyak (Perpres 191/2014) mengenai pengaturan konsumen pengguna Jenis BBM Khusus Penugasan (JBKP) Pertalite dan Jenis BBM Tertentu (JBT) Solar. Peralihan ini menciptakan persaingan yang tidak sehat karena terjadi pergeseran permintaan yang mengurangi permintaan terhadap BBM non-subsidi.</p>

      <p>Ketidakjelasan regulasi mengenai kriteria penerima subsidi juga membuka celah untuk terjadinya penyelewengan, seperti penjualan BBM bersubsidi secara ilegal oleh pihak-pihak yang tidak berhak. Hal ini semakin memperburuk kondisi persaingan dan merugikan perusahaan swasta yang beroperasi sesuai dengan aturan. Selain itu, ketidakpastian mengenai kebijakan subsidi juga membuat perusahaan swasta enggan melakukan investasi jangka panjang. Perubahan kebijakan subsidi yang sering terjadi menciptakan ketidakstabilan pasar dan membuat perusahaan sulit memprediksi kondisi bisnis di masa depan yang berdampak terhadap profitabilitas perusahaan.</p>

      <h3>B. Pengaruh Pemberian Subsidi BBM terhadap Beban Anggaran Pendapatan dan Belanja Negara (APBN)</h3>
      <p>Harga BBM per agustus 2024 terus mengalami peningkatan, sehingga menyebabkan masyarakat merasa terbebani dengan kenaikan harga BBM tersebut. Meskipun Indonesia Crude Price/ICP meningkat, harga BBM bersubsidi tetap tidak berubah, sehingga tercipta ketimpangan dalam kebijakan ini. Situasi tersebut mendorong masyarakat beralih dari BBM non-subsidi ke BBM bersubsidi karena masyarakat merasa kesulitan menanggung harga BBM non-subsidi yang kian melambung. Akibatnya, semua lapisan masyarakat beralih menggunakan BBM bersubsidi, termasuk kelompok mampu seperti pemilik mobil pribadi dan kendaraan berplat merah. Ketimpangan dalam kebijakan ini menimbulkan tantangan baru bagi pemerintah dalam memastikan subsidi tepat sasaran, karena subsidi yang dinikmati oleh kelompok masyarakat mampu berpotensi membebani anggaran negara.</p>

      <p>Selain itu terjadi kebingungan di masyarakat, bahwasannya terjadi ketidakpastian yang disampaikan oleh pemerintah. Airlangga Hartanto, Menteri Koordinator Bidang Perekonomian menyatakan masih membahas mengenai pembelian BBM bersubsidi sejak 17 Agustus 2024. Sedangkan Luhut Binsar Panjaitan selaku Menteri Koordinasi bidang Kemaritiman dan Investasi Indonesia mengatakan bahwa pembelian BBM bersubsidi akan dibatasi mulai 17 Agustus. Langkah ini bertujuan untuk meningkatkan efisiensi untuk menambah penerimaan negara dan memastikan penyaluran subsidi BBM lebih tepat sasaran. Namun nyatanya kebijakan tersebut gagal dilaksanakan karena terjadi penolakan dari masyarakat, sebagai gantinya, pemerintah memutuskan untuk melakukan sosialisasi lebih intensif mengenai penyaluran subsidi BBM yang tepat sasaran yang direncanakan dimulai pada 1 September 2024. Ketidaktegasan pemerintah dalam menjalankan kebijakan menunjukkan bahwa pemerintah tidak serius dalam menghadapi isu tersebut.</p>

      <p>Lonjakan harga minyak global menyebabkan terpengaruhnya harga jual BBM di dalam negeri. Hal tersebut telah menambah tekanan pada anggaran subsidi dalam APBN terkait pemberian subsidi kepada masyarakat. Kebijakan subsidi dalam praktiknya tentu menimbulkan beberapa permasalahan. Salah satunya adalah penerima subsidi dan kompensasi BBM yang tidak tepat. Banyak dari golongan menengah ke atas yang mayoritas memanfaatkan subsidi BBM. Berdasarkan data yang diberikan oleh pertamina 60% masyarakat mampu atau yang masuk dalam golongan kaya ini mengonsumsi hampir 80% dari total konsumsi BBM bersubsidi. Sedangkan 40% masyarakat rentan dan miskin hanya mengonsumsi 20% dari total subsidi energi.<sup>7</sup> Hal tersebut tentu menimbulkan polemik bagi pemerintah mengenai pemanfaatan subsidi BBM. Karena disisi lain pada Perpres No. 191 Tahun 2014 tidak diatur secara detail mengenai pengguna yang berhak memanfaatkan BBM bersubsidi. Sehingga ini menimbulkan masalah tersendiri terhadap pemerintah maupun masyarakat. Pemerintah harus menanggung beban APBN yang terus bertambah.</p>

      <p>Pada 2022, Wakil Menteri Keuangan Suahasil Nazara menjelaskan bahwa peningkatan subsidi BBM menggeser anggaran APBN dari awalnya Rp502,4 triliun menjadi Rp698 triliun. Akibat dari kenaikan pemberian subsidi BBM selain menyebabkan defisit anggaran APBN juga menyebabkan kebijakan fiskal di Indonesia berpengaruh signifikan sehingga pemberian anggaran pada sektor lain ikut terdampak. Namun, jika pemerintah memangkas subsidi BBM dampaknya akan meluas. Kebijakan ini dapat menurunkan daya beli masyarakat karena harga BBM yang lebih tinggi akan membebani biaya hidup sehari-hari. Kenaikan harga BBM juga berpotensi memicu peningkatan biaya distribusi barang lain, sehingga memicu inflasi pada berbagai komoditas. Pada akhirnya lonjakan harga-harga ini dapat menekan perekonomian dan memperlambat pertumbuhan karena daya beli dan konsumsi masyarakat cenderung menurun.</p>

      <p><sup>8</sup>Beban subsidi merupakan suatu hal yang krusial bagi APBN negara. Terdapat banyak hal yang juga ikut mempengaruhi beban subsidi semakin berat. Salah satunya adalah kondisi Geopolitik dunia yang ikut serta berimplikasi pada beratnya beban subsidi yang ditanggung Oleh APBN. Salah satunya adalah kondisi geopolitik yang berimplikasi besar terhadap beban subsidi adalah adanya konflik Timur Tengah. Puncak konflik Timur-Tengah yang terjadi pada tahun 2024 telah berimplikasi pada kenaikan harga energi dunia<sup>9</sup>. Yang mana dalam situasi tersebut negara Timur Tengah merupakan salah satu produsen minyak dunia terbesar. Dengan adanya konflik antar negara, tentu hal ini akan menghambat distribusi perdagangan minyak dan mengganggu rantai perdagangan minyak dunia.</p>

      <p><sup>10</sup>Yang tentu hal ini kemudian juga mempengaruhi lonjakan harga minyak dunia. Data menunjukkan bahwa terjadi kenaikan harga dari yang semula pada bulan Mei tahun 2023 harga minyak terendah berada pada 63,70 USD/barel yang kemudian pada bulan September 2023 harga tertinggi minyak bumi berada pada 95,03 USD/barrel. Salah satu implikasi yang terlihat secara konkret adalah naiknya rasio inflasi global. Jika kemudian pemerintah tidak melakukan intervensi maka, akan mempengaruhi kondisi daya beli dalam masyarakat.</p>

      <p>Maka dari itu pemerintah Indonesia melalui mekanisme kebijakan fiskal nya mengeluarkan beberapa kebijakan untuk menekan laju inflasi Nasional. Salah satunya adalah melalui mekanisme subsidi dan kompensasi BBM. Pada kebijakan subsidi pemerintah memberikan dana melalui APBN kepada PT Pertamina, yang bertujuan agar harga BBM lebih murah dan bisa dijangkau oleh masyarakat secara umum<sup>11</sup>. Dan disisi lain pemerintah juga melakukan kompensasi terhadap BBM, yaitu dengan memberikan dana, atas kekurangan penerimaan badan usaha (PT Pertamina) yang disebabkan oleh diberlakukannya kebijakan pemerintah. yang mana pada dasarnya baik kebijakan subsidi dan kompensasi ini dirancang untuk meringankan beban ekonomi pada masyarakat, terutama sektor-sektor vital yang mempengaruhi hajat hidup masyarakat umum.</p>

      <p>Pada kebijakan ini, tentu dalam praktiknya berimplikasi pada kestabilan rasio inflasi Nasional. Dengan penerapan kebijakan ini, data menunjukkan bahwa rasio nasional relatif lebih stabil. Pada periode tahun 2024, data menunjukkan bahwa rata-rata inflasi berada pada angka 2,47 %. Angka tersebut dapat dikatakan relatif lebih stabil jika dibandingkan dengan beberapa negara lain yang berada di atas angka 4%<sup>12</sup>.</p>

      <p>Namun pada sisi lain juga hal ini kemudian berimplikasi pada beratnya beban subsidi BBM terhadap APBN. Pemerintah melakukan peningkatan anggaran subsidi dan kompensasi terhadap beberapa sektor energi utama salah satunya adalah dengan menaikkan subsidi sektor energi Total anggaran jika dianalisis,maka subsidi dan kompensasi lebih lebih besar dari anggaran 2024 yang sebesar Rp431,7 triliun dan sebesar Rp444,9 triliun pada 2023<sup>13</sup>.</p>

      <p>Akan tetapi pada praktiknya, secara umum Kebijakan yang dilakukan oleh pemerintah salah satunya yaitu menurunkan volume alokasi subsidi BBM pada RAPBN 2025.<sup>14</sup>Hal ini berdasarkan Siaran Pers Kementerian ESDM Nomor: 476.Pers/04/SJI/2024, yang mana terdapat penurunan beberapa objek subsidi BBM, yaitu Solar dan Minyak tanah. Pada APBN 2024, subsidi solar dialokasikan sebesar 19 juta Kiloliter, dan subsidi Minyak tanah dialokasikan sebesar 580.000 Kiloliter. Sedangkan pada RAPBN 2025 data menunjukkan bahwa terjadi penurunan alokasi volume subsidi BBM. Volume alokasi subsidi BBM jenis solar pada RAPBN sebesar 18,89 juta Kiloliter, yang mana terjadi penurunan sebesar 10.000 Kiloliter. Dan kemudian volume alokasi subsidi BBM jenis Minyak tanah pada RAPBN 2025 sebesar 525.000 Kiloliter, yang mana hal ini terjadi penurunan sebesar 65.000 Kiloliter.</p>

      <p>Pemerintah melakukan penurunan terhadap volume alokasi BBM. tetapi disisi lain, pemerintah belum juga segera melakukan pengesahan terhadap peraturan mengenai pembatasan secara lebih detail dalam pemanfaatan BBM bersubsidi.<sup>15</sup>Data menunjukkan bahwa mayoritas subsidi dan juga kompensasi BBM dimanfaatkan oleh golongan mampu. Jika hal ini tidak dibarengi oleh adanya peraturan yang mengatur secara detail mengenai pembatasan pemanfaatan BBM bersubsidi, tentu akan berimplikasi pada beban subsidi BBM yang ditanggung oleh APBN.</p>

      <p>Kebijakan yang telah diterapkan oleh pemerintah selama ini, terutama mengenai subsidi dan kompensasi BBM, utamanya terdapat pada Perpres No. 191 Tahun 2014. Yang mana, pada Perpres tersebut mengatur mengenai penyediaan, pendistribusian, dan harga jual eceran BBM. begitu juga pada Perpres yang mengakar pada Perpres No. 191 Tahun 2014 yaitu Perpres No. 43 Tahun 2018, Perpres No. 69 Tahun 2021, dan Perpres No. 117 Tahun 2021<sup>16</sup>. Pada Perpres tersebut sampai saat ini tidak ada yang mengatur secara detail mengenai kriteria khusus pembatasan penggunaan BBM bersubsidi. Berdasarkan berjalanya waktu selama ini, pengaturan mengenai pembatasan BBM bersubsidi masih dalam bentuk rencana yang masih dalam pembahasan. Jika kemudian pembatasan ini tidak segera dilakukan maka implikasi terhadap sektor lain akan terus berlangsung. Salah satunya adalah berkurangnya anggaran yang diterima oleh sektor-sektor vital dalam masyarakat, salah satunya adalah sektor kesehatan, pertahanan, dan juga perhubungan.</p>

      <h2>Penutup</h2>
      <h3>A. Kesimpulan dan Saran</h3>
      <p>Kebijakan subsidi BBM di Indonesia memiliki dampak yang signifikan terhadap berbagai sektor, terutama dalam industri minyak dan gas, serta keuangan negara. Sejak diterapkannya subsidi BBM, kebijakan ini bertujuan untuk menjaga kestabilan harga energi dan memastikan aksesibilitasnya bagi masyarakat, terutama yang berpendapatan rendah. Namun, ketidaktepatan sasaran dalam penyaluran subsidi ini, yang menyebabkan golongan mampu juga menikmati subsidi, memicu ketimpangan dan membebani anggaran negara. Selain itu, perubahan harga minyak dunia dan fluktuasi nilai tukar juga mempengaruhi harga BBM non-subsidi, yang berdampak pada perusahaan migas swasta yang harus menghadapi persaingan usaha yang semakin tidak sehat. Peralihan konsumen ke BBM bersubsidi dan ketidakjelasan regulasi semakin memperkeruh situasi, mengurangi kepercayaan investor, dan merugikan konsumen dalam jangka panjang.</p>

      <p>Di sisi lain, pemberian subsidi BBM menambah beban anggaran pendapatan dan belanja negara (APBN), terutama dengan meningkatnya konsumen BBM bersubsidi dari golongan mampu. Hal ini menyebabkan defisit anggaran yang semakin besar, serta menurunnya alokasi anggaran untuk sektor lain yang vital seperti apa yang terjadi pada tahun 2022. Kondisi ini memaksa pemerintah untuk mencari solusi, seperti pembatasan pembelian BBM bersubsidi, meskipun kebijakan tersebut menerima penolakan dari masyarakat. Kebijakan subsidi dan kompensasi BBM yang belum disertai peraturan rinci mengenai pembatasan konsumen menyebabkan ketidakseimbangan, yang semakin memberatkan APBN dan mengancam stabilitas ekonomi nasional, termasuk meningkatkan inflasi dan mengurangi daya beli masyarakat.</p>

      <p>Saran yang kemudian ada dari tulisan ini, yaitu pertama penulis menyarankan bahwa pemerintah selaku regulator dan pertamina selaku distributor, seyogyanya memberikan regulasi yang jelas berkenaan dengan kriteria penerima subsidi BBM yang jelas dan tegas. Hal ini diperlukan agar subsidi yang disalurkan kepada masyarakat tepat sasaran. Di sisi lain, hal ini dilakukan agar kemudian tercapai sebuah penghematan APBN. Hal ini dirasa perlu dilakukan , agar kemudan APBN dapat dialokasikan di sektor lain. Penggunaan teknologi tepat guna juga diperlukan untuk mem verifikasi kelayakan penerima subsidi, yang mana kriteria yang kemudian dapat diimplementasikan yaitu kriteria penghasilan terintegrasi secara digital. Karena hal ini penting dilakukan demi mencegah penyalahgunaan subsidi BBM.</p>

      <p>Yang kedua, yaitu berkenaan dengan Transparansi dan pengawasan. Pemerintah selaku regulator, perlu melakukan pengawasan secara ketat dan tegas terhadap pemanfaatan BBM bersubsidi. Hal ini dirasa perlu dilakukan karena dengan adanya transparansi dan pengawasan secara tegas terhadap penggunaan BBM bersubsidi, maka tujuan dari dialokasikan subsidi BBM dapat tercapai. Hal ini tentu bisa diimplementasikan. Dengan menyesuaikan perkembangan teknologi. Penerapan yang kemudian perlu dikembangkan yaitu berkenaan dengan pengawasan secara terintegrasi menggunakan baik chip yang ditanam maupun kamera pengawas yang dilengkapi oleh Face Recognition.</p>

      <p>Yang ketiga, berkenaan dengan Diversifikasi Sumber Daya Alam. Hal ini dirasa perlu diimplementasikan karena hal ini berkaitan dengan masalah ketergantungan negara terhadap sumber daya yang tidak terbarukan. Maka dari itu pemerintah perlu melakukan percepatan transmisi energi ke energi terbarukan dan tersedia melimpah dalam negara ini, seperti tenaga surya, tenaga panas bumi, dan tenaga gelombang air. Yang kemudian hal ini dapat dimanfaatkan untuk sumber energi listrik sebagai penyokong kendaraan berbasis listrik.</p>

      <p>Yang keempat, yaitu berkenaan dengan penyusunan kebijakan Fiskal. Hal ini dirasa perlu diimplementasikan oleh pemerintah, pemerintah seyogianya mempertimbakan dampak kebijakan alokasi subsidi BBM terhadap keadaan APBN secara komprehensif. Hal ini dilakukan agar kemudian tidak terjadi signifikansi terhadap situasi ekonomi negara, yang tentu berkaitan dengan rasio inflasi yang perlu diperhatikan oleh pemerintah secara khusus.</p>

      <h2>DAFTAR PUSTAKA</h2>
      <p>Tambunan, N., Aprilia, S., & Pangesti Rahayu, N. (2022). Study literature: Dampak Kenaikan BBM Bagi Perekonomian Rakyat. <em>SIBATIK JOURNAL: Jurnal Ilmiah Bidang Sosial, Ekonomi, Budaya, Teknologi, Dan Pendidikan</em>, 2(1), 329–336. <a href="https://doi.org/10.54443/sibatik.v2i1.550" target="_blank">https://doi.org/10.54443/sibatik.v2i1.550</a></p>

      <p>Sarbaini, S., & Nazaruddin, N. (2023). Pengaruh kenaikan BBM Terhadap Laju inflasi di Indonesia. <em>Jurnal Teknologi Dan Manajemen Industri Terapan</em>, 2(I), 25–32. <a href="https://doi.org/10.55826/tmit.v2ii.132" target="_blank">https://doi.org/10.55826/tmit.v2ii.132</a></p>

      <p>Kurniawan, R., & Amir, H. <em>Aspek Fiskal Bisnis Hulu Migas</em>. Jakarta: PT Nagakusuma Media Kreatif. ISBN: 978-602-1379-46-2. <a href="https://fiskal.kemenkeu.go.id/files/buku/file/Aspek_Fiskal_Bisnis_Hulu_Migas.pdf" target="_blank">https://fiskal.kemenkeu.go.id/files/buku/file/Aspek_Fiskal_Bisnis_Hulu_Migas.pdf</a></p>

      <p>Amariski, Dhaneta. (2010). <em>Analisa Hukum Kebijakan Penetapan Harga Bahan Bakar Minyak (BBM) di Indonesia dalam Perspektif Hukum Persaingan Usaha</em>. (Tesis Magister, Universitas Indonesia). <a href="https://lib.ui.ac.id/file?file=digital/2016-9/20270250-T37542-Dhaneta%20Amariski.pdf" target="_blank">https://lib.ui.ac.id/file?file=digital/2016-9/20270250-T37542-Dhaneta%20Amariski.pdf</a></p>

      <p>Bank Indonesia. 2022. "Data Inflasi." Bi.go.id. 2022. <a href="https://www.bi.go.id/id/statistik/indikator/data-inflasi.aspx" target="_blank">https://www.bi.go.id/id/statistik/indikator/data-inflasi.aspx</a>.</p>

      <p>"Minyak Mentah WTI Berjangka." 2023. <em>id.investing.com</em>. May 1, 2023. <a href="https://id.investing.com/commodities/crude-oil" target="_blank">https://id.investing.com/commodities/crude-oil</a>.</p>

      <p>Qonita Azzahra, and Fadrik Aziz Firdausi. 2024. "Alokasi Subsidi & Kompensasi Dalam RAPBN 2025 Capai Rp525 T." <em>Tirto.id</em>. Tirto.id. August 16, 2024. <a href="https://tirto.id/alokasi-subsidi-kompensasi-dalam-rapbn-2025-capai-rp525-t-g2MZ" target="_blank">https://tirto.id/alokasi-subsidi-kompensasi-dalam-rapbn-2025-capai-rp525-t-g2MZ</a>.</p>

      <p>Sarbaini, Sarbaini, and Nazaruddin Nazaruddin. 2023. "Pengaruh Kenaikan BBM Terhadap Laju Inflasi Di Indonesia." <em>Jurnal Teknologi Dan Manajemen Industri Terapan</em> 2 (I): 25–32. <a href="https://doi.org/10.55826/tmit.v2iI.132" target="_blank">https://doi.org/10.55826/tmit.v2iI.132</a>.</p>

      <p>Wuryandani, Dewi, and Muhammad Zulfikar Emir Zanggi. 2024. "MANFAAT DAN TANTANGAN PENGATURAN BBM BERSUBSIDI." <em>Info Singkat</em> XVI (No. 17/I/Pusaka/September/2024): 17. <a href="https://berkas.dpr.go.id/pusaka/files/info_singkat/Info%20Singkat-XVI-17-I-P3DI-September-2024-206.pdf" target="_blank">https://berkas.dpr.go.id/pusaka/files/info_singkat/Info%20Singkat-XVI-17-I-P3DI-September-2024-206.pdf</a>.</p>

      <p>Peraturan Presiden Nomor 191 Tahun 2014: Indonesia. <em>Peraturan Presiden Republik Indonesia Nomor 191 Tahun 2014 tentang Penyediaan, Pendistribusian, dan Harga Jual Eceran Bahan Bakar Minyak</em>. Lembaran Negara Republik Indonesia Tahun 2014 Nomor 389.</p>

      <p>Peraturan Presiden Nomor 43 Tahun 2018: Indonesia. <em>Peraturan Presiden Republik Indonesia Nomor 43 Tahun 2018 tentang Perubahan atas Peraturan Presiden Nomor 191 Tahun 2014 tentang Penyediaan, Pendistribusian, dan Harga Jual Eceran Bahan Bakar Minyak</em>. Lembaran Negara Republik Indonesia Tahun 2018 Nomor 88.</p>

      <p>Peraturan Presiden Nomor 69 Tahun 2021: Indonesia. <em>Peraturan Presiden Republik Indonesia Nomor 69 Tahun 2021 tentang Perubahan Kedua atas Peraturan Presiden Nomor 191 Tahun 2014 tentang Penyediaan, Pendistribusian, dan Harga Jual Eceran Bahan Bakar Minyak</em>. Lembaran Negara Republik Indonesia Tahun 2021 Nomor 169.</p>

      <p>Peraturan Presiden Nomor 117 Tahun 2021: Indonesia. <em>Peraturan Presiden Republik Indonesia Nomor 117 Tahun 2021 tentang Perubahan Ketiga atas Peraturan Presiden Nomor 191 Tahun 2014 tentang Penyediaan, Pendistribusian, dan Harga Jual Eceran Bahan Bakar Minyak</em>. Lembaran Negara Republik Indonesia Tahun 2021 Nomor 274.</p>

      <h2>Foot note</h2>
      <p><sup>1</sup> Amariski, Dhaneta. "Analisa Hukum Kebijakan Penetapan Harga Bahan Bakar Minyak (BBM) di Indonesia dalam Perspektif Hukum Persaingan Usaha". lib.ui.ac.id.</p>
      <p><sup>2</sup> Agungnoe. Pakar UGM Bicara Harga BBM di Tengah Konflik Iran-Israel. <a href="https://ugm.ac.id/id/berita/pakar-ugm-bicara-harga-bbm-di-tengah-konflik-iran-israel/" target="_blank">https://ugm.ac.id/id/berita/pakar-ugm-bicara-harga-bbm-di-tengah-konflik-iran-israel/</a> (diakses pada 18 November 2024)</p>
      <p><sup>3</sup> Simbolon, Huyogo. "Sejarah Subsidi BBM di Indonesia Sejak Era Sukarno hingga Kini." <a href="https://www.liputan6.com/regional/read/5058328/sejarah-subsidi-bbm-di-indonesia-sejak-era-sukarno-hingga-kini?page=3" target="_blank">https://www.liputan6.com/regional/read/5058328/sejarah-subsidi-bbm-di-indonesia-sejak-era-sukarno-hingga-kini?page=3</a> (diakses pada 30 Oktober 2024)</p>
      <p><sup>4</sup> <a href="https://www.tempo.co/iklan/sejarah-subsidi-bbm-sejak-era-presiden-sukarno-hingga-kini-303279" target="_blank">https://www.tempo.co/iklan/sejarah-subsidi-bbm-sejak-era-presiden-sukarno-hingga-kini-303279</a> (diakses pada 30 Oktober 2024)</p>
      <p><sup>5</sup> Firda Dwi Muliawati. "Harga BBM Non Subsidi Naik, Ternyata Ini Alasannya"</p>
      <p><sup>6</sup> Amariski, Dhaneta. "Analisa Hukum Kebijakan Penetapan Harga Bahan Bakar Minyak (BBM) di Indonesia dalam Perspektif Hukum Persaingan Usaha". lib.ui.ac.id.a.</p>
      <p><sup>7</sup> Pertamina, "Subsidi BBM Dinikmati 60 Persen Orang Kaya, Pertamina Upayakan Mekanisme Pendaftaran," Pertamina, diakses 18 November 2024, <a href="https://www.pertamina.com/id/news-room/news-release/subsidi-bbm-dinikmati-60-persen-orang-kaya-pertamina-upayakan-mekanisme-pendaftaran" target="_blank">https://www.pertamina.com/id/news-room/news-release/subsidi-bbm-dinikmati-60-persen-orang-kaya-pertamina-upayakan-mekanisme-pendaftaran</a>.</p>
      <p><sup>8</sup> Azzahra, Qonita. Alokasi Subsidi & Kompensasi dalam RAPBN 2025 Capai Rp525 T.</p>
      <p><sup>9</sup> "Minyak Mentah WTI Berjangka – Jan '25 (CLF5)," Investing.com, diakses 30 Oktober 2024, <a href="https://id.investing.com/commodities/crude-oil" target="_blank">https://id.investing.com/commodities/crude-oil</a></p>
      <p><sup>10</sup> <a href="https://id.investing.com/commodities/crude-oil" target="_blank">https://id.investing.com/commodities/crude-oil</a> (diakses pada 30 Oktober 2024)</p>
      <p><sup>11</sup> Sarbaini, Sarbaini, dan Nazaruddin Nazaruddin, "Pengaruh Kenaikan BBM Terhadap Laju Inflasi Di Indonesia," <em>Jurnal Teknologi dan Manajemen Industri Terapan</em> 2, no. 1 (2023): 25–32, <a href="https://doi.org/10.55826/tmit.v2iI.132" target="_blank">https://doi.org/10.55826/tmit.v2iI.132</a>.</p>
      <p><sup>12</sup> Bank Indonesia, "Data Inflasi," diakses 30 Oktober 2024, <a href="https://www.bi.go.id/id/statistik/indikator/data-inflasi.aspx" target="_blank">https://www.bi.go.id/id/statistik/indikator/data-inflasi.aspx</a>.</p>
      <p><sup>13</sup> "Alokasi Subsidi & Kompensasi dalam RAPBN 2025 Capai Rp525 T," <em>Tirto.id</em>, 16 Agustus 2024, <a href="https://tirto.id/alokasi-subsidi-kompensasi-dalam-rapbn-2025-capai-rp525-t-g2MZ" target="_blank">https://tirto.id/alokasi-subsidi-kompensasi-dalam-rapbn-2025-capai-rp525-t-g2MZ</a>.</p>
      <p><sup>14</sup> Pusat Analisis Keparlemenan DPR RI, <em>Info Singkat:</em> Manfaat dan Tantangan Pengaturan BBM Bersubsidi, vol. XVI, no. 17/I/P3DI, September 2024, <a href="https://berkas.dpr.go.id/pusaka/files/info_singkat/Info%20Singkat-XVI-17-I-P3DI-September-2024-206.pdf" target="_blank">https://berkas.dpr.go.id/pusaka/files/info_singkat/Info%20Singkat-XVI-17-I-P3DI-September-2024-206.pdf</a>.</p>
      <p><sup>15</sup> <a href="https://www.esdm.go.id/id/media-center/arsip-berita/masyarakat-mampu-lebih-banyak-nikmati-bbm-subsidi" target="_blank">https://www.esdm.go.id/id/media-center/arsip-berita/masyarakat-mampu-lebih-banyak-nikmati-bbm-subsidi</a> (diakses pada 30 Oktober 2024)</p>
      <p><sup>16</sup> Presiden Republik Indonesia, <em>Peraturan Presiden Nomor 191 Tahun 2014 tentang Penyediaan, Pendistribusian, dan Harga Jual Eceran Bahan Bakar Minyak</em>, sebagaimana telah diubah dengan Peraturan Presiden Nomor 43 Tahun 2018, Peraturan Presiden Nomor 69 Tahun 2021, dan Peraturan Presiden Nomor 117 Tahun 2021.</p>
    `,
    tags: ["Subsidi BBM", "Energy Policy", "Government Policy", "Economic Impact", "APBN", "Fuel Subsidy", "Indonesia"],
  },

  "hukum-kontrak-digital": {
    id: "hukum-kontrak-digital",
    title: "ASPEK HUKUM KONTRAK DIGITAL DALAM ERA EKONOMI DIGITAL",
    date: "Nov 05, 2024",
    category: "Company and Antitrust Competition",
    author: "Dr. Budi Prasetyo",
    readTime: "9 min read",
    excerpt: "Pembahasan mengenai tantangan dan peluang hukum kontrak dalam transaksi digital...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Digital Contract", "Digital Economy", "Contract Law", "Technology"],
  },

  "penerapan-dedolarisasi-asean-indonesia": {
    id: "penerapan-dedolarisasi-asean-indonesia",
    title: "Penerapan Dedolarisasi: Bagaimana Pengaruhnya Bagi ASEAN dan Indonesia?",
    date: "Nov 25, 2023",
    category: "International Trade",
    author: "BusinessLawCommunity",
    readTime: "10 min read",
    excerpt:
      "Analisis dampak penerapan dedolarisasi terhadap perekonomian ASEAN dan Indonesia dalam konteks perdagangan internasional...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Dedolarisasi", "ASEAN", "Indonesia", "Perdagangan Internasional"],
  },

  "tinjauan-yuridis-plagiasi-hak-cipta-hello-kuala-lumpur": {
    id: "tinjauan-yuridis-plagiasi-hak-cipta-hello-kuala-lumpur",
    title: 'Tinjauan Yuridis Plagiasi Hak Cipta: Kasus Lagu "Hello Kuala Lumpur"',
    date: "Nov 24, 2023",
    category: "Intellectual Property Rights",
    author: "BusinessLawCommunity",
    readTime: "8 min read",
    excerpt: "Pembahasan aspek hukum plagiasi dalam industri musik melalui studi kasus lagu Hello Kuala Lumpur...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Hak Cipta", "Plagiasi", "Musik", "Intellectual Property"],
  },

  "peran-lmkn-royalti-hak-cipta": {
    id: "peran-lmkn-royalti-hak-cipta",
    title: "Peran Lembaga Manajemen Kolektif Nasional (LMKN) dalam Menghimpun Royalti Hak Cipta",
    date: "Nov 24, 2023",
    category: "Intellectual Property Rights",
    author: "BusinessLawCommunity",
    readTime: "12 min read",
    excerpt: "Kajian peran LMKN dalam sistem pengelolaan royalti hak cipta di Indonesia...",
    content: `<p>Content will be added later...</p>`,
    tags: ["LMKN", "Royalti", "Hak Cipta", "Manajemen Kolektif"],
  },

  "peran-ojk-kejahatan-digital-perbankan": {
    id: "peran-ojk-kejahatan-digital-perbankan",
    title: "Peran OJK terhadap Kejahatan Digital Perbankan: Studi Kasus Serangan Siber Bank Syariah Indonesia",
    date: "Nov 24, 2023",
    category: "Finance and Banking",
    author: "BusinessLawCommunity",
    readTime: "15 min read",
    excerpt:
      "Analisis peran OJK dalam menangani kejahatan digital di sektor perbankan dengan fokus pada kasus Bank Syariah Indonesia...",
    content: `<p>Content will be added later...</p>`,
    tags: ["OJK", "Kejahatan Digital", "Perbankan", "Cyber Security"],
  },

  "pre-merger-notification-indonesia": {
    id: "pre-merger-notification-indonesia",
    title: "Adopting Pre-Merger Notification to Achieve Legal Certainty and Efficiency in Indonesia",
    date: "Nov 24, 2023",
    category: "Company and Antitrust Competition",
    author: "BusinessLawCommunity",
    readTime: "11 min read",
    excerpt:
      "Pembahasan implementasi pre-merger notification untuk mencapai kepastian hukum dan efisiensi di Indonesia...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Merger", "Competition Law", "Legal Certainty", "Indonesia"],
  },

  "perdagangan-karbon-bursa-net-zero": {
    id: "perdagangan-karbon-bursa-net-zero",
    title: "Perdagangan Karbon melalui Bursa Karbon: Langkah Awal menuju Cita Net Zero Emission di Indonesia",
    date: "Nov 24, 2023",
    category: "Energy and Mineral Resources",
    author: "BusinessLawCommunity",
    readTime: "13 min read",
    excerpt: "Analisis perdagangan karbon melalui bursa karbon sebagai strategi mencapai target net zero emission...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Perdagangan Karbon", "Net Zero", "Environmental Law", "Bursa Karbon"],
  },

  "pembatasan-perdagangan-nikel-indonesia": {
    id: "pembatasan-perdagangan-nikel-indonesia",
    title: "Pembatasan Perdagangan Nikel di Indonesia: Dampak dan Implikasinya",
    date: "Nov 24, 2023",
    category: "International Trade",
    author: "BusinessLawCommunity",
    readTime: "9 min read",
    excerpt:
      "Kajian dampak dan implikasi pembatasan perdagangan nikel terhadap ekonomi Indonesia dan perdagangan internasional...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Nikel", "Perdagangan Internasional", "Mining Law", "Export Ban"],
  },

  "perspektif-hukum-penutupan-kode-broker": {
    id: "perspektif-hukum-penutupan-kode-broker",
    title: "Perspektif Hukum Terhadap Implikasi Kebijakan Penutupan Kode Broker Oleh Bursa Efek Indonesia",
    date: "Nov 24, 2023",
    category: "Capital Market Law",
    author: "BusinessLawCommunity",
    readTime: "10 min read",
    excerpt: "Analisis hukum terhadap kebijakan penutupan kode broker dan dampaknya terhadap pasar modal Indonesia...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Broker", "Bursa Efek", "Capital Market", "Securities Law"],
  },

  "qris-fraud-kejahatan-transaksi-elektronik": {
    id: "qris-fraud-kejahatan-transaksi-elektronik",
    title: "QRIS Fraud: Langkah – Langkah Menghindari Kejahatan Transaksi Elektronik",
    date: "Nov 24, 2023",
    category: "Finance and Banking",
    author: "BusinessLawCommunity",
    readTime: "7 min read",
    excerpt: "Panduan mencegah fraud dalam sistem pembayaran QRIS dan perlindungan hukum bagi konsumen...",
    content: `<p>Content will be added later...</p>`,
    tags: ["QRIS", "Fraud", "Digital Payment", "Consumer Protection"],
  },

  "piercing-corporate-veil-parent-subsidiary": {
    id: "piercing-corporate-veil-parent-subsidiary",
    title:
      "Piercing the Corporate Veil: Penyingkap Batas Pertanggungjawaban Parent Company terhadap Kepailitan Subsidiary Company",
    date: "Nov 24, 2023",
    category: "Company and Antitrust Competition",
    author: "BusinessLawCommunity",
    readTime: "14 min read",
    excerpt:
      "Pembahasan konsep piercing the corporate veil dalam konteks pertanggungjawaban perusahaan induk terhadap anak perusahaan...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Corporate Veil", "Parent Company", "Subsidiary", "Bankruptcy"],
  },

  "evaluasi-program-smelter-pertambangan": {
    id: "evaluasi-program-smelter-pertambangan",
    title:
      "Evaluasi Program Penghiliran Melalui Pembangunan Smelter pada Undang-Undang Pertambangan Mineral dan Batubara",
    date: "Nov 25, 2024",
    category: "Energy and Mineral Resources",
    author:
      "Glenn Bintang Hartawan Sinaga, Fikry Farhan Amin, Mutiara Salsabila Fitriana, Mariana Sri Rahayu Yohana Silaban",
    readTime: "20 min read",
    excerpt:
      "Evaluasi komprehensif implementasi program penghiliran melalui pembangunan smelter dalam industri pertambangan Indonesia, dampak positif dan negatifnya...",
    content: `
      <h2>Pendahuluan</h2>
      <p>Indonesia sebagai negara kaya akan sumber daya mineral, memiliki potensi besar untuk meningkatkan nilai tambah dari sektor pertambangan melalui proses hilirisasi. Hilirisasi berasal dari dua kata yaitu "hilir" dan "-isasi" yang memiliki arti suatu perkembangan industri penghasil bahan baku (industri hulu) yang kemudian menjadi industri yang mengolah bahan baku menjadi bahan jadi (industri hilir).</p>

      <p>Pelaksanaan penghiliran termuat pada Pasal 102 dan 103 Undang-Undang Nomor 4 Tahun 2009 tentang Pertambangan Mineral dan Batubara (UU Minerba) yang pada intinya menjelaskan pemegang Izin Usaha Pertambangan atau IUP dan Izin Usaha Pertambangan Khusus atau IUPK wajib meningkatkan nilai tambah sumber daya mineral dan atau batubara dengan cara pengolahan maupun pemurnian.</p>

      <p>Ada banyak manfaat dalam pelaksanaan ini, seperti hilirisasi (smelter) untuk nikel, bauksit, dan tembaga yang telah meningkatkan pendapatan negara Rp 158 triliun selama 8 tahun terakhir, membuka lapangan kerja, termasuk pengambilalihan korporasi sektor ekstraktif yang dikuasai asing. Tetapi, pasca politik hukum pertambangan pasca perubahan UU Minerba, termasuk UU Cipta Kerja, justru semakin memperbesar risiko korupsi di sektor tambang.</p>

      <h2>Efektivitas Pelaksanaan Program Penghiliran melalui Pembangunan Smelter</h2>
      <p>Hilirisasi lahir sebagai kerangka kelanjutan kinerja ekonomi melalui pemanfaatan maksimal sumber daya dalam negeri secara berkesinambungan. Sejak tahun 2011, Indonesia telah menerapkan strategi pembangunan ekonomi melalui Peraturan Presiden tentang Masterplan Percepatan dan Perluasan Pembangunan Ekonomi Indonesia 2011-2025 (Perpres tentang MP3EI).</p>

      <p>Berdasarkan Pasal 102 Undang-Undang Nomor 3 Tahun 2020 tentang Pertambangan Mineral dan Batubara: "Pemegang IUP dan IUPK wajib meningkatkan nilai tambah sumber daya mineral dan/atau batubara dalam pelaksanaan penambangan, pengolahan, pemurnian, serta pemanfaatan mineral dan batubara".</p>

      <h3>Fungsi dan Perizinan Smelter</h3>
      <p>Smelter berfungsi sebagai bentuk pembersihan atau peleburan bijih logam atau mineral mentah menjadi logam murni atau logam yang memenuhi kualitas yang maksimal sehingga mampu meningkatkan nilai tambah dari logam tersebut. Suatu perusahaan dapat membangun smelter apabila telah mempunyai Izin Usaha Pertambangan Operasi Produksi Khusus Pengolahan dan Pemurnian (IUP OPK Pengolahan dan Pemurnian).<sup>1</sup></p>

      <p>Mekanisme yang harus dilakukan oleh perusahaan pertambangan untuk memperoleh IUP OPK Pengolahan dan Pemurnian adalah:<sup>2</sup></p>
      <ol>
        <li>Melampirkan surat permohonan pengajuan IUP OPK Pengolahan dan Pemurnian</li>
        <li>Melengkapi keterangan dalam formulir pengajuan IUP OPK Pengolahan dan Pemurnian</li>
        <li>Melengkapi checklist dokumen permohonan pengajuan IUP OPK Pengolahan dan Pemurnian</li>
      </ol>

      <h2>Implikasi dan Evaluasi Program Penghiliran</h2>
      <p>Program Penghiliran melalui pembangunan smelter memiliki implikasi terhadap kehidupan masyarakat Indonesia dari berbagai aspek, seperti aspek ekonomi, sosial, maupun lingkungan. Program ini bagaikan pedang bermata dua karena dampak yang ditimbulkan tidak hanya berupa dampak positif, melainkan juga dampak negatif.</p>

      <h3>Dampak Positif</h3>
      <ol>
        <li><strong>Investasi Besar:</strong> Berdasarkan laporan dari Kementerian Investasi/Badan Koordinasi Penanaman Modal Republik Indonesia, investasi yang masuk untuk mendukung program hilirisasi selama tahun 2023 mencapai Rp. 375,4 Triliun.<sup>3</sup></li>
        
        <li><strong>Penyerapan Tenaga Kerja:</strong> Program Pembangunan Smelter oleh PT Virtue Dragon Nickel Industry (VDNI) di Kawasan Industri Morosi, Kabupaten Konawe, Sulawesi Tenggara menyerap tenaga kerja sebesar 42% dari Kabupaten Konawe, 16% dari luar Kabupaten Konawe tetapi masih dari Sulawesi Utara, dan 41% dari luar Provinsi Sulawesi Utara.<sup>4</sup></li>
        
        <li><strong>Ketahanan Energi:</strong> Indonesia cenderung akan mulai menghentikan pemasaran produk raw materials yang bukan lagi bertumpu pada konsumsi domestik, namun perlahan bertumpu pada produksi domestik. Hasil tembaga dari smelter akan menjadi salah satu bahan utama ekosistem kendaraan listrik (electric vehicle ecosystem).</li>
        
        <li><strong>Kawasan Ekonomi Khusus (KEK):</strong> Pembangunan program smelter beriringan dengan dibentuknya KEK yang bertujuan menciptakan lingkungan yang kondusif bagi investasi, ekspor, dan kegiatan perdagangan.</li>
        
        <li><strong>Kerja Sama Pemerintah-Swasta:</strong> Meningkatnya kerja sama antara sektor pemerintah dan swasta melalui pemberian berbagai insentif fiskal dan non fiskal, kemudahan perizinan, serta penyediaan infrastruktur yang memadai.</li>
      </ol>

      <h3>Dampak Negatif</h3>
      <ol>
        <li><strong>Keuntungan untuk Pihak Asing:</strong> Program hilirisasi ternyata lebih menguntungkan pihak asing sebagai investor,<sup>6</sup> sehingga perkuatan ekonomi yang ingin dicapai justru menjadi bumerang bagi negara.</li>
        
        <li><strong>Peningkatan Kemiskinan:</strong> Menurut data dari Badan Pusat Statistik (BPS) angka kemiskinan di wilayah sekitar smelter nikel cenderung meningkat. Di Sulawesi Tengah, angka kemiskinan meningkat dari 12,30% menjadi 12,41% dalam periode September 2022-2023.<sup>7</sup></li>
        
        <li><strong>Dampak Lingkungan:</strong> Proses pengolahan bijih mineral yang berlangsung di dalam smelter akan menghasilkan emisi gas yang dapat mempengaruhi kualitas udara dan menyebabkan polusi. Limbah cair yang dihasilkan juga dapat mencemari ekosistem air.<sup>8</sup></li>
        
        <li><strong>Ketimpangan Sosial:</strong> Pembangunan smelter tidak membantu banyak untuk mengatasi persoalan ketimpangan sosial karena manfaat dan keuntungannya tidak dibagikan secara merata kepada masyarakat.<sup>9</sup></li>
      </ol>

      <h3>Evaluasi yang Diperlukan</h3>
      <p>Pemerintah perlu melakukan evaluasi terkait dampak negatif yang ditimbulkan dari pembangunan smelter dan melihat apakah dampak negatif tersebut setara dengan manfaat yang diberikan. Kepatuhan terhadap regulasi dan pengawasan yang dilakukan secara konstan juga merupakan salah satu hal yang perlu ditingkatkan.</p>

      <p>Pemerintah harus berani memberikan sanksi yang tegas kepada pihak-pihak yang melanggar aturan dalam proses pembangunan dan pengelolaan smelter. Pemerintah juga telah mendukung pembangunan smelter melalui bantuan berupa pengurangan bea keluar dan Tax Allowance bagi perusahaan tambang yang ingin membangun smelter.<sup>10</sup></p>

      <h2>Kesimpulan</h2>
      <p>Dalam pelaksanaan program penghiliran melalui pembangunan smelter memiliki implikasi terhadap kehidupan masyarakat Indonesia dari berbagai aspek. Program ini bagaikan pedang bermata dua karena dampak yang ditimbulkan negatif dan positif perlu untuk meminimalisir dampak negatif kepada masyarakat sehingga perlu diadakan evaluasi pada program tersebut.</p>

      <h3>Rekomendasi</h3>
      <ol>
        <li><strong>Pelibatan Komunitas Lokal:</strong> Melibatkan masyarakat dalam kegiatan pembangunan melalui sistem bagi hasil atau pembukaan lapangan pekerjaan bagi masyarakat sekitar yang terdampak.</li>
        
        <li><strong>Pemantauan dan Pelaporan secara Berkala:</strong> Pemantauan dan pelaporan secara berkala terhadap kemajuan proyek berdasarkan indikator kinerja utama sangat penting untuk menjaga transparansi.</li>
        
        <li><strong>Manajemen Proyek yang Efektif dan Terintegrasi:</strong> Pengurangan, pengelolaan, dan pengalihan risiko di sepanjang rantai proyek smelter dengan melibatkan perusahaan asuransi untuk memetakan situasi atau kondisi smelter secara menyeluruh.<sup>11</sup></li>
      </ol>

      <h2>Daftar Pustaka</h2>
      <p><sup>1</sup> Admin. "Izin Usaha Pertambangan Operasi Produksi Khusus (IUP-OPK) Pengolahan dan/atau Pemurnian." <a href="https://panji.co.id/31/izin-usaha-pertambangan-operasi-produksi-khusus-iup-opk-pengolahan-dan-atau-pemurnian/" target="_blank">PT Panji</a>, November 11, 2021.</p>
      
      <p><sup>3</sup> Mutia Farahdilla. "Dampak Positif Hilirisasi Industri bagi Penanaman Modal di Indonesia." <a href="https://dpmptsp.babelprov.go.id/content/dampak-positif-hilirisasi-industri-bagi-penanaman-modal-di-indonesia" target="_blank">DPMPTSP Provinsi Kepulauan Bangka Belitung</a>, Februari 24, 2024.</p>
      
      <p><sup>4</sup> KPPIP. "Hilirisasi Nikel untuk Penciptaan Lapangan Kerja di Daerah." <a href="https://kppip.go.id/berita/hilirisasi-nikel-untuk-penciptaan-lapangan-kerja-di-daerah/" target="_blank">KPPIP</a>, Desember 6, 2024.</p>
      
      <p><sup>8</sup> Patrick. "Sistem Pengelolaan dan Pembuangan Limbah Pertambangan." <a href="https://www.tanindo.net/limbah-pertambangan/" target="_blank">TANINDO</a>, 24 Februari, 2023.</p>
      
      <p><sup>11</sup> Marsh. "Smelters dan Pengelolaan Risiko." <a href="https://www.marsh.com/id/en/industries/mining/products/smelters-id.html" target="_blank">Marsh</a>, November 23, 2023.</p>
    `,
    tags: ["Smelter", "Mining", "Downstreaming", "Mineral Law", "Hilirisasi", "UU Minerba", "KEK"],
  },

  "tarif-impor-electric-vehicles": {
    id: "tarif-impor-electric-vehicles",
    title:
      "Pengenaan Tarif 100% terhadap Impor Electric Vehicles (EV) di lensa Perdagangan Internasional dan Perubahan Iklim",
    date: "Nov 25, 2024",
    category: "International Trade",
    author:
      "Nathan Radot Judika Parasian Sidabutar, Emilia Dennys Andhita Putri, Tiyara Alika Selia Kusuma, Erlangga Budi Ramadani",
    readTime: "15 min read",
    excerpt:
      "Analisis pengenaan tarif tinggi terhadap impor kendaraan listrik dalam konteks perdagangan internasional dan isu lingkungan, dampak proteksionisme dan efektivitas EV...",
    content: `
      <h2>Kebijakan Impor Electric Vehicles dalam Lensa Perdagangan Internasional</h2>
      <p>Tidak dapat dipungkiri bahwa kebijakan pengenaan tarif 100% terhadap impor Electric Vehicles (EV) yang diberlakukan oleh Kanada terhadap Cina menuai berbagai kontroversi, khususnya dalam kajian perdagangan internasional. Dalam dunia perdagangan internasional, kebijakan ini memiliki berbagai dampak dalam jumlah yang tidak bisa dibilang sedikit.</p>

      <h3>Proteksionisme dalam Perdagangan Internasional</h3>
      <p>Proteksionisme merupakan sebuah kebijakan ekonomi yang membatasi perdagangan antarnegara melalui metode seperti pengenaan tarif terhadap barang impor, kuota restriktif, dan berbagai regulasi restriktif lainnya yang dikeluarkan oleh pemerintah yang dirancang untuk membatasi impor dan mencegah pengambilalihan pasar dan usaha domestik oleh entitas asing.<sup>1</sup></p>

      <p>Praktik proteksionisme pada hakikatnya cenderung memiliki konotasi yang negatif karena praktik ini mengarah pada kegiatan perdagangan internasional yang tidak sehat sehingga dapat menyebabkan perpecahan dalam pasar global. Dalam Pasal 20 The General Agreement on Tariffs and Trade 1943 (GATT) tentang Pengecualian Umum, WTO menegaskan bahwa restriksi-restriksi yang melibatkan pembatasan ekspor produk domestik tidak boleh dioperasikan dengan tujuan untuk meningkatkan ekspor atau sebagai bentuk perlindungan untuk industri domestik (proteksionisme).</p>

      <h3>Justifikasi Kanada</h3>
      <p>Pemerintah Kanada menjustifikasi tindakan pengenaan tarif 100% sebagai bentuk perlindungan negara terhadap pekerjaan dan investasi di wajah persaingan yang tidak adil.<sup>2</sup> Kanada menjelaskan bahwa kebijakan ini didasarkan pada praktik perdagangan internasional yang tidak adil oleh produsen Cina karena dianggap telah meraup keuntungan dari state-directed policy Cina mengenai kapasitas dan pasokan yang berlebih.</p>

      <h3>Konsekuensi Kebijakan Proteksionisme</h3>
      <p>Implikasi dari kebijakan terhadap kedua negara antara lain dapat menimbulkan:</p>
      <ol>
        <li>Putusnya hubungan bilateral antara Kanada dan Cina dan terjadinya perang dagang</li>
        <li>Gangguan terhadap pilihan konsumen dan menghambat pertumbuhan ekonomi</li>
        <li>Ketidakpastian kebijakan perdagangan</li>
      </ol>

      <p>Implikasi jangka panjang yang dapat ditimbulkan adalah terjadinya global-protectionism. Global-protectionism dapat menyebabkan menurunnya pendapatan riil global dan menimbulkan risiko berkurangnya pasokan barang dan jasa, khususnya bagi negara dengan skala ekonomi yang lebih kecil seperti Swedia.<sup>3</sup></p>

      <h3>Pelanggaran Prinsip Most Favored Nation (MFN)</h3>
      <p>Tindakan Kanada juga dapat dianggap telah melanggar prinsip Most Favored Nation (MFN). Berdasarkan Pasal 1 GATT, prinsip MFN mewajibkan anggota WTO untuk mengenakan segera dan tanpa syarat perlakuan yang sama bagi impor dan ekspor tanpa membeda-bedakan asal dan negara tujuan.<sup>4</sup></p>

      <p>Kanada telah mendiskriminasi Cina dengan mengenakan tarif 100% terhadap impor EV dari Cina namun di saat yang sama Kanada tidak menerapkannya pada negara lain seperti Amerika Serikat, Korea Selatan, dan Jepang.</p>

      <h3>Hambatan Inovasi dan Teknologi</h3>
      <p>Tindakan Kanada untuk melindungi pasar domestik berujung pada timbulnya beberapa dampak negatif, salah satunya hambatan dalam inovasi dan kemajuan teknologi. Tarif tinggi dapat menaikkan harga komponen dari Cina sehingga manufaktur dan pengembangan teknologi di Kanada dapat terhambat karena keterbatasan biaya.</p>

      <p>Dalam artikel yang ditulis oleh Federica, et al. (2022), liberalisasi perdagangan meningkatkan kualitas inovasi karena terbukanya akses ke pasar yang lebih luas dan berbagai teknologi canggih.<sup>5</sup> Sebaliknya, isolasi inovasi akan berdampak dengan pembatasan akses internasional.</p>

      <h3>Dampak terhadap Konsumen</h3>
      <p>Konsumen Kanada juga terdampak oleh kebijakan yang diberlakukan oleh pemerintahnya. Menurut ekonom Moshe Lander (2024), tarif ini juga memberi peluang bagi produsen domestik untuk turut serta menaikkan harga karena EV dari Cina menjadi jauh lebih mahal.<sup>6</sup> Alhasil, harga kendaraan listrik secara keseluruhan di Kanada dapat meningkat dan mengakibatkan berkurangnya aksesibilitas untuk kelompok masyarakat berpendapatan rendah.</p>

      <h2>Kebijakan Impor Electric Vehicles dalam Lensa Perubahan Iklim</h2>
      <p>Kebijakan tarif 100% terhadap electric vehicle yang ditetapkan Kanada dan negara-negara Eropa lain dalam kacamata ekonomi memang memiliki implikasi negatif terhadap sektor perdagangan internasional. Di sisi lain, terdapat perspektif yang mengatakan bahwa electric vehicle merupakan alternatif untuk menggantikan conventional vehicle yang dinilai menghasilkan emisi karbon dalam jumlah besar.</p>

      <h3>Efektivitas Elektrifikasi Transportasi</h3>
      <p>Menurut perspektif lingkungan, elektrifikasi kendaraan tidak akan efektif apabila tidak selaras dengan transformasi tenaga listrik yang menggunakan fosil ke tenaga listrik yang ramah lingkungan (air, angin, dll). Hal ini karena, apabila tenaga listrik yang digunakan dalam memproduksi dan menggunakan electric vehicle masih menggunakan fosil maka emisi karbon yang dihasilkan akan tetap sama atau bahkan lebih besar dari sebelumnya.</p>

      <h3>Fakta Emisi dari Produksi EV</h3>
      <p><strong>Pertama,</strong> proses produksi electric vehicle sendiri menghasilkan emisi karbon (CO₂). Data menunjukkan bahwa China menjadi penghasil emisi karbon dioksida (CO₂) terbesar pada tahun 2022 dan 2023 (Emissions Database for Global Atmospheric Research). Data lain juga menyatakan bahwa proses produksi electric vehicle di China baik hybrid, plug-in hybrid, maupun listrik berbasis baterai menghasilkan emisi gas yang lebih besar dibanding conventional vehicle yaitu sebesar 50% (Harvard University & Tsinghua University).</p>

      <p><strong>Kedua,</strong> pembuatan baterai electric vehicle yang berbasis listrik juga menghasilkan emisi karbon yang tinggi, terlebih lagi komponen baterai yang umumnya tersusun atas litium, kobalt, dan nikel menimbulkan masalah lingkungan baru. Bahan-bahan tersebut merupakan bahan yang tidak ramah lingkungan karena tidak mudah atau bahkan tidak dapat didaur ulang yang akan berdampak pada lingkungan sekitar.</p>

      <h3>Implementasi Paris Agreement</h3>
      <p>Kebijakan yang dilakukan Kanada adalah bentuk proteksi sektor perdagangan dalam rangka mendorong daya saing manufaktur domestik dan juga merupakan implementasi tujuan negara untuk mendorong transisi energi menggunakan produk domestik. Langkah ini merupakan salah satu upaya Kanada berpartisi dalam merealisasikan tujuan global dalam mengatasi climate change sebagaimana dimaksud dalam Paris Agreement.<sup>7</sup></p>

      <h3>Biaya Operasional EV dalam Jangka Panjang</h3>
      <p>Electric vehicle merupakan inovasi baru dalam bidang moda transportasi yang baru berkembang 10 tahun belakangan ini. Salah satu alasan yang membuat banyak orang beralih adalah biaya operasionalnya yang bisa dikatakan lebih murah. Dikutip dari situs berita Kompas.com, pengguna kendaraan listrik dapat menghemat biaya operasional mulai dari bahan bakar sampai ke biaya perawatannya.<sup>8</sup></p>

      <p>Menjadi berbeda ketika data biaya operasional yang digunakan merupakan data dalam interval waktu yang lebih lama. Kendaraan listrik memang tidak membutuhkan perawatan ekstra dan rutin untuk suku cadangnya, tetapi perawatan seperti mengganti suku cadang perlu dilakukan minimal setiap 5 (lima) tahun sekali. Untuk sekali pergantian suku cadang baterai kendaraan listrik, diperlukan biaya sebesar kurang lebih 70 juta.</p>

      <h2>Kesimpulan</h2>
      <p>Kebijakan Kanada dan negara-negara Eropa lain menerapkan tarif 100% bagi electric vehicle produksi China memang tidak bisa dibenarkan, dilihat dari perspektif perdagangan internasional praktik proteksionisme semacam ini berpotensi menimbulkan konflik perdagangan (perang dagang) antarnegara bahkan berpotensi merusak hubungan diplomatik antarnegara.</p>

      <p>Namun di sisi lain electric vehicle ternyata memiliki implikasi negatif bagi lingkungan, dimana saat ini banyak negara yang masih menggunakan fosil sebagai tenaga pembangkit listrik atau dengan kata lain, negara-negara belum siap terhadap elektrifikasi kendaraan. Dari kasus ini dapat kita lihat bahwa kepentingan ekonomi berbenturan dengan kepentingan lingkungan.</p>

      <h3>Solusi yang Direkomendasikan</h3>
      <ol>
        <li><strong>Transisi Energi Listrik:</strong> Dunia internasional perlu melakukan transisi tenaga listrik yang awalnya bersumber dari fosil menjadi tenaga listrik yang bersumber dari bahan-bahan yang lebih ramah lingkungan (air, angin, matahari)</li>
        
        <li><strong>Peran Industri:</strong> Dalam memproduksi electric vehicle industri perlu memperhatikan aspek-aspek lingkungan, menggunakan bahan baku produksi baterai yang lebih ramah lingkungan</li>
        
        <li><strong>Peran Pemerintah:</strong> Menyediakan subsidi dan membangun infrastruktur yang dapat mengakomodasi penggunaan electric vehicle untuk mendukung elektrifikasi kendaraan</li>
        
        <li><strong>Kesadaran Masyarakat:</strong> Diperlukan kesadaran masyarakat internasional dalam rangka peralihan penggunaan conventional vehicle ke electric vehicle</li>
      </ol>

      <p>Dengan mempertimbangkan hal-hal tersebut, elektrifikasi kendaraan akan lebih efektif dan efisien serta kepentingan ekonomi dan juga lingkungan dapat berjalan bersamaan.</p>

      <h2>Daftar Pustaka</h2>
      <p><sup>1</sup> Regine Adele Ngono Fouda. "Protectionism and Free Trade: A Country's Glory or Doom?." <a href="https://www.ijtef.com/papers/226-CF312.pdf" target="_blank">International Journal of Trade, Economic and Finance</a> 3, no. 5 (October 2012): 351-355.</p>
      
      <p><sup>2</sup> Salim Zanzana. "Weighing the impact of Canadian tariffs on Chinese EVs and metals." <a href="https://thoughtleadership.rbc.com/weighing-the-impact-of-canadian-tariffs-on-chinese-evs-and-metals/" target="_blank">thoughtleadership.rbc.com</a></p>
      
      <p><sup>3</sup> Sveriges Riksbank. "The economic consequences of increased protectionism." <a href="https://www.riksbank.se/globalassets/media/rapporter/ppr/fordjupningar/engelska/2017/the-economic-consequences-of-increased-protectionism-article-in-monetary-policy-report-april-2017" target="_blank">www.riksbank.se</a></p>
      
      <p><sup>4</sup> PERTAPSI. "Apa Itu Most Favoured Nation (MFN)?" <a href="https://pertapsi.or.id/apa-itu-most-favoured-nation-mfn" target="_blank">pertapsi.or.id</a></p>
      
      <p><sup>6</sup> Rana Uday. "Tariffs on Chinese EVs are now in effect. What does that mean for Canadians?" <a href="https://globalnews.ca/news/10787673/canada-tariffs-chinese-evs/" target="_blank">globalnews.ca</a></p>
      
      <p><sup>7</sup> Emissions Database for Global Atmospheric Research. "GHG emissions of all world countries 2024 Report." <a href="https://edgar.jrc.ec.europa.eu/report_2024" target="_blank">edgar.jrc.ec.europa.eu</a></p>
      
      <p><sup>8</sup> Alinda Hardiantoro. "Biaya Mobil Listrik Vs Mobil BBM, Mana yang Lebih Hemat?" <a href="https://www.kompas.com/tren/read/2022/07/30/200500565/biaya-mobil-listrik-vs-mobil-bbm-mana-yang-lebih-hemat-?page=all" target="_blank">Kompas.com</a></p>
    `,
    tags: [
      "Electric Vehicles",
      "Import Tariff",
      "Climate Change",
      "Trade Policy",
      "Protectionism",
      "Canada",
      "China",
      "WTO",
    ],
  },

  "per-se-illegal-rule-of-reason": {
    id: "per-se-illegal-rule-of-reason",
    title: "Per Se Illegal dan Rule of Reason: Senjata Melawan Praktik Monopoli Perusahaan",
    date: "Nov 25, 2024",
    category: "Company and Antitrust Competition",
    author: "BusinessLawCommunity",
    readTime: "12 min read",
    excerpt: "Pembahasan dua pendekatan hukum persaingan usaha dalam menangani praktik monopoli perusahaan...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Per Se Illegal", "Rule of Reason", "Monopoly", "Competition Law"],
  },

  "optimalisasi-pasal-74-tanggung-jawab-sosial": {
    id: "optimalisasi-pasal-74-tanggung-jawab-sosial",
    title:
      "OPTIMALISASI IMPLEMENTASI PASAL 74 UU PT: TANGGUNG JAWAB SOSIAL DAN LINGKUNGAN SEBAGAI PILAR KEBERLANJUTAN PERUSAHAAN",
    date: "Nov 25, 2024",
    category: "Company and Antitrust Competition",
    author: "BusinessLawCommunity",
    readTime: "13 min read",
    excerpt:
      "Kajian optimalisasi implementasi tanggung jawab sosial dan lingkungan perusahaan berdasarkan Pasal 74 UU PT...",
    content: `<p>Content will be added later...</p>`,
    tags: ["CSR", "Corporate Law", "Sustainability", "Environmental Responsibility"],
  },

  "mekanisme-perlindungan-investor-manipulasi-pasar": {
    id: "mekanisme-perlindungan-investor-manipulasi-pasar",
    title: "Mekanisme Perlindungan Investor Terhadap Praktik Manipulasi Pasar Modal",
    date: "Nov 18, 2024",
    category: "Capital Market Law",
    author: "Muhammad Faisal Ramadhan, Zaidan Chanif Alfarizi, Joshua Bonatua Hutagaol",
    readTime: "12 min read",
    excerpt:
      "Analisis mekanisme perlindungan hukum bagi investor dalam menghadapi praktik manipulasi pasar modal, termasuk strategi menghindari saham gorengan dan peran regulator...",
    content: `
      <h2>Latar Belakang</h2>
      <p>Dunia pasar modal mengalami kemajuan yang sangat pesat pada abad ke-21 ini. Jika dahulu suatu individu atau suatu kelompok ingin membeli suatu perusahaan, maka mereka harus mendatangi kantor Bursa Efek Indonesia (BEI) untuk melakukan transaksi secara tatap muka. Keterbatasan ruang untuk menampung aktivitas perdagangan membuat beberapa nasabah harus menelepon sales/broker untuk melakukan transaksi saham yang ingin dibeli. Hal ini tentunya sangat berbeda 180° dibandingkan dengan dunia pasar saham saat ini. Kemajuan teknologi dan pesatnya digitalisasi membuat transaksi saham saat ini tidak harus dengan cara mendatangi kantor BEI. Proses transaksi saham di era saat ini bisa dilakukan di mana saja dengan mengakses aplikasi yang sudah disediakan oleh para broker saham. Hal ini tentunya sangat menguntungkan baik bagi pihak yang ingin membeli dan juga pihak yang ingin menjual saham.</p>

      <p>Kemajuan teknologi dalam bidang pasar saham juga berakibat pada munculnya banyak investor dan trader saham. Bagi para investor dan trader saham, dengan adanya digitalisasi pada pasar modal tentunya memberikan berbagai dampak positif dan dampak negatif. Dampak positif yang dirasakan adalah mudahnya melakukan transaksi saham yang mana hal tersebut dapat dilakukan di mana pun. Walau begitu, ada dampak negatif yang dihasilkan dari proses digitalisasi pasar saham yaitu meningkatnya fluktuasi instrumen saham dibandingkan dengan zaman dulu. Hal ini dikarenakan meningkatnya antusiasme investor pada pasar saham tersebut. Walaupun begitu, antusiasme investor pada bursa saham tidak selamanya baik karena beberapa dari mereka justru mengambil celah keuntungan dengan cara yang merugikan bagi pihak lainnya. Salah satu caranya adalah dengan menggoreng saham.</p>

      <p>Menggoreng saham adalah tindakan menaikkan atau menurunkan harga saham secara drastis yang biasa dilakukan oleh para "smart money", sebuah istilah yang biasa diberikan pada suatu kelompok individu yang menguasai banyak uang untuk menggerakkan harga saham. Tindakan ini mereka lakukan untuk mendapatkan keuntungan secara cepat dari selisih harga saham yang mereka gerakkan. Istilah yang sering digunakan untuk menjelaskan cara para "smart money" ini adalah Pump and Dump. Istilah Pump merujuk pada kegiatan para "smart money" yang melakukan akumulasi pada suatu saham yang mengakibatkan adanya kenaikan harga saham secara signifikan sedangkan istilah Dump merujuk pada kegiatan para "smart money" yang melakukan kegiatan distribusi atau menjual sepersekian porsi dari suatu saham yang dimilikinya kepada retail atau publik. Perlu digarisbawahi, kegiatan baik akumulasi maupun distribusi pada saham sebenarnya sah sah saja bagi para smart money, tetapi beberapa dari mereka ada yang memanipulasi pasar saham dengan melakukan cornering, yaitu kegiatan yang dilakukan oleh beberapa kelompok yang bertujuan untuk menaikkan atau menurunkan harga saham secara ilegal.</p>

      <p>Terdapat tiga fase dalam mekanisme cara kerja smart money atau bandar saham. Pertama, ialah fase akumulasi. Pada fase ini, biasanya beberapa bandar melakukan pembelian secara bertahap untuk menghindari adanya kecurigaan publik atau pemantauan khusus oleh BEI. Walaupun begitu, beberapa bandar mungkin saja ada yang melakukan akumulasi atau pembelian saham secara agresif. Tahap kedua adalah tahap partisipatif. Pada tahap ini, biasanya para bandar akan melakukan aktivitas menyebarkan berita baik tentang perusahaan yang dimilikinya kepada publik dengan harapan para publik akan membeli saham tersebut. Pada tahap ini biasanya harga saham akan melonjak tinggi karena para investor retail (individu yang melakukan pembelian saham dalam jumlah nominal kecil) merasa yakin untuk melakukan pembelian pada saham yang di pom-pom oleh bandar akibat dari berita bagus yang disebarkan tadi. Tahap yang terakhir adalah tahap distributif. Pada tahap ini, biasanya saham yang dipegang oleh bandar sudah naik terlalu tinggi atau sudah naik sesuai yang bandar inginkan sehingga para bandar pun menjual sahamnya kepada retail.</p>

      <p>Para bandar yang bergerak sebagai price maker biasanya mengincar saham yang harganya relatif rendah dan saham yang mempunyai market capitalization yang kecil. Hal ini dikarenakan harga saham yang rendah lebih mudah dijangkau para retail dan juga saham yang mempunyai market capital yang kecil dapat dengan mudah dikontrol harganya oleh para bandar. Selain itu, mereka juga biasanya mengincar saham IPO karena saham yang baru saja IPO biasanya mempunyai volume perdagangan yang tinggi terutama pada awal-awal peluncurannya.</p>

      <h2>Pembahasan</h2>
      <h3>Strategi Perlindungan investor</h3>
      <p>Saham Gorengan menjadi suatu saham yang dihindari oleh investor-investor. Hal ini dikarenakan terjadinya monopoli harga saham, pergerakan nilai saham yang tidak bisa ditebak, dan lain-lain. Untuk mencegah investasi atau pembelian saham gorengan, para investor harus memiliki strategi perlindungan terhadap hal tersebut. Ini merupakan beberapa Strategi perlindungan investor yang disarankan untuk menghindari pembelian saham gorengan:</p>

      <h4>A. Riset Fundamental yang Akan Dibeli</h4>
      <p>Dalam analisis saham terdapat analisis fundamental dan analisis teknikal. Analisis fundamental saham merupakan salah satu teknik untuk menyeleksi sekaligus menentukan baik atau buruknya suatu saham. Sebab, indikator fundamental saham meliputi kinerja perusahaan, persaingan antar perusahaan terkait di sektor pasar yang sama, analisis industri, hingga analisis ekonomi makro dan mikro.<sup>1</sup> Mengetahui hal-hal fundamental tentang perusahaan-perusahaan dapat menguntungkan investor ketika membeli saham. Dengan investor mengetahui hal-hal fundamental tentang prospek perusahaan ketika inverstor ingin membeli saham dapat dilakukan dengan objektif dan terhindar dari saham gorengan.</p>

      <h4>B. Mengetahui Informasi up to date</h4>
      <p>Informasi menjadi salah satu alat terpenting yang bisa digunakan oleh Investor. Mengetahui informasi up to date tidak hanya meminimalisir kerugian dari saham gorengan, melainkan ini dapat memberikan keunggulan insight kepada investor ketika sedang melakukan jual-beli saham. Selain dari itu, investor juga perlu menyaring informasi yang didapatkan. Penyaringan ini berfungsi untuk menghindari hoax yang tesebar di internet. Jangan tergoda untuk mengikuti rekomendasi investasi yang didasarkan pada sumber informasi yang tidak jelas atau tidak terverifikasi keabsahannya. Selalu periksa kebenaran informasi yang diterima melalui sumber-sumber terpercaya dan terverifikasi.<sup>2</sup></p>

      <h4>C. Diversifikasi Portofolio.</h4>
      <p>Diversifikasi portofolio dapat mengurangi kemungkinan investor untuk rugi pada saham tertentu. Diversifikasi portofolio adalah teknik pengurangan risiko investasi dengan melakukan investasi pada berbagai macam instrumen keuangan, industri, dan kategori.<sup>3</sup> Dengan memiliki lebih dari satu macam investasi dapat memberikan keseimbangan pada portofolio investor dan menghindari kerugian berlebih dari saham gorengan. Sebagai contoh, investor memiliki 3 macam saham A, B, dan C. C merupakan saham gorengan yang mengalami kerugian dapat di seimbangkan, jika saham A dan B mengalami kinerja yang bagus dalam pasar modal.</p>

      <h3>2. Peran Regulator (OJK/BEI)</h3>
      <p>Otoritas Jasa Keuangan (OJK) adalah lembaga negara yang berfungsi menyelenggarakan sistem pengaturan dan pengawasan yang terintegrasi terhadap seluruh kegiatan di dalam sektor jasa keuangan.<sup>4</sup> OJK memiliki tanggung jawab juga untk mengawasi pasar modal Indonesia. Pengawasan ini juga berkerjasama dengan Bursa Efek Indonesia (BEI) atau yang biasa disebut dengan Indonesia Stock Exchange (IDX). BEI kerap melakukan koomunikasi dengan OJK untuk memastikan pasar modal berjalan dengan wajar.</p>

      <p>Sejak tahun 2023 BEI berencana untuk melakukan tindak lanjut lebih dalam dari adanya saham gorengan. "BEI sendiri berencana untuk meluncurkan papan pemantauan khusus secara hybrid sebelum meluncurkan papan pemantauan khusus full call-auction." Papan Pemantauan Khusus terbagi menjadi dua tahapan, yaitu Hybrid Call Auction dan Periodic Call Auction. Hybrid Call Auction berfungsi sebagai tahap pencatatan yang terhadap saham yang masuk ke dalam kriteria pemantauan khusus. Periodic Call Auction adalah ketika saham sudah ditempatkan dalam kriteria pemantauan khusus. Harapannya dengan sistem ini pencatatan saham akan lebih jelas dan mudah untuk menentukan saham gorengan agar di tindaklanjuti.</p>

      <p>Berdasarkan analisis dalam artikel ini dapat simpulkan saham gorengan merupakan sesuatu yang melanggar hukum dan dapat merugikan banyak pihak. Oleh karena itu, diperlukannya hukum yang mengatur terhadap saham gorengan di Indonesia. Di Indonesia, peraturan terkini yang mengatur tentang saham gorengan terletak dalam UU Nomer 4 Tahun 2023 tentang pengembangan dan penguatan sektor keuangan. Pasal 22 angka 33 UU Nomor 4 Tahun 2023 yang mengubah Pasal 90 huruf b UU Pasar Modal mengatakan bahwa "Dalam kegiatan perdagangan Efek atau kegiatan pengelolaan investasi, setiap Pihak dilarang dengan sengaja baik secara langsung atau tidak langsung membuat pernyataan tidak benar mengenai Informasi atau Fakta Material atau tidak mengungkapkan fakta yang material dengan maksud:</p>
      <ol>
        <li>menguntungkan atau menghindarkan kerugian untuk diri sendiri atau Pihak lain;</li>
        <li>memengaruhi Pihak lain untuk membeli, menjual, atau menahan Efek; dan/atau</li>
        <li>memengaruhi Pihak lain untuk menggunakan jasanya guna mengelola investasi, dengan menyerahkan dana dan/atau Efek untuk dikelola."</li>
      </ol>

      <p>Dalam pasal ini tidak secara spesifik menyebutkan saham gorengan sebagai hal yang dilarang. Namun, ketika kita mencermati pasal tersebut saham gorengan memenuhi unsur-unsur yang ada. Pada prosesnya penjualan saham gorengan sering kali melibatkan praktik manipulasi harga melalui penyebaran informasi palsu atau menyesatkan untuk meningkatkan minat investor. Hal tersebut melanggar unsur delik tentang fakta material. Pentingnya adanya undang-undang yang berlaku seberti UU Nomer 4 Tahun 2023 bertujuan agar investor-investor mendapatkan perlindungan dari kerugian yang disebabkan oleh oknum-oknum yang memanipulasi pasar modal.</p>

      <h2>Kesimpulan</h2>
      <p>Perubahan teknologi telah mempermudah transaksi saham, tetapi juga meningkatkan fluktuasi harga. Praktik penggorengan saham, di mana para bandar manipulasi harga untuk keuntungan cepat, menjadi risiko utama. Prosesnya terdiri dari tiga tahap: akumulasi, partisipatif, dan distributif. Para bandar cenderung memilih saham dengan harga rendah, termasuk saham IPO. Oleh karena itu, meskipun teknologi memudahkan, investor perlu waspada terhadap manipulasi harga untuk melindungi investasi mereka. Selain itu, investor juga harus mengetahui dan memahami regulasi serta meningkatkan awareness terhadap praktik negatif penggorengan saham. Terutamanya menggunakan tiga hal, yaitu mempelajari strategi perlindungan investor, memahami peran regulator (OJK/BEI), dan mengenal hukum yang berlaku. Dengan demikian, diharapkan investor mampu menjalankan kegiatan dengan waspada dan dengan pengetahuan memadai sehingga tidak mengalami kegagalan.</p>

      <h2>Rekomendasi</h2>
      <p>Dengan latar belakang dan mekanisme yang diperlukan dalam menangani saham gorengan, maka terdapat hal yang disarankan kepada investor, khususnya investor pemula. Beberapa diantaranya yaitu:</p>
      <ol type="a">
        <li><strong>Edukasi dan Pemahaman:</strong> Investasi yang bijaksana membutuhkan pemahaman yang mendalam tentang mekanisme pasar modal dan perilaku investor.</li>
        <li><strong>Keterampilan Analisis:</strong> Investor perlu memperkuat keterampilan analisis dalam menilai nilai intrinsik saham sebelum berinvestasi. Pengetahuan yang komprehensif tentang kinerja keuangan perusahaan dapat membantu investor mengidentifikasi saham-saham dengan prospek pertumbuhan yang sehat.</li>
        <li><strong>Keterbukaan terhadap Informasi:</strong> Investasi yang berkelanjutan membutuhkan akses terhadap informasi yang akurat dan tepat waktu.</li>
        <li><strong>Diversifikasi Portofolio:</strong> Penting bagi investor untuk melakukan diversifikasi portofolio secara bijaksana. Dengan memiliki sejumlah saham yang beragam di berbagai sektor dan industri, investor dapat mengurangi risiko spesifik terkait dengan praktik penggorengan saham atau volatilitas pasar.</li>
        <li><strong>Pengawasan Regulator:</strong> Peran otoritas pasar modal, seperti Otoritas Jasa Keuangan (OJK) dan Bursa Efek Indonesia (BEI), dalam memperkuat regulasi dan pengawasan pasar modal menjadi krusial.</li>
      </ol>

      <p>Setelah memperhatikan dan menerapkan saran-saran ini, investor diharapkan dapat meningkatkan kecerdasan investasi mereka. Selain itu, investor mampu mengurangi risiko terkait praktik penggorengan saham dan mengambil langkah-langkah yang lebih terinformasi dan terukur dalam mengelola portofolio investasi mereka.</p>

      <h2>REFERENSI</h2>
      <p><sup>1</sup> Ika, Aprillia. "Investor Pemula Merapat, Ini Cara Membaca Analisis Fundamental Saham Halaman All." KOMPAS.com, January 3, 2024. <a href="https://money.kompas.com/read/2024/01/04/063000126/investor-pemula-merapat-ini-cara-membaca-analisis-fundamental-saham?page=all#:~:text=Analisis%20fundamental%20saham%20merupakan%20salah,analisis%20ekonomi%20makro%20dan%20mikro" target="_blank">https://money.kompas.com/read/2024/01/04/063000126/investor-pemula-merapat-ini-cara-membaca-analisis-fundamental-saham?page=all#:~:text=Analisis%20fundamental%20saham%20merupakan%20salah,analisis%20ekonomi%20makro%20dan%20mikro</a>.</p>

      <p><sup>2</sup> Nurfitri, Annisa. "Catat! Ini Cara Agar Terhindar Dari Jebakan Saham Gorengan." Warta Ekonomi, February 18, 2024. <a href="https://wartaekonomi.co.id/read529008/catat-ini-cara-agar-terhindar-dari-jebakan-saham-gorengan" target="_blank">https://wartaekonomi.co.id/read529008/catat-ini-cara-agar-terhindar-dari-jebakan-saham-gorengan</a>.</p>

      <p><sup>3</sup> Christianti, Maria. "Pengertian Diversifikasi Portofolio Saham Beserta Cara Menerapkannya." Perencana Keuangan Pertama Yang Tercatat OJK, December 13, 2022. <a href="https://www.finansialku.com/panduan-belajar/diversifikasi-portofolio-saham-pis0301/" target="_blank">https://www.finansialku.com/panduan-belajar/diversifikasi-portofolio-saham-pis0301/</a>.</p>

      <p><sup>4</sup> Idris, Muhammad. "Mengenal OJK, Sejarah Berdiri, Tugas, Fungsi, Dan Wewenangnya." KOMPAS.com, January 22, 2023. <a href="https://money.kompas.com/read/2021/11/27/144336726/mengenal-ojk-sejarah-berdiri-tugas-fungsi-dan-wewenangnya" target="_blank">https://money.kompas.com/read/2021/11/27/144336726/mengenal-ojk-sejarah-berdiri-tugas-fungsi-dan-wewenangnya</a></p>
    `,
    tags: [
      "Investor Protection",
      "Market Manipulation",
      "Capital Market",
      "Securities Law",
      "Saham Gorengan",
      "OJK",
      "BEI",
    ],
  },

  "carbon-capture-storage-energi-berkelanjutan": {
    id: "carbon-capture-storage-energi-berkelanjutan",
    title:
      "MENDUKUNG PRODUKSI ENERGI YANG BERKELANJUTAN DENGAN PERPRES 14/2024 MELALUI TEKNOLOGI CARBON CAPTURE STORAGE (CCS) DI INDONESIA",
    date: "Nov 18, 2024",
    category: "Energy and Mineral Resources",
    author: "BusinessLawCommunity",
    readTime: "15 min read",
    excerpt:
      "Pembahasan implementasi teknologi Carbon Capture Storage untuk mendukung produksi energi berkelanjutan di Indonesia...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Carbon Capture Storage", "Sustainable Energy", "Environmental Law", "Energy Policy"],
  },

  "ekspor-pasir-laut-dilema-lingkungan": {
    id: "ekspor-pasir-laut-dilema-lingkungan",
    title: "Ekspor Pasir Laut di Indonesia: Dilema Dampak Lingkungan dan Pendapatan Negara",
    date: "Nov 12, 2024",
    category: "Energy and Mineral Resources",
    author: "BusinessLawCommunity",
    readTime: "11 min read",
    excerpt: "Analisis dilema antara dampak lingkungan dan pendapatan negara dari ekspor pasir laut Indonesia...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Sea Sand Export", "Environmental Impact", "State Revenue", "Marine Resources"],
  },

  "modus-social-engineering-penipuan-bri": {
    id: "modus-social-engineering-penipuan-bri",
    title: "Modus Social Engineering : Studi Kasus Penipuan Nasabah Bank Rakyat Indonesia (BRI)",
    date: "Nov 12, 2024",
    category: "Finance and Banking",
    author: "BusinessLawCommunity",
    readTime: "9 min read",
    excerpt: "Studi kasus modus social engineering dalam penipuan nasabah bank dan perlindungan konsumen...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Social Engineering", "Banking Fraud", "Consumer Protection", "Cybercrime"],
  },

  "nadin-amizah-remix-hak-cipta-musik": {
    id: "nadin-amizah-remix-hak-cipta-musik",
    title:
      'Kekesalan Nadin Amizah atas Remix Lagu "Rayuan Perempuan Gila": Analisis Hak Cipta Bidang Industri Musik di Era Digital',
    date: "Nov 12, 2024",
    category: "Intellectual Property Rights",
    author: "BusinessLawCommunity",
    readTime: "10 min read",
    excerpt: "Kajian kasus hak cipta dalam industri musik digital melalui kasus remix lagu Nadin Amizah...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Music Copyright", "Digital Music", "Remix Rights", "Artist Rights"],
  },

  "business-judgement-rule-perlindungan-direksi": {
    id: "business-judgement-rule-perlindungan-direksi",
    title: "Prinsip Business Judgement Rule: Instrumen Perlindungan Organ Direksi dalam hukum Indonesia",
    date: "Nov 12, 2024",
    category: "Company and Antitrust Competition",
    author: "BusinessLawCommunity",
    readTime: "12 min read",
    excerpt: "Pembahasan prinsip Business Judgement Rule sebagai perlindungan hukum bagi direksi perusahaan...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Business Judgement Rule", "Director Protection", "Corporate Governance", "Fiduciary Duty"],
  },

  "fenomena-bisnis-jastip-permendag": {
    id: "fenomena-bisnis-jastip-permendag",
    title:
      "Fenomena Maraknya Bisnis Jastip: Menelaah Permendag terkait Pembatasan Impor dari Perspektif Hukum Persaingan Usaha",
    date: "Nov 12, 2024",
    category: "Company and Antitrust Competition",
    author: "BusinessLawCommunity",
    readTime: "10 min read",
    excerpt: "Analisis fenomena bisnis jasa titip (jastip) dalam konteks regulasi perdagangan dan persaingan usaha...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Jastip Business", "Import Restriction", "Competition Law", "Trade Regulation"],
  },

  "hak-kekayaan-intelektual-bioteknologi": {
    id: "hak-kekayaan-intelektual-bioteknologi",
    title: "Hak Kekayaan Intelektual dalam Bioteknologi: Mendorong Inovasi sambil Memastikan Praktik Etis",
    date: "Nov 12, 2024",
    category: "Intellectual Property Rights",
    author: "BusinessLawCommunity",
    readTime: "13 min read",
    excerpt: "Kajian HKI dalam bidang bioteknologi dengan fokus pada keseimbangan inovasi dan etika...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Biotechnology IP", "Innovation", "Ethics", "Patent Law"],
  },

  "problematika-hak-cipta-artificial-intelligence": {
    id: "problematika-hak-cipta-artificial-intelligence",
    title:
      "Problematika Hak Cipta: Implementasi Artificial Intelligence dan Implikasinya bagi Pemilik Database dalam Algoritma",
    date: "Jun 17, 2023",
    category: "Intellectual Property Rights",
    author: "BusinessLawCommunity",
    readTime: "12 min read",
    excerpt: "Kajian problematika hak cipta dalam era AI dan dampaknya terhadap pemilik database dan algoritma...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Artificial Intelligence", "Copyright", "Database Rights", "Algorithm"],
  },

  "kajian-hukum-pajak-karbon-indonesia": {
    id: "kajian-hukum-pajak-karbon-indonesia",
    title: "KAJIAN HUKUM PENERAPAN PAJAK KARBON DI INDONESIA",
    date: "May 29, 2023",
    category: "Energy and Mineral Resources",
    author: "BusinessLawCommunity",
    readTime: "11 min read",
    excerpt: "Analisis aspek hukum penerapan pajak karbon sebagai instrumen kebijakan lingkungan di Indonesia...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Carbon Tax", "Environmental Law", "Climate Policy", "Taxation"],
  },

  "perdagangan-karbon-internasional-indonesia": {
    id: "perdagangan-karbon-internasional-indonesia",
    title: "Perdagangan Karbon Internasional: Analisis Skema, Peluang, dan Tantangannya bagi Indonesia",
    date: "May 29, 2023",
    category: "International Trade",
    author: "BusinessLawCommunity",
    readTime: "14 min read",
    excerpt: "Pembahasan skema perdagangan karbon internasional dan analisis peluang serta tantangan bagi Indonesia...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Carbon Trading", "International Trade", "Climate Change", "Environmental Policy"],
  },

  "penerapan-green-banking-indonesia": {
    id: "penerapan-green-banking-indonesia",
    title: "Meninjau Penerapan Green Banking di Indonesia: Quo Vadis?",
    date: "May 29, 2023",
    category: "Finance and Banking",
    author: "BusinessLawCommunity",
    readTime: "9 min read",
    excerpt: "Tinjauan implementasi konsep green banking di Indonesia dan arah pengembangannya ke depan...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Green Banking", "Sustainable Finance", "Banking Law", "Environmental Finance"],
  },

  "diskursus-indirect-evidence-kartel": {
    id: "diskursus-indirect-evidence-kartel",
    title: "DISKURSUS PENGGUNAAN INDIRECT EVIDENCE PADA PEMBUKTIAN KASUS KARTEL DI INDONESIA",
    date: "May 18, 2023",
    category: "Company and Antitrust Competition",
    author: "BusinessLawCommunity",
    readTime: "13 min read",
    excerpt: "Pembahasan penggunaan bukti tidak langsung dalam pembuktian kasus kartel di Indonesia...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Indirect Evidence", "Cartel", "Competition Law", "Antitrust"],
  },

  "analisis-pojk-pemecahan-penggabungan-saham": {
    id: "analisis-pojk-pemecahan-penggabungan-saham",
    title:
      "Analisis Peraturan Otoritas Jasa Keuangan Nomor 15/POJK.04/2022 Tahun 2022 tentang Pemecahan Saham dan Penggabungan Saham oleh Perusahaan Terbuka",
    date: "May 16, 2023",
    category: "Capital Market Law",
    author: "BusinessLawCommunity",
    readTime: "10 min read",
    excerpt: "Analisis regulasi OJK terkait pemecahan dan penggabungan saham oleh perusahaan terbuka...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Stock Split", "Stock Consolidation", "OJK Regulation", "Public Company"],
  },

  "melawan-monopoli-aqua-vs-le-minerale": {
    id: "melawan-monopoli-aqua-vs-le-minerale",
    title:
      "Melawan Prakrek Monopoli Market Leader dan Manfaat Persaingan Usaha Bagi Konsumen : Studi Kasus AMDK 'Aqua vs Le Minerale'",
    date: "Nov 24, 2023",
    category: "Company and Antitrust Competition",
    author: "BusinessLawCommunity",
    readTime: "11 min read",
    excerpt: "Studi kasus persaingan usaha dalam industri AMDK antara Aqua dan Le Minerale...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Market Competition", "Monopoly", "Consumer Welfare", "AMDK Industry"],
  },

  "pemerintah-bangkitnya-mafia-esdm": {
    id: "pemerintah-bangkitnya-mafia-esdm",
    title: "Pemerintah & Bangkitnya Mafia ESDM",
    date: "Nov 24, 2023",
    category: "Energy and Mineral Resources",
    author: "BusinessLawCommunity",
    readTime: "12 min read",
    excerpt:
      "Analisis fenomena mafia ESDM dan peran pemerintah dalam tata kelola sektor energi dan sumber daya mineral...",
    content: `<p>Content will be added later...</p>`,
    tags: ["ESDM", "Energy Mafia", "Government Role", "Resource Management"],
  },

  "masalah-lingkungan-perizinan-tambang-nikel": {
    id: "masalah-lingkungan-perizinan-tambang-nikel",
    title:
      "Menyoal Masalah Lingkungan Terhadap Kemudahan Perizinan Perusahaan Tambang Nikel Pasca Undang-Undang Cipta Kerja",
    date: "Nov 24, 2023",
    category: "Energy and Mineral Resources",
    author: "BusinessLawCommunity",
    readTime: "13 min read",
    excerpt: "Kajian dampak lingkungan dari kemudahan perizinan tambang nikel pasca UU Cipta Kerja...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Environmental Impact", "Mining Permit", "Omnibus Law", "Nickel Mining"],
  },

  "window-dressing-legal-perspective": {
    id: "window-dressing-legal-perspective",
    title: "Window Dressing phenomenon: a Legal Perspective",
    date: "Nov 24, 2023",
    category: "Capital Market Law",
    author: "BusinessLawCommunity",
    readTime: "8 min read",
    excerpt: "Analisis fenomena window dressing dari perspektif hukum pasar modal dan akuntansi...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Window Dressing", "Financial Reporting", "Securities Law", "Market Manipulation"],
  },

  "kebakaran-depo-pertamina-pertanggungjawaban": {
    id: "kebakaran-depo-pertamina-pertanggungjawaban",
    title: "Kebakaran Depo Pertamina Dari Masa ke Masa, Apa Pertanggungjawaban Hukumnya?",
    date: "Oct 25, 2023",
    category: "Energy and Mineral Resources",
    author: "BusinessLawCommunity",
    readTime: "10 min read",
    excerpt: "Analisis pertanggungjawaban hukum dalam kasus kebakaran depo Pertamina yang berulang...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Pertamina", "Legal Liability", "Industrial Accident", "Energy Safety"],
  },

  "spac-alternatif-penggalangan-dana": {
    id: "spac-alternatif-penggalangan-dana",
    title: "Special Purpose Acquisition Company sebagai Alternatif Perusahaan untuk Penggalangan Dana",
    date: "Oct 25, 2023",
    category: "Capital Market Law",
    author: "BusinessLawCommunity",
    readTime: "11 min read",
    excerpt: "Analisis SPAC sebagai alternatif penggalangan dana bagi perusahaan dalam pasar modal...",
    content: `<p>Content will be added later...</p>`,
    tags: ["SPAC", "Capital Raising", "Corporate Finance", "Investment Vehicle"],
  },

  "thrifting-perspektif-hukum-indonesia-internasional": {
    id: "thrifting-perspektif-hukum-indonesia-internasional",
    title: "Thrifting dalam Perspektif Hukum Indonesia dan Hukum Internasional",
    date: "Aug 28, 2023",
    category: "International Trade",
    author: "BusinessLawCommunity",
    readTime: "8 min read",
    excerpt: "Pembahasan fenomena thrifting dari perspektif hukum Indonesia dan internasional...",
    content: `<p>Content will be added later...</p>`,
    tags: ["Thrifting", "Consumer Law", "International Trade", "Second-hand Goods"],
  },
}
