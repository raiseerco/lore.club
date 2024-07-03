"use client";

import {
  buyTokens,
  calculatePurchaseTokens,
  getBalanceETH,
  getEvents,
  getTokenInfo,
} from "@/lib/privy";
import { formatNumber, shortAddress, useDebounce } from "@/lib/utils";
import { useEffect, useState } from "react";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Chip from "@/components/ui/Chip";
import CogIcon from "@/components/ui/Icons/CogIcon.svg";
import ContractIcon from "@/components/ui/Icons/ContractIcon.svg";
import DiscordIcon from "@/components/ui/Icons/DiscordIcon.svg";
import PoolIcon from "@/components/ui/Icons/PoolIcon.svg";
import StyledIcon from "@/components/StyledIcon";
import TelegramIcon from "@/components/ui/Icons/TelegramIcon.svg";
import TxTable from "@/components/ui/TxTable";
import WebIcon from "@/components/ui/Icons/WebIcon.svg";
import XIcon from "@/components/ui/Icons/XIcon.svg";
import { parseUnits } from "viem";
import { useBalance } from "@/components/contexts/BalanceContext";
import { usePrivy } from "@privy-io/react-auth";

const DEFAULT_DEADLINE_MINS = 10;

export default function TokenPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const [tokenData, setTokenData] = useState<any>(null);
  const [loadingTx, setLoadingTx] = useState(true);
  const [isEnough, setIsEnough] = useState(false);
  const [ethAmount, setEthAmount] = useState("");
  const { balance, setBalance } = useBalance();
  const { user } = usePrivy();
  const [tokensToPurchase, setTokensToPurchase] = useState<
    string | undefined
  >();

  const handleInput = (ethValue: string) => {
    console.log("ethValue ", ethValue === "");
    console.log("bouncing, calculating output...", id, ethValue);

    if (parseFloat(ethValue) === 0 || balance === 0) {
      console.log("input zero");
      setTokensToPurchase("0");
      setIsEnough(false);
      return;
    }

    if (balance < parseFloat(ethValue)) {
      setIsEnough(false);
    } else {
      setIsEnough(true);
    }

    setEthAmount(ethValue);
    return calculatePurchaseTokens(id, ethValue).then((res) => {
      console.log("resu: ", res);
      setTokensToPurchase(res?.tokensToPurchase.toString());
    });
  };

  const debouncedInputHandler = useDebounce(handleInput, 500);

  // informative functions
  async function fetchTokenTransfers(
    tokenAddress: string,
    fromBlock: string,
    toBlock: string
  ) {
    console.log("param address ", tokenAddress);

    const url = new URL(`/api/transactions`, window.location.origin);
    url.searchParams.append("token", tokenAddress);
    // url.searchParams.append('fromBlock', fromBlock);
    // url.searchParams.append('toBlock', toBlock);
    // if (from) url.searchParams.append('from', from);
    // if (to) url.searchParams.append('to', to);
    const response = await fetch(url);

    // const response = await fetch(
    //   `/api/${tokenAddress}`
    //   // ?fromBlock=${fromBlock}&toBlock=${toBlock}`
    // );

    console.log("response ", response);
    if (!response.ok) {
      throw new Error("Failed to fetch token transfers");
    }
    return response.json();
  }

  const handleBuy = () => {
    if (user?.wallet?.address && tokensToPurchase) {
      console.log("buying: ", tokensToPurchase);

      const deadlineInSeconds =
        Math.floor(Date.now() / 1000) + DEFAULT_DEADLINE_MINS * 60;

      return buyTokens(
        id,
        parseUnits(tokensToPurchase, 9),
        ethAmount,
        parseUnits(deadlineInSeconds.toString(), 9),
        user?.wallet?.address
      );
    }
  };

  useEffect(() => {
    fetchTokenTransfers("item.tokenAddress", "earliest", "latest")
      .then((data) => console.log("The data logs! ", data))
      .catch((error) => console.error(error));

    getTokenInfo(id).then((item) => {
      if (!item) {
        return;
      }
      console.log("dataaaa ", item);

      setTokenData(item);
      // load tx
      // getEvents(); deprecated?

      return fetchTokenTransfers(item.tokenAddress, "earliest", "latest")
        .then((data) => console.log("The data logs! ", data))
        .catch((error) => console.error(error));
    });
  }, [id]);

  useEffect(() => {
    const fetchBalance = async (address: string) => {
      const balanceValue = await getBalanceETH(address);
      setBalance(balanceValue ? parseFloat(balanceValue) : 0);
    };

    if (user?.wallet?.address) {
      fetchBalance(user?.wallet?.address);
    }
  }, [setBalance, user?.wallet?.address]);

  interface Transaction {
    time: Date;
    type: "sell" | "buy";
    token: string;
    amountWETH: number;
    amountUSD: number;
    address: string;
    txId: string;
  }

  const txData = [
    {
      time: new Date(),
      type: "sell",
      token: "0x",
      amountWETH: 0.0212311221,
      amountUSD: 120.33,
      address: "0x1234567890",
      txId: "0x123000123",
    },
    {
      time: new Date(),
      type: "sell",
      token: "0x",
      amountWETH: 0.02,
      amountUSD: 120.33,
      address: "0x1234567890",
      txId: "0x123000123",
    },
    {
      time: new Date(),
      type: "sell",
      token: "0x",
      amountWETH: 0.02,
      amountUSD: 120.33,
      address: "0x1234567890",
      txId: "0x123000123",
    },
    {
      time: new Date(),
      type: "sell",
      token: "0x",
      amountWETH: 0.02,
      amountUSD: 120.33,
      address: "0x1234567890",
      txId: "0x123000123",
    },
    {
      time: new Date(),
      type: "sell",
      token: "0x",
      amountWETH: 0.02,
      amountUSD: 120.33,
      address: "0x1234567890",
      txId: "0x123000123",
    },
  ];

  return (
    <div className="mt-28 mx-4 flex w-full justify-center">
      {tokenData ? (
        <div>
          <Breadcrumb network="selected!" id={id} />
          <div className="flex flex-col lg:flex-row lg:gap-4">
            {/* left side  */}
            <div className="lg:w-2/3 mb-6 w-full">
              <div className="mb-3 flex justify-left items-center">
                <div className="flex w-full">
                  <div
                    style={{
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "inline-flex",
                    }}
                  >
                    <img
                      style={{
                        width: 54,
                        height: 54,
                        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
                        borderRadius: 110.71,
                        border: "2px white solid",
                      }}
                      src={tokenData.image}
                    />
                  </div>

                  {/* token names  */}
                  <div className="ml-3">
                    <p className="text-2xl text-black dark:text-stone-200">
                      {tokenData.name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {tokenData.ticker.toUpperCase()}
                    </p>
                  </div>
                </div>
              </div>
              {/* price  */}
              <div className="mb-3">
                <div className="text-4xl mb-1">
                  ${formatNumber(tokenData.currentTokenPrice)}
                </div>

                <div className="flex text-sm">
                  {/* FIXME */}
                  <p className=" text-green-500 bg-amber-700">
                    {/* {tokenDummy.variation}% */}
                  </p>
                  <p className="ml-3 text-gray-500  bg-amber-700">
                    {/* {tokenDummy.volume24h} */}
                  </p>
                </div>
              </div>
              {/* chart  */}
              <div className="mb-3">chart</div>
              {/* FIXME market indicators */}
              <div className="mb-3 flex gap-6 bg-amber-700">
                <div>
                  <p className="text-2xl">
                    {/* ${formatNumber(tokenDummy.liquidity)} */}
                  </p>
                  <p className="text-sm">Liquidity</p>
                </div>
                <div>
                  {/* <p className="text-2xl">${formatNumber(tokenDummy.mcap)}</p> */}
                  <p className="text-sm">Market cap</p>
                </div>
                <div>
                  <p className="text-2xl">
                    {/* ${formatNumber(tokenDummy.holders)} */}
                  </p>
                  <p className="text-sm">Holders</p>
                </div>
              </div>
              {/* tx table  */}
              <TxTable transactions={txData} />
            </div>

            {/* right side  */}
            <div className="lg:w-1/3 w-full">
              <div
                className="bg-stone-100 dark:bg-stone-800 flex justify-center items-center p-10
      shadow rounded-tr-3xl rounded-tl-3xl "
              >
                {/* swapper frame */}
                <div
                  className="p-2.5 bg-stone-100 dark:bg-stone-700 
                 rounded-2xl flex-col justify-center items-start gap-2 inline-flex w-full max-w-md mx-auto"
                >
                  {/* buy-sell buttons */}
                  <div className="w-full h-7 relative flex justify-between items-center">
                    <div className="flex gap-2">
                      <button
                        className="w-[47px] h-[25px] px-[11px] py-1 bg-stone-50
                        dark:bg-stone-400 
                       rounded-full border border-stone-300 flex justify-center items-center"
                      >
                        <span className="text-center text-neutral-700 text-sm font-semibold">
                          Buy
                        </span>
                      </button>
                      <div
                        className="w-[46px] h-[25px] px-[11px] py-1 rounded-full border
                        border-stone-300 dark:border-stone-500 
                        
                        flex justify-center items-center"
                      >
                        <div className="text-center text-neutral-600 text-sm font-medium">
                          Sell
                        </div>
                      </div>
                    </div>
                    <button
                      className="w-7 h-7 p-1.5 rounded-full border
                       border-stone-300 flex justify-center items-center"
                      onClick={() => console.log("settings")}
                    >
                      <div className="w-4 h-4 relative">
                        <StyledIcon Icon={CogIcon} />
                      </div>
                    </button>
                  </div>

                  <div className="w-full relative flex flex-col gap-2">
                    <div
                      className="w-full h-[88px] p-4 bg-white
                      dark:bg-stone-600 
                      dark:border-stone-500 
                      border-stone-300 
                      rounded-2xl border
                       flex justify-between items-center"
                    >
                      <div className="flex flex-col justify-center items-start gap-0.5">
                        <div className="flex justify-center items-center">
                          <input
                            placeholder="0.00"
                            type="text"
                            onChange={(e) => {
                              const sanitized = e.target.value.replace(
                                /,/g,
                                "."
                              );
                              e.target.value = /^[0-9]*\.?[0-9]*$/.test(
                                sanitized
                              )
                                ? sanitized
                                : sanitized.slice(0, -1);
                              if (e.target.value === "") {
                                return;
                              }

                              debouncedInputHandler(e.target.value);
                            }}
                            //   onChange={(
                            //     e: React.ChangeEvent<HTMLInputElement>
                            //   ) => {
                            //     const sanitized = e.target.value.replace(
                            //       /,/g,
                            //       "."
                            //     );
                            //     e.target.value = /^[0-9]*\.?[0-9]*$/.test(
                            //       sanitized
                            //     )
                            //       ? sanitized
                            //       : sanitized.slice(0, -1);
                            //   }
                            // }
                            className="w-full bg-transparent
                              placeholder-stone-300
                              outline-none 
                              text-black
                              dark:text-stone-200
                              text-2xl"
                          />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-px">
                          <div className="text-neutral-700 text-xs font-medium">
                            You pay
                          </div>
                          <div className="text-neutral-700 text-xs font-medium">
                            $0.00
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-end gap-2.5">
                        <div
                          className="px-1.5 py-1   rounded-full border
                         border-stone-300
                         dark:border-stone-400
                         
                         flex justify-end items-center gap-1"
                        >
                          <div
                            className="bg-stone-50
                          rounded-full border
                          border-stone-300 
                          flex justify-center items-center"
                          >
                            <img
                              className=" rounded-full border
                               border-stone-400"
                              src="https://via.placeholder.com/26x26"
                            />
                          </div>
                          <div
                            className="text-center text-neutral-700
                          dark:text-neutral-200
                          text-sm font-normal"
                          >
                            ETH
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-full h-[88px] p-4 bg-white 
                    dark:bg-stone-600 
                      dark:border-stone-500 
                     rounded-2xl border border-stone-300 flex justify-between items-center"
                    >
                      <div className="flex flex-col justify-center items-start gap-0.5">
                        <div className="flex justify-center items-center">
                          {/* <div className="text-neutral-700 text-2xl font-medium">
                            0.00
                          </div> */}

                          <input
                            placeholder="0.00"
                            type="text"
                            defaultValue={tokensToPurchase}
                            onChange={(e) => {
                              const sanitized = e.target.value.replace(
                                /,/g,
                                "."
                              );
                              e.target.value = /^[0-9]*\.?[0-9]*$/.test(
                                sanitized
                              )
                                ? sanitized
                                : sanitized.slice(0, -1);
                              if (e.target.value === "") {
                                return;
                              }

                              debouncedInputHandler(e.target.value);
                            }}
                            //   onChange={(
                            //     e: React.ChangeEvent<HTMLInputElement>
                            //   ) => {
                            //     const sanitized = e.target.value.replace(
                            //       /,/g,
                            //       "."
                            //     );
                            //     e.target.value = /^[0-9]*\.?[0-9]*$/.test(
                            //       sanitized
                            //     )
                            //       ? sanitized
                            //       : sanitized.slice(0, -1);
                            //   }
                            // }
                            className="w-full bg-transparent
                              placeholder-stone-300
                              outline-none 
                              text-black
                              dark:text-stone-200
                              text-2xl"
                          />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-px">
                          <div className="text-neutral-700 text-xs font-medium">
                            You receive
                          </div>
                          <div className="text-neutral-700 text-xs font-medium">
                            $0.00
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-end gap-2.5">
                        <div
                          className="px-1.5 py-1 rounded-full border 
                        border-stone-300 flex justify-end items-center gap-1"
                        >
                          <div className="w-[26px] h-[26px] flex justify-center items-center">
                            <img
                              className="rounded-full border border-stone-400"
                              src="https://via.placeholder.com/26x26"
                            />
                          </div>
                          <div
                            className="text-center text-neutral-700
                          dark:text-neutral-200
                          text-sm font-normal"
                          >
                            {tokenData.ticker}
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="absolute top-[50%] left-[50%]
           transform -translate-x-1/2 -translate-y-1/2 w-[38.29px] 
           h-[38.29px] bg-white rounded-full border-2
            border-stone-300 flex justify-center items-center"
                      onClick={() => console.log("ready")}
                    >
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 relative origin-top-left  "
                      >
                        <path
                          d="M9.16732 3.33366L9.16732 13.4753L4.50898 8.81699L3.33398 10.0003L10.0007 16.667L16.6673 10.0003L15.4923 8.82533L10.834 13.4753L10.834 3.33366L9.16732 3.33366Z"
                          fill="#373434"
                        />
                      </svg>
                    </button>
                  </div>

                  {isEnough ? (
                    <button
                      className="w-full h-12 bg-stone-900 rounded-2xl flex justify-center items-center"
                      onClick={handleBuy}
                    >
                      <span className="text-center text-white text-sm font-medium">
                        Buy {tokenData.ticker}
                      </span>
                    </button>
                  ) : (
                    <div
                      className="w-full h-12
                     bg-stone-300
                     dark:bg-stone-700
                     
                     rounded-2xl flex justify-center items-center"
                    >
                      <span className="text-center text-white text-sm font-medium">
                        Insufficient balance
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* token information  */}
              <div className="shadow bg-white dark:bg-stone-900 rounded-br-3xl rounded-bl-3xl">
                <div className="border-b dark:border-b-stone-700 dark:text-neutral-400 py-2 px-4">
                  Information
                </div>
                <div className="text-sm py-4 font-thin flex">
                  <div className="py-2 px-4">Creator</div>
                  <Chip text={shortAddress(tokenData.creator)} />
                  {/* network ? */}

                  <div className="py-2 px-4">Creator</div>
                </div>
                <div className="px-4 pb-4 text-sm font-thin">
                  {tokenData.description}
                </div>

                {/* url chips  */}
                <div className="px-4 pb-4 gap-2 justify-center text-sm font-thin flex flex-1 flex-wrap">
                  <a
                    href="#" // FIXME
                    target="_blank"
                    className="h-8 bg-stone-100 dark:bg-stone-700 rounded-lg border
                    dark:border-stone-600
                    border-stone-300 justify-center items-center inline-flex"
                  >
                    <div className="pl-2 pr-3 py-1.5 justify-center items-center gap-2 flex">
                      <StyledIcon Icon={WebIcon} />
                      <span className="text-center text-black/opacity-20 text-sm font-medium">
                        Website
                      </span>
                    </div>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="h-8 bg-stone-100 dark:bg-stone-700 rounded-lg border
                    dark:border-stone-600
                    border-stone-300 justify-center items-center inline-flex"
                  >
                    <div className="pl-2 pr-3 py-1.5 justify-center items-center gap-2 flex">
                      <StyledIcon Icon={XIcon} />
                      <span className="text-center text-black/opacity-20 text-sm font-medium">
                        Twitter
                      </span>
                    </div>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="h-8 bg-stone-100 dark:bg-stone-700 rounded-lg border
                    dark:border-stone-600
                    border-stone-300 justify-center items-center inline-flex"
                  >
                    <div className="pl-2 pr-3 py-1.5 justify-center items-center gap-2 flex">
                      <StyledIcon Icon={DiscordIcon} />
                      <span className="text-center text-black/opacity-20 text-sm font-medium">
                        Discord
                      </span>
                    </div>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="h-8 bg-stone-100 dark:bg-stone-700 rounded-lg border
                    dark:border-stone-600
                    border-stone-300 justify-center items-center inline-flex"
                  >
                    <div className="pl-2 pr-3 py-1.5 justify-center items-center gap-2 flex">
                      <StyledIcon Icon={TelegramIcon} />
                      <span className="text-center text-black/opacity-20 text-sm font-medium">
                        Telegram
                      </span>
                    </div>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="h-8 bg-stone-100 dark:bg-stone-700 rounded-lg border
                    dark:border-stone-600
                    border-stone-300 justify-center items-center inline-flex"
                  >
                    <div className="pl-2 pr-3 py-1.5 justify-center items-center gap-2 flex">
                      <StyledIcon Icon={PoolIcon} />
                      <span className="text-center text-black/opacity-20 text-sm font-medium">
                        Pool
                      </span>
                    </div>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="h-8 bg-stone-100 dark:bg-stone-700 rounded-lg border
                    dark:border-stone-600
                    border-stone-300 justify-center items-center inline-flex"
                  >
                    <div className="pl-2 pr-3 py-1.5 justify-center items-center gap-2 flex">
                      <StyledIcon Icon={ContractIcon} />
                      <span className="text-center text-black/opacity-20 text-sm font-medium">
                        Contract
                      </span>
                    </div>
                  </a>
                </div>

                {/* top holders  */}
                <div className="border-y dark:border-y-stone-700  py-2 px-4">
                  Token Holders
                </div>
                {/* TODO get the array from the graph */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        "No data"
      )}
    </div>
  );
}
