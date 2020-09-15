/* eslint-disable max-len */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const $white = '#FFFFFF';
const $fbBlue = '#4267B2';

const FacebookButton = (props) => {
  return (
    <View>
      <Button
        title={props.title}
        titleStyle={styles.title}
        raised
        buttonStyle={styles.button}
        onPress={props.onPress}
        icon={
          <Icon
            iconStyle={styles.iconStyle}
            name="facebook"
            type="entypo"
            color={$white}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: $white,
    fontSize: 16,
    fontFamily: 'OpenSans_600SemiBold',
  },
  button: {
    backgroundColor: $fbBlue,
    width: 320,
  },
  iconStyle: {
    marginRight: 4,
  },
});

export default FacebookButton;
