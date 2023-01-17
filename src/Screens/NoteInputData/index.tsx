/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Keyboard, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';

interface Notes {
  title: string;
  noteDescription: string;
}

interface NotesData {
  name: string;
  description: string;
  notes: string;
}
const NoteInputData = ({navigation}: any) => {
  const [title, setTitle] = useState('');
  const [noteDescription, setNoteDescription] = useState('');

  const [name, setName] = useState<NotesData[]>([]);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [month, setMonth] = useState();

  const saveNote = async () => {
    try {
      const hrs = new Date().getDate();
      const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      let monthIndex = new Date().getMonth();
      let mnth = monthNames[monthIndex];
      const newNote = {
        name: title,
        description: noteDescription,
        date: hrs,
        month: mnth,
      };
      const notes = await AsyncStorage.getItem('@notes');
      let parsedNotes = JSON.parse(notes);

      if (!parsedNotes) {
        parsedNotes = [];
      }
      parsedNotes.push(newNote);
      await AsyncStorage.setItem('@notes', JSON.stringify(parsedNotes));
      setName([]);
      setDescription('');
      setDate('');
      navigation.navigate('notes');
    } catch (e) {
      console.log(e);
    }
  };

  const handleOnChangeText = (text: any, value: any) => {
    if (value === 'title') {
      setTitle(text);
    }
    if (value === 'note') {
      setNoteDescription(text);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.addNotesText}>Add Notes</Text>
      <View style={styles.formView}>
        <TextInput
          value={title}
          onChangeText={text => handleOnChangeText(text, 'title')}
          placeholder="Add Title"
          style={styles.titleInput}
        />
        <TextInput
          multiline
          value={noteDescription}
          onChangeText={text => handleOnChangeText(text, 'note')}
          placeholder="Add Note"
          style={styles.noteDescriptionInput}
        />
      </View>
      <TouchableOpacity onPress={() => saveNote()} style={styles.buttonView}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoteInputData;
