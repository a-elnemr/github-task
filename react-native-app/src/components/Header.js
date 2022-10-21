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
import { useLocation } from "react-router-dom";

const milangoIcon = (
  <Feather name="message-circle" size={30} color={colors.cyan} />
);
const searchIcon = (
  <FontAwesome name="search" size={25} style={{ marginLeft: 10 }} />
);

const Header = () => {
  const [theme, setTheme] = React.useState("dark");
  let location = useLocation();
  const currentLocation = location.pathname;
  const isLocationExplore = currentLocation === "/" ? true : false;
  const isLocationRepos = currentLocation === "/repos" ? true : false;

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
    <View style={styles.header}>
      <View style={styles.headerTopSection}>
        <Text variant="headlineMedium" style={styles.headerTopLeftSection}>
          {milangoIcon} milango
        </Text>
        <View style={styles.headerTopRightSection}>
          {themeElement}
          {searchIcon}
        </View>
      </View>

      <View style={styles.nav}>
        <NavLink to="/" text="Explore" active={isLocationExplore} />
        <NavLink to="/repos" text="Repositories" active={isLocationRepos} />
        <View></View>
      </View>
    </View>
  );
};

export default Header;
