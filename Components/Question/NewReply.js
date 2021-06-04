import React, { useContext, useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { ModifyContext, userContext } from '../../App'

export default function NewReply({ ques }) {
    const [replyText, setReplyText] = useState('')
    const [user, setUser] = useContext(userContext)
    const [modify, setModify] = useContext(ModifyContext)
    const handleReply = () => {
        const reply = {
            _id: `ans${(new Date()).getTime()}`,
            content: replyText,
            replier: user.fullName,
            upVote: [],
            downVote: [],
            parent: `${ques}`
        }
        fetch('https://ishtiak-blog.herokuapp.com/addAnswer/', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(reply)
        }).then(res => res.json())
            .then(data => {
                setModify(modify + 1)
            })
    }
    return (
        <View style={{ paddingTop: 10, paddingBottom: 10, marginBottom: 10 }}>
            <TextInput
                style={{ borderRadius: 5, borderColor: '#333', borderWidth: .5, padding: 5, marginBottom: 5 }}
                onChangeText={text => setReplyText(text)} placeholder="Add a reply"
            >

            </TextInput>
            <Button onPress={handleReply} color="#004D40" title='Add Reply'></Button>
        </View>
    )
}
