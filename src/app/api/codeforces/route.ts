import { NextResponse } from "next/server";

const CODEFORCES_HANDLE = "kushank55";

export async function GET() {
  try {
    const res = await fetch(
      `https://codeforces.com/api/user.info?handles=${CODEFORCES_HANDLE}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      throw new Error(`Codeforces API responded with ${res.status}`);
    }

    const data = await res.json();

    if (data.status !== "OK" || !data.result?.[0]) {
      return NextResponse.json({ ok: false, error: "Handle not found" }, { status: 404 });
    }

    const user = data.result[0];

    return NextResponse.json({
      ok: true,
      handle: user.handle,
      rating: user.rating ?? null,
      maxRating: user.maxRating ?? null,
      rank: user.rank ?? null,
      maxRank: user.maxRank ?? null,
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 502 }
    );
  }
}
