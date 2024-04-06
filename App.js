import { StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "./src/components/Splash";
import Login from "./src/components/Login";
import Signup from "./src/components/Signup";
import Home from "./src/components/Home";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Render app under the status bar */}
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Splash"
          component={Splash}
        />
         <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
         <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Signup"
          component={Signup}
        />
         <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
