import React, { useState, useEffect } from "react";
import 'react-native-gesture-handler';
import { 
  KeyboardAvoidingView,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Animated, 
} from "react-native";


export default function App(){

  const [offset] = useState(new Animated.ValueXY({x:0, y:80}));
  const [opacity] = useState(new Animated.Value(0));
  
  useEffect(()=>{
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true
      }),
      Animated.timing(opacity,{
        toValue: 1,
        duration: 400,
        useNativeDriver: true 
      })
    ]).start()
    
  }, [])

  return(
    <KeyboardAvoidingView style={styles.fundo}>
      <View style={styles.containerLogo}>
      <Image
      source={require('./imagens/logo.png')}
      />
      </View>
      <Text style={styles.textoCriar}>Seu parceiro para a transformação digital</Text>

      <Animated.View 
      style={[styles.container,
      {
        opacity: opacity,
        transform: [
          {translateY: offset.y}
        ]
      }
      ]}>
      <TextInput
      style={styles.input}
      placeholder="E-mail"
      autoCorrect={false}
      onChangeText={() => {}}
      />
      <TextInput
      style={styles.input}
      placeholder="Senha"
      autoCorrect={false}
      onChangeText={() => {}}
      />
      

      <TouchableOpacity style={styles.botaoEnviar}>
        <Text style={styles.textoEnviar}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoCriar}>
        <Text style={styles.textoCriar}>Criar conta!</Text>
      </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingBottom: 20
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 10
  },
  input:{
    backgroundColor: 'white',
    width: '90%',
    marginBottom: 15,
    borderColor: '#48D1CC',
    borderWidth: 3,
    fontSize: 17,
    borderRadius: 8,
    padding: 10
  },
  botaoEnviar: {
    backgroundColor: '#48D1CC',
    width: '90%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoEnviar:{
    color: 'white',
    fontSize: 18
  },
  botaoCriar: {
    marginTop: 10,
  },
  textoCriar:{
    color: 'black',
    paddingBottom: 30
  }

})

export default App;