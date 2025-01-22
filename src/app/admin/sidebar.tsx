"use client";

import Link from 'next/link'
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default () => {
  const navItems = [
    {
      name: "Products",
      href: "/admin",
      icon: "watch",
    },
    {
      name: "Collections",
      href: "/admin/collections",
      icon: "storefront",
    },
    {
        name: "Exit",
        href: "/",
        icon: "logout",
    }
  ];

  const pathname = usePathname();
  const activeTab = navItems.findIndex((tab) => tab.href === pathname);

  return (
    <div className="bg-indigo-700 min-w-44 lg:min-w-56 p-3">
      {navItems.map((item, index) => (
        <Link
          key={index}
          className={`flex items-center gap-3 transition block p-4 text-white hover:bg-black/20 rounded-lg ${
            index === activeTab ? "bg-black/10" : ""
          }`}
          href={item.href}
        >
          <span className="material-symbols-outlined text-white text-sm">
            {item.icon}
          </span>
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  );
};
