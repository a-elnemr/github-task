import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HorizontalLineComponent from './horizontalLineComponent';
import {useTheme} from '../theme/themeContext';
import {useDispatch} from 'react-redux';
import {fetchNextPage} from '../redux/slices/repositoriesSlice';

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
  const dispatch = useDispatch();

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
              <AntDesign
                name="book"
                size={25}
                color={'#00fa9a'}
                style={{marginTop: -6}}></AntDesign>
            </View>
            <Text style={[styles.title, {color: theme.textColor}]}>
              {title}
            </Text>
          </View>
        </View>
        <Text
          style={[styles.description, {color: theme.text}]}
          numberOfLines={allDescription ? undefined : 3}>
          {description ? description : 'hello this is the repo where .......'}
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
                  size={17}
                  color={'#00fa9a'}
                  style={{marginTop: -7, marginRight: '1%'}}></AntDesign>
              </View>
              <Text style={[styles.info, {color: theme.text}]}>{stars}</Text>
            </View>
            <View style={[styles.rowContainer, {marginLeft: '8%'}]}>
              <View style={{marginTop: '12%'}}>
                <AntDesign
                  name="fork"
                  size={17}
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
    marginTop: '8%',
  },
  image: {
    width: '100%',
    aspectRatio: 2 / 1.25,
    resizeMode: 'contain',
  },
  cardContent: {
    padding: '6%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00008b',
    marginBottom: '1%',
    marginLeft: '2%',
  },
  description: {
    fontSize: 14,
    color: 'black',
    fontWeight: '400',
  },

  rowContainer: {flexDirection: 'row', justifyContent: 'space-around'},
  descriptionText: {
    fontSize: 18,
    color: 'blue',
  },
  info: {fontSize: 13, fontWeight: '900'},
});
export default React.memo(RepositoriesCardComponent);
