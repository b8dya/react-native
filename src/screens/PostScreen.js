import React, { useEffect, useState } from 'react';
import { ActivityIndicator,  FlatList, Text, View, Button, StyleSheet } from 'react-native';

export const PostScreen = ({ navigation }) => {


    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
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
       
        
        <View >
            <View style={styles.btnAddNew}>
            <Button title='Add New' onPress={() => navigation.navigate('AddNew') } color="black "/>
            </View>
            
            {isLoading ? <ActivityIndicator /> : (
                
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id.toString()}

                    renderItem={({ item }) => (
                        <View style={styles.container}>
                            <View style={styles.item}>
                                <Text style={styles.title} >{item.title}</Text>
                                <Text style={styles.body}> {item.body}</Text>
                                <View style={styles.btn}>
                                    <Button title='Details' onPress={() => navigation.navigate('Details')} color="black " ></Button>
                                    <Button title='Post Info' onPress={() => navigation.navigate('PostInfo')} color="black " ></Button>
                                </View>
                            </View>
                        </View>
                    )}
                />
                
            )
            }
        </View>
        
     
    )
}

PostScreen.navigationOptions = {
    headerTitle: 'Posts',
   
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
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
    body: {
        color: 'white',
        fontSize: 15,
    },
    btn: {
        backgroundColor: '#303f5e',
        borderRadius: 8,
    },
    btnAddNew: {
        backgroundColor: '#2e8b57',
        borderRadius: 8,
    }
})