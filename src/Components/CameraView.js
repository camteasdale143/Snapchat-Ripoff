import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  PanResponder,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import { Camera, Permissions } from 'expo';
import CameraUIBottom from './Camera/CameraUIBottom';
import CameraUITop from './Camera/CameraUITop';
import PhotoPreSend from './Camera/PhotoPreSend';

const SCREEN_HEIGHT = Dimensions.get('window').height;




export default class CameraView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      takenPhoto: null
    };

    this.flipCamera = this.flipCamera.bind(this);
    this.snapPhoto = this.snapPhoto.bind(this);
    this.getView = this.getView.bind(this);
    this.renderCamera = this.renderCamera.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
  }


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

  async snapPhoto() {
    try {
      console.log('got photo');
      if (this.refs.camera) {
        console.log('recognized camera');
        await this.setState({
          takenPhoto: await this.refs.camera.takePictureAsync()
        })
      }
      console.log(this.state.takenPhoto)
      this.props.disableSwiping();
    }
    catch(err) {
      alert(err)
    }
  };

  deletePhoto() {
    this.setState({
      takenPhoto: null,
    })
    this.props.enableSwiping();
  }

  sendPhoto() {
    alert('photo sending is not yet implemented');
  }

  renderCamera() {
    const { cameraViewContainerStyles } = styles;
    const { flexOne, takePictureButtonContainer, takePictureButton, flipCameraTextStyle } = styles;
    return(
      <View style={[cameraViewContainerStyles, {width: this.props.width}]}>
        <Camera ref='camera'
          style={{flex: 1}} type={this.state.type}>
          <View style={styles.uiTopContainerStyles}>
            <CameraUITop flipCamera={ this.flipCamera }/>
          </View>
          <View style={styles.uiBottomContainerStyles}>
            <CameraUIBottom
              snapPhoto={this.snapPhoto}/>
          </View>
        </Camera>
      </View>
    )
  }
  getView() {
    if (this.state.takenPhoto !== null) {
      return(
        <PhotoPreSend
          uri={this.state.takenPhoto.uri}
          onDeletePhoto={this.deletePhoto.bind(this)}
          onSendPhoto={this.sendPhoto}
          imageFlipped={(this.state.type === Camera.Constants.Type.front)}
          />
      )
    }
    else {
      return (
        this.renderCamera()
      )
    }
  }

  render() {
    const { cameraViewContainerStyles } = styles;
    const { flexOne, takePictureButtonContainer, takePictureButton, flipCameraTextStyle } = styles;
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        this.getView()
      );
    }

  }
}

const styles = StyleSheet.create({
  uiTopContainerStyles: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  uiBottomContainerStyles: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraViewContainerStyles: {
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  }

})
