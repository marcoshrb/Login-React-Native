import { useState } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";

export default function Login(props) {
  const [senha, setSenha] = useState("onibus");

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

        <TouchableOpacity onPress={() => props.navigation.navigate("Cadastro")}>
          <Text>Cadastrar</Text>
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
    marginBottom: "20px",
    backgroundColor: "white",
    borderRadius: "5%",
    width: "300px"
  },
  Botoes: {
    flex: 1,
    alignItems: "center", 
    justifyContent: "flex-end",
    marginBottom: "40px"
  }
});
