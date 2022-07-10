import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
        <Text style ={styles.title }>
            Box object models
        </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red'
    },
    title:{
        fontSize:25,
    }
});