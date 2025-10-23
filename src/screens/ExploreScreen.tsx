import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import ScreenTitle from '../components/ScreenTitle';
import RepositoryCard from '../components/RepositoryCard';
import DropDownComponent from '../components/DropDownComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VIEW_COUNT_KEY } from '../config/constants';
import { useRepositoriesQuery } from '../hooks/useRepositoriesQuery';
import { getRepositories } from '../store/selectors';
import { useSelector } from 'react-redux';

const ExploreScreen = () => {
  const { colors } = useTheme();
  const { error, isLoading } = useRepositoriesQuery();
  const repositories = useSelector(getRepositories);
  const [repositoriesCount, setRepositoriesCount] = useState(10);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const countOptions = [10, 50, 100];

  useEffect(() => {
    try {
      if (!isInitialized) {
        const getViewCount = async () => {
          const viewCount = await AsyncStorage.getItem(VIEW_COUNT_KEY);
          if (viewCount) {
            setRepositoriesCount(parseInt(viewCount, 10));
          } else {
            await AsyncStorage.setItem(
              VIEW_COUNT_KEY,
              repositoriesCount.toString(),
            );
          }
        };
        getViewCount();
      }
    } catch (err) {
      console.error('Error getting view count:', err);
    } finally {
      setIsInitialized(true);
    }
  }, [repositoriesCount, isInitialized]);

  const handleCountSelection = async (count: number) => {
    setRepositoriesCount(count);
    setIsExpanded(false);
    try {
      await AsyncStorage.setItem(VIEW_COUNT_KEY, count.toString());
    } catch (err) {
      console.error('Error saving view count:', err);
    }
  };

  if (isLoading) {
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
          { backgroundColor: colors.backgroundColor },
        ]}
      >
        <Text style={{ color: colors.textColorMain }}>{error?.message}</Text>
      </View>
    );
  }
  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundColor }]}
    >
      <ScreenTitle title="Explore Popular" />

      <View style={styles.dropdownContainer}>
        <DropDownComponent
          title="View :"
          value={repositoriesCount.toString()}
          onPress={() => setIsExpanded(!isExpanded)}
        />
        {isExpanded && (
          <View
            style={[
              styles.dropdownList,
              { backgroundColor: colors.headerBackgroundColor },
            ]}
          >
            {countOptions.map(count => (
              <TouchableOpacity
                key={count}
                style={[
                  styles.dropdownItem,
                  repositoriesCount === count && {
                    backgroundColor: colors.secondary + '20',
                  },
                ]}
                onPress={() => handleCountSelection(count)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.dropdownItemText,
                    {
                      color: colors.textColorMain,
                    },
                    repositoriesCount === count && styles.selectedItemText,
                  ]}
                >
                  {count}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      <FlatList
        data={repositories.slice(0, repositoriesCount) || []}
        renderItem={({ item }) => <RepositoryCard repository={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },
  statusContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownContainer: {
    marginLeft: 16,
    maxWidth: '30%',
    marginBottom: 16,
  },
  dropdownItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  dropdownItemText: {
    fontSize: 16,
    fontFamily: 'Silka Normal',
  },
  dropdownList: {
    position: 'absolute',
    top: '80%',
    left: 0,
    right: 0,
    borderRadius: 8,
    marginTop: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1000,
    width: '100%',
  },
  selectedItemText: {
    fontFamily: 'Silka SemiBold',
  },
});

export default ExploreScreen;
