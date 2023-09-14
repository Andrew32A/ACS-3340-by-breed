import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
} from "react-native";
import { cats, dogs } from "./breeds";

export default function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [listType, setListType] = React.useState("all");

  let currentList;
  if (listType === "cats") currentList = cats;
  else if (listType === "dogs") currentList = dogs;
  else currentList = [...cats, ...dogs];

  const filteredAnimals = currentList.filter((animal) =>
    animal.breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getAverageRating = (item) => {
    let sum = 0;
    let count = 0;
    for (let key in item) {
      if (key !== "breed") {
        sum += item[key];
        count++;
      }
    }
    return (sum / count).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search for a breed..."
      />

      <View style={styles.buttonContainer}>
        <Button title="Show Cats" onPress={() => setListType("cats")} />
        <Button title="Show Dogs" onPress={() => setListType("dogs")} />
        <Button title="Show All" onPress={() => setListType("all")} />
      </View>

      <FlatList
        style={styles.list}
        data={filteredAnimals}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.breedName}>
              {item.breed} - Avg: {getAverageRating(item)}
            </Text>
            {Object.keys(item).map((key) => {
              if (key !== "breed") {
                return (
                  <View key={key} style={styles.propertyContainer}>
                    <Text style={styles.propertyKey}>{key}</Text>
                    <Text style={styles.propertyValue}>{item[key]}</Text>
                  </View>
                );
              }
              return null;
            })}
          </View>
        )}
        keyExtractor={(item) => item.breed}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  list: {
    flex: 1,
    width: "100%",
  },
  itemContainer: {
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  breedName: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  propertyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 5,
  },
  propertyKey: {
    fontSize: 16,
    color: "grey",
  },
  propertyValue: {
    fontSize: 16,
  },
});
