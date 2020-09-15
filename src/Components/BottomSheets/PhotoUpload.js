import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomSheet, ListItem, Icon } from 'react-native-elements';

const PhotoUpload = ({ isVisible, onRequestClose }) => {
  const list = [
    {
      title: 'Camera',
      onPress: 'Open Camera',
      icon: {
        name: 'camera',
        type: 'entypo',
      },
    },
    {
      title: 'Choose from Gallery',
      onPress: 'Open Gallery',
      icon: {
        name: 'photo',
        type: 'material-icons',
      },
    },
  ];

  return (
    <BottomSheet
      isVisible={isVisible}
      modalProps={{
        onRequestClose,
      }}
    >
      {list.map((item, index) => (
        <ListItem key={index} bottomDivider>
          <Icon
            name={item.icon.name}
            type={item.icon.type}
            color={charcoalGrey}
          />
          <ListItem.Content>
            <ListItem.Title style={styles.itemTitle}>
              {item.title}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </BottomSheet>
  );
};

const charcoalGrey = '#616C6F';

const styles = StyleSheet.create({
  itemTitle: {
    color: charcoalGrey,
    fontFamily: 'NotoSans_400Regular',
  },
});

export default PhotoUpload;
