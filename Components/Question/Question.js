import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'
import { userContext } from '../../App'
import NewReply from './NewReply'
import Reply from './Reply'

export default function Question({ question }) {
    const [showReply, setShowReply] = useState(false)
    const [allAns, setAllAns] = useState([])
    useEffect(() => {
        fetch(`https://ishtiak-blog.herokuapp.com/getAnswer/${question._id}`)
            .then(res => res.json())
            .then(replies => setAllAns(replies))
    }, [])
    return (
        <View style={styles.container}>
            <View>
                <Text>{question.content}</Text>
                <Text style={styles.label}>by {question.asker}</Text>
            </View>
            <View style={styles.buttonGroup}>
                <Button title="Up Vote"></Button>
                <Button title="Up Vote"></Button>
                <Button onPress={() => setShowReply(!showReply)} title='Reply'></Button>
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
        backgroundColor: '#00796B',
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
    }
});
