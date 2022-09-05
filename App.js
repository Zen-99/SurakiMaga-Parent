import { StyleSheet, Text, View } from "react-native";
import LandingPage from "./src/screens/LandingPage";
import Login from "./src/screens/Login";
//import ProfilePage from "./src/screens/ProfilePage";
//import Registration from "./src/screens/Registration";
import Signup from "./src/screens/Signup";
import Verification from "./src/screens/Verification";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerNavigationRoutes from "./src/navigations/DrawerNavigationRoutes";
import HomeScreen from "./src/screens/HomeScreen";
//import StudentList from "./src/screens/StudentList";
//import EditProfile from "./src/screens/EditProfile";

const Stack = createNativeStackNavigator();

export default function App() {
    
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LandingPage" component={LandingPage} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Verification" component={Verification} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="DrawerNavigationRoutes" component={DrawerNavigationRoutes} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});