/* eslint-disable @next/next/no-img-element */
import { calculateMC, formatCurrency, formatNumber } from "@/lib/utils";
import { useEffect, useState } from "react";

import Link from "next/link";
import { formatUnits } from "viem";

interface TokenIconProps {
  tokenObject: any;
  // dropdownContent?: ReactNode;
}

export const TokenIcon = ({ tokenObject }: TokenIconProps) => {
  const [values, setValues] = useState("");

  useEffect(() => {
    const formattedPrice = formatUnits(tokenObject.currentTokenPrice, 9); // TODO CHECK
    // console.log(".v ", v);

    const currPrice = parseFloat(formattedPrice);
    // console.log(".currPrice ", currPrice);
    const circSupply: bigint = (tokenObject.totalSupply as bigint) - 1n; //tokenObject.reserveToken;

    console.log(".totalSupply ", parseFloat(formatUnits(circSupply, 18)));

    const fCirc = parseFloat(formatUnits(circSupply, 18));

    // const totalSupplyEther = parseFloat(formatUnits(circSupply, 18));

    const marketCap = formatNumber(fCirc * currPrice);
    // console.log(".marketCap ", marketCap);

    const priceLine = calculateMC(tokenObject);
    //  `${formatCurrency(va, "en-US", "USD")} - ${formatCurrency(
    //   marketCap,
    //   "en-US",
    //   "USD"
    // )}`;
    console.log("valor ", priceLine);
    // Actualizamos el estado con el resultado formateado
    // setValues(priceLine.toString());
    setValues(`${currPrice} ~ MCap $${marketCap}`);
  }, [tokenObject]);

  return (
    <div
      className="w-56 group relative rounded-lg border border-gray-200 bg-white
    shadow-sm transition-all hover:border-gray-300 dark:border-gray-800
    dark:bg-gray-950"
    >
      <Link
        className="absolute inset-0 z-10"
        href={`/tokens/${tokenObject.tokenAddress}`}
      >
        <span className="sr-only">
          View token {tokenObject.tokenAddress} dummy
        </span>
      </Link>

      {/* {
  collectedFees: 0n
  completionFee: 400n
  creator: "0x23BF95De9F90338F973056351C8Cd2CB78cbe52f"
  currentTokenPrice: 900000000n
  totalSupply: 1000000000000000000000000000n
  description: "Token Description #1"
  image: "https://gray-lucky-louse-813.mypinata.cloud/ipfs/QmccigNmKpKgqprK31VXXRzYFBsXDw651SNXg5DniuE3HP/1.webp"
  initialETHVirtualReserve: 900000000000000000n
  name: "Meme Token #1"
  poolAddress: "0x0000000000000000000000000000000000000000"
  poolInitialized: false
  presaleActive: true
  reserveETH: 900000000000000000n
  reserveToken: 1000000000000000000000000000n
  targetReserveETH: 4000000000000000000n
  ticker: "MEME1"
  tokenAddress: "0x7CF77357467fD2CdAd2A7E549Da836FbA0955ff2"
  tradingFee: 100n
} */}

      <img
        alt={tokenObject.name}
        className="h-48 w-full rounded-t-lg object-cover group-hover:opacity-80"
        height={300}
        src={tokenObject.image}
        style={{
          aspectRatio: "300/300",
          objectFit: "cover",
        }}
        width={300}
      />
      <div className="p-4">
        <h3 className="text-sm font-medium tracking-tight">
          {tokenObject.name}
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          ${values}
        </p>
      </div>
    </div>
  );
};
