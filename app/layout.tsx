import { Footer, Navbar } from "./components";
import "./globals.css";
import type { Metadata } from "next";
import AuthProvider from "./providers/AuthProvider";

export const metadata: Metadata = {
  title: "Gastro Nomad",
  description:
    "Gastro Nomad - Culinary adventures and cultural exploration worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-slate-300">
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
