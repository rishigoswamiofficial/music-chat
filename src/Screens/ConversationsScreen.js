import React from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet } from 'react-native';

const ConversationsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#398FED" />
      <Text>ConversationsScreen</Text>
    </ScrollView>
  );
};

const $backGroundBlack = '#212529';

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: $backGroundBlack
  }
});

export default ConversationsScreen;
