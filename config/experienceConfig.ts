export interface Experience {
  id: number;
  companyLogo: string;
  companyName: string;
  role: string;
  duration: string;
  description: string;
}

export const experienceConfig: Experience[] = [
  {
    id: 1,
    companyLogo: "/experienceSection/ghouse.png",
    companyName: "Certified Cloud Applied Generative AI Engineer (GenEng)",
    role: "Web Developer",
    duration: "May 2024 – Present",
    description: "My experience at Sindh Governor House has been a transformative journey, shaping me from someone who once avoided coding to a passionate developer. In the first quarter, I mastered TypeScript, building a strong foundation in type-safe, scalable coding. By the second quarter, I dived into Next.js, learning SSG, SSR, API routes, and dynamic routing, which helped me create real-world projects. Beyond technical skills, this journey instilled persistence, problem-solving, and a growth mindset. Every challenge refined my approach, proving that no problem is unsolvable. Today, I carry these lessons forward, embracing challenges and constantly evolving as a developer."}
];
