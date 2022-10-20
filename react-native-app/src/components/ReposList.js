import React from "react";
import { Text } from "react-native";
import { List } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from "./Icons";





const LeftContent = props => <Avatar.Icon {...props} icon="book-variant" style={{backgroundColor:"transparent"}} color="cyan"/>;

const RepoCard = ({repo}) => {

const BookIcon =(props)=> <FoundationIcon {...props} name="book-bookmark" size={30} color="#00ee00"/>;
  
  const diff = Date.now()-Date.parse(repo.updated_at);
  var duration = moment.duration(diff);
  const time_difference = "Updated "+duration.humanize() + " ago";
  const starIcon = <Icon name="star-o" size={15} color="#00ee00" />;

  return (
    <Card style={{margin:4}}>
      <Card.Title title={repo.full_name} left={BookIcon} />
      <Card.Content>
        <Paragraph>{repo.description}</Paragraph>
        <Paragraph>{time_difference}</Paragraph>
        <Paragraph>{repo.language}</Paragraph>
        <Paragraph>{starIcon} {repo.stargazers_count}</Paragraph>
        
      </Card.Content>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  )
};

//    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />


const ReposList = ( {repos} ) =>
{
  console.log (JSON.stringify(repos));
    console.log(repos);
    return repos.map((repo)=><RepoCard repo={repo} key={repo.id}/>);
}

export default ReposList;