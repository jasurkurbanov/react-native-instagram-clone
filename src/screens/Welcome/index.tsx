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
import {useTheme} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Welcome = ({navigation}) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
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
  }, []);

  return (
    <>
      <View style={{alignSelf: 'center'}}>
        <Text>Change language</Text>
      </View>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor,
        }}>
        <Image
          resizeMode="contain"
          source={require('./../../assets/images/logo.png')}
          style={styles.img}
        />
        <Button
          primary
          title={'Create new account'}
          onPress={() => navigation.navigate('Register')}
        />
        <Button title={'Login'} onPress={() => navigation.navigate('Login')} />
      </KeyboardAvoidingView>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({img: {width: 200, height: 100}});
