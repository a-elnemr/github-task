import React from "react";
import { TouchableRipple } from "react-native-paper";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { default as FontAwesome5 } from "react-native-vector-icons/FontAwesome5";
import styles from "../../styles";
const ActionButton = ({ onPress, leftText, rightText }) => {
  return (
    <TouchableRipple onPress={onPress} style={styles.actionButton}>
      <View style={styles.actionButtonTextView}>
        <Text style={styles.actionButtonLeftText}>{leftText}</Text>
        <Text style={styles.actionButtonRightText}>{rightText}</Text>
        <FontAwesome5
          name="chevron-down"
          size={17}
          color={colors.black}
          style={styles.actionButtonDownArrow}
        />
      </View>
    </TouchableRipple>
  );
};

export default ActionButton;
