import { NextStudio } from "next-sanity/studio";
import { sanityFetch } from "@/sanity/lib/fetch";
import { groq } from "next-sanity";
import config from "@/sanity.config";

export const dynamic = "force-static";

export default function StudioPage() {
  return <NextStudio config={config} />;
}