export interface TranslationDict {
  navAbout: string;
  navWork: string;
  navStack: string;
  navContact: string;
  projectsSub: string;
  projectsTitle: string;
  skillsSub: string;
  skillsTitle: string;
  skillsDesc: string;
  aboutSub: string;
  contactSub: string;
  contactTitle: string;
  contactName: string;
  contactEmail: string;
  contactMessage: string;
  contactSend: string;
  contactSending: string;
  contactSuccess: string;
  contactError: string;
  backToWork: string;
  category: string;
  status: string;
  tech: string;
  links: string;
  privateProject: string;
  overview: string;
  challenge: string;
  solution: string;
  features: string;
  architecture: string;
  notFoundTitle: string;
  notFoundDesc: string;
  returnHome: string;
  completed: string;
  inProgress: string;
}

export const translations: Record<'en' | 'id', TranslationDict> = {
  en: {
    navAbout: "About",
    navWork: "Work",
    navStack: "Stack",
    navContact: "Contact",
    projectsSub: "02 - Selected Work",
    projectsTitle: "Projects",
    skillsSub: "03 - Tech Stack",
    skillsTitle: "Skills",
    skillsDesc: "Technologies and tools I use to bring ideas to life.",
    aboutSub: "01 - About Me",
    contactSub: "04 - Get In Touch",
    contactTitle: "Let's work together.",
    contactName: "Name",
    contactEmail: "Email",
    contactMessage: "Message",
    contactSend: "Send Message",
    contactSending: "Sending...",
    contactSuccess: "Message sent successfully!",
    contactError: "Something went wrong. Please try again.",
    backToWork: "Back to Work",
    category: "Category",
    status: "Status",
    tech: "Technologies",
    links: "Links",
    privateProject: "Private Repository / Internal Project",
    overview: "Overview",
    challenge: "The Challenge",
    solution: "The Solution",
    features: "Key Features",
    architecture: "Technical Architecture",
    notFoundTitle: "Project Not Found",
    notFoundDesc: "The project you are looking for does not exist or has been removed.",
    returnHome: "Return Home",
    completed: "Completed",
    inProgress: "In Progress"
  },
  id: {
    navAbout: "Tentang",
    navWork: "Karya",
    navStack: "Keahlian",
    navContact: "Kontak",
    projectsSub: "02 - Karya Pilihan",
    projectsTitle: "Proyek",
    skillsSub: "03 - Keahlian Utama",
    skillsTitle: "Teknologi",
    skillsDesc: "Teknologi dan peralatan yang saya gunakan untuk mewujudkan solusi.",
    aboutSub: "01 - Tentang Saya",
    contactSub: "04 - Hubungi Saya",
    contactTitle: "Mari berkolaborasi bersama.",
    contactName: "Nama",
    contactEmail: "Surel (Email)",
    contactMessage: "Pesan",
    contactSend: "Kirim Pesan",
    contactSending: "Mengirim...",
    contactSuccess: "Pesan berhasil terkirim!",
    contactError: "Terjadi kesalahan. Silakan coba lagi.",
    backToWork: "Kembali ke Karya",
    category: "Kategori",
    status: "Status",
    tech: "Teknologi",
    links: "Tautan",
    privateProject: "Repositori Privat / Proyek Internal",
    overview: "Ikhtisar",
    challenge: "Tantangan",
    solution: "Solusi",
    features: "Fitur Utama",
    architecture: "Arsitektur Teknis",
    notFoundTitle: "Proyek Tidak Ditemukan",
    notFoundDesc: "Proyek yang Anda cari tidak eksis atau telah dihapus.",
    returnHome: "Kembali ke Beranda",
    completed: "Selesai",
    inProgress: "Dalam Proses"
  }
};
