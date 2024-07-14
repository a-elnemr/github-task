import moment from 'moment';
import React, {useEffect, useState} from 'react';
import DatePicker from 'react-native-modern-datepicker';

import {
  View,
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../config/color';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedDate} from '../redux/actions/Actions';

function DatePickerComponent() {
  const dispatch = useDispatch();
  const {darkMode} = useSelector(state => state.theme);
  const {pickedDate} = useSelector(state => state.repos);
  //const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handlOnPress = () => {
    setOpen(!open);
  };
  const handleDateChange = date => {
    console.log(date);
    dispatch(setSelectedDate(moment(date, 'YYYY/MM/DD').format('YYYY-MM-DD')));
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <View style={styles.lightContainer}>
      <TouchableOpacity
        style={
          darkMode
            ? [styles.lightPickerButton, styles.darkPickerButton]
            : styles.lightPickerButton
        }
        onPress={handlOnPress}>
        <Text
          style={
            darkMode ? [styles.dateText, styles.darkDateText] : styles.dateText
          }>
          Date:
        </Text>
        <Text
          style={
            darkMode
              ? [styles.selectedDate, styles.darkSelectedDate]
              : styles.selectedDate
          }>
          {moment(pickedDate).format('DD MMMM YY')}
        </Text>
        <Icon
          name={'caretdown'}
          size={11}
          style={
            darkMode
              ? [styles.arrowIcon, styles.darkArrowIcon]
              : styles.arrowIcon
          }
        />
      </TouchableOpacity>
      <Modal transparent={true} visible={open} animationType="slide">
        <View style={styles.modalBackground}>
          <View
            style={
              darkMode
                ? [styles.modalContainer, styles.darkModalContainer]
                : styles.modalContainer
            }>
            <DatePicker
              date={pickedDate}
              onDateChange={handleDateChange}
              mode="calendar"
              style={darkMode ? styles.darkDatePicker : null}
              options={{
                textHeaderColor: darkMode ? colors.white : colors.black,
                mainColor: colors.cyan,
                textSecondaryColor: colors.grey,
              }}
            />
            <TouchableOpacity onPress={handleCancel}>
              <Text
                style={
                  darkMode
                    ? [styles.confirmText, styles.darkConfirmText]
                    : styles.confirmText
                }>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  lightPickerButton: {
    paddingHorizontal: 8,

    paddingVertical: 10,
    flexDirection: 'row',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  darkPickerButton: {
    backgroundColor: colors.dark,
  },
  arrowIcon: {
    marginLeft: 10,
    color: colors.black,
  },
  selectedDate: {
    color: colors.black,
    fontSize: 13,
    marginLeft: 5,
  },
  darkSelectedDate: {
    color: colors.white,
  },
  dateText: {
    color: colors.grey,
    fontSize: 12,
  },
  darkDateText: {
    color: colors.white,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '90%',
  },
  darkModalContainer: {
    backgroundColor: colors.dark,
  },

  yearSelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },

  confirmText: {
    fontSize: 14,
    marginTop: 10,
  },
  darkConfirmText: {
    color: colors.grey,
  },
  arrowIcon: {
    marginLeft: 10,
    color: colors.black,
  },
  darkArrowIcon: {
    color: colors.white,
  },
  darkDatePicker: {
    backgroundColor: colors.dark,
  },
});

export default DatePickerComponent;
