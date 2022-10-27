const fetchDataForExplorer = (perPage: number): Promise<boolean | string> =>
  new Promise((resolve, reject) => {
    return fetch(
      'https://api.github.com/search/repositories?q=created:%3E2019-01-10&sort=stars&order=desc&per_page=' +
        perPage,
    )
      .then((data: any) => data.json())
      .then((dataJson: any) => resolve(dataJson))
      .catch((err: any) => reject(err));
  });
export {fetchDataForExplorer};
