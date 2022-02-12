import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
function Card({ title, image, subTitle }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    marginTop: 20,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.primary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 8,
    color: colors.black,
  },
});
export default Card;
