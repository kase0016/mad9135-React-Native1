import { StyleSheet, Image } from "react-native";

export default function ImageBlock({ placeholderImageSource }) {
  return <Image source={placeholderImageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 375,
    height: 440,
    borderRadius: 18,
    marginBottom: 20,
    marginLeft: 10,
  },
});
