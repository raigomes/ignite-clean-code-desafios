// Nomenclatura de variáveis

const githubCategoriesList = [
  {
    title: "User",
    followers: 5,
  },
  {
    title: "Friendly",
    followers: 50,
  },
  {
    title: "Famous",
    followers: 500,
  },
  {
    title: "Super Star",
    followers: 1000,
  },
];

export default async function getData(request, response) {
  const githubName = String(request.query.username);

  if (!githubName) {
    return response.status(400).json({
      message: `Please provide an username to search on the github API`,
    });
  }

  const responseFetch = await fetch(
    `https://api.github.com/users/${githubName}`,
  );

  if (responseFetch.status === 404) {
    return response.status(400).json({
      message: `User with username "${githubName}" not found`,
    });
  }

  const githubUserData = await responseFetch.json();

  const orderCategoriesListByFollowers = githubCategoriesList.sort(
    (previousItem, nextItem) => nextItem.followers - previousItem.followers,
  );

  const userGithubCategory = orderCategoriesListByFollowers.find(
    (category) => githubUserData.followers > category.followers,
  );

  const githubNameAndCategory = {
    github: githubName,
    category: userGithubCategory.title,
  };

  return githubNameAndCategory;
}

getData(
  {
    query: {
      username: "raigomes",
    },
  },
  {},
).then((githubNameAndCategory) => console.log(githubNameAndCategory));
