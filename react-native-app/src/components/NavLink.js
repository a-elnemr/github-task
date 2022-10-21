import React from "react";
import { Link } from "../../react-router";
import { Text } from "react-native-paper";
import { View } from "react-native";

const NavLink = ({ to = "", active = false, text = "" } = {}) => {
  return (
    <Link to={to}>
      <Text>{text}</Text>
    </Link>
  );
};

export default NavLink;
