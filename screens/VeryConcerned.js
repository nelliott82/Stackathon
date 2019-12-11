/* eslint-disable react/no-multi-comp */
import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import call from 'react-native-phone-call';
import * as SMS from 'expo-sms';

export class VeryConcerned extends React.Component {
  // static navigationOptions = {
  //   header: null,
  // };

  render() {
    return (
      <ImageBackground
        source={require('./img/sky.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>The Colombia Protocol</Text>
        </View>
        <View style={styles.concernedDisclaimer}>
          <Text>
            The Colombia Protocol is a series of up to six, simple, yes or no
            questions and can be administered by anyone. It is designed to help
            professionals and ordinary people determine who needs immediate
            help. It is based on 20 years of scientific study and is in use in
            45 nations and 6 continents.
          </Text>
        </View>
        <View style={styles.concernedDisclaimer}>
          <Text>
            Do not worry about keeping track of the answers. The quiz will tell
            you the next steps based on the responses you enter.
          </Text>
        </View>
        <View style={styles.contactContainer}>
          <View style={styles.buttonView}>
            <Button
              onPress={() => this.props.navigation.navigate('QuestionOne')}
              title="Begin Questions"
              raised
              type="outline"
              buttonStyle={{
                backgroundColor: '#b0e0e6',
                width: 350,
                height: 50,
              }}
            />
          </View>
        </View>
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
  questionText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  concernedDisclaimer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  contactContainer: {
    alignItems: 'center',
  },
  buttonView: {
    marginTop: 2,
    marginBottom: 2,
  },
  buttons: {
    backgroundColor: '#b0e0e6',
    width: 350,
    height: 50,
  },
});

export class QuestionOne extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ImageBackground
        source={require('./img/sky.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles2.headerContainer}>
          <Text style={styles2.headerText}>Question 1</Text>
        </View>
        <View style={styles2.concernedDisclaimer}>
          <Text style={styles2.questionText}>
            Have you ever wished you were dead or wished you could go to sleep
            and not wake up?
          </Text>
        </View>
        <View style={styles2.responseContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('QuestionTwo')}
            title="Yes"
            raised
            type="outline"
            buttonStyle={styles2.buttons}
          />
          <Button
            onPress={() => this.props.navigation.navigate('QuestionTwo')}
            title="No"
            raised
            type="outline"
            buttonStyle={styles2.buttons}
          />
        </View>
      </ImageBackground>
    );
  }
}

export class QuestionTwo extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ImageBackground
        source={require('./img/sky.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles2.headerContainer}>
          <Text style={styles2.headerText}>Question 2</Text>
        </View>
        <View style={styles2.concernedDisclaimer}>
          <Text style={styles2.questionText}>
            Have you actually had any thoughts about killing yourself?
          </Text>
        </View>
        <View style={styles2.responseContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('QuestionThree')}
            title="Yes"
            raised
            type="outline"
            buttonStyle={styles2.buttons}
          />
          <Button
            onPress={() => this.props.navigation.navigate('QuestionSix')}
            title="No"
            raised
            type="outline"
            buttonStyle={styles2.buttons}
          />
        </View>
      </ImageBackground>
    );
  }
}

export class QuestionThree extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ImageBackground
        source={require('./img/sky.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles2.headerContainer}>
          <Text style={styles2.headerText}>Question 3</Text>
        </View>
        <View style={styles2.concernedDisclaimer}>
          <Text style={styles2.questionText}>
            Have you thought about how you might do this?
          </Text>
        </View>
        <View style={styles2.responseContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('QuestionFour')}
            title="Yes"
            raised
            type="outline"
            buttonStyle={styles2.buttons}
          />
          <Button
            onPress={() => this.props.navigation.navigate('QuestionFour')}
            title="No"
            raised
            type="outline"
            buttonStyle={styles2.buttons}
          />
        </View>
      </ImageBackground>
    );
  }
}

export class QuestionFour extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ImageBackground
        source={require('./img/sky.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles2.headerContainer}>
          <Text style={styles2.headerText}>Question 4</Text>
        </View>
        <View style={styles2.concernedDisclaimer}>
          <Text style={styles2.questionText}>
            Have you had any intention of acting on these thoughts of killing
            yourself, as opposed to you have the thoughts but you definitely
            would not act on them?
          </Text>
        </View>
        <View style={styles2.responseContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('HighRisk')}
            title="Yes"
            raised
            type="outline"
            buttonStyle={styles2.buttons}
          />
          <Button
            onPress={() => this.props.navigation.navigate('QuestionFive')}
            title="No"
            raised
            type="outline"
            buttonStyle={styles2.buttons}
          />
        </View>
      </ImageBackground>
    );
  }
}

