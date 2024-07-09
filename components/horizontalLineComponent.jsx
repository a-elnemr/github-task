import React from 'react';
import {StyleSheet, View} from 'react-native';

const HorizontalLineComponent = () => {
  return <View style={styles.horizontal}></View>;
};

const styles = StyleSheet.create({
  horizontal: {
    height: 1,
    marginVertical: 10,
    backgroundColor: 'lightgrey',
  },
});
export default React.memo(HorizontalLineComponent);


