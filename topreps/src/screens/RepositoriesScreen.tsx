import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colorPallete from 'src/assets/constants/colorPallete';
import DownArrow from 'src/assets/images/downArrow.svg';
import DatePickerModal from 'src/components/DatePickerModal';
import moment from 'moment';
import PickerModal from 'src/components/PickerModal';
import RepsRepoTile from 'src/components/RepsRepoTile';

const RepositoriesScreen = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(
    moment().subtract(1, 'days').format(),
  );
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [langModalVisible, setLangModalVisible] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState('');
  const languageChoices = [
    {value: 'Any'},
    {value: 'C++'},
    {value: 'Java'},
    {value: 'JavaScript'},
    {value: 'HTML'},
    {value: 'Python'},
    {value: 'Unknown Languages'},
    {value: 'PHP'},
  ];
  useEffect(() => {
    const url =
      'https://api.github.com/search/repositories?q=created:%3E' +
      moment(selectedDate).toISOString() +
      `${
        selectedLanguages == 'Unknown Languages' || selectedLanguages == 'Any'
          ? ''
          : '+language:' +
            selectedLanguages +
            '&sort=stars&order=desc&per_page=10'
      }`;
    console.log(url);

    try {
      fetch(url)
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);

          setRepos(responseJson.items);
          setLoading(false);
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, [selectedDate, selectedLanguages]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Repositories</Text>
      <View style={styles.ctaContainer}>
        <TouchableOpacity
          onPress={() => setLangModalVisible(true)}
          style={[styles.filterCta, {width: '53%'}]}>
          <Text style={styles.filterTitle}>Language : </Text>
          <Text style={styles.filterText}>{selectedLanguages}</Text>
          <DownArrow />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setDateModalVisible(true)}
          style={styles.filterCta}>
          <Text style={styles.filterTitle}>Date : </Text>
          <Text style={styles.filterText}>
            {moment(selectedDate).format('DD MMM YY')}
          </Text>
          <DownArrow />
        </TouchableOpacity>
      </View>
      <PickerModal
        modalTitle="Select Language"
        onChange={setSelectedLanguages}
        modalStatus={langModalVisible}
        toggleModal={setLangModalVisible}
        choices={languageChoices}
      />
      <DatePickerModal
        modalTitle="Select Date"
        onChange={setSelectedDate}
        modalStatus={dateModalVisible}
        toggleModal={setDateModalVisible}
      />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          {repos.map((item, index) => (
            <RepsRepoTile key={index.toString()} repo={item} />
          ))}
        </>
      )}
    </ScrollView>
  );
};

export default RepositoriesScreen;

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
  ctaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterCta: {
    backgroundColor: colorPallete.white,
    height: 40,
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
    marginRight: 5,
    textAlign: 'center',
  },
});
