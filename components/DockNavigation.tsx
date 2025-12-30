"use client";

import { useRouter, usePathname } from "next/navigation";
import Dock, { DockItemData } from "./ui/Dock";

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const FolderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default function DockNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems: DockItemData[] = [
    {
      icon: <HomeIcon />,
      label: "Home",
      onClick: () => router.push("/"),
      className: pathname === "/" ? "ring-2 ring-[#00ff00]" : "",
    },
    {
      icon: <UserIcon />,
      label: "About",
      onClick: () => router.push("/about"),
      className: pathname === "/about" ? "ring-2 ring-[#00ff00]" : "",
    },
    {
      icon: <FolderIcon />,
      label: "Projects",
      onClick: () => router.push("/projects"),
      className: pathname === "/projects" || pathname.startsWith("/projects/") ? "ring-2 ring-[#00ff00]" : "",
    },
    {
      icon: <MailIcon />,
      label: "Contact",
      onClick: () => router.push("/contact"),
      className: pathname === "/contact" ? "ring-2 ring-[#00ff00]" : "",
    },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 hidden md:block">
      <Dock
        items={navItems}
        panelHeight={58}
        baseItemSize={44}
        magnification={68}
      />
    </div>
  );
}
