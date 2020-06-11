import React from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    Button,
} from 'react-native'

const CreateItem = ({ value, addPerson, setValue }) => {

    const btnPressHandler = () => {
        addPerson()
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder='Typy smth...' />
            <Button title={'Add person!'} onPress={btnPressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width: '65%',
        color: '#000',
        borderStyle: 'solid',
        borderBottomColor: '#ccc',
        borderBottomWidth: 2
    },
})


export default CreateItem