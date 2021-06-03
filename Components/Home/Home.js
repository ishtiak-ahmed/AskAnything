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
            <View style={styles.navbar}>
                <Text style={{ fontSize: '20px', flex: '1', marginRight: '2em' }}>AskAnything</Text>
                <Text style={{ fontSize: '20px', flex: '1' }}>{name}</Text>
            </View>
            {
                posts.map(post => <Question key={post.id} question={post.title}></Question>)
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '30px',
        padding: '10px'
    },
    navbar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        borderColor: 'lightgray',
        border: '1px solid gray',
        padding: '5px 10px'
    }
});