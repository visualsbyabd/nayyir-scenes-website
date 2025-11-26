import { Project } from "@/models/Project";

export interface Section {
  id: number;
  title: string;
  subtitle: string;
  projects: Project[];
}
