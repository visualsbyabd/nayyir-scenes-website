import { PortfolioData } from "@/models/PortfolioData";
import { Project } from "@/models/Project";
import { Section } from "@/models/Section";

export async function getPortfolioData(): Promise<PortfolioData> {
  try {
    const headers: Headers = new Headers();
    headers.set("Authorization", process.env.API_KEY ?? "");
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST!}/portfolio/api/`, {
      method: "GET",
      headers: headers,
      cache: "no-store",
    });
    const data = JSON.parse((await res.json()).body);
    return data ?? { projectsData: [] as Project[], sections: [] as Section[] };
  } catch (error) {
    console.log("[getPortfolioData]: Error fetching portfolio data:", error);
    return { projectsData: [] as Project[], sections: [] as Section[] };
  }
}
