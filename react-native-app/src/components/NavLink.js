import React from "react";
import { Link } from "../../react-router";
import { Text } from "react-native-paper";
import { View } from "react-native";
import styles from "../../styles";

const NavLink = ({ to = "", active = false, text = "" } = {}) => {
  const linkStyle = active ? styles.navLinkActive : styles.navLinkIdle;
  return (
    <View>
      <Link to={to}>
        <Text style={linkStyle}>{text}</Text>
      </Link>
    </View>
  );
};

export default NavLink;
