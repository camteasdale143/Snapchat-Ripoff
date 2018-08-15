import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  PanResponder,
  StyleSheet
} from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraView extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  flipCamera() {
    this.setState({
      type: this.state.type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    });
  }

  render() {
    const { flexOne, cameraViewContainerStyles, takePictureButtonContainer, takePictureButton, flipCameraTextStyle } = styles;
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={cameraViewContainerStyles}>
          <Camera style={flexOne} type={this.state.type}>
            <View
              style={takePictureButtonContainer}>
              <TouchableOpacity
                style={takePictureButton}
                onPress={this.flipCamera.bind(this)}>
                <Text
                  style={flipCameraTextStyle}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1
  },
  takePictureButtonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  takePictureButton: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  flipCameraTextStyle: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  cameraViewContainerStyles: {
    flex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%'
  }

})
