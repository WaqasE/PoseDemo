import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Dimensions, ImageBackground, Image, StatusBar, Text, TouchableOpacity, TextInput } from 'react-native';
import Colors from '../colors/colorsPallete'

const { width, height } = Dimensions.get('screen');


export default function Name({ navigation }) {
    const [name, setName] = useState('');
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <ImageBackground style={styles.imageBg} source={require('../assets/Welcome3.jpg')} />
            <View style={styles.bg} />
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Text style={styles.heading}><Text style={{ color: Colors.primaryPink }}>P</Text>ose <Text style={{ color: Colors.primaryBlue }}>D</Text>emo</Text>
            <View style={styles.textInput}>
                <TextInput
                    style={styles.input}
                    onChangeText={(name) => { setName(name) }}
                    value={name}
                />
            </View>
            <TouchableOpacity onPress={() => { name ? navigation.navigate('Main', {name:name}) : null }} style={[styles.btn,{backgroundColor:name?Colors.primaryPink:Colors.secondary}]}>
                <Text style={[styles.btnText, {color:name?Colors.secondary:Colors.dark}]}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        backgroundColor: Colors.secondary,
        alignItems: 'center'
    },
    imageBg: {
        width,
        height,
    },
    bg: {
        width,
        height,
        backgroundColor: 'rgba(0, 0, 0,0.5)',
        position: 'absolute',
        zIndex: 0
    },
    logo: {
        position: 'absolute',
        width: 100,
        height: 50,
        top: 100,
    },
    heading: {
        fontSize: 30,
        color: 'white',
        position: 'absolute',
        top: 170
    },
    btn: {
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 320,
        paddingHorizontal: 50,
    },
    btnText: {
        fontSize: 18,
        color: 'white',
    },
    textInput: {
        width: width - 50,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        height: 50,
        position: 'absolute',
        top: 250,
        borderRadius: 25
    },
    input: {
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        height: '100%',
        borderRadius: 25,
        paddingHorizontal: 30,
        fontSize: 20,
        color: 'black'
    }

});