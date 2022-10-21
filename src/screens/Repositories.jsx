import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {DateFilter, fetchStars, LangFilter} from '../features/topStarsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SelectList from 'react-native-dropdown-select-list';

const Repositories = () => {
  const dispatch = useDispatch();
  const {stars, error, isLoading, favourites} = useSelector(
    state => state.topStarsSlice,
  );

  const [language, setLanguage] = useState('');
  const languages = [
    {key: '', value: 'All'},
    {key: 'HTML', value: 'HTML'},
    {key: 'C', value: 'C'},
    {key: 'C++', value: 'C++'},
    {key: 'JavaScript', value: 'JavaScript'},
    {key: 'Jupyter Notebook', value: 'Jupyter Notebook'},
    {key: 'Go', value: 'Go'},
    {key: 'Java', value: 'Java'},
    {key: 'PHP', value: 'PHP'},
    {key: 'Swift', value: 'Swift'},
    {key: 'TypeScript', value: 'TypeScript'},
    {key: 'Rust', value: 'Rust'},
    {key: 'Python', value: 'Python'},
    {key: 'Kotlin', value: 'Kotlin'},
  ];

  const [date, setDate] = useState('');
  const dates = [
    {key: '', value: 'Nothing'},
    {key: '1', value: 'last 1 hour'},
    {key: '2', value: 'last 2 hours'},
    {key: '3', value: 'last 3 hours'},
    {key: '4', value: 'last 4 hours'},
    {key: '5', value: 'last 5 hours'},
    {key: '6', value: 'last 6 hours'},
    {key: '7', value: 'last 7 hours'},
    {key: '8', value: 'last 8 hours'},
    {key: '9', value: 'last 9 hours'},
    {key: '10', value: 'last 10 hours'},
    {key: '11', value: 'last 11 hours'},
    {key: '12', value: 'last 12 hours'},
    {key: '13', value: 'last 13 hours'},
    {key: '14', value: 'last 14 hours'},
    {key: '15', value: 'last 15 hours'},
    {key: '16', value: 'last 16 hours'},
    {key: '17', value: 'last 17 hours'},
    {key: '18', value: 'last 18 hours'},
    {key: '19', value: 'last 19 hours'},
    {key: '20', value: 'last 20 hours'},
  ];

  useEffect(() => {
    dispatch(fetchStars());
  }, []);

  useEffect(() => {
    dispatch(fetchStars());
  }, [dispatch]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.listView}>
        <View style={styles.itemHeader}>
          <View style={{width: '50%'}}>
            <Text style={{fontSize: 12}}>Trending &nbsp;repository</Text>
          </View>
          <View style={styles.IconWrapper}>
            <View style={styles.IconStyle}>
              <Feather name="star" size={14} color={'green'} />
              <Text style={{fontSize: 14, marginLeft: 3}}>Star</Text>
            </View>
            <View style={styles.numWrapper}>
              <Text style={{color: 'rgba(0,100,0)', fontSize: 12}}>40.5K</Text>
            </View>
          </View>
        </View>
        <View style={styles.bodyView}>
          <Text style={styles.LangName}>📑 {item.name}</Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            optio impedit deleniti dignissimos culpa voluptatibus sed pariatur
            aspernatur suscipit volue?
          </Text>
          <Text numberOfLines={1}>
            _____________________________________________________
          </Text>
          <View style={styles.langWrapper}>
            <Text style={styles.langText}>{item.language || 'C++'}</Text>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <AntDesign name="staro" size={14} />
              <Text style={styles.langText}>{item.stargazers_count}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <AntDesign name="fork" size={14} />
              <Text style={styles.langText}>{item.forks}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.text}>Repository</Text>
      <View style={styles.selectWrapper}>
        <SelectList
          setSelected={setLanguage}
          placeholder="Language:"
          data={languages}
          onSelect={() => dispatch(LangFilter(language ?? 'C++'))}
          arrowicon={<Feather name="chevron-down" size={12} color={'black'} />}
          search={false}
          boxStyles={styles.listStyle}
        />
        <SelectList
          setSelected={setDate}
          placeholder="Date: "
          data={dates}
          onSelect={() => dispatch(DateFilter(date))}
          arrowicon={<Feather name="chevron-down" size={12} color={'black'} />}
          search={false}
          boxStyles={styles.listStyle}
        />
      </View>
      {isLoading ? (
        <View style={{flex: 1, paddingTop: 200}}>
          <ActivityIndicator size="large" color="#0f0" />
        </View>
      ) : favourites && favourites.length > 0 ? (
        <FlatList
          data={favourites}
          keyExtractor={(item, ind) => ind.toString()}
          renderItem={renderItem}
          style={styles.list}
        />
      ) : (
        <Text>{error}</Text>
      )}
    </SafeAreaView>
  );
};

export default memo(Repositories);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 5,
    marginVertical: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  list: {
    marginVertical: 5,
  },
  listView: {
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
  },
  itemHeader: {
    width: '100%',
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  IconStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  IconWrapper: {
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  numWrapper: {
    width: 45,
    padding: 5,
    backgroundColor: 'rgba(0,255,0, 0.9)',
    borderWidth: 1,
    borderColor: 'rgba(0,255,0, 0.9)',
    borderRadius: 5,
  },
  bodyView: {},
  langWrapper: {
    marginVertical: 7,
    flexDirection: 'row',
  },
  LangName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  langText: {
    marginRight: 20,
    fontWeight: 'bold',
  },
  selectWrapper: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listStyle: {
    marginVertical: 5,
    width: 150,
    height: 45,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
});
