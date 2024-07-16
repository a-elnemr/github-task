import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import colors from '../config/color';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';

const ModalPicker = ({
  pickerValue,
  handleValueChange,
  allValues = [],
  label,
}) => {
  const darkMode = useSelector(state => state.theme.darkMode);
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const options = ({item}) => (
    <TouchableOpacity
      style={
        darkMode
          ? [styles.itemContainer, styles.darkItemContainer]
          : styles.itemContainer
      }
      onPress={() => {
        toggleModal();
        handleValueChange(item.value);
      }}>
      <Text
        style={
          darkMode ? [styles.itemLabel, styles.darkItemLabel] : styles.itemLabel
        }>
        {item.value}
      </Text>
    </TouchableOpacity>
  );

  return (
    <>
      <TouchableOpacity
        style={
          darkMode
            ? [styles.lightPickerContainer, styles.darkPickerContainer]
            : styles.lightPickerContainer
        }
        onPress={toggleModal}>
        <Text
          style={
            darkMode
              ? [styles.lightViewText, styles.darkViewText]
              : styles.lightViewText
          }>
          {label}
        </Text>
        <Text
          style={
            darkMode
              ? [styles.lightSelectedValue, styles.darkSelectedValue]
              : styles.lightSelectedValue
          }>
          {pickerValue}
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

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalOpen}
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View
            style={[
              styles.modalContent,
              darkMode ? styles.darkModalContent : null,
            ]}>
            <FlatList
              data={allValues}
              renderItem={options}
              keyExtractor={item => item.value.toString()}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  lightPickerContainer: {
    overflow: 'scroll',
    maxWidth: 160,
    borderRadius: 9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  darkPickerContainer: {
    backgroundColor: colors.dark,
  },
  lightViewText: {
    marginRight: 5,
    fontFamily: 'Silka Regular',
    fontSize: 12,
    color: colors.grey,
  },
  darkViewText: {
    color: colors.white,
  },
  lightSelectedValue: {
    color: colors.black,
    fontSize: 13,
    marginRight: 10,
    maxWidth: '30%',
    maxHeight: 20,
  },
  darkSelectedValue: {
    color: colors.white,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.white,
    maxHeight: 300,
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  darkModalContent: {
    backgroundColor: colors.dark,
  },
  itemContainer: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grey,
  },
  darkItemContainer: {
    borderBottomColor: colors.white,
  },

  itemLabel: {
    fontSize: 13,
    color: 'black',
  },
  darkItemLabel: {
    color: colors.white,
  },
  arrowIcon: {
    color: colors.black,
  },
  darkArrowIcon: {
    color: colors.white,
  },
});

export default ModalPicker;
