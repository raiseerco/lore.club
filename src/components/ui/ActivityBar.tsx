// "use client";

interface ActivityBarProps {
  dummy?: boolean;
  // dropdownContent?: ReactNode;
}

export const ActivityBar = ({ dummy }: ActivityBarProps) => {
  return (
    <div className="fixed bottom-0 left-44 right-0 z-20 activityBar bg-stone-200">
      {/* pill item  */}
      <div className="px-2.5 bg-stone-50 rounded-lg justify-center items-center gap-1 flex">
        <div className="py-1 rounded-[100px] justify-start items-center gap-[5px] flex">
          <div className="w-[26px] h-[26px] justify-center items-center flex">
            <img
              className="w-[26px] h-[26px] rounded-[14px] border border-stone-400"
              src="https://via.placeholder.com/26x26"
            />
          </div>
          <div className="text-center text-neutral-700 text-sm font-normal">
            $CLYPS Created 1 min ago
          </div>
        </div>
      </div>
    </div>
  );
};
