export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") return res.status(200).end();
    if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const { query, per_page = 1 } = req.query;
    if (!query) return res.status(400).json({ error: "Missing query" });

  const apiKey = process.env.PEXELS_API_KEY;
    if (!apiKey) return res.status(500).json({ error: "Pexels API key not configured" });

  try {
        const encodedQuery = encodeURIComponent(query);
        const apiUrl = `https://api.pexels.com/v1/search?query=${encodedQuery}&per_page=${per_page}&orientation=landscape`;

      const response = await fetch(apiUrl, {
              headers: {
                        'Authorization': apiKey
              }
      });

      if (!response.ok) {
              const text = await response.text();
              return res.status(response.status).json({ error: `Pexels API error ${response.status}: ${text.substring(0, 200)}` });
      }

      const data = await response.json();
        res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
        return res.status(200).json(data);
  } catch (err) {
        return res.status(500).json({ error: err.message });
  }
}
