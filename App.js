import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import Exercicio1 from './src/views/Exercicio 1';
import Exercicio2 from './src/views/Exercicio 2';
import Exercicio3 from './src/views/Exercicio 3';
import Exercicio4 from './src/views/Exercicio 4';
import Exercicio5 from './src/views/Exercicio 5';
import Exercicio6 from './src/views/Exercicio 6';
import Exercicio7 from './src/views/Exercicio 7';
import Exercicio8 from './src/views/Exercicio 8';
import Exercicio9 from './src/views/Exercicio 9';
import Exercicio10 from './src/views/Exercicio 10';

export default function App() {
  return (

    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Exercício 1" component={Exercicio1} />
        <Drawer.Screen name="Exercício 2" component={Exercicio2} />
        <Drawer.Screen name="Exercício 3" component={Exercicio3} />
        <Drawer.Screen name="Exercício 4" component={Exercicio4} />
        <Drawer.Screen name="Exercício 5" component={Exercicio5} />
        <Drawer.Screen name="Exercício 6" component={Exercicio6} />
        <Drawer.Screen name="Exercício 7" component={Exercicio7} />
        <Drawer.Screen name="Exercício 8" component={Exercicio8} />
        <Drawer.Screen name="Exercício 9" component={Exercicio9} />
        <Drawer.Screen name="Exercício 10" component={Exercicio10} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
