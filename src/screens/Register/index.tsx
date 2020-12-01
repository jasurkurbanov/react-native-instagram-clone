import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Text,
  View,
  Pressable,
  TextInput,
} from 'react-native';
import {Button} from '../../components/Button';
import {Input} from '../../components/Input';
import {Space} from '../../components/Space';
import auth from '@react-native-firebase/auth';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onRegister = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account logged & signed in!');
        navigation.navigate('TabNavigation', {
          screen: 'HomeTopTabNavigation',
        });
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <>
      <View style={{alignSelf: 'center'}}>
        <Text>Change language</Text>
      </View>
      <KeyboardAvoidingView style={styles.container}>
        <Image
          resizeMode="contain"
          source={require('./../../assets/images/logo.png')}
          style={styles.img}
        />
        <Input
          placeholder="enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Space />
        <Input
          placeholder="enter your password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Space />
        <Button
          primary
          title={'Register'}
          onPress={() => navigation.navigate('Register')}
        />
        <Space height={10} />
      </KeyboardAvoidingView>

      <View
        style={{flexDirection: 'row', alignSelf: 'center', marginBottom: 10}}>
        <Text>Already have an account ? </Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={{color: 'green'}}>Login</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({img: {width: 200, height: 100}});
