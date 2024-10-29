import { products } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Tag } from "@/components/tag";

interface ProductPageProps {
  params: {
    slug: string[];
  };
}

async function getProductFromParams(params: ProductPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const product = products.find((product) => product.slugAsParams === slug);

  return product;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = await getProductFromParams(params);

  if (!product) {
    return {};
  }

  return {
    title: product.title,
    description: product.description,
    authors: { name: siteConfig.author },
  };
}

export async function generateStaticParams(): Promise<
  ProductPageProps["params"][]
> {
  return products.map((product) => ({ slug: product.slugAsParams.split("/") }));
}

export default async function ProductPostPage({ params }: ProductPageProps) {
  const product = await getProductFromParams(params);

  if (!product || !product.published) {
    notFound();
  }

  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <h1 className="mb-2">{product.title}</h1>
      <div className="flex gap-2 mb-2">
        {product.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      {product.description ? (
        <p className="text-xl mt-0 text-muted-foreground">{product.description}</p>
      ) : null}
      <hr className="my-4" />
      <MDXContent code={product.body} />
    </article>
  );
}
