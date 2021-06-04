import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ModifyContext, userContext } from '../../App';
import AskQuestion from '../AskQuestion/AskQuestion';
import { reverseArray } from '../Functions/Functions';
import Question from '../Question/Question';

export default function Home() {
    const [user, setUser] = useContext(userContext)
    const [modify, setModify] = useContext(ModifyContext)
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        fetch('https://ishtiak-blog.herokuapp.com/allQuestions')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    const sortedData = reverseArray(data)
                    setQuestions(sortedData)
                }
            }
            )
    }, [modify])

    return (
        <ScrollView style={styles.container}>
            <StatusBar style={{ height: 30, backgroundColor: 'red' }}></StatusBar>
            <View style={styles.navbar}>
                <Text style={{ fontSize: 20, flex: 1.5, lineHeight: 40, color: 'white' }}>AskAnything</Text>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, flex: 1, lineHeight: 40, color: 'white' }}>{user.fullName}</Text>
                    <Image source={{ uri: user.photo }} style={{ height: 40, width: 40, borderRadius: 20 }}></Image>
                </View>
            </View>
            <AskQuestion></AskQuestion>
            <View style={{ flex: 1, paddingBottom: 20 }}>
                {
                    questions.map(question => <Question key={question._id} question={question}></Question>)
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#004D40',
        fontSize: 30,
        padding: 10,
        paddingTop: 25,
        paddingBottom: 30
    },
    navbar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});