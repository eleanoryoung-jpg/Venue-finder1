export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    return res.status(200).end();
  }
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { query, per_page = 1 } = req.query;
  if (!query) return res.status(400).json({ error: "Missing query" });

  try {
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${per_page}&orientation=landscape`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Client-ID IFbv34jGESInOsxNto6puKwKEKROHFDQB_GEJQ-Hxn8`,
      },
    });

    const data = await response.json();

    // Cache for 24h on CDN
    res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(response.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
