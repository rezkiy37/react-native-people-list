import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Button,
} from 'react-native'

import ItemsList from './components/ItemsList'
import CreateItem from './components/CreateItem'


export default function App() {

  const [people, setPerson] = useState([
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'John' },
  ])

  const [isVisible, setVisible] = useState(false)

  const addItem = name => {
    setPerson(people => [...people, { id: Date.now().toString(), name }])
  }

  const filterItems = id => {
    setPerson(people.filter(person => person.id !== id))
  }

  const editItem = (id, value) => {
    setPerson(people.map(person => {
      if (person.id == id) {
        return ({ id: person.id, name: value })
      } else {
        return ({ name: person.name, id: person.id })
      }
    }))
  }

  const openModalCreate = () => {
    setVisible(true)
  }

  return (
    <View style={styles.container}>

      <Button title='Add person!' onPress={openModalCreate} />

      <CreateItem addItem={addItem} visible={isVisible} setVisible={setVisible} />

      <ItemsList data={people} filterItems={filterItems} editItem={editItem} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  }
})