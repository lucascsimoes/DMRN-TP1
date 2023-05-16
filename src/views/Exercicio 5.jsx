import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function ChangeNumber() {

    const [counter, setCounter] = useState(0)

    return (
        <View style={styles.container}>
            <Text style={styles.counter}> { counter } </Text>

            <View style={styles.display}>
                <TouchableOpacity style={styles.changer} onPress={() => setCounter(counter + 1)}> 
                    <Text> + </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.changer} onPress={() => setCounter(counter - 1)}> 
                    <Text> - </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default function Exercicio5() {
    return (
        <ChangeNumber/>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto'
  },
  counter: {
    fontSize: 32,
    textAlign: 'center'
  },
  display: {
    flexDirection: 'row-reverse',
    gap: 20,
    marginTop: 20
  },
  changer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'black'
  }
});
