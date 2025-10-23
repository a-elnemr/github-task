import store from '../../store/store';
import { darkColors } from './dark';
import { lightColors } from './light';

export const getColors = () => {
  const theme = store.getState()?.theme?.colorScheme || 'light';
  return theme === 'dark' ? darkColors : lightColors;
};
