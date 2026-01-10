/**
 * GitHub API utilities for fetching project statistics
 *
 * Uses the GitHub REST API to fetch repository and user statistics.
 * Requires a GitHub Personal Access Token with 'repo' scope for private repos
 * or no token for public repos only.
 */

export interface GitHubRepo {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  topics: string[];
  visibility: string;
  size: number;
}

export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GitHubStats {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  topLanguages: { language: string; count: number }[];
  recentActivity: GitHubRepo[];
  error?: string;
}

const GITHUB_API_BASE = "https://api.github.com";

/**
 * Fetch GitHub statistics for a user
 */
export async function getGitHubStats(
  token?: string,
  username?: string
): Promise<GitHubStats> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Portfolio-App",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    // Fetch user info
    const userEndpoint = username
      ? `${GITHUB_API_BASE}/users/${username}`
      : `${GITHUB_API_BASE}/user`;

    const userResponse = await fetch(userEndpoint, { headers });

    if (!userResponse.ok) {
      throw new Error(`GitHub API error: ${userResponse.status}`);
    }

    const user: GitHubUser = await userResponse.json();

    // Fetch repositories
    const reposEndpoint = username
      ? `${GITHUB_API_BASE}/users/${username}/repos?per_page=100&sort=updated`
      : `${GITHUB_API_BASE}/user/repos?per_page=100&sort=updated`;

    const reposResponse = await fetch(reposEndpoint, { headers });

    if (!reposResponse.ok) {
      throw new Error(`GitHub API error: ${reposResponse.status}`);
    }

    const repos: GitHubRepo[] = await reposResponse.json();

    // Calculate statistics
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

    // Count languages
    const languageCounts: Record<string, number> = {};
    for (const repo of repos) {
      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
      }
    }

    const topLanguages = Object.entries(languageCounts)
      .map(([language, count]) => ({ language, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Get recent activity (repos updated in last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const recentActivity = repos
      .filter((repo) => new Date(repo.pushed_at) > thirtyDaysAgo)
      .slice(0, 5);

    return {
      user,
      repos,
      totalRepos: repos.length,
      totalStars,
      totalForks,
      topLanguages,
      recentActivity,
    };
  } catch (error) {
    console.error("Failed to fetch GitHub stats:", error);
    return {
      user: null,
      repos: [],
      totalRepos: 0,
      totalStars: 0,
      totalForks: 0,
      topLanguages: [],
      recentActivity: [],
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Get commit count for a repository
 */
export async function getRepoCommitCount(
  owner: string,
  repo: string,
  token?: string
): Promise<number> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Portfolio-App",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    // Get the default branch first
    const repoResponse = await fetch(
      `${GITHUB_API_BASE}/repos/${owner}/${repo}`,
      { headers }
    );

    if (!repoResponse.ok) {
      return 0;
    }

    const repoData = await repoResponse.json();
    const defaultBranch = repoData.default_branch || "main";

    // Get commit count using the contributors endpoint
    const contributorsResponse = await fetch(
      `${GITHUB_API_BASE}/repos/${owner}/${repo}/contributors?per_page=1`,
      { headers }
    );

    if (!contributorsResponse.ok) {
      return 0;
    }

    const contributors = await contributorsResponse.json();
    const totalCommits = contributors.reduce(
      (sum: number, contributor: { contributions: number }) =>
        sum + contributor.contributions,
      0
    );

    return totalCommits;
  } catch {
    return 0;
  }
}

/**
 * Get language breakdown for a repository
 */
export async function getRepoLanguages(
  owner: string,
  repo: string,
  token?: string
): Promise<Record<string, number>> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Portfolio-App",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${owner}/${repo}/languages`,
      { headers }
    );

    if (!response.ok) {
      return {};
    }

    return await response.json();
  } catch {
    return {};
  }
}
