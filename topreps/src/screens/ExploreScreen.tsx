import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colorPallete from 'src/assets/constants/colorPallete';
import DownArrow from 'src/assets/images/downArrow.svg';
import RepoTile from 'src/components/RepoTile';

const ExploreScreen = () => {
  const data = [
    {
      title: 'novak-99/ MLPP',
      rate: '40.5k',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.',
      update: 'Updated 12 hours ago',
      language: 'C++',
    },
    {
      title: 'novak-99/ MLPP',
      rate: '40.5k',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.',
      update: 'Updated 12 hours ago',
      language: 'C++',
    },
    {
      title: 'novak-99/ MLPP',
      rate: '40.5k',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.',
      update: 'Updated 12 hours ago',
      language: 'C++',
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Explore popular</Text>
      <TouchableOpacity style={styles.filterCta}>
        <Text style={styles.filterTitle}>View: </Text>
        <Text style={styles.filterText}>Top 10</Text>
        <DownArrow />
      </TouchableOpacity>
      <FlatList data={data} renderItem={RepoTile} />
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
