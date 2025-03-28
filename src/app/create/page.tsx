"use client";

import { createToken, getBlockNumber, getTokensCreated } from "@/lib/privy";
import { useEffect, useState } from "react";

import { ethers } from "ethers";
import { usePrivy } from "@privy-io/react-auth";

export default function CreatePage() {
  const [block, setBlock] = useState<bigint>();
  const [name, setName] = useState("");
  const [ticker, setTicker] = useState("");
  const [lore, setLore] = useState("");
  const [description, setDescription] = useState(
    "Here you can describe your project token briefly to expand on the context that you consider important. Use it wisely..."
  );
  const [web, setWeb] = useState("");
  const [twitter, setTwitter] = useState("");
  const [telegram, setTelegram] = useState("");
  const [discord, setDiscord] = useState("");
  const [picture, setPicture] = useState("");
  const { authenticated } = usePrivy();
  const [complete, setComplete] = useState<boolean>(false);
  const { user } = usePrivy();

  // useEffect(() => {
  //   const fetchBalances = async (address: string) => {
  //     let balanceValue: string | null;
  //     if (tokenA === "ETH") {
  //       balanceValue = await getBalanceETH(address);
  //       // setBalance is ETH balance
  //       setBalance(balanceValue ? parseFloat(balanceValue) : 0);
  //     } else {
  //       balanceValue = (await getBalanceToken(address, id))?.toString() || "0";
  //     }

  //     // setBalance is ETH balance
  //     // setBalance(balanceValue ? parseFloat(balanceValue) : 0);
  //     setBalanceTokenA(balanceValue ? parseFloat(balanceValue) : 0);
  //   };

  //   if (user?.wallet?.address) {
  //     fetchBalances(user?.wallet?.address);
  //   }
  // }, [setBalance, id, user?.wallet?.address, tokenA]);

  const handleChange = (e: any, funcSet: any) => {
    const sanitized = e.target.value.toLowerCase().replace(/[^a-z0-9]/g, "");
    console.log("sanito ", sanitized);

    funcSet(sanitized);
  };

  const handleCreation = () => {
    if (user?.wallet?.address && name) {
      console.log("creating: ", name);

      // buy with eth
      // if (tokenA === "ETH") {
      //   const deadlineInSeconds =
      //     Math.floor(Date.now() / 1000) + DEFAULT_DEADLINE_MINS * 60;

      return createToken(
        name,
        ticker,
        description,
        picture,
        user?.wallet?.address
      );
      // } else {
      //   // TODO es por aca
      //   // sell with tokens
      //   // sell operation
      // }
    }
  };

  const handleChangeUrl = (e: any, funcSet: any) => {
    const sanitized = e.target.value.replace(
      /[^-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g,
      ""
    );
    funcSet(sanitized);
  };

  return (
    <div
      className="flex w-full mt-16 gap-6 justify-center
 p-4 md:p-6
    "
    >
      {/* left side  */}
      <div
        className="p-2.5 bg-stone-50 rounded-3xl 
      shadow flex-col justify-start items-start gap-2.5 inline-flex"
      >
        {/* information inputs */}
        <div className="p-4 bg-zinc-100 rounded-2xl flex-col justify-start items-start gap-4 flex">
          <div className="text-neutral-700 text-sm font-semibold">
            Information
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="w-[472px] h-[52px] rounded-tl rounded-tr flex-col justify-start items-start flex">
              <div className="self-stretch h-[52px] bg-stone-50 rounded-lg border border-stone-300 flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch h-[52px] px-4 py-2 rounded-tl rounded-tr justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 h-10 flex-col justify-center items-start inline-flex">
                    <div className="justify-start items-center inline-flex">
                      <div className="text-neutral-500 text-xs font-normal">
                        Token Name
                      </div>
                    </div>
                    <input
                      className="text-neutral-500 bg-transparent w-full outline-none text-base font-normal"
                      type="text"
                      value={name}
                      maxLength={16}
                      onChange={(e) => handleChange(e, setName)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[472px] h-[52px] rounded-tl rounded-tr flex-col justify-start items-start flex">
              <div className="self-stretch h-[52px] bg-stone-50 rounded-lg border border-stone-300 flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch h-[52px] px-4 py-2 rounded-tl rounded-tr justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 h-10 flex-col justify-center items-start inline-flex">
                    <div className="justify-start items-center inline-flex">
                      <div className="text-neutral-500 text-xs font-normal">
                        Ticker
                      </div>
                    </div>
                    <input
                      type="text"
                      className="text-neutral-500 bg-transparent w-full outline-none text-base font-normal"
                      value={ticker}
                      maxLength={16}
                      onChange={(e) => handleChange(e, setTicker)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[472px] h-[67px] rounded-tl rounded-tr flex-col justify-start items-start flex">
              <div className="self-stretch h-[52px] bg-stone-50 rounded-lg border border-stone-300 flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch h-[52px] px-4 py-2 rounded-tl rounded-tr justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 h-10 flex-col justify-center items-start inline-flex">
                    <div className="justify-start items-center inline-flex">
                      <div className="text-neutral-500 text-xs font-normal">
                        Lore
                      </div>
                    </div>
                    <input
                      type="text"
                      className="text-neutral-500 bg-transparent w-full outline-none text-base font-normal"
                      value={lore}
                      maxLength={16}
                      onChange={(e) => handleChange(e, setLore)}
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch px-4 pt-1 justify-start items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-stone-400 text-xs font-normal">
                  Input up to 3 tags that describe your lore.
                </div>
              </div>
            </div>
            <div className="w-[472px] h-[109px] rounded-tl rounded-tr flex-col justify-start items-start flex">
              <div className="self-stretch grow shrink basis-0 bg-stone-50 rounded-lg border border-stone-300 flex-col justify-center items-center gap-2.5 flex">
                <div className="self-stretch h-[52px] px-4 py-2 rounded-tl rounded-tr justify-center items-center inline-flex">
                  <div className="grow shrink basis-0 h-10 flex-col justify-center items-start inline-flex">
                    <div className="justify-start items-center inline-flex">
                      <div className="text-neutral-500 text-xs font-normal">
                        Description
                      </div>
                    </div>

                    <div className="self-stretch justify-start items-center inline-flex">
                      <textarea
                        rows={3}
                        maxLength={100}
                        className="grow shrink outline-none basis-0 text-neutral-500 
                       text-sm bg-transparent"
                        value={description}
                        onChange={(e) => handleChange(e, setDescription)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch px-4 pt-1 justify-start items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-stone-400 text-xs font-normal">
                  140 character is the limit.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-zinc-100 rounded-2xl flex-col justify-start items-start gap-4 flex">
          <div className="text-neutral-700 text-sm font-semibold">
            Social Media
          </div>
          <div className="flex-col justify-start items-start  gap- flex">
            <div className="justify-start items-start gap-4 inline-flex">
              <div className="w-[472px] h-[67px] rounded-tl rounded-tr flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-[52px] bg-stone-50 rounded-lg border border-stone-300 flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch h-[52px] px-4 py-2 rounded-tl rounded-tr justify-start items-center inline-flex">
                    <div className="grow shrink basis-0 h-10 flex-col justify-center items-start inline-flex">
                      <div className="justify-start items-center inline-flex">
                        <div className="text-neutral-500 text-xs font-normal">
                          url
                        </div>
                      </div>
                      <input
                        type="text"
                        placeholder="www.mywebsite.com"
                        className="text-neutral-500 bg-transparent w-full outline-none text-base font-normal"
                        value={web}
                        onChange={(e) => handleChangeUrl(e, setWeb)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="justify-start items-start gap-4 inline-flex">
              <div className="w-[472px] h-[67px] rounded-tl rounded-tr flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-[52px] bg-stone-50 rounded-lg border border-stone-300 flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch h-[52px] px-4 py-2 rounded-tl rounded-tr justify-start items-center inline-flex">
                    <div className="grow shrink basis-0 h-10 flex-col justify-center items-start inline-flex">
                      <div className="justify-start items-center inline-flex">
                        <div className="text-neutral-500 text-xs font-normal">
                          Twitter/X handler
                        </div>
                      </div>
                      <input
                        type="text"
                        placeholder="@"
                        className="text-neutral-500 bg-transparent w-full outline-none text-base font-normal"
                        value={twitter}
                        onChange={(e) => handleChangeUrl(e, setTwitter)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="justify-start items-start gap-4 inline-flex">
              <div className="w-[472px] h-[67px] rounded-tl rounded-tr flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-[52px] bg-stone-50 rounded-lg border border-stone-300 flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch h-[52px] px-4 py-2 rounded-tl rounded-tr justify-start items-center inline-flex">
                    <div className="grow shrink basis-0 h-10 flex-col justify-center items-start inline-flex">
                      <div className="justify-start items-center inline-flex">
                        <div className="text-neutral-500 text-xs font-normal">
                          Telegram handler
                        </div>
                      </div>
                      <input
                        type="text"
                        placeholder="@"
                        className="text-neutral-500 bg-transparent w-full outline-none text-base font-normal"
                        value={telegram}
                        onChange={(e) => handleChange(e, setTelegram)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="justify-start items-start gap-4 inline-flex">
              <div className="w-[472px] h-[67px] rounded-tl rounded-tr flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-[52px] bg-stone-50 rounded-lg border border-stone-300 flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch h-[52px] px-4 py-2 rounded-tl rounded-tr justify-start items-center inline-flex">
                    <div className="grow shrink basis-0 h-10 flex-col justify-center items-start inline-flex">
                      <div className="justify-start items-center inline-flex">
                        <div className="text-neutral-500 text-xs font-normal">
                          Discord url
                        </div>
                      </div>
                      <input
                        type="text"
                        placeholder=""
                        className="text-neutral-500 bg-transparent w-full outline-none text-base font-normal"
                        value={discord}
                        onChange={(e) => handleChangeUrl(e, setDiscord)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="w-[107px] h-[34px] rounded-[100px] border border-stone-400 flex-col justify-center items-center gap-2 flex">
              <div className="self-stretch grow shrink basis-0 px-6 py-2.5 justify-center items-center gap-2 inline-flex">
                <div className="text-center text-neutral-700 text-sm font-medium">
                  + Add Social
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="p-4 bg-zinc-100 rounded-2xl flex-col justify-center items-center gap-2.5 flex">
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="text-neutral-700 text-sm font-semibold">
              Secure Your Tokens
            </div>
            <div className="w-[472px] h-[34px] text-neutral-500 text-sm font-normal">
              Decide on the amount of your token you would like to secure. This
              step, while optional, can boost sales and increase token exposure.
            </div>
          </div>
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="w-[284px] h-[75px] relative">
              <div className="w-[107px] h-[15px] left-[16px] top-[60px] absolute justify-start items-start gap-1 inline-flex">
                <div className="text-neutral-700 text-xs font-semibold">
                  MAX
                </div>
                <div className="text-neutral-700 text-xs font-medium">
                  Balance
                </div>
                <div className="text-neutral-700 text-xs font-medium">0.00</div>
              </div>
              <div className="w-[284px] h-[52px] px-4 py-[9px] left-0 top-0 absolute bg-stone-50 rounded-lg border border-stone-300 justify-start items-start gap-[146px] inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-neutral-500 text-xs font-normal">
                    Spend
                  </div>
                  <div className="text-neutral-700 text-base font-normal">
                    0.00
                  </div>
                </div>
                <div className="px-1.5 py-1 bg-white rounded-[100px] border border-stone-300 justify-start items-center gap-1 flex">
                  <div className="w-[26px] h-[26px] justify-center items-center flex">
                    <img
                      className="w-[26px] h-[26px] rounded-[14px] border border-stone-400"
                      src="https://via.placeholder.com/26x26"
                    />
                  </div>
                  <div className="text-center text-neutral-700 text-sm font-normal">
                    ETH
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[180px] h-[74.82px] relative">
              <div className="w-[100px] h-[15px] left-[64px] top-[59.82px] absolute justify-start items-start inline-flex">
                <div className="text-right text-neutral-700 text-xs font-medium">
                  2
                </div>
                <div className="text-right text-neutral-700 text-xs font-medium">
                  % of total supply
                </div>
              </div>
              <div className="w-[180px] h-[52px] pl-4 pr-[120px] py-[9px] left-0 top-0 absolute rounded-lg border border-stone-300 flex-col justify-start items-start inline-flex">
                <div className="text-neutral-500 text-xs font-normal">
                  Receive
                </div>
                <div className="text-neutral-700 text-base font-normal">
                  0.00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right side  */}
      <div className="w-[296px] h-[579px] flex-col justify-start items-start gap-6 inline-flex">
        <div className="w-[296px] h-[290px] px-[66px] py-20 bg-zinc-100 rounded-2xl shadow border-4 border-stone-50 flex-col justify-center items-center gap-8 flex">
          <div className="flex-col justify-start items-center flex">
            <div className="w-[53.98px] h-[54px] relative" />
            <div className="w-[120.95px] text-center text-neutral-500 text-sm font-semibold">
              Click to upload or drag & drop
            </div>
          </div>
        </div>
        <div className="w-[296px] h-[265px] p-4 bg-stone-50 rounded-2xl shadow border border-stone-300 flex-col justify-start items-start gap-4 flex">
          <div className="flex-col justify-start items-start gap-1 flex">
            <div className="justify-center items-center gap-[9px] inline-flex">
              <img
                className="w-5 h-5 relative rounded-[100px] border border-stone-400"
                src="https://via.placeholder.com/20x20"
              />
              <div className="justify-start items-center gap-24 flex">
                <div className="text-neutral-700 text-[22px] font-semibold">
                  Token Name
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-1.5 inline-flex">
              <div className="opacity-0 text-neutral-700 text-xs font-normal">
                000
              </div>
              <div className="text-neutral-700 text-xs font-normal">
                ${ticker.toUpperCase()}
              </div>
            </div>
          </div>
          <div className="w-[264px] text-neutral-700 text-xs font-normal">
            Here you can describe your project token briefly to expand on the
            context that you consider important. Use it wisely :)
          </div>

          <div className="w-[264px] h-12 bg-stone-900 rounded-lg flex-col justify-center items-center gap-2 flex">
            <div className="self-stretch grow shrink basis-0 px-6 py-2.5 justify-center items-center gap-2 inline-flex">
              {authenticated &&
              ticker.length > 2 &&
              name.length > 5 &&
              description.length > 5 ? (
                <button
                  className="text-center text-white text-sm font-medium"
                  onClick={handleCreation}
                >
                  Create [{name}]
                </button>
              ) : (
                <span className="text-white">...</span>
              )}
            </div>
          </div>

          <div className="flex-col justify-start items-start gap-px flex">
            <div className="justify-start items-start gap-7 inline-flex">
              <div className="w-[117.49px] text-neutral-700 text-xs font-medium">
                Token Creation
              </div>
              <div className="w-[117.49px] text-right text-neutral-700 text-xs font-medium">
                0.06 ETH ($5)
              </div>
            </div>
            <div className="justify-start items-start gap-7 inline-flex">
              <div className="w-[117.49px] text-neutral-700 text-xs font-medium">
                Token Purchase
              </div>
              <div className="w-[117.49px] text-right text-neutral-700 text-xs font-medium">
                0 ETH ($0)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
