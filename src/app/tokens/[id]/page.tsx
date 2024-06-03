import { Breadcrumb } from "@/components/ui/Breadcrumb";

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
    mcap: 123000,
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
      <h1>Token Details</h1>
      <p>Token ID: {id}</p>
    </>
  );
}
