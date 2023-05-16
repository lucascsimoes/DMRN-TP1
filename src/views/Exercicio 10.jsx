import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Exercicio10() {

    const [operation, setOperation] = useState('')

    const calculate = () => {
      try {
        const result = Number(eval(operation))
        setOperation(result)

      } catch (e) {
        setOperation('Erro')
      }
    }

    const removelastIndex = () => {
      if (operation === 'Erro') {
        setOperation('')
      } else {
        const array = operation.split('')
        const string = array.pop()
        console.log()
        setOperation(array.join(''))
      }
      
    }

    return (
        <View style={styles.container}>
          <View style={styles.visor}>
              <Text style={styles.result}> { operation } </Text>
          </View>

          <View style={styles.content}>
            <View style={styles.numbersDisplay}>
              <TouchableOpacity style={styles.numbersContainer} onPress={() => setOperation(operation === 'Erro' ? '' : operation + '7')}>
                  <Text style={styles.numbers}> 7 </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.numbersContainer} onPress={() => setOperation(operation === 'Erro' ? '' : operation + '4')}>
                  <Text style={styles.numbers}> 4 </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.numbersContainer} onPress={() => setOperation(operation === 'Erro' ? '' : operation + '1')}>
                  <Text style={styles.numbers}> 1 </Text>
              </TouchableOpacity>
            </View>
          <View style={styles.numbersDisplay}>
            <TouchableOpacity style={styles.numbersContainer} onPress={() => setOperation(operation === 'Erro' ? '' : operation + '8')}>
                <Text style={styles.numbers}> 8 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbersContainer} onPress={() => setOperation(operation === 'Erro' ? '' : operation + '5')}>
                <Text style={styles.numbers}> 5 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbersContainer} onPress={() => setOperation(operation === 'Erro' ? '' : operation + '2')}>
                <Text style={styles.numbers}> 2 </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.numbersDisplay}>
            <TouchableOpacity style={styles.numbersContainer} onPress={() => setOperation(operation === 'Erro' ? '' : operation + '9')}>
                <Text style={styles.numbers}> 9 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbersContainer} onPress={() => setOperation(operation === 'Erro' ? '' : operation + '6')}>
                <Text style={styles.numbers}> 6 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbersContainer} onPress={() => setOperation(operation === 'Erro' ? '' : operation + '3')}>
                <Text style={styles.numbers}> 3 </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.aside}>
            <TouchableOpacity style={styles.operationContainer} onPress={() => setOperation(operation === 'Erro' ? '' : operation + '+')}>
                <Text style={styles.operation}> + </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operationContainer} onPress={() => setOperation(operation === 'Erro' ? '' : operation + '-')}>
                <Text style={styles.operation}> - </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operationContainer} onPress={() => setOperation(operation === 'Erro' ? '' : operation + '*')}>
                <Text style={styles.operation}> x </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomNumber}>
          <TouchableOpacity style={styles.numbersContainer} onPress={() => setOperation(operation === 'Erro' ? '' : operation + '.')}>
              <Text style={styles.numbers}> . </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numbersContainerZero} onPress={() => setOperation(operation === 'Erro' ? '' : operation + '0')}>
              <Text style={styles.numbers}> 0 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operationContainer} onPress={() => setOperation(operation === 'Erro' ? '' : operation + '/')}>
              <Text style={styles.operation}> / </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomCommands}>
          <TouchableOpacity style={styles.commandContainer} onPress={() => setOperation('')}>
              <Text style={styles.command}> C </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.commandContainer} onPress={removelastIndex}>
              <Text style={styles.command}> -- </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.doneContainer} onPress={() => calculate()}>
              <Text style={styles.done}> = </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    margin: 'auto',
    backgroundColor: '#222',
    padding: 10
  },
  visor: {
    width: 260,
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 70,
    backgroundColor: '#3b3b3b',
    paddingHorizontal: 20,
    marginBottom: 10
  },
  result: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    opacity: .8
  },
  content: {
    flexDirection: 'row',
    gap: 5
  },
  aside: {
    width: 60,
    gap: 5,
  },
  operationContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#cb5404',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  operation: {
    color: 'white',
    fontSize: 22,
    borderRadius: 20
  },
  numbersDisplay: {
    width: 60,
    gap: 5
  },
  numbersContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#3e3e3e',
    alignItems: 'center',
    justifyContent: 'center'
  },
  numbersContainerZero: {
    width: 125,
    height: 60,
    backgroundColor: '#3e3e3e',
    alignItems: 'center',
    justifyContent: 'center'
  },
  numbers: {
    color: 'white',
    fontSize: 19,
    borderRadius: 20
  },
  bottomNumber: {
    flexDirection: 'row',
    marginTop: 5,
    gap: 5
  },
  bottomCommands: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 5
  },
  commandContainer: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  command: {
    fontSize: 20,
    color: '#cb5404'
  },
  doneContainer: {
    width: 125,
    height: 60,
    backgroundColor: '#cb5404',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  done: {
    color: 'white',
    fontSize: 26
  }
});
