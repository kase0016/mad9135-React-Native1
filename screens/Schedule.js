import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import ImageBlock from "../components/imageBlock";
const teamCelly = require("../assets/images/teamcelebration.jpg");
const startingQ = require("../assets/images/ArodImage.jpg");

export default function Schedule({ navigation, route }) {
  return (
    <ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("Stats")}
        >
          <Text style={styles.buttonText}>Story By The Numbers</Text>
        </TouchableOpacity>
      </View>
      <ImageBlock placeholderImageSource={teamCelly} />
      <ImageBlock placeholderImageSource={startingQ} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
