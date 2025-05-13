"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { ProveedorTemas } from "./page";
import "./globals.css";
import { metadata } from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProveedorTemas>{children}</ProveedorTemas>
      </body>
    </html>
  );
}
