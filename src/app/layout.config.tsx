import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
import { TbCategory2 } from "react-icons/tb";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <h2 className="font-quicksand font-bold tracking-wide">Yggdrasil</h2>
    ),
  },
  links: [
    {
      text: "Codex",
      url: "/codex",
      active: "nested-url",
      icon: <TbCategory2 />,
    },
  ],
};
