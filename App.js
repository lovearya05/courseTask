<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import ShowResult from './ShowResult';
// import { Button } from 'react-native';
// import Home from './components/Home';
import PlayVideo from './components/PlayVideo';
=======
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Login";
import Home from "./components/Home";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ShowResult from "./ShowResult";
import { Button } from "react-native";
import Subject from "./components/Subject";
import VideoList from "./components/VideoList";
>>>>>>> f45a524cdd19d447ea35af1e0cc35b366ed7fff5

// const Stack = createStackNavigator();

export default function App() {
  return (
<<<<<<< HEAD

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



=======
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={VideoList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Subject"
          options={{ headerShown: false }}
          component={Subject}
        />
        <Stack.Screen name="showResult" component={ShowResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
>>>>>>> f45a524cdd19d447ea35af1e0cc35b366ed7fff5
