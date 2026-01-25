import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "No authorization code received" });
  }

  const tokenUrl =
    `https://graph.facebook.com/v19.0/oauth/access_token?` +
    `client_id=${process.env.META_APP_ID}` +
    `&client_secret=${process.env.META_APP_SECRET}` +
    `&redirect_uri=${process.env.BASE_URL}/auth/callback` +
    `&code=${code}`;

  const response = await fetch(tokenUrl);
  const data = await response.json();

  return new NextResponse(`
    <h1>✅ Instagram Connected Successfully</h1>
    <p>Access Token received.</p>
    <pre>${JSON.stringify(data, null, 2)}</pre>
  `, {
    headers: { "Content-Type": "text/html" }
  });
}
