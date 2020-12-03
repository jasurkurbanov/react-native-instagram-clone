import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {PostHeader} from './PostHeader';
import {PostBody} from './PostBody';
import {PostFooter} from './PostFooter';

interface PostProps {
  username?: string | undefined;
  postImage?: string | undefined;
}
const Post = memo<PostProps>(({username, postImage}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <PostHeader username={username} publishedTime={'6 min ago'} />
        <PostBody imgUrl={postImage} />
        <PostFooter />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    overflow: 'visible',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.07)',
    borderRadius: 25,
    marginBottom: 15,
    marginTop: 10,
  },
  innerContainer: {marginHorizontal: 10},
});

export {Post};
