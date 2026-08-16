import { NextResponse } from "next/server";

const GITHUB_USERNAME = "kushank55";

type Repo = {
  name: string;
  fork: boolean;
  languages_url: string;
};

export async function GET() {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "User-Agent": "portfolio-site",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const reposRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
      { headers, next: { revalidate: 3600 } }
    );

    if (!reposRes.ok) {
      throw new Error(`GitHub API responded with ${reposRes.status}`);
    }

    const repos: Repo[] = await reposRes.json();
    const ownRepos = repos.filter((r) => !r.fork);

    const languageTotals: Record<string, number> = {};

    await Promise.all(
      ownRepos.map(async (repo) => {
        try {
          const langRes = await fetch(repo.languages_url, {
            headers,
            next: { revalidate: 3600 },
          });
          if (!langRes.ok) return;
          const langs: Record<string, number> = await langRes.json();
          for (const [lang, bytes] of Object.entries(langs)) {
            languageTotals[lang] = (languageTotals[lang] ?? 0) + bytes;
          }
        } catch {
          // ignore individual repo failures
        }
      })
    );

    const totalBytes = Object.values(languageTotals).reduce((a, b) => a + b, 0);

    const languages = Object.entries(languageTotals)
      .map(([name, bytes]) => ({
        name,
        percentage: totalBytes > 0 ? Math.round((bytes / totalBytes) * 1000) / 10 : 0,
      }))
      .sort((a, b) => b.percentage - a.percentage);

    return NextResponse.json({
      ok: true,
      repoCount: ownRepos.length,
      languages,
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 502 }
    );
  }
}
