export interface SkillGroup {
  title: Record<'en' | 'id', string>;
  skills: string[];
}

export interface Education {
  school: string;
  degree: Record<'en' | 'id', string>;
  gpa: string;
  period: string;
  focus: string;
  thesis?: Record<'en' | 'id', string>;
}

export interface Experience {
  company: string;
  role: Record<'en' | 'id', string>;
  period: string;
  description: Record<'en' | 'id', string[]>;
}

export interface Profile {
  name: string;
  role: Record<'en' | 'id', string>;
  email: string;
  linkedin: string;
  github: string;
  telegram?: string;
  url: string;
  location: string;
  summary: Record<'en' | 'id', string>;
  education: Education;
  experience: Experience[];
  skills: SkillGroup[];
}

export const profile: Profile = {
  name: "Putra Ajril Fatah",
  role: {
    en: "Full Stack & Web3 Developer",
    id: "Pengembang Full Stack & Web3"
  },
  email: "putraajril2@gmail.com",
  linkedin: "linkedin.com/in/ajrilfatah",
  github: "github.com/kikiexe",
  telegram: "sathafy",
  url: "https://ajrilfatah.vercel.app",
  location: "Yogyakarta, Indonesia",
  summary: {
    en: "Full Stack Developer with 1+ year at a software house, building multi-tenant, offline-first, and financial-transaction systems (POS, payroll, escrow, ledgers) with Laravel, Svelte 5, PostgreSQL, and Redis. Handles the full cycle from client requirements to architecture, sprint planning, and deployment. Secondary experience in Solidity smart contracts and Web3 applications.",
    id: "Full Stack Developer dengan pengalaman 1+ tahun di software house, membangun sistem multi-tenant, offline-first, dan transaksi finansial (POS, payroll, escrow, ledger) dengan Laravel, Svelte 5, PostgreSQL, dan Redis. Menangani siklus penuh mulai dari kebutuhan klien hingga arsitektur, perencanaan sprint, dan deployment. Berpengalaman sekunder dalam smart contract Solidity dan aplikasi Web3."
  },
  education: {
    school: "Universitas Amikom Yogyakarta",
    degree: {
      en: "Bachelor of Informatics",
      id: "Sarjana Informatika"
    },
    gpa: "3.32/4.00",
    period: "2022 – 2026",
    focus: "Programming & Data Science",
    thesis: {
      en: "Thesis: Implementation of a Blockchain- and IPFS-Based Digital Document Notarization System Using Smart Contracts on Base Layer 2 (Velipe) · Grade: A",
      id: "Skripsi: Implementasi Sistem Notarisasi Dokumen Digital Berbasis Blockchain dan IPFS Menggunakan Smart Contract pada Base Layer 2 (Velipe) · Nilai: A"
    }
  },
  experience: [
    {
      company: "Munk Studio",
      role: {
        en: "Full Stack Developer",
        id: "Pengembang Full Stack"
      },
      period: "2022 – 2026",
      description: {
        en: [
          "Led communication with clients and translated business requirements into technical specs for projects, some of them live in production.",
          "Architected system design and selected tech stacks per project, delivering projects on schedule.",
          "Planned and ran sprints for a team, covering frontend, backend, and deployment.",
          "Built and maintained full-stack web and Web3 applications."
        ],
        id: [
          "Memimpin komunikasi dengan klien dan menerjemahkan kebutuhan bisnis menjadi spesifikasi teknis untuk proyek, beberapa di antaranya aktif di produksi.",
          "Merancang arsitektur sistem dan memilih teknologi per proyek, menyelesaikan proyek tepat waktu.",
          "Merencanakan dan menjalankan sprint pengembangan tim, mencakup frontend, backend, dan deployment.",
          "Membangun dan memelihara aplikasi web full-stack dan aplikasi Web3."
        ]
      }
    }
  ],
  skills: [
    {
      title: {
        en: "Programming Languages",
        id: "Bahasa Pemrograman"
      },
      skills: ["TypeScript", "JavaScript", "Python", "PHP", "Dart", "Solidity", "Node.js"]
    },
    {
      title: {
        en: "Frontend & Mobile",
        id: "Frontend & Mobile"
      },
      skills: ["Svelte 5", "React", "Next.js", "Inertia.js", "Flutter", "Tailwind CSS", "PWA"]
    },
    {
      title: {
        en: "Blockchain & Web3",
        id: "Blockchain & Web3"
      },
      skills: ["Smart Contracts", "Zero-Knowledge Proofs (ZK)", "Base L2 & EVM", "Wagmi & Ponder", "Foundry", "IPFS", "DeFi & Tokenomics"]
    },
    {
      title: {
        en: "Database & Storage",
        id: "Basis Data & Penyimpanan"
      },
      skills: ["PostgreSQL", "MySQL", "Redis", "IndexedDB (Dexie.js)", "Isar NoSQL & Drift", "Supabase"]
    },
    {
      title: {
        en: "Backend & DevOps",
        id: "Backend & DevOps"
      },
      skills: ["Laravel (Octane)", "FastAPI", "FrankenPHP", "Docker", "Git", "Postman"]
    },
    {
      title: {
        en: "Architecture & Soft Skills",
        id: "Arsitektur & Manajemen"
      },
      skills: ["System Architecture", "Offline-First Design", "Technical Leadership", "Agile Sprint Planning", "Problem-Solving", "Cross-Functional Collaboration"]
    }
  ]
};
