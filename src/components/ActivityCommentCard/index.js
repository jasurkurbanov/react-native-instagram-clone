import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Button} from '../Button';
import {Avatar} from '../Avatar';
import {Text} from '../Text';
import {W} from '../../constants/helpers';

const ActivityCommentCard = ({
  imgUrl = 'https://images.all-free-download.com/images/graphicthumb/goa_small_bird_202958.jpg',
}) => {
  return (
    <View style={styles.container}>
      <Avatar style={styles.sides} isSmall />
      <View style={styles.userActivityContianer}>
        <Text title="jasukurbanov" h14 bold />
        <Text
          title="Lorem ipsum , or lipsum as it is sometimes known, is dummy text 
          used in laying out print, graphic or web designs."
          h14
        />
      </View>
      <Image style={styles.img} source={{uri: imgUrl}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#E3E3E3',
    margin: 10,
    borderRadius: 10,
  },
  userActivityContianer: {
    width: '60%',
    justifyContent: 'center',
  },
  img: {
    width: 50,
    height: 50,
  },
});

export {ActivityCommentCard};
