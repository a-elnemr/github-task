import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import ScreenTitle from '../components/ScreenTitle';
import { useTheme } from '../hooks/useTheme';
import DropDownComponent from '../components/DropDownComponent';
import { useRepositoriesQuery } from '../hooks/useRepositoriesQuery';
import { useDebounce } from '../hooks/useDebounce';
import RepositoryCard from '../components/RepositoryCard';
import DatePickerModal from '../components/DatePickerModal';
import LanguagePickerModal from '../components/LanguagePickerModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SELECTED_DATE_KEY,
  SELECTED_PROGRAMMING_LANGUAGE_KEY,
} from '../config/constants';
import { useSelector } from 'react-redux';
import { getFilteredRepositories } from '../store/selectors';

const RepositoriesScreen = () => {
  const { colors } = useTheme();
  const [language, setLanguage] = useState('Any');
  const [date, setDate] = useState('2019-01-10');
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const filteredRepositories = useSelector(getFilteredRepositories);

  const debouncedDate = useDebounce(date, 500);
  const debouncedLanguage = useDebounce(language, 300);

  const { isLoading: loading, error } = useRepositoriesQuery(
    debouncedDate,
    debouncedLanguage === 'Any' ? undefined : debouncedLanguage,
  );

  useEffect(() => {
    const loadInitialValues = async () => {
      try {
        const selectedDate = await AsyncStorage.getItem(SELECTED_DATE_KEY);
        const selectedLanguage = await AsyncStorage.getItem(
          SELECTED_PROGRAMMING_LANGUAGE_KEY,
        );

        if (selectedDate) {
          setDate(selectedDate);
        }
        if (selectedLanguage) {
          setLanguage(selectedLanguage);
        }
      } catch (err) {
        console.error('Error loading initial values:', err);
      } finally {
        setIsInitialized(true);
      }
    };
    loadInitialValues();
  }, []);

  useEffect(() => {
    if (isInitialized) {
      const saveValues = async () => {
        try {
          await AsyncStorage.setItem(SELECTED_DATE_KEY, date);
          await AsyncStorage.setItem(
            SELECTED_PROGRAMMING_LANGUAGE_KEY,
            language,
          );
        } catch (err) {
          console.error('Error saving values:', err);
        }
      };
      saveValues();
    }
  }, [date, language, isInitialized]);

  const handleDateSelect = (selectedDate: string) => {
    setDate(selectedDate);
    setDateModalVisible(false);
  };

  const handleLanguageSelect = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    setLanguageModalVisible(false);
  };

  if (loading) {
    return (
      <View
        style={[
          styles.statusContainer,
          { backgroundColor: colors.backgroundColor },
        ]}
      >
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>
    );
  }
  if (error) {
    return (
      <View
        style={[
          styles.statusContainer,
          { backgroundColor: colors.headerBackgroundColor },
        ]}
      >
        <Text style={{ color: colors.textColorMain }}>
          {error?.message || 'An error occurred'}
        </Text>
      </View>
    );
  }
  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundColor }]}
    >
      <ScreenTitle title="Repositories" />

      <View style={styles.dropdownContainer}>
        <DropDownComponent
          title="Language :"
          value={language}
          onPress={() => {
            setLanguageModalVisible(true);
          }}
          isExpanded={languageModalVisible}
        />
        <DropDownComponent
          title="Date :"
          value={date}
          onPress={() => {
            setDateModalVisible(true);
          }}
          isExpanded={dateModalVisible}
        />
      </View>

      <FlatList
        data={filteredRepositories}
        renderItem={({ item }: { item: any }) => (
          <RepositoryCard repository={item} isFiltered />
        )}
        keyExtractor={(item: any) => item.id.toString()}
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        windowSize={10}
        initialNumToRender={10}
        updateCellsBatchingPeriod={50}
      />

      <DatePickerModal
        visible={dateModalVisible}
        onClose={() => setDateModalVisible(false)}
        onDateSelect={handleDateSelect}
        selectedDate={date}
      />

      <LanguagePickerModal
        visible={languageModalVisible}
        onClose={() => setLanguageModalVisible(false)}
        onLanguageSelect={selectedLanguage =>
          handleLanguageSelect(selectedLanguage)
        }
        selectedLanguage={language}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },
  dropdownContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 16,
  },
  statusContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
export default RepositoriesScreen;
