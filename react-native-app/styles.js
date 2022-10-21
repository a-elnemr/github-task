import { StyleSheet } from "react-native";

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
    borderColor: "cyan",
    color: "#7700ff",
    fontWeight: "bold",
  },
  navLinkIdle: {},
});

export default styles;
