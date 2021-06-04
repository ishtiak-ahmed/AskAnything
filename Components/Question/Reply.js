import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { ModifyContext, userContext } from '../../App'

export default function Reply({ ans }) {
    const [user] = useContext(userContext)
    const [modify, setModify] = useContext(ModifyContext)
    const handleUpVote = () => {
        const newList = [...ans.upVote, user.fullName]
        fetch(`https://ishtiak-blog.herokuapp.com/updateAnswer/${ans._id}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ upVote: newList })
        }).then(res => res.json())
            .then(data => {
                setModify(modify + 1)
            })
    }
    const handleDownVote = () => {
        const newList = [...ans.downVote, user]
        fetch(`https://ishtiak-blog.herokuapp.com/updateAnswer/${ans._id}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ downVote: newList })
        }).then(res => res.json())
            .then(data => {
                setModify(modify + 1)
            })
    }
    return (
        <View style={{ paddingLeft: 10 }}>
            <Text>{ans.content}</Text>
            <Text style={{
                fontSize: 10,
                color: '#333'
            }}>By {ans.replier}</Text>
            <View style={{ flex: 1, flexDirection: 'row', }}>
                <View style={{ width: 150, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ backgroundColor: 'green', marginTop: 5, padding: 5, fontSize: 12, borderRadius: 5, color: 'white' }} onPress={handleUpVote}>Up Vote</Text>

                    <Text style={{ fontSize: 16, marginLeft: 10 }}>{ans.upVote.length}</Text>
                </View>
                <View style={{ width: 150, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ backgroundColor: 'red', marginTop: 5, padding: 5, fontSize: 12, borderRadius: 5, color: 'white' }} onPress={handleDownVote}>Down Vote</Text>

                    <Text style={{ fontSize: 16, marginLeft: 10 }}>{ans.downVote.length}</Text>
                </View>
            </View>
        </View>
    )
}
