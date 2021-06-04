import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'
import { ModifyContext, userContext } from '../../App'
import { reverseArray } from '../Functions/Functions'
import NewReply from './NewReply'
import Reply from './Reply'

export default function Question({ question }) {
    const [user] = useContext(userContext)
    const [showReply, setShowReply] = useState(false)
    const [modify, setModify] = useContext(ModifyContext)
    const [allAns, setAllAns] = useState([])
    useEffect(() => {
        fetch(`https://ishtiak-blog.herokuapp.com/getAnswer/${question._id}`)
            .then(res => res.json())
            .then(replies => {
                const sorted = reverseArray(replies)
                setAllAns(sorted)
            })
    }, [modify])

    const handleUpVote = () => {
        const newList = [...question.upVote, user.fullName]
        console.log(newList, question._id)
        fetch(`https://ishtiak-blog.herokuapp.com/updateQuetion/${question._id}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ upVote: newList })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                setModify(modify + 1)
            })
    }
    const handleDownVote = () => {
        const newList = [...question.downVote, user]
        fetch(`https://ishtiak-blog.herokuapp.com/updateQuetion/${question._id}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ downVote: newList })
        }).then(res => res.json())
            .then(data => {
                setModify(modify + 1)
            })

        console.log(newList)
    }

    return (
        <View style={styles.container}>
            <View>
                <Text>{question.content}</Text>
                <Text style={styles.label}>by {question.asker}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', }}>
                <View style={{ width: 150, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ backgroundColor: 'green', marginTop: 5, padding: 5, fontSize: 12, borderRadius: 5, color: 'white' }} onPress={handleUpVote}>Up Vote</Text>

                    <Text style={{ fontSize: 16, marginLeft: 10 }}>{question.upVote.length}</Text>
                </View>
                <View style={{ width: 150, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ backgroundColor: 'red', marginTop: 5, padding: 5, fontSize: 12, borderRadius: 5, color: 'white' }} onPress={handleDownVote}>Down Vote</Text>

                    <Text style={{ fontSize: 16, marginLeft: 10 }}>{question.downVote.length}</Text>
                </View>
                <View style={{ width: 150, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.button} onPress={() => setShowReply(!showReply)}>Reply</Text>


                </View>
            </View>
            <View>
                {showReply ?
                    <>
                        <NewReply ques={question._id}></NewReply>
                        {
                            allAns.length ?
                                allAns.map(ans => <Reply key={ans._id} ans={ans}></Reply>)
                                : <Text>This question has 0 answer.</Text>
                        }
                    </>
                    : <Text style={{ height: 1 }}></Text>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#4DB6AC',
        marginBottom: 15
    },
    buttonGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 14
    },
    label: {
        fontSize: 14,
        color: '#333'
    },
    button: {
        borderRadius: 5,
        backgroundColor: '#004D40',
        padding: 5,
        fontSize: 12,
        marginTop: 5,
        color: 'white'
    }
});
