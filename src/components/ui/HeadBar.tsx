// "use client";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import GroupButton from "./GroupButton";
import LayoutGridIcon from "@/components/ui/Icons/LayoutGridIcon.svg";
import LayoutListIcon from "@/components/ui/Icons/LayoutListIcon.svg";
import Link from "next/link";
import { LoginButton } from "./LoginButton";
// import { LoginButton } from "./LoginButton";
import Logo from "@/components/ui/Icons/Logo.svg";
import NetworkSelector from "./NetworkSelector";
import SearchBar from "./SearchBar";
import SeparatorIcon from "@/components/ui/Icons/SeparatorIcon.svg";
import StyledIcon from "../StyledIcon";

interface HeadBarProps {
  showDropdown?: boolean;
  // dropdownContent?: ReactNode;
}

export const HeadBar = ({
  showDropdown = false,
}: // , dropdownContent

HeadBarProps) => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-30 flex h-16 w-full items-center 
      bg-stone-100 
      dark:bg-stone-950
      shadow-md
      shadow-stone-300
      border-stone-300
      dark:shadow-black "
    >
      <div className="containers flex items-center w-full justify-between px-4 md:px-6">
        <Link className="w-44 flex items-center gap-2" href="#">
          {/* <MountainIcon className="h-6 w-6" /> */}
          <StyledIcon Icon={Logo} />
          <div className="flex items-start">
            <span className="text-lg font-semibold">Lore.club</span>
            <span className="mt-1" style={{ fontSize: "10px" }}>
              ™
            </span>
          </div>
        </Link>
        <div className="flex w-full items-center gap-4">
          {/* search bar */}
          <SearchBar />
          <div className="flex items-center gap-2">
            <span
              className="
            text-stone-500
            text-base
            font-medium
             leading-none
            whitespace-nowrap"
            >
              {" "}
              View mode
            </span>
            <GroupButton />
          </div>
          {showDropdown && (
            <div className="relative">
              <Button size="icon" variant="ghost">
                <StyledIcon Icon={LayoutListIcon} />
              </Button>
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                {/* {dropdownContent} */}
              </div>
            </div>
          )}
          <StyledIcon Icon={SeparatorIcon} />

          {/* network button  */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}

          <NetworkSelector />
          <LoginButton />
        </div>
      </div>
    </header>
  );
};
