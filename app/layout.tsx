import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "EventBridge",
  description: "Explore events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full bg-true-gray-800" lang="en">
      <body className="h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
