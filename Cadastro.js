import { useState } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Switch } from "react-native";

function Container(props) {
  return (
    <View style={props.style}>
      {props.children}
    </View>
  )
}



export default function App() {
  const [senha, setSenha] = useState("onibus");
  const [inicio, setInicio] = useState(false);

  function SimNao(props) {
    if (inicio == true) {

      return (
        <View >
          <Text>Sim</Text>
        </View>
      );
    }
    else {
      return (
        <View>
          <Text>Não</Text>
        </View>
      );
    }

  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./download.jpg')}
        style={{
          height: "150px",
          width: "150px",
          marginBottom: "20px"
        }}
      />
      <View>
        <Text style={styles.Textteste}>Nome:</Text>
        <TextInput
          style={styles.textosInputGrande}
        />

        <Container style={styles.InputsPequenos}>

          <View style={styles.Formata}>
            <Text>Idade:</Text>
            <TextInput style={styles.textosInputPequeno}/>
          </View>

          <View style={styles.FormataDireita}>
            <Text>Sexo:</Text>
            <TextInput style={styles.textosInputPequenoDireita} />
          </View>
          
        </Container>

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
        <Text>Confirmar senha:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.textosInputGrande}
        />
        <Text>Deseja receber notificações?</Text>

        <Container style={styles.InputsPequenos}>
          <Switch
            onValueChange={() => setInicio(!inicio)}
            value={inicio}
            trackColor={{ false: "#767577", true: "#87CEEB" }}
            thumbColor={"#D3D3D3"}
            activeThumbColor={"#f4f3f4"}
          />
          <SimNao />
        </Container>
      </View>

      <TouchableOpacity
        style={styles.touchCadastrar}
      >
        <Text>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Cancelar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A9A9A9",
    alignItems: "center",
    justifyContent: "center",
  },
  touchCadastrar: {
    width: "200px",
    backgroundColor: "gray",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    margin: "10px"
  },
  textosInputGrande: {
    marginBottom: "10px",
    backgroundColor: "white",
    borderRadius: "5%",
    width: "300px"
  },
  textosInputPequeno: {
    backgroundColor: "white",
    borderRadius: "5%",
    width: "140px"
  },
  textosInputPequenoDireita:{
    backgroundColor: "white",
    borderRadius: "5%",
    width: "140px"
  },
  InputsPequenos: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start"
  },
  Textteste: {
    alignItems: "flex-start"
  },
  Formata:{
    display: "flex",
    alignItems: "flex-start"  
  },
  FormataDireita: {
    display: "flex",
    alignItems: "flex-start",
    marginLeft: "20px" 
  }
});
