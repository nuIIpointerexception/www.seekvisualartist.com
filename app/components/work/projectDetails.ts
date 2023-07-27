export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 1,
        name: "Code Wars Solutions",
        description:
      "Just a couple of solutions for www.codewars.com problems. I'm currently ranked 7 kyu.",
        technologies: ["Rust", "C++"],
        github: "https://github.com/nuIIpointerexception/codewars",
        demo: "https://github.com/nuIIpointerexception/codewars",
        image: "/projects/codewars.webp",
        available: false,
    },
    {
        id: 2,
        name: "Coming Soon",
        description:
      "Sorry, but I'm currently working on a couple of projects. I'll update this section soon.",
        technologies: ["Zig"],
        github: "https://github.com/nuIIpointerexception/",
        demo: "https://github.com/nuIIpointerexception/",
        image: "/projects/construction.webp",
        available: false,
    },
];
