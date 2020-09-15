import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActionButton from '../Components/Buttons/actionButton';

const WelcomeScreen = ({ navigation }) => {
  const buttonPress = (routeName) => {
    navigation.navigate(routeName);
  };
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <StatusBar barStyle="light-content" />
      <View>
        <Text style={styles.title}>Music Chat</Text>
        <ActionButton title="Signup" onPress={() => buttonPress('Signup')} />
        <Text style={styles.choiceText}>Or</Text>
        <Text style={styles.choiceText}>Already have an account?</Text>
        <ActionButton title="Login" onPress={() => buttonPress('Login')} />
      </View>
    </SafeAreaView>
  );
};

const $white = '#ffffff';

const styles = StyleSheet.create({
  title: {
    color: $white,
    fontFamily: 'Alegreya_700Bold',
    fontSize: 45,
    textAlign: 'center',
  },
  choiceText: {
    color: $white,
    fontFamily: 'OpenSans_300Light',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 6,
  },
});

export default WelcomeScreen;
