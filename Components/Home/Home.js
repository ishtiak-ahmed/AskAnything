import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { userContext } from '../../App';
import AskQuestion from '../AskQuestion/AskQuestion';
import Question from '../Question/Question';

export default function Home() {
    const [user, setUser, modify, setModify] = useContext(userContext)
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        fetch('https://ishtiak-blog.herokuapp.com/allQuestions')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setQuestions(data)
                }
            }
            )
    }, [modify])

    return (
        <View style={styles.container}>
            <StatusBar style={{ height: 30, backgroundColor: 'red' }}></StatusBar>
            <View style={styles.navbar}>
                <Text style={{ fontSize: 20, flex: 1.5, lineHeight: 40, color: 'white' }}>AskAnything</Text>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, flex: 1, lineHeight: 40, color: 'white' }}>{user.fullName}</Text>
                    <Image source={{ uri: user.photo }} style={{ height: 40, width: 40, borderRadius: 20 }}></Image>
                </View>
            </View>
            <AskQuestion></AskQuestion>
            {/* {
                questions.map(question => <Question key={question._id} question={question}></Question>)
            } */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#004D40',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        padding: 10,
        paddingTop: 25
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