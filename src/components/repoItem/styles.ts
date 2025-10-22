import { StyleSheet } from 'react-native';
import { fonts } from '../../fonts';

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 16,
    marginVertical: 6,
  },
  name: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 6,
    fontFamily: fonts.italic,
  },
});

export default styles;
