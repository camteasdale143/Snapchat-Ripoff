import React, { Component } from 'react';
import {
  Text,
  View,
  Animated,
  PanResponder,
  StyleSheet,
  Dimensions,
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const pages = {
  left: 0,
  middle: 1,
  right: 2,
}
export default class MultiView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewPositionX: new Animated.Value(0),
      currentPage: new Animated.Value(1),
    }

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gesture) => {

      },
      onPanResponderMove: (event, gesture) => {
        this.handlePan(gesture);
      },
      onPanResponderRelease: (event, gesture) => {
        this.handleRelease(gesture)
      },
      onPanResponderTerminate: (event, gesture) => {
      }
    })

    this.panResponder = panResponder;
    this.pageAnimation = null;
  }

  handlePan(gesture) {
    Animated.spring(this.state.viewPositionX, {
      toValue: gesture.dx,
      duration: 100,
    }).start()
  }

  handleRelease(gesture) {
    if (gesture.dx > 150 || gesture.vx > 1) {
      this.forceSlide('RIGHT', gesture.vx);
    }
    else if (gesture.dx < -150 || gesture.vx < -1) {
      this.forceSlide('LEFT', gesture.vx)
    }
    else {
      this.forceSlide('CENTER', gesture.vx)
    }
  }

  async forceSlide(direction, velocity) {
    console.log(velocity)
    this.pageAnimation ? this.pageAnimation.stop() : null;
    if (direction === 'LEFT' && this.state.currentPage._value >= 0.5) {
      this.pageAnimation = Animated.spring(this.state.currentPage, {
        toValue: this.state.currentPage._value - 1,
        duration: 100,
        velocity: velocity,
      }).start()

    } else if (direction === 'RIGHT' && this.state.currentPage._value <= 1){
      this.pageAnimation = Animated.spring(this.state.currentPage, {
        toValue: this.state.currentPage._value + 1,
        duration: 100,
        velocity: velocity,
      }).start()
    }
    Animated.spring(this.state.viewPositionX, {
      toValue: 0,
      duration: 100,
    }).start()

  }

  render() {
    const { centerPage, leftPage } = this.props;
    const { multiViewContainerStyle } = styles;
    currentPagePosition = this.state.currentPage.interpolate({
      inputRange: [0, 2],
      outputRange: [-SCREEN_WIDTH * 2, 0],
    })
    touchMovedPosition = this.state.viewPositionX.interpolate({
      inputRange: [-400, 400],
      outputRange: [-400, 400],
      extrapolate: 'clamp'
    });

    viewPosition = Animated.add(touchMovedPosition, currentPagePosition)

    return(
      <Animated.View style={[ {
        height: '100%',
        width: SCREEN_WIDTH * 3,
        position: 'absolute',
        left: viewPosition,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }]} { ...this.panResponder.panHandlers }>
        { leftPage }
        { centerPage }
        { leftPage }
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  multiViewContainerStyle: {

  }
})
