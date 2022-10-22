import React from "react";
import { Button, TouchableRipple } from "react-native-paper";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { default as FontAwesome5 } from "react-native-vector-icons/FontAwesome5";
import styles from "../../styles";
import colors from "../../colors";
import { TouchableWithoutFeedback } from "react-native";
import { Pressable } from "react-native";

export const ActionButton = ({ onPress, leftText, rightText }) => {
  return (
    <View style={styles.actionButtonView}>
      <Pressable
        android_ripple={{ borderless: false }}
        style={styles.actionButtonPressable}
        onPress={onPress}
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
      </Pressable>
    </View>
  );
};

export default ActionButton;
