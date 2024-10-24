import React, { Component } from 'react';
import { View, Text , TextInput , ImageBackground, StyleSheet, Dimensions, ScrollView, Button, Alert} from 'react-native';
import { supabase } from './SupaBase';


const { height } = Dimensions.get('window');

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            correo:"",
            contra: "",
        };
    }

    render() {
        const loggin = async() =>{
            const {error} = await supabase.auth.signInWithPassword({

                email:this.state.correo,
                password:this.state.contra

            })

            if (error) {
                Alert.alert("Error al iniciar sesion","Asegurese que las credenciales sean correctas o esten llenos los campos")
            }
            else{
                Alert.alert("Inicio correcto",`Bienvenido ${this.state.correo}`, )
                this.props.navigation.navigate('Dashboard')
            }


            this.setState({
                correo: "",
                contra: ""
            });
        }

        return (
        <View style={style.container}>
            <ScrollView >
                <ImageBackground  source={require('./Images/BackgroundLogin.jpg')} resizeMode="cover" style={style.image} >
                <View style={style.inputView}>
                    <View style={style.viewLabel}>
                        <Text style={style.label}>
                            Correo 
                        </Text>
                    </View>
                    <TextInput style={style.input} placeholderTextColor={"gray"}  placeholder='Ingresa tu correo' value={this.state.correo} onChangeText={correo => this.setState({correo})}/>
                    <View style={style.viewLabel}>
                        <Text style={style.label}>
                            Contraseña 
                        </Text>
                    </View>
                    <TextInput style={style.input} placeholderTextColor={"gray"} placeholder='Ingresa tu contraseña' secureTextEntry={true} value={this.state.contra} onChangeText={contra => this.setState({contra})}/>
                    <View style={style.viewButton}>
                        <Button title='Ingresar' onPress={loggin} color={"black"} />
                    </View>
                    
                </View>
            </ImageBackground>
            </ScrollView>
            
        </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        flex:1,
        alignItems:"center",
        width:"100%",
        height:height,
    },
    inputView:{
        backgroundColor:"rgba(255, 255, 255, 0.9)",
        width: "85%",
        height:400,
        marginTop:"35%",
        borderRadius:10,
        alignItems:"center"
    }, 
    input: {
        height: 50,
        width:"80%",
        margin:"1%",
        borderWidth: 1,
        padding: 10,
        fontSize:18,
        borderRadius:5,
        color:"black"
    },
    viewLabel:{
        width:"100%"
    },
    label:{
        padding:"3%",
        fontSize:30,
        textAlign:"left",
        fontStyle:"italic",
        color:"black"
    },
    viewButton:{
        marginTop:"7%",
        width:"80%",
    },
})
