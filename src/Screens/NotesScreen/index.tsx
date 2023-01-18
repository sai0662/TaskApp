/* eslint-disable handle-callback-err */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Names {
  name: string;
  description: string;
  date: string;
  month: string;
  topic: string;
}

const Notes = ({navigation}: any) => {
  const [text, onChangeText] = React.useState('');

  const [notes, setNotes] = useState<Names[]>([]);

  const [oldNotes, setOldNotes] = useState([]);

  const retrieveNotes = async () => {
    try {
      const notesString = await AsyncStorage.getItem('@notes');
      const retrievedNotes = JSON.parse(notesString || '');
      setNotes(retrievedNotes);
      setOldNotes(oldNotes);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (
      !notes.length ||
      notes.length !== oldNotes.length ||
      notes.length === 0
    ) {
      retrieveNotes();
    }
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Search note.."
        value={text}
      />
      <View style={styles.notesView}>
        <FlatList
          data={notes}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.noteView}
                onPress={() =>
                  navigation.navigate('notedetails', {
                    name: item.name,
                    description: item.description,
                  })
                }>
                <View style={styles.notesTopicView}>
                  <Text numberOfLines={1} style={styles.notesTopicText}>
                    {item.topic}
                  </Text>
                </View>
                <View style={styles.dateView}>
                  <Text style={styles.dateText}>{item.date}</Text>
                  <Text style={styles.monthText}>{item.month}</Text>
                </View>
                <View style={styles.notesNameView}>
                  <Text numberOfLines={2} style={styles.notesNameText}>
                    {item.name}
                  </Text>
                </View>
                <View style={styles.noteDescriptionView}>
                  <Text numberOfLines={7} style={styles.notesDescriptionText}>
                    {item.description}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View style={styles.addButtonView}>
        <TouchableOpacity onPress={() => navigation.navigate('addnotes')}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notes;
