// lib/fetchNews.js
export async function fetchNewsArticles() {
    const endpoint = "top-headlines";
    const baseUrl = "https://gnews.io/api/v4";
    const apiKey = process.env.GNEWS_API_KEY;
  
    // Add a log to track the number of times this function is called
    console.log("🔁 fetchNewsArticles called");
  
    const apiUrl = `${baseUrl}/${endpoint}?category=technology&country=ca&lang=en&apikey=${apiKey}`;
    const res = await fetch(apiUrl, { cache: "no-store" });
  
    const data = await res.json();
    
    // Check if the response is successful and log the number of articles fetched
    if (res.ok) {
      console.log(`Fetched ${data.articles.length} articles`);
    } else {
      console.error("Failed to fetch articles", data);
    }
  
    return data.articles || [];
  }
  