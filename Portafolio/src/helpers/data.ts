import type { Experience, Projects, Skills } from "./type";

export const experiences: Experience[] = [
  {
    company: "Honeywell Aerospace",
    position: "professionalexperience.honeywell.positions",
    startDate: "Dec 2021",
    endDate: "Dec 2022",
    contributions: [
      "professionalexperience.honeywell.contributions.point1",
      "professionalexperience.honeywell.contributions.point2",
    ],
  },
  {
    company: "Agrovizion",
    position: "professionalexperience.agrovizion.positions",
    startDate: "Mar 2023",
    endDate: "Feb 2025",
    contributions: [
      "professionalexperience.agrovizion.contributions.point1",
      "professionalexperience.agrovizion.contributions.point2",
    ],
  },
  {
    company: "Occasional",
    position: "professionalexperience.occasional.positions",
    startDate: "Feb 2025",
    endDate: "Nov 2025",
    contributions: [
      "professionalexperience.occasional.contributions.point1",
      "professionalexperience.occasional.contributions.point2",
    ],
  }
];
export const skills = [
  { name: "PHP", logo: "devicon:php" },
  { name: "C#", logo: "devicon:csharp" },
  { name: "Python", logo: "devicon:python" },
  { name: "JavaScript", logo: "devicon:javascript" },
  { name: "AWS", logo: "logos:aws" },
  { name: "MySQL", logo: "devicon:mysql-wordmark" },
  { name: "PostgreSQL", logo: "devicon:postgresql-wordmark" },
  { name: "Linux", logo: "devicon:linux" },
  { name: "Laravel", logo: "devicon:laravel-wordmark" },
  { name: ".NET", logo: "devicon:dotnetcore" },
  { name: "JWT Tokens", logo: "logos:jwt" },
];
export const projects: Projects[] = [
  {
    name: "projects.stationery.name",
    status: "projects.stationery.status",
    description: "projects.stationery.description",
    technologies: [
      { name: "Laravel", logo: "devicon:laravel-wordmark" },
      { name: "PHP", logo: "devicon:php" },
      { name: "PostgreSQL", logo: "devicon:postgresql-wordmark" },
      { name: "AWS", logo: "logos:aws" }
    ],
    link: "https://papeleriamary.ddns.net/",
    github: "https://github.com/AlexisAliceaG/Stationery",
    startDate: "Oct 2024",
    endDate: "Mar 2025",
    image: "/images/StationeryMary.PNG",
  },
];