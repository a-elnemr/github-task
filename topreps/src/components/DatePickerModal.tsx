import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import colorPallete from 'src/assets/constants/colorPallete';
import {ShadowView} from '@dimaportenko/react-native-shadow-view';
import CloseIcon from 'src/assets/images/close.svg';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

const DatePickerModal = ({
  modalTitle,
  onChange,
  modalStatus,
  toggleModal,
}: any) => {
  return (
    <View>
      <Modal
        transparent={true}
        visible={modalStatus}
        onRequestClose={() => {
          toggleModal(false);
        }}>
        <View style={styles.centeredView}>
          <ShadowView style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{modalTitle}</Text>
              <Pressable onPress={() => toggleModal(false)}>
                <CloseIcon />
              </Pressable>
            </View>
            <View style={styles.calendarContainer}>
              <CalendarPicker
                previousTitle="<"
                previousTitleStyle={styles.previousTitleStyle}
                nextTitle=">"
                nextTitleStyle={styles.nextTitleStyle}
                monthYearHeaderWrapperStyle={styles.monthYearHeaderWrapperStyle}
                textStyle={styles.calendarTextStyle}
                todayBackgroundColor="#00000000"
                todayTextStyle={styles.todayTextStyle}
                selectedDayTextStyle={styles.selectedDayTextStyle}
                dayLabelsWrapper={styles.dayLabelWrapper}
                onDateChange={(date: moment.MomentInput) => {
                  onChange(moment(date).format());
                  toggleModal(false);
                }}
              />
            </View>
          </ShadowView>
        </View>
      </Modal>
    </View>
  );
};

export default DatePickerModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000031',
  },
  modalView: {
    width: Dimensions.get('screen').width - 40,
    marginHorizontal: 20,
    backgroundColor: colorPallete.white,
    borderRadius: 13,
    shadowColor: colorPallete.background,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.33,
    shadowRadius: 10,
    paddingTop: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  modalTitle: {
    fontFamily: 'Silka-Medium',
    fontSize: 14,
    lineHeight: 19,
  },
  choices: {
    fontFamily: 'Silka-Regular',
    fontSize: 14,
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  separator: {
    backgroundColor: colorPallete.background,
    height: 1,
    opacity: 0.37,
    width: '100%',
  },
  calendarContainer: {
    borderTopColor: colorPallete.background,
    borderTopWidth: 1,
    marginTop: 10,
    paddingTop: 5,
  },
  previousTitleStyle: {
    left: Dimensions.get('window').width - 100,
    fontSize: 16,
    color: colorPallete.secondary,
  },
  nextTitleStyle: {
    right: 30,
    fontSize: 16,
    color: colorPallete.secondary,
  },
  monthYearHeaderWrapperStyle: {
    right: '25%',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  calendarTextStyle: {
    fontFamily: 'Silka',
  },
  todayTextStyle: {color: 'black'},
  selectedDayTextStyle: {
    color: colorPallete.primary,
  },
  dayLabelWrapper: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    color: colorPallete.background,
  },
});
