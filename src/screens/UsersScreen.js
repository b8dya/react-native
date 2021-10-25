import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Button, StyleSheet } from 'react-native';

export const UsersScreen = ({ navigation }) => {


    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await response.json();
            setData(json)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <View>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.container}>
                            <View style={styles.item}>
                                <Text style={styles.name}> {item.name}</Text>
                                <Text style={styles.username}>@{item.username}</Text>
                                <Text style={styles.email}>email: {item.email}</Text>
                                <View style={styles.btn}>
                                    <Button title='Posts' onPress={() => navigation.navigate('Post')} color="black " ></Button>
                                </View>
                            </View>
                        </View>

                    )}

                />
            )}
        </View>
    )
}


UsersScreen.navigationOptions = {
    headerTitle: 'Users'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 4,
        borderWidth: 4,
        borderColor: "#303f5e",
        borderRadius: 8,
    },
    item: {
        padding: 10,
        backgroundColor: "#303f9f",
    },
    username: {
        color: 'white',
        fontSize: 25,
        
    },

    name: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
    },
    email: {
        color: 'white',
        paddingBottom: 10,
        fontSize: 20,
        borderRadius: 10,
    },
    btn: {
        backgroundColor: '#303f5e',
        borderRadius: 8,
    }

})