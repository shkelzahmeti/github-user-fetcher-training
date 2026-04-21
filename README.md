#About

This module is used to fetch GitHub user information and repositories using the GitHub API.

#Usage

const getUserGit = require("github-user-fetcher-training");

getUserGit("kentcdodds")
.then((data) => {
console.log(data.userData);
console.log(data.reposData);
})
.catch((err) => {
console.error(err.message);
});

#What returns

{
userData: {
login: "kentcdodds",
id: 123456,
...
},

reposData: [
{ name: "repo1" },
{ name: "repo2" }
]
}

#Requirements
Node.js 18+ (uses built-in fetch)
Internet connection
