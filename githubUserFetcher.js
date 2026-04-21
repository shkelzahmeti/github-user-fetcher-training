const USER_URL = `https://api.github.com/users`;

const getUserGit = async (user) => {
  try {
    // `Promise.all` waits for all promises to finish,
    // or fails if one fails. Returns an array of promises
    const responses = await Promise.all([
      fetch(`${USER_URL}/${user}`),
      fetch(`${USER_URL}/${user}/repos`),
    ]);
    const [responseUser, responseRepos] = responses;

    if (!responseUser.ok)
      throw new Error(
        `User request failed. Status error: ${responseUser.status}`,
      );
    if (!responseRepos.ok)
      throw new Error(
        `Repos request failed. Status error: ${responseRepos.status}`,
      );

    const userData = await responseUser.json();
    const reposData = await responseRepos.json();
    return { userData, reposData };
  } catch (err) {
    console.log("Error while fetching data:", err.message);
    throw err;
  }
};

// getUserGit("kentcdodds").then((data) => console.log(data));

module.exports = getUserGit;
