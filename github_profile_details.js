const GITHUB_API_DOMAIN = "https://api.github.com";
const gitHubUsername = process.argv[2];

if (!gitHubUsername) {
    console.error("error: please provide a GitHub username");
    process.exit(1);
}

async function fetchGitHubUserDetails() {
    const url = new URL(GITHUB_API_DOMAIN);
    const encodedUserName = encodeURIComponent(gitHubUsername);

    url.pathname = `users/${encodedUserName}`;

    try {
        const response = await fetch(url.toString(), {
            headers: {
                "User-Agent": "github_profile_details"
            }
        });
        const { ok, status, statusText } = response;

        if (status === 404) {
            console.error(`error: GitHub user not found: '${gitHubUsername}'`);
            process.exit(1);
        }

        if (!ok) {
            console.error(`error: GitHub API responded with status ${status} (${statusText})`);
            process.exit(1);
        }

        const json = await response.json();
        const {
            followers,
            html_url: profileUrl,
            name,
            login: username,
            public_repos: numOfRepos
        } = json;

        console.log(`Name: ${name ?? "N/A"}\nUsername: ${username}\nProfile: ${profileUrl}\nPublic repos: ${numOfRepos}\nFollowers: ${followers}`);
    } catch (error) {
        console.error('error:', error);
        process.exit(1);
    }
}

fetchGitHubUserDetails();