import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as Linking from 'expo-linking';

//Navigators
import RootNavigator from "./src/Navigators/RootNavigator";

//Redux
import { Provider } from "react-redux";
import store from "./src/redux/store";

LogBox.ignoreAllLogs(true);

const prefix = Linking.createURL('/')
const universal = Linking.createURL('http://getir.example.com')

export default function App() {
  const linking= {
    prefixes:[prefix,universal],
    config: {
      screens: {
        Sohbet: {
          screens:{
            CartScreen:{
            path:"cartScreen/:message",
            parse: {
              message: (message:string) => `${message}`,
            },
            }
          }
        }
      }
    }
  }
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

