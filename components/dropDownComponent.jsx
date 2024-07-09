// DropdownComponent.js

import React, {useCallback, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useTheme} from '../theme/themeContext';
import {useDispatch, useSelector} from 'react-redux';
import {getTopRepositories} from '../redux/slices/repositoriesSlice';

const DropdownComponent = () => {
  const [value, setValue] = useState(null);

  const dispatch = useDispatch();
  const {theme} = useTheme();
  const placeholderText = value
    ? data.find(item => item.value === value)?.label
    : 'Select view';

  const data = [
    {label: 'View: Top 10', value: '10'},
    {label: 'View: Top 50', value: '50'},
    {label: 'View: Top 100', value: '100'},
  ];

  const handleChange = useCallback(
    item => {
      setValue(item.value);

      dispatch(getTopRepositories(item.value));
    },
    [value, dispatch],
  );

  return (
    <View style={styles.container}>
      <Dropdown
        style={[
          styles.dropdown,
          {
            backgroundColor: theme.background2,
            borderWidth: 1,
            borderColor: theme.border2,
          },
        ]}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Top 100"
        placeholderStyle={{color: theme.text}}
        value={value}
        onChange={handleChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingVertical: 16,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  dropdown: {
    width: '52%',
    height: 40,

    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    fontSize: 30,
  },
});

export default React.memo(DropdownComponent);
