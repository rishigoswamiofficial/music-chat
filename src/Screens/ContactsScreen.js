import React from 'react';
import { View, Text, ScrollView, StatusBar, StyleSheet } from 'react-native';

const ContactsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#398FED" />
      <Text>ContactsScreen</Text>
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

export default ContactsScreen;
