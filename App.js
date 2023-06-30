import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import ShowResult from './ShowResult';
// import { Button } from 'react-native';
// import Home from './components/Home';
import PlayVideo from './components/PlayVideo';

// const Stack = createStackNavigator();

export default function App() {

  return (

    <PlayVideo/>

    // <NavigationContainer>

    // <Stack.Navigator>
    //   {/* <Stack.Screen name="login" component={Login} /> */}
    //   <Stack.Screen name="Home"  component={Home}
      
    //     options={{
    //       headerTitle: () => <Text>exit button</Text>,
    //       headerLeft: () => (
    //         <Button
    //           onPress={() => alert('Are you wants to exit...')}
    //           title=" <-- "
    //           color="#000"
    //         />
    //       ),
    //     }}

    //    />
    //   <Stack.Screen name="showResult" component={ShowResult} />
      
    // </Stack.Navigator>
    // </NavigationContainer>
  );  
}



