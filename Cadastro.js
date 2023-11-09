import axios from "axios";
import { useState, useContext } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Switch } from "react-native";
import { UtilsContext } from "./Context";

function Container(props) {
  return (
    <View style={props.style}>
      {props.children}
    </View>
  )
}

function SimNao(props) {
  if (props == true) {
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

const conexacaoHost = async (name, age) => {

  try {
    const response = await axios.post("http://localhost:8080/user", { name, age});
    console.log('Resposta da API: ', response);
  } catch (error) {
    console.error('Erro ao enviar', error)
  }
  
}

export default function Cadastro(props) {

  const { utils, setUtils } = useContext(UtilsContext)

  const [confirmaSenha, setConfirmaSenha] = useState("");

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [sexo, setSexo] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [notfy, setNotfy] = useState(false)

  function goToUsuarios() {
    setUtils({ ...utils, users: [...utils.users, { nome : nome, idade : idade, sexo : sexo, email : email, senha : senha, notfy : notfy}] })

    props.navigation.navigate('Usuarios');

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
        <Text>Nome:</Text>
        <TextInput
          onChangeText={text => setNome(text)}
          style={styles.textosInputGrande}
        />

        <Container style={styles.InputsPequenos}>

          <View style={styles.Formata}>
            <Text>Idade:</Text>
            <TextInput
              onChangeText={text => setIdade(text)}
              style={styles.textosInputPequeno}
            />
          </View>

          <View style={styles.FormataDireita}>
            <Text>Sexo:</Text>
            <TextInput
              onChangeText={text => setSexo(text)}
              style={styles.textosInputPequenoDireita}
            />
          </View>

        </Container>

        <Text>Email:</Text>
        <TextInput
          onChangeText={text => setEmail(text)}
          style={styles.textosInputGrande}
        />
        <Text>Senha:</Text>
        <TextInput
          secureTextEntry={true}
          onChangeText={text => setSenha(text)}
          style={styles.textosInputGrande}
        />
        <Text>Confirmar senha:</Text>
        <TextInput
          onChangeText={confirmaSenha => setConfirmaSenha(confirmaSenha)}
          secureTextEntry={true}
          style={styles.textosInputGrande}
        />

        <Text>Deseja receber notificações?</Text>

        <Container style={styles.SwitchPequenos}>
          <Switch
            onValueChange={() => setNotfy(!notfy)}
            value={notfy}
            trackColor={{ false: "#767577", true: "#87CEEB" }}
            thumbColor={"#D3D3D3"}
            activeThumbColor={"#f4f3f4"}
            style={styles.Switch}
          />
          {SimNao(notfy)}
        </Container>
      </View>

      <TouchableOpacity
        style={styles.touchCadastrar}
        onPress={() => goToUsuarios()}
      >
        <Text>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("Login")}

      >
        <Text>Cancelar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchCadastrar}
        onPress={() => conexacaoHost(nome, idade)}
      >
         <Text>Teste</Text>
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
    marginTop: "10px",
    height: "25px",
    marginBottom: "20px",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "10px",
    width: "300px"
  },
  textosInputPequeno: {
    marginTop: "10px",
    height: "25px",
    marginBottom: "20px",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "10px",
    width: "140px"
  },
  textosInputPequenoDireita: {
    marginTop: "10px",
    height: "25px",
    marginBottom: "20px",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "10px",
    width: "140px"
  },
  InputsPequenos: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start"
  },
  SwitchPequenos: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: "10px",
    marginBottom: "10px"
  },
  Switch: {
    marginRight: "10px"
  },
  Formata: {
    display: "flex",
    alignItems: "flex-start"
  },
  FormataDireita: {
    display: "flex",
    alignItems: "flex-start",
    marginLeft: "20px"
  },
  touchCancelar: {
    marginTop: '10px'
  }
});
