import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import ActionButton from '../Components/Buttons/actionButton';
import GoogleButton from '../Components/Buttons/googleButton';
import FacebookButton from '../Components/Buttons/facebookButton';
import PhotoUpload from '../Components/BottomSheets/PhotoUpload';

const SignupScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 100 }}
      >
        <Text style={styles.title}>Music Chat</Text>
        <View style={styles.profilePictureUpload}>
          <Icon
            name="user-circle"
            type="font-awesome"
            size={140}
            color={$white}
          />
          <TouchableOpacity
            style={styles.iconPosition}
            onPress={() => {
              setIsVisible(true);
            }}
          >
            <Icon
              name="plus"
              type="feather"
              size={40}
              color={$white}
              containerStyle={styles.iconContainer}
            />
          </TouchableOpacity>
          <PhotoUpload
            isVisible={isVisible}
            onRequestClose={() => setIsVisible(false)}
          />
        </View>
        <View style={styles.inputButtonContainer}>
          <Input
            placeholder="Name"
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            placeholderTextColor={$sleekGrey}
          />
          <Input
            placeholder="Phone"
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            placeholderTextColor={$sleekGrey}
            keyboardType="phone-pad"
          />
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
      </ScrollView>
    </SafeAreaView>
  );
};

const $white = '#ffffff';
const $sleekGrey = '#F1FAEE';
const $fadeGrey = '#7B8788';
const $coolBlue = '#39A0ED';

const styles = StyleSheet.create({
  title: {
    color: $white,
    fontFamily: 'Alegreya_700Bold',
    fontSize: 45,
    textAlign: 'center',
    marginTop: 12,
  },
  profilePictureUpload: {
    position: 'relative',
    height: 160,
    width: 160,
    marginVertical: 20,
  },
  iconPosition: {
    position: 'absolute',
    right: 0,
    bottom: 15,
  },
  iconContainer: {
    backgroundColor: $coolBlue,
    borderRadius: 50,
    width: 40,
  },
  inputButtonContainer: {
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

export default SignupScreen;
