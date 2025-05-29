import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "dr.agenda",
  description:
    "Sistema de agendamentos para clínicas: facilite a gestão de consultas, otimize a agenda de profissionais de saúde e ofereça uma experiência moderna e eficiente para seus pacientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Toaster position="bottom-center" richColors theme="light" />
      </body>
    </html>
  );
}
