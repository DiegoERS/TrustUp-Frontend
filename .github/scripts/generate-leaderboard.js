const fs = require("fs");

const REPO = process.env.GITHUB_REPOSITORY;
const TOKEN = process.env.GITHUB_TOKEN;

async function getContributors() {
  const res = await fetch(`https://api.github.com/repos/${REPO}/contributors`, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  });

  return await res.json();
}

function generateMarkdown(contributors) {
  const top = contributors.slice(0, 10);

  let md = `## 🏆 Leaderboard\n\n`;
  md += `| Rank | User | Contributions |\n`;
  md += `|------|------|--------------|\n`;

  top.forEach((c, index) => {
    const medals = ["🥇", "🥈", "🥉"];
    const rank = medals[index] || `#${index + 1}`;

    md += `| ${rank} | [@${c.login}](${c.html_url}) | ${c.contributions} |\n`;
  });

  return md;
}

async function main() {
  const contributors = await getContributors();
  const leaderboard = generateMarkdown(contributors);

  const readme = fs.readFileSync("README.md", "utf-8");

  const newReadme = readme.replace(
    /<!-- LEADERBOARD_START -->[\s\S]*<!-- LEADERBOARD_END -->/,
    `<!-- LEADERBOARD_START -->\n${leaderboard}\n<!-- LEADERBOARD_END -->`
  );

  fs.writeFileSync("README.md", newReadme);
}

main();
