import React from "react";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Text,
  Divider,
} from "react-native-paper";
import moment from "moment";
import Icon from "react-native-vector-icons/FontAwesome";
import { default as FoundationIcon } from "react-native-vector-icons/Foundation";
import { View } from "react-native";
import colors from "../../colors";

const ExploreCard = ({ repo }) => {
  const BookIcon = (props) => (
    <FoundationIcon {...props} name="book-bookmark" size={30} color="#00ee00" />
  );
  const diff = Date.now() - Date.parse(repo.updated_at);
  var duration = moment.duration(diff);
  const time_difference = "Updated " + duration.humanize() + " ago";
  const starIcon = <Icon name="star-o" size={15} color="#00ee00" />;

  return (
    <Card style={{ marginVertical: 4, borderRadius: 15 }}>
      <Card.Content>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 8,
          }}
        >
          <Text style={{ color: colors.grey }}>Trending Repository</Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{starIcon} Star </Text>

            <View
              style={{
                padding: 7,
                backgroundColor: "rgb(255,200,255)",
                borderRadius: 15,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>
                {repo.stargazers_count}
              </Text>
            </View>
          </View>
        </View>
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
            justifyContent: "space-between",
            paddingVertical: 8,
          }}
        >
          <Paragraph>{time_difference}</Paragraph>
          <Paragraph style={{ paddingLeft: 30 }}>{repo.language}</Paragraph>
          <Text></Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default ExploreCard;
