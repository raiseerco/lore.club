// import "../app/globals.css";

// import { Inter } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-inter",
// });

// export default function Layout({ children }: any) {
//   return (
//     <html lang="en">
//       <body className={inter.variable}>{children}</body>
//     </html>
//   );
// }
"use client";

import "../app/globals.css";

import CreateIcon from "@/components/ui/Icons/CreateIcon.svg";
import DiscordIcon from "@/components/ui/Icons/DiscordIcon.svg";
import ExploreIcon from "@/components/ui/Icons/ExploreIcon.svg";
import { HeadBar } from "@/components/ui/HeadBar";
import HowIcon from "@/components/ui/Icons/HowIcon.svg";
import { Inter } from "next/font/google";
import Link from "next/link";
import Providers from "./providers";
import StyledIcon from "@/components/StyledIcon";
import TelegramIcon from "@/components/ui/Icons/TelegramIcon.svg";
import XIcon from "@/components/ui/Icons/XIcon.svg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Welcome to Lore.club</title>
        <meta name="description" content="Lore club" />
      </head>

      <body
        style={{
          background: "url(/background.png)",
          backgroundSize: "cover",
        }}
      >
        <Providers>
          <HeadBar />
          {/* content screen */}
          <div className="flex min-h-screen">
            {/* sidebar */}
            <div
              // style={{
              //   background: "url(/backSidebar.png)",
              //   backgroundSize: "cover",
              // }}
              className="fixed left-0 top-16 bottom-0 z-30 flex w-44 
            flex-col border-rs bg-zinc-100 p-4
             dark:border-gray-800 dark:bg-gray-950"
            >
              <nav className="flex-1 space-y-2">
                <div>
                  <Link
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                    href="/"
                  >
                    <StyledIcon Icon={ExploreIcon} />
                    Explore
                  </Link>

                  <Link
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                    href="/create"
                  >
                    <StyledIcon Icon={CreateIcon} />
                    Create Coin
                  </Link>
                  <Link
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                    href="/how"
                  >
                    <StyledIcon Icon={HowIcon} />
                    How It Works
                  </Link>
                </div>
                <div
                  className="fixed h-6 justify-start items-center
                bottom-4 z-20  gap-[13px] inline-flex"
                >
                  <span className="text-zinc-600 text-xs ">Follow us</span>
                  <div className="w-20 h-6 justify-start items-start gap-1 inline-flex">
                    <div
                      className="w-6 h-6 p-0.5 bg-zinc-100 rounded 
                        sidebarSocials
                        flex-col justify-center items-center gap-2.5 inline-flex"
                    >
                      <StyledIcon Icon={DiscordIcon} />
                    </div>
                    <div
                      className="w-6 h-6 p-0.5 bg-zinc-100 rounded sidebarSocials
                        flex-col justify-center items-center gap-2.5 inline-flex"
                    >
                      <StyledIcon Icon={TelegramIcon} />
                    </div>
                    <div
                      className="w-6 h-6 p-0.5 bg-zinc-100 rounded 
                        sidebarSocials
                          flex-col justify-center items-center gap-2.5 inline-flex"
                    >
                      <StyledIcon Icon={XIcon} />
                    </div>
                  </div>
                </div>
              </nav>
            </div>

            {/* main content */}
            <main className="ml-44 bg-red-60s0 w-full  flex overflow-y-auto p-4 md:p-6">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
