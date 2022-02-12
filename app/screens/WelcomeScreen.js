import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={4}
      source={require("../assets/welcome.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImg}
          source={require("../assets/logo-red.png")}
        />
        <Text style={styles.tagLine}>Sell What You Dont Need!!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="LOGIN" />
        <AppButton title="REGISTER" color="secondary" />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,

    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },

  logoImg: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 35,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 25,
    marginTop: 10,
    fontWeight: "600",
  },
});

export default WelcomeScreen;
