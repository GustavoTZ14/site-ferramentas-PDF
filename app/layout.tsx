import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/home/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PDFTools",
  description: "Edite, converta, comprima, organize e proteja seus arquivos PDF de forma rápida e simples. Tudo diretamente do navegador. ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-screen bg-[url(/background.png)] bg-no-repeat bg-cover bg-fixed">
        <Header />
        {children}
      </body>
    </html>
  );
}
