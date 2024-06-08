import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { parseUnits, formatUnits } from "viem";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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
  console.log("bigNum ", bigNum);
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
