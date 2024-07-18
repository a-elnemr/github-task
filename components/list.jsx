import {useContext, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {useDispatch} from 'react-redux';
import {getTopRepositories} from '../redux/slices/repositoriesSlice';
import {useTheme} from '../theme/themeContext';
import {View} from 'react-native';
import {color} from 'react-native-elements/dist/helpers';

function ListDropDown({setCheck}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'View: Top 10', value: '10'},
    {label: 'View: Top 50', value: '50'},
    {label: 'View: Top 100', value: '100'},
  ]);

  const dispatch = useDispatch();
  const {theme} = useTheme();
  const handleChange = value => {
    setValue(value);
    setCheck(value);
    dispatch(getTopRepositories(value));
  };

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      containerStyle={{width: '52%'}}
      onChangeValue={handleChange}
      placeholder="View Top Repos"
      scrollViewProps={{
        showsHorizontalScrollIndicator: false,
        scrollIndicatorInsets: false,
        showsVerticalScrollIndicator: false,
      }}
    />
  );
}
export default ListDropDown;
