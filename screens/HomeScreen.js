import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Welcome To{"\n"}The Football Page</Text>
      <Button
        title="See How The Team Is Doing"
        onPress={() => navigation.navigate("Schedule")}
        color="green"
      ></Button>
      <Button
        title="Story By The Numbers"
        onPress={() => navigation.navigate("Stats")}
        color="green"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  textStyle: {
    fontSize: 25,
    textAlign: "center",
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
