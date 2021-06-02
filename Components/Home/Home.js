import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { userContext } from '../../App';
import Question from '../Question/Question';

export default function Home() {
    const [name, setName] = useContext(userContext)
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data.slice(0, 10)))
    }, [])

    return (
        <View style={styles.container}>

            <Text style={{ fontSize: '30px', margin: '20px' }}>AskAnything</Text>
            <Text style={{ fontSize: '30px', margin: '20px' }}>Welcome back {name}</Text>
            {
                posts.map(post => <Question key={post.id} question={post.title}></Question>)
            }
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