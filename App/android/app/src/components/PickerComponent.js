import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import colors from '../config/color';
import {useSelector} from 'react-redux';

function PickerComponent({pickerValue, handleValueChange}) {
  const darkMode = useSelector(state => state.theme.darkMode);
  return (
    <View
      style={
        darkMode
          ? [styles.lightPickerContainer, styles.darkPickerContainer]
          : styles.lightPickerContainer
      }>
      <Text
        style={
          darkMode
            ? [styles.lightViewText, styles.darkViewText]
            : styles.lightViewText
        }>
        View:
      </Text>
      <Picker
        selectedValue={pickerValue}
        onValueChange={handleValueChange}
        style={
          darkMode
            ? [styles.lightPicker, styles.darkPicker]
            : styles.lightPicker
        }
        dropdownIconColor={darkMode ? colors.white : colors.black}>
        <Picker.Item
          style={darkMode ? styles.darkPickerItem : styles.lightPickerItem}
          label="Top 10"
          value={10}
        />
        <Picker.Item
          style={darkMode ? styles.darkPickerItem : styles.lightPickerItem}
          label="Top 50"
          value={50}
        />
        <Picker.Item
          style={darkMode ? styles.darkPickerItem : styles.lightPickerItem}
          label="Top 100"
          value={100}
        />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  lightPickerContainer: {
    height: 45,
    overflow: 'hidden',
    width: '54%',
    marginLeft: 25,
    borderRadius: 9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  darkPickerContainer: {
    backgroundColor: colors.dark,
  },
  lightPickerItem: {
    fontSize: 12,

    color: 'black',
  },
  darkPickerItem: {
    fontSize: 12,
    color: colors.black,
  },
  lightPicker: {
    flex: 3,
    color: 'black',
  },
  darkPicker: {
    color: colors.white,
  },
  lightViewText: {
    flex: 1,
    marginLeft: 11,
    color: colors.grey,
    fontFamily: 'Silka Regular',
    fontSize: 13,
  },
  darkViewText: {
    color: colors.white,
  },
});

export default PickerComponent;
