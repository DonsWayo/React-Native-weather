import React, { Component } from 'react';
import {StyleSheet, View, TextInput } from 'react-native';

export default class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text:'',
        }
    }
    changeSearchText = text => {
        this.setState({text})
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    autoCorrect={false}
                    value= {this.state.text}
                    placeholder={this.props.placeholder}
                    placeholderTextColor="#666"
                    style={styles.textInput}
                    clearButtonMode="always"
                    onChangeText={this.changeSearchText}
                    onSubmitEditing={this.submitEnging}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       height:40,
       marginTop:20
      },
    textInput: {
        backgroundColor: 'white',
        opacity: 0.8,
        color: 'black',
        height: 40,
        width: 300,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderRadius: 20,
        shadowColor: "black",
        shadowOpacity: 0.8,
        shadowRadius: 5,
        shadowOffset: {
            height: 3,
            width: 0,
        },

    }
});

