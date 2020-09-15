/* eslint-disable max-len */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import Svg, { Path } from 'react-native-svg';

const $sleekGrey = '#F1FAEE';
const $matBlack = '#495057';

const GoogleButton = (props) => {
  return (
    <View>
      <Button
        title={props.title}
        titleStyle={styles.title}
        raised
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        onPress={props.onPress}
        icon={
          <Svg
            width={26}
            height={26}
            viewBox="0 0 26 26"
            fill="none"
            style={{ marginRight: 4 }}
            {...props}
          >
            <Path
              d="M23.623 10.878h-.873v-.045H13v4.334h6.122A6.497 6.497 0 016.5 13 6.5 6.5 0 0113 6.5c1.657 0 3.164.625 4.312 1.646l3.064-3.064A10.783 10.783 0 0013 2.167C7.017 2.167 2.167 7.017 2.167 13c0 5.983 4.85 10.833 10.833 10.833 5.983 0 10.833-4.85 10.833-10.833 0-.726-.074-1.435-.21-2.122z"
              fill="#FFC107"
            />
            <Path
              d="M3.416 7.958l3.559 2.61A6.497 6.497 0 0113 6.5c1.657 0 3.164.625 4.312 1.646l3.064-3.064A10.783 10.783 0 0013 2.167c-4.161 0-7.77 2.349-9.584 5.79z"
              fill="#FF3D00"
            />
            <Path
              d="M13 23.833c2.798 0 5.34-1.07 7.263-2.812l-3.353-2.837A6.451 6.451 0 0113 19.5a6.497 6.497 0 01-6.112-4.304l-3.532 2.722C5.149 21.426 8.79 23.833 13 23.833z"
              fill="#4CAF50"
            />
            <Path
              d="M23.623 10.878h-.873v-.045H13v4.334h6.122a6.522 6.522 0 01-2.213 3.017h.001l3.353 2.836c-.237.216 3.57-2.603 3.57-8.02 0-.726-.074-1.435-.21-2.122z"
              fill="#1976D2"
            />
          </Svg>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: $matBlack,
    fontSize: 16,
    fontFamily: 'OpenSans_600SemiBold',
  },
  button: {
    backgroundColor: $sleekGrey,
    width: 320,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

export default GoogleButton;
