import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eksen Akademi | LGS'ye Özel Butik Kurs — Bahçeşehir",
  description:
    "LGS'ye özel butik kurs anlayışıyla, küçük sınıflar ve bireysel ilgiyle Bahçeşehir'in en tercih edilen eğitim merkezi. 5, 6, 7 ve 8. sınıf programları.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
