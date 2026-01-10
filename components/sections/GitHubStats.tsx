"use client";

import { useEffect, useState } from "react";

interface GitHubRepo {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
}

interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
}

interface Stats {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  topLanguages: { language: string; count: number; percentage: number }[];
  recentRepos: GitHubRepo[];
  loading: boolean;
  error: string | null;
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  "C++": "#f34b7d",
  C: "#555555",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Dart: "#00B4AB",
};

export default function GitHubStats() {
  const [stats, setStats] = useState<Stats>({
    user: null,
    repos: [],
    totalRepos: 0,
    totalStars: 0,
    totalForks: 0,
    topLanguages: [],
    recentRepos: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const username = "x-ordo";
        const headers: HeadersInit = {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Portfolio-App",
        };

        // Fetch user info
        const userRes = await fetch(
          `https://api.github.com/users/${username}`,
          { headers }
        );
        if (!userRes.ok) throw new Error("Failed to fetch user");
        const user: GitHubUser = await userRes.json();

        // Fetch repos
        const reposRes = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
          { headers }
        );
        if (!reposRes.ok) throw new Error("Failed to fetch repos");
        const repos: GitHubRepo[] = await reposRes.json();

        // Calculate stats
        const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
        const totalForks = repos.reduce((sum, r) => sum + r.forks_count, 0);

        // Language counts
        const langCounts: Record<string, number> = {};
        for (const repo of repos) {
          if (repo.language) {
            langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
          }
        }

        const totalLangCount = Object.values(langCounts).reduce((a, b) => a + b, 0);
        const topLanguages = Object.entries(langCounts)
          .map(([language, count]) => ({
            language,
            count,
            percentage: Math.round((count / totalLangCount) * 100),
          }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 6);

        // Recent repos (last 30 days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const recentRepos = repos
          .filter((r) => new Date(r.pushed_at) > thirtyDaysAgo)
          .slice(0, 4);

        setStats({
          user,
          repos,
          totalRepos: repos.length,
          totalStars,
          totalForks,
          topLanguages,
          recentRepos,
          loading: false,
          error: null,
        });
      } catch (err) {
        setStats((prev) => ({
          ...prev,
          loading: false,
          error: err instanceof Error ? err.message : "Failed to load",
        }));
      }
    }

    fetchStats();
  }, []);

  if (stats.loading) {
    return (
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center py-12">
            <div className="animate-pulse flex items-center gap-3">
              <div className="w-5 h-5 bg-[#00ff00] rounded-full animate-bounce" />
              <span className="text-sm font-bold text-[#5c5e62]">GitHub 통계 로딩 중...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (stats.error) {
    return null; // Silently fail
  }

  return (
    <section className="ds-section-padded bg-white border-t-2 border-black/5">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="ds-section-header">
          <span className="ds-badge">
            GitHub Activity
          </span>
          <h2 className="text-lg md:text-xl lg:text-2xl font-black text-[#171a20] keep-all mt-3">
            Open Source & Projects
          </h2>
          <p className="text-xs md:text-sm text-[#3e3e3e] font-medium keep-all mt-2">
            실시간 GitHub 활동 통계
          </p>
        </div>

        {/* Stats Grid */}
        <div className="ds-grid-4 ds-mb-component">
          {[
            { label: "Repositories", value: stats.totalRepos, icon: "📦" },
            { label: "Total Stars", value: stats.totalStars, icon: "⭐" },
            { label: "Total Forks", value: stats.totalForks, icon: "🍴" },
            { label: "Followers", value: stats.user?.followers || 0, icon: "👥" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="ds-card group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{item.icon}</span>
                <span className="text-[10px] md:text-xs font-bold text-[#5c5e62] uppercase tracking-wide">
                  {item.label}
                </span>
              </div>
              <div className="text-2xl md:text-3xl font-black text-[#171a20] group-hover:text-[#00cc00] transition-colors">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Languages & Recent Activity */}
        <div className="ds-grid-2">
          {/* Top Languages */}
          <div className="ds-card">
            <h3 className="text-sm md:text-base font-black text-[#171a20] mb-4 flex items-center gap-2">
              <span>💻</span> Top Languages
            </h3>
            <div className="space-y-3">
              {stats.topLanguages.map((lang, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: LANGUAGE_COLORS[lang.language] || "#6e7681",
                    }}
                  />
                  <span className="text-xs md:text-sm font-bold text-[#171a20] flex-1">
                    {lang.language}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-black/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${lang.percentage}%`,
                          backgroundColor: LANGUAGE_COLORS[lang.language] || "#6e7681",
                        }}
                      />
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-[#5c5e62] w-8 text-right">
                      {lang.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="ds-card">
            <h3 className="text-sm md:text-base font-black text-[#171a20] mb-4 flex items-center gap-2">
              <span>🔥</span> Recent Activity (30일)
            </h3>
            {stats.recentRepos.length > 0 ? (
              <div className="space-y-3">
                {stats.recentRepos.map((repo, idx) => (
                  <a
                    key={idx}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white rounded-lg border border-black/5 hover:border-[#00cc00] hover:shadow-[2px_2px_0_#00ff00] transition-all group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="text-xs md:text-sm font-black text-[#171a20] group-hover:text-[#00cc00] truncate transition-colors">
                          {repo.name}
                        </div>
                        {repo.description && (
                          <div className="text-[10px] md:text-xs text-[#5c5e62] truncate mt-0.5 font-medium">
                            {repo.description}
                          </div>
                        )}
                      </div>
                      {repo.language && (
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{
                              backgroundColor: LANGUAGE_COLORS[repo.language] || "#6e7681",
                            }}
                          />
                          <span className="text-[10px] font-bold text-[#5c5e62]">
                            {repo.language}
                          </span>
                        </div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-xs md:text-sm text-[#5c5e62] font-medium py-4 text-center">
                최근 30일 내 활동 없음
              </div>
            )}

            <a
              href={stats.user?.html_url || "https://github.com/x-ordo"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs font-black text-[#00cc00] hover:text-[#00aa00] transition-colors"
            >
              GitHub 프로필 보기
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
