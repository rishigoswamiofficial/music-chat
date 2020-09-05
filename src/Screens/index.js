import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import WelcomeScreen from './WelcomeScreen';
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';
import ConversationsScreen from './ConversationsScreen';
import ContactsScreen from './ContactsScreen';
import MusicScreen from './MusicScreen';
import PlaylistsScreen from './PlaylistsScreen';
import ProfileScreen from './ProfileScreen';
import SongScreen from './SongScreen';
import AddToPlaylistScreen from './AddToPlaylistScreen';
import SendRequestScreen from './SendRequestScreen';
import AcceptRequestScreen from './AcceptRequestScreen';
import ChatScreen from './ChatScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const FriendsTab = () => {
  return (
    <TopTab.Navigator initialRouteName="Conversations">
      <TopTab.Screen name="Conversations" component={ConversationsTopTab} />
      <TopTab.Screen name="Contacts" component={ContactsScreen} />
    </TopTab.Navigator>
  );
};

const ConversationsTopTab = () => {
  return (
    <Stack.Navigator initialRouteName="Conversations">
      <Stack.Screen name="Conversations" component={ConversationsScreen} />
      <Stack.Screen name="SendRequest" component={SendRequestScreen} />
      <Stack.Screen name="AcceptRequest" component={AcceptRequestScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

const MusicTab = () => {
  return (
    <Stack.Navigator initialRouteName="Music">
      <Stack.Screen name="Music" component={MusicScreen} />
      <Stack.Screen name="Song" component={SongScreen} />
      <Stack.Screen name="AddToPlaylist" component={AddToPlaylistScreen} />
    </Stack.Navigator>
  );
};

const isSignedIn = true;

const AuthFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

const MainFlow = () => {
  return (
    <Tab.Navigator initialRouteName="Friends">
      <Tab.Screen name="Friends" component={FriendsTab} />
      <Tab.Screen name="Music" component={MusicTab} />
      <Tab.Screen name="Playlists" component={PlaylistsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <Stack.Screen name="Main" component={MainFlow} />
        ) : (
          <Stack.Screen name="Auth" component={AuthFlow} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
