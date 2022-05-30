import React from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Button,
  Image,
  View,
} from 'react-native';

import equilatero from './assets/equilatero.png';
import isoceles from './assets/isoceles.png';
import escaleno from './assets/escaleno.png';

export default class App extends React.Component {
  
constructor(props){
  super(props);
  this.state = {
    valor1 : '',
    valor2 : '',
    valor3 : '',
  }
}
  mudaValor1 = valor => {
    this.setState({valor1: valor})
  }

  mudaValor2 = valor => {
    this.setState({valor2: valor})
  }

  mudaValor3 = valor => {
    this.setState({valor3: valor})
  }

triangulo = valor => {
  let a = this.state.valor1
  let b = this.state.valor2
  let c = this.state.valor3
  let s1 = parseInt(a)+parseInt(b) //para comparar c
  let s2 = parseInt(b)+parseInt(c) //para comparar a
  let s3 = parseInt(a)+parseInt(c) //para comparar b

  if ( a <= 0 || b <= 0  || c <= 0) {
     this.setState({textinho: 'Há valores nulos ou zerados'})
  } else if ( c > s1 || a > s2 || b > s3   ) { 
     this.setState({textinho: 'um lado não pode ser maior do que a soma dos outros dois'})
  } else  if (a === b && b === c ){
   this.setState({imagem: equilatero})
   this.setState({textinho: 'É um triangulo equilátero'})
  } else if (a != b && b != c && a != c)
    {this.setState({imagem: escaleno})
    this.setState({textinho: 'É um triangulo escaleno'})}
  else 
   { this.setState({imagem: isoceles})
    this.setState({textinho: 'É um triangulo isoceles'})
   }
}

  render() {
    return (
      <View>
        <View style={{ padding: 10, marginTop: 30 }}>
        <Text> Informe os valores para saber o tipo do triângulo </Text>
        </View>
        <View style={{ padding: 10}}>
          <TextInput
            onChangeText = {this.mudaValor1}
            autoFocus={false}
            keyboardType="numeric"
            maxLength={2}
            placeholder="Informe o valor 'A' "
            style={{
              borderColor: 'grey',
              borderWidth: 1,
              height: 35,
              paddingHorizontal: 5,
            }}
          />
          <StatusBar style="Light" />
        </View>

        <View style={{ padding: 10 }}>
          <TextInput
            onChangeText = {this.mudaValor2}
            keyboardType="numeric"
            maxLength={2}
            placeholder="Informe o valor 'B' "
            style={{
              borderColor: 'grey',
              borderWidth: 1,
              height: 35,
              paddingHorizontal: 5,
            }}
          />
          <StatusBar style="Light" />
        </View>

        <View style={{ padding: 10 }}>
          <TextInput
            onChangeText = {this.mudaValor3}
            keyboardType="numeric"
            maxLength={2}
            placeholder="Informe o valor 'C' "
            style={{
              borderColor: 'grey',
              borderWidth: 1,
              height: 35,
              paddingHorizontal: 5,
            }}
          />
          <StatusBar style="Light" />
        </View>

        <View style={{ padding: 10 }}>
          <Button 
          title={'Classificar'}
          onPress={this.triangulo} />
        </View>

        <View>
          <Text style = {{
            justifyContent : 'center' , 
            alignSelf : 'center',
          }}>
            {this.state.textinho}
          </Text>
        </View>

        <View style={{ padding: 10 }}>
          <Image
            source={this.state.imagem}
            style={{
              width: 200,
              height: 200,
              alignSelf: 'center',
              resizeMode: 'center',
            }}
          />
        </View>

      </View>
    );
  }
}
