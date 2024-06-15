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
      items-center justify-between pt-3 pb-2 px-8
      bg-stone-50
      border-stone-300
      dark:bg-stone-900
      dark:border-stone-800
      border-b"
    >
      <div
        className="dark:text-stone-400
      text-stone-700 
      text-sm font-semibold"
      >
        Sort by:
      </div>
      <div className="text-right text-stone-500 text-sm font-medium">
        12893 Tokens
      </div>
    </div>
  );
};
