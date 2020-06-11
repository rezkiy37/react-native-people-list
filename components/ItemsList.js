import React from 'react'

import {
    StyleSheet,
    FlatList,
} from 'react-native'

import Item from './Item'

const ItemsList = ({ data, filterItems, editItem }) => {
    return (
        <FlatList
            style={styles.container}
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <Item item={item} filterItems={filterItems} editItem={editItem} />
            )}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 15,
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: 1
    }
})

export default ItemsList