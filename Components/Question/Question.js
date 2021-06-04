import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'
import { ModifyContext, userContext } from '../../App'
import { reverseArray } from '../Functions/Functions'
import NewReply from './NewReply'
import Reply from './Reply'

export default function Question({ question }) {
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
    return (
        <View style={styles.container}>
            <View>
                <Text>{question.content}</Text>
                <Text style={styles.label}>by {question.asker}</Text>
            </View>
            <View style={styles.buttonGroup}>
                <Text style={styles.button} onPress={() => console.log('voting up')}>Up Vote</Text>
                <Text style={{ backgroundColor: 'red', marginTop: 5, padding: 5, fontSize: 12, borderRadius: 5, color: 'white' }} onPress={() => console.log('voting Down')}>Down Vote</Text>
                <Text style={styles.button} onPress={() => setShowReply(!showReply)}>Reply</Text>
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
