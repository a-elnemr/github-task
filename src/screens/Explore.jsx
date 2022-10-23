import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {memo, useCallback, useEffect, useState} from 'react';
import {fetchStars, lengthFilter} from '../features/topStarsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import SelectList from 'react-native-dropdown-select-list';

const Explore = () => {
  const dispatch = useDispatch();
  const {stars, error, isLoading, favourites} = useSelector(
    state => state.topStarsSlice,
  );

  const [views, setViews] = useState('');
  const view = [
    {key: '', value: 'All'},
    {key: '10', value: 'Top10'},
    {key: '20', value: 'Top20'},
    {key: '30', value: 'Top30'},
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
            <Text style={{fontSize: 12}}>Trending &nbsp; repository</Text>
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
            <Text style={styles.langText}>
              last updated {new Date(item.updated_at).getHours()} hour ago
            </Text>
            <Text style={styles.langText}>{item.language || 'C++'}</Text>
          </View>
        </View>
      </View>
    );
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      dispatch(fetchStars());
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.text}>Explore&nbsp; Popular</Text>
      <SelectList
        setSelected={setViews}
        placeholder="Views: "
        data={view}
        onSelect={() => dispatch(lengthFilter(views))}
        arrowicon={<Feather name="chevron-down" size={12} color={'black'} />}
        search={false}
        boxStyles={styles.listStyle}
        dropdownStyles={styles.dropStyle}
      />
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
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['red', 'orange']}
            />
          }
        />
      ) : (
        <Text>{error}</Text>
      )}
    </SafeAreaView>
  );
};

export default memo(Explore);

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
  listStyle: {
    marginVertical: 5,
    width: 150,
    height: 45,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  dropStyle: {
    width: 150,
  },
});
