import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'

export default function Question({ question }) {
    return (
        <View>
            <Text >{question}</Text>
            <View style={styles.buttonGroup}>
                <button>UpVote</button>
                <button>DownVote</button>
                <button>Reply</button>
            </View>
            <TextInput placeholder='ans'></TextInput>
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
