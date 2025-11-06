import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "さくら皮膚科クリニック | 皮膚のお悩みは何でもご相談ください",
  description: "さくら皮膚科クリニックは皮膚科専門医による丁寧な診察を提供します。湿疹、ニキビ、アトピー、ほくろ、水虫など皮膚のお悩みに対応。原宿駅徒歩3分、予約不要で受付順診察。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
          data-main-label="お問合せ"
          data-start-button-text="通話開始"
          data-end-button-text="通話終了"
          data-empty-chat-message="何かご質問はございますか？"
          data-empty-voice-message="音声でお話しください"
          data-choose-mode-text="音声またはテキストをお選びください"
          data-voice-button-text="音声で相談"
          data-chat-button-text="チャットで相談"
          data-input-placeholder="メッセージを入力してください"
          data-send-button-text="送信"
          data-minimize-text="最小化"
          data-close-text="閉じる"
        />
      </body>
    </html>
  );
}