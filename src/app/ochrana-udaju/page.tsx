import type { Metadata } from "next";
import { Privacy } from "@/components/Privacy";
import { cs } from "@/copy/cs";

export const metadata: Metadata = { title: cs.privacy.title };

export default function Page() {
  return <Privacy />;
}
