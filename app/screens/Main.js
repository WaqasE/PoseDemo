import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Platform, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";

import Colors from '../colors/colorsPallete'
const { width, height } = Dimensions.get('screen')
export default function Main({ navigation, route }) {

    const { name } = route.params;
    const [status, setStatus] = useState('')
    const cam = useRef();


    useEffect(() => {
        getPermission();
        Camera.Constants.AutoFocus
    }, []);



    const getPermission = async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setStatus(status)
        // prevState.current=status
    }


    if (!status) {
        return (
            <View style={[styles.container, { backgroundColor: 'rgba(0,0,0,0.9)', justifyContent: 'center', alignItems: 'center' }]}>
                <Text>Camera Error</Text>
            </View>)
    }
    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden />
            <Camera style={{ flex: 1 }} ref={cam} type={Camera.Constants.Type.back} ratio={Platform.OS === 'android' ? '16:9' : null}
                onMountError={(error) => {
                    console.log("cammera error", error);
                }}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.iconBg}>
                            <MaterialCommunityIcons name="fire" size={24} color={Colors.secondary} />
                        </View>
                        <Text style={styles.text}>Hello {name}</Text>
                    </View>
                </View>
            </Camera>
            <View style={styles.overlay}>
                <Text style={styles.countDown}>0</Text>
            </View>
        </View>);
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        backgroundColor: Colors.dark,
        alignItems: 'center'
    },
    header: {
        width: '100%',
        paddingHorizontal: 30,
        height: 80,
        paddingTop: 40,
        flexDirection: 'row',
    },
    text: {
        fontSize: 20,
        textTransform: 'capitalize',
        color: Colors.secondary
    },
    iconBg: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: Colors.primaryPink,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    overlay: {
        position: 'absolute',
        width,
        height,
        backgroundColor: 'rgba(0, 0, 0,0.3)',
        justifyContent:'center',
        alignItems:'center'
    },
    countDown:{
        fontSize:100,
        color:Colors.primaryPink
    }
})
