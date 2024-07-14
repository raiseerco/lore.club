"use client";

import React, { FC, useEffect, useState } from "react";
import { getBalanceETH, getETHPrice } from "@/lib/privy";

import { useBalance } from "./contexts/BalanceContext";
import { usePrivy } from "@privy-io/react-auth";

interface StyledIconProps {
  address?: string;
}

const Profile: FC<StyledIconProps> = ({ address = "" }) => {
  const { balance, setBalance, ethPrice, setEthPrice } = useBalance();

  const { authenticated, logout } = usePrivy();

  const [balanceUSD, setBalanceUSD] = useState("");
  useEffect(() => {
    const fetchBalance = async (address: string) => {
      const balanceValue = await getBalanceETH(address);
      setBalance(balanceValue ? parseFloat(balanceValue) : 0);
    };
    const fetchEthPrice = async () => {
      const ethPriceValue = await getETHPrice();
      setEthPrice(ethPriceValue ? parseFloat(ethPriceValue) : 0);
    };

    if (address) {
      fetchBalance(address);
      fetchEthPrice();
      const balUSD = (balance * ethPrice).toFixed(2);
      setBalanceUSD(balUSD);
    }
  }, [address, setBalance, ethPrice, setEthPrice, balance]);

  return address ? (
    <div className="w-[380px] h-[513px] z-10 mt-12 pl-4 pr-2 py-4 bg-stone-50 rounded-2xl shadow border border-stone-300 justify-start items-start gap-2 inline-flex">
      <div className="flex-col justify-start items-start gap-2 inline-flex">
        <div className="justify-start items-center gap-[248px] inline-flex">
          <div className="justify-start items-start gap-1 text-xs flex">
            {authenticated ? (
              <>
                <div className="p-2  bg-stone-100 rounded-lg border border-stone-300  ">
                  Settings
                </div>

                <div className="p-2 bg-stone-400 rounded-lg border border-stone-300  ">
                  <button
                    className="  relative flex-col justify-start items-start flex"
                    onClick={logout}
                  >
                    Disconnect
                  </button>
                </div>
              </>
            ) : (
              "Connected"
            )}
          </div>

          <div className="pr-[9px] justify-start items-center gap-2.5 flex">
            <div className="w-3.5 h-3.5 relative" />
          </div>
        </div>
        <div className="w-  h-[52px] flex-col justify-center items-start gap-1 flex">
          <div className="text-neutral-700 text-[28px] font-medium">
            ${balanceUSD}
          </div>
          <div className="  text-neutral-500 text-xs font-medium">
            Balance: {Math.trunc(balance * 1000000) / 1000000} ETH --- ETH
            price: {ethPrice.toFixed(2)} USD
          </div>
        </div>
        <div className="w-[339px] justify-start items-start inline-flex">
          <div className="grow shrink basis-0 h-12 flex-col justify-end items-center inline-flex">
            <div className="self-stretch grow shrink basis-0 px-4 flex-col justify-end items-center flex">
              <div className="w-12 py-3.5 flex-col justify-end items-center gap-3 flex">
                <div className="text-center text-stone-900 text-sm font-semibold ">
                  Tokens
                </div>
              </div>
              <div className="w-[170px] h-0.5 bg-neutral-700" />
            </div>
          </div>
          <div className="grow shrink basis-0 h-12 flex-col justify-end items-center inline-flex">
            <div className="self-stretch grow shrink basis-0 px-4 flex-col justify-end items-center flex">
              <div className="h-12 py-3.5 justify-center items-end gap-2.5 inline-flex">
                <div className="text-center text-black/opacity-20 text-sm font-semibold ">
                  Activity
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[344px] h-[132px] relative">
          <div className="w-[344px] h-[33px] px-2 left-0 top-[25px] absolute justify-start items-center gap-[230px] inline-flex">
            <div className="w-[78px] text-black text-sm font-semibold ">
              All
            </div>
            <div className="w-5 h-5 relative" />
          </div>
          <div className="w-[344px] h-[33px] px-2 left-0 top-[58px] absolute bg-zinc-100 justify-start items-center gap-[230px] inline-flex">
            <div className="w-[78px] text-black text-sm font-semibold ">
              Owned
            </div>
          </div>
          <div className="w-[344px] h-[33px] px-2 left-0 top-[91px] absolute justify-start items-center gap-[230px] inline-flex">
            <div className="w-[78px] text-black text-sm font-semibold ">
              Created
            </div>
          </div>
          <div className="w-[97px] h-[17px] left-0 top-0 absolute opacity-80 justify-center items-center gap-1 inline-flex">
            <div className="text-neutral-500 text-xs">Filter by:</div>
            <div className="text-neutral-500 text-xs ">All</div>
            <div className="w-4 h-4 relative origin-top-left -rotate-180" />
          </div>
          <div className="w-[339px] h-[0px] left-0 top-[132px] absolute border border-stone-300"></div>
        </div>
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="w-[339px] pl-1 pr-[9px] py-1 justify-start items-start gap-[138px] inline-flex">
              <div className="justify-start items-center gap-2 flex">
                <div className="w-8 h-8 rounded-[100px] justify-center items-center flex">
                  <img
                    className="w-8 h-8 rounded-[100px] border border-stone-400"
                    src="https://via.placeholder.com/32x32"
                  />
                </div>
                <div className="w-[87px] h-[34px] flex-col justify-center items-start inline-flex">
                  <div className="text-neutral-700 text-base font-normal ">
                    Cyclops732
                  </div>
                  <div className="text-neutral-500 text-xs font-medium ">
                    999,999.99
                  </div>
                </div>
              </div>
              <div className="w-[61.04px] h-[34px] flex-col justify-center items-end inline-flex">
                <div className="text-neutral-700 text-base font-normal ">
                  $556.27
                </div>
                <div className="text-neutral-500 text-xs font-medium ">
                  +7.44%
                </div>
              </div>
            </div>
            <div className="w-[339px] pl-1 pr-[9px] py-1 justify-start items-start gap-[138px] inline-flex">
              <div className="justify-start items-center gap-2 flex">
                <div className="w-8 h-8 rounded-[100px] justify-center items-center flex">
                  <img
                    className="w-8 h-8 rounded-[100px] border border-stone-400"
                    src="https://via.placeholder.com/32x32"
                  />
                </div>
                <div className="w-[87px] h-[34px] flex-col justify-center items-start inline-flex">
                  <div className="text-neutral-700 text-base font-normal ">
                    Cyclops732
                  </div>
                  <div className="text-neutral-500 text-xs font-medium ">
                    999,999.99
                  </div>
                </div>
              </div>
              <div className="w-[61.04px] h-[34px] flex-col justify-center items-end inline-flex">
                <div className="text-neutral-700 text-base font-normal ">
                  $556.27
                </div>
                <div className="text-neutral-500 text-xs font-medium ">
                  +7.44%
                </div>
              </div>
            </div>
            <div className="w-[339px] pl-1 pr-[9px] py-1 justify-start items-start gap-[138px] inline-flex">
              <div className="justify-start items-center gap-2 flex">
                <div className="w-8 h-8 rounded-[100px] justify-center items-center flex">
                  <img
                    className="w-8 h-8 rounded-[100px] border border-stone-400"
                    src="https://via.placeholder.com/32x32"
                  />
                </div>
                <div className="w-[87px] h-[34px] flex-col justify-center items-start inline-flex">
                  <div className="text-neutral-700 text-base font-normal ">
                    Cyclops732
                  </div>
                  <div className="text-neutral-500 text-xs font-medium ">
                    999,999.99
                  </div>
                </div>
              </div>
              <div className="w-[61.04px] h-[34px] flex-col justify-center items-end inline-flex">
                <div className="text-neutral-700 text-base font-normal ">
                  $556.27
                </div>
                <div className="text-neutral-500 text-xs font-medium ">
                  +7.44%
                </div>
              </div>
            </div>
            <div className="w-[339px] pl-1 pr-[9px] py-1 justify-start items-start gap-[138px] inline-flex">
              <div className="justify-start items-center gap-2 flex">
                <div className="w-8 h-8 rounded-[100px] justify-center items-center flex">
                  <img
                    className="w-8 h-8 rounded-[100px] border border-stone-400"
                    src="https://via.placeholder.com/32x32"
                  />
                </div>
                <div className="w-[87px] h-[34px] flex-col justify-center items-start inline-flex">
                  <div className="text-neutral-700 text-base font-normal ">
                    Cyclops732
                  </div>
                  <div className="text-neutral-500 text-xs font-medium ">
                    999,999.99
                  </div>
                </div>
              </div>
              <div className="w-[61.04px] h-[34px] flex-col justify-center items-end inline-flex">
                <div className="text-neutral-700 text-base font-normal ">
                  $556.27
                </div>
                <div className="text-neutral-500 text-xs font-medium ">
                  +7.44%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1 h-[141px] bg-stone-400 rounded-[100px]" />
    </div>
  ) : (
    "Connect your wallet!"
  );
};

export default Profile;
