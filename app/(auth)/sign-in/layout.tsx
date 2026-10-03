import { Geist, Geist_Mono } from "next/font/google";
import "../../(home)/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-[url(/background.png)] bg-no-repeat bg-cover bg-fixed">
        {children}
      </body>
    </html>
  );
}