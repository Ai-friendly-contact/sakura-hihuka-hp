import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

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
        <Script
          src="https://readdy.ai/api/public/assistant/widget?projectId=7549e8ee-12df-4714-ace1-26f3efc477f9"
          strategy="afterInteractive"
          data-mode="hybrid"
          data-voice-show-transcript="true"
          data-theme="light"
          data-size="compact"
          data-accent-color="#14B8A6"
          data-button-base-color="#2563eb"
          data-button-accent-color="#FFFFFF"
          data-main-label="\u304a\u554f\u3044\u5408\u308f\u305b"
          data-start-button-text="\u901a\u8a71\u3092\u958b\u59cb"
          data-end-button-text="\u901a\u8a71\u3092\u7d42\u4e86"
          data-empty-chat-message="\u3054\u8cea\u554f\u304c\u3042\u308c\u3070\u304a\u77e5\u3089\u305b\u304f\u3060\u3055\u3044"
          data-empty-voice-message="\u97f3\u58f0\u3067\u304a\u8a71\u3057\u304f\u3060\u3055\u3044"
          data-choose-mode-text="\u97f3\u58f0\u307e\u305f\u306f\u30c6\u30ad\u30b9\u30c8\u3067\u3054\u76f8\u8ac7\u3044\u305f\u3060\u3051\u307e\u3059"
          data-voice-button-text="\u97f3\u58f0\u3067\u76f8\u8ac7"
          data-chat-button-text="\u30c1\u30e3\u30c3\u30c8\u3067\u76f8\u8ac7"
          data-input-placeholder="\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"
          data-send-button-text="\u9001\u4fe1"
          data-minimize-text="\u6700\u5c0f\u5316"
          data-close-text="\u9589\u3058\u308b"
          data-language="ja"
        />
        <Script id="readdy-widget-localizer" strategy="afterInteractive">
          {`
            (function () {
              const TEXT_MAP = new Map([
                ["talk with us", "お問い合わせ"],
                ["choose voice or text", "音声またはテキストをお選びください"],
                ["use voice or text to communicate", "音声またはテキストでご相談いただけます"],
                ["type your message...", "メッセージを入力してください"],
                ["type your message…", "メッセージを入力してください"],
                ["send", "送信"],
                ["minimize", "最小化"],
                ["close", "閉じる"]
              ]);

              const replaceTexts = () => {
                const walker = document.createTreeWalker(
                  document.body,
                  NodeFilter.SHOW_TEXT
                );
                const updates = [];

                while (true) {
                  const node = walker.nextNode();
                  if (!node) break;
                  const original = node.textContent;
                  const trimmed = original.trim();
                  if (!trimmed) continue;
                  const key = trimmed.toLowerCase();
                  const replacement = TEXT_MAP.get(key);
                  if (replacement && replacement !== trimmed) {
                    const leading = original.slice(0, original.indexOf(trimmed));
                    const trailing = original.slice(original.indexOf(trimmed) + trimmed.length);
                    updates.push({ node, value: `${leading}${replacement}${trailing}` });
                  }
                }

                updates.forEach(({ node, value }) => {
                  node.textContent = value;
                });
              };

              if (!document.body) return;

              const observer = new MutationObserver((mutations) => {
                for (const mutation of mutations) {
                  if (mutation.addedNodes.length) {
                    replaceTexts();
                    break;
                  }
                }
              });

              observer.observe(document.body, { childList: true, subtree: true });
              replaceTexts();
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
