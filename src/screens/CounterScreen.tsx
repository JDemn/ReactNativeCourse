import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native';
import { useState } from 'react';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {
    const [counter, setcounter] = useState(1)
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            counter : {counter}
        </Text>

        <Fab
            title='+1'
            onPress={ ()=> setcounter( counter + 1)}
            position='br'
        />
        <Fab
            title='-1'
            onPress={ ()=> setcounter( counter - 1)}
            position='bl'
        />

        {/* <TouchableOpacity
            style={styles.fabLocationBL}
            onPress={ ()=> setcounter( counter - 1)}
        >
            <View style ={styles.fab}>
                <Text style={styles.fabText}>+1</Text>
            </View>
        </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center'
    },
    title:{
        textAlign:'center',
        fontSize:40,
    },
    fabLocationBL:{
        position:'absolute',
        bottom:25,
        left:25
    },
    
})
