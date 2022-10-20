import React from "react";

import ReposCard from "../Cards/ReposCard";

const ReposList = ({ repos }) => {
  //console.log(JSON.stringify(repos));
  //console.log(repos);
  return repos.map((repo) => <ReposCard repo={repo} key={repo.id} />);
};

export default ReposList;
