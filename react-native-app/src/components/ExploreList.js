import React from "react";

import ExploreCard from "../Cards/ExploreCard";

const ExploreList = ( {repos} ) =>
{
  console.log (JSON.stringify(repos));
    console.log(repos);
    return repos.map((repo)=><ExploreCard repo={repo} key={repo.id}/>);
}

export default ExploreList;