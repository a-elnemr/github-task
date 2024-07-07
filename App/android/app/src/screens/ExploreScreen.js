import React, {useEffect} from 'react';
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
import {fetchRepos, setPickerValue} from '../redux/actions/Actions';
import PickerComponent from '../components/PickerComponent';
import ExploreCard from '../components/ExploreCard';

function ExploreScreen(props) {
  const dispatch = useDispatch();
  const {allRepos, loading, error, viewedRepos, pickerValue} = useSelector(
    state => state.repos,
  );
  const darkMode = useSelector(state => state.theme.darkMode);
  const handleValueChange = value => {
    dispatch(setPickerValue(value));
  };

  useEffect(() => {
    dispatch(fetchRepos());
  }, [dispatch]);

  return (
    <View
      style={
        darkMode ? [styles.container, styles.darkContainer] : styles.container
      }>
      <ScreenTitle title="Explore Popular" />
      <PickerComponent
        pickerValue={pickerValue}
        handleValueChange={handleValueChange}
      />

      {loading ? (
        <ActivityIndicator size="large" color={colors.cyan} />
      ) : (
        <FlatList
          data={viewedRepos}
          style={styles.flatListStyle}
          renderItem={({item}) => (
            <ExploreCard
              starCount={item.stargazers_count}
              RepoTitle={item.full_name}
              RepoDescription={item.description}
              RepoUpdatedAt={item.updated_at}
              RepoLang={item.language}
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
    paddingHorizontal: 25,
    marginVertical: 20,
  },
});

export default ExploreScreen;
