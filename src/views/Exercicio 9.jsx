import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Card({ data }) {

    return (
        <View style={styles.card}>
            <Text style={styles.title}> { data.title } </Text>
            <Text style={styles.info}> { data.local } </Text>
            <Text style={styles.info}> { data.time } </Text>
        </View>
    )
}

export default function Exercicio9() {

    return (
        <View style={styles.container}>
            <Card data={{ 
                title: 'Vingadores',
                local: 'UCI Norte Shopping',
                time: '16:00'
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto'
  },
  card: {
    width: 280,
    height: 320,
    borderWidth: 1,
    borderColor: '#222',
    padding: 15
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  info: {
    opacity: .7,
    fontSize: 16
  }
});
