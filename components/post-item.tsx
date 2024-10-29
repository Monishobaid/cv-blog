import { Calendar } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn, formatDate } from "@/lib/utils";
import { Tag } from "./tag";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
}

export function PostItem({
  slug,
  title,
  description,
  date,
  tags,
}: PostItemProps) {
  return (
    <article className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
      <div>
        <h2 className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
          <Link href={`/content/${slug}`}>{title}</Link>
        </h2>
      </div>
      <div className="flex gap-2 flex-wrap">
        {tags?.map((tag) => (
          <Tag
            tag={tag}
            key={tag}
            className="bg-blue-100 text-blue-600 px-2 py-1 rounded-lg"
          />
        ))}
      </div>
      {description && (
        <p className="text-gray-700 text-base leading-relaxed">{description}</p>
      )}
      <div className="flex justify-between items-center mt-4">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-sm sm:text-base font-medium text-gray-500 flex items-center gap-1">
            <Calendar className="h-4 w-4 text-blue-500" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={`/${slug}`}
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-blue-600 font-semibold hover:underline"
          )}
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
