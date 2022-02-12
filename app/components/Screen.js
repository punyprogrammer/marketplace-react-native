import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Constants from "expo-constants";
function Screen(props) {
  return (
    <SafeAreaView style={styles.screen}>
      <View>{props.children}</View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
export default Screen;
