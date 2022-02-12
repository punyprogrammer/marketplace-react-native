import React from "react";
import ListItem from "../components/ListItem";
import { FlatList } from "react-native";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
const data = [
  {
    id: 1,
    title: "Title-1",
    desc: "Desc-1",
    image: require("../assets/seller.jpg"),
  },
  {
    id: 2,
    title: "Title-2",
    desc: "Desc-2",

    image: require("../assets/seller.jpg"),
  },
  {
    id: 3,
    title: "Title-3",
    desc: "Desc-3",

    image: require("../assets/seller.jpg"),
  },
];
function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.desc}
            image={item.image}
            onPress={()=>console.log('Message Clicked!!')}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeperator />}
      />
    </Screen>
  );
}

export default MessagesScreen;
