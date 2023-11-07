import { useState, useContext } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { UtilsContext } from "./Context";

function CardUsuario(props) {
  const { utils, setUtils } = useContext(UtilsContext);

  function DeletarUser(i) {
    utils.nome.splice(i, 1)
    utils.idade.splice(i, 1)
    utils.sexo.splice(i, 1)
    utils.email.splice(i, 1)
    utils.senha.splice(i, 1)
    utils.notfy.splice(i, 1)

  }

  for (var i = 0; i < utils.users.length; i++) {
    return (
      <View style={styles.card}>
        <Text style={styles.textos}>Nome: {utils.users[i].nome}</Text>
        <Text style={styles.textos}>Idade: {utils.users[i].idade}</Text>
        <Text style={styles.textos}>Sexo: {utils.users[i].sexo}</Text>
        <Text style={styles.textos}>Recebe Notificação: {utils.users[i].notfy == false ? "Não" : "Sim"}</Text>
        <TouchableOpacity onPress={() => DeletarUser(i)}
          style={styles.touchDeletar}>
          <Text>Deletar</Text>
        </TouchableOpacity>
      </View>

    );
  }

}


export default function Usuarios(props) {

  const { utils, setUtils } = useContext(UtilsContext);

  return (
    <View style={styles.container}>
      <View style={styles.flexDeTudo}>
        <Text style={styles.UsuariosTitulo}>
          Usuarios
        </Text>
        <CardUsuario />
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
    marginBottom: "20px",
    marginTop: "50px"
  },
  card: {
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
