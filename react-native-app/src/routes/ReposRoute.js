/*

import { Text } from "react-native";
import { useGetGithubByNameQuery } from "../services/github";

import ReposList from "../components/ReposList";
import repos from "../components/repos_example";
const ReposRoute = () => {
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

export default ReposRoute;



*/

import React from "react";
import { Text, View } from "react-native";
import { useGetGithubByNameQuery } from "../services/github";
import { Button, Paragraph, Dialog, Portal } from "react-native-paper";
import ReposList from "../components/ReposList";

import { List, Divider } from "react-native-paper";

const languages = [
  "Any",
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "C",
  "C#",
  "Go",
  "Swift",
  "TypeScript",
  "Rust",
  "Kotlin",
  "CPython",
  "Julia",
  "Ruby",
  "CoffeeScript",
  "Elixir",
  "PHP",
  "Objective-C",
  "R",
  "Matlab",
  "Scala",
  "Dart",
  "Lua",
  "Bash",
];

// https://github.com/collections/programming-languages

const LanguageList = ({ language, setLanguage }) => {
  return (
    <>
      <List.Item
        title="Python"
        onPress={() => {
          setLanguage(10);
          hideDialog();
        }}
      />
      <Divider />
    </>
  );
};

const ReposRoute = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const [language, setLanguage] = React.useState("Any");

  const { data, error, isFetching } = useGetGithubByNameQuery();
  console.log(data, error, isFetching);

  const toRender = error ? (
    <Text>Oh no, there was an error</Text>
  ) : isFetching ? (
    <Text>Loading...</Text>
  ) : data ? (
    <ReposList repos={data.items} />
  ) : null;

  return (
    <View>
      <View>
        <Button onPress={showDialog}>Language: {language}</Button>

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <List.Item
              title="Python"
              onPress={() => {
                setLanguage(10);
                hideDialog();
              }}
            />
            <Divider />
          </Dialog>
        </Portal>
      </View>
      {toRender}
    </View>
  );
};

export default ReposRoute;
