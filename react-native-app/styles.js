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
  navLink: {
    borderWidth: 0,
    borderBottomWidth: 3,
    paddingBottom: 10,
  },
  navLinkActive: {
    borderColor: colors.cyan,
  },
  navLinkIdle: {
    borderColor: colors.transparent,
  },
  navLinkActiveText: {
    color: colors.purple,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  navLinkIdleText: {
    color: colors.grey,
    paddingHorizontal: 20,
  },
  mainBody: {},
  headerTopSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerTopLeftSection: { fontWeight: "bold", color: colors.purple },
  headerTopRightSection: { display: "flex", flexDirection: "row" },
});

export default styles;
