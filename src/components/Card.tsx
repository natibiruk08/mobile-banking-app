import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import {
  MaterialIcons,
  Fontisto,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";

type CardProps = {
  icon: "Transfer" | "Topup" | "Utilities" | "ATM";
  text: string;
};

const Card: React.FC<CardProps> = ({ icon, text }) => {
  const renderIcon = () => {
    switch (icon) {
      case "Transfer":
        return <Fontisto name="arrow-swap" size={28} color="white" />;
      case "Topup":
        return <MaterialIcons name="send-to-mobile" size={28} color="white" />;
      case "Utilities":
        return (
          <MaterialCommunityIcons name="water-pump" size={28} color="white" />
        );
      case "ATM":
        return <Octicons name="credit-card" size={28} color="white" />;
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity className="bg-slate-800 rounded-xl m-1 p-8">
      <View className="flex gap-3 items-center text-white">
        {renderIcon()}
        <Text className="text-white font-bold text-lg">{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
