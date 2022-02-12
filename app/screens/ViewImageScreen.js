import React from "react";
import { Image, View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.cancelIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>

      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can" color="white" size={35} />
      </View>
      <Image style={styles.image} source={require("../assets/sofa.jpg")} />
    </View>
  );
}
const styles = StyleSheet.create({
  cancelIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "70%",
  },
});

export default ViewImageScreen;
