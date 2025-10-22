import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { FilterItem, Loader, RepoItem } from '../../components';
import { useFetchRepos } from '../../hooks/useFetchRepos';
import { useTheme } from '../../hooks/useTheme';
import { RootState } from '../../redux/reducers';
import { setTop, setLanguage } from '../../redux/actions/action';
import { languageOptions, topOptions } from '../../constants';
import { fonts } from '../../fonts';

const Repos = () => {
  const dispatch = useDispatch();
  const { top, language } = useSelector((state: RootState) => state.app);
  const { data, isLoading, error } = useFetchRepos();
  const { colors } = useTheme();
  const themeMode = useSelector((state: RootState) => state.theme.theme);
  const isLight = themeMode === 'light';

  if (isLoading) return <Loader />;
  if (error) return <Loader />;

  const baseTextColor = isLight ? '#000000' : '#ffffff';

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.filterSection}>
        <Text style={[styles.label, { color: baseTextColor }]}>Show top:</Text>
        <FlatList
          data={topOptions}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.toString()}
          contentContainerStyle={styles.buttonRow}
          renderItem={({ item: value }) => (
            <FilterItem
              label={`Top ${value}`}
              isActive={top === value}
              onPress={() => dispatch(setTop(value))}
              baseTextColor={baseTextColor}
            />
          )}
        />
      </View>

      <View style={styles.filterSection}>
        <Text style={[styles.label, { color: baseTextColor }]}>Language:</Text>

        <FlatList
          data={languageOptions}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item}
          contentContainerStyle={styles.buttonRow}
          renderItem={({ item: lang }) => (
            <FilterItem
              key={lang}
              label={lang}
              isActive={language === lang}
              onPress={() => dispatch(setLanguage(lang))}
              baseTextColor={baseTextColor}
            />
          )}
        />
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => <RepoItem repo={item} />}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  filterSection: { marginBottom: 16 },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    fontFamily: fonts.bold,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});

export { Repos };
