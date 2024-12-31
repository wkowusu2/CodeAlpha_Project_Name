import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import EvilIcons from '@expo/vector-icons/EvilIcons';
const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{title: 'Your Events', headerStyle: {backgroundColor: '#8b4513',}, headerRight: () => { return (<TouchableOpacity><EvilIcons name="search" size={35} color="white" /></TouchableOpacity>)},headerTitleAlign: 'center', headerTitleStyle: {color: 'white'}}} />
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})