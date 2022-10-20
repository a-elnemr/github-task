import { Text } from "react-native";
import { useGetGithubByNameQuery } from "../services/github";


const Explore = () => {
    const { data, error, isLoading } = useGetGithubByNameQuery()
    console.log(data, error, isLoading);
    

    return (<Text>Explore</Text>)
};

export default Explore;