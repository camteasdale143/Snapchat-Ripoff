import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import SnapList from './SnapMessageIndex/SnapList';

export default class SnapView extends Component {
  render() {
    return(
      <View style={styles.snapContainer}>
        <SnapList />
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
