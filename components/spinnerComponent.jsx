import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Spinner from 'react-native-spinkit';
import {useTheme} from '../theme/themeContext';

const LoaderComponent = () => {
  const {theme} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Spinner
        isVisible={true}
        size={60}
        type={'Bounce'}
        color={theme.loader}
      />
      <Text style={[styles.text, {color: theme.text}]}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoaderComponent;
