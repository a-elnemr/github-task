import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HorizontalLineComponent from './horizontalLineComponent';
import {useTheme} from '../theme/themeContext';

const RepositoriesCardComponent = ({
  title,
  description,
  imageUrl,
  language,
  stars,
  downloaded,
}) => {
  const [allDescription, setAllDescription] = useState(false);
  const [showText, setShowText] = useState(true);
  const toggleDescription = () => {
    setAllDescription(!allDescription);
    setShowText(!showText);
  };
  const {theme} = useTheme();

  return (
    <View style={[styles.card, {borderWidth: 1, borderColor: theme.border}]}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
      />
      <View style={[styles.cardContent, {backgroundColor: theme.background2}]}>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <View style={{marginTop: '3%'}}>
              <AntDesign name="book" size={28} color={'#00fa9a'}></AntDesign>
            </View>
            <Text style={[styles.title, {color: theme.textColor}]}>
              {title}
            </Text>
          </View>
        </View>
        <Text
          style={[styles.description, {color: theme.text}]}
          numberOfLines={allDescription ? undefined : 3}>
          {description}
        </Text>
        <Text
          style={[
            styles.descriptionText,
            {color: theme.textColor, fontSize: 20, fontWeight: '800'},
          ]}
          onPress={toggleDescription}>
          {showText ? 'Show more...' : 'Show less...'}
        </Text>
        <HorizontalLineComponent></HorizontalLineComponent>
        <View style={{flex: 1}}>
          <View style={[styles.rowContainer, {justifyContent: 'flex-start'}]}>
            <Text style={[styles.info, {color: theme.text, marginRight: '8%'}]}>
              {language ? language : 'Go'}
            </Text>

            <View style={[styles.rowContainer]}>
              <View style={{marginTop: '12%'}}>
                <AntDesign
                  name="staro"
                  size={24}
                  color={'#00fa9a'}
                  style={{marginTop: -10, marginRight: '1%'}}></AntDesign>
              </View>
              <Text style={[styles.info, {color: theme.text}]}>{stars}</Text>
            </View>
            <View style={[styles.rowContainer, {marginLeft: '8%'}]}>
              <View style={{marginTop: '12%'}}>
                <AntDesign
                  name="fork"
                  size={22}
                  color={'#00fa9a'}
                  style={{marginTop: -6, marginRight: '1%'}}></AntDesign>
              </View>
              <Text style={[styles.info, {color: theme.text}]}>
                {downloaded}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
    marginBottom: 20,
    overflow: 'hidden',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 200,
    objectFit: 'contain',
  },
  cardContent: {
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00008b',
    marginBottom: 10,
    marginLeft: 10,
  },
  description: {
    fontSize: 14,
    color: 'black',
    fontWeight: '400',
  },
  watched: {
    backgroundColor: '#dda0dd',
    opacity: 0.8,
    marginLeft: 15,
    marginTop: -10,
    borderRadius: 8,
    justifyContent: 'center',
  },
  textWatched: {
    marginHorizontal: 10,
    fontSize: 15,
    color: 'purple',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rowContainer: {flexDirection: 'row', justifyContent: 'space-around'},
  descriptionText: {
    fontSize: 18,
    color: 'blue',
  },
  info: {fontSize: 13, fontWeight: '900'},
});
export default React.memo(RepositoriesCardComponent);
