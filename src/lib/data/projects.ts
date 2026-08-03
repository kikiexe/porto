export interface ProjectDetails {
  problem: Record<'en' | 'id', string>;
  solution: Record<'en' | 'id', string>;
  features: Record<'en' | 'id', string[]>;
  architecture: Record<'en' | 'id', string[]>;
}

export interface Project {
  slug: string;
  title: string;
  description: Record<'en' | 'id', string>;
  tags: string[];
  category: 'web3' | 'web' | 'mobile' | 'tools';
  status: 'completed' | 'in-progress';
  links?: { github?: string; live?: string; };
  details?: ProjectDetails;
}

export const projects: Project[] = [
  {
    slug: "veilfi",
    title: "Veilfi",
    description: {
      en: "Decentralized yield aggregation platform built with smart contracts and zero-knowledge circuits. Users earn yield across multiple DeFi strategies while preserving privacy through ZK proofs. Ensures secure fund management, verifiable compliance, and trustless operation without centralized intermediaries.",
      id: "Platform agregasi yield terdesentralisasi yang dibangun dengan smart contract dan sirkuit zero-knowledge. Pengguna memperoleh yield di berbagai strategi DeFi dengan tetap menjaga privasi melalui ZK proof. Memastikan pengelolaan dana yang aman, kepatuhan yang dapat diverifikasi, dan pengoperasian tanpa perantara tersentralisasi."
    },
    tags: ["Solidity", "ZK Circuits", "Web3"],
    category: "web3",
    status: "completed",
    details: {
      problem: {
        en: "DeFi users seeking to maximize yield across multiple protocols are forced to expose their transaction histories and balances publicly on-chain, violating financial privacy and making them vulnerable to MEV searchers and tracking.",
        id: "Pengguna DeFi yang ingin memaksimalkan yield di berbagai protokol terpaksa mengekspos riwayat transaksi dan saldo mereka secara publik on-chain, melanggar privasi finansial dan membuat mereka rentan terhadap pencarian MEV dan pelacakan."
      },
      solution: {
        en: "Built a privacy-preserving yield aggregator utilizing zero-knowledge (ZK) circuits to shield user balances and deposits. Smart contracts pool funds to execute optimized yield strategies across DeFi protocols while verification occurs off-chain, ensuring high transaction throughput and full compliance auditing via zero-knowledge proofs.",
        id: "Membangun agregator yield yang menjaga privasi menggunakan sirkuit zero-knowledge (ZK) untuk melindungi saldo dan deposit pengguna. Smart contract mengumpulkan dana untuk mengeksekusi strategi yield yang dioptimalkan di berbagai protokol DeFi sementara verifikasi terjadi off-chain, memastikan throughput transaksi yang tinggi dan audit kepatuhan penuh melalui bukti zero-knowledge."
      },
      features: {
        en: [
          "Zero-knowledge deposit and withdrawal shielding",
          "Automated multi-strategy yield routing",
          "Gas-optimized batch transaction execution",
          "Compliant view keys for regulatory auditing"
        ],
        id: [
          "Perlindungan deposit dan penarikan zero-knowledge",
          "Perutean yield multi-strategi otomatis",
          "Eksekusi transaksi batch hemat gas",
          "Kunci tampilan patuh untuk audit regulasi"
        ]
      },
      architecture: {
        en: [
          "Circom and SnarkJS for zk-SNARK circuit design and compilation",
          "Solidity smart contracts for yield pooling and verification on Ethereum L2",
          "Ethers.js and React frontend with WebAssembly-based proof generation"
        ],
        id: [
          "Circom dan SnarkJS untuk kompilasi sirkuit zk-SNARK",
          "Smart contract Solidity untuk pengumpulan yield dan verifikasi di Ethereum L2",
          "Frontend Ethers.js dan React dengan pembuatan bukti berbasis WebAssembly"
        ]
      }
    }
  },
  {
    slug: "velipe",
    title: "Velipe",
    description: {
      en: "Decentralized document verification platform built with smart contracts and a Web3 frontend. Enables secure issuance and validation of digital documents on-chain using IPFS for immutable storage. Eliminates reliance on centralized authorities through blockchain-enforced authenticity.",
      id: "Platform verifikasi dokumen terdesentralisasi yang dibangun dengan smart contract dan frontend Web3. Memungkinkan penerbitan dan validasi dokumen digital secara on-chain menggunakan IPFS untuk penyimpanan yang tidak dapat diubah. Menghilangkan ketergantungan pada otoritas tersentralisasi."
    },
    tags: ["Solidity", "IPFS", "Web3"],
    category: "web3",
    status: "completed",
    links: {
      live: "https://velipe-alpha.vercel.app/"
    },
    details: {
      problem: {
        en: "Traditional credential and document verification systems are slow, costly, and heavily dependent on centralized verification authorities, creating single points of failure and risks of document forgery.",
        id: "Sistem verifikasi kredensial dan dokumen tradisional lambat, mahal, dan sangat bergantung pada otoritas verifikasi tersentralisasi, menciptakan titik kegagalan tunggal dan risiko pemalsuan dokumen."
      },
      solution: {
        en: "Engineered a decentralized document verification platform that stores cryptographic hashes of documents on IPFS and registers verification states on-chain via smart contracts. Users can verify the authenticity of credentials instantly without revealing sensitive document content.",
        id: "Merancang platform verifikasi dokumen terdesentralisasi yang menyimpan hash kriptografis dokumen di IPFS dan mendaftarkan status verifikasi secara on-chain melalui smart contract. Pengguna dapat memverifikasi keaslian kredensial secara instan tanpa mengungkapkan konten dokumen yang sensitif."
      },
      features: {
        en: [
          "On-chain cryptographic document registration",
          "IPFS metadata pinning and verification",
          "Multi-signature issuer verification workflow",
          "Zero-cost validation queries for end-users"
        ],
        id: [
          "Pendaftaran dokumen kriptografis secara on-chain",
          "Penyematan dan verifikasi metadata IPFS",
          "Alur kerja verifikasi penerbit dengan tanda tangan ganda",
          "Pencarian validasi tanpa biaya untuk pengguna akhir"
        ]
      },
      architecture: {
        en: [
          "Solidity smart contracts for ownership and lifecycle verification",
          "IPFS/Pinata for secure and immutable metadata storage",
          "Ethers.js for blockchain interactions"
        ],
        id: [
          "Smart contract Solidity untuk verifikasi kepemilikan dan siklus hidup dokumen",
          "IPFS/Pinata untuk penyimpanan metadata dokumen yang aman dan permanen",
          "Ethers.js untuk integrasi interaksi blockchain"
        ]
      }
    }
  },
  {
    slug: "sathafly",
    title: "SathaFly",
    description: {
      en: "Web-based dApp for purchasing flight tickets as NFTs using IDRX tokens. Smart contract automatically executes refunds for flight delays or cancellations without manual claims.",
      id: "Aplikasi dApp berbasis web untuk membeli tiket penerbangan sebagai NFT menggunakan token IDRX. Smart contract secara otomatis mengeksekusi pengembalian dana untuk penundaan atau pembatalan penerbangan tanpa klaim manual."
    },
    tags: ["Solidity", "IDRX", "NFT", "Web3", "ERC-20"],
    category: "web3",
    status: "completed",
    links: {
      github: "https://github.com/kikiexe/flight-application"
    },
    details: {
      problem: {
        en: "Flight delay and cancellation insurance claims are historically slow, paper-heavy, and require manual validation, leading to user frustration and delayed payouts.",
        id: "Klaim asuransi penundaan dan pembatalan penerbangan secara historis lambat, menggunakan banyak kertas, dan memerlukan validasi manual, yang menyebabkan kekecewaan pengguna dan keterlambatan pembayaran."
      },
      solution: {
        en: "Designed a decentralized dApp that models flight tickets as ERC-1155 or ERC-721 NFTs. Smart contracts hook into public flight status APIs via Chainlink oracles to trigger automated, instant refunds to token holders upon delay verification.",
        id: "Merancang dApp terdesentralisasi yang memodelkan tiket penerbangan sebagai NFT ERC-1155 atau ERC-721. Smart contract terhubung ke API status penerbangan publik melalui oracle Chainlink untuk memicu pengembalian dana instan otomatis ke pemegang token setelah verifikasi penundaan."
      },
      features: {
        en: [
          "NFT-based ticketing and ownership representation",
          "Oracle integration for real-time flight status validation",
          "Instant automated refund processing using IDRX tokens",
          "Decentralized secondary market ticket exchange restriction"
        ],
        id: [
          "Representasi kepemilikan dan tiket berbasis NFT",
          "Integrasi Oracle untuk validasi status penerbangan waktu nyata",
          "Proses pengembalian dana otomatis instan menggunakan token IDRX",
          "Pembatasan penukaran tiket pasar sekunder terdesentralisasi"
        ]
      },
      architecture: {
        en: [
          "Solidity ERC-1155 smart contracts on Base L2",
          "Chainlink Oracles for external flight API feeds",
          "Ethers.js for Web3 wallet interactions"
        ],
        id: [
          "Smart contract Solidity ERC-1155 di Base L2",
          "Chainlink Oracles untuk umpan API status penerbangan eksternal",
          "Ethers.js untuk interaksi dompet Web3"
        ]
      }
    }
  },
  {
    slug: "gasan",
    title: "Gasan",
    description: {
      en: "AI-driven fraud prevention platform for community savings (arisan). Mitigates default risks through predictive analytics and automated escrow disbursements. Ensures transparent fund management without reliance on manual verification.",
      id: "Platform pencegahan penipuan berbasis AI untuk tabungan komunitas (arisan). Meminimalkan risiko gagal bayar melalui analisis prediktif dan pencairan escrow otomatis. Memastikan pengelolaan dana transparan tanpa verifikasi manual."
    },
    tags: ["Python", "FastAPI", "Escrow"],
    category: "web",
    status: "in-progress",
    links: {
      github: "https://github.com/kikiexe/Gasan"
    },
    details: {
      problem: {
        en: "Traditional peer-to-peer community savings groups (arisan) face default risks and lack transparent escrow mechanisms, leading to trust issues and administrative overhead.",
        id: "Kelompok tabungan komunitas peer-to-peer tradisional (arisan) menghadapi risiko gagal bayar dan kurangnya mekanisme escrow yang transparan, menyebabkan masalah kepercayaan dan beban kerja administratif."
      },
      solution: {
        en: "Developed a fraud prevention platform that integrates predictive machine learning models to assess user default risk and utilizes automated smart escrows to hold and disburse savings securely.",
        id: "Mengembangkan platform pencegahan penipuan yang mengintegrasikan model machine learning prediktif untuk menilai risiko gagal bayar pengguna dan menggunakan escrow pintar otomatis untuk menyimpan dan mencairkan tabungan dengan aman."
      },
      features: {
        en: [
          "Predictive machine learning risk assessment",
          "Automated multi-sig escrow wallets for secure fund holding",
          "Real-time payment scheduling and automated reminders",
          "Interactive admin dashboard for group coordinators"
        ],
        id: [
          "Penilaian risiko machine learning prediktif",
          "Dompet escrow multi-sig otomatis untuk penyimpanan dana yang aman",
          "Penjadwalan pembayaran waktu nyata dan pengingat otomatis",
          "Dasbor admin interaktif untuk koordinator kelompok"
        ]
      },
      architecture: {
        en: [
          "FastAPI (Python) for core API service and predictive models",
          "PostgreSQL database for system transactions and user data",
          "Docker for local development and staging environment setup"
        ],
        id: [
          "FastAPI (Python) untuk layanan API inti dan model prediktif",
          "Database PostgreSQL untuk transaksi sistem dan data pengguna",
          "Docker untuk pengembangan lokal dan pengaturan lingkungan pementasan"
        ]
      }
    }
  },
  {
    slug: "june-label",
    title: "June Label",
    description: {
      en: "Modern e-commerce website with premium product gallery managed via Filament Admin Panel. Integrated cart and checkout system for seamless end-to-end shopping experience.",
      id: "Situs e-commerce modern dengan galeri produk premium yang dikelola melalui Panel Admin Filament. Mengintegrasikan keranjang belanja dan sistem checkout untuk pengalaman belanja yang mulus."
    },
    tags: ["Laravel", "Inertia.js", "React", "Filament"],
    category: "web",
    status: "completed",
    details: {
      problem: {
        en: "Small to medium boutique brands struggle to manage product catalogues and track orders through fragmented, non-developer-friendly admin interfaces, hurting conversion rates.",
        id: "Merek butik kecil hingga menengah kesulitan mengelola katalog produk dan melacak pesanan melalui antarmuka admin yang terfragmentasi dan kurang ramah pengguna, yang menurunkan tingkat konversi."
      },
      solution: {
        en: "Built a modern e-commerce storefront with a seamless client checkout and integrated Filament Admin Panel backend, allowing real-time inventory management and order processing.",
        id: "Membangun toko e-commerce modern dengan proses checkout klien yang mulus dan backend Panel Admin Filament terintegrasi, memungkinkan manajemen inventaris waktu nyata dan pemrosesan pesanan."
      },
      features: {
        en: [
          "High-fidelity product catalog and gallery",
          "Filament-based administration portal with custom analytics",
          "Integrated shopping cart and secure checkout system",
          "Dynamic shipping cost calculator"
        ],
        id: [
          "Katalog dan galeri produk berkualitas tinggi",
          "Portal administrasi berbasis Filament dengan analitik kustom",
          "Keranjang belanja terintegrasi dan sistem checkout yang aman",
          "Kalkulator biaya pengiriman dinamis"
        ]
      },
      architecture: {
        en: [
          "Laravel and Inertia.js for modern single-page-app experience",
          "React for client-side components and state management",
          "MySQL database with Filament Admin panel wrapper"
        ],
        id: [
          "Laravel dan Inertia.js untuk pengalaman aplikasi satu halaman modern",
          "React untuk komponen sisi klien dan manajemen status",
          "Database MySQL dengan pembungkus panel Admin Filament"
        ]
      }
    }
  },
  {
    slug: "sipandu-dm",
    title: "SiPandu-DM",
    description: {
      en: "Engineered an offline-first mobile application with a strict 3-tier architecture to monitor Type 2 Diabetes risk at the community level. Implemented robust local data synchronization using the Outbox Pattern and Isar NoSQL for reliable operation in low-connectivity environments. Designed a secure backend API with Python, integrating AES-256-GCM encryption and Role-Based Access Control to ensure medical data confidentiality and regulatory compliance.",
      id: "Merancang aplikasi seluler offline-first dengan arsitektur 3-tier ketat untuk memantau risiko Diabetes Tipe 2 di tingkat komunitas. Mengimplementasikan sinkronisasi data lokal yang kuat menggunakan Outbox Pattern dan Isar NoSQL untuk operasi andal di lingkungan konektivitas rendah. Mendesain API backend yang aman dengan Python, mengintegrasikan enkripsi AES-256-GCM dan Kontrol Akses Berbasis Peran untuk memastikan kerahasiaan data medis."
    },
    tags: ["Flutter", "FastAPI", "PostgreSQL", "Drift", "Docker"],
    category: "mobile",
    status: "completed",
    links: {
      live: "/app-release.apk"
    },
    details: {
      problem: {
        en: "Community health workers in remote areas struggle to assess Type 2 Diabetes risk due to unstable internet connectivity, causing critical patient screening data to be lost.",
        id: "Petugas kesehatan masyarakat di daerah terpencil kesulitan menilai risiko Diabetes Tipe 2 karena konektivitas internet yang tidak stabil, menyebabkan data penyaringan pasien yang kritis hilang."
      },
      solution: {
        en: "Engineered an offline-first mobile application featuring a strict 3-tier architecture. It records and syncs screening data locally using the Outbox Pattern with Isar NoSQL database, uploading records to a secure backend when a network becomes available.",
        id: "Merancang aplikasi seluler offline-first yang menampilkan arsitektur 3-tier yang ketat. Aplikasi ini mencatat dan menyinkronkan data skrining secara lokal menggunakan Outbox Pattern dengan database Isar NoSQL, mengunggah catatan ke backend yang aman ketika jaringan tersedia."
      },
      features: {
        en: [
          "Robust offline-first data logging and sync mechanics",
          "AES-256-GCM encryption for local and in-transit patient medical data",
          "Outbox Pattern implementation with automatic sync retries",
          "Role-Based Access Control (RBAC) to ensure HIPAA/regulatory compliance"
        ],
        id: [
          "Mekanisme pencatatan dan sinkronisasi data offline-first yang kuat",
          "Enkripsi AES-256-GCM untuk data medis pasien lokal dan saat transit",
          "Implementasi Outbox Pattern dengan percobaan ulang sinkronisasi otomatis",
          "Kontrol Akses Berbasis Peran (RBAC) untuk memastikan kepatuhan regulasi/HIPAA"
        ]
      },
      architecture: {
        en: [
          "Flutter for cross-platform offline mobile runtime",
          "FastAPI (Python) and PostgreSQL backend REST API",
          "Drift and Isar NoSQL for client-side persistence and query optimizations",
          "Docker containerization for modular microservices"
        ],
        id: [
          "Flutter untuk runtime seluler offline lintas platform",
          "API REST backend FastAPI (Python) dan PostgreSQL",
          "Drift dan Isar NoSQL untuk persistensi sisi klien dan optimalisasi kueri",
          "Kontainerisasi Docker untuk mikroservis modular"
        ]
      }
    }
  },
  {
    slug: "billet",
    title: "Billet",
    description: {
      en: "Built an on-chain smart ticketing protocol on Base Layer 2 utilizing ERC-1155 to mitigate scalping through trustless escrow and strict secondary market restrictions. Architected on-chain price ceiling enforcement and conditional royalty routing (ERC-2981) to automatically restrict peer-to-peer transfers and manage event organizer revenues. Designed a decoupled Web3 architecture integrating smart contracts, a Ponder-based indexer for efficient GraphQL event querying, and a Next.js/Wagmi frontend.",
      id: "Membangun protokol tiket pintar on-chain di Base Layer 2 menggunakan ERC-1155 untuk meminimalkan calo tiket melalui escrow tanpa kepercayaan dan pembatasan pasar sekunder yang ketat. Merancang penegakan batas harga on-chain dan perutean royalti bersyarat (ERC-2981) secara otomatis untuk membatasi transfer P2P dan mengelola pendapatan penyelenggara acara."
    },
    tags: ["Solidity", "Next.js", "Foundry", "Base L2", "Ponder"],
    category: "web3",
    status: "completed",
    details: {
      problem: {
        en: "Ticket scalping and secondary market manipulation inflate prices and divert revenue away from event organizers, while users suffer from fake tickets.",
        id: "Calo tiket dan manipulasi pasar sekunder menaikkan harga tiket dan mengalihkan pendapatan dari penyelenggara acara, sementara pengguna dirugikan oleh tiket palsu."
      },
      solution: {
        en: "Designed an on-chain ticketing protocol using ERC-1155 tokens on Base L2. The protocol enforces secondary transfer ceilings and routes royalties automatically back to organizers, while a Ponder-based indexer queries event states instantly.",
        id: "Merancang protokol tiket on-chain menggunakan token ERC-1155 di Base L2. Protokol ini menegakkan batas harga transfer sekunder dan merutekan royalti secara otomatis kembali ke penyelenggara, sementara indexer berbasis Ponder mengueri status acara secara instan."
      },
      features: {
        en: [
          "ERC-1155 smart contracts enforcing price ceilings",
          "ERC-2981 dynamic royalty distribution routing",
          "Ponder indexer for real-time GraphQL event queries",
          "Next.js frontend using Wagmi/RainbowKit for seamless wallet connectivity"
        ],
        id: [
          "Smart contract ERC-1155 yang menegakkan batas harga sekunder",
          "Perutean distribusi royalti dinamis ERC-2981",
          "Indexer Ponder untuk kueri peristiwa GraphQL waktu nyata",
          "Frontend Next.js menggunakan Wagmi/RainbowKit untuk konektivitas dompet yang mulus"
        ]
      },
      architecture: {
        en: [
          "Solidity smart contracts built and tested using Foundry",
          "Next.js web application using Wagmi and Viem client libraries",
          "Ponder indexer for local event indexing and GraphQL API layer",
          "Base L2 network deployment configuration"
        ],
        id: [
          "Smart contract Solidity dibangun dan diuji menggunakan Foundry",
          "Aplikasi web Next.js menggunakan pustaka klien Wagmi dan Viem",
          "Indexer Ponder untuk pengindeksan acara lokal dan lapisan API GraphQL",
          "Konfigurasi penyebaran jaringan Base L2"
        ]
      }
    }
  },
  {
    slug: "pecune",
    title: "Pecune",
    description: {
      en: "Designed and built an AI-powered personal financial tracker that automates transaction entry. Implemented receipt data extraction using Gemini Vision API with robust local image compression to respect platform payload limits, and voice-to-transaction parsing. Structured secure rate limiting on serverless environments to prevent API abuse, using Supabase for user session verification.",
      id: "Merancang dan membangun pelacak keuangan pribadi berbasis AI yang mengotomatiskan entri transaksi. Mengimplementasikan ekstraksi data struk belanja menggunakan Gemini Vision API dengan kompresi gambar lokal yang kuat untuk menghormati batasan muatan platform, serta pemrosesan suara-ke-transaksi."
    },
    tags: ["Next.js", "Supabase", "Tailwind CSS", "Gemini API", "TypeScript"],
    category: "web",
    status: "completed",
    links: {
      live: "https://pecune.vercel.app/"
    },
    details: {
      problem: {
        en: "Tracking daily transactions manually is tedious, leading to user abandonment, while conventional automated bank syncing raises major privacy and security concerns.",
        id: "Mencatat transaksi harian secara manual melelahkan, menyebabkan pengguna berhenti menggunakan aplikasi, sementara sinkronisasi bank otomatis konvensional menimbulkan kekhawatiran privasi dan keamanan yang besar."
      },
      solution: {
        en: "Created an AI-powered financial tracker that automates transaction logging. Users can upload receipt photos (analyzed using Gemini Vision API with client-side image compression) or speak transaction details (parsed by Gemini API). Includes Supabase security verification and rate limiting.",
        id: "Membuat pelacak keuangan bertenaga AI yang mengotomatiskan pencatatan transaksi. Pengguna dapat mengunggah foto struk (dianalisis menggunakan Gemini Vision API dengan kompresi gambar sisi klien) atau mengucapkan detail transaksi (dianalisis oleh Gemini API). Termasuk verifikasi keamanan Supabase dan rate limiting."
      },
      features: {
        en: [
          "AI-powered receipt scanning and data extraction (pre-fill)",
          "Voice-to-transaction parsing using Google Gemini",
          "Strict server-side file and payload size validation",
          "Supabase authentication and custom API request rate limiting"
        ],
        id: [
          "Pemindaian struk belanja dan ekstraksi data bertenaga AI (pra-isi)",
          "Pengenalan suara-ke-transaksi menggunakan Google Gemini",
          "Validasi ketat ukuran file dan muatan sisi server",
          "Autentikasi Supabase dan pembatasan permintaan API kustom"
        ]
      },
      architecture: {
        en: [
          "Next.js (React) for full-stack server actions and client-side components",
          "Supabase for PostgreSQL database, authentication, and security policies",
          "Google GenAI SDK (@google/genai) for LLM vision and text parsing APIs",
          "Tailwind CSS for UI styling"
        ],
        id: [
          "Next.js (React) untuk server action dan komponen sisi klien full-stack",
          "Supabase untuk database PostgreSQL, autentikasi, dan kebijakan keamanan",
          "SDK Google GenAI (@google/genai) untuk API visi LLM dan pengenalan teks",
          "Tailwind CSS untuk gaya antarmuka pengguna"
        ]
      }
    }
  },
  {
    slug: "flux",
    title: "Flux",
    description: {
      en: "Architected a Point of Sale (POS) web application designed with an Offline-First approach. Implemented reactive client-side database management using RxDB and IndexedDB to guarantee 100% register fungsionality without an internet connection, combined with Service Worker caching strategies. Built a NestJS backend and PostgreSQL database to handle asynchronous bulk syncing and transactional conflict resolution.",
      id: "Merancang arsitektur aplikasi kasir (POS) berbasis web dengan pendekatan Offline-First. Mengimplementasikan manajemen database sisi klien yang reaktif menggunakan RxDB dan IndexedDB untuk menjamin 100% fungsi kasir tetap berjalan tanpa koneksi internet, dikombinasikan dengan strategi caching Service Worker."
    },
    tags: ["React", "NestJS", "PostgreSQL", "RxDB", "PWA", "TypeScript"],
    category: "web",
    status: "completed",
    details: {
      problem: {
        en: "Cloud-dependent Point of Sale (POS) systems paralyze retail businesses when internet connections drop, resulting in lost sales and customer frustration.",
        id: "Sistem kasir (POS) berbasis cloud melumpuhkan bisnis ritel ketika koneksi internet terputus, mengakibatkan hilangnya penjualan dan kekecewaan pelanggan."
      },
      solution: {
        en: "Developed an offline-first PWA POS system. All transaction and inventory states are managed locally using RxDB and IndexedDB, ensuring complete register functionality without internet. Changes are synchronized automatically to a NestJS/PostgreSQL backend upon network restoration.",
        id: "Mengembangkan sistem POS PWA offline-first. Semua status transaksi dan inventaris dikelola secara lokal menggunakan RxDB dan IndexedDB, memastikan fungsi registrasi lengkap tanpa internet. Perubahan disinkronkan secara otomatis ke backend NestJS/PostgreSQL saat jaringan pulih."
      },
      features: {
        en: [
          "100% offline-capable checkout registry and inventory catalog",
          "Reactive client-side database utilizing RxDB on top of IndexedDB",
          "Workbox Service Worker implementation for offline assets caching",
          "NestJS API for processing bulk transaction sync queues and conflict resolution"
        ],
        id: [
          "Fungsi kasir dan katalog inventaris yang 100% mampu berjalan offline",
          "Database sisi klien reaktif menggunakan RxDB di atas IndexedDB",
          "Implementasi Workbox Service Worker untuk caching aset offline",
          "API NestJS untuk memproses antrean sinkronisasi transaksi massal dan resolusi konflik"
        ]
      },
      architecture: {
        en: [
          "React + Vite SPA frontend compiled with pnpm and Turborepo",
          "NestJS backend framework with Class Validator DTO validation",
          "PostgreSQL database with ACID transaction controls",
          "RxDB + IndexedDB for local database reactivity"
        ],
        id: [
          "Frontend React + Vite SPA yang dibangun dengan pnpm dan Turborepo",
          "Kerangka backend NestJS dengan validasi DTO Class Validator",
          "Database PostgreSQL dengan kontrol transaksi ACID untuk mencegah data ganda",
          "Reaktivitas database lokal dengan RxDB + IndexedDB"
        ]
      }
    }
  },
  {
    slug: "jobber",
    title: "Jobber",
    description: {
      en: "Created an automated Telegram bot in Go to streamline job application workflows using Google Gemini AI. Users send screenshots of job postings, which the bot parses to extract metadata (email, role, company) and dynamically drafts tailored cover letters. Integrates SMTP mailers and interactive Telegram buttons, enabling users to edit draft details and send applications with matching CV attachments instantly.",
      id: "Membuat bot Telegram otomatis menggunakan Go untuk merampingkan alur kerja lamaran pekerjaan dengan Google Gemini AI. Pengguna mengirimkan tangkapan layar lowongan pekerjaan, yang dianalisis oleh bot untuk mengekstrak metadata (surel, peran, perusahaan) dan menyusun surat lamaran secara dinamis."
    },
    tags: ["Go", "Telegram Bot API", "Gemini API", "SMTP", "AI Automation"],
    category: "tools",
    status: "completed",
    links: {
      github: "https://github.com/kikiexe/Jobber"
    },
    details: {
      problem: {
        en: "Sifting through job postings and manually customizing cover letters and emails for each application is highly repetitive and time-consuming, reducing overall application throughput.",
        id: "Menyaring lowongan pekerjaan dan menyesuaikan surat lamaran serta email secara manual untuk setiap lamaran sangat berulang dan memakan waktu, mengurangi produktivitas lamaran kerja secara keseluruhan."
      },
      solution: {
        en: "Built a Go-based Telegram bot that automates the application funnel. Users send screenshots of job listings, which the bot parses using Gemini AI to extract recruitment emails, positions, and company names. The bot drafts customized cover letters and allows the user to review, edit, and send applications along with their CV PDF directly via Telegram buttons.",
        id: "Membangun bot Telegram berbasis Go yang mengotomatiskan alur lamaran. Pengguna mengirimkan tangkapan layar lowongan, yang diurai bot menggunakan Gemini AI untuk mengekstrak email rekrutmen, posisi, dan nama perusahaan. Bot menyusun draf lamaran dan memungkinkan pengguna meninjau, mengedit, dan mengirim lamaran beserta lampiran CV PDF secara instan melalui tombol interaktif Telegram."
      },
      features: {
        en: [
          "Gemini-driven OCR and context parsing of job vacancy screenshots",
          "Automatic CV selection and cover letter drafting tailored to job details",
          "Interactive inline Telegram buttons for Accept, Deny, and Edit operations",
          "Integrated SMTP mail client for instant email delivery with attachments"
        ],
        id: [
          "Pengenalan teks (OCR) dan analisis konteks gambar lowongan kerja berbasis Gemini",
          "Pemilihan CV otomatis dan penyusunan draf surat lamaran sesuai detail pekerjaan",
          "Tombol inline Telegram interaktif untuk operasi Setujui, Tolak, dan Edit",
          "Klien surat SMTP terintegrasi untuk pengiriman email instan dengan lampiran"
        ]
      },
      architecture: {
        en: [
          "Go (Golang) backend service for performance and low memory overhead",
          "Google Gemini API for structural JSON text and image extraction",
          "go-telegram-bot-api library for rich chatbot interfaces",
          "SMTP configuration utilizing standard net/smtp libraries"
        ],
        id: [
          "Layanan backend Go (Golang) untuk kinerja tinggi dan penggunaan memori rendah",
          "API Google Gemini untuk ekstraksi teks terstruktur JSON dan analisis gambar",
          "Pustaka go-telegram-bot-api untuk antarmuka bot obrolan yang kaya",
          "Konfigurasi pengiriman SMTP menggunakan pustaka bawaan net/smtp"
        ]
      }
    }
  }
];
