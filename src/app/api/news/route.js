// src/app/api/news/route.js

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q");
    const endpoint = q ? "search" : "top-headlines";
    const baseUrl = "https://gnews.io/api/v4";
    const apiKey = process.env.GNEWS_API_KEY;
  
    const apiUrl = `${baseUrl}/${endpoint}?${q ? `q=${q}&` : ""}category=technology&country=ca&lang=en&apikey=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (!data.articles) {
        return new Response(JSON.stringify({ error: "No tech news found" }), {
          status: 404,
        });
      }
  
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("❌ Error fetching from GNews:", error);
      return new Response(JSON.stringify({ error: "Failed to fetch news" }), {
        status: 500,
      });
    }
  }
  