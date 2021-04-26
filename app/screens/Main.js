import React from 'react';
import { StyleSheet, View, Dimensions, StatusBar, Text } from 'react-native';
import Colors from '../colors/colorsPallete'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

export default function Main({ navigation, route }) {
    const { name } = route.params;
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.iconBg}>
                        <MaterialCommunityIcons name="fire" size={24} color={Colors.secondary} />
                    </View>
                    <Text style={styles.text}>Hello {name}</Text>
                </View>
            </View>
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
    },
    iconBg: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: Colors.primaryPink,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});