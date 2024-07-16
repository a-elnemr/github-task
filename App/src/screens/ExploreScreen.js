import React, {useEffect, useState} from 'react';

import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../config/color';
import ScreenTitle from '../components/ScreenTitle';
import {
  fetchRepos,
  fetchTopRepos,
  setPickerValue,
  setViewedRepo,
} from '../redux/actions/Actions';

import ExploreCard from '../components/ExploreCard';
import ModalPicker from '../components/ModalPicker';

function ExploreScreen(props) {
  const dispatch = useDispatch();

  const [pickerValue, setPickerValue] = useState(100);
  const {loading, error, viewedRepos, repoLanguages, allRepos} = useSelector(

    state => state.repos,
  );
  const darkMode = useSelector(state => state.theme.darkMode);
  const pickerOptions = [
    {label: 'Top 10', value: 10},
    {label: 'Top 50', value: 50},
    {label: 'Top 100', value: 100},
  ];

  const handleValueChange = value => {
    setPickerValue(value);
    dispatch(setViewedRepo(allRepos.slice(0, value)));
  };

  useEffect(() => {
    dispatch(fetchTopRepos());

  }, [dispatch]);

  return (
    <View
      style={
        darkMode ? [styles.container, styles.darkContainer] : styles.container
      }>
      <ScreenTitle title="Explore Popular" />
      <View>
        <View style={styles.pickerView}>
          <ModalPicker
            label="View Top:"
            allValues={pickerOptions}
            pickerValue={pickerValue}
            handleValueChange={handleValueChange}
          />
        </View>
      </View>

      {loading ? (
        <ActivityIndicator
          style={styles.loadingMargin}
          size="large"
          color={colors.cyan}
        />
      ) : viewedRepos && viewedRepos.length > 0 ? (

        <FlatList
          data={viewedRepos}
          style={styles.flatListStyle}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({item}) => (
            <ExploreCard
              key={item.id.toString()}
              starCount={item.stargazers_count}
              RepoTitle={item.full_name}
              RepoDescription={item.description}
              RepoUpdatedAt={item.updated_at}
              RepoLang={item.language}
            />
          )}
        />
      ) : (
        <Text style={styles.loadingMargin}>Error loading data: {error}</Text>

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
  loadingMargin: {
    marginVertical: 'auto',
  },
  pickerView: {
    width: '40%',
    marginLeft: 20,
  },
});

export default ExploreScreen;
