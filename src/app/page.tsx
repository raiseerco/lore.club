import "../app/globals.css";

import Providers from "./providers";
import { Shell } from "@/components/Shell";

export default function Home() {
  return (
    <Providers>
      <Shell />
    </Providers>
  );
}
