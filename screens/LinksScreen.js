import React from 'react';
import { ScrollView, StyleSheet, View, Text, Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.about}>
        <Text style={styles.aboutText}>
          The 'how are you?' app is primarily designed to foster greater
          communication and connection between individuals regardless of their
          current mental state with a secondary and related goal of increasing
          suicide prevention. People who feel connected are less likely to
          commit suicide. With just the simple act of asking 'how are you?' you
          can begin the connection that helps save a human life.
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 20, marginLeft: 5 }}>Resources:</Text>
      </View>
      <View>
        <Text style={{ fontSize: 15, marginLeft: 10, marginTop: 5 }}>
          NPR: 'Reach Out: Ways To Help
        </Text>
        <Text style={{ fontSize: 15, marginLeft: 10, marginBottom: 5 }}>
          A Loved One At Risk Of Suicide
        </Text>
        <Button
          title="Link to the article"
          onPress={handleLearnMoreNPR}
          style={{ fontSize: 12, marginLeft: 10 }}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 15,
            marginLeft: 10,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          The Colombia Protocol
        </Text>
        <Button
          title="Link to more info"
          onPress={handleLearnMoreColombia}
          style={{ fontSize: 12, marginLeft: 10 }}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 15,
            marginLeft: 10,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          The American Foundation for Suicide Prevention
        </Text>
        <Button
          title="Link to more info"
          onPress={handleLearnMoreAFSP}
          style={{ fontSize: 12, marginLeft: 10 }}
        />
      </View>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'About',
};

function handleLearnMoreNPR() {
  WebBrowser.openBrowserAsync(
    'https://www.npr.org/sections/health-shots/2019/04/20/707686101/reach-out-ways-to-help-a-loved-one-at-risk-of-suicide'
  );
}

function handleLearnMoreColombia() {
  WebBrowser.openBrowserAsync(
    'http://cssrs.columbia.edu/the-columbia-scale-c-ssrs/about-the-scale/'
  );
}

function handleLearnMoreAFSP() {
  WebBrowser.openBrowserAsync(
    'https://afsp.org/our-work/education/talk-saves-lives-introduction-suicide-prevention/'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  about: {
    alignItems: 'center',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 15,
  },
});
