import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'


const Item = ({ item, filterItems, editItem }) => {

    const personLongPressHandler = () => {
        filterItems(item.id)
    }
    const personPressHandler = () => {
        editItem(item.id)
    }

    return (
        <TouchableOpacity>
            <View style={styles.item}>
                <Text
                    style={styles.text}
                    onPress={personPressHandler}
                    onLongPress={personLongPressHandler}
                >
                    {item.name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc'
    },
    text: {
        color: '#fff'
    },
})

export default Item