/* eslint-disable react/no-multi-comp */
import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class Videos extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      listLoaded: false,
    };
  }

  componentDidMount() {
    return fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=cute+kittens&type=video&key=AIzaSyBFTd_2v5t9kRt5cbpYLiPIx30HPMBYLDQ`
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          listLoaded: true,
          videoList: Array.from(responseJson.items),
        });
      })
      .catch(error => {
        console.log(error);
      });
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        source={require('./img/sky.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Cute Kitten Videos!</Text>
        </View>
        <View>
          {this.state.listLoaded && (
            <View style={{ paddingTop: 30 }}>
              <FlatList
                data={this.state.videoList}
                renderItem={({ item }) => (
                  <TubeItem
                    navigate={navigate}
                    id={item.id.videoId}
                    title={item.snippet.title}
                    imageSrc={item.snippet.thumbnails.high.url}
                  />
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          )}
          {!this.state.listLoaded && (
            <View style={{ paddingTop: 30 }}>
              <Text> LOADING </Text>
            </View>
          )}
        </View>
      </ImageBackground>
    );
  }
}

export class TubeItem extends React.Component {

  onPress = () => {
    this.props.navigate('VideosDetail', { ytubeId: this.props.id });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => handleLearnMorePress(this.props.id)}>
        <View style={{ paddingTop: 20, alignItems: 'center' }}>
          <Image
            style={{ width: '100%', height: 200 }}
            source={{ uri: this.props.imageSrc }}
          />
          <Text>{this.props.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

function handleLearnMorePress(tubeId) {
  WebBrowser.openBrowserAsync(
    `https://www.youtube.com/embed/${tubeId}?&autoplay=1`
  );
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
});
