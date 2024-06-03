import { ActivityBar } from "./ActivityBar";
import { SortCommands } from "./SortCommands";
import { TokenIcon } from "./TokenIcon";

interface ViewGalleryProps {
  dummy?: boolean;
}

export const ViewGallery = ({ dummy }: ViewGalleryProps) => {
  return (
    <>
      <SortCommands />

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <TokenIcon id={1} />
        <TokenIcon id={11} />
        <TokenIcon id={111} />
        <TokenIcon id={12} />
        <TokenIcon id={122} />
        <TokenIcon id={13} />
        <TokenIcon id={133} />
        <TokenIcon id={144} />
      </div>

      <ActivityBar />
    </>
  );
};
