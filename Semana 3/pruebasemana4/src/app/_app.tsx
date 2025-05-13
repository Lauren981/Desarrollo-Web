"use client";

import { ProveedorTemas } from "./page";
import "../app/globals.css";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <ProveedorTemas>
      <Component {...pageProps} />
    </ProveedorTemas>
  );
}