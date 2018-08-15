import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Multiview from './Containers/MultiView';
import CameraView from './Components/CameraView';
import SnapView from './Components/SnapView';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Multiview
          centerPage={ <CameraView width={SCREEN_WIDTH}/>}
          leftPage={ <SnapView /> }
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
