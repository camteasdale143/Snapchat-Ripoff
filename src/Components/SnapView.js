import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class SnapView extends Component {
  render() {
    return(
      <View style={styles.snapContainer}>
        <Text>Snap List</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  snapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
