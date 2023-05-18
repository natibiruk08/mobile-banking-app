import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Person = () => {
  return (
    <TouchableOpacity className="flex-row justify-between my-1">
      {/* Avatar */}

      <View className="flex-row gap-2 items-center">
        <View className="bg-slate-600 p-2 rounded-md">
          <Image
            source={require("../../assets/user.png")}
            className="h-10 w-10"
          />
        </View>
        <View>
          <Text className="text-white text-base">Peter Filatov</Text>
          <Text className=" text-gray-400 font-bold text-sm">
            Money receive
          </Text>
        </View>
      </View>

      {/* Amount */}
      <View>
        <Text className="text-gray-100 text-lg">$739.65</Text>
        <Text className="text-green-600 font-bold text-base">Completed</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Person;
