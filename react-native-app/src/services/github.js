// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  endpoints: (builder) => ({
    getGithubByName: builder.query({
      query: ({ per_page = 30, language = "Any", date = null } = {}) => {
        console.log("Passed parameters", per_page, language, date);
        const languageString =
          language !== "Any" ? ` language:${language}` : "";
        const dateString = date !== null ? ` created:>${date}` : "";
        let q = `is:public${languageString}${dateString}`;
        const queryParemeters = { per_page, q };
        const searchParementers = new URLSearchParams(queryParemeters);
        const searchParemetersString = searchParementers.toString();
        console.log(`searchParemetersString: ${searchParemetersString}`);
        return `search/repositories?${searchParemetersString}`; // TODO: handle with details
      },
    }),
  }),
});

//q=created:>2019-01-10&sort=stars&order=desc

// https://docs.github.com/en/rest/search#search-repositories
// https://github.com/collections/programming-languages
console.log(githubApi);

export const { useGetGithubByNameQuery } = githubApi;
