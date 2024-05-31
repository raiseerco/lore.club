import "../../app/globals.css";

import Search24 from "@/components/ui/Icons/Search24.svg";
import StyledIcon from "../StyledIcon";

const SearchBar: any = () => {
  return (
    <div
      className="w-full
     h-10 px-5 py-2 bg-stone-50
     rounded-full
      shadow-inner border
      border-stone-300 justify-start
       items-center gap-2 inline-flex"
    >
      <div className="justify-start w-full items-center gap-2 flex flex-row">
        <StyledIcon Icon={Search24} />
        <input
          placeholder="Find your lore or token"
          type="text"
          className="w-full bg-transparent
          placeholder-stone-300
          outline-none text-stone-500 text-base"
        />
      </div>
    </div>
  );
};

export default SearchBar;
