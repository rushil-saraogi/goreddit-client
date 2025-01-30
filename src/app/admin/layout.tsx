"use client";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import Sidebar from "./sidebar";

const queryClient = new QueryClient()

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

            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
        </main>
    </div>
  );
}
