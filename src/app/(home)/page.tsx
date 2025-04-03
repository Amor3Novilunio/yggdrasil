// !! Todos
// !! Links & URLs
// !! Animations
// !! Skillset icons will lead to documentation regarding on what i know about such skill
// !! Projects Images | Title | Description

import Image from "next/image";
import Link from "next/link";
import {
  TbBrandGithubFilled,
  TbBrandLinkedinFilled,
} from "react-icons/tb";

export default function HomePage() {
  
  type skillList = {
    name: string;
    href: string;
  };

  const skillList: skillList[] = [
    { name: "Javascript", href: "#" },
    { name: "Typescript", href: "#" },
    { name: "React", href: "#" },
    { name: "Next JS", href: "#" },
    { name: "Tailwind", href: "#" },
    { name: "CSS3", href: "#" },
    { name: "UI/UX", href: "#" },
    { name: "MySQL", href: "#" },
    { name: "Photoshop", href: "#" },
    { name: "NixOS ( Linux )", href: "#" },
    { name: "Computer Flow", href: "#" },
    { name: "System FlowCharts", href: "#" },
    { name: "SDLC", href: "#" },
    { name: "Git", href: "#" },
    { name: "REST API", href: "#" },
    { name: "Rust", href: "#" },
    { name: "Frontend Development", href: "#" },
    { name: "Backend Development", href: "#" },
    { name: "FumaDocs", href: "#" },
    { name: "Hyprland", href: "#" },
  ];

  return (
    <main className="container mx-auto overflow-auto">
      <section className="h-[50rem] w-full flex flex-1 gap-20 flex-col justify-center items-center text-center">
        <section className="w-[70%] 2xl:w-full flex items-center justify-center ">
          {/*  */}
          <div className="2xl:w-[80%] flex flex-col items-start justify-start gap-5 font-quicksand">
            {/* Title */}
            <div className="flex gap-5 items-center">
              <Image
                src={"/Yggdrasil.png"}
                alt=""
                width={50}
                height={50}
                className=""
              />
              <div className="flex flex-col gap-2 items-start ">
                <h2 className="text-4xl font-semibold tracking-wide">
                  Yggdrasil
                </h2>
                <h6 className="ml-5 text-sm font-medium">5655
                  A Living Codex of Knowledge and Creation
                </h6>
              </div>
            </div>
            {/* Description */}
            <div className=" flex flex-col text-start  items-start justify-start gap-2">
              <h6 className="ml-10">
                A Dynamic Knowledge Portal rooted in Exploration, Learning, and
                Innovation.
              </h6>
              <h6 className="ml-3">
                Built as a living record of my projects, knowledge, and
                continuous learning.
              </h6>
              {/*  */}
              <div className="w-full">
                <h6 className="font-bold text-sm">
                  Created By{" "}
                  <span className="underline tracking-wide">
                    Amor Novilunio III
                  </span>
                </h6>
                {/* Links */}
                <div className="w-full h-14 p-2 flex items-start gap-3 ">
                  <a
                    href="#"
                    className="bg-black p-1.5 rounded-lg text-white dark:bg-white dark:text-black duration-200 hover:p-2 "
                  >
                    <TbBrandGithubFilled />
                  </a>
                  <a
                    href="#"
                    className="text-3xl rounded-lg duration-200 hover:text-4xl "
                  >
                    <TbBrandLinkedinFilled />
                  </a>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </section>
        {/*  */}
        <section className="w-[80%] 2xl:w-[70%] flex flex-col items-center justify-center gap-5 ">
          <h2 className="font-quicksand font-semibold">
            Knowledge Branches ( Skills & References )
          </h2>
          {/* Skill Logo And Navigation to Documentation */}
          <div className="flex flex-wrap w-full gap-5 items-center justify-center">
            {skillList.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="px-5 rounded-full shadow hover:shadow-inner hover:bg-gray-200 duration-200 dark:bg-white/10 dark:hover:bg-gray-200/50"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </section>
      </section>
      {/*  */}
      <section className="h-[20rem] 2xl:w-[50%]  flex items-center justify-center">
        <section className="size-full flex flex-col gap-5">
          <h2 className="font-bold text-4xl p-10 font-quicksand ">
            World Fruits <span className="text-xl">( Projects )</span>
          </h2>
          {/* Photo | Title | Description | Cate of Creation */}
          <div className="flex flex-wrap w-full gap-5 items-center justify-center">
            <h2>TBA</h2>
          </div>
        </section>
      </section>
    </main>
  );
}
