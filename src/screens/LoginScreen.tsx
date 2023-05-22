import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation: any = useNavigation();

  return (
    <View className="flex-1 items-center justify-around bg-slate-900 p-8 pt-12 gap-2">
      {/* Section 1 */}
      <View className="flex gap-3 items-center">
        <Image
          source={require("../../assets/icon.png")}
          className="h-20 w-20"
        />
        <Text className="text-white text-xl font-bold">Welcome!</Text>
        <Text className="text-white text-sm">Lucy Finance</Text>
      </View>

      {/* Section 2 */}
      <View className="flex items-center justify-center gap-4 p-5">
        <TextInput
          className="bg-slate-700 w-1/2 text-white text-center px-5 py-1"
          maxLength={6}
          placeholder="Enter your pin"
          placeholderTextColor={"white"}
          keyboardType="number-pad"
        />
        <TouchableOpacity
          className="bg-slate-700 p-2 rounded-lg"
          onPress={() => navigation.navigate("Home")}
        >
          <Text className="text-white">Login</Text>
        </TouchableOpacity>
      </View>

      {/* Section 3 */}
      <View></View>
    </View>
  );
};

export default LoginScreen;
