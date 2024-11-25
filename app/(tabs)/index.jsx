import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#dddddd",
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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

export default Home;
