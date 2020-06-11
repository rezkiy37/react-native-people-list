import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Alert,
} from 'react-native'

import ItemsList from './components/ItemsList'
import CreateItem from './components/CreateItem'

export default function App() {

  const [people, setPerson] = useState([
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'John' },
  ])

  const [value, setValue] = useState('')

  const addPersonToList = name => {
    setPerson(people => [...people, { id: Date.now().toString(), name }])
    setValue('')
  }

  const addPerson = () => {
    if (value.trim()) {
      addPersonToList(value)
    } else {
      Alert.alert('Input is empty!', 'Enter smth!')
    }
  }

  const filterItems = id => {
    setPerson(people.filter(person => person.id !== id))
  }

  const editItem = id => {
    setPerson(people.map(person => {
      if (person.id == id) {
        return ({ id: person.id, name: person.name += 'edited' })
      } else {
        return ({ name: person.name, id: person.id })
      }
    }))
  }

  return (
    <View style={styles.container}>

      <CreateItem value={value} setValue={setValue} addPerson={addPerson} />

      <ItemsList data={people} filterItems={filterItems} editItem={editItem} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  }
})