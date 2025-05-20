"use client";
import { createContext, useContext } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children, articles, isFallback }) => {
  return (
    <NewsContext.Provider value={{ articles, isFallback }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);






// "use client";
// import { createContext, useContext, useEffect, useState } from "react";

// const NewsContext = createContext();

// export const NewsProvider = ({ initialArticles = [], children }) => {
//   const [articles, setArticles] = useState(initialArticles);
//   const [loading, setLoading] = useState(!initialArticles.length);

//   useEffect(() => {
//     if (!articles.length) {
//       const fetchArticles = async () => {
//         try {
//           const res = await fetch("/api/news");
//           const data = await res.json();
//           setArticles(data);
//         } catch (error) {
//           console.error("Error fetching articles", error);
//         } finally {
//           setLoading(false);
//         }
//       };
//       fetchArticles();
//     }
//   }, []);

//   return (
//     <NewsContext.Provider value={{ articles, loading, setArticles }}>
//       {children}
//     </NewsContext.Provider>
//   );
// };

// export const useNews = () => useContext(NewsContext);

// "use client";
// import { createContext, useContext, useEffect, useState } from "react";

// // ✅ CREATE THE CONTEXT
// const NewsContext = createContext();

// export const NewsProvider = ({ children }) => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isFallback, setIsFallback] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const apiArticles = await fetchNewsArticles();
//         setArticles(enrichArticles(apiArticles));
//         setIsFallback(false);
//       } catch {
//         const sanityArticles = await fetchNewsFeedPosts();
//         setArticles(sanityArticles);
//         setIsFallback(true);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <NewsContext.Provider value={{ articles, loading, isFallback }}>
//       {children}
//     </NewsContext.Provider>
//   );
// };

// // ✅ Export a custom hook to access context
// export const useNews = () => useContext(NewsContext);
