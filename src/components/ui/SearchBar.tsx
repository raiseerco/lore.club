// "use client";

// import "../../app/globals.css";

import Search24Icon from "@/components/ui/Icons/Search24Icon.svg";
import StyledIcon from "../StyledIcon";

const SearchBar: any = () => {
  return (
    <div
      className="w-full
     h-10 px-5 py-2 
     
     bg-stone-50
     border-stone-300
     
     dark:bg-stone-900
     dark:border-stone-800

     justify-start
     rounded-full
      shadow-inner border
       items-center gap-2 inline-flex"
    >
      <div className="justify-start w-full items-center gap-2 flex flex-row">
        <StyledIcon Icon={Search24Icon} />
        <input
          placeholder="Find your lore or token"
          type="text"
          className="w-full bg-transparent
          placeholder-stone-500
          outline-none 
          text-stone-500
          dark:text-stone-400
           text-base"
        />
      </div>
    </div>
  );
};

export default SearchBar;
