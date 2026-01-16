import Link from "next/link";
import type { ReactNode } from "react";

type Props =
  | { href: string; children: ReactNode; className?: string }
  | { onClick: () => void; children: ReactNode; className?: string };

export function CTAButton(props: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2";

  if ("href" in props) {
    return (
      <Link href={props.href} className={[base, props.className].filter(Boolean).join(" ")}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={props.onClick}
      className={[base, props.className].filter(Boolean).join(" ")}
    >
      {props.children}
    </button>
  );
}

