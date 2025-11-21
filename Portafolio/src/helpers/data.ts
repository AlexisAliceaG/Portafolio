import type { Experience,Projects,Skills } from './type';

export const experiences: Experience[] = [
  {
    company: "Honeywell Aerospace",
    position: "professionalexperience.honeywell.positions",
    startDate: "Dec 2021",
    endDate: "Dec 2022",
    contributions: [
      "professionalexperience.honeywell.contributions.point1",
      "professionalexperience.honeywell.contributions.point2"
    ]
  },
  {
    company: "Agrovizion",
    position: "professionalexperience.agrovizion.positions",
    startDate: "Mar 2023",
    endDate: "Feb 2025",
    contributions: [
      "professionalexperience.agrovizion.contributions.point1",
      "professionalexperience.agrovizion.contributions.point2"    ]
  }
];

export const skills: Skills[] = [
  {
    categorie: "projects.skills.lenguaje",
    technologies: [
      { name: "PHP", icon: "/image/php.png" },
      { name: "C#", icon: "/icons/csharp.svg" },
      { name: "Python", icon: "/icons/python.svg" },
      { name: "JavaScript", icon: "/icons/js.svg" },
    ],
  },
  {
    categorie: "projects.skills.cloud",
    technologies: [
      { name: "AWS", icon: "/icons/aws.svg" },
    ],
  },
  {
    categorie: "projects.skills.database",
    technologies: [
      { name: "MySQL", icon: "/icons/mysql.svg" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "SQL Server", icon: "/icons/sqlserver.svg" },
    ],
  },
  {
    categorie: "projects.skills.servers",
    technologies: [
      { name: "Linux", icon: "/icons/linux.svg" },
    ],
  },
  {
    categorie: "projects.skills.frameworks",
    technologies: [
      { name: "Laravel", icon: "/icons/laravel.svg" },
      { name: ".NET", icon: "/icons/dotnet.svg" },
    ],
  },
  {
    categorie: "projects.skills.autentication",
    technologies: [
      { name: "JWT Tokens", icon: "/icons/jwt.svg" },
    ],
  },
  {
    categorie: "projects.skills.cibersecurity",
    technologies: [
      { name: "HTTPS y SSL", icon: "/icons/ssl.svg" },
    ],
  }
];


export const projects: Projects[] = [
  {
    name: "projects.stationery.name",
    status: "projects.stationery.status",
    description: "projects.stationery.description",
    technologies: ["Laravel", "PHP","Postgressql", "Tailwind CSS", "AWS"],
    link: "https://papeleriamary.ddns.net/",
    github: "https://github.com/AlexisAliceaG/Stationery",
    startDate: "Oct 2024",
    endDate: "Mar 2025",
    image: "/images/StationeryMary.PNG"
  },
   {
    name: "projects.stationery.name",
    status: "projects.stationery.status",
    description: "projects.stationery.description",
    technologies: ["Laravel", "PHP","Postgressql", "Tailwind CSS", "AWS"],
    link: "https://papeleriamary.ddns.net/",
    github: "https://github.com/AlexisAliceaG/Stationery",
    startDate: "Oct 2024",
    endDate: "Mar 2025",
    image: "/images/StationeryMary.PNG"
  },
];