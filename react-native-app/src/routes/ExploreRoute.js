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
import { Pressable } from "react-native";
import ActionButton, { NewActionButton } from "../components/ActionButton";

import RefreshButton from "../components/RefreshButton";

const ExploreRoute = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const [limit, setLimit] = React.useState(10);

  const { data, error, isFetching, refetch } = useGetGithubByNameQuery({
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
      <View
        style={{
          borderRadius: 10,
          overflow: "hidden",
          alignSelf: "flex-start",
        }}
      >
        <Pressable
          android_ripple={{ color: "red", borderless: false }}
          style={{ backgroundColor: "white", borderRadius: 10 }}
        >
          <View style={styles.actionButtonTextView}>
            <Text
              style={{ ...styles.actionButtonLeftText, alignSelf: "center" }}
            >
              abc
            </Text>
            <Text style={styles.actionButtonRightText}>efg</Text>
            <FontAwesome5
              name="chevron-down"
              size={17}
              color={colors.black}
              style={styles.actionButtonDownArrow}
            />
          </View>
        </Pressable>
      </View>

      <View>
        <Text style={{ ...styles.routeTitile }}>Explore polular</Text>
        <ActionButton
          leftText={"View : "}
          rightText={`Top ${limit}`}
          onPress={showDialog}
        />
        <NewActionButton
          leftText={"View : "}
          rightText={`Top ${limit}`}
          onPress={showDialog}
        />
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

      <RefreshButton isFetching={isFetching} refetch={refetch} />
    </View>
  );
};

export default ExploreRoute;
