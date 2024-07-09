import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RepositoriesCardComponent from '../components/repositoriesCardComponent';
import Entypo from 'react-native-vector-icons/Entypo';

import LanguageModalComponent from '../components/languageModalComponent';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useTheme} from '../theme/themeContext';
import {useDispatch, useSelector} from 'react-redux';
import {
  filterRepositoriesByDate,
  filterRepositoriesWithLanguage,
  getAllRepositories,
} from '../redux/slices/repositoriesSlice';
import LoaderComponent from '../components/spinnerComponent';
import ErrorComponent from '../components/errorComponent';
import NoResultsComponent from '../components/noResultsComponents';

const RepositoriesScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('YY/DD/MM');
  const [selectedLanguage, setSelectedLanguage] = useState('Any');

  const {theme} = useTheme();
  const dispatch = useDispatch();
  const {reposData, loading, error} = useSelector(state => state.repository);

  const data = [
    {label: 'Any', value: 'option1'},
    {label: 'Go', value: 'option2'},
    {label: 'Javascript', value: 'option3'},
    {label: 'Dockerfile', value: 'option4'},
    {label: 'Python', value: 'option5'},
    {label: 'HTML', value: 'option6'},
    {label: 'Swift', value: 'option7'},
    {label: 'Objective', value: 'option8'},
    {label: 'Java', value: 'option9'},
    {label: 'Ruby', value: 'option10'},
    {label: 'Starlark', value: 'option11'},
    {label: 'Shell', value: 'option12'},
  ];

  const toggleLanguageModal = () => {
    setModalVisible(!modalVisible);
  };

  const showDatePicker = useCallback(() => {
    setDatePickerVisibility(true);
  }, [isDatePickerVisible]);

  const hideDatePicker = useCallback(() => {
    setDatePickerVisibility(false);
  }, [isDatePickerVisible]);

  const handleConfirm = useCallback(
    date => {
      setSelectedLanguage('Any');
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate());
      const formattedDate = newDate.toISOString().split('T')[0];
      const data = dispatch(filterRepositoriesByDate(formattedDate));
      setSelectedDate(formattedDate);
      hideDatePicker();
      if (data.length === 0) {
        setSelectedDate('yy/dd/mm');
      }
    },
    [selectedDate],
  );

  const handleLanguageSelect = language => {
    setSelectedLanguage(language.label);
    toggleLanguageModal();
    dispatch(filterRepositoriesWithLanguage(language.label));
  };

  useEffect(() => {
    dispatch(getAllRepositories());
  }, [dispatch]);

  if (loading) return <LoaderComponent></LoaderComponent>;
  if (error) return <ErrorComponent></ErrorComponent>;
  if (reposData.length === 0)
    return (
      <>
        <NoResultsComponent></NoResultsComponent>
      </>
    );

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={{marginBottom: 50}}>
        <Text style={[styles.headerText, {color: theme.text}]}>
          Repositories
        </Text>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={[styles.modal, {backgroundColor: theme.background2}]}>
              <Text style={[styles.modalText, {color: theme.text}]}>
                Language: {selectedLanguage}
              </Text>
              <Entypo
                onPress={toggleLanguageModal}
                name="chevron-small-down"
                size={25}
                color={theme.text}
                style={{paddingEnd: 8}}
              />
            </View>
            <View style={[styles.modal, {backgroundColor: theme.background2}]}>
              <TextInput
                style={[styles.modalText, {color: theme.text}]}
                placeholder={`Date: ${selectedDate}`}
                onFocus={showDatePicker}
                value={`Date: ${selectedDate}`}
              />
              <TouchableOpacity onPress={showDatePicker}>
                <Entypo
                  name="chevron-small-down"
                  size={25}
                  color={theme.text}
                  style={{paddingEnd: 8}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        {reposData.map((item, index) => (
          <RepositoriesCardComponent
            key={item.id}
            downloaded={item.forks}
            stars={item.stargazers_count}
            language={item.language}
            description={item.description}
            title={item.name}
            imageUrl={item.owner.avatar_url}
          />
        ))}
      </ScrollView>

      <LanguageModalComponent
        visible={modalVisible}
        languages={data}
        onClose={toggleLanguageModal}
        onSelect={handleLanguageSelect}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
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
    marginBottom: 20,
  },
  modal: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey',
    width: '48%',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 42,
  },
  modalText: {marginHorizontal: 6},
});

export default React.memo(RepositoriesScreen);
