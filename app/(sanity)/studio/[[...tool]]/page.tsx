import { NextStudio } from "next-sanity/studio";
import { sanityFetch } from "@/sanity/lib/fetch";
import { groq } from "next-sanity";
import config from "@/sanity.config";

export const dynamic = "force-static";

export default function StudioPage() {
  return <NextStudio config={config} />;
}

export async function generateStaticParams() {
  const pages = ['presentation', 'structure', 'vision'];
  return pages.map((page) => ({ name: page }));
}

/*
export async function generateStaticParams() {
  return sanityFetch<{ tool: string }[]>({
    query: groq`*[_type == "post" && defined(slug.current)]{"slug": slug.current}`,
    perspective: "published",
    stega: false,
  });
}
*/
