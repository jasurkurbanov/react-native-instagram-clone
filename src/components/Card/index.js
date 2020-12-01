import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
const Card = ({
  imgUrl = 'https://images.all-free-download.com/images/graphicthumb/goa_small_bird_202958.jpg',
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: imgUrl}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 5},
  img: {width: '100%', height: 140, borderRadius: 10},
});

export {Card};
