// lib/fetchNews.js
// export async function fetchNewsArticles() {
//   const endpoint = "top-headlines";
//   const baseUrl = "https://gnews.io/api/v4";
//   const apiKey = process.env.GNEWS_API_KEY;

//   console.log("🔁 fetchNewsArticles called");

//   const apiUrl = `${baseUrl}/${endpoint}?category=technology&country=ca&lang=en&apikey=${apiKey}`;
//   const res = await fetch(apiUrl, { cache: "no-store" });

//   const data = await res.json();

//   if (res.ok) {
//     console.log(`Fetched ${data.articles.length} articles`);
//   } else {
//     console.error("Failed to fetch articles", data);
//   }

//   return data.articles || [];
// }

// lib/fetchNews.js
export async function fetchNewsArticles() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const apiUrl = `${baseUrl}/api/news`;

  console.log("🔁 fetchNewsArticles called:", apiUrl);

  const res = await fetch(apiUrl, { cache: "no-store" });

  if (!res.ok) {
    console.error("❌ Failed to fetch from API route", await res.text());
    return [];
  }

  const data = await res.json();
  console.log(`✅ Got ${data.articles?.length || 0} articles`);
  return data.articles || [];
}


