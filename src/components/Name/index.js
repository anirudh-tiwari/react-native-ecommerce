import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Name = ({label}) => {
  return (
    <Text style={[styles.container, styles.anotherContainer ]}>{ label }</Text>
  )
}

export default Name

const styles = StyleSheet.create({
    container : {
        fontSize: 22,
        color: 'red' 
    },
    anotherContainer : {
        backgroundColor: 'yellow' 
    },
})