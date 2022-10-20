import { Text } from "react-native";
import { useGetGithubByNameQuery } from "../services/github";

import ReposList from "../components/ReposList";
import repos from "../components/repos_example";

const ReposRouteTest = () =>{
    console.log(repos);
    const toRender = <ReposList repos={repos}/>;
    return toRender;

}

const ReposRoute = () => {
    const { data, error, isLoading } = useGetGithubByNameQuery("abc")
    console.log(data, error, isLoading);

    const toRender = error ? (
            <Text>Oh no, there was an error</Text>
        ) : isLoading ? (
            <Text>Loading...</Text>
        ) : data ? (
            <ReposList repos={data.items}/>
        ) : null;

    return toRender;
};

export default ReposRouteTest;