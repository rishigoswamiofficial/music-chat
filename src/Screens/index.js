import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';

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

const $coolBlue = '#39A0ED';
const $white = '#ffffff';
const $black = '#000000';
const $backGroundBlack = '#212529';

const FriendsTab = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Conversations"
      tabBarOptions={{
        style: { backgroundColor: $backGroundBlack },
        labelStyle: {
          color: $white,
          fontFamily: 'Alegreya_500Medium',
          fontSize: 18,
          textTransform: 'capitalize',
        },
        indicatorStyle: { backgroundColor: $white },
      }}
    >
      <TopTab.Screen name="Conversations" component={ConversationsTopTab} />
      <TopTab.Screen name="Contacts" component={ContactsScreen} />
    </TopTab.Navigator>
  );
};

const ConversationsTopTab = () => {
  return (
    <Stack.Navigator initialRouteName="Conversations">
      <Stack.Screen
        name="Conversations"
        component={ConversationsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SendRequest" component={SendRequestScreen} />
      <Stack.Screen name="AcceptRequest" component={AcceptRequestScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

const MusicTab = () => {
  return (
    <Stack.Navigator
      initialRouteName="Music"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#212529' },
      }}
    >
      <Stack.Screen name="Music" component={MusicScreen} />
      <Stack.Screen name="Song" component={SongScreen} />
      <Stack.Screen name="AddToPlaylist" component={AddToPlaylistScreen} />
    </Stack.Navigator>
  );
};

const isSignedIn = true;

const AuthFlow = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: $backGroundBlack },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

const MainFlow = () => {
  return (
    <Tab.Navigator
      initialRouteName="Friends"
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor: $coolBlue,
        activeTintColor: $white,
        inactiveTintColor: $black,
      }}
    >
      <Tab.Screen
        name="Friends"
        component={FriendsTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="user-friends"
              type="font-awesome-5"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Music"
        component={MusicTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="music-note-eighth"
              type="material-community"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Playlists"
        component={PlaylistsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="library-music"
              type="material"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="user-alt"
              type="font-awesome-5"
              size={19}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const showHideHeader = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Friends';
  //Please use babel-eslint(8.2.1) for nullish coalescing operator to work
  switch (routeName) {
    case 'Friends':
      return true;
    case 'Music':
      return false;
    case 'Playlists':
      return false;
    case 'Profile':
      return false;
    default:
      return true;
  }
};

const Screens = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {isSignedIn ? (
            <Stack.Screen
              name="Main"
              component={MainFlow}
              options={({ route }) => ({
                headerShown: showHideHeader(route),
                headerStyle: { backgroundColor: $coolBlue },
                headerTitle: 'Music Chat',
                headerTitleStyle: {
                  color: $white,
                  fontFamily: 'Alegreya_700Bold',
                  fontSize: 33,
                },
                headerTitleAllowFontScaling: true,
                headerRight: () => {
                  return (
                    <TouchableOpacity underlayColor>
                      <Icon
                        name="search"
                        type="font-awesome"
                        color={$white}
                        size={23}
                        containerStyle={{ marginRight: 20 }}
                      />
                    </TouchableOpacity>
                  );
                },
              })}
            />
          ) : (
            <Stack.Screen
              name="Auth"
              component={AuthFlow}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Screens;
