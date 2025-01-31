export interface Project {
  id: number;
  number: string;
  title: string;
  description: string;
  imageLight: string;
  imageDark: string;
  reverse?: boolean;
  link?: string;
}

export const projectsConfig: Project[] = [
  {
    id: 1,
    number: "01",
    title: "Crypto News Blogging Website",
    description: `Crypto Geeks is a cutting-edge platform designed for crypto enthusiasts, traders, and investors. Built with Next.js and TypeScript, it offers a seamless, high-performance experience with a sleek dark-mode interface. Our goal is to provide insightful market analysis, real-time updates, and a user-friendly space to explore the ever-evolving world of cryptocurrency. Whether you're a beginner or an expert, Crypto Geeks Alpha equips you with the knowledge and tools to stay ahead in the digital asset space. 🚀`,
    imageLight: "/projectSection/blog.png",
    imageDark: "/projectSection/blog.png",
    reverse: false,
    link: "https://crypto-geeks-alpha.vercel.app/",
  },
  {
    id: 2,
    number: "02",
    title: "FoodTuck - Q-Commerce Website",
    description: `FoodTuck is a modern and visually appealing food ordering platform designed for a seamless user experience. Built with Next.js and TypeScript, it features an intuitive interface with high-quality imagery, smooth navigation, and a responsive design. Whether you're craving your favorite meals or exploring new cuisines, FoodTuck makes ordering effortless. With a sleek UI and optimized performance, it brings convenience and style to online food discovery. 🍽️🚀`,
    imageLight: "/projectSection/foodtuck.png",
    imageDark: "/projectSection/foodtuck.png",
    reverse: true,
    link: "https://foodtuck-red.vercel.app/",
  },
  {
    id: 3,
    number: "03",
    title: "Dynamic Resume Builder",
    description: `**Resume Builder** is a sleek and user-friendly web application designed to help users create professional resumes effortlessly. Built with Next.js and TypeScript, it offers a clean, intuitive interface with customizable sections for work experience, education, and skills. With a responsive design and smooth performance, Resume Builder ensures a seamless experience across all devices. Whether you're a student, a job seeker, or a professional, this tool simplifies the resume creation process, allowing you to generate a polished document in just a few clicks. 🚀📄`,
    imageLight: "/projectSection/resume.png",
    imageDark: "/projectSection/resume.png",
    reverse: false,
    link: "https://resume-builder-eight-mauve.vercel.app/",
  },
];
