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
        <View>
            <Button onPress={() => setAddQuestion(!addQuestion)} title="Ask A Question">Ask A Question</Button>
            {
                addQuestion ?
                    <>
                        <TextInput style={styles.input} onChangeText={text => setNewQuestion(text)} placeholder='enter your question'></TextInput>
                        <Button onPress={handleAsk} title='Ask'></Button>
                    </> : ""
            }
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderRadius: 5,
    }
});
