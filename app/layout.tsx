import type { Metadata } from "next";
import "./globals.css";
import AuthOverlay from "./components/AuthOverlay";

export const metadata: Metadata = {
  title: "TikTok clone",
  description: "TikTok clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <AuthOverlay /> */}
        {children}
      </body>
    </html>
  );
}
