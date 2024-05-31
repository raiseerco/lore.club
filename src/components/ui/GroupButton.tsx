"use client";

import LayoutGridIcon from "@/components/ui/Icons/LayoutGridIcon.svg";
import LayoutListIcon from "@/components/ui/Icons/LayoutListIcon.svg";
import StyledIcon from "../StyledIcon";
import { useState } from "react";

interface ToggleButtonProps {
  onToggle?: (selected: string) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ onToggle }) => {
  const [selected, setSelected] = useState<"left" | "right">("left");

  const handleToggle = (option: "left" | "right") => {
    setSelected(option);
    // onToggle(option); // TODO expose selected value
  };

  return (
    <div
      style={{
        padding: "3px",

        boxShadow:
          "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow), --tw-shadow: inset 0 1px 2px 0 rgb(0 0 0 / 0.2), --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color)",
      }}
      className="flex bg-stone-300 rounded-lg  m-1"
    >
      <button
        className={`px-3 py-2  rounded ${
          selected === "left"
            ? "bg-zinc-100 text-black"
            : "bg-stone-300 text-white"
        }`}
        onClick={() => handleToggle("left")}
      >
        <StyledIcon Icon={LayoutGridIcon} />
      </button>
      <button
        className={`px-3 py-2 rounded ${
          selected === "right"
            ? "bg-zinc-100 text-black"
            : "bg-stone-300 text-white"
        }`}
        onClick={() => handleToggle("right")}
      >
        <StyledIcon Icon={LayoutListIcon} />
      </button>
    </div>
  );
};

export default ToggleButton;
