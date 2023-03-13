import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { loginWeb3 } from "./service/auth";

export default function App() {
  const isLoggedIn = false;
  const state = loginWeb3();

  function userLoggedView() {
    return (
      <>
        <Button title="Logout" />
        <StatusBar style="auto" />
      </>
    );
  }

  function userNotLoggedView() {
    return (
      <>
        <Button title="Sign in" />
        <View style={{ height: 10 }} />
        <Button title="Sign up" />
        <StatusBar style="auto" />
      </>
    );
  }

  return <View style={styles.container}>{isLoggedIn ? userLoggedView() : userNotLoggedView()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
