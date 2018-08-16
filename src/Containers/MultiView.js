import React, { Component } from 'react';
import {
  Text,
  View,
  Animated,
  PanResponder,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const pages = {
  left: 0,
  middle: 1,
  right: 2,
}
export default class MultiView extends Component {


  render() {
    const { centerPage, leftPage } = this.props;

    return(

      <Swiper
        style={styles.wrapper}
        loop={false}
        showsPagination={false}
        index={1}
        bounces={true}
        scrollEnabled={this.props.swipingEnabled}
        >
        { leftPage }
        { centerPage }
        { leftPage }
      </Swiper>

    )
  }
}

const styles = StyleSheet.create({
  multiViewContainerStyle: {

  }
})
