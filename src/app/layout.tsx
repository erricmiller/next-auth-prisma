import { NextAuthProvider } from "@/providers/nextAuthProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./_trpc/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Data Table | Fahad",
  description: "created by Fahad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className={inter.className}>
          <Provider>{children}</Provider>
        </body>
      </NextAuthProvider>
    </html>
  );
}
