import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, Alert } from "react-native";
import { loginWeb3 } from "./service/auth";
import { WEB3AUTH_CLIENT_ID } from "@env";

export default function App() {
  const [user, setUser] = useState({
    sessionId: "",
    info: "",
  });

  function userLoggedView() {
    return (
      <>
        <Text>{user.sessionId}</Text>
        <StatusBar style="auto" />
      </>
    );
  }

  function userNotLoggedView() {
    return (
      <>
        <Button
          title="Sign in"
          onPress={async () => {
            try {
              const info = await loginWeb3();
              setUser({
                sessionId: info.sessionId,
                info: info.userInfo,
              });
              Alert.alert("success login");
            } catch (error) {
              Alert.alert(error);
            }
          }}
        />
        <Button title="Sign up" />
        <StatusBar style="auto" />
      </>
    );
  }

  return <View style={styles.container}>{user.sessionId.length > 0 ? userLoggedView() : userNotLoggedView()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
