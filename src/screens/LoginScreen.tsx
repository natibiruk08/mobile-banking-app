import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation: any = useNavigation();

  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity
        className="bg-slate-700 p-5 rounded-lg"
        onPress={() => navigation.navigate("Home")}
      >
        <Text className="text-white">Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
