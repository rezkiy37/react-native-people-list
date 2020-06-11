import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback,
    Button,
    Modal,
} from 'react-native'
import EditItem from './EditItem'


const Item = ({ item, filterItems, editItem }) => {

    const [isVisible, setVisible] = useState(false)

    const personLongPressHandler = () => {
        filterItems(item.id)
    }

    const personPressHandler = () => {
        console.log(item.id)
    }

    const btnPressHandler = () => {
        setVisible(true)
    }

    const deleteBtnPressHandler = () => {
        filterItems(item.id)
    }

    return (
        <TouchableNativeFeedback onLongPress={personLongPressHandler}>
            <View style={styles.item}>
                <Text
                    style={styles.text}
                    onPress={personPressHandler}
                >
                    {item.name}
                </Text>

                <View style={styles.btnBox}>
                    <Button
                        title='Edit'
                        onPress={btnPressHandler} />
                    <Button
                        title={'Delete person!'}
                        onPress={deleteBtnPressHandler} />
                </View>

                <EditItem
                    visible={isVisible}
                    setVisible={setVisible}
                    itemID={item.id}
                    editItem={editItem}
                    filterItems={filterItems}
                />
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ccc'
    },
    btnBox: {
        flexDirection: 'row'
    },
    text: {
        color: '#fff'
    },
})

export default Item