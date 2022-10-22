import React from "react";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Divider,
} from "react-native-paper";
import moment from "moment";
import Icon from "react-native-vector-icons/FontAwesome";
import { default as FoundationIcon } from "react-native-vector-icons/Foundation";
import { default as OcticonsIcon } from "react-native-vector-icons/Octicons";

import { View } from "react-native";
import { Text } from "react-native-paper";

import colors from "../../colors";

const ReposCard = ({ repo }) => {
  const BookIcon = (props) => (
    <FoundationIcon {...props} name="book-bookmark" size={30} color="#00ee00" />
  );
  const forkIcon = (
    <OcticonsIcon name="repo-forked" size={15} color="#00ee00" />
  );
  const starIcon = <Icon name="star-o" size={15} color="#00ee00" />;

  return (
    <Card style={{ marginVertical: 4, borderRadius: 15 }}>
      <Card.Content>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 30,
            alignItems: "flex-start",
            paddingVertical: 8,
          }}
        >
          <BookIcon />
          <Text
            style={{
              paddingLeft: 15,
              fontSize: 20,
              color: colors.purple,
              fontWeight: "bold",
            }}
          >
            {repo.full_name}
          </Text>
        </View>

        <Paragraph style={{ paddingVertical: 8 }}>{repo.description}</Paragraph>
        <Divider style={{ height: 2 }} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingVertical: 8,
          }}
        >
          <Paragraph> {repo.language}</Paragraph>
          <Paragraph style={{ paddingLeft: 30 }}>
            {starIcon} {repo.stargazers_count}
          </Paragraph>
          <Paragraph style={{ paddingLeft: 30 }}>
            {forkIcon} {repo.forks_count}
          </Paragraph>
        </View>
      </Card.Content>
    </Card>
  );
};

export default ReposCard;
