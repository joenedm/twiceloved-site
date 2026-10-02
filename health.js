// Simple check that Netlify Functions are running: /.netlify/functions/health
export default async () => new Response(JSON.stringify({ ok: true, site: "twiceloved" }), { headers: { "content-type": "application/json" } });
