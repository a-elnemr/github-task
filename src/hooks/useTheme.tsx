import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { darkTheme, lightTheme } from '../theme/theme';

export const useTheme = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return theme === 'light' ? lightTheme : darkTheme;
};
