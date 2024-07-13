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
      </div>

      <ActivityBar />
    </>
  );
};
