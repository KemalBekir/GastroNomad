import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Gastro Nomad",
  description: "Gastro Nomad - Culinary adventures and cultural exploration worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
}
