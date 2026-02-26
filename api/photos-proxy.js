export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const { query, per_page = 1 } = req.query;
  if (!query) return res.status(400).json({ error: "Missing query" });

  try {
    const https = require('https');
    const encodedQuery = encodeURIComponent(query);
    const apiUrl = `https://api.pexels.com/v1/search?query=${encodedQuery}&per_page=${per_page}&orientation=landscape`;

    const data = await new Promise((resolve, reject) => {
      const options = {
        hostname: 'api.pexels.com',
        path: `/v1/search?query=${encodedQuery}&per_page=${per_page}&orientation=landscape`,
        method: 'GET',
        headers: {
          'Authorization': '6DCUilsAIAPuBiyehVouTnAcOnGffav4xJCoHxP3j0sUQ5XFPnYGcbW4'
        }
      };
      const req = https.request(options, (response) => {
        let body = '';
        response.on('data', chunk => body += chunk);
        response.on('end', () => {
          try { resolve(JSON.parse(body)); }
          catch(e) { reject(new Error('Failed to parse response')); }
        });
      });
      req.on('error', reject);
      req.end();
    });

    res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message, stack: err.stack });
  }
}
