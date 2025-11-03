import { Asset } from "@/utils/Assets";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBullhorn,
  faCalendarAlt,
  faCameraRetro,
  faChartBar,
  faCut,
  faFeatherAlt,
  faFilm,
  faLightbulb,
  faMapMarkerAlt,
  faPenNib,
  faShareAlt,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

export const nayyirLogoUlt = "Nayyir LogoUlt--";

export const headerTabs = [
  { title: "Home", href: "/" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Contact", href: "/#contact" },
];

export const clientsLogosAssets: Array<Asset> = [
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
  {
    src: "/clients/1.png",
    alt: "Client 1 Has Trusted Nayyir Scenes to get their Media Production jobs done!",
    width: 4267,
    height: 4267,
  },
];

export interface ServiceData {
  title: string;
  subtitle: string;
  primaryIcon: IconProp;
  secondaryIcon: IconProp;
}

export const servicesData: ServiceData[] = [
  {
    title: "Planning",
    subtitle:
      "Strategic concept development, detailed scriptwriting, and scheduling to lay a solid foundation for your project.",
    primaryIcon: faMapMarkerAlt,
    secondaryIcon: faCalendarAlt,
  },
  {
    title: "Writing",
    subtitle:
      "Crafting compelling narratives, dialogue, and clear messaging that truly resonates with your target audience.",
    primaryIcon: faFeatherAlt,
    secondaryIcon: faPenNib,
  },
  {
    title: "Shooting",
    subtitle:
      "High-definition video capture, professional lighting, and clean sound recording using industry-leading equipment.",
    primaryIcon: faVideo,
    secondaryIcon: faCameraRetro,
  },
  {
    title: "Editing",
    subtitle:
      "Turning raw footage into a polished final product, including color grading, audio mixing, and motion graphics.",
    primaryIcon: faCut,
    secondaryIcon: faFilm,
  },
  {
    title: "Social Media Management",
    subtitle:
      "Developing content calendars, scheduling, and strategic posting to maximize reach and engagement across all platforms.",
    primaryIcon: faBullhorn,
    secondaryIcon: faShareAlt,
  },
  {
    title: "Reporting",
    subtitle:
      "Detailed performance analysis, audience insights, and actionable metrics to track ROI and optimize future campaigns.",
    primaryIcon: faChartBar,
    secondaryIcon: faLightbulb,
  },
];

export interface ProjectCount {
  title: string;
  subtitle: string;
  count: number;
}

export const projectsCountsData: ProjectCount[] = [
  {
    title: "Videos Delivered",
    subtitle:
      "High-quality, polished videos successfully delivered and approved by our clients.",
    count: 2122,
  },
  {
    title: "Content Expertise",
    subtitle:
      "Total range of content types and cinematic styles we have successfully mastered and produced.",
    count: 15,
  },
  {
    title: "Active Partnerships",
    subtitle:
      "Valued clients currently in active production or management contracts with our team.",
    count: 12,
  },
  {
    title: "Clients Served",
    subtitle:
      "Cumulative number of businesses, brands, and organizations we've proudly partnered with.",
    count: 200,
  },
];
