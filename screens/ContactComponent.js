import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  View,
  ImageBackground,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import call from 'react-native-phone-call';
import * as SMS from 'expo-sms';

export default class ContactComponent extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  makeCall(phoneNum) {
    const args = {
      number: phoneNum,
      prompt: false,
    };
    call(args).catch(console.error);
  }
  render() {
    const contact = this.props.navigation.getParam('item');
    const goodStuff = [...contact.goodStuff];
    const badStuff = [...contact.badStuff];
    const enjoys = [...contact.enjoys];
    const clearText = async () => {
      if (this.state.text === '') {
        Alert.alert('Please enter a text to send');
      } else {
        let message = this.state.text;
        this.setState({ text: '' });
        const isAvailable = await SMS.isAvailableAsync();
        if (isAvailable) {
          // do your SMS stuff here
          const { result } = await SMS.sendSMSAsync(
            [contact.phoneNumber],
            message
          );
          if (result === 'sent') {
            Alert.alert('Message sent!');
          } else {
            Alert.alert('Message canceled!');
          }
        } else {
          // misfortune... there's no SMS available on this device
          Alert.alert('Texting not available on this device!');
        }
      }
    };
    return (
      <ImageBackground
        source={require('./img/sky.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <KeyboardAwareScrollView>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{contact.name}</Text>
          </View>
          <View style={styles.concernedButtonContainer}>
            <Button
              onPress={() =>
                this.props.navigation.navigate('Concerned', { item: contact })
              }
              title="Concerned"
              raised
              type="outline"
              buttonStyle={styles.concernedButton}
            />
            <Button
              onPress={() => this.props.navigation.navigate('VeryConcerned')}
              title="Very Concerned"
              raised
              type="outline"
              buttonStyle={styles.veryConcernedButton}
            />
          </View>
          <View style={styles.information}>
            <Text>Happy Events:</Text>
            <FlatList
              data={goodStuff}
              renderItem={({ item }) => {
                return <Text style={{ marginLeft: 10 }}>{item}</Text>;
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={styles.information}>
            <Text>Stressors:</Text>
            <FlatList
              data={badStuff}
              renderItem={({ item }) => {
                return <Text style={{ marginLeft: 10 }}>{item}</Text>;
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={styles.information}>
            <Text>Likes:</Text>
            <FlatList
              data={enjoys}
              renderItem={({ item }) => {
                return <Text style={{ marginLeft: 10 }}>{item}</Text>;
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={styles.contactContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={newText => {
                this.setState({ text: newText });
              }}
              value={this.state.text}
              multiline={true}
              numberOfLines={5}
            />
            <View style={styles.buttonView}>
              <Button
                onPress={clearText}
                title="Send Text"
                raised
                type="outline"
                buttonStyle={styles.buttons}
              />
            </View>
            <View style={styles.buttonView}>
              <Button
                onPress={() => this.makeCall(contact.phoneNumber)}
                title="Call"
                raised
                type="outline"
                buttonStyle={styles.buttons}
              />
            </View>
          </View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.contactContainer2} />
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#48d1cc',
    height: 70,
    justifyContent: 'flex-end',
    borderBottomColor: '#00ced1',
    borderBottomWidth: 1,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: 'grey',
    shadowRadius: 2,
    shadowOpacity: 0.4,
    marginBottom: 10,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  concernedButtonContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
  contactContainer: {
    alignItems: 'center',
  },
  contactContainer2: {
    alignItems: 'center',
  },
  information: {
    flex: 1,
    marginTop: 3,
    marginBottom: 3,
    marginHorizontal: 50,
  },
  textInput: {
    flex: 100,
    width: '85%',
    height: 60,
    marginTop: 1,
    marginBottom: 4,
    paddingBottom: 100,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 1,
  },
  buttons: {
    backgroundColor: '#b0e0e6',
    width: 350,
    height: 50,
  },
  concernedButton: {
    backgroundColor: '#b0c4de',
    width: 175,
    height: 50,
  },
  veryConcernedButton: {
    backgroundColor: '#f08080',
    width: 175,
    height: 50,
  },
  buttonView: {
    marginTop: 2,
    marginBottom: 2,
  },
});
