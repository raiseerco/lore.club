import Link from "next/link";

interface ViewGalleryProps {
  dummy?: boolean;
  // dropdownContent?: ReactNode;
}

export const ViewGallery = ({ dummy }: ViewGalleryProps) => {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View item</span>
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
          <h3 className="text-sm font-medium tracking-tight">CyclopsDummy</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            $0.0002 - 200k Mcap
          </p>
        </div>
      </div>
      {/* Repeated item blocks omitted for brevity */}
      <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View item</span>
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
          <h3 className="text-sm font-medium tracking-tight">CyclopsDummy</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            $0.0002 - 200k Mcap
          </p>
        </div>
      </div>
      <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View item</span>
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
          <h3 className="text-sm font-medium tracking-tight">CyclopsDummy</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            $0.0002 - 200k Mcap
          </p>
        </div>
      </div>
      <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View item</span>
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
          <h3 className="text-sm font-medium tracking-tight">CyclopsDummy</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            $0.0002 - 200k Mcap
          </p>
        </div>
      </div>
      <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View item</span>
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
          <h3 className="text-sm font-medium tracking-tight">CyclopsDummy</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            $0.0002 - 200k Mcap
          </p>
        </div>
      </div>
      <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View item</span>
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
          <h3 className="text-sm font-medium tracking-tight">CyclopsDummy</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            $0.0002 - 200k Mcap
          </p>
        </div>
      </div>
      <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View item</span>
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
          <h3 className="text-sm font-medium tracking-tight">CyclopsDummy</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            $0.0002 - 200k Mcap
          </p>
        </div>
      </div>
      <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View item</span>
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
          <h3 className="text-sm font-medium tracking-tight">CyclopsDummy</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            $0.0002 - 200k Mcap
          </p>
        </div>
      </div>
      <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View item</span>
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
          <h3 className="text-sm font-medium tracking-tight">CyclopsDummy</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            $0.0002 - 200k Mcap
          </p>
        </div>
      </div>{" "}
      <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View item</span>
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
          <h3 className="text-sm font-medium tracking-tight">CyclopsDummy</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            $0.0002 - 200k Mcap
          </p>
        </div>
      </div>{" "}
      <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View item</span>
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
          <h3 className="text-sm font-medium tracking-tight">CyclopsDummy</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            $0.0002 - 200k Mcap
          </p>
        </div>
      </div>{" "}
      <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View item</span>
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
          <h3 className="text-sm font-medium tracking-tight">CyclopsDummy</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            $0.0002 - 200k Mcap
          </p>
        </div>
      </div>{" "}
      <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View item</span>
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
          <h3 className="text-sm font-medium tracking-tight">CyclopsDummy</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            $0.0002 - 200k Mcap
          </p>
        </div>
      </div>{" "}
      <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View item</span>
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
          <h3 className="text-sm font-medium tracking-tight">CyclopsDummy</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            $0.0002 - 200k Mcap
          </p>
        </div>
      </div>{" "}
      <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View item</span>
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
          <h3 className="text-sm font-medium tracking-tight">CyclopsDummy</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            $0.0002 - 200k Mcap
          </p>
        </div>
      </div>{" "}
      <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View item</span>
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
          <h3 className="text-sm font-medium tracking-tight">CyclopsDummy</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            $0.0002 - 200k Mcap
          </p>
        </div>
      </div>{" "}
      <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View item</span>
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
          <h3 className="text-sm font-medium tracking-tight">CyclopsDummy</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            $0.0002 - 200k Mcap
          </p>
        </div>
      </div>{" "}
      <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View item</span>
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
          <h3 className="text-sm font-medium tracking-tight">CyclopsDummy</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            $0.0002 - 200k Mcap
          </p>
        </div>
      </div>{" "}
      <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View item</span>
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
          <h3 className="text-sm font-medium tracking-tight">CyclopsDummy</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            $0.0002 - 200k Mcap
          </p>
        </div>
      </div>{" "}
      <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View item</span>
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
          <h3 className="text-sm font-medium tracking-tight">CyclopsDummy</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            $0.0002 - 200k Mcap
          </p>
        </div>
      </div>{" "}
      <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View item</span>
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
          <h3 className="text-sm font-medium tracking-tight">CyclopsDummy</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            $0.0002 - 200k Mcap
          </p>
        </div>
      </div>
    </div>
  );
};
