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
  location: "Sleman, D.I. Yogyakarta",
  summary: {
    en: "Full Stack & Web3 Developer focused on decentralized architecture and secure systems. Proven experience building smart contracts, ZK-proof integrations, and automated escrow systems. Passionate about solving complex data integrity challenges and contributing to robust, scalable infrastructures.",
    id: "Pengembang Full Stack & Web3 yang berfokus pada arsitektur terdesentralisasi dan sistem yang aman. Memiliki pengalaman terbukti dalam membangun smart contract, integrasi ZK-proof, dan sistem escrow otomatis. Sangat bersemangat dalam memecahkan tantangan integritas data yang kompleks dan berkontribusi pada infrastruktur yang kuat dan terukur."
  },
  education: {
    school: "Universitas Amikom Yogyakarta",
    degree: {
      en: "Bachelor of Informatics",
      id: "Sarjana Informatika"
    },
    gpa: "3.32/4.00",
    period: "2022-2026",
    focus: "Programming/Data Science"
  },
  experience: [
    {
      company: "Munk Studio",
      role: {
        en: "Full Stack Developer",
        id: "Pengembang Full Stack"
      },
      period: "August 2025 - Present",
      description: {
        en: [
          "Lead client communication and translate business requirements into technical specifications.",
          "Architect system design and select appropriate tech stacks for each project.",
          "Plan and manage development sprints to ensure timely delivery.",
          "Build and maintain full-stack web and Web3 applications across frontend and backend layers."
        ],
        id: [
          "Memimpin komunikasi dengan klien dan menerjemahkan kebutuhan bisnis menjadi spesifikasi teknis.",
          "Merancang arsitektur sistem dan memilih teknologi yang tepat untuk setiap proyek.",
          "Merencanakan dan mengelola sprint pengembangan untuk memastikan pengiriman tepat waktu.",
          "Membangun dan memelihara aplikasi web full-stack dan Web3 di seluruh lapisan frontend dan backend."
        ]
      }
    }
  ],
  skills: [
    {
      title: {
        en: "Languages & Frameworks",
        id: "Bahasa Pemrograman & Framework"
      },
      skills: ["Solidity", "Move", "Node.js", "Python", "Laravel", "Foundry"]
    },
    {
      title: {
        en: "Frontend",
        id: "Frontend"
      },
      skills: ["React", "Inertia.js", "Next.js", "HTML", "CSS", "JavaScript"]
    },
    {
      title: {
        en: "Blockchain & Web3",
        id: "Blockchain & Web3"
      },
      skills: ["Smart Contracts", "ZK Proofs", "IPFS", "DeFi", "NFT", "Wallet Integration"]
    },
    {
      title: {
        en: "Database",
        id: "Basis Data"
      },
      skills: ["PostgreSQL", "MySQL", "Supabase"]
    },
    {
      title: {
        en: "Tools",
        id: "Peralatan"
      },
      skills: ["Git", "Postman", "Figma", "Visual Studio", "Docker"]
    },
    {
      title: {
        en: "Soft Skills",
        id: "Keahlian Interpersonal"
      },
      skills: ["Adaptability", "Teamwork", "Problem-Solving", "Communication", "Crypto Market Analysis"]
    }
  ]
};
