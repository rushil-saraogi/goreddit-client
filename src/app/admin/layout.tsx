import type { Metadata } from "next";
import Sidebar from "./sidebar";

export const metadata: Metadata = {
  title: "Watch Market Admin",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-white">
        <Sidebar />
        <main className="flex-1 p-4">
            {children}
        </main>
    </div>
  );
}
