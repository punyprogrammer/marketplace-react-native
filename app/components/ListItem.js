import React from "react";
import { Image, View, StyleSheet, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({ title, subTitle, image ,onPress}) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <Image resizeMode="cover" style={styles.image} source={image} />
        <View style={styles.textContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 10,
    flexDirection: "row",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  subTitle: { color: colors.medium },
  textContainer: {
    marginLeft: 20,
    fontSize: 16,
  },
  title: { fontWeight: "500" },
});

export default ListItem;
