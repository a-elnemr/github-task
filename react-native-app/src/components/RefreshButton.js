import React from "react";
import colors from "../../colors";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper";

const RefreshButton = ({ isFetching, refetch }) => {
  return isFetching ? (
    <></>
  ) : (
    <View style={{ alignSelf: "center" }}>
      <Button
        onPress={refetch}
        buttonColor={colors.white}
        style={{ padding: 5, marginTop: 8 }}
      >
        <Text
          style={{ fontWeight: "bold", fontSize: 20, color: colors.purple }}
        >
          Refresh
        </Text>
      </Button>
    </View>
  );
};

export default RefreshButton;
