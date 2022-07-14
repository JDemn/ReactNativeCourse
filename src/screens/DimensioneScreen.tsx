import React from 'react'
import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native'

// const { width, height } = Dimensions.get('window')

export const DimensioneScreen = () => {

  const {width, height} = useWindowDimensions() //get dimensions from the screen in real time

  return (
    <View>
      <View style={styles.box}>
        <View style={styles.cajaMorada}></View>
        <View style={styles.cajaAmarilla}></View>
      </View>
      <Text style={styles.text}>{width}</Text>
      <Text style={styles.text}>{height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    textAlign:'center'
  },
  box: {
    borderWidth: 1,
    marginTop: 16,
    marginHorizontal: 15
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    width: '100%',
    height: '50%'
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
    width: '100%',
    height: '50%'
  }
});