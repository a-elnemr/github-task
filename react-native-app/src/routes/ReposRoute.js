import DatePicker from "react-native-modern-datepicker";

import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { useGetGithubByNameQuery } from "../services/github";
import { Button, Paragraph, Dialog, Portal } from "react-native-paper";
import ReposList from "../components/ReposList";

import { List, Divider } from "react-native-paper";
import { lang } from "moment";

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

const LanguageListItem = ({ language, setLanguage, hideDialog }) => {
  return (
    <>
      <List.Item
        title={language}
        onPress={() => {
          setLanguage(language);
          hideDialog();
        }}
      />
    </>
  );
};

const ReposRoute = () => {
  const [visible, setVisible] = React.useState(false);
  const [datePickerVisible, setDatePickerVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const showDatePicker = () => setDatePickerVisible(true);
  const hideDatePicker = () => setDatePickerVisible(false);

  const [language, setLanguage] = React.useState("Any");

  const queryObject = { language };

  const { data, error, isFetching } = useGetGithubByNameQuery(queryObject);

  //console.log(`Language is ${language}`);
  const [selectedDate, setSelectedDate] = React.useState("");

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
        <Button onPress={showDatePicker}>Date: {selectedDate}</Button>

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <SafeAreaView>
              <ScrollView>
                {languages.map((lang) => (
                  <LanguageListItem
                    language={lang}
                    hideDialog={hideDialog}
                    setLanguage={setLanguage}
                    key={lang}
                  />
                ))}
                <Divider />
              </ScrollView>
            </SafeAreaView>
          </Dialog>
        </Portal>

        <Portal>
          <Dialog visible={datePickerVisible} onDismiss={hideDatePicker}>
            <SafeAreaView>
              <ScrollView>
                <DatePicker
                  onSelectedChange={(date) => setSelectedDate(date)}
                />
              </ScrollView>
            </SafeAreaView>
          </Dialog>
        </Portal>
      </View>

      {toRender}
    </View>
  );
};

//        <DatePicker onSelectedChange={(date) => setSelectedDate(date)} />

export default ReposRoute;
