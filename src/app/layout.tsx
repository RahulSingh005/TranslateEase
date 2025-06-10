import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "TranslateEase",
  description: "An AI Voice and Text Translator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
      <Script src="./assets/vendor/preline/dist/preline.js"></Script>
    </html>
  );
}
