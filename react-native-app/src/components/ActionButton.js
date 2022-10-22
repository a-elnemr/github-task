import React from "react";
import { Button, TouchableRipple } from "react-native-paper";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { default as FontAwesome5 } from "react-native-vector-icons/FontAwesome5";
import styles from "../../styles";
import colors from "../../colors";
import { TouchableWithoutFeedback } from "react-native";

const ActionButton = ({ onPress, leftText, rightText }) => {
  return (
    <View style={{ marginVertical: 10, padding: 0 }}>
      <TouchableRipple
        onPress={onPress}
        style={styles.actionButton}
        android_ripple={{ color: "red", borderless: false }}
      >
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
    </View>
  );
};

export const NewActionButton = ({ onPress, leftText, rightText }) => {
  return (
    <Button onPress={onPress} style={{}}>
      <View style={{}}>
        <Text style={{ color: "black" }}>{leftText}</Text>
        <Text style={{}}>{rightText}</Text>
        <FontAwesome5 />
      </View>
    </Button>
  );
};

export default ActionButton;
