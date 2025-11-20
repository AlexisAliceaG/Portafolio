import type { Experience,Projects } from './type';

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
  }
];