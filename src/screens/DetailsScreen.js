import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const DetailsScreen = ({ }) => {
    return (
        <View style={styles.center}>
            <Text>Details</Text>
        </View>
    )
}

DetailsScreen.navigationOption = {
    headerTitle: 'Details',
    headerStyle: {
        backgroundColor: '#fff'
    },
    headerTintColor: 'black',
}

const styles = StyleSheet.create({
    center: {
       
    }
})