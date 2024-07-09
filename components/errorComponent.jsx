import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../theme/themeContext';
import {color} from 'react-native-elements/dist/helpers';

const ErrorComponent = () => {
  const {theme} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://static.vecteezy.com/system/resources/thumbnails/028/149/207/small_2x/3d-warning-or-danger-risk-message-alert-problem-icon-png.png',
        }}></Image>
      <Text style={[styles.txt, {color: theme.text}]}>Please try again...</Text>
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
    height: 340,
  },
  txt: {fontSize: 30, fontWeight: '700'},
});

export default React.memo(ErrorComponent);
