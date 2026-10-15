import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { cs } from "@/copy/cs";
import "./globals.css";

// Archivo is variable in weight and width; headings use the wider cuts.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
});

export const metadata: Metadata = cs.meta;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" className={`${archivo.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
