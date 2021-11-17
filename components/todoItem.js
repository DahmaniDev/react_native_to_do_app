import React , {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem ({item, pressHandler}) {
    return (
        
        <View style={styles.myView}>
            <Text style={styles.item}>{item.text}</Text>
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <MaterialIcons name='delete' color='coral' size={25}/>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    item:{
        padding: 16,
        
    },
    myView : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        padding: 5,
        marginBottom: 10
    },
})