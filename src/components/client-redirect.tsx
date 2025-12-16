"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { caseStudiesData } from "@/data/case-studies-data";

interface ClientRedirectProps {
  slug: string;
}

export default function ClientRedirect({ slug }: ClientRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    if (slug.endsWith(".html")) {
      const id = slug.replace(".html", "");
      
      // Check if this ID belongs to a case study
      const isCaseStudy = caseStudiesData.some(cs => cs.id === id);
      
      if (isCaseStudy) {
        router.replace(`/case-studies/${id}`);
      } else {
        router.replace(`/${id}`);
      }
    }
  }, [slug, router]);

  return null;
}
