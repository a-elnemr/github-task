import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { default as Feather } from "react-native-vector-icons/Feather";
import { default as FontAwesome } from "react-native-vector-icons/FontAwesome";

const milangoIcon = <Feather name="message-circle" size={30} color="#00ee00" />;
const searchIcon = <FontAwesome name="search" size={25} />;

const Header = () => {
  return (
    <View>
      <Text
        variant="headlineMedium"
        style={{ fontWeight: "bold", color: "#7700ff" }}
        color="#aa00aa"
      >
        {milangoIcon} milango
      </Text>
      {searchIcon}
    </View>
  );
};

export default Header;
