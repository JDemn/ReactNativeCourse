import React from 'react'
import {View, StyleSheet} from 'react-native';


export const PosicionScreen = () => {
  return (
    <View style = {styles.container}>
        <View style = {styles.cajaMorada}/>
        <View style = {styles.cajaNaranja}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#28C4D9",
        justifyContent : 'center',
        alignItems : 'center'
    },
    cajaMorada : {
        width : 100,
        height : 100,
        backgroundColor : "5856D6",
        borderWidth : 10,
        borderColor : 'white',
        position : 'absolute',
        top : 0,
        left : 0
    },
    cajaNaranja : {
        width : 100,
        height : 100,
        backgroundColor : "#F0A23B",
        borderWidth : 10,
        borderColor : 'white',
        position :'absolute',
        right : 0,
        bottom : 0
    }
});
