"use client";

import { Button } from "@/components/ui/button";
import { usePrivy } from "@privy-io/react-auth";

export const LoginButton = () => {
  const { ready, authenticated, login, logout, user } = usePrivy();
  // Disable login when Privy is not ready or the user is already authenticated
  const disableLogin = !ready || (ready && authenticated);

  return authenticated ? (
    // <div className="flex flex-row justify-between">
    //   <h1 className="text-2xl font-semibold">Privy Auth Demo</h1>
    //   <button
    //     onClick={logout}
    //     className="text-sm bg-violet-200 hover:text-violet-900 py-2 px-4 rounded-md text-violet-700"
    //   >
    //     Logout
    //   </button>
    // </div>
    <Button
      className="rounded-full px-10"
      variant="default"
      // disabled={disableLogin}
      onClick={logout}
    >
      {user?.wallet?.address} Logout
    </Button>
  ) : (
    <Button
      className="rounded-full px-10"
      variant="default"
      disabled={disableLogin}
      onClick={login}
    >
      Sign in
    </Button>
  );
};
