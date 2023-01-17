/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const NoteDetails = ({route}: any) => {
  const {name, description} = route.params;
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text>{name}</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default NoteDetails;
