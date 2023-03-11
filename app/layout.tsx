import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Link from 'next/link';

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
        <div className="flex min-h-1 items-center mr-2 py-2 px-4 sm:px-6 lg:px-8">
          <Link href="/">EventBridge</Link>
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
