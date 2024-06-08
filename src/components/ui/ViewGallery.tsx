import { ActivityBar } from "./ActivityBar";
import { SortCommands } from "./SortCommands";
import { TokenIcon } from "./TokenIcon";

interface ViewGalleryProps {
  tokensData?: any;
}

export const ViewGallery = ({ tokensData }: ViewGalleryProps) => {
  return (
    <>
      <SortCommands />

      {/* <div
        className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3
      lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 
      "
      > */}
      <div className="flex flex-wrap gap-6">
        {tokensData.map((tokenObject: any) => {
          return (
            <TokenIcon
              key={tokenObject.tokenAddress}
              tokenObject={tokenObject}
            />
          );
        })}

        {/* <TokenIcon id={11} />
        <TokenIcon id={111} />
        <TokenIcon id={12} />
        <TokenIcon id={122} />
        <TokenIcon id={13} />
        <TokenIcon id={133} />
        <TokenIcon id={144} /> */}
      </div>

      <ActivityBar />
    </>
  );
};
