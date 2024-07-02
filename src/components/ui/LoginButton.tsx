"use client";

import { Button } from "@/components/ui/button";
import Profile from "../Profile";
import { shortAddress } from "@/lib/utils";
import { usePrivy } from "@privy-io/react-auth";
import { useState } from "react";

export const LoginButton = () => {
  const { ready, authenticated, login, logout, user } = usePrivy();
  const [showMenu, setShowMenu] = useState(false);
  // Disable login when Privy is not ready or the user is already authenticated
  const disableLogin = !ready || (ready && authenticated);

  const handleClick = () => {
    setShowMenu(!showMenu);
    console.log("click ", showMenu);
  };

  return authenticated ? (
    <div className="grid relative">
      <Button
        // disabled={disableLogin}
        className="rounded-full px-10 z-20"
        variant="default"
        onClick={handleClick}
      >
        {shortAddress(user?.wallet?.address)} ⏷
      </Button>

      <div className="justify-self-end absolute">
        {showMenu ? <Profile address={user?.wallet?.address} /> : ""}
      </div>
    </div>
  ) : (
    <Button
      className="rounded-full px-10
    dark:bg-stone-700
    dark:text-stone-200
    hover:dark:bg-stone-600
    hover:dark:text-stone-100"
      variant="default"
      disabled={disableLogin}
      onClick={login}
    >
      Sign in
    </Button>
  );
};
