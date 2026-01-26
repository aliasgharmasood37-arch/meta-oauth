import { NextResponse } from "next/server";

export async function GET() {
  const params = new URLSearchParams({
    client_id: process.env.META_APP_ID!,
    redirect_uri: `${process.env.BASE_URL}/auth/callback`,
    scope: "pages_show_list,pages_manage_metadata,instagram_basic,instagram_manage_messages",
    response_type: "code",
  });

  const url = `https://www.facebook.com/v19.0/dialog/oauth?${params.toString()}`;

  return NextResponse.redirect(url);
}
