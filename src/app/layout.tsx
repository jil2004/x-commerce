import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provide from "@/redux/Provide";
import Providers from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jil's X Commerce",
  description: "A good e commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provide>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
      </Provide>
    </html>
  );
}
