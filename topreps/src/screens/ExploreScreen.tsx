import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colorPallete from 'src/assets/constants/colorPallete';
import DownArrow from 'src/assets/images/downArrow.svg';
import RepoTile from 'src/components/RepoTile';
import PickerModal from 'src/components/PickerModal';
import {fetchDataForExplorer} from 'src/helpers/helpers';

export const languagesChoices = [{value: 10}, {value: 50}, {value: 100}];
const ExploreScreen = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [perPage, setPerPage] = useState(10);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    try {
      fetchDataForExplorer(perPage)
        .then(response => response.json())
        .then(responseJson => {
          setRepos(responseJson.items);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, [perPage]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Explore popular</Text>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.filterCta}>
        <Text style={styles.filterTitle}>View : </Text>
        <Text style={styles.filterText}>Top {perPage}</Text>
        <DownArrow />
      </TouchableOpacity>
      <PickerModal
        modalTitle="Top Repositories"
        onChange={setPerPage}
        modalStatus={modalVisible}
        toggleModal={setModalVisible}
        choices={languagesChoices}
      />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          {repos.map((item, index) => (
            <RepoTile key={index.toString()} repo={item} />
          ))}
        </>
      )}
    </ScrollView>
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
    shadowColor: colorPallete.background,
    shadowOpacity: 0.27,
    shadowOffset: {height: 2, width: 0},
    shadowRadius: 10,
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
