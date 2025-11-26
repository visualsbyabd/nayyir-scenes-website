import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import { Section } from "@/models/Section";
import { Project } from "@/models/Project";
import { unstable_noStore } from 'next/cache';
const logger = "[Login Router]: ";

export const GET = async (req: NextRequest, _: NextResponse) => {
  unstable_noStore();
  try {
    const projectsData: Project[] = [];
    const sections: Section[] = [];
    const file = await fs.readFile(
      process.cwd() + "/app/data/projects.json",
      "utf8"
    );
    const data = JSON.parse(file);

    data["UnclassedProjectes"].forEach((project: Project) => {
      projectsData.push(project);
    });
    data["Sections"].forEach(
      (section: Section) => {
        sections.push(section);
      }
    );
    return NextResponse.json(
      {
        body: JSON.stringify({
          projectsData: projectsData,
          sections: sections,
        }),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(logger, "Error reading projects data:", error);
    return NextResponse.json(
      { body: JSON.stringify({ error: error }) },
      { status: 500 }
    );
  }
};
