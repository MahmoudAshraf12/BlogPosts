import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity} from 'react-native';
import IndexScreen from './src/Screens/IndexScreen';
import { Provider } from './src/Context/BlogContext';
import ShowScreen from './src/Screens/ShowScreen';
import CreateScreen from './src/Screens/CreateScreen';
import EditScreen from './src/Screens/EditScreen';
import { Feather, EvilIcons } from "@expo/vector-icons";


const Stack = createStackNavigator();
const App =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Blogs" }}>
        <Stack.Screen name="Index" component={IndexScreen} options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <Feather name="plus" size={30} style={{marginRight:25}}/>
                </TouchableOpacity>
              ),
            })}/>
        <Stack.Screen name="Show" component={ShowScreen} options={({ route, navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Edit", { id: route.params.id })
                  }
                >
                  <EvilIcons name="pencil" size={35} />
                </TouchableOpacity>
              ),
            })}/>
        <Stack.Screen name="Create" component={CreateScreen}/>
        <Stack.Screen name="Edit" component={EditScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});


export default ()=>{
  return <Provider>
    <App/>
  </Provider>
} 