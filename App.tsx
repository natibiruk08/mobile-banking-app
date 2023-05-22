import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import { StackNavigator } from "./src/navigation";

export default function App() {
  return (
    <>
      <StatusBar style="inverted" />
      <StackNavigator />
    </>
  );
}
