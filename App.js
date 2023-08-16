import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: ''
    };
    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    this.setState({
      nome: 'H E L L O   W O R L D'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 0, backgroundColor: '#222'}}>

        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.customButton}
            underlayColor="grey"
            onPress={this.entrar}
          >
            <Text style={[styles.buttonText]}>Clique aqui</Text>
          </TouchableHighlight>
        </View>
        <Text style={[styles.text]}>
          {this.state.nome}
        </Text>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  buttonContainer: {
    marginBottom: 20,
  },
  customButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  text: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginTop: -150,
  },
});

export default App;