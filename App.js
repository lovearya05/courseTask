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
import PlayVideo from "./components/PlayVideo";
import Chapter from "./components/Chapter";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Youtube" // change the name of Youtube
          component={PlayVideo} // paste the youtube component
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VideoList"
          component={VideoList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Subject"
          options={{ headerShown: false }}
          component={Subject}
        />
        <Stack.Screen
          name="Chapter"
          options={{ headerShown: false }}
          component={Chapter}
        />
        <Stack.Screen name="showResult" component={ShowResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
