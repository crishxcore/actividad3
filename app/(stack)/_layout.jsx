import { Stack } from "expo-router";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const StackNavigator = () => {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="details"
        options={{
          title: "Detalles",
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: "Acerca de",
        }}
      />
      <Stack.Screen
        name="help"
        options={{
          title: "Ayuda",
        }}
      />
    </Stack>
  );
};

const styles = StyleSheet.create({
  headerLinks: {
    flexDirection: "row",
    gap: 15,
    marginRight: 10,
  },
  linkText: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default StackNavigator;
