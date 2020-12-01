import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Text,
  View,
  Pressable,
} from 'react-native';
import Navigation from '../../navigation';
import {Button} from '../../components/Button';
// import {useTheme} from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';

const Welcome = ({}) => {
  return (
    <View>
      <View style={{alignSelf: 'center'}}>
        <Text>Change language</Text>
      </View>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          resizeMode="contain"
          source={require('./../../assets/images/logoIntro.png')}
          style={styles.img}
        />
        <Button primary title={'Create new account'} />
        <Button title={'Login'} />
      </KeyboardAvoidingView>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({img: {width: 200, height: 100}});

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
