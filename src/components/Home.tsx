import { cs } from "@/copy/cs";

export function Home() {
  return (
    <main className="mx-auto max-w-page px-gutter py-8">
      <h1 className="text-[28px] leading-tight font-extrabold">
        {cs.home.title}
      </h1>
      <p className="mt-3 text-muted">{cs.home.lead}</p>
    </main>
  );
}
