import { useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

function ItemID({ number }) {
    return (
        <Text style={styles.number}> { number } </Text>
    )
}

function List({ selected }) {

    const data = [
        {
          id: 0,
          title: 'Primeiro',
        },
        {
          id: 1,
          title: 'Segundo',
        },
        {
          id: 2,
          title: 'Terceiro',
        },
        {
            id: 3,
            title: 'Quarto',
        },
      ];

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => 
                <Pressable onPress={() => selected(item)} style={styles.item}> 
                    <Text> { item.title } </Text> 
                </Pressable>
            }
            keyExtractor={item => item.id}
        />
    )
}

export default function Exercicio8() {

    const [selected, setSelected] = useState({})
    const handleSelect = (value) => setSelected(value)

    return (
        <View style={styles.container}>
            <ItemID number={selected.id}/>
            <List selected={handleSelect}/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto'
  },
  number: {
    fontSize: 32,
    marginBottom: 20
  },
  item: {
    padding: 30,
    backgroundColor: '#cdcdcd',
    textAlign: 'center'
  }
});
