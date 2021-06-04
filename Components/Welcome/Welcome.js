import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { userContext } from '../../App';

export default function Welcome() {
    const [user, setUser, page, setPage] = useContext(userContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = () => {
        fetch('https://ishtiak-blog.herokuapp.com/login', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email, password })
        }).then(res => res.json())
            .then(data => {
                if (data) {
                    setUser(data)
                    setPage('home')
                }
            })
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25 }}>Welcome to</Text>
            <Text style={{ fontSize: 40, margin: 20 }}>AskAnything</Text>
            <Text style={styles.label}>Enter your email :</Text>
            <TextInput style={styles.input} placeholder='email' onChangeText={text => setEmail(text)}></TextInput>
            <Text style={styles.label}>Enter your password :</Text>
            <TextInput style={styles.input} secureTextEntry={true} placeholder='password' type="password" onChangeText={text => setPassword(text)}></TextInput>
            <View style={styles.loginBtn}>
                <Button onPress={() => handleLogin()} title="Login" color='#DD2C00'>
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        backgroundColor: '#26A69A',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        fontSize: 30,
        padding: 10
    },
    input: {
        fontSize: 16,
        textAlign: 'left',
        width: 250,
        borderWidth: .5,
        padding: 5,
        paddingLeft: 15,
        borderRadius: 5,
        borderColor: '#333',
        marginBottom: 10
    },
    label: {
        fontSize: 20,
        width: 250,
        textAlign: 'left',
        marginBottom: 5
    },
    loginBtn: {
        borderRadius: 5,
        flexDirection: 'row'
    }
});