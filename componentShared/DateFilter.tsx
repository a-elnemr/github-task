import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
import ModalHeader from './ModalHeader';
import {Calendar} from 'react-native-calendars';
import { useDispatch } from 'react-redux';
import { filterSlice } from '../store/filterSlice';
import { useSelector } from 'react-redux';
import { stylesGlobal } from '../assets/StyleSheet';

type Props = {
  Visible:boolean
  setVisible:React.Dispatch<React.SetStateAction<boolean>>
}

const DateFilter = (props: Props) => {
  let dispatch=useDispatch();
  let colorSchema=useColorScheme();
  let DateFilterValue=useSelector((state:any)=>state.filters.DateFilterValue)

  const [selected, setSelected] = useState('');
function toMonth(month:number){
  if(month==1){
    return "Jan"
  }
  else if(month==2){
    return "Feb"
  }
  else if(month==3){
    return "Mar"
  }
  else if(month==4){
    return "Apr"
  }
  else if(month==5){
    return "May"
  }
  else if(month==6){
    return "Jun"
  }
  else if(month==7){
    return "Jul"
  }
  else if(month==8){
    return "Aug"
  }
  else if(month==9){
    return "Sep"
  }
  else if(month==10){
    return "Oct"
  }
  else if(month==11){
    return "Nov"
  }
  else if(month==12){
    return "Dec"
  }
}


  function setDate(day:{dateString:string, day:number, month:number, year:number}){
    let dayString=day.day.toString();
    let monthString=toMonth(day.month);
    let yearString=day.year.toString();
    if(day.year>=2000){
      yearString=yearString[2]+yearString[3];
    }

  let label=dayString+" "+monthString+" "+yearString;
    dispatch(filterSlice.actions.setDateFilter({label:label,value:day.dateString}))
  
  }
    

  return (
    <Modal isVisible={props.Visible}>
      <View style={colorSchema==='light'?[styles.MainCont,stylesGlobal.whites]:[styles.MainCont,stylesGlobal.Darkwhites]}>
      <ModalHeader type='Date' setVisible={props.setVisible}></ModalHeader>
      <Calendar
    
      date={DateFilterValue}
      current={DateFilterValue}
      key={DateFilterValue}
      maxDate={new Date().toISOString().split('T')[0]}
      onDayPress={day => {
        setDate(day);
        props.setVisible(false);
      }}
      markedDates={{
        //@ts-ignore
        [DateFilterValue]: {selected: true, disableTouchEvent: true,selectedTextColor:'#68DDBA',selectedColor:'rgba(104, 221, 186, 0.25)',}
      }}

      theme={{
        selectedDayTextColor:'#68DDBA',
        calendarBackground: colorSchema==='light'?'white':'#161B21',
        arrowColor:'#2B1190',
        arrowStyle:{
          paddingVertical:10,
        
        }

      }}

    />
  
      </View>
    </Modal>
  )
}

export default DateFilter

const styles = StyleSheet.create({
  MainCont:{
    height:500,
    borderRadius:13,
    paddingVertical:21,
    paddingHorizontal:21,


  }
})