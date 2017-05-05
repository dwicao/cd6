import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const API_URL = 'https://jsonplaceholder.typicode.com';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSismiop: [],
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/posts`)
      .then(res => res.json())
      .then(data => {
        this.setState({ dataSismiop: data });
      })
      .catch(err => console.log('err', err))
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.dataSismiop.map((item, index) => (
            <Text key={index}>{item.title}</Text>
          ))
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
