import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { ModifyContext, userContext } from '../../App'

export default function AskQuestion() {
    const [user] = useContext(userContext)
    const [modify, setModify] = useContext(ModifyContext)
    const [addQuestion, setAddQuestion] = useState(false)
    const [newQuestion, setNewQuestion] = useState('')
    const handleAsk = () => {
        const question = {
            _id: `q${(new Date()).getTime()}`,
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
            .then(data => {
                if (data) {
                    setModify(modify + 1)
                }
            })
    }
    return (
        <View style={{ flex: 1, marginBottom: 20 }}>
            <TextInput style={styles.input} multiline={true} numberOfLines={2} onChangeText={(text) => setNewQuestion(text)} placeholder="Enter your question"></TextInput>
            <Button color='#00796B' onPress={() => handleAsk()} title='Add Question'></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        flex: 1,
        height: 60,
        borderRadius: 5,
        backgroundColor: '#00796B',
        color: 'black',
        marginBottom: 15
    },
});
