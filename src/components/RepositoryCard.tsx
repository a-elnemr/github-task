import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { GitHubRepository } from '../store/reducers/repositories';
import { useTheme } from '../hooks/useTheme';
import { StarIcon, BookmarkSquareIcon } from 'react-native-heroicons/outline';
import { formatDate, formatStarCount } from '../utils/repositoryUtils';

const RepositoryCard = memo(
  ({
    repository,
    onPress,
    isFiltered,
  }: {
    repository: GitHubRepository;
    onPress?: () => void;
    isFiltered?: boolean;
  }) => {
    const { colors } = useTheme();

    return (
      <TouchableOpacity
        style={[styles.card, { backgroundColor: colors.headerBackgroundColor }]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        {!isFiltered && (
          <View style={styles.headerRow}>
            <Text
              style={[
                styles.trendingText,
                {
                  color: colors.grayTextColors,
                },
              ]}
            >
              Trending repository
            </Text>
            <View style={styles.starContainer}>
              <StarIcon color={colors.secondary} size={16} />
              <Text style={[styles.starText, { color: colors.textColorMain }]}>
                Star
              </Text>
              <View
                style={[
                  styles.starCountButton,
                  { backgroundColor: colors.starsBackgroundColor },
                ]}
              >
                <Text
                  style={[
                    styles.starCountText,
                    { color: colors.starsTextColor },
                  ]}
                >
                  {formatStarCount(repository?.stargazers_count)}
                </Text>
              </View>
            </View>
          </View>
        )}

        <View style={styles.titleRow}>
          <BookmarkSquareIcon color={colors.secondary} size={24} />
          <Text style={[styles.repositoryName, { color: colors.primary }]}>
            {repository.full_name}
          </Text>
        </View>

        <Text
          style={[styles.description, { color: colors.textColorMain }]}
          numberOfLines={5}
        >
          {repository.description}
        </Text>

        <View
          style={[
            styles.lineSeparartor,
            { backgroundColor: 'rgba(204, 212, 221, 0.37)' },
          ]}
        />
        <View style={styles.footerRow}>
          {!isFiltered && (
            <Text
              style={[styles.footerItemText, { color: colors.textColorMain }]}
            >
              {formatDate(repository.updated_at)}
            </Text>
          )}
          <Text
            style={[styles.footerItemText, { color: colors.textColorMain }]}
          >
            {repository.language}
          </Text>

          {isFiltered && (
            <View style={styles.filteredDataContainer}>
              <View style={styles.filteredDataItem}>
                <StarIcon color={colors.secondary} size={16} />

                <Text
                  style={[
                    styles.footerItemText,
                    { color: colors.textColorMain },
                  ]}
                >
                  {repository.stargazers_count}
                </Text>
              </View>
              <View style={styles.filteredDataItem}>
                <Image
                  source={require('../../assets/images/forkImage.png')}
                  style={styles.forkImage}
                />
                <Text
                  style={[
                    styles.footerItemText,
                    { color: colors.textColorMain },
                  ]}
                >
                  {repository.forks_count}
                </Text>
              </View>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  },
);
const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageSection: {
    backgroundColor: '#1E3A8A',
    borderRadius: 8,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 80,
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  trendingText: {
    fontSize: 12,
    fontFamily: 'Silka Regular',
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  starText: {
    fontSize: 12,
    fontFamily: 'Silka Regular',
  },
  starCountButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginLeft: 8,
  },
  starCountText: {
    fontSize: 12,
    fontFamily: 'Silka Regular',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  repositoryIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  repositoryName: {
    fontSize: 18,
    fontFamily: 'Silka SemiBold',
    flex: 1,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 12,
    fontFamily: 'Silka Regular',
  },
  lineSeparartor: {
    height: 1,
    marginVertical: 12,
    marginTop: 16,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 42,
  },
  filteredDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 24,
  },
  filteredDataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  forkImage: {
    width: 10,
    height: 12,
  },

  footerItemText: {
    fontSize: 12,
    fontFamily: 'Silka Regular',
  },
});

RepositoryCard.displayName = 'RepositoryCard';

export default RepositoryCard;
