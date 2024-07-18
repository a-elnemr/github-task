import React, {useCallback} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../theme/themeContext';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {getAllRepositories} from '../redux/slices/repositoriesSlice';

const NoResultsComponent = ({navigation, resetFilters}) => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const handleBack = useCallback(() => {
    resetFilters();
    navigate('Repositories');
  }, [resetFilters, navigate]);
  const {theme} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://png.pngtree.com/png-clipart/20221228/original/pngtree-no-results-png-image_8816185.png',
        }}></Image>
      <Text style={[styles.txt, {color: theme.text}]}>No results...</Text>
      <Text
        onPress={handleBack}
        style={[styles.txt, {color: theme.textColor, fontSize: 20}]}>
        go back...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',

    aspectRatio: 1,
  },
  txt: {fontSize: 30, fontWeight: '700'},
});

export default React.memo(NoResultsComponent);
