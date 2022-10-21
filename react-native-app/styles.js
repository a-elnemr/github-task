import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navLinkActive: {
    borderWidth: 0,
    borderBottomWidth: 3,
    paddingBottom: 10,
    borderColor: colors.cyan,
    color: colors.purple,
    fontWeight: "bold",
  },
  navLinkIdle: {
    color: colors.grey,
  },
  mainBody: {},
});

export default styles;
