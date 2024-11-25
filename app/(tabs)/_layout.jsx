import { Tabs } from "expo-router";

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
        }}
      />
      <Tabs.Screen
        name="AddItem"
        options={{
          title: "Añadir tarea",
          tabBarLabel: "Añadir",
        }}
      />
      <Tabs.Screen
        name="TaskList"
        options={{
          title: "Lista de tareas",
          tabBarLabel: "Tareas",
        }}
      />
    </Tabs>
  );
};

export default TabsNavigator;
