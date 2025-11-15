'use client';

import Script from "next/script";

export default function ReaddyWidget() {
  return (
    <>
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
        data-main-label="お問い合わせ"
        data-start-button-text="通話を開始"
        data-end-button-text="通話を終了"
        data-empty-chat-message="ご質問があればお知らせください"
        data-empty-voice-message="音声でお話しください"
        data-choose-mode-text="音声またはテキストでご相談いただけます"
        data-voice-button-text="音声で相談"
        data-chat-button-text="チャットで相談"
        data-input-placeholder="メッセージを入力してください"
        data-send-button-text="送信"
        data-minimize-text="最小化"
        data-close-text="閉じる"
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
                  updates.push({ node, value: \`\${leading}\${replacement}\${trailing}\` });
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
    </>
  );
}
