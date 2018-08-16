import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';


const CameraUIBottom = (props) => (
  <View style={styles.containerStyles}>
    <TouchableOpacity
      onPress={props.snapPhoto}>
      <View style={styles.takePhotoButtonStyles}/>
    </TouchableOpacity>
  </View>
)

//
const styles = StyleSheet.create({
  containerStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  takePhotoButtonStyles: {
    borderRadius: 15,
    width: 60,
    height: 60,
    borderWidth: 10,
    borderColor: 'white',
  }

})
export default CameraUIBottom
