import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import * as Actions from '../Actions';

const ProfileScreen = (props) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button title="Logout" onPress={props.logout} />
    </View>
  );
};

export default connect(null, Actions)(ProfileScreen);
