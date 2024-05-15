import { Button } from "@/components/ui/button";
import CreateCoin from "./ui/Icons/CreateCoin.svg";
import Explore from "./ui/Icons/Explore.svg";
import How from "./ui/Icons/How.svg";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Logo from "./ui/Icons/Logo.svg";
import StyledIcon from "@/components/StyledIcon";
import Trending from "./ui/Icons/Trending.svg";

export function Shell() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 flex h-16 w-full items-center bg-white shadow-sm dark:bg-gray-950">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="#">
            {/* <MountainIcon className="h-6 w-6" /> */}
            <StyledIcon Icon={Logo} />

            <span className="text-lg font-semibold">Lore.club™</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="relative w-full max-w-md">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-full rounded-full bg-gray-100 pl-10 focus:bg-white focus:shadow-sm dark:bg-gray-800 dark:focus:bg-gray-950"
                placeholder="Find your lore"
                type="search"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button size="icon" variant="ghost">
                <LayoutGridIcon className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <ListIcon className="h-5 w-5" />
              </Button>
            </div>
            <Button className="rounded-full px-10" variant="default">
              Sign In
            </Button>
          </div>
        </div>
      </header>
      <div className="flex min-h-screen">
        <div className="fixed left-0 top-16 bottom-0 z-10 flex w-64 flex-col border-r bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
          <nav className="flex-1 space-y-2">
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="#"
            >
              <StyledIcon Icon={Explore} />
              Explore
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="#"
            >
              {/* <PackageIcon className="h-5 w-5" /> */}
              <StyledIcon Icon={Trending} />
              Trending
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="#"
            >
              {/* <ShoppingCartIcon className="h-5 w-5" /> */}
              <StyledIcon Icon={CreateCoin} />
              Create Coin
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="#"
            >
              {/* <UsersIcon className="h-5 w-5" /> */}
              <StyledIcon Icon={How} />
              How It Works
            </Link>
          </nav>
        </div>
        <main className="ml-64 mt-16 flex-1 overflow-y-auto p-4 md:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View item</span>
              </Link>
              <img
                alt="Item thumbnail"
                className="h-48 w-full rounded-t-lg object-cover group-hover:opacity-80"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-sm font-medium tracking-tight">
                  CyclopsDummy
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  $0.0002 - 200k Mcap
                </p>
              </div>
            </div>

            <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View item</span>
              </Link>
              <img
                alt="Item thumbnail"
                className="h-48 w-full rounded-t-lg object-cover group-hover:opacity-80"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-sm font-medium tracking-tight">
                  CyclopsDummy
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  $0.0002 - 200k Mcap
                </p>
              </div>
            </div>

            <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View item</span>
              </Link>
              <img
                alt="Item thumbnail"
                className="h-48 w-full rounded-t-lg object-cover group-hover:opacity-80"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-sm font-medium tracking-tight">
                  CyclopsDummy
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  $0.0002 - 200k Mcap
                </p>
              </div>
            </div>

            <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View item</span>
              </Link>
              <img
                alt="Item thumbnail"
                className="h-48 w-full rounded-t-lg object-cover group-hover:opacity-80"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-sm font-medium tracking-tight">
                  CyclopsDummy
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  $0.0002 - 200k Mcap
                </p>
              </div>
            </div>

            <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View item</span>
              </Link>
              <img
                alt="Item thumbnail"
                className="h-48 w-full rounded-t-lg object-cover group-hover:opacity-80"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-sm font-medium tracking-tight">
                  CyclopsDummy
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  $0.0002 - 200k Mcap
                </p>
              </div>
            </div>

            <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View item</span>
              </Link>
              <img
                alt="Item thumbnail"
                className="h-48 w-full rounded-t-lg object-cover group-hover:opacity-80"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-sm font-medium tracking-tight">
                  CyclopsDummy
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  $0.0002 - 200k Mcap
                </p>
              </div>
            </div>

            <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View item</span>
              </Link>
              <img
                alt="Item thumbnail"
                className="h-48 w-full rounded-t-lg object-cover group-hover:opacity-80"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-sm font-medium tracking-tight">
                  CyclopsDummy
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  $0.0002 - 200k Mcap
                </p>
              </div>
            </div>
            <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View item</span>
              </Link>
              <img
                alt="Item thumbnail"
                className="h-48 w-full rounded-t-lg object-cover group-hover:opacity-80"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-sm font-medium tracking-tight">
                  CyclopsDummy
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  $0.0002 - 200k Mcap
                </p>
              </div>
            </div>

            <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View item</span>
              </Link>
              <img
                alt="Item thumbnail"
                className="h-48 w-full rounded-t-lg object-cover group-hover:opacity-80"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-sm font-medium tracking-tight">
                  CyclopsDummy
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  $0.0002 - 200k Mcap
                </p>
              </div>
            </div>

            <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View item</span>
              </Link>
              <img
                alt="Item thumbnail"
                className="h-48 w-full rounded-t-lg object-cover group-hover:opacity-80"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-sm font-medium tracking-tight">
                  CyclopsDummy
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  $0.0002 - 200k Mcap
                </p>
              </div>
            </div>

            <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View item</span>
              </Link>
              <img
                alt="Item thumbnail"
                className="h-48 w-full rounded-t-lg object-cover group-hover:opacity-80"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-sm font-medium tracking-tight">
                  CyclopsDummy
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  $0.0002 - 200k Mcap
                </p>
              </div>
            </div>

            <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View item</span>
              </Link>
              <img
                alt="Item thumbnail"
                className="h-48 w-full rounded-t-lg object-cover group-hover:opacity-80"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-sm font-medium tracking-tight">
                  CyclopsDummy
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  $0.0002 - 200k Mcap
                </p>
              </div>
            </div>

            <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View item</span>
              </Link>
              <img
                alt="Item thumbnail"
                className="h-48 w-full rounded-t-lg object-cover group-hover:opacity-80"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-sm font-medium tracking-tight">
                  CyclopsDummy
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  $0.0002 - 200k Mcap
                </p>
              </div>
            </div>

            <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View item</span>
              </Link>
              <img
                alt="Item thumbnail"
                className="h-48 w-full rounded-t-lg object-cover group-hover:opacity-80"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-sm font-medium tracking-tight">
                  CyclopsDummy
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  $0.0002 - 200k Mcap
                </p>
              </div>
            </div>

            <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View item</span>
              </Link>
              <img
                alt="Item thumbnail"
                className="h-48 w-full rounded-t-lg object-cover group-hover:opacity-80"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-sm font-medium tracking-tight">
                  CyclopsDummy
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  $0.0002 - 200k Mcap
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

function LayoutGridIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

function ListIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
