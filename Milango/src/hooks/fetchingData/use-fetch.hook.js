import axios from "axios"

export const useFetch = async () => {
    const { data } = await axios.get('https://api.github.com/search/repositories?q=created:%3E2019-01-10&sort=stars&order=desc')
    return data
}