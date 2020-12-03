import React, {memo} from 'react';
import {StyleSheet, Image, View} from 'react-native';

interface CardProps {
  imgUrl?: string | undefined;
}
const Card = memo<CardProps>(({imgUrl}) => {
  return <Image style={styles.img} source={{uri: imgUrl}} />;
});

const styles = StyleSheet.create({
  img: {height: 140, flex: 1, margin: '1%', borderRadius: 10},
});

export {Card};
