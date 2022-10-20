import React from "react";
import { Text } from "react-native";

const RepoCard = ({repo}) =>{
    console.log(repo)
    return <></>
}

const ReposList = ( {repos} ) =>
{
    console.log(repos);
    return repos.map((repo)=><RepoCard repo={repo}/>);
}

export default ReposList;