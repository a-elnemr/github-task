const fetchDataForExplorer = async (perPage: number) => {
  const response = await fetch(
    'https://api.github.com/search/repositories?q=created:%3E2019-01-10&sort=stars&order=desc&per_page=' +
      perPage,
  );
  return response;
};

export {fetchDataForExplorer};
