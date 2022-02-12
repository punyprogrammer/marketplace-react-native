import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
function ListingDetailsScreen(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale </AppText>
        <AppText style={styles.price}>$200</AppText>
      </View>
      <View>
        <ListItem
          image={require("../assets/seller.jpg")}
          title="Anirudh Singh"
          subTitle="5 Products"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 35,
  },
});

export default ListingDetailsScreen;
