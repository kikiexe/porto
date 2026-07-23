export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Education {
  school: string;
  degree: string;
  gpa: string;
  period: string;
  focus: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Profile {
  name: string;
  role: string;
  email: string;
  linkedin: string;
  github: string;
  url: string;
  location: string;
  summary: string;
  education: Education;
  experience: Experience[];
  skills: SkillGroup[];
}

export const profile: Profile = {
  name: "Putra Ajril Fatah",
  role: "Full Stack & Web3 Developer",
  email: "putraajril2@gmail.com",
  linkedin: "linkedin.com/in/ajrilfatah",
  github: "github.com/kikiexe",
  url: "https://ajrilfatah.vercel.app",
  location: "Sleman, D.I. Yogyakarta",
  summary: "Full Stack & Web3 Developer focused on decentralized architecture and secure systems. Proven experience building smart contracts, ZK-proof integrations, and automated escrow systems. Passionate about solving complex data integrity challenges and contributing to robust, scalable infrastructures.",
  education: {
    school: "Universitas Amikom Yogyakarta",
    degree: "Bachelor of Informatics",
    gpa: "3.32/4.00",
    period: "2022-2026",
    focus: "Programming/Data Science"
  },
  experience: [
    {
      company: "Munk Studio",
      role: "Full Stack Developer",
      period: "August 2025 - Present",
      description: [
        "Lead client communication and translate business requirements into technical specifications.",
        "Architect system design and select appropriate tech stacks for each project.",
        "Plan and manage development sprints to ensure timely delivery.",
        "Build and maintain full-stack web and Web3 applications across frontend and backend layers."
      ]
    }
  ],
  skills: [
    {
      title: "Languages & Frameworks",
      skills: ["Solidity", "Move", "Node.js", "Python", "Laravel", "Foundry"]
    },
    {
      title: "Frontend",
      skills: ["React", "Inertia.js", "Next.js", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Blockchain & Web3",
      skills: ["Smart Contracts", "ZK Proofs", "IPFS", "DeFi", "NFT", "Wallet Integration"]
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MySQL", "Supabase"]
    },
    {
      title: "Tools",
      skills: ["Git", "Postman", "Figma", "Visual Studio", "Docker"]
    },
    {
      title: "Soft Skills",
      skills: ["Adaptability", "Teamwork", "Problem-Solving", "Communication", "Crypto Market Analysis"]
    }
  ]
};
