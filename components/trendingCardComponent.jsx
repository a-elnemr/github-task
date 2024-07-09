import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HorizontalLineComponent from './horizontalLineComponent';
import {useTheme} from '../theme/themeContext';

const TrendingCardComponent = ({
  title,
  description,
  imageUrl,
  language,
  watchedNumber,
  updated,
}) => {
  const [allDescription, setAllDescription] = useState(false);
  const [showText, setShowText] = useState(true);
  const toggleDescription = () => {
    setAllDescription(!allDescription);
    setShowText(!showText);
  };
  const {theme} = useTheme();
  const formattedDate = new Date(updated).toLocaleDateString();
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
          <View style={styles.rowContainer}>
            <Text style={{color: theme.text, marginRight: '12%'}}>
              Trending repository
            </Text>

            <View style={styles.rowContainer}>
              <View style={{marginTop: '4%'}}>
                <AntDesign
                  name="staro"
                  size={24}
                  color={'#00fa9a'}
                  style={{marginTop: -10}}></AntDesign>
              </View>
              <Text style={{fontSize: 18, marginTop: -5, color: theme.text}}>
                Star
              </Text>
              <View style={[styles.watched, {backgroundColor: theme.view1}]}>
                <Text style={styles.textWatched}>{watchedNumber}</Text>
              </View>
            </View>
          </View>
        </View>
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
          style={[styles.descriptionText, {color: theme.textColor}]}
          onPress={toggleDescription}>
          {showText ? 'Show more...' : 'Show less...'}
        </Text>
        <HorizontalLineComponent></HorizontalLineComponent>
        <View style={{flex: 1}}>
          <View style={[styles.rowContainer, {justifyContent: 'flex-start'}]}>
            <Text style={[styles.description, {color: theme.text}]}>
              Uploaded {formattedDate}
            </Text>

            <Text
              style={[
                styles.description,
                {marginLeft: '5%', color: theme.text},
              ]}>
              {language ? language : 'Unknown'}
            </Text>
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
    marginLeft: '2%',
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
  rowContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  descriptionText: {
    fontSize: 20,
    color: 'blue',
    fontWeight: '800',
  },
});
export default React.memo(TrendingCardComponent);
