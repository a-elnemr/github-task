import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import colorPallete from 'src/assets/constants/colorPallete';
import DownArrow from 'src/assets/images/downArrow.svg';
import RepoTile from 'src/components/RepoTile';

const ExploreScreen = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const getReps = () => {
    try {
      fetch(
        'https://api.github.com/search/repositories?q=created:%3E2019-01-10&sort=stars&order=desc&per_page=10',
      )
        .then(response => response.json())
        .then(responseJson => {
          setRepos(responseJson.items);
          setLoading(false);
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Explore popular</Text>
      <TouchableOpacity onPress={() => getReps()} style={styles.filterCta}>
        <Text style={styles.filterTitle}>View: </Text>
        <Text style={styles.filterText}>Top 10</Text>
        <DownArrow />
      </TouchableOpacity>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList data={repos} renderItem={RepoTile} />
      )}
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    backgroundColor: colorPallete.pageBackground,
    flex: 1,
  },
  pageTitle: {
    marginTop: 32,
    marginBottom: 25,
    fontFamily: 'Silka-Regular',
    fontSize: 20,
  },
  filterCta: {
    backgroundColor: colorPallete.white,
    height: 40,
    width: 150,
    borderRadius: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 13,
    paddingRight: 21,
    marginBottom: 14,
  },
  filterTitle: {
    color: colorPallete.darkBackGround,
    fontFamily: 'Silka-Regular',
    fontSize: 14,
  },
  filterText: {
    fontFamily: 'Silka-Regular',
    fontSize: 14,
  },
});
