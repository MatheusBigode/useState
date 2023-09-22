import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";

export default function Home() {

    // useState
    const [name, setName] = useState(''); //"()" --> estado inicial de acordo com o tipo de dado
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [language, setLanguage] = useState('');

    function handleUserAdd() {
        console.log(
            "Full name: " + name
            + "\nGender: " + gender
            + "\nBirthday: " + birthday
            + "\nUser: " + user
            + "\nPassword: " + password
            + "\nE-mail: " + email
            + "\nConfirm e-mail: " + confirmEmail
            + "\nCPF: " + cpf
            + "\nLanguage: " + language
        )

        Alert.alert(
            "Full name: " + name
            + "\nGender: " + gender
            + "\nBirthday: " + birthday
            + "\nUser: " + user
            + "\nPassword: " + password
            + "\nE-mail: " + email
            + "\nConfirm E-mail: " + confirmEmail
            + "\nCPF: " + cpf
            + "\nLanguage: " + language
        )
    }

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Preencha os Dados</Text>

        <TextInput
            style={styles.input}
            placeholder="Full name"

            value={ name }
            onChangeText= {setName}
        />
        <Text style={styles.txt}> {name} </Text>

        <TextInput
            style={styles.input}
            placeholder="Gender"
            
            value={ gender }
            onChangeText= {setGender}
        />
        <Text style={styles.txt}> {gender} </Text>


        <TextInput
            style={styles.input}
            placeholder="Birthday"
            
            value={ birthday }
            onChangeText= {setBirthday}
        />
        <Text style={styles.txt}> {birthday} </Text>

        <TextInput
            style={styles.input}
            placeholder="User"
            
            value={ user }
            onChangeText= {setUser}
        />
        <Text style={styles.txt}> {user} </Text>

        <TextInput
            style={styles.input}
            placeholder="Password"
            
            value={ password }
            onChangeText= {setPassword}
        />
        <Text style={styles.txt}> {password} </Text>

        <TextInput
            style={styles.input}
            placeholder="E-mail"
            
            value={ email }
            onChangeText= {setEmail}
        />
        <Text style={styles.txt}> {email} </Text>

        <TextInput
            style={styles.input}
            placeholder="Confirm E-mail"
            
            value={ confirmEmail }
            onChangeText= {setConfirmEmail}
        />
        <Text style={styles.txt}> {confirmEmail} </Text>

        <TextInput
            style={styles.input}
            placeholder="CPF"
            
            value={ cpf }
            onChangeText= {setCpf}
        />
        <Text style={styles.txt}> {cpf} </Text>

        <TextInput
            style={styles.input}
            placeholder="Language"
            
            value={ language }
            onChangeText= {setLanguage}
        />
        <Text style={styles.txt}> {language} </Text>

        <TouchableOpacity style={styles.btn} onPress={ handleUserAdd }>
            <Text style={styles.btnTxt}>Cadastrar</Text>
        </TouchableOpacity>
    </View>
    )
}