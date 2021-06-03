import React, { useContext, useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { userContext } from '../../App'

export default function NewReply({ ques }) {
    const [replyText, setReplyText] = useState('')
    const [user, setUser] = useContext(userContext)
    const handleReply = () => {
        const reply = {
            _id: `ans${(new Date()).getTime()}`,
            content: replyText,
            replier: user.fullName,
            upVote: [],
            downVote: [],
            parent: `${ques}`
        }
        console.log(reply)
        fetch('https://ishtiak-blog.herokuapp.com/addAnswer/', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(reply)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <View>
            <TextInput onChangeText={text => setReplyText(text)} placeholder="Add a reply"></TextInput>
            <Button onPress={handleReply} title='Add Reply'></Button>
        </View>
    )
}
