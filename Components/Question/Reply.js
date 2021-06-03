import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Reply({ ans }) {
    return (
        <View>
            <Text>{ans.content}</Text>
            <Text>By Replier</Text>
            <Button title='Up Vote'></Button>
            <Button title='Down Vote'></Button>
        </View>
    )
}
