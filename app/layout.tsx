import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AOSInit from "@/app/components/AOS/AOSInit";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SumaTherm Gmbh - Welcome to our World",
  description: "Internship Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={inter.className}>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
