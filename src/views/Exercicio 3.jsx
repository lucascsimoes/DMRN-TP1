import { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Exercicio3() {

    const [text, setText] = useState('')
    const handleText = (value) => {
        console.log(value)
    }

  return (
    <View style={styles.container}>
      <Text> {text === '' ? 'Clique em um dos botões abaixo' : text} </Text>

      <View style={styles.buttonDisplay}>
        <Button
            title="Sim"
            onPress={() => setText('Sim')}
        />
        <Button
            title="Não"
            onPress={() => setText('Não')}
        />
        <Button
            title="Talvez"
            onPress={() => setText('Talvez')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto'
  },
  buttonDisplay: {
    flexDirection: 'row',
    marginTop: 10
  }
});
