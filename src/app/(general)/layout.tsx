"use client"

import SidebarNav from "@/components/SidebarNav";
import { FormProvider } from "@/contexts/TransactionForm";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
        <div  className="w-[25vw]">
            <SidebarNav/>
        </div>
        <div className="w-[75vw]">
          <FormProvider>
            {children}
          </FormProvider>
        </div>
    </div>

  );
}
