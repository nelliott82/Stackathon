import React from 'react';
import { Image, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default class VideosDetail extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    let tubeId = this.props.navigation.getParam('ytubeId', 'NO VIDEO');
    let tubeUrl = `https://www.youtube.com/embed/${tubeId}?&autoplay=1`;
    return (
      <View>
        <View>
          <Image
            style={{ width: '100%', height: 200 }}
            source={require('./img/cutekitty.jpg')}
          />
        </View>
        <View>
          <Image
            style={{ width: '100%', height: 200 }}
            source={require('./img/cutekitty2.jpg')}
          />
        </View>
        <View>
          <Image
            style={{ width: '100%', height: 200 }}
            source={require('./img/cutekitty3.jpg')}
          />
        </View>
      </View>
    );
  }
}

function handleLearnMorePress(tubeId) {
  WebBrowser.openBrowserAsync(
    `https://www.youtube.com/embed/${tubeId}?&autoplay=1`
  );
}