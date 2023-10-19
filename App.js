import { useState } from "react"
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [senha, setSenha] = useState("onibus");



  return (
    <View style={styles.container}>
      <Text style={styles.UsuariosTitulo}>
        Usuarios
      </Text>
      <View>
        
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
  UsuariosTitulo: {
    fontSize: "60px",
    marginBottom: "60px",
    marginTop: "50px"
  },
  
});
