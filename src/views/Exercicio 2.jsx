import { StyleSheet, Text, View } from 'react-native';

export default function Exercicio2() {
  return (
    <View style={styles.container}>
      <Text>Olá Mundo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: '#a4bc81',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto'
  },
});
