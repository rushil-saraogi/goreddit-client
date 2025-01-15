// export default () => {
//     const links = [
//         {
//             name: 'Latest',
//             url: '/latest',
//             active: true,
//         },
//         {
//             name: 'Brands',
//             url: '/brands'
//         },
//         {
//             name: 'Models',
//             url: '/models'
//         },
//         {
//             name: 'Top',
//             url: '/top'
//         }
//     ]

//     return (
//         <nav className="fixed inset-x-0 max-w-max mx-auto bottom-5 bg-white border rounded-full">
//             <ul className="flex p-1">
//                 {links.map((link, index) => (
//                     <li key={index} className={`transition rounded-full px-4 py-2 ${link.active ? 'bg-indigo-800 text-white' : 'hover:bg-gray-100'}`}>
//                         <a href={link.url}>{link.name}</a>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     )
// }

"use client";

import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation'
import Tabs from "./Tabs";

const navTabs = [
  {
    id: "latest",
    name: "Latest",
    value: "/",
  },
  {
    id: "brands",
    name: "Brands",
    value: "/brands",
  },
  // {
  //   id: "models",
  //   name: "Models",
  //   value: "/models",
  // },
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
    <nav className="fixed inset-x-0 max-w-max mx-auto bottom-5">
      <Tabs tabs={navTabs} handleClick={handleClick} activeTab={activeTab} />
    </nav>
  );
}
