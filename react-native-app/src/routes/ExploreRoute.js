import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useGetGithubByNameQuery } from "../services/github";
import { Button, Paragraph, Dialog, Portal } from "react-native-paper";
import ExploreList from "../components/ExploreList";
import { Text } from "react-native-paper";
import repos from "../components/repos_example";

import { List, Divider } from "react-native-paper";
import colors from "../../colors";
import styles from "../../styles";
import { TouchableRipple } from "react-native-paper";

import { default as FontAwesome5 } from "react-native-vector-icons/FontAwesome5";
/*
const ExploreRouteTest = () =>{
    console.log(repos);
    const toRender = <ExploreList repos={repos}/>;
    return toRender;

}
*/

const ExploreRoute = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const [limit, setLimit] = React.useState(10);

  const { data, error, isFetching } = useGetGithubByNameQuery({
    per_page: limit,
  });

  //console.log(data, error, isFetching);

  const toRender = error ? (
    <Text>Oh no, there was an error</Text>
  ) : isFetching ? (
    <ActivityIndicator size="large" />
  ) : data ? (
    <ExploreList repos={data.items} />
  ) : null;

  return (
    <View style={styles.mainBody}>
      <View>
        <Text style={{ ...styles.routeTitile }}>Explore polular</Text>
        <TouchableRipple
          onPress={showDialog}
          style={{
            alignSelf: "flex-start",
            backgroundColor: colors.white,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 17,
            marginVertical: 10,
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ fontSize: 17, color: colors.grey }}>View : </Text>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              Top {limit}
            </Text>
            <FontAwesome5
              name="chevron-down"
              size={17}
              color={colors.black}
              style={{ paddingLeft: 10, paddingTop: 3 }}
            />
          </View>
        </TouchableRipple>

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <List.Item
              title="10"
              description="Display top 10 repositories"
              onPress={() => {
                setLimit(10);
                hideDialog();
              }}
            />
            <Divider />
            <List.Item
              title="50"
              description="Display top 50 repositories"
              onPress={() => {
                setLimit(50);
                hideDialog();
              }}
            />
            <Divider />

            <List.Item
              title="100"
              description="Display top 100 repositories"
              onPress={() => {
                setLimit(100);
                hideDialog();
              }}
            />
          </Dialog>
        </Portal>
      </View>
      {toRender}
    </View>
  );
};

export default ExploreRoute;
