import React from 'react'
import { Component } from 'react'
import { TextInput, View, Button, StyleSheet } from 'react-native'
import axios from 'axios'
import { Formik } from 'formik'

class AddNew extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId: 101,
            title: '',
            body: ''
        }
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    update(e) {

        this.setState({ todoText: "" });
    }
    render() {
        const { userId, title, body } = this.state
        return (
            <View style={styles.container}>

                <Formik >
                    <View>
                        {/* <TextInput
                            style={{ paddingTop: 140 }}
                            value={userId}
                            name='userId'
                            placeholder='userId'
                            onChangeText={(userId) => { this.setState({ userId }) }}
                            autoCompleteType='off'
                        /> */}
                        <TextInput
                            style={styles.input}
                            value={title}
                            name='title'
                            placeholder='Tittle'
                            onChangeText={(title) => { this.setState({ title }) }}
                            autoCompleteType='off'
                        />
                        <TextInput
                            style={styles.input}
                            value={body}
                            name='body'
                            placeholder={"What's on your mind?"}
                            onChangeText={(body) => { this.setState({ body }) }}
                            autoCompleteType='off'
                            onSubmitEditing={(e) => { this.update(e); }}
                        />
                        <View style={styles.btn}>
                            <Button
                                onPress={this.submitHandler}
                                title='Post'
                                color={'#303f9f'}
                            />
                        </View>
                    </View>
                </Formik>

            </View>
        )
    }
}
export default AddNew

AddNew.navigationOptions = {
    headerTitle: 'AddNew',
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btn: {
        backgroundColor: '#303f5e',
        borderRadius: 8,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor:'#303f9f'
    },
})