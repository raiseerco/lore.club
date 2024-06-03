// "use client";

interface SortCommandsProps {
  dummy?: boolean;
  // dropdownContent?: ReactNode;
}

export const SortCommands = ({ dummy }: SortCommandsProps) => {
  return (
    <div
      className="fixed top-16 left-44 right-0 z-20
       flex
    items-center justify-between py-2 px-8 bg-stone-50
   border-b border-stone-300"
    >
      <div className="text-neutral-700 text-sm font-semibold">Sort by: </div>
      <div className="text-right text-neutral-500 text-sm font-medium">
        12893 Tokens
      </div>
    </div>
  );
};
