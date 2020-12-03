import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {ButtonAuth} from '../../components/ButtonAuth';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require('./../../assets/images/logoIntro.png')}
        style={styles.img}
      />
      <ButtonAuth title={'Create new account'} />
      <ButtonAuth title={'Login'} secondary />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {width: 300, height: 150, margin: 30},
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    textTransform: 'uppercase',
  },
});

/*
  const {
    colors: {backgroundColor},
  } = useTheme();

  // Handle user state changes
  function onAuthStateChanged(u) {
    setUser(u);
    if (initializing) setInitializing(false);
    if (user)
      navigation.navigate('TabNavigation', {
        screen: 'HomeTopTabNavigation',
      });
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);*/
