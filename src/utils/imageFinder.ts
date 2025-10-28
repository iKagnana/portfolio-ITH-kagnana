import fs from "fs";
import path from "path";

export function getProjectImages(projectTitle: string): string[] {
  try {
    const projectDir = path.join(
      process.cwd(),
      "public",
      "projects_screens",
      projectTitle
    );

    if (!fs.existsSync(projectDir)) {
      return [];
    }

    const files = fs.readdirSync(projectDir);
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];

    return files
      .filter((file) =>
        imageExtensions.some((ext) => file.toLowerCase().endsWith(ext))
      )
      .map((file) => `/projects_screens/${projectTitle}/${file}`);
  } catch (error) {
    console.error(`Error reading project images for ${projectTitle}:`, error);
    return [];
  }
}

export function getProjectTitleScreen(projectTitle: string): string | null {
  try {
    const projectDir = path.join(
      process.cwd(),
      "public",
      "projects_screens",
      projectTitle
    );

    if (!fs.existsSync(projectDir)) {
      return null;
    }

    const files = fs.readdirSync(projectDir);
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];

    const titleScreens = files
      .filter((file) =>
        imageExtensions.some((ext) => file.toLowerCase().endsWith(ext))
      )
      .filter((file) => file.toLowerCase().includes("title"));

    if (titleScreens.length > 0) {
      return `/projects_screens/${projectTitle}/${titleScreens[0]}`;
    }

    return null;
  } catch (error) {
    console.error(`Error reading title screen for ${projectTitle}:`, error);
    return null;
  }
}