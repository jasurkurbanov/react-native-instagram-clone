import React, {memo} from 'react';
import {Image, StyleSheet} from 'react-native';
import {W} from '../../../../constants/helpers';

interface PostBodyProps {
  imgUrl?: string | undefined;
}

const PostBody = memo<PostBodyProps>(({imgUrl}) => {
  return (
    <Image
      source={{
        uri: imgUrl,
      }}
      style={styles.img}
    />
  );
});

export {PostBody};

const styles = StyleSheet.create({
  img: {width: '100%', height: W, borderRadius: 25},
});
