import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from '../../../constants/icons';
const SearchScan = () => {
  return (
    <Pressable style={styles.container}>
      <Icon.Ionicons name="scan-outline" size={30} color="black" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {SearchScan};
