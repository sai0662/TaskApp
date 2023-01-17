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
      {/* <View style={styles.notesView}>
        {notes.map((note, index) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('notedetails', {
                name: note.name,
                description: note.description,
              })
            }
            key={index}
            style={styles.noteView}>
            <View style={styles.dateView}>
              <Text style={styles.dateText}>{note.date}</Text>
              <Text style={styles.monthText}>{note.month}</Text>
            </View>
            <Text style={styles.notesNameText}>{note.name}</Text>
            <Text style={styles.notesNameText}>{note.description}</Text>
          </TouchableOpacity>
        ))}
      </View> */}
      <View style={styles.notesView}>
        <FlatList
          data={notes}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: wp(47.4),
                  height: hp(28),
                  padding: hp(2),
                  marginLeft: wp(2.4),
                  marginTop: hp(1.4),
                  backgroundColor: '#E1C16E',
                  borderRadius: hp(3),
                }}
                onPress={() =>
                  navigation.navigate('notedetails', {
                    name: item.name,
                    description: item.description,
                  })
                }>
                <View style={styles.dateView}>
                  <Text style={styles.dateText}>{item.date}</Text>
                  <Text style={styles.monthText}>{item.month}</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text numberOfLines={2} style={styles.notesNameText}>
                    {item.name}
                  </Text>
                </View>
                <View style={{flex: 4}}>
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
