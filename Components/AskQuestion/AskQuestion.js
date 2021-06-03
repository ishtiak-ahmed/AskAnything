import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'

export default function AskQuestion() {
    const [addQuestion, setAddQuestion] = useState(false)
    const [newQuestion, setNewQuestion] = useState('')
    return (
        <View>
            <Button onPress={() => setAddQuestion(true)} title="Ask A Question">Ask A Question</Button>
            {
                addQuestion ? <TextInput style={styles.input} onChangeText={text => setNewQuestion(text)} placeholder='enter your question'></TextInput> : ""
            }
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        border: '1px solid lightgray',
        padding: '10px',
        borderRadius: '5px',
        outline: 'none'
    }
});
