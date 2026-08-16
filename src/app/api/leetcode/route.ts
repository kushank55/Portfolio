import { NextResponse } from "next/server";

const LEETCODE_USERNAME = "kushank55";

const PROFILE_QUERY = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      username
      profile {
        ranking
        reputation
      }
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
  }
`;

const CONTEST_QUERY = `
  query userContestRankingInfo($username: String!) {
    userContestRanking(username: $username) {
      attendedContestsCount
      rating
      globalRanking
      totalParticipants
      topPercentage
    }
  }
`;

async function queryLeetCode(query: string, variables: Record<string, unknown>) {
  const res = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Referer: `https://leetcode.com/${variables.username}/`,
      "User-Agent": "Mozilla/5.0 (portfolio-site)",
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`LeetCode API responded with ${res.status}`);
  }

  return res.json();
}

export async function GET() {
  try {
    const [profileData, contestData] = await Promise.all([
      queryLeetCode(PROFILE_QUERY, { username: LEETCODE_USERNAME }),
      queryLeetCode(CONTEST_QUERY, { username: LEETCODE_USERNAME }),
    ]);

    const matchedUser = profileData?.data?.matchedUser;
    const contestRanking = contestData?.data?.userContestRanking;

    if (!matchedUser) {
      return NextResponse.json({ ok: false, error: "User not found" }, { status: 404 });
    }

    const acStats: { difficulty: string; count: number }[] =
      matchedUser.submitStats?.acSubmissionNum ?? [];

    const byDifficulty = (difficulty: string) =>
      acStats.find((s) => s.difficulty === difficulty)?.count ?? 0;

    return NextResponse.json({
      ok: true,
      username: LEETCODE_USERNAME,
      ranking: matchedUser.profile?.ranking ?? null,
      totalSolved: byDifficulty("All"),
      easySolved: byDifficulty("Easy"),
      mediumSolved: byDifficulty("Medium"),
      hardSolved: byDifficulty("Hard"),
      rating: contestRanking?.rating ? Math.round(contestRanking.rating) : null,
      contestsAttended: contestRanking?.attendedContestsCount ?? null,
      topPercentage: contestRanking?.topPercentage ?? null,
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 502 }
    );
  }
}
