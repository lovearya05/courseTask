import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ShowResult = (props) => {
  // console.log(props.route.params.input)

  const inputData = props.route.params.input;
  const reverse = inputData.split('').reverse().join('')
  // console.log(inputData, reverse, inputData===reverse)
  return (
    <View>
      <Text>ShowResult</Text>
      <Text>user enterd is {inputData}</Text>

      {inputData===reverse ? <Text>input is palindrome</Text> :  <Text>input is not palindrome</Text> }
    </View>
  )
}

export default ShowResult

const styles = StyleSheet.create({})