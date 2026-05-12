export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: 'web3' | 'web' | 'game' | 'tool';
  status: 'completed' | 'in-progress';
  links?: { github?: string; live?: string; };
}

export const projects: Project[] = [
  {
    title: "SathaFly",
    description: "A web-based dApp for purchasing flight tickets as NFTs using IDRX tokens. Automated refunds for flight delays or cancellations via smart contracts.",
    tags: ["Solidity", "SvelteKit", "Ethers.js", "Foundry"],
    category: "web3",
    status: "completed"
  },
  {
    title: "Velipe",
    description: "Decentralized document verification platform. Enables secure issuance, verification, and validation of digital documents using blockchain and IPFS.",
    tags: ["Solidity", "React", "IPFS", "Node.js"],
    category: "web3",
    status: "completed"
  },
  {
    title: "Veilfi",
    description: "Decentralized yield aggregation platform with privacy preservation through ZK proofs. Secure fund management across multiple DeFi strategies.",
    tags: ["Solidity", "Circom", "ZK-proofs", "React"],
    category: "web3",
    status: "completed"
  },
  {
    title: "Gasan",
    description: "AI-driven fraud prevention platform for community savings (arisan). Automated escrow system and predictive analytics to mitigate default risks.",
    tags: ["Python", "FastAPI", "Escrow", "AI"],
    category: "web",
    status: "in-progress"
  },
  {
    title: "Mujur Jaya",
    description: "Modern company profile website with dynamic product gallery managed in real-time and integrated business inquiry forms.",
    tags: ["Next.js", "Supabase", "Tailwind CSS"],
    category: "web",
    status: "completed"
  },
  {
    title: "June Label",
    description: "Premium e-commerce website with integrated cart, checkout, and administrative dashboard for product management.",
    tags: ["Laravel", "Inertia.js", "React", "Filament"],
    category: "web",
    status: "completed"
  },
  {
    title: "Mun Color",
    description: "Browser extension for color manipulation and analysis. Features visual processing and interactive color tools for designers.",
    tags: ["JavaScript", "HTML/CSS", "Browser Extension"],
    category: "tool",
    status: "completed"
  },
  {
    title: "Guardian Of The Forest",
    description: "A tower defense game with a nature-guardian theme. Focused on gameplay mechanics, enemy wave systems, and pixel art UI.",
    tags: ["Unity", "C#", "Aseprite"],
    category: "game",
    status: "completed"
  }
];
