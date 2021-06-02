import React from 'react'
import { View, Text } from 'react-native'

export default function Question({ question }) {
    return (
        <View>
            <Text >What are the advantage fo React Native? {question}</Text>
            <View >
                <button>UpVote</button>
                <button>DownVote</button>
                <button>Reply</button>
            </View>
        </View>
    )
}
