import { useSelector } from 'react-redux';
import { getColorScheme } from '../store/selectors';
import { darkColors } from '../config/colors/dark';
import { lightColors } from '../config/colors/light';

export const useTheme = () => {
  const colorScheme = useSelector(getColorScheme);
  const colors = colorScheme === 'dark' ? darkColors : lightColors;

  return {
    colorScheme,
    colors,
    isDark: colorScheme === 'dark',
  };
};
