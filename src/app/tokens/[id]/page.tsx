"use client";

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
import { formatNumber } from "@/lib/utils";

export default function TokenPage({ params }: { params: { id: string } }) {
  const { id } = params;

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

  const tokenDummy = {
    id: id,
    name: "myToken",
    ticker: "MTK",
    price: 3333.444,
    variation: 0.16,
    volume24h: 128922.333,
    ohlcData: [],
    liquidity: 123000,
    mcap: 12300012342,
    holders: 660,
    platformRank: 223,
    txData: [txData],
    tokenMetadata: {
      creatorAddress: "0x000",
      network: "Solana",
      projectAbout:
        "RSIC•GENESIS•RUNE (also known as RUNECOIN or RSIC) is the first Pre-Rune airdropped to the early adopters of Ordinals. Runecoin is a token designed with intention and innovation. As the 8th Rune etched on the Runes protocol with the airdrop size of 888 Satoshis, it adds a touch of 'luck' by echoing the symbolic meaning of the lucky number 8 in culture. Runecoin's 21 billion token supply also pays tribute to Bitcoin's famous 21 million hard cap.",
      urlMain: "www.xyz.io",
      urlX: "x.com/xyz",
      urlDiscord: "discord.com/xyz",
      urlTelegram: "t.me/xyz",
      pool: "0x...",
      urlExplorer: "solscan.com/token/xyz",
      tokenHolders: [],
    },
  };
  return (
    <div className="mt-28">
      <Breadcrumb network="selected!" id={parseInt(id)} />
      <div className="flex flex-col lg:flex-row lg:gap-4">
        {/* left side  */}
        <div className="lg:w-2/3 mb-6 w-full">
          <div className="mb-3 flex justify-left items-center">
            <div className="flex">
              <div
                style={{
                  width: "100%",
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
                  src="https://via.placeholder.com/54x54"
                />
              </div>

              {/* token names  */}
              <div className="ml-3">
                <p className="text-2xl text-black">{tokenDummy.name}</p>
                <p className="text-gray-500 text-sm">
                  {tokenDummy.ticker.toUpperCase()}
                </p>
              </div>
            </div>
          </div>
          {/* price  */}
          <div className="mb-3">
            <div className="text-4xl mb-1">${tokenDummy.price}</div>

            <div className="flex text-sm">
              <p className=" text-green-500">{tokenDummy.variation}%</p>
              <p className="ml-3 text-gray-500">{tokenDummy.volume24h}</p>
            </div>
          </div>
          {/* chart  */}
          <div className="mb-3">chart</div>
          {/* market indicators  */}
          <div className="mb-3 flex gap-6">
            <div>
              <p className="text-2xl">${formatNumber(tokenDummy.liquidity)}</p>
              <p className="text-sm">Liquidity</p>
            </div>
            <div>
              <p className="text-2xl">${formatNumber(tokenDummy.mcap)}</p>
              <p className="text-sm">Market cap</p>
            </div>
            <div>
              <p className="text-2xl">${formatNumber(tokenDummy.holders)}</p>
              <p className="text-sm">Holders</p>
            </div>
          </div>
          {/* tx table  */}
          <TxTable transactions={txData} />
        </div>

        {/* right side  */}
        <div className="lg:w-1/3 w-full">
          <div
            className="bg-stone-100 flex justify-center items-center p-10
           shadow rounded-tr-3xl rounded-tl-3xl "
          >
            {/* swapper frame */}
            <div className="p-2.5 bg-stone-200 rounded-2xl flex-col justify-center items-start gap-2 inline-flex w-full max-w-md mx-auto">
              {/* buy buttons */}
              <div className="w-full h-7 relative flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-[47px] h-[25px] px-[11px] py-1 bg-stone-50 rounded-full border border-stone-300 flex justify-center items-center">
                    <div className="text-center text-neutral-700 text-sm font-semibold">
                      Buy
                    </div>
                  </div>
                  <div className="w-[46px] h-[25px] px-[11px] py-1 rounded-full border border-stone-300 flex justify-center items-center">
                    <div className="text-center text-neutral-700 text-sm font-medium">
                      Sell
                    </div>
                  </div>
                </div>
                <button
                  className="w-7 h-7 p-1.5 rounded-full border border-stone-300 flex justify-center items-center"
                  onClick={() => console.log("settings")}
                >
                  <div className="w-4 h-4 relative">
                    <StyledIcon Icon={CogIcon} />
                  </div>
                </button>
              </div>

              <div className="w-full relative flex flex-col gap-2">
                <div className="w-full h-[88px] p-4 bg-white rounded-2xl border border-stone-300 flex justify-between items-center">
                  <div className="flex flex-col justify-center items-start gap-0.5">
                    <div className="flex justify-center items-center">
                      <div className="text-neutral-700 text-2xl font-medium">
                        0,00
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-px">
                      <div className="text-neutral-700 text-xs font-medium">
                        Receive
                      </div>
                      <div className="text-neutral-700 text-xs font-medium">
                        $0,00
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-end gap-2.5">
                    <div className="px-1.5 py-1 bg-white rounded-full border border-stone-300 flex justify-end items-center gap-1">
                      <div className="h-[26px] bg-stone-50 rounded-full border border-stone-300 flex justify-center items-center">
                        <img
                          className="w-[26px] h-[26px] rounded-full border border-stone-400"
                          src="https://via.placeholder.com/26x26"
                        />
                      </div>
                      <div className="text-center text-neutral-700 text-sm font-normal">
                        CLYP
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[88px] p-4 bg-white rounded-2xl border border-stone-300 flex justify-between items-center">
                  <div className="flex flex-col justify-center items-start gap-0.5">
                    <div className="flex justify-center items-center">
                      <div className="text-neutral-700 text-2xl font-medium">
                        0,00
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-px">
                      <div className="text-neutral-700 text-xs font-medium">
                        You pay
                      </div>
                      <div className="text-neutral-700 text-xs font-medium">
                        $0,00
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-end gap-2.5">
                    <div className="px-1.5 py-1 bg-white rounded-full border border-stone-300 flex justify-end items-center gap-1">
                      <div className="w-[26px] h-[26px] flex justify-center items-center">
                        <img
                          className="w-[26px] h-[26px] rounded-full border border-stone-400"
                          src="https://via.placeholder.com/26x26"
                        />
                      </div>
                      <div className="text-center text-neutral-700 text-sm font-normal">
                        ETH
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

              <div className="w-full h-12 bg-stone-900 rounded-2xl flex justify-center items-center">
                <div className="text-center text-white text-sm font-medium">
                  Buy [Token]
                </div>
              </div>
            </div>
          </div>

          {/* token information  */}
          <div className="shadow bg-white rounded-br-3xl rounded-bl-3xl">
            <div className="border-b py-2 px-4">Information</div>
            <div className="text-sm py-4 font-thin flex">
              <div className="py-2 px-4">Creator</div>
              <Chip text={tokenDummy.tokenMetadata.creatorAddress} />
              {/* network ? */}

              <div className="py-2 px-4">Creator</div>
            </div>
            <div className="px-4 pb-4 text-sm font-thin">
              {tokenDummy.tokenMetadata.projectAbout}
            </div>

            {/* url chips  */}
            <div className="px-4 pb-4 gap-2 justify-center text-sm font-thin flex flex-1 flex-wrap">
              <a
                href="#"
                target="_blank"
                className="h-8 bg-zinc-100 rounded-lg border border-stone-300 justify-center items-center inline-flex"
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
                className="h-8 bg-zinc-100 rounded-lg border border-stone-300 justify-center items-center inline-flex"
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
                className="h-8 bg-zinc-100 rounded-lg border border-stone-300 justify-center items-center inline-flex"
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
                className="h-8 bg-zinc-100 rounded-lg border border-stone-300 justify-center items-center inline-flex"
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
                className="h-8 bg-zinc-100 rounded-lg border border-stone-300 justify-center items-center inline-flex"
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
                className="h-8 bg-zinc-100 rounded-lg border border-stone-300 justify-center items-center inline-flex"
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
            <div className="border-y py-2 px-4">Token Holders</div>
            {/* TODO get the array from the graph */}
          </div>
        </div>
      </div>
    </div>
  );
}
