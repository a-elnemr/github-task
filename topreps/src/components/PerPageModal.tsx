import {
  Alert,
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import colorPallete from 'src/assets/constants/colorPallete';
import {ShadowView} from '@dimaportenko/react-native-shadow-view';
import CloseIcon from 'src/assets/images/close.svg';
const PerPageModal = ({
  modalTitle,
  onChange,
  modalStatus,
  toggleModal,
}: any) => {
  const choices = [{perPage: 10}, {perPage: 50}, {perPage: 100}];
  return (
    <View>
      <Modal
        transparent={true}
        visible={modalStatus}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
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
              {choices.map((item, index) => (
                <Pressable
                  key={index.toString()}
                  onPress={() => {
                    onChange(item.perPage);
                    toggleModal(false);
                  }}>
                  <Text style={styles.choices}>{item.perPage}</Text>
                  {index !== choices.length - 1 ? (
                    <View style={styles.separator} />
                  ) : null}
                </Pressable>
              ))}
            </View>
          </ShadowView>
        </View>
      </Modal>
      <Pressable onPress={() => toggleModal(true)}>
        <Text>Show Modal</Text>
      </Pressable>
    </View>
  );
};

export default PerPageModal;

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
});
