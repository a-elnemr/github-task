import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import colorPallete from 'src/assets/constants/colorPallete';
import {ShadowView} from '@dimaportenko/react-native-shadow-view';
import CloseIcon from 'src/assets/images/close.svg';
import SearchIcon from 'src/assets/images/searchIcon.svg';
import {languagesChoices} from 'src/screens/ExploreScreen';
const PickerModal = ({
  modalTitle,
  onChange,
  modalStatus,
  toggleModal,
  choices,
}: any) => {
  const [displayedChoices, setDisplayedChoices] = useState(choices);
  const filter = (value: string) => {
    if (value == '') {
      setDisplayedChoices(choices);
    } else {
      const searchedArray = displayedChoices.filter(
        (item: typeof languagesChoices) => item.value.includes(value),
      );
      setDisplayedChoices(searchedArray);
    }
  };
  return (
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
          <View>
            <View>
              <TextInput
                style={styles.textInput}
                placeholder="Filter Languages"
                onChangeText={filter}
              />
              <View style={{position: 'absolute', right: 40, top: 22}}>
                <SearchIcon />
              </View>
            </View>
            {displayedChoices.map(
              (item: {value: string | number}, index: number) => (
                <Pressable
                  key={index.toString()}
                  onPress={() => {
                    onChange(item.value);
                    toggleModal(false);
                  }}>
                  <Text style={styles.choices}>{item.value}</Text>
                  {index !== choices.length - 1 ? (
                    <View style={styles.separator} />
                  ) : null}
                </Pressable>
              ),
            )}
          </View>
        </ShadowView>
      </View>
    </Modal>
  );
};

export default PickerModal;

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
  textInput: {
    marginVertical: 10,
    alignSelf: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: colorPallete.darkBackGround,
    borderRadius: 10,
    padding: 10,
    fontFamily: 'Silka-Regular',
    fontSize: 12,
  },
});