import { StyleSheet, Text, View } from 'react-native';

export default function Exercicio2() {
  return (
    <View style={styles.container}>
      <Text>Aplicações React Native são multiplataforma pois todo o código desenvolvido é convertido para a linguagem nativa do sistema operacional.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 20
    },
});
