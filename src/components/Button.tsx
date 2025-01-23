"use client";

import Link from "next/link";
type ButtonTypes = "primary" | "secondary" | "danger" | "outline" | "link";

export default ({
  type,
  children,
  href,
  onClick
}: {
  type?: ButtonTypes;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}) => {
  const baseClasses =
    "py-2 h-11 relative inline-flex items-center justify-center px-5 rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring focus:ring-gray-300 disabled:opacity-25 transition";
  const primaryClasses =
    "text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500";
  const secondaryClasses =
    "text-gray-600 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-gray-100";
  const dangerClasses =
    "text-white bg-red-600 hover:bg-red-700 focus:ring-red-500";
  const outlineClasses =
    "text-blue-600 bg-white border border-blue-600 hover:bg-blue-50 focus:ring-blue-500";
  const linkClasses =
    "text-blue-600 bg-transparent hover:bg-blue-50 focus:ring-blue-500";

  const classes = {
    primary: primaryClasses,
    secondary: secondaryClasses,
    danger: dangerClasses,
    outline: outlineClasses,
    link: linkClasses,
  };

  const classString = `${baseClasses} ${classes[type || 'primary']}`;

  return (
    <>
      {href ? (
        <Link href={href} className={classString}>
            {children}
        </Link>
      ) : (
        <button className={classString} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};
