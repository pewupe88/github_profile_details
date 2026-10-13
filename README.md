# github_profile_details

A lightweight CLI tool built with Node.js for fetching and displaying public GitHub profile details for a given user.

## Features

- Fetches public profile details using the GitHub REST API.
- Zero external dependencies (uses native `fetch` available in modern Node.js).
- Displays:
  - Full Name
  - Username
  - Profile URL
  - Public repository count
  - Followers count
- User-friendly error handling for missing arguments, non-existent users (404), and API errors.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended for built-in `fetch` support)

## Installation

*(No additional dependencies are required.)*

## Usage

Run the script by providing a GitHub username as an argument:

```bash
node github_profile_details.js <username>
```

Or using npm:

```bash
npm start -- <username>
```

### Example

```bash
node github_profile_details.js octocat
```

**Output:**

```text
Name: The Octocat
Username: octocat
Profile: https://github.com/octocat
Public repos: 8
Followers: 24569
```

## Related links
- https://roadmap.sh/projects/nodejs-github-profile-details
