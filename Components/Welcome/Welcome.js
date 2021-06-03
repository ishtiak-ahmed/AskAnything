import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { userContext } from '../../App';

export default function Welcome() {
    const [name, setName, page, setPage] = useContext(userContext)
    const [password, setPassword] = useState('')
    const handleLogin = () => {
        setPage('home')
    }
    return (
        <View style={styles.container}>
            <Text>Welcome to</Text>
            <Text style={{ fontSize: '30px', margin: '20px' }}>AskAnything</Text>
            <Text>Enter your email :</Text>
            <TextInput style={styles.input} placeholder='email' onChangeText={text => setName(text)}></TextInput>
            <Text>Enter your password :</Text>
            <TextInput style={styles.input} placeholder='password' type="password" onChangeText={text => setPassword(text)}></TextInput>
            <Button onPress={() => handleLogin}>
                <Text>Continue</Text>
                Continue
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '30px',
        padding: '10px'
    },
    input: {
        border: '1px solid lightgray',
        padding: '10px',
        borderRadius: '5px',
        outline: 'none'
    }
});