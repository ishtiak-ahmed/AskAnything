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
        <View>
            <Text >{question.content}</Text>
            <Text>by {question.asker}</Text>
            <View style={styles.buttonGroup}>
                <button>UpVote</button>
                <button>DownVote</button>
                <Button onPress={() => setShowReply(!showReply)} title='Reply'></Button>
            </View>
            { showReply ?
                <>
                    <NewReply ques={question._id}></NewReply>
                    {
                        allAns.length ?
                            allAns.map(ans => <Reply key={ans._id} ans={ans}></Reply>)
                            : <Text>This question has 0 answer.</Text>
                    }
                </>
                : <Text>No Reply</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    buttonGroup: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'lightblue',
        alignItems: 'center',
        fontSize: 30
    },
    input: {
        // borderColor: 'lightgray',
        // padding: '5px 10px'
    }
});
