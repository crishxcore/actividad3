import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsNavigator = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#9BA1A6",
        headerShown: false, // Opcional: desactiva los encabezados
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="AddItem"
        options={{
          title: "Añadir tarea",
          tabBarLabel: "Añadir tarea",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="TaskList"
        options={{
          title: "Lista de tareas",
          tabBarLabel: "Mis tareas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsNavigator;
