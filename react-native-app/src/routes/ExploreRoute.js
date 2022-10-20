import { Text } from "react-native";
import { useGetGithubByNameQuery } from "../services/github";

import ExploreList from "../components/ExploreList";

import repos from "../components/repos_example";

const ExploreRouteTest = () =>{
    console.log(repos);
    const toRender = <ExploreList repos={repos}/>;
    return toRender;

}

const ExploreRoute = () => {
    const { data, error, isLoading } = useGetGithubByNameQuery()
    console.log(data, error, isLoading);

    const toRender = error ? (
            <Text>Oh no, there was an error</Text>
        ) : isLoading ? (
            <Text>Loading...</Text>
        ) : data ? (
            <ExploreList repos={data.items}/>
        ) : null;

    return toRender;
};

export default ExploreRouteTest;