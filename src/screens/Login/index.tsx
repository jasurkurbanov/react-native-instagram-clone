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
import {useTheme} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    colors: {backgroundColor},
  } = useTheme();

  const onLogin = () => {
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
        <Button primary title={'Login'} onPress={onLogin} />
        <Space height={10} />
        <View style={{flexDirection: 'row'}}>
          <Text>Forgot your password ? </Text>
          <Pressable onPress={() => alert('click')}>
            <Text style={{color: 'green'}}>Recovery it</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>

      <View
        style={{flexDirection: 'row', alignSelf: 'center', marginBottom: 10}}>
        <Text>Do not have account ? </Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={{color: 'green'}}>Register</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  img: {width: 200, height: 100},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
