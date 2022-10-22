import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingTop: 0,
  },
  header: { paddingHorizontal: 20, paddingTop: 15 },
  nav: {
    flexDirection: "row",
  },
  navLink: {
    borderWidth: 0,
    borderBottomWidth: 3,
    paddingBottom: 10,
    marginRight: 15,
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
  mainBody: { backgroundColor: colors.lightestgrey, padding: 15 },
  headerTopSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerTopLeftSection: { fontWeight: "bold", color: colors.purple },
  headerTopRightSection: { display: "flex", flexDirection: "row" },
  routeTitile: { fontWeight: "bold", fontSize: 25, marginVertical: 10 },
  actionButton: {
    alignSelf: "flex-start",
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginVertical: 10,
  },
  actionButtonTextView: { display: "flex", flexDirection: "row" },
  actionButtonLeftText: { fontSize: 13, color: colors.grey },
  actionButtonRightText: { fontSize: 13, fontWeight: "bold" },
  actionButtonDownArrow: { paddingLeft: 10, paddingTop: 3 },
});

export default styles;
