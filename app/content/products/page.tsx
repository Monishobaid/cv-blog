import { products } from "#site/content";
import { Metadata } from "next";
import { sortPosts } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tag } from "@/components/tag";
import { QueryPagination } from "@/components/query-pagination";

export const metadata: Metadata = {
  title: "Product Blog",
  description: "Explore our products and related content",
};

const POSTS_PER_PAGE = 5;

interface ProductPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function ProductBlogPage({ searchParams }: ProductPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  console.log("hello world",products);
  const sortedProducts = products.filter((product) => product.published);
  console.log("hello world",sortedProducts);
  const totalPages = Math.ceil(sortedProducts.length / POSTS_PER_PAGE);

  const displayProducts = sortedProducts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <h1 className="font-black text-4xl lg:text-5xl">Product Blog</h1>
      </div>
      <div className="grid grid-cols-12 gap-3 mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          {displayProducts?.length > 0 ? (
            <ul className="flex flex-col space-y-4">
              {displayProducts.map((product) => (
                <li key={product.slug} className="border-b pb-4">
                  <h2 className="text-2xl font-semibold">{product.title}</h2>
                  <p className="text-xl mt-0 text-muted-foreground">{product.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground">No products found</p>
          )}
          <QueryPagination totalPages={totalPages} className="justify-end mt-4" />
        </div>
      </div>
    </div>
  );
}
