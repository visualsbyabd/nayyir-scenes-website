import { Project } from "@/models/Project";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFlag,
  faCircleInfo,
  faClapperboard,
  faChartLine,
  faBullhorn,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

export const genres: {
  id: number;
  name: string;
  icon: IconProp;
  bgColor: string;
}[] = [
  { id: 1, name: "Political", icon: faFlag, bgColor: "bg-red-500/15" },
  { id: 2, name: "Information", icon: faCircleInfo, bgColor: "bg-blue-500/15" },
  { id: 3, name: "Ad", icon: faClapperboard, bgColor: "bg-green-500/15" },
  { id: 4, name: "Economical", icon: faChartLine, bgColor: "bg-yellow-500/15" },
  { id: 5, name: "Marketing", icon: faBullhorn, bgColor: "bg-purple-500/15" },
  { id: 6, name: "Advertising", icon: faLightbulb, bgColor: "bg-pink-500/15" },
];
