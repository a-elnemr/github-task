import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import ReposInterface from '../interfaces/ReposInterface';
import { useSelector } from 'react-redux';

type Props = {
  type:'repo'|'explore',
}

const UseLogic = (props: Props) => {

  let LangfilterValue=useSelector((state:any)=>state.filters.LanguageFilterValue)
  let DatefilterValue=useSelector((state:any)=>state.filters.DateFilterValue)
  let filterValue=useSelector((state:any)=>state.filters.viewFilterValue)
  let [page,setPage]=useState(1);
  let [dataValue,setData]=useState<ReposInterface[]>([]);
  let [loading,setLoading]=useState(false);
  let [error,setError]=useState(false);
  let [firstLoad,setFirstLoad]=useState(true);
  let [max,setMax]=useState(false);
  let [isRefreshing, setIsRefreshing] = useState(false)


  function Refresh(){
    setIsRefreshing(true)
    handleReset('Full');
  }

  function handleReset(state:'Full'|'Partial'){
    if(state==='Partial'){
      setMax(false)
      setIsRefreshing(false)
      setError(false)
      setLoading(false)
    }
  
    if(state==='Full'){
      setPage(0);
    }
  
  }
  
  function handlePage(){
    if(props.type==='explore'){
      if(filterValue===dataValue.length){
        return
      }
    }
    if(max||loading||error||dataValue.length===0){
      return
    }
    else{

      setPage(page+1)
    }
  
  }


  async function FetchData(){  
  
    try{
      setLoading(true)
  if(page===1){
    setData([])
  }
    let data;
    if(props.type==='explore'){
       data=await fetch(`https://api.github.com/search/repositories?q=Q&sort=stars&per_page=5&page=${page}`)
    }
    else{
       data=await fetch(`https://api.github.com/search/repositories?q=created:>${DatefilterValue}+language:${LangfilterValue}&sort=stars&order=desc&per_page=5&page=${page}`)
    }
    let dataJson=await data.json();
    if(dataJson.items.length===0){
      setMax(true)
      setLoading(false)
      return
    }
    if(page===1){
      setData([...dataJson.items])
    }
    else{
      setData([...dataValue,...dataJson.items])
    }
    handleReset('Partial');
    
  }catch(err){
    setError(true)
    setLoading(false)
    setIsRefreshing(false)
  }
    }
  
    useFocusEffect(
      React.useCallback(() => {
      
        if(page===0){
          setPage(1)
        }else{
          FetchData()    
        }
        return () => {
        };
      }, [page])
    );
    useFocusEffect(
      React.useCallback(() => {
        if(firstLoad){
          setFirstLoad(false)
          return;
        }
        handleReset('Full');
  
  
        return () => {
        
        };
      }, [LangfilterValue,DatefilterValue])
    );

    useFocusEffect(
      React.useCallback(() => {
        if(firstLoad){
          setFirstLoad(false)
          return;
        }
        handleReset('Full');
        return () => {
        
        };
      }, [filterValue])
    );

    
return{ page, dataValue, loading, error, firstLoad, max, isRefreshing, Refresh, handleReset, handlePage, FetchData}

}

export default UseLogic

const styles = StyleSheet.create({})