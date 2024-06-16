// "use client";

interface BreadcrumbProps {
  dummy?: boolean;
  network: string;
  id: string;
}

// TODO get token minting details from api

export const Breadcrumb = ({ dummy, network, id }: BreadcrumbProps) => {
  return (
    <div
      className="fixed top-16 left-44 right-0 z-20
         flex
      items-center justify-between py-2 px-8 bg-stone-50
     border-b border-stone-300"
    >
      <div className="text-neutral-700 text-sm font-semibold">
        Explore / {network} / {id}
      </div>
      <div className="text-right text-neutral-500 text-sm font-medium">
        00000 Available tokens
      </div>
    </div>
  );
};
