import React from "react";
import { Text } from "react-native";
import { List } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import moment from 'moment';







const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const RepoCard = ({repo}) => {

  
  //console.log(JSON.stringify(repo));

  //console.log(Date.parse(repo.updated_at));
  const diff = Date.now()-Date.parse(repo.updated_at);
  var duration = moment.duration(diff);
  const time_difference = "Updated "+duration.humanize() + " ago";

  return (<Card style={{margin:4}}>
    <Card.Title title={repo.full_name} left={LeftContent} />
    <Card.Content>
      <Paragraph>{repo.description}</Paragraph>
      <Paragraph>{time_difference}</Paragraph>
      <Paragraph>{repo.language}</Paragraph>
      <Paragraph>  {repo.stargazers_count}</Paragraph>
      
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>)
};


const ReposList = ( {repos} ) =>
{
  console.log (JSON.stringify(repos));
    console.log(repos);
    return repos.map((repo)=><RepoCard repo={repo} key={repo.id}/>);
}

export default ReposList;