import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "./Navbar";

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
    <html className="h-full bg-gray-800" lang="en">
      <body className="h-full">
        <div className="flex items-center min-w-full">
          <Navbar />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
