import React from "react";
import { Link } from "../../react-router";
import { Text } from "react-native-paper";
import { View } from "react-native";
import styles from "../../styles";

const NavLink = ({ to = "", active = false, text = "" } = {}) => {
  const textStyle = active ? styles.navLinkActiveText : styles.navLinkIdleText;
  const linkStyle = active
    ? { ...styles.navLink, ...styles.navLinkActive }
    : { ...styles.navLink, ...styles.navLinkIdle };

  return (
    <View>
      <Link to={to} style={linkStyle}>
        <Text style={textStyle}>{text}</Text>
      </Link>
    </View>
  );
};

export default NavLink;
