"use client";

import { useEffect, useState } from "react";

import { ViewGallery } from "@/components/ui/ViewGallery";
import { getTokensCreated } from "@/lib/privy";

export default function HomePage() {
  const [tokens, setTokens] = useState<any>([]);

  useEffect(() => {
    getTokensCreated().then((items) => {
      console.log("data ", items);
      setTokens(items);
    });
  }, []);

  return (
    <div
      className="mt-28
    p-4 md:p-6
    "
    >
      {/* TODO populate with items  */}
      <ViewGallery tokensData={tokens} />
    </div>
  );
}
