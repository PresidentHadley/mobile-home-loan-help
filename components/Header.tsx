import Link from "next/link";

const NAV = [
  { href: "/calculator", label: "Calculator" },
  { href: "/requirements", label: "Requirements" },
  { href: "/leased-land", label: "Leased Land" },
  { href: "/bad-credit", label: "Bad Credit" },
  { href: "/new-vs-used", label: "New vs Used" },
  { href: "/states", label: "States" },
  { href: "/resources", label: "Resources" },
  { href: "/get-help", label: "Get Help" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue text-sm font-bold text-white">
            MH
          </span>
          <span className="min-w-0 truncate text-sm font-semibold text-gray-900 sm:text-base">
            MobileHomeLoanHelp
          </span>
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/get-help" className="shrink-0">
          <span className="hidden rounded-xl bg-brand-orange px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-amber-400 sm:inline-flex">
            Get Personalized Help
          </span>
          <span className="inline-flex whitespace-nowrap rounded-xl bg-brand-orange px-3 py-2 text-xs font-semibold text-gray-900 shadow-sm transition hover:bg-amber-400 sm:hidden">
            Get help
          </span>
        </Link>
      </div>

      <div className="border-t border-gray-100 md:hidden">
        <div className="mx-auto flex max-w-6xl gap-3 overflow-x-auto px-4 py-2">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-800"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

