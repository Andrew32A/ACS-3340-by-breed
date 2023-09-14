import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
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
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={allAnimals}
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
    color: "red",
  },
  propertyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  propertyKey: {
    fontWeight: "bold",
  },
  propertyValue: {
    flex: 1,
    textAlign: "right",
  },
  averageRating: {
    flex: 1,
    textAlign: "right",
    color: "green",
  },
});
