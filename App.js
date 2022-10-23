import { StyleSheet, Text, View } from "react-native";
import LandingPage from "./src/screens/LandingPage";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import Verification from "./src/screens/Verification";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import TabNavigator from "./src/navigations/TabNavigator";
import Payments from "./src/screens/Payments";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Payments" component={Payments} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
