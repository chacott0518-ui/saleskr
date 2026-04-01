import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleById, getNextArticle, SORTED_NEWS } from "../data";
import NewsDetailClient from "./NewsDetailClient";

export async function generateStaticParams() {
  return SORTED_NEWS.map((article) => ({ id: article.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = getArticleById(id);
  if (!article) return {};
  return {
    title: `${article.title} | SalesKR Newsroom`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.mainImage, width: 1400, height: 787 }],
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = getArticleById(id);
  if (!article) notFound();

  const nextArticle = getNextArticle(id);

  return <NewsDetailClient article={article} nextArticle={nextArticle} />;
}