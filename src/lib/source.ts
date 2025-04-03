import { createElement } from "react";
import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { FaLinux } from "react-icons/fa";
import { IconType } from "react-icons";
import {
  TbApi,
  TbApps,
  TbBook2,
  TbBrain,
  TbBrandAdobePhotoshop,
  TbBrandJavascript,
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandRust,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBriefcase,
  TbCategory2,
  TbChartDots3,
  TbCircle,
  TbCode,
  TbComponents,
  TbDatabase,
  TbDeviceAnalytics,
  TbDevices2,
  TbDroplet,
  TbGitBranch,
  TbStack,
  TbUxCircle,
} from "react-icons/tb";
import { SiNixos } from "react-icons/si";
import { FaCss3 } from "react-icons/fa6";

// `loader()` also assign a URL to your pages
// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const iconMap: { [key: string]: IconType } = {
  book: TbBook2,
  briefCase: TbBriefcase,
  projects: TbComponents,
  computerFlow: TbDevices2,
  systemFlowCharts: TbChartDots3,
  sdlc: TbDeviceAnalytics,
  applications: TbApps,
  nixOs: SiNixos,
  languages: TbCode,
  frontendDevelopment: TbStack,
  backendDevelopment: TbStack,
  database: TbDatabase,
  skills: TbBrain,
  css3: FaCss3,
  fumaDocs: TbCircle,
  nextJs: TbBrandNextjs,
  react: TbBrandReact,
  tailwind: TbBrandTailwind,
  uiUx: TbUxCircle,
  restApi: TbApi,
  mySql: TbBrandMysql,
  git: TbGitBranch,
  linux: FaLinux,
  hyprland: TbDroplet,
  photoshop: TbBrandAdobePhotoshop,
  javascript: TbBrandJavascript,
  rust: TbBrandRust,
  typescript: TbBrandTypescript,
  // Add additional mappings as needed
};

export const source = loader({
  baseUrl: "/codex",
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }

    if (icon in iconMap)
      return createElement(iconMap[icon as keyof typeof iconMap]);
  },
});
