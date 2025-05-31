import { Timeline, t_Timeline } from "@/ui/aceternity_Timeline";
import Link from "next/link";
import React from "react";

export function CareerJourneyTimeline() {
  const data: t_Timeline[] = [
    {
      title: "Present",
      subTitle: (
        <div className="mt-5">
          <h5 className="text-xl ">
            {new Date().getFullYear() - new Date("2024").getFullYear()} Year
          </h5>
          <div className="mt-2">
            <h6 className="text-base">Frontend Developer</h6>
            <h6 className="text-sm">
              Taif Al Joud Technology L.L.C - Full Time
            </h6>
            <h6 className="text-sm">UAE - Dubai</h6>
          </div>
        </div>
      ),
      content: (
        <>
          <h6 className="font-semibold">Tech Stack</h6>
          <div className="flex flex-wrap gap-5 text-sm mt-2">
            <Link
              key={"react"}
              href={"#"}
              className="px-5 rounded-full shadow hover:shadow-inner hover:bg-gray-200 duration-200 dark:bg-white/10 dark:hover:bg-gray-200/50 no-underline"
            >
              React
            </Link>
            <Link
              key={"fumaDocs"}
              href={"#"}
              className="px-5 rounded-full shadow hover:shadow-inner hover:bg-gray-200 duration-200 dark:bg-white/10 dark:hover:bg-gray-200/50 no-underline"
            >
              FumaDocs
            </Link>
            <Link
              key={"tailwindCSS"}
              href={"#"}
              className="px-5 rounded-full shadow hover:shadow-inner hover:bg-gray-200 duration-200 dark:bg-white/10 dark:hover:bg-gray-200/50 no-underline"
            >
              TailwindCSS
            </Link>
            <Link
              key={"CSS3"}
              href={"#"}
              className="px-5 rounded-full shadow hover:shadow-inner hover:bg-gray-200 duration-200 dark:bg-white/10 dark:hover:bg-gray-200/50 no-underline"
            >
              CSS3
            </Link>
            <Link
              key={"Zustand"}
              href={"#"}
              className="px-5 rounded-full shadow hover:shadow-inner hover:bg-gray-200 duration-200 dark:bg-white/10 dark:hover:bg-gray-200/50 no-underline"
            >
              Zustand
            </Link>
            <Link
              key={"Tanstack/Query"}
              href={"#"}
              className="px-5 rounded-full shadow hover:shadow-inner hover:bg-gray-200 duration-200 dark:bg-white/10 dark:hover:bg-gray-200/50 no-underline"
            >
              Tanstack/Query
            </Link>
            <Link
              key={"Next JS"}
              href={"#"}
              className="px-5 rounded-full shadow hover:shadow-inner hover:bg-gray-200 duration-200 dark:bg-white/10 dark:hover:bg-gray-200/50 no-underline"
            >
              Next JS
            </Link>
          </div>
          <ul className="text-sm">
            <li>Web3 Wallet Integration</li>
            <li>
              Spearheading the frontend development of a key project, ensuring
              smooth and intuitive user experiences.
            </li>
            <li>
              Analyzing project requirements and crafting scalable, maintainable
              frontend solutions.
            </li>
            <li>
              Integrating seamlessly with backend services to enable efficient
              data flow and interactions.
            </li>
            <li>
              Maintaining clear documentation to support onboarding and
              continuous development.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "2024",
      subTitle: (
        <div className="mt-5">
          <div className="mt-2">
            <h6 className="text-base">Frontend Developer</h6>
            <h6 className="text-sm">
              Taif Al Joud Technology L.L.C - Full Time
            </h6>
            <h6 className="text-sm">UAE - Dubai</h6>
          </div>
        </div>
      ),
      content: (
        <>
          <ul className="text-sm">
            <li>
              Architected and implemented the entire frontend of a major project
              as the sole developer.
            </li>
            <li>
              Designed a modular, reusable component system for streamlined
              development and long-term scalability.
            </li>
            <li>
              Integrated APIs and built UI flows aligned with real-world user
              behavior and client expectations.
            </li>
            <li>
              Ensured performance and accessibility standards across devices and
              screen sizes.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "2021 - 2024",
      subTitle: (
        <div className="mt-5">
          <h5 className="text-xl ">
            {new Date("2024").getFullYear() - new Date("2021").getFullYear()}{" "}
            Years
          </h5>
          <div className="mt-2">
            <h6 className="text-base">Software Developer</h6>
            <h6 className="text-sm">
              Sparksoft Solutions .Inc - Full Time Remote
            </h6>
            <h6 className="text-sm">Philippines</h6>
          </div>
        </div>
      ),
      content: (
        <>
          <h6 className="font-semibold">Tech Stack</h6>
          <div className="flex flex-wrap gap-5 text-sm mt-2">
            <Link
              key={"react"}
              href={"#"}
              className="px-5 rounded-full shadow hover:shadow-inner hover:bg-gray-200 duration-200 dark:bg-white/10 dark:hover:bg-gray-200/50 no-underline"
            >
              React
            </Link>
            <Link
              key={"php"}
              href={"#"}
              className="px-5 rounded-full shadow hover:shadow-inner hover:bg-gray-200 duration-200 dark:bg-white/10 dark:hover:bg-gray-200/50 no-underline"
            >
              PHP
            </Link>
            <Link
              key={"mySQL"}
              href={"#"}
              className="px-5 rounded-full shadow hover:shadow-inner hover:bg-gray-200 duration-200 dark:bg-white/10 dark:hover:bg-gray-200/50 no-underline"
            >
              MySQL
            </Link>
            <Link
              key={"bootStrap"}
              href={"#"}
              className="px-5 rounded-full shadow hover:shadow-inner hover:bg-gray-200 duration-200 dark:bg-white/10 dark:hover:bg-gray-200/50 no-underline"
            >
              BootStrap
            </Link>
            <Link
              key={"nodeJS"}
              href={"#"}
              className="px-5 rounded-full shadow hover:shadow-inner hover:bg-gray-200 duration-200 dark:bg-white/10 dark:hover:bg-gray-200/50 no-underline"
            >
              NodeJS
            </Link>
            <Link
              key={"css"}
              href={"#"}
              className="px-5 rounded-full shadow hover:shadow-inner hover:bg-gray-200 duration-200 dark:bg-white/10 dark:hover:bg-gray-200/50 no-underline"
            >
              CSS
            </Link>
          </div>
          <ul className="text-sm">
            <li>
              Worked across multiple projects, developing features with both
              frontend and backend integration.
            </li>
            <li>
              Assisted colleagues and junior developers with task execution and
              requirement clarifications.
            </li>
            <li>
              Maintained a key module for a large-scale project, implementing
              client-requested features and optimizations.
            </li>
            <li>
              Regularly updated build files by manually copying them to the FTP
              server.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "2021",
      subTitle: (
        <div className="mt-5">
          <div className="mt-2">
            <h6 className="text-base">Software Developer</h6>
            <h6 className="text-sm">
              Sparksoft Solutions .Inc - Full Time Remote
            </h6>
            <h6 className="text-sm">Philippines</h6>
          </div>
        </div>
      ),
      content: (
        <>
          <ul className="text-sm">
            <li>First full-time software job at Sparksoft Solutions.</li>
            <li>
              Gained hands-on experience with software development workflows.
            </li>
            <li>
              Overcame challenges in remote collaboration and version control.
            </li>
          </ul>
        </>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
