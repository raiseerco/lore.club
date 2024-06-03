import Link from "next/link";

interface TokenIconProps {
  dummy?: boolean;
  id: number;
  // dropdownContent?: ReactNode;
}

export const TokenIcon = ({ id }: TokenIconProps) => {
  return (
    <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
      <Link className="absolute inset-0 z-10" href={`/tokens/${id}`}>
        <span className="sr-only">View token {id} dummy</span>
      </Link>

      <img
        alt="Item thumbnail"
        className="h-48 w-full rounded-t-lg object-cover group-hover:opacity-80"
        height={300}
        src="/placeholder.svg"
        style={{
          aspectRatio: "300/300",
          objectFit: "cover",
        }}
        width={300}
      />
      <div className="p-4">
        <h3 className="text-sm font-medium tracking-tight">TOKEN: {id}</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          $0.0002 - 200k Mcap
        </p>
      </div>
    </div>
  );
};
