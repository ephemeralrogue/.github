import { NextStudio } from "next-sanity/studio";

import config from "@/sanity.config";

export const dynamic = "force-static";

export default function StudioPage() {
  return <NextStudio config={config} />;
}

export function generateStaticParams() {
  const pages = ['Presentation', 'Vision', 'Structure'];
  return pages.map((page) => ({ name: page }));
}
