import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { userContext } from '../../App';
import AskQuestion from '../AskQuestion/AskQuestion';
import Question from '../Question/Question';

export default function Home() {
    const [user, setUser, modify, setModify] = useContext(userContext)
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://ishtiak-blog.herokuapp.com/allQuestions')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setPosts(data)
                    setModify(modify + 1)
                }
            }
            )
    }, [modify])

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Text style={{ fontSize: 20, flex: 1, marginRight: '2em' }}>AskAnything</Text>
                <Text style={{ fontSize: 20, flex: 1 }}>{user.fullName}</Text>
                <Image source={{ uri: user.photo }} style={{ height: '50px', width: '50px', borderRadius: '50%' }}></Image>
            </View>
            <AskQuestion></AskQuestion>
            {
                posts.map(post => <Question key={post._id} question={post.content}></Question>)
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        // padding: '10px'
    },
    navbar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        // borderColor: 'lightgray',
        // padding: '5px 10px'
    }
});