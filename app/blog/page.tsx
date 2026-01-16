import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog (Manufactured Home Financing Guides)",
  description:
    "Educational articles about manufactured/mobile home financing, leased land, requirements, and loan options. We are not a lender.",
  alternates: { canonical: "/blog" }
};

export default function BlogIndexPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blog</h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
          Educational guides to help you understand manufactured/mobile home financing. Requirements vary by lender and
          state.
        </p>
      </div>

      <div className="grid gap-4">
        {BLOG_POSTS.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-gray-300"
          >
            <div className="text-xs font-semibold text-gray-500">{p.date} • {p.readingMinutes} min read</div>
            <h2 className="mt-2 text-xl font-bold text-gray-900">{p.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.description}</p>
            <div className="mt-3 text-xs font-semibold text-brand-blue">Read article</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

