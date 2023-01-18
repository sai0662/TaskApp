/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const NoteDetails = ({route}: any) => {
  const {name, description} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.notesText}>Notes Details</Text>
      <Text style={styles.titleText}>{name}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  );
};

export default NoteDetails;
