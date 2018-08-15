import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Multiview from './Containers/MultiView';
import CameraView from './Components/CameraView';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Multiview
          centerPage={ <CameraView />}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
