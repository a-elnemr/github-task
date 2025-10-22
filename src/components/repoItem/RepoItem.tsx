import React from 'react';
import { TouchableOpacity, Linking, Text } from 'react-native';
import moment from 'moment';

import { Repo } from '../../types/types';
import styles from './styles';
import { useTheme } from '../../hooks/useTheme';
import { fonts } from '../../fonts';

const RepoItem: React.FC<{ repo: Repo }> = ({ repo }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(repo.html_url)}
      style={[styles.card, { backgroundColor: colors.cardBackground }]}
    >
      <Text style={[styles.name, { color: colors.textPrimary }]}>
        {repo.full_name}
      </Text>
      <Text style={{ color: colors.textPrimary, fontFamily: fonts.italic }}>
        ⭐ {repo.stargazers_count}
      </Text>
      <Text style={{ color: colors.textPrimary, fontFamily: fonts.italic }}>
        Created: {moment(repo.created_at).format('YYYY-MM-DD')}
      </Text>

      {repo.language && (
        <Text style={{ color: colors.accent, fontFamily: fonts.italic }}>
          Language: {repo.language}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export { RepoItem };
