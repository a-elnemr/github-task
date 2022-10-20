import { Text } from "react-native";
import { useGetGithubByNameQuery } from "../services/github";
import ReposList from "../components/ReposList";



const Explore = () => {
    const { data, error, isLoading } = useGetGithubByNameQuery()
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

export default Explore;