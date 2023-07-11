import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState,useEffect } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'
// import {
//     GoogleSignin,
//     GoogleSigninButton,
//     statusCodes,
//   } from '@react-native-google-signin/google-signin';
// import { AppleButton } from '@invertase/react-native-apple-authentication';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')

    const navigation = useNavigation()

    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged(user=>{
            if(user){
                navigation.replace("Home")
            }
        })

        return unsubscribe
    },[])

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials =>{
                const user=userCredentials.user;
                console.log('Registered with:', user.email);
            })
            .catch(error=>alert(error.message))
    }

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials=>{
                const user = userCredentials.user;
                console.log('Logged in with:', user.email);
            })
            .catch(error=>alert(error.message))
    }

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
      <View style={styles.inputContainer}>

        <Image 
            source={require('../assets/explorado.png')}
            style={styles.img}
            >
            </Image>

        <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text=> setEmail(text)}
            style={styles.input}
        />
        <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text=> setPassword(text)}
            style={styles.input}
            secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>

      <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
        >
            <Text style={styles.buttonOutlineText}>Create an account</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={handleLogin}
            style={styles.button}
        >
            <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>

  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
inputContainer: {
    width:'80%'
},
input: {
    backgroundColor: 'white',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10,
    marginTop:5,
},
buttonContainer: {
    width: '60%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,

},
button: {
    backgroundColor: 'white',
    width: '100%',
    padding: 15,
    borderRadius:50,
    alignItems:'center',
},
buttonOutline: {
    backgroundColor:'#DF5942',
    marginTop:5,
    borderColor: '#DF5942',
    borderWidth:2,
    marginBottom:13.8,

},
buttonText: {
    color:'black',
    backgroundColor: 'white',
    fontWeight:'700',
    fontSize:16,
    borderColor:'#C3D0C8',
    borderWidth:1,
},
buttonOutlineText: {
    color:'white',
    fontWeight:'700',
    fontSize:16,
},
img: {
    paddingVertical:36,
    marginTop: 150,
    marginBottom: 150,
}
})
