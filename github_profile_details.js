const commandLineArgs = process.argv;
const { [2]: _username } = commandLineArgs;

if (!_username) {
    throw new Error("You did not provided any username to check");
    
}

async function fetchGitHubUserDetails() {
    const encodedUserName = encodeURIComponent(_username);
    const response = await fetch(`https://api.github.com/users/${encodedUserName}`);

    if (response.status === 200) {
        const json = await response.json();
        const {
            email,
            followers,
            html_url: profileUrl,
            name,
            login: username,
            public_repos: numOfRepos
        } = json;

        console.log(`Name: ${name}\nUsername: ${username}\nProfile: ${profileUrl}\nPublic repos: ${numOfRepos}\nFollowers: ${followers}`);
    }
}

fetchGitHubUserDetails();