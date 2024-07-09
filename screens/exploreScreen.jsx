import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import DropdownComponent from '../components/dropDownComponent';
import TrendingCardComponent from '../components/trendingCardComponent';
import {useTheme} from '../theme/themeContext';
import {useDispatch, useSelector} from 'react-redux';
import {getTopRepositories} from '../redux/slices/repositoriesSlice';
import LoaderComponent from '../components/spinnerComponent';
import ErrorComponent from '../components/errorComponent';

const ExploreScreen = () => {
  const {trendingRepos, loading, error} = useSelector(
    state => state.repository,
  );

  const dispatch = useDispatch();
  const {theme} = useTheme();

  useEffect(() => {
    dispatch(getTopRepositories('100'));
  }, [dispatch]);

  if (loading) return <LoaderComponent></LoaderComponent>;
  if (error) return <ErrorComponent></ErrorComponent>;
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={{marginBottom: '12%'}}>
        <Text style={[styles.headerText, {color: theme.text}]}>
          Explore Popular
        </Text>

        <DropdownComponent />
      </View>
      <ScrollView>
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
