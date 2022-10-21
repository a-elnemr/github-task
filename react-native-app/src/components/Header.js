import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { default as Feather } from "react-native-vector-icons/Feather";
import { default as FontAwesome } from "react-native-vector-icons/FontAwesome";
import styles from "../../styles";
import { Link } from "../../react-router";

const milangoIcon = <Feather name="message-circle" size={30} color="#00ee00" />;
const searchIcon = <FontAwesome name="search" size={25} />;

const Header = () => {
  return (
    <View>
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
      <View></View>

      <View style={styles.nav}>
        <Link to="/">
          <Text>Explore</Text>
        </Link>
        <Link to="/repos">
          <Text>Repos</Text>
        </Link>
        <View></View>
      </View>
    </View>
  );
};

export default Header;
