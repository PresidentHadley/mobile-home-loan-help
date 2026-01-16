import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog";

type Props = {
  params: { slug: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`
    }
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <header className="space-y-3">
        <div className="text-xs font-semibold text-gray-500">
          {post.date} • {post.readingMinutes} min read
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.title}</h1>
        <p className="text-base leading-relaxed text-gray-600">{post.description}</p>
      </header>

      <div className="space-y-5">
        {post.body.map((block, idx) => {
          if (block.type === "h2") {
            return (
              <h2 key={idx} className="text-xl font-bold text-gray-900">
                {block.content as string}
              </h2>
            );
          }
          if (block.type === "ul") {
            return (
              <ul key={idx} className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
                {(block.content as string[]).map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            );
          }
          return (
            <p key={idx} className="text-sm leading-relaxed text-gray-700">
              {block.content as string}
            </p>
          );
        })}
      </div>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
        <div className="font-semibold text-gray-900">Need personalized help?</div>
        <p className="mt-2">
          If you’d like a licensed professional to review your scenario, you can request help here:{" "}
          <Link className="font-semibold underline" href="/get-help">
            Get Personalized Help
          </Link>
          .
        </p>
      </div>

      <div className="text-sm">
        <Link className="font-semibold underline" href="/blog">
          ← Back to blog
        </Link>
      </div>
    </article>
  );
}

