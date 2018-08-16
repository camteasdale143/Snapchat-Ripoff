import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  PanResponder,
  StyleSheet,
  Animated,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { Camera, Permissions } from 'expo';
import {Ionicons} from '@expo/vector-icons';

const SCREEN_HEIGHT = Dimensions.get('window').height;




export default class PhotoPreSend extends Component {
  constructor(props) {
    super(props);
    this.renderXButton = this.renderXButton.bind(this);
    this.getImageStyles = this.getImageStyles.bind(this);
    this.renderSendButton = this.renderSendButton.bind(this);
    this.getIconStyles = this.getIconStyles.bind(this);
  }


  async componentWillMount() {

  }

  renderXButton() {
    return (
      <TouchableOpacity onPress={this.props.onDeletePhoto}>>
        <Ionicons
          style={
            [this.getIconStyles(this.props.imageFlipped),
              {marginVertical: 30,marginHorizontal: 20,}
            ]}
          name="md-close" size={32}
          />
      </TouchableOpacity>
    )
  }

  renderSendButton() {
    return (
      <TouchableOpacity onPress={this.props.onSendPhoto}>>
        <View style={{borderRadius: 70, height: 70, width: 70, marginVertical: 20,marginHorizontal: 20, backgroundColor:'#6df', justifyContent: 'center', alignItems: 'center'}}>
          <Ionicons
            style={
              [this.getIconStyles(this.props.imageFlipped),
                {paddingTop: 5}
              ]}
            name="md-send" size={32}
            />
        </View>
      </TouchableOpacity>
    )
  }

  getImageStyles(imageFlipped) {
    return imageFlipped ? styles.imageFlippedStyle : styles.imageStyle
  }

  getIconStyles(imageFlipped) {
    return imageFlipped ? styles.iconFlippedStyle : styles.iconStyle
  }


  render() {
      return (
        <View style={styles.containerStyles}>
          <ImageBackground
          source={{uri: this.props.uri}}
          style={this.getImageStyles(this.props.imageFlipped)}>
            { this.renderXButton() }
            { this.renderSendButton() }
          </ImageBackground>
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  containerStyles: {
    flex: 1
  },
  imageStyle: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    transform: [{ scaleX: 1 }]
  },
  imageFlippedStyle: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    transform: [{ scaleX: -1 }]
  },
  iconStyle: {
    color: '#fff',
    transform: [{ scaleX: 1 }]
  },
  iconFlippedStyle: {
    color: '#fff',
    transform: [{ scaleX: -1 }]
  },
});
