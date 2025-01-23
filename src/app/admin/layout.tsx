"use client";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import Sidebar from "./sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const headers: Record<string, string> = {
    '/admin': 'Products',
    '/admin/collections/new': 'New Collection',
    '/admin/collections': 'Collections',
    '/admin/products/new': 'New Product',
  }

  return (
    <div className="flex min-h-screen bg-white admin">
        <Sidebar />
        <main className="flex-1 p-4">
            <Header>{headers[pathname]}</Header>
            {children}
        </main>
    </div>
  );
}
