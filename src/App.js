import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Multiview from './Containers/MultiView';
import CameraView from './Components/CameraView';
import SnapView from './Components/SnapView';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swipingEnabled: true,
    }
  }

  enableSwiping() {
    this.setState({
      swipingEnabled: true,
    })
  }

  disableSwiping() {
    this.setState({
      swipingEnabled: false,
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Multiview
          swipingEnabled={this.state.swipingEnabled}
          centerPage={ <CameraView
            enableSwiping={this.enableSwiping.bind(this)}
            disableSwiping={this.disableSwiping.bind(this)}
            />}
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
