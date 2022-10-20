import React from "react";
import { Text } from "react-native";
import { List } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';







const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const RepoCard = ({repo}) => {

  
  //console.log(JSON.stringify(repo));

  console.log(Date.parse(repo.updated_at));


  return (<Card style={{margin:4}}>
    <Card.Title title={repo.full_name} left={LeftContent} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>{repo.description}</Paragraph>
      <Paragraph>{repo.description}</Paragraph>
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