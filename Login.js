import { useState, useContext } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";
import { UtilsContext } from "./Context";


export default function Login(props) {

  const [senha, setSenha] = useState("");

  

  return (
    <View style={styles.container}>
      <Text style={styles.LoginTitulo}>
        LOGIN
      </Text>
      <Text>Email:</Text>
      <TextInput
        style={styles.textosInputGrande}
      />
      <Text>Senha:</Text>
      <TextInput
        secureTextEntry={true}
        onChangeText={e => setSenha(e)}
        style={styles.textosInputGrande}
      />

      <View style={styles.Botoes}>

        <TouchableOpacity
          style={styles.touchLogin}
        >
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("Cadastro")}
         style={styles.touchCancelar}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => props.navigation.navigate('Usuarios')}
         style={styles.touchUsuarios}>
          <Text>Usuarios</Text>
        </TouchableOpacity>
        
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A9A9A9",
    alignItems: "center",
  },
  LoginTitulo: {
    fontSize: "60px",
    marginBottom: "60px",
    marginTop: "50px"
  },
  touchLogin: {
    width: "300px",
    backgroundColor: "gray",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    margin: "10px"
  },
  textosInputGrande: {
    marginTop: "10px",
    height: "25px",
    marginBottom: "20px",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "10px",
    width: "300px"
  },
  Botoes: {
    flex: 1,
    alignItems: "center", 
    justifyContent: "flex-end",
    marginBottom: "40px"
  },
  touchCancelar: {
    marginTop: '20px'
  },
  touchUsuarios: {
    marginTop: "20px"
  }
});