export class QuestionFive extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ImageBackground
        source={require('./img/sky.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles2.headerContainer}>
          <Text style={styles2.headerText}>Question 5</Text>
        </View>
        <View style={styles2.concernedDisclaimer}>
          <Text style={styles2.questionText}>
            Have you started to work out or worked out the details of how to
            kill yourself? Do you intend to carry out this plan?
          </Text>
        </View>
        <View style={styles2.responseContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('HighRisk')}
            title="Yes"
            raised
            type="outline"
            buttonStyle={styles2.buttons}
          />
          <Button
            onPress={() => this.props.navigation.navigate('QuestionSix')}
            title="No"
            raised
            type="outline"
            buttonStyle={styles2.buttons}
          />
        </View>
      </ImageBackground>
    );
  }
}

export class QuestionSix extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ImageBackground
        source={require('./img/sky.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles2.headerContainer}>
          <Text style={styles2.headerText}>Question 6</Text>
        </View>
        <View style={styles2.concernedDisclaimer}>
          <Text style={styles2.questionText}>
            Have you done anything, started to do anything, or prepared to do
            anything to end your life?
          </Text>
        </View>
        <View style={styles2.responseContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('HighRisk')}
            title="Yes"
            raised
            type="outline"
            buttonStyle={styles2.buttons}
          />
          <Button
            onPress={() => this.props.navigation.navigate('LowerRisk')}
            title="No"
            raised
            type="outline"
            buttonStyle={styles2.buttons}
          />
        </View>
      </ImageBackground>
    );
  }
}

export class HighRisk extends React.Component {
  static navigationOptions = {
    header: null,
  };
  call1800() {
    const args = {
      number: '8002738255',
      prompt: false,
    };
    call(args).catch(console.error);
  }
  call911() {
    const args = {
      number: '911',
      prompt: false,
    };
    call(args).catch(console.error);
  }
  render() {
    const text741741 = async () => {
      const isAvailable = await SMS.isAvailableAsync();
      if (isAvailable) {
        // do your SMS stuff here
        const { result } = await SMS.sendSMSAsync(
          ['741741'],
          'Hello. I have someone who needs immediate help.'
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
    };
    return (
      <ImageBackground
        source={require('./img/sky.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles2.emergencyHeaderContainer}>
          <Text style={styles2.headerText}>EMERGENCY</Text>
        </View>
        <View style={styles2.concernedDisclaimer}>
          <Text style={styles2.highRiskText}>
            The responses to these questions indicate the respondent is in
            IMMEDIATE need of help. Escort them to Emergency Personnel for care.
          </Text>
        </View>
        <View style={styles2.concernedDisclaimer}>
          <Button
            onPress={this.call1800}
            title="Call 1-800-273-8255"
            raised
            type="outline"
            buttonStyle={{
              backgroundColor: '#b0e0e6',
              width: 250,
              height: 50,
            }}
          />
          <Text style={styles2.highRiskText}>OR</Text>
          <Button
            onPress={text741741}
            title="Text 741741"
            raised
            type="outline"
            buttonStyle={styles2.buttons}
          />
          <Text style={styles2.highRiskText}>OR</Text>
          <Button
            onPress={this.call911}
            title="Call 911"
            raised
            type="outline"
            buttonStyle={styles2.buttons}
          />
        </View>
        <View style={styles2.concernedDisclaimer}>
          <Text style={styles2.highRiskText}>
            If you are with them, DO NOT leave their side until help arrives. If
            you are not with them, contact someone who is, or nearby, and inform
            them of the situation.
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

export class LowerRisk extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ImageBackground
        source={require('./img/sky.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles2.headerContainer}>
          <Text style={styles2.headerText}>Lower Risk</Text>
        </View>
        <View style={styles2.concernedDisclaimer}>
          <Text style={styles2.questionText}>
            Although the respondent's answers to these questions do not indicate
            an immediate need for help at this time, any responses of "Yes"
            would indicate the need for further care. You can assist them by
            helping them find and visit a trusted mental health provider and/or
            establishing a safety plan.
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles2 = StyleSheet.create({
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
  emergencyHeaderContainer: {
    backgroundColor: 'red',
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
  questionText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  highRiskText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
  concernedDisclaimer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  contactContainer: {
    alignItems: 'center',
  },
  responseContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
  buttons: {
    backgroundColor: '#b0e0e6',
    width: 175,
    height: 50,
  },
});
