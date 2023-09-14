import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { petTypes, cats, dogs, allAnimals } from "./breeds";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={allAnimals}
        renderItem={({ item }) => <Text>{item.breed}</Text>}
        keyExtractor={(item) => item.breed}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flex: 1,
    width: "100%",
    margin: 0,
    paddingTop: 50,
  },
  text: {
    fontSize: 30,
    color: "red",
  },
});
