import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { userContext } from '../../App';

export default function Welcome() {
    const [name, setName, page, setPage] = useContext(userContext)
    return (
        <View style={styles.container}>
            <Text>Welcome to</Text>
            <Text style={{ fontSize: '30px', margin: '20px' }}>AskAnything</Text>
            <Text>Enter your name :</Text>
            <TextInput placeholder='Name' onChangeText={text => setName(text)}></TextInput>
            <Button onPress={() => setPage('home')}>
                <Text>Continue</Text>
                Continue
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '30px'
    },
    input: {
        borderColor: 'lightgray',
        border: '1px solid gray',
        padding: '5px 10px'
    }
});