import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
export default class MultiView extends Component {
  render() {
    const { centerPage } = this.props;
    return(
      <View style={{flex: 1}}>
        { centerPage }
      </View>
    )
  }
}
