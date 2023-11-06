import { useState, useContext } from "react"
import { StyleSheet, Text, View, TextInput } from "react-native";
import { UtilsContext } from "./Context";

function CardUsuario(props) {

  for (var i = 0; i < utils.nome.length; i++) {
    return (
      <View style={styles.card}>
        <Text style={styles.textos}>Nome: {utils.nome[i]}</Text>
        <Text style={styles.textos}>Idade: {utils.idade[i]}</Text>
        <Text style={styles.textos}>Sexo: {utils.sexo[i]}</Text>
        <Text style={styles.textos}>Recebe Notificação: {utils.notfy[i] == false ? "Não" : "Sim"}</Text>
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
    maxHeight: '150px',
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
  }

});
