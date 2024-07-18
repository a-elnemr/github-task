import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import DropdownComponent from '../components/dropDownComponent';
import TrendingCardComponent from '../components/trendingCardComponent';
import {useTheme} from '../theme/themeContext';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchNextTrend,
  fetchPrevTrend,
  getTopRepositories,
} from '../redux/slices/repositoriesSlice';
import LoaderComponent from '../components/spinnerComponent';
import ErrorComponent from '../components/errorComponent';
import ListDropDown from '../components/list';

const ExploreScreen = () => {
  const {trendingRepos, loading, error, paginationLinks} = useSelector(
    state => state.repository,
  );
  const [check, setcheck] = useState(null);

  const dispatch = useDispatch();
  const {theme} = useTheme();

  useEffect(() => {
    dispatch(getTopRepositories('100'));
  }, [dispatch]);
  const handleNext = () => {
    if (paginationLinks.next) {
      dispatch(fetchNextTrend());
    }
  };
  const handlePrev = () => {
    if (paginationLinks.prev) {
      dispatch(fetchPrevTrend());
    }
  };

  if (loading) return <LoaderComponent></LoaderComponent>;
  if (error) return <ErrorComponent msg={error}></ErrorComponent>;
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={{marginBottom: '8%'}}>
        <Text style={[styles.headerText, {color: theme.text}]}>
          Explore Popular
        </Text>

        <ListDropDown setCheck={setcheck}></ListDropDown>
        {check && (
          <View style={{}}>
            <Text
              style={{
                fontSize: 30,
                color: theme.text3,
                textAlign: 'center',
                marginTop: '5%',
              }}>
              Top <Text style={{color: theme.text4}}>{check}</Text> repositories
            </Text>
          </View>
        )}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {trendingRepos.map((item, index) => (
          <TrendingCardComponent
            key={item.id}
            title={item.name}
            description={item.description}
            imageUrl={item.owner.avatar_url}
            language={item.language}
            watchedNumber={item.watchers_count}
            updated={item.updated_at}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 6,
  },
});

export default React.memo(ExploreScreen);
