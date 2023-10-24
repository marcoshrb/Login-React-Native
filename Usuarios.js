import { useState,useContext } from "react"
import { StyleSheet, Text, View, TextInput } from "react-native";
import { UtilsContext } from "./Context";

export default function Usuarios(props) {

  const [senha, setSenha] = useState("");
  const { utils, setUtils } = useContext(UtilsContext)

  console.log(utils);
  return (
    <View style={styles.container}>
      <View style={styles.flexDeTudo}>
        <Text style={styles.UsuariosTitulo}>
          Usuarios
        </Text>
        <View style={styles.card}>
          <Text style={styles.textos}>Nome: {utils.nome}</Text>
          <Text style={styles.textos}>Idade: {utils.idade}</Text>
          <Text style={styles.textos}>Sexo: {utils.sexo}</Text>
          <Text style={styles.textos}>Recebe Notificação: {utils.notificacao}</Text>
        </View>
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
