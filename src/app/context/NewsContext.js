// "use client";
// import { createContext, useContext, useState } from "react";

// const NewsContext = createContext();

// export function NewsProvider({ children, initialArticles = [] }) {
//   const [articles, setArticles] = useState(initialArticles);
//   const [loading, setLoading] = useState(false); 

//   return (
//     <NewsContext.Provider value={{ articles, loading }}>
//       {children}
//     </NewsContext.Provider>
//   );
// }

// export function useNews() {
//   return useContext(NewsContext);
// }

// context/NewsContext.js
"use client";
import { createContext, useContext, useEffect, useState } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ initialArticles = [], children }) => {
  const [articles, setArticles] = useState(initialArticles);
  const [loading, setLoading] = useState(!initialArticles.length);


  useEffect(() => {
    if (!articles.length) {
      const fetchArticles = async () => {
        try {
          const res = await fetch("/api/news"); 
          const data = await res.json();
          setArticles(data);
        } catch (error) {
          console.error("Error fetching articles", error);
        } finally {
          setLoading(false);
        }
      };
      fetchArticles();
    }
  }, []);

  return (
    <NewsContext.Provider value={{ articles, loading, setArticles }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);


