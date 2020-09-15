import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import ActionButton from '../Components/Buttons/actionButton';
import GoogleButton from '../Components/Buttons/googleButton';
import FacebookButton from '../Components/Buttons/facebookButton';

const LoginScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={styles.title}>Music Chat</Text>
      <View style={styles.container}>
        <Input
          placeholder="Email"
          inputStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
          placeholderTextColor={$sleekGrey}
        />
        <Input
          placeholder="Password"
          inputStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
          placeholderTextColor={$sleekGrey}
          secureTextEntry
        />
        <ActionButton title="Login" />
        <GoogleButton title="Login with Google" />
        <FacebookButton title="Login with Facebook" />
      </View>
    </View>
  );
};

const $white = '#ffffff';
const $sleekGrey = '#F1FAEE';
const $fadeGrey = '#7B8788';

const styles = StyleSheet.create({
  title: {
    color: $white,
    fontFamily: 'Alegreya_700Bold',
    fontSize: 45,
    textAlign: 'center',
    marginTop: 12,
  },
  container: {
    position: 'absolute',
    top: '30%',
    width: 340,
    alignItems: 'center',
  },
  input: {
    color: $sleekGrey,
    fontFamily: 'NotoSansJP_500Medium',
    fontSize: 16,
  },
  inputContainer: {
    borderBottomColor: $fadeGrey,
  },
});

export default LoginScreen;
