// "use client";

interface BreadcrumbProps {
  dummy?: boolean;
  network: string;
  id: string;
  available: string;
}

// TODO get token minting details from api

export const Breadcrumb = ({ network, id, available }: BreadcrumbProps) => {
  return (
    <div
      className="fixed top-16 left-44 right-0 z-20
      flex items-center justify-between pb-2 px-8 pt-3
      border-b
      bg-stone-50
      border-stone-300
      dark:bg-stone-800
      dark:border-stone-700 "
    >
      <div
        className="text-neutral-700
      dark:text-neutral-400
      text-sm font-semisbold"
      >
        Explore / {network} / {id}
      </div>
      <div className="text-right text-neutral-400 text-sm font-medium">
        {available} Available tokens
      </div>
    </div>
  );
};
