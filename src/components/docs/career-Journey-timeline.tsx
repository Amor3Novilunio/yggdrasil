import { Timeline, t_Timeline } from "@/ui/aceternity_Timeline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function CareerJourneyTimeline() {
  const data: t_Timeline[] = [
    {
      title: "Present",
      subTitle: (
        <div className="mt-5">
          <h5 className="text-xl ">
            {new Date().getFullYear() - new Date("2024").getFullYear()} Years
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
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Leading the development of the frontend for a key project, ensuring
            a smooth and intuitive user experience.
            <br />
            <br /> Analyzing project requirements and crafting tailored frontend
            solutions.
            <br />
            <br /> Integrating the frontend with backend services to enable
            seamless data interaction.
            <br />
            <br /> Creating clear documentation to support frontend development
            and ongoing project maintenance.
          </p>
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
        <div className="grid">
          image of Vixor Here
          {/* <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
        </div>
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
          <ul>
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
          <ul>
            <li>First full-time software job at Sparksoft Solutions.</li>
            <li>
              Gained hands-on experience with software development workflows.
            </li>
            <li className="">
              Learned key technologies like
              <div className="flex flex-wrap gap-5 p-2">
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
                <Link
                  key={"git"}
                  href={"#"}
                  className="px-5 rounded-full shadow hover:shadow-inner hover:bg-gray-200 duration-200 dark:bg-white/10 dark:hover:bg-gray-200/50 no-underline"
                >
                  Git
                </Link>
                <Link
                  key={"trello"}
                  href={"#"}
                  className="px-5 rounded-full shadow hover:shadow-inner hover:bg-gray-200 duration-200 dark:bg-white/10 dark:hover:bg-gray-200/50 no-underline"
                >
                  Trello
                </Link>
              </div>
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
