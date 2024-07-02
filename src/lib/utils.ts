import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { parseUnits, formatUnits } from "viem";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shortAddress(address: string | undefined): string {
  if (!address || typeof address === "undefined") {
    return "error";
  }

  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function formatNumber(num: number | bigint): string {
  // Convert to BigInt if not already
  const bigNum = typeof num === "bigint" ? num : BigInt(num);

  const oneThousand = BigInt(1_000);
  const oneMillion = BigInt(1_000_000);
  const oneBillion = BigInt(1_000_000_000);
  const oneTrillion = BigInt(1_000_000_000_000);
  const oneQuadrillion = BigInt(1_000_000_000_000_000);
  const oneQuintillion = BigInt(1_000_000_000_000_000_000);
  console.log("ACA ", bigNum, new Date());
  if (bigNum >= oneQuintillion) {
    return (bigNum / oneQuintillion).toString() + "P"; // Quintillions
  } else if (bigNum >= oneQuadrillion) {
    return (bigNum / oneQuadrillion).toString() + "Q"; // Quadrillions
  } else if (bigNum >= oneTrillion) {
    return (bigNum / oneTrillion).toString() + "T"; // Trillions
  } else if (bigNum >= oneBillion) {
    return (bigNum / oneBillion).toString() + "B"; // Billions
  } else if (bigNum >= oneMillion) {
    return (bigNum / oneMillion).toString() + "M"; // Millions
  } else if (bigNum >= oneThousand) {
    return (bigNum / oneThousand).toString() + "K"; // Thousands
  } else {
    return bigNum.toString();
  }
}

export const formatCurrency = (
  value: number,
  locale: string,
  currency: string
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 6,
    maximumFractionDigits: 6,
  }).format(value);
};

export const calculateMCap = (token: any) => ({
  /*
 
{ 
  collectedFees: 0n,
  completionFee: 400n,
  creator: "0x23BF95De9F90338F973056351C8Cd2CB78cbe52f",
  currentTokenPrice: 900000000n,
  description: "Token Description #1",
  image: "https://gray-lucky-louse-813.mypinata.cloud/ipfs/QmccigNmKpKgqprK31VXXRzYFBsXDw651SNXg5DniuE3HP/1.webp",
  initialETHVirtualReserve: 900000000000000000n,
  name: "Meme Token #1",
  poolAddress: "0x0000000000000000000000000000000000000000",
  poolInitialized: false,
  presaleActive: true,
  reserveETH: 900000000000000000n,
  reserveToken: 1000000000000000000000000000n,
  targetReserveETH: 4000000000000000000n,
  ticker: "MEME1",
  tokenAddress: "0x7CF77357467fD2CdAd2A7E549Da836FbA0955ff2",
  totalSupply: 1000000000000000000000000000n,
  tradingFee: 100n,
}
  
*/
});

export function calculateMC(data: any) {
  const { totalSupply, reserveToken, currentTokenPrice } = data;

  const marketCap = (totalSupply - reserveToken) * currentTokenPrice;

  return marketCap;
}
import { useRef, useCallback, useEffect } from "react";
import { add } from "date-fns";

export function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedFunction = useCallback(
    (...args: Parameters<T>) => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      debounceRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  return debouncedFunction;
}
