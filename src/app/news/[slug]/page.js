"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // ✅ App Router version
import { useNews } from "@/app/context/NewsContext";

const NewsArticlePage = () => {
  const { articles } = useNews();
  const { slug } = useParams(); // ✅ Get slug from URL in App Router
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (slug && articles.length) {
      const matchedArticle = articles.find((a) => a.slug === slug);
      setArticle(matchedArticle || null);
    }
  }, [slug, articles]);

  if (!slug || !articles.length) {
    return null; // optional: loading state
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      {/* Add other content */}
    </div>
  );
};

export default NewsArticlePage;

