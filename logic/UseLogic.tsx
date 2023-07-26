import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import ReposInterface from '../interfaces/ReposInterface';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchCardsData,
  resetCardStateAction,
  setDataAction,
  setErrorAction,
  setLoadingAction,
  setMaxAction,
  setRefreshingAction,
} from '../redux/Cards/CardsActions';

type Props = {
  type: 'repo' | 'explore';
};

const UseLogic = (props: Props) => {
  let LangfilterValue = useSelector(
    (state: any) => state.filters.LanguageFilterValue,
  );
  let DatefilterValue = useSelector(
    (state: any) => state.filters.DateFilterValue,
  );
  let dataValue = useSelector((state: any) => state.cards.data);
  let loading = useSelector((state: any) => state.cards.loading);
  let error = useSelector((state: any) => state.cards.error);
  let isRefreshing = useSelector((state: any) => state.cards.refreshing);
  let max = useSelector((state: any) => state.cards.max);

  let filterValue = useSelector((state: any) => state.filters.viewFilterValue);
  let [page, setPage] = useState(1);
  let [firstLoad, setFirstLoad] = useState(true);
  const [EndReached, setEndReached] = useState(false);

  const dispatch = useDispatch();

  //To handle page refresh
  function Refresh() {
    dispatch(setRefreshingAction(true));
    handleReset('Full');
  }

  //Partial is after we fetch the data succesfully
  //Full is after we change the filters
  function handleReset(state: 'Full' | 'Partial') {
    if (state === 'Partial') {
      dispatch(setMaxAction(false));
      dispatch(setRefreshingAction(true));
      dispatch(setErrorAction(false));
      dispatch(setLoadingAction(false));
    }

    if (state === 'Full') {
      dispatch(setDataAction([]));
      setPage(0);
    }
  }

  /*Handle page change with conidtions that max is false and loading is false and error is false and data is not empty 
    as we dont want to fetch data if we have no data to fetch and we dont want to fetch data while we are in the loading state which 
    means that we are fetching data already and we dont want to fetch data if we have an error when the user is scrolling we want to handle it
     with timer.
    */
  function handlePage() {
    console.log('I AM HANDLING PAGE');
    if (props.type === 'explore') {
      if (filterValue === dataValue.length) {
        return;
      }
    }
    if (max || loading || error || dataValue.length === 0) {
      console.log('//////////////////////////');
      console.log(max);
      console.log(loading);
      console.log(error);
      console.log(dataValue.length);
      console.log('//////////////////////////');

      return;
    } else {
      console.log(
        'PAGE WILL BE INCREASED FROM ' + page + ' TO ' + (page + 1) + '',
      );
      setPage(page + 1);
    }
  }

  function FetchData() {
    console.log('I AM FETCHINGGGGGGGGG');
    if (props.type === 'explore') {
      dispatch(
        //@ts-ignore
        fetchCardsData(
          `https://api.github.com/search/repositories?q=Q&sort=stars&per_page=10&page=${page}`,
        ),
      );
    } else {
      dispatch(
        //@ts-ignore
        fetchCardsData(
          `https://api.github.com/search/repositories?q=created:>${DatefilterValue}+language:${LangfilterValue}&sort=stars&order=desc&per_page=10&page=${page}`,
        ),
      );
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        console.log(' cleaning up');
        dispatch(resetCardStateAction());
      };
    }, []),
  );

  useFocusEffect(
    React.useCallback(() => {
      if (page === 0) {
        setPage(1);
      } else {
        FetchData();
      }
      return () => {};
    }, [page]),
  );
  useFocusEffect(
    React.useCallback(() => {
      if (firstLoad) {
        setFirstLoad(false);
        return;
      }
      handleReset('Full');

      return () => {};
    }, [LangfilterValue, DatefilterValue]),
  );

  useFocusEffect(
    React.useCallback(() => {
      if (firstLoad) {
        setFirstLoad(false);
        return;
      }
      handleReset('Full');
      return () => {};
    }, [filterValue]),
  );

  return {
    page,
    dataValue,
    loading,
    error,
    firstLoad,
    max,
    isRefreshing,
    Refresh,
    handleReset,
    handlePage,
    FetchData,
    EndReached,
    setEndReached,
  };
};

export default UseLogic;

const styles = StyleSheet.create({});
