import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Dimensions, ImageBackground, Image, StatusBar, Text, TouchableOpacity } from 'react-native';
import Colors from '../colors/colorsPallete'

const { width, height } = Dimensions.get('screen');


export default function Welcome({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <ImageBackground style={styles.imageBg} source={require('../assets/Welcome3.jpg')} />
            <View style={styles.bg} />
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Text style={styles.heading}><Text style={{ color: Colors.primaryPink }}>P</Text>ose <Text style={{ color: Colors.primaryBlue }}>D</Text>emo</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('Name')}} style={styles.btn}>
                <Text style={styles.btnText}>Start your Journey!</Text>
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
    btn:{
        width:'80%',
        height:50,
        backgroundColor:Colors.primaryPink,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:'10%'
    },
    btnText:{
        fontSize: 18,
        color: 'white',
    }
});