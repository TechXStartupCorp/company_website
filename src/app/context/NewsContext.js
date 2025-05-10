"use client";
import { createContext, useContext, useState } from "react";

const NewsContext = createContext();

export function NewsProvider({ children, initialArticles = [] }) {
  const [articles, setArticles] = useState(initialArticles);
  const [loading, setLoading] = useState(false); // already loaded

  return (
    <NewsContext.Provider value={{ articles, loading }}>
      {children}
    </NewsContext.Provider>
  );
}

export function useNews() {
  return useContext(NewsContext);
}

