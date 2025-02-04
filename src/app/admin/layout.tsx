"use client";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Sidebar from "./sidebar";

const queryClient = new QueryClient()

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen admin">
        <Sidebar />
        <main className="flex-1 p-4 sm:p-8 min-w-0">
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
        </main>
    </div>
  );
}
