import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
} from "react-native";
import { petTypes, cats, dogs, allAnimals } from "./breeds";

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

export default function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const filteredAnimals = allAnimals.filter((animal) =>
    animal.breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search for a breed..."
      />
      <FlatList
        style={styles.list}
        data={filteredAnimals}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.breedName}>{item.breed}</Text>
            <Text style={styles.averageRating}>
              Avg Rating: {getAverageRating(item)}
            </Text>
            {Object.keys(item).map((key) => {
              if (key !== "breed") {
                return (
                  <View style={styles.propertyContainer}>
                    <Text style={styles.propertyKey}>{key}</Text>
                    <Text style={styles.propertyValue}>{item[key]}</Text>
                  </View>
                );
              }
            })}
          </View>
        )}
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
  breedName: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  propertyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  propertyKey: {
    fontSize: 16,
    color: "grey",
  },
  propertyValue: {
    fontSize: 16,
  },
  averageRating: {
    fontSize: 18,
    color: "green",
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
});
