import type { Metadata } from "next";
import localFont from "next/font/local";
import { cs } from "@/copy/cs";
import "./globals.css";

// Archivo is variable in weight and width; headings use the wider cuts.
// One self-hosted Czech subset (src/fonts/subset.sh, decision 41).
const archivo = localFont({
  src: "../fonts/archivo-cs.woff2",
  variable: "--font-archivo",
  weight: "400 900",
});

const { title, description, ogTitle, ogAlt } = cs.meta;

// Decision 40. localhost is the placeholder base until the deploy
// (decision 36); C11 sets the live URL here.
const ogImage = { url: "/og.png", width: 1200, height: 630, alt: ogAlt };

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: { default: title, template: `%s · ${title}` },
  description,
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: title,
    title: ogTitle,
    description,
    url: "/",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description,
    images: [ogImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" className={`${archivo.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
