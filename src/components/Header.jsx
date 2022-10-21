import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const HeaderComp = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>🌍 Milango</Text>
      <Feather name="search" style={styles.iconStyle} />
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingVertical: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 40,
  },
  iconStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
});
