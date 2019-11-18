/* eslint-disable quotes */
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RNPickerSelect from 'react-native-picker-select';
import call from 'react-native-phone-call';
import * as SMS from 'expo-sms';

export default class Concerned extends React.Component {
  // static navigationOptions = {
  //   header: null,
  // };
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  selectQuote = value => {
    this.setState({
      text: value,
    });
  };

  makeCall(phoneNum) {
    const args = {
      number: phoneNum,
      prompt: false,
    };
    call(args).catch(console.error);
  }
  render() {
    const contact = this.props.navigation.getParam('item');
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
          <View style={styles.concernedDisclaimer}>
            <Text>We encourage you to be sincere when talking to</Text>
            <Text>someone dealing with serious emotions. But, </Text>
            <Text>sometimes, we don't always know what to say.</Text>
            <Text>Here are some quotes/questions/jokes if you</Text>
            <Text>find yourself at a loss for words.</Text>
          </View>
          <View style={styles.information}>
            <Text>Song Lyrics:</Text>
            <RNPickerSelect
              placeholder={{
                label: 'Click here to select a song lyric...',
                value: null,
                color: '#a9a9a9',
              }}
              onValueChange={value => this.selectQuote(value)}
              style={styles.selector}
              items={[
                {
                  label: 'Ben Folds Five',
                  value:
                    "\"You're worried there might not be anything at all inside, but that you're worried should tell you that's not right.\" -Ben Folds Five 'Jane'",
                },
                {
                  label: 'Bright Eyes (1)',
                  value:
                    "\"Your eyes must do some raining if you're ever gonna grow.\" -Bright Eyes 'Bowl of Oranges'",
                },
                {
                  label: 'Bright Eyes (2)',
                  value:
                    "\"But you should never be embarassed by your trouble with living. Because it's the ones with the sorest throats, Laura, who have done the most singing.\" -Bright Eyes 'Laura Laurent'",
                },
              ]}
            />
          </View>
          <View style={styles.information}>
            <Text>Quotes:</Text>
            <RNPickerSelect
              placeholder={{
                label: 'Click here to select a quote...',
                value: null,
                color: '#a9a9a9',
              }}
              onValueChange={value => this.selectQuote(value)}
              style={styles.selector}
              items={[
                {
                  label: 'Ralph Waldo Emerson',
                  value:
                    '"When it is darkest, we can see the stars." -Ralph Waldo Emerson',
                },
                {
                  label: 'Richard Dawkins',
                  value:
                    '"We are going to die, and that makes us the lucky ones. Most people are never going to die because they are never going to be born. The potential people who could have been here in my place but who will in fact never see the light of day outnumber the sand grains of Arabia. Certainly those unborn ghosts include greater poets than Keats, scientists greater than Newton. We know this because the set of possible people allowed by our DNA so massively exceeds the set of actual people. In the teeth of these stupefying odds it is you and I, in our ordinariness, that are here." -Richard Dawkins',
                },
                {
                  label: 'Moon -Anonymous',
                  value:
                    '"The moon is a reminder that no matter what phase I\'m in, I\'m still whole." -Anonymous',
                },
                {
                  label: 'Sun -Anonymous',
                  value:
                    '"Even though we can\'t always see it, the sun is always shining." -Anonymous',
                },
              ]}
            />
          </View>
          <View style={styles.information}>
            <Text>Jokes:</Text>
            <RNPickerSelect
              placeholder={{
                label: 'Click here to select a joke...',
                value: null,
                color: '#a9a9a9',
              }}
              onValueChange={value => this.selectQuote(value)}
              style={styles.selector}
              items={[
                {
                  label: 'Man goes to funeral',
                  value:
                    'A man goes to a funeral and asks the widow: "Mind if I say a word?" She says: "Please do." The man clears his throat and says: "Plethora." The widow replies: "Thanks, that means a lot."',
                },
                {
                  label: 'Thesaurus',
                  value:
                    "I got a new thesaurus and not only is it terrible, it's also terrible.",
                },
                {
                  label: 'New Word',
                  value: "I invented a new word! 'Plagiarism'!",
                },
                {
                  label: 'Scrabble',
                  value:
                    'Yesterday I saw a guy spill all his Scrabble letters on the road. So, I asked him, "What\'s the word on the street?"',
                },
              ]}
            />
          </View>
          <View style={styles.information}>
            <Text>Questions:</Text>
            <RNPickerSelect
              placeholder={{
                label: 'Click here to select a question...',
                value: null,
                color: '#a9a9a9',
              }}
              onValueChange={value => this.selectQuote(value)}
              style={styles.selector}
              items={[
                {
                  label: 'Thoughts on Suicide',
                  value: 'What are your thoughts on suicide?',
                },
                {
                  label: 'Safety Plan',
                  value:
                    'Do you have a safety plan? If not, do you want to make one together?',
                },
                {
                  label: 'Thoughts Right Now',
                  value:
                    "What's on your mind right now? Anything bothering you?",
                },
                {
                  label: 'Help',
                  value: 'Is there anything I can do to help you right now?',
                },
              ]}
            />
          </View>
          <View style={styles.contactContainer1}>
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
  selector: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  concernedDisclaimer: {
    alignItems: 'center',
  },
  contactContainer1: {
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
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
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
  buttonView: {
    marginTop: 2,
    marginBottom: 2,
  },
});
