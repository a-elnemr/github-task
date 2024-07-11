import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, FlatList} from 'react-native';
import ScreenTitle from '../components/ScreenTitle';
import colors from '../config/color';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchRepos,
  getReposLanguages,
  setReposLanguages,
} from '../redux/actions/Actions';
import RepoCard from '../components/RepoCard';
import DatePicker from '../components/DatePickerComponent';
import DatePickerComponent from '../components/DatePickerComponent';
import ModalPicker from '../components/ModalPicker';

function RepositoriesScreen(props) {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.theme.darkMode);
  const {repoLanguages, pickedLanguage, filterdRepos} = useSelector(
    state => state.repos,
  );

  const handleValueChange = value => {
    dispatch(setReposLanguages(value));
  };

  const uniqueLanguages = [repoLanguages[0]];
  repoLanguages.forEach(element => {
    if (!uniqueLanguages.includes(element)) {
      uniqueLanguages.push(element);
    }
  });

  const languagesOptions = uniqueLanguages.map(lang => ({
    label: lang,
    value: lang,
  }));

  useEffect(() => {
    dispatch(fetchRepos());
  }, [dispatch]);

  return (
    <View
      style={
        darkMode ? [styles.container, styles.darkContainer] : styles.container
      }>
      <ScreenTitle title="Repositories" />

      <View style={styles.outerPickersView}>
        <View style={styles.innerPickersContainer}>
          <ModalPicker
            pickerValue={pickedLanguage}
            handleValueChange={handleValueChange}
            label="Language:"
            allValues={languagesOptions}
          />
          <DatePickerComponent />
        </View>
      </View>
      {filterdRepos.length === 0 ? (
        <Text style={styles.emptyMessage}>
          No repositories created at this date.
        </Text>
      ) : (
        <FlatList
          style={styles.flatListStyle}
          data={filterdRepos}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({item}) => (
            <RepoCard
              key={item.id.toString()}
              RepoTitle={item.full_name}
              RepoDescription={item.description}
              RepoLang={item.language}
              starCount={item.stargazers_count}
              forkCount={item.forks_count}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  darkContainer: {
    backgroundColor: colors.darker,
  },

  flatListStyle: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  outerPickersView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerPickersContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  languagePicker: {
    flex: 1,
  },
  emptyMessage: {
    marginHorizontal: 'auto',
    marginVertical: 'auto',
  },
});

export default RepositoriesScreen;
