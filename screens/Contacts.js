import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  ImageBackground,
  TouchableHighland,
  AsyncStorage,
  Alert,
} from 'react-native';
import { Button } from 'react-native-elements';
import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';

export default class ContactList extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor() {
    super();
    this.state = { contacts: [] };
  }

  render() {
    const setItem = async () => {
      try {
        await AsyncStorage.setItem('Yo yo', 'I like to save it.');
        // console.log(item)
      } catch (error) {
        // Error saving data
      }
    };
    setItem();
    const getItem = async () => {
        const item = await AsyncStorage.getItem('Yo yo')
        return item
    }
    console.log(getItem())
    return (
      <View>
        {/* <FlatList
          data={phoneNumbers}
          renderItem={({ item }) => (
            <View>
              <View>
                <Text>Name {item.name}</Text>
              </View>
              <View>
                <Text>Number: {item.phoneNumbers[0].number}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        /> */}
        <Text>Hello</Text>
      </View>
    );
  }
}

// BELOW ARE TWO (SEPARATED BY TWO BLANK LINES) ATTEMPTS TO GET CONTACT LIST
// AND USE IT IN THE APP. THIS DID NOT WORK AS HOPED. THOUGH CONTACTS WERE
// ACCESSIBLE, THEY FAILED TO BE MORE THAN A PROMISE OUTSIDE OF THE ASYNC
// FUNCTION IN BOTH ATTEMPTS.
// async function getContacts() {
//   const { data } = await Contacts.getContactsAsync();
//   if (data.length > 0) {
//     console.log(data);
//     return data[0];
//   }
// }
// const contacts = getContacts();
// // console.log(contacts)
// const phoneNumbers = contacts.filter(
//   contact => contact.contactType === 'person'
// );

// async function showFirstContactAsync() {
//     // Ask for permission to query contacts.
//     const permission = await Permissions.askAsync(Permissions.CONTACTS);

//     if (permission.status !== 'granted') {
//       // Permission was denied...
//       return;
//     }
//     const contacts = await Contacts.getContactsAsync({
//       fields: [
//         Contacts.PHONE_NUMBERS,
//         Contacts.EMAILS,
//       ],
//       pageSize: 10,
//       pageOffset: 0,
//     });
//     if (contacts.total > 0) {
//       Alert.alert(
//         'Your first contact is...',
//         `Name: ${contacts.data[0].name}\n` +
//         `Phone numbers: ${contacts.data[0].phoneNumbers[0].number}\n` +
//         `Emails: ${contacts.data[0].emails[0].email}`
//       );
//     }
//   }
//   showFirstContactAsync()
