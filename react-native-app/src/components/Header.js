import React from "react";
import { View } from "react-native";
import { Text, Button, IconButton } from "react-native-paper";
import { default as Feather } from "react-native-vector-icons/Feather";
import { default as FontAwesome } from "react-native-vector-icons/FontAwesome";
import { default as Entypo } from "react-native-vector-icons/Entypo";
import styles from "../../styles";
import { Link } from "../../react-router";
import NavLink from "./NavLink";
import colors from "../../colors";

const milangoIcon = <Feather name="message-circle" size={30} color="cyan" />;
const searchIcon = (
  <FontAwesome name="search" size={25} style={{ marginLeft: 10 }} />
);

const Header = () => {
  const [theme, setTheme] = React.useState("dark");
  const toggleTheme = () => {
    setTheme((_theme) => {
      return _theme === "dark" ? "light" : "dark";
    });
  };

  const themeElement =
    theme === "dark" ? (
      <Entypo name="moon" size={25} onPress={toggleTheme} />
    ) : (
      <Entypo name="light-up" size={25} onPress={toggleTheme} />
    );

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Text
          variant="headlineMedium"
          style={{ fontWeight: "bold", color: colors.purple }}
        >
          {milangoIcon} milango
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          {themeElement}
          {searchIcon}
        </View>
      </View>

      <View style={styles.nav}>
        <NavLink to="/" text="Explore" active={true} />
        <NavLink to="/repos" text="Repositories" />
        <View></View>
      </View>
    </View>
  );
};

export default Header;
