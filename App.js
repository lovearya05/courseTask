import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Login from './Login';
// import Home from './Home';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShowResult from './ShowResult';
import { Button } from 'react-native';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

    {/* <Stack.Navigator>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="Home"  component={Home}
      
        options={{
          headerTitle: () => <Text>exit button</Text>,
          headerLeft: () => (
            <Button
              onPress={() => alert('Are you wants to exit...')}
              title=" <-- "
              color="#000"
            />
          ),
        }}

       />
      <Stack.Screen name="showResult" component={ShowResult} />
      
    </Stack.Navigator> */}

    </NavigationContainer>
  );  
}

