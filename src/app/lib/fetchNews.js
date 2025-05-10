// lib/fetchNews.js
export async function fetchNewsArticles() {
    const endpoint = "top-headlines";
    const baseUrl = "https://gnews.io/api/v4";
    const apiKey = process.env.GNEWS_API_KEY;
  
    const apiUrl = `${baseUrl}/${endpoint}?category=technology&country=ca&lang=en&apikey=${apiKey}`;
    const res = await fetch(apiUrl, { cache: "no-store" });
  
    const data = await res.json();
    return data.articles || [];
  }
  