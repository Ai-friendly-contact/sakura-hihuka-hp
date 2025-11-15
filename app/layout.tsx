import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReaddyWidget from "@/components/ReaddyWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "\u3055\u304f\u3089\u76ae\u819a\u79d1\u30af\u30ea\u30cb\u30c3\u30af\u0020\u007c\u0020\u76ae\u819a\u306e\u304a\u60a9\u307f\u306f\u4f55\u3067\u3082\u3054\u76f8\u8ac7\u304f\u3060\u3055\u3044",
  description:
    "\u3055\u304f\u3089\u76ae\u819a\u79d1\u30af\u30ea\u30cb\u30c3\u30af\u306f\u76ae\u819a\u79d1\u5c02\u9580\u533b\u306b\u3088\u308b\u4e01\u5be7\u306a\u8a3a\u5bdf\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u6e7f\u75b9\u3001\u30cb\u30ad\u30d3\u3001\u30a2\u30c8\u30d4\u30fc\u3001\u307b\u304f\u308d\u3001\u6c34\u866b\u306a\u3069\u76ae\u819a\u306e\u304a\u60a9\u307f\u306b\u5bfe\u5fdc\u3002\u539f\u5bbf\u99c5\u304b\u3089\u5f92\u6b69\u0033\u5206\u3001\u4e88\u7d04\u4e0d\u8981\u3067\u53d7\u4ed8\u53ef\u80fd\u3067\u3059\u3002",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ReaddyWidget />
      </body>
    </html>
  );
}
