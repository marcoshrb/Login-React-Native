import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, Image, FlatList, SectionList, Switch } from 'react-native';
import Login from './Login.js';
import Cadastro from './Cadastro';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login" component = {Login}/>
        <Stack.Screen name = "Cadastro" component = {Cadastro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  // const [senha, setSenha] = useState("< blank >");
  // const [inicio, setInicio] = useState(false);
  // const array = ['number 1', 'number 2']
  // const array2 = [{
  //   title: "Main dishes",
  //   data: ['Pizza', 'Burguer'],
  // },{
  //   title : "Teste",
  //   data : ['Pizza', 'Burguer'] 
  // }]

  // return (
  //   <>
  //     <Login/>
  //     <Login2/>
  //     <Cadastro/>
  //   </>
   /* <View style={styles.container}>
      <Switch
        onValueChange={() => setInicio(!inicio)}
        value = {inicio}
        trackColor= {{false: "#767577", true: "#81b0ff"}}
        thumbColor = {"#f5dd4b"}
        activeThumbColor = {"#f4f3f4"}
      />
      <SectionList
        sections = {array2}
        keyExtractor = {(item, index) => item + index}
        renderItem = {({item}) => (
          <Text style = {{color: "green"}}>{item}</Text>
        )}
        renderSectionHeader = {({section : {title}}) => (
          <Text style = {{color : "red"}}>{title}</Text>
        )}
      />
      <Text>HAHAHAHAHAHAHAHAHAHAHAAHAHAHAHAHAAHAH</Text>

      <StatusBar style = "auto" />

      <TextInput
        secureTextEntry = {true}
        placeholder = "Escreva sua senha:"
        value = {senha}
        onChangeText = {e => setSenha(e)}
      />

      <Text>{senha}</Text>

      <TextInput
        multiline
        maxLength = {80}
        numberOfLines = {5}
        style = {styles.textArea}
        onChangeText = {e => console.log('text area', e)}
      />
      
      <Button
        onPress = {() => console.log("TAO ME APERTANDO SOCORRO")}
        title = "clica"
        color = {"#538f"}
      ></Button>

      <TouchableOpacity
        style = {styles.touchable}
      >
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>

      <TouchableWithoutFeedback
        onPress = {() => console.log("without feedback")}
      >
        <View style = {styles.viewWithoutFeed}>
          <Text>botao feio</Text>
        </View>
      </TouchableWithoutFeedback>

      <Image
        style = {{
          width: "500px",
          height: "400px"
        }}

        source = {{
          uri: "https://psxbrasil.com.br/wp-content/uploads/2022/08/bigc.jpg"
        }}
      />

      {array.map((item) => {
        return(
          <Text>{item}</Text>
        )
      })}

      <FlatList
        data = {array}
        renderItem = {({item}) => <Text>{item}</Text>}
        keyExtractor = {(item) => item}
      />
    </View>
  );*/
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textArea: {
//     backgroundColor: 'blue',
//     color: 'white',
//     margin: "10px"
//   },
//   touchable: {
//     width: '120px',
//     innerHeight: '40px',
//     backgroundColor: 'gray',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: "10px",
//     borderRadius: "5px",
//     margin: "10px"
//   },
//   viewWithoutFeed: {
//     width: '120px',
//     innerHeight: '40px',
//     backgroundColor: '#ffa500',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: "10px",
//     borderRadius: "5px",
//     margin: "10px"
//   }
// });

