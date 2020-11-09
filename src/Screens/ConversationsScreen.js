import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

const ConversationsScreen = () => {
  return (
    <View style={styles.mainViewContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#398FED" />
    </View>
  );
};

const $backGroundBlack = '#212529';
const $coolBlue = '#39A0ED';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: $backGroundBlack
  }
});

export default ConversationsScreen;
