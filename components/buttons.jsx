import * as React from 'react';
import {Button} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useTheme} from '../theme/themeContext';

const FetchButton = ({title, icon, press, disabled, disabled2}) => {
  const {limit} = useSelector(state => state.repository);
  const {theme} = useTheme();
  return (
    <Button
      icon={icon}
      mode="contained-tonal"
      style={{
        backgroundColor: disabled ? '#c0c0c0' : '#00fa9a',
      }}
      labelStyle={{color: 'black'}}
      onPress={press}
      disabled={limit ? disabled2 : disabled}>
      {title}
    </Button>
  );
};

export default FetchButton;
