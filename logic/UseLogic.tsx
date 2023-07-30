import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import ReposInterface from '../interfaces/ReposInterface';
import {useSelector} from 'react-redux';

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
  let filterValue = useSelector((state: any) => state.filters.viewFilterValue);
  let [page, setPage] = useState(1);
  let [dataValue, setData] = useState<ReposInterface[]>([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);
  let [firstLoad, setFirstLoad] = useState(true);
  let [max, setMax] = useState(false);
  let [isRefreshing, setIsRefreshing] = useState(false);
  const [EndReached, setEndReached] = useState(false);

  //To handle page refresh
  function Refresh() {
    setIsRefreshing(true);
    handleReset('Full');
  }

  //Partial is after we fetch the data succesfully
  //Full is after we change the filters
  function handleReset(state: 'Full' | 'Partial') {
    if (state === 'Partial') {
      setMax(false);
      setIsRefreshing(false);
      setError(false);
      setLoading(false);
    }

    if (state === 'Full') {
      setData([]);
      setPage(0);
    }
  }

  /*Handle page change with conidtions that max is false and loading is false and error is false and data is not empty 
    as we dont want to fetch data if we have no data to fetch and we dont want to fetch data while we are in the loading state which 
    means that we are fetching data already and we dont want to fetch data if we have an error when the user is scrolling we want to handle it
     with timer.
    */
  function handlePage() {
    if (props.type === 'explore') {
      if (filterValue === dataValue.length) {
        return;
      }
    }
    if (max || loading || error || dataValue.length === 0) {
      return;
    } else {
      setPage(page + 1);
    }
  }

  function GitDataIsEmpty() {
    setMax(true);
    setLoading(false);
  }

  function FetchSuccess(dataJson: any) {
    setData(prev => [...prev, ...dataJson.items]);
    handleReset('Partial');
  }

  function FetchFailed() {
    setError(true);
    setLoading(false);
    setIsRefreshing(false);
  }

  async function FetchData() {
    try {
      setLoading(true);

      let data;
      if (props.type === 'explore') {
        data = await fetch(
          `https://api.github.com/search/repositories?q=Q&sort=stars&per_page=10&page=${page}`,
        );
      } else {
        data = await fetch(
          `https://api.github.com/search/repositories?q=created:>${DatefilterValue}+language:${LangfilterValue}&sort=stars&order=desc&per_page=10&page=${page}`,
        );
      }
      let dataJson = await data.json();
      if (dataJson.items.length === 0) {
        GitDataIsEmpty();
        return;
      }
      FetchSuccess(dataJson);
    } catch (err) {
      FetchFailed();
    }
  }

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
