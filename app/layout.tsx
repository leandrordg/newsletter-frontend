import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Newsletter",
  description: "Criado por Leandro Rodrigues",
  authors: [
    { name: "Leandro Rodrigues", url: "https://leandro-dev.vercel.app" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${font.className} bg-secondary flex items-center justify-center md:p-6`}
      >
        {children}
      </body>
    </html>
  );
}
