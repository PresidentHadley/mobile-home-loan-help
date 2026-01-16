import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl space-y-5 py-10">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Page not found</h1>
      <p className="text-sm leading-relaxed text-gray-600">
        The page you’re looking for doesn’t exist. If you were trying to learn about financing options, these are good
        places to start.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link className="rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white" href="/">
          Go home
        </Link>
        <Link className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900" href="/get-help">
          Get help
        </Link>
      </div>
    </div>
  );
}

