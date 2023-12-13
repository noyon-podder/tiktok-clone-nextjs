import type { Metadata } from "next";
import "./globals.css";
import AuthOverlay from "./components/AuthOverlay";
import UserProvider from "./context/user";
import AllOverlay from "./components/AllOverlay";

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
      <UserProvider>
        <body>
          <AllOverlay />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
