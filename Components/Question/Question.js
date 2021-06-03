import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function Question({ question }) {
    return (
        <View>
            <Text >What are the advantage fo React Native? {question}</Text>
            <View style={styles.buttonGroup}>
                <button>UpVote</button>
                <button>DownVote</button>
                <button>Reply</button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonGroup: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'lightblue',
        alignItems: 'center',
        fontSize: '30px'
    },
    input: {
        borderColor: 'lightgray',
        border: '1px solid gray',
        padding: '5px 10px'
    }
});
