import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import ScreenTitle from '../components/ScreenTitle';
import colors from '../config/color';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchFilteredRepos,
  fetchRepoLanguages,
  fetchRepos,
  fetchTopRepos,

  getReposLanguages,
  setReposLanguages,
} from '../redux/actions/Actions';
import RepoCard from '../components/RepoCard';
import DatePicker from '../components/DatePickerComponent';
import DatePickerComponent from '../components/DatePickerComponent';
import ModalPicker from '../components/ModalPicker';

function RepositoriesScreen(props) {
  const dispatch = useDispatch();
  const [pickedLang, setPickedLang] = useState('Any');
  const darkMode = useSelector(state => state.theme.darkMode);
  const {repoLanguages, pickedLanguage, filterdRepos, loading, error} =
    useSelector(state => state.repos);

  const handleValueChange = value => {
    setPickedLang(value);
    dispatch(fetchFilteredRepos(value));
  };

  const languagesOptions = repoLanguages.map(lang => ({

    label: lang,
    value: lang,
  }));

  // useEffect(() => {
  //   dispatch(fetchFilteredRepos());
  // }, [dispatch]);
  useEffect(() => {
    dispatch(fetchRepoLanguages());
  }, [dispatch]);

  return (
    <View
      style={
        darkMode ? [styles.container, styles.darkContainer] : styles.container
      }>
      <ScreenTitle title="Repositories" />

      {loading ? (
        <View style={styles.loadingMargin}>
          <ActivityIndicator size="large" color={colors.cyan} />
        </View>
      ) : error ? (
        <Text style={styles.loadingMargin}>Error loading data: {error}</Text>
      ) : (
        <>
          <View style={styles.outerPickersView}>
            <View style={styles.innerPickersContainer}>
              <ModalPicker
                pickerValue={pickedLang}
                handleValueChange={handleValueChange}
                label="Language:"
                allValues={languagesOptions}
              />
              <DatePickerComponent />
            </View>
          </View>

          <FlatList
            style={styles.flatListStyle}
            data={filterdRepos}
            keyExtractor={item => item.id.toString()}
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
        </>

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
  loadingMargin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default RepositoriesScreen;
