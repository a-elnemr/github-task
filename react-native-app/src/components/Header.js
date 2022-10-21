import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { default as Feather } from "react-native-vector-icons/Feather";

const milangoIcon = <Feather name="message-circle" size={30} color="#00ee00" />;

const Header = () => {
  return (
    <View>
      <Text variant="headlineMedium">{milangoIcon} milango</Text>
    </View>
  );
};

export default Header;
