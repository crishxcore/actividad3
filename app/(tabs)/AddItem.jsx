import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Link } from "expo-router";

const AddItem = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.linkContainer}>
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Home</Text>
        </Link>
        <Link href="/AddItem" style={styles.link}>
          <Text style={styles.linkText}>AddItem</Text>
        </Link>
        <Link href="/TaskList" style={styles.link}>
          <Text style={styles.linkText}>TaskList</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#dddddd",
    flex: 1,
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  link: {
    marginHorizontal: 10,
  },
  linkText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default AddItem;
