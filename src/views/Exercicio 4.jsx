import { useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native';

function AppImage({ image }) {
    return (
        <Image 
            style={styles.image}
            source={image}
        />
    )
}

function AppText({ name, onHandleChange }) {

    return (
        <View>
            <Text style={styles.title}> { name } </Text>
            <Button 
                title='Mudar imagem'
                onPress={() => onHandleChange(Math.floor(Math.random() * 5))}
            />
        </View>
    )
}

export default function Exercicio4() {

    const data = [
        { 
            title: 'React',
            source: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
        },
        { 
            title: 'JavaScript',
            source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/260px-Unofficial_JavaScript_logo_2.svg.png'
        },
        { 
            title: 'HTML',
            source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png'
        },
        { 
            title: 'CSS',
            source: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
        },
        { 
            title: 'Redux',
            source: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png'
        },
    ]
    
    const [selected, setSelected] = useState(data[0])
    const change = (value) => {
        setSelected(data[value])
    }

    return (
        <View style={styles.container}>
            <AppImage image={selected.source}/>
            <AppText name={selected.title} onHandleChange={change} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto'
  },
  image: {
    width: 100,
    height: 100
  },
  title: {
    textAlign: 'center',
    marginVertical: 20
  }
});
