import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { userContext } from '../../App'

export default function AskQuestion() {
    const [user] = useContext(userContext)
    const [addQuestion, setAddQuestion] = useState(false)
    const [newQuestion, setNewQuestion] = useState('')
    const handleAsk = () => {
        const question = {
            _id: (new Date()).getTime(),
            content: newQuestion,
            asker: user.fullName,
            reply: [],
            upVote: [],
            downVote: []
        }
        console.log(question)
        fetch('https://ishtiak-blog.herokuapp.com/addQuestion', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(question)
        }).then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <View style={{ flex: 1 }}>
            <TextInput style={styles.input} multiline={true} numberOfLines={2} onChangeText={(text) => setNewQuestion(text)} placeholder="Enter your question"></TextInput>
            <Button style={styles.addButton} onPress={() => handleAsk()} title='Add Question'></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        width: 300,
        height: 60,
        borderRadius: 5,
        backgroundColor: '#00796B',
        color: 'white'
    },
    addButton: {
        width: 100,
        color: 'black',
        backgroundColor: '#80CBC4'
    }
});
