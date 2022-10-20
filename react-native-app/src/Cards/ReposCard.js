import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import moment from "moment";
import Icon from "react-native-vector-icons/FontAwesome";
import { default as FoundationIcon } from "react-native-vector-icons/Foundation";
import { default as OcticonsIcon } from "react-native-vector-icons/Octicons";

const ReposCard = ({ repo }) => {
  const BookIcon = (props) => (
    <FoundationIcon {...props} name="book-bookmark" size={30} color="#00ee00" />
  );
  const forkIcon = (
    <OcticonsIcon name="repo-forked" size={15} color="#00ee00" />
  );
  const starIcon = <Icon name="star-o" size={15} color="#00ee00" />;

  return (
    <Card style={{ margin: 4 }}>
      <Card.Title title={repo.full_name} left={BookIcon} />
      <Card.Content>
        <Paragraph>{repo.description}</Paragraph>
        <Paragraph>
          {repo.language} {starIcon} {repo.stargazers_count} {forkIcon}{" "}
          {repo.forks_count}
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

export default ReposCard;
