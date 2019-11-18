/* eslint-disable react/no-multi-comp */
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from 'react-native';
import { Button } from 'react-native-elements';
import Header from './Header';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsArr: [
        {
          name: 'Jane Doe',
          phoneNumber: '1234567890',
          goodStuff: [
            'Went to California recently',
            'Dad was featured by POW group',
          ],
          badStuff: ['Planning German Christmas Market', 'Job search'],
          enjoys: ['Downton Abbey', 'Mulled wine', 'Animals'],
          priority: 2,
        },
        {
          name: 'Jasmine Wang',
          phoneNumber: '',
          goodStuff: [
            'Made a great app',
            'Passed Junior Phase',
            'Bench pressed 300lbs',
          ],
          badStuff: ['Capstone', 'Job search', 'Talking to Nikko'],
          enjoys: [
            'Ramen eggs',
            'Hayao Miyazaki films',
            'Board games',
            'Potatoland',
          ],
          priority: 8,
        },
        {
          name: 'John',
          phoneNumber: '1234567890',
          goodStuff: [
            'Bought condo',
            'Promoted to manager',
            'Trip to Vegas soon',
          ],
          badStuff: ['Dog is sick', 'Car needs repairs'],
          enjoys: ['Gin', 'Star Trek', 'Hiking'],
          priority: 7,
        },
        {
          name: 'Lisa',
          phoneNumber: '1234567890',
          goodStuff: ['Bought a house', 'Remodeled bathroom', 'Sold condo'],
          badStuff: ['Misses daughter', 'Mom passed away'],
          enjoys: ['Making fun of Nikko', 'Simpsons', 'Craft beer'],
          priority: 4,
        },
      ],
      addContact: false,
      newContact: {
        name: '',
        phoneNumber: '',
        goodStuff: [],
        badStuff: [],
        enjoys: [],
        priority: '',
      },
    };
  }
  handleAddContact = () => {
    console.log(this.state.addContact);
    this.setState({
      addContact: !this.state.addContact,
    });
  };
  render() {
    const { navigate } = this.props.navigation;
    const contacts = this.state.contactsArr.sort(function(a, b) {
      if (a.priority < b.priority) return 1;
      else if (a.priority > b.priority) return -1;
      return 0;
    });
    return (
      <ImageBackground
        source={require('./img/sky.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles.container}>
          <Header message="hello, world" />
          <View style={styles.container}>
            <ScrollView
              style={styles.container}
              contentContainerStyle={styles.contentContainer}
            >
              <View>
                <Text style={styles.titleText}>Contacts</Text>
              </View>
              <View style={{ paddingTop: 30 }}>
                <FlatList
                  data={contacts}
                  renderItem={({ item }) => (
                    <ContactItem
                      navigate={navigate}
                      name={item.name}
                      item={item}
                    />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>

              <View style={styles.addContactContainer}>
                <View style={styles.buttonView}>
                  <Button
                    onPress={() => this.props.navigation.navigate('Videos')}
                    title="Add a Contact"
                    raised
                    type="outline"
                    buttonStyle={styles.buttons}
                  />
                </View>
              </View>
              <View>
                {this.state.addContact && (
                  <View>
                    <TextInput
                      style={styles.textInput}
                      onChangeText={newText => {
                        this.setState({ text: newText });
                      }}
                      value={this.state.newContact.name}
                      multiline={false}
                      numberOfLines={1}
                    />
                  </View>
                )}
                {!this.state.addContact && null}
              </View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

export class ContactItem extends React.Component {
  onPress = () => {
    this.props.navigate('ContactComponent', {
      item: this.props.item,
    });
  };

  render() {
    return (
      <View style={styles.getStartedContainer}>
        <View style={styles.buttonView}>
          <Button
            onPress={this.onPress}
            title={this.props.name}
            raised
            type="outline"
            buttonStyle={styles.buttons}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  developmentModeText: {
    marginBottom: 20,
    color: '#ffffff',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
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
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  addContactContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'black',
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: '#ffffff',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
