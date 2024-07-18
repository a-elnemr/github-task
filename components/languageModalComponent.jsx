import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTheme} from '../theme/themeContext';

const LanguageModalComponent = ({visible, onClose, languages, onSelect}) => {
  const [searchText, setSearchText] = useState('');
  const [filteredLanguages, setFilteredLanguages] = useState(languages);

  useEffect(() => {
    setFilteredLanguages(languages);
  }, [languages]);

  const handleSearch = text => {
    setSearchText(text);
    if (text) {
      const filtered = languages.filter(language =>
        language.label.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredLanguages(filtered);
    } else {
      setFilteredLanguages(languages);
    }
  };

  const renderLanguageItem = ({item}) => (
    <TouchableOpacity
      style={styles.languageItem}
      onPress={() => onSelect(item)}>
      <Text style={[styles.languageText, {color: theme.text}]}>
        {item.label}
      </Text>
      <View style={styles.separator} />
    </TouchableOpacity>
  );
  const {theme} = useTheme();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={[styles.modalView, {backgroundColor: theme.background2}]}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <AntDesign name="close" size={24} color={theme.text} />
          </TouchableOpacity>
          <Text style={[styles.title, {color: theme.text}]}>
            Select language
          </Text>
          <View style={styles.searchBarContainer}>
            <TextInput
              style={styles.searchBar}
              placeholder="Filter language..."
              placeholderTextColor={theme.text}
              value={searchText}
              onChangeText={handleSearch}
            />
            <AntDesign name="search1" size={30} color={theme.text} />
          </View>
          <FlatList
            data={filteredLanguages}
            renderItem={renderLanguageItem}
            keyExtractor={item => item.value}
            style={{maxHeight: 350, width: '100%'}}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  languageItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '6%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    position: 'relative',
  },
  languageText: {
    fontSize: 18,
    flex: 1,
  },
  separator: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
  },
});

export default React.memo(LanguageModalComponent);
