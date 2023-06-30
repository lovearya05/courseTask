import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Login = (props) => {
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState('')

  const [show, setShow] = useState(false)


  // console.log(mobile, otp)

  const handeleSubmit=()=>{
    if(mobile == '9876543210'){
      setShow(!show)
    }else{
      setShow(false)
    }
  }
  const handeleVerify=()=>{
    if(otp == '1234'){
      // setShow(!show)
      console.log('hello')
      props.navigation.navigate('Home')

    }else{
      alert('enter valid OTP')
    }
  }




  return (
    <View style={{margin:30}}>
      <Text>Login Page</Text>

      <TextInput editable={!show} placeholder='enter Mobile Number' style={styles.inputBox} onChangeText={(value)=>setMobile(value)} />

      <TouchableOpacity onPress={handeleSubmit} >
        <Text style={styles.submitButton}>{show ? 'change Mobile': 'Submit'}</Text>
      </TouchableOpacity>

      {
        show && <View >
      <TextInput placeholder='enter OTP...' style={styles.otpInput} onChangeText={(value)=>setOtp(value)} />
      
      <TouchableOpacity onPress={handeleVerify} >
        <Text style={styles.verifyButton}>verify Mobile</Text>
      </TouchableOpacity>

      </View>
      }

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  inputBox :{
    borderWidth:0.5,
    width: 200,
    marginLeft : 40
  },

  otpInput:{
    borderWidth:0.5,
    width: 200,
    marginLeft : 40,
    marginTop : 40,
  },
  submitButton:{
    borderWidth: 0.5,
    width: 70,
    textAlign:'center',
    marginLeft: 40,
    marginTop: 10
  },
  verifyButton:{
    borderWidth: 0.5,
    width: 120,
    textAlign:'center',
    marginLeft: 40,
    marginTop: 10
  }


})



// create a profile page there shold be email of name, Age, gender, contact detail, logout button, 


