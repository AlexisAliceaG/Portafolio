export type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  contributions: string[];
};
export type Projects = {
  name: string;
  status: string;
  description: string;
  technologies?: {
    name: string;
    logo: string;
  }[];
  link?: string;
  github?: string;
  image?: string;
  startDate?: string;
  endDate?: string;
};
export type Skills = {
  categorie: string;
  technologies: {
    name: string;
    logo: string;
  }[];
};
