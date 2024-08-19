import type { ProjectData } from "~/types/types";

export const sites: ProjectData[] = [
    {
        name: "Email Vault",
        description: "A SaaS project to help you manage your email accounts",
        link: "https://email-vault.vercel.app",
        technologies: ["t3 stack", "tRPC", "Prisma", "Next.js", "Next Auth"],
        imageUrl: "/email-vault.png"
    },
    {
        name: "Teryaq",
        description: "Website for a group of pharmacy students in the university of jordan",
        link: "https://teryaqq.vercel.app/",
        technologies: ["Next.js", "Server Components", "headless CMS(Sanity.io)"],
        imageUrl: "/teryaq.png"
    },
    {
        name: "Premium Store",
        description: "A drop shipping platform for sellers who can't store, and ship.",
        link: "https://premium-store.website",
        technologies: ["React", "Bootstrap", "MongoDB", "Express.js", "Node.js", "Mongoose"],
        imageUrl: "/premium-store.png"
    },
    {
        name: "Larablog",
        description: "A small microblogging platform built with laravel {THERE ARE PROBLEMS WITH THE DEPLOYED VERSION}",
        link: "https://larablog-6ruonohyuq-oe.a.run.app",
        technologies: ["Laravel", "PostgreSQL", "Tailwind"],
        imageUrl: "/larablog.png"
    },
    {
        name: "Jordan USMLE Mentors",
        description: "A website for a group of medicine students in the university of jordan who teach for the USMLE exam",
        link: "https://jordanusmlementors.com",
        technologies: ["Next.js", "Server Components", "headless CMS(Sanity.io)", "Tailwind"],
        imageUrl: "/jordan-usmle-mentors.png"
    },
    {
        name: "Jordan Cyber Club",
        description: "A website for a group of cyber security students in the university of jordan",
        link: "https://jcc-seven.vercel.app/",
        technologies: ["Next.js", "Server Components", "headless CMS(Sanity.io)", "Tailwind"],
        imageUrl: "/jcc.png"
    }
];
