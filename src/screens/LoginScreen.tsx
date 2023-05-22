import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation: any = useNavigation();

  const [text, setText] = useState("");
  const [placeholder, setPlaceholder] = useState("Enter your pin");

  return (
    <View className="flex-1 items-center justify-around bg-slate-900 p-8 pt-12 gap-2">
      {/* Section 1 */}
      <View className="flex space-y-12 items-center">
        <Image
          source={require("../../assets/icon.png")}
          className="h-20 w-20"
        />
        <View className="flex items-center">
          <Text className="text-white text-2xl font-bold">Welcome!</Text>
          <Text className="text-white text-lg">Lucy Finance</Text>
        </View>
      </View>

      {/* Section 2 */}
      <View className="flex items-center justify-center gap-6 p-5">
        <TextInput
          className="bg-slate-700 w-1/2 text-white text-center text-xl px-14 py-2 rounded-md"
          maxLength={6}
          placeholder={placeholder}
          onFocus={() => setPlaceholder("")}
          placeholderTextColor={"white"}
          keyboardType="number-pad"
          clearTextOnFocus={true}
          secureTextEntry
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TouchableOpacity
          className="bg-slate-700 py-4 px-8 rounded-lg"
          onPress={() => {
            setText(""), navigation.navigate("Home");
          }}
        >
          <Text className="text-white">Login</Text>
        </TouchableOpacity>
      </View>

      {/* Section 3 */}
      <View>
        <Text className="text-white">Copyright © Lucy Finance</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
