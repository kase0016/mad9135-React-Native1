import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";

const DATA = [
  { id: "1", playerName: "Aaron Rodgers", playerPosition: "QB" },
  { id: "2", playerName: "Garrett Wilson", playerPosition: "WR" },
  { id: "3", playerName: "Breece Hall", playerPosition: "RB" },
];

const Item = ({ playerName, playerPosition }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textStyle}>
        {playerName}, {playerPosition}
      </Text>
    </View>
  );
};

export default function Stats({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("Schedule")}
        >
          <Text style={styles.buttonText}>Team Ranking</Text>
        </Pressable>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </Pressable>
      </View>
      <FlatList
        style={styles.flatlistStyle}
        data={DATA}
        renderItem={({ item }) => (
          <Item
            playerName={item.playerName}
            playerPosition={item.playerPosition}
          />
        )}
        keyExtractor={(item) => item.id}
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
    paddingTop: 70,
  },
  itemContainer: {
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 10,
    paddingBottom: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "green",
    borderRadius: 5,
    display: "flex",
  },
  textStyle: {
    color: "white",
  },
  flatlistStyle: {
    maxHeight: 250,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    gap: 5,
    paddingBottom: 20,
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: "green",
    borderStyle: "solid",
    borderRadius: 5,
    padding: 20,
    justifyContent: "center",
    flex: 1,
  },
  buttonText: {
    textAlign: "center",
  },
});
