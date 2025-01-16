"use client";

import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation'
import Tabs from "./Tabs";

const navTabs = [
  {
    id: "home",
    name: "Home",
    value: "/",
  },
  {
    id: "brands",
    name: "Brands",
    value: "/brands",
  },
  {
    id: "latest",
    name: "Latest",
    value: "/latest",
  },
  // {
  //   id: "top",
  //   name: "Top",
  //   value: "/top",
  // },
];

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter()
  const activeTab = navTabs.findIndex((tab) => tab.value === pathname);

  const handleClick = (url: string) => {
    router.push(url);
  }

  return (
    <nav className="fixed inset-x-0 max-w-max mx-auto bottom-10">
      <Tabs tabs={navTabs} handleClick={handleClick} activeTab={activeTab} />
    </nav>
  );
}
