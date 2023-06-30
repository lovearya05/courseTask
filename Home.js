import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Home = (props) => {
  const [input, setInput] = useState('')
  
  const handleSubmit =()=>{
    // console.log(input)
    props.navigation.navigate('showResult', {input : input})
  }

  return (
    <View>
      <Text>Home Component</Text>
      <TextInput placeholder='enter Input... ' style={styles.inputBox} onChangeText={(value)=>setInput(value)} />

      <TouchableOpacity onPress={handleSubmit} >
        <Text style={styles.submitButton}>submit button</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> props.navigation.navigate('login')} >
        <Text style={styles.submitButton}>LogOut button</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  inputBox :{
    borderWidth:0.5,
    width: 200,
    marginLeft : 40
  },
  submitButton:{
    borderWidth: 0.5,
    width: 130,
    textAlign:'center',
    marginLeft: 40,
    marginTop: 10
  },

})



// input box collect the input and show it to other componet
// after press submit button
