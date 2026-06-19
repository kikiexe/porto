export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: 'web3' | 'web' | 'mobile';
  status: 'completed' | 'in-progress';
  links?: { github?: string; live?: string; };
}

export const projects: Project[] = [
  {
    title: "Veilfi",
    description: "Decentralized yield aggregation platform built with smart contracts and zero-knowledge circuits. Users earn yield across multiple DeFi strategies while preserving privacy through ZK proofs. Ensures secure fund management, verifiable compliance, and trustless operation without centralized intermediaries.",
    tags: ["Solidity", "ZK Circuits", "Web3"],
    category: "web3",
    status: "completed"
  },
  {
    title: "Velipe",
    description: "Decentralized document verification platform built with smart contracts and a Web3 frontend. Enables secure issuance and validation of digital documents on-chain using IPFS for immutable storage. Eliminates reliance on centralized authorities through blockchain-enforced authenticity.",
    tags: ["Solidity", "IPFS", "Web3"],
    category: "web3",
    status: "completed"
  },
  {
    title: "SathaFly",
    description: "Web-based dApp for purchasing flight tickets as NFTs using IDRX tokens. Smart contract automatically executes refunds for flight delays or cancellations without manual claims.",
    tags: ["Solidity", "IDRX", "NFT", "Web3", "ERC-20"],
    category: "web3",
    status: "completed"
  },
  {
    title: "Gasan",
    description: "AI-driven fraud prevention platform for community savings (arisan). Mitigates default risks through predictive analytics and automated escrow disbursements. Ensures transparent fund management without reliance on manual verification.",
    tags: ["Python", "FastAPI", "Escrow"],
    category: "web",
    status: "in-progress"
  },
  {
    title: "June Label",
    description: "Modern e-commerce website with premium product gallery managed via Filament Admin Panel. Integrated cart and checkout system for seamless end-to-end shopping experience.",
    tags: ["Laravel", "Inertia.js", "React", "Filament"],
    category: "web",
    status: "completed"
  },
  {
    title: "SiPandu-DM",
    description: "Engineered an offline-first mobile application with a strict 3-tier architecture to monitor Type 2 Diabetes risk at the community level. Implemented robust local data synchronization using the Outbox Pattern and Isar NoSQL for reliable operation in low-connectivity environments. Designed a secure backend API with Python, integrating AES-256-GCM encryption and Role-Based Access Control to ensure medical data confidentiality and regulatory compliance.",
    tags: ["Flutter", "FastAPI", "PostgreSQL", "Drift", "Docker"],
    category: "mobile",
    status: "in-progress"
  },
  {
    title: "Billet",
    description: "Built an on-chain smart ticketing protocol on Base Layer 2 utilizing ERC-1155 to mitigate scalping through trustless escrow and strict secondary market restrictions. Architected on-chain price ceiling enforcement and conditional royalty routing (ERC-2981) to automatically restrict peer-to-peer transfers and manage event organizer revenues. Designed a decoupled Web3 architecture integrating smart contracts, a Ponder-based indexer for efficient GraphQL event querying, and a Next.js/Wagmi frontend.",
    tags: ["Solidity", "Next.js", "Foundry", "Base L2", "Ponder"],
    category: "web3",
    status: "completed"
  }
];
