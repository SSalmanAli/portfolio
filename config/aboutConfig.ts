export interface AboutContent {
  title: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
}

export const aboutConfig: AboutContent = {
  title: "About Me",
  imageSrc: "/aboutSection/about.svg", // For girl change to /aboutSection/girl-about.svg
  imageAlt: "About Me Illustration",
  paragraphs: [
    `If you had asked me three years ago what I wanted to do, my answer would have been anything but coding. It felt like an impenetrable wall—something far too complex, frustrating, and simply not for me. I was convinced that I wasn’t wired for it, that programming was best left to those who naturally excelled at it.`,

    `Then, I stumbled upon a quote that changed everything:
\n
“The magic you are looking for is in the work you are avoiding.”
\n
That single line resonated deeply. It made me question my own limits—was I truly incapable, or was I just too afraid to try? With that thought, I took my first step into the world of coding, expecting frustration but hoping for something different. What I found was a challenge that awakened something in me: curiosity, determination, and a sense of accomplishment I had never felt before.
\n
What started as an experiment soon became an obsession. The very thing I once dreaded turned into the thing I now love the most. Every problem I solve, every project I build, every error I debug—it all fuels my passion even further. The process of transforming an idea into reality through lines of code is nothing short of magical, and I thrive on that magic every single day.`,

    `Today, I am not just someone who codes—I am a creator, a problem solver, and a relentless learner. I push my limits, embrace new challenges, and constantly evolve. Looking back, I realize that my greatest breakthrough wasn’t just learning to code—it was learning to believe in myself.
\n
If there’s one thing my journey has taught me, it’s this: The things we avoid often hold the greatest potential for growth.`,
  ],
};
