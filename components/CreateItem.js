import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Modal,
    Alert
} from 'react-native'

const CreateItem = ({ addItem, visible, setVisible }) => {

    const [value, setValue] = useState('')

    const btnPressHandler = () => {
        if (value.trim()) {
            addItem(value)
            setValue('')
            setVisible(false)
        } else {
            Alert.alert('Input is empty!', 'Enter smth!')
        }
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.container}>
                <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder='Typy smth...' />
                <Button title={'Add person!'} onPress={btnPressHandler} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '75%',
        marginBottom: 20,
        color: '#000',
        borderStyle: 'solid',
        borderBottomColor: '#ccc',
        borderBottomWidth: 2
    },
})


export default CreateItem