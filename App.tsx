import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 bg-slate-900 items-center justify-center">
      <Text className="text-white">Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
