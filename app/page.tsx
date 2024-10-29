import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";
import React from "react";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      {/* Hero Section with Gradient Background */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
        <div className="container mx-auto flex flex-col items-center gap-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-md">
            Hello, I&apos;m Rishabh
          </h1>
          <p className="max-w-2xl text-lg sm:text-2xl font-medium drop-shadow-md">
            PM for a reason, not for a season.
          </p>
          <div className="flex gap-4 justify-center mt-6">
            <Link
              href="/content/blog"
              className={cn(
                buttonVariants({ size: "lg" }),
                "px-6 py-3 font-semibold bg-white text-blue-600 rounded-lg shadow-md hover:bg-blue-100 transition-colors"
              )}
            >
              View Blog
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "px-6 py-3 font-semibold text-white border-white border-2 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              )}
            >
              Hello World
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="container max-w-3xl py-16 space-y-10 mt-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-600">
          Latest Posts
        </h2>
        <ul className="space-y-6">
          {latestPosts.map(
            (post) =>
              post.published && (
                <li
                  key={post.slug}
                  className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transition-shadow hover:shadow-2xl"
                >
                  <PostItem
                    slug={post.slug}
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    tags={post.tags}
                  />
                </li>
              )
          )}
        </ul>
      </section>
    </>
  );
}
