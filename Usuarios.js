import { useState, useContext } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { UtilsContext } from "./Context";

function CardUsuario(props) {
  const { utils, setUtils } = useContext(UtilsContext); 
  
  function deletarUser() {

    console.log("AAA",utils.users.filter(item => item.nome !== ""))
  
    setUtils({ ...utils ,  users: utils.users.filter(item => item.nome !== props.users.nome)})
    
  }

    return (
      <View style={styles.card}>
        <Text style={styles.textos}>Nome: {props.users.nome}</Text>
        <Text style={styles.textos}>Idade: {props.users.idade}</Text>
        <Text style={styles.textos}>Sexo: {props.users.sexo}</Text>
        <Text style={styles.textos}>Recebe Notificação: {props.users.notfy == false ? "Não" : "Sim"}</Text>
        <TouchableOpacity onPress={() => deletarUser()}
          style={styles.touchDeletar}>
          <Text>Deletar</Text>
        </TouchableOpacity>
      </View>

    );
  

}




export default function Usuarios(props) {

  const { utils, setUtils } = useContext(UtilsContext);

  return (
    <View style={styles.container}>
      <View style={styles.flexDeTudo}>
        <Text style={styles.UsuariosTitulo}>
          Usuarios
        </Text>
        {utils.users.map((users, index) => <CardUsuario key = {index} users = {users}/>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A9A9A9",
    alignItems: "center"
  },
  flexDeTudo: {
    flex: 1,
    alignItems: "flex-start"
  },
  UsuariosTitulo: {
    fontSize: "80px",
    marginTop: "50px"
  },
  card: {
    marginTop: "20px",
    width: '500px',
    maxHeight: '180px',
    borderRadius: '3%',
    borderWidth: '2px',
    borderColor: 'black',
    flex: 1,
    alignItems: "flex-start"

  },
  textos: {
    marginLeft: '30px',
    marginTop: '10px',
    fontWeight: 'bold'
  },
  touchDeletar: {
    width: "200px",
    backgroundColor: "red",
    color: "black",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    margin: "10px"
  }

});
