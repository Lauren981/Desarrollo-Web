import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Productos Dashboard",
  description: "Visual representation of product data including charts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}