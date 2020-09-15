import React from 'react';
import { Button } from 'react-native-elements';

const ActionButton = ({
  title,
  fontFamily,
  fontSize,
  width,
  marginVertical,
  marginHorizontal,
  onPress,
}) => {
  const $coolBlue = '#39A0ED';
  const styles = {
    buttonTitle: {
      fontFamily: fontFamily || 'OpenSans_600SemiBold',
      fontSize: fontSize || 16,
    },
    button: {
      width: width || 320,
      backgroundColor: $coolBlue,
    },
    buttonContainer: {
      marginVertical: marginVertical || 20,
      marginHorizontal: marginHorizontal || 0,
    },
  };

  return (
    <Button
      title={title}
      raised
      titleStyle={styles.buttonTitle}
      buttonStyle={styles.button}
      containerStyle={styles.buttonContainer}
      onPress={onPress}
    />
  );
};

export default ActionButton;
