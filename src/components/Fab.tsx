import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

//estableces que propiedades puede recibir este componente
interface Props {
    title: string,
    onPress: () => number,
    position: 'br' | 'bl'
}
export const Fab = (props: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.75}
                style={[styles.fabLocation, (props.position === 'br') ? styles.right : styles.left]}
                onPress={props.onPress}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const android = () => {
        return (
            <View
                style={[styles.fabLocation, (props.position === 'br') ? styles.right : styles.left]}
            >
                <TouchableNativeFeedback
                    onPress={props.onPress}
                    background={TouchableNativeFeedback.Ripple('#28425B', false, 10, 30)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{props.title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    console.log(props.title);
    return (Platform.OS === 'ios')?ios():android(); 
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})