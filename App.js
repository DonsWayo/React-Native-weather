
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, KeyboardAvoidingView, ImageBackground, View } from 'react-native';
import SearchInput from './components/SearchInput';
import ImagesBackground from './utils/ImagesBackground';


export default class App extends Component {
  render() {
    //const location = 'Malaga';
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          source={ImagesBackground('Day')}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
        <View style={styles.detailsContainer}> 
        <Text style={styles.welcome}>{text}</Text>
        <Text style={styles.instructions}>Soleado</Text>
        <Text style={styles.welcome}>24º</Text>
        <SearchInput placeholder="search a city"/>
        </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  imageContainer: {
    flex: 1,
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color:'white'
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
    fontStyle: 'italic'

  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 20,
  },
 
    image: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
    }
});
