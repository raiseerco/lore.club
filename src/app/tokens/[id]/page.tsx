import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { formatNumber } from "@/lib/utils";

export default function TokenPage({ params }: { params: { id: string } }) {
  const { id } = params;

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
    txData: [],
    tokenMetadata: {
      creatorAddress: "0x000",
      network: "Solana",
      projectAbout: "This project xyz",
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
    <>
      <Breadcrumb network="selected!" id={parseInt(id)} />
      <div className="flex bg-teasl-400">
        {/* left side  */}
        <div className="w-7/12">
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
          table
        </div>
        {/* right side  */}
        <div
          className="w-5/12 p-14 rounded-3xl shadow
        bg-white flex justify-center items-center"
        >
          {/* swapper  */}
          <div className="w-[408px] h-[290px] p-2.5 bg-red-100 rounded-2xl flex-col justify-center items-start gap-2 inline-flex">
            <div className="w-[386px] h-7 relative">
              <div className="w-[47px] h-[25px] px-[11px] py-1 left-0 top-[1.50px] absolute bg-stone-50 rounded-[100px] border border-stone-300 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-neutral-700 text-sm font-semibold">
                  Buy
                </div>
              </div>
              <div className="w-[46px] h-[25px] px-[11px] py-1 left-[51px] top-[1.50px] absolute rounded-[100px] border border-stone-300 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-neutral-700 text-sm font-medium">
                  Sell
                </div>
              </div>
              <div className="w-7 h-7 p-1.5 left-[358px] top-0 absolute rounded-[100px] border border-stone-300 justify-center items-center gap-2.5 inline-flex">
                <div className="w-4 h-4 relative" />
              </div>
            </div>
            <div className="w-[388px] h-[178px] relative">
              <div className="w-[388px] h-[88px] p-4 left-0 top-[90px] absolute bg-white rounded-2xl border border-stone-300 justify-start items-center gap-[172px] inline-flex">
                <div className="w-[79px] flex-col justify-center items-start gap-0.5 inline-flex">
                  <div className="w-[68px] h-[39px] justify-center items-center inline-flex">
                    <div className="text-neutral-700 text-[32px] font-medium">
                      0,00
                    </div>
                  </div>
                  <div className="justify-start items-start gap-px inline-flex">
                    <div className="text-neutral-700 text-xs font-medium">
                      Receive
                    </div>
                    <div className="text-neutral-700 text-xs font-medium">
                      $0,00
                    </div>
                  </div>
                </div>
                <div className="w-[105px] flex-col justify-center items-end gap-2.5 inline-flex">
                  <div className="px-1.5 py-1 bg-white rounded-[100px] border border-stone-300 justify-end items-center gap-1 inline-flex">
                    <div className="h-[26px] bg-stone-50 rounded-[100px] border border-stone-300 justify-start items-center flex">
                      <img
                        className="w-[26px] h-[26px] rounded-[14px] border border-stone-400"
                        src="https://via.placeholder.com/26x26"
                      />
                    </div>
                    <div className="text-center text-neutral-700 text-sm font-normal ">
                      CLYP
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[388px] h-[88px] p-4 left-0 top-0 absolute bg-white rounded-2xl border border-stone-300 justify-start items-center gap-[172px] inline-flex">
                <div className="w-[79px] flex-col justify-center items-start gap-0.5 inline-flex">
                  <div className="w-[68px] h-[39px] justify-center items-center inline-flex">
                    <div className="text-neutral-700 text-[32px] font-medium  ">
                      0,00
                    </div>
                  </div>
                  <div className="justify-start items-start gap-px inline-flex">
                    <div className="text-neutral-700 text-xs font-medium  ">
                      You pay
                    </div>
                    <div className="text-neutral-700 text-xs font-medium ">
                      $0,00
                    </div>
                  </div>
                </div>
                <div className="w-[105px] flex-col justify-center items-end gap-2.5 inline-flex">
                  <div className="px-1.5 py-1 bg-white rounded-[100px] border border-stone-300 justify-end items-center gap-1 inline-flex">
                    <div className="w-[26px] h-[26px] justify-center items-center flex">
                      <img
                        className="w-[26px] h-[26px] rounded-[14px] border border-stone-400"
                        src="https://via.placeholder.com/26x26"
                      />
                    </div>
                    <div className="text-center text-neutral-700 text-sm font-normal ">
                      ETH
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[38.29px] h-[38.29px] p-2.5 left-[174.85px] top-[69.85px] absolute bg-white rounded-[100px] border-2 border-stone-300 justify-center items-center gap-2.5 inline-flex">
                <div className="w-5 h-5 relative origin-top-left -rotate-90" />
              </div>
            </div>
            <div className="w-[386px] h-12 bg-stone-900 rounded-2xl flex-col justify-center items-center gap-2 flex">
              <div className="self-stretch grow shrink basis-0 px-6 py-2.5 justify-center items-center gap-2 inline-flex">
                <div className="text-center text-white text-sm font-medium ">
                  Buy [Token]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
