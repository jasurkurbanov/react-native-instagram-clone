import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from '../../../../constants/icons';

//ios-heart-outline
//chatbubbles-outline
//bookmark-outline

interface PostFooterIconProps {
  iconName?: string | undefined;
  text?: number | undefined;
}

const PostFooterIcon = memo<PostFooterIconProps>(({iconName, text}) => {
  return (
    <View style={styles.leftIconContainerItem}>
      <Icon.Ionicons name={iconName} size={25} color="#900" />
      <Text style={styles.leftIconContainerText}>{text}</Text>
    </View>
  );
});

interface PostFooterProps {
  likesCount?: number | undefined;
  commentsCount?: number | undefined;
}

const PostFooter = memo<PostFooterProps>(({likesCount, commentsCount}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftIconContainer}>
        <PostFooterIcon iconName="ios-heart-outline" text={likesCount} />
        <PostFooterIcon
          iconName="ios-chatbubbles-outline"
          text={commentsCount}
        />
      </View>
      <View>
        <Icon.Ionicons name="bookmark-outline" size={24} color="black" />
      </View>
    </View>
  );
});

export {PostFooter};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  leftIconContainer: {
    width: '50%',
    flexDirection: 'row',
  },
  leftIconContainerItem: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  leftIconContainerText: {marginLeft: 5},
});
