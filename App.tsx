import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

//Navigators
import RootNavigator from "../GetirClone/src/Navigators/RootNavigator";

//Redux
import { Provider } from "react-redux";
import store from "../GetirClone/src/redux/store";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

