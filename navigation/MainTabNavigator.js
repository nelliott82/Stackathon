import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ContactComponent from '../screens/ContactComponent';
import Videos from '../screens/Videos';
import VideosDetail from '../screens/VideosDetail';
import ContactList from '../screens/Contacts';
import Concerned from '../screens/Concerned';
import {
  VeryConcerned,
  QuestionOne,
  QuestionTwo,
  QuestionThree,
  QuestionFour,
  QuestionFive,
  QuestionSix,
  HighRisk,
  LowerRisk,
} from '../screens/VeryConcerned';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    ContactComponent: ContactComponent,
    Videos: Videos,
    VideosDetail: VideosDetail,
    Contacts: ContactList,
    Concerned: Concerned,
    VeryConcerned: VeryConcerned,
    QuestionOne: QuestionOne,
    QuestionTwo: QuestionTwo,
    QuestionThree: QuestionThree,
    QuestionFour: QuestionFour,
    QuestionFive: QuestionFive,
    QuestionSix: QuestionSix,
    HighRisk: HighRisk,
    LowerRisk: LowerRisk,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'ios-home'} />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-information-circle'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  // SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
