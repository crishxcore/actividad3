import { Stack } from "expo-router";
import TaskProvider from "../providers/TaskProvider";

const AppLayout = () => {
  return (
    <TaskProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(stack)" />
      </Stack>
    </TaskProvider>
  );
};

export default AppLayout;
