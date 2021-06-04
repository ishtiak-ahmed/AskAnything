import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Reply({ ans }) {
    return (
        <View>
            <Text>{ans.content}</Text>
            <Text style={{
                fontSize: 10,
                color: '#333'
            }}>By {ans.replier}</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ width: 150, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ backgroundColor: 'green', marginTop: 5, padding: 5, fontSize: 12, borderRadius: 5, color: 'white' }} onPress={() => console.log('voting up')}>Up Vote</Text>

                    <Text style={{ fontSize: 16, marginLeft: 10 }}>{ans.downVote.length}</Text>
                </View>
                <View style={{ width: 150, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ backgroundColor: 'red', marginTop: 5, padding: 5, fontSize: 12, borderRadius: 5, color: 'white' }} onPress={() => console.log('voting Down')}>Down Vote</Text>

                    <Text style={{ fontSize: 16, marginLeft: 10 }}>{ans.downVote.length}</Text>
                </View>
            </View>
        </View>
    )
}
