import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from '../../../../constants/icons';

interface CategoriesItemProps {
  iconName?: string | undefined;
}
const CategoriesItem = memo<CategoriesItemProps>(({iconName}) => {
  return (
    <View style={styles.container}>
      <Icon.MaterialCommunityIcons name={iconName} size={30} color="black" />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: 70,
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },
});
export {CategoriesItem};
