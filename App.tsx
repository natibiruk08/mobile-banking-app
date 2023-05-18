import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Card from "./src/components/Card";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  return (
    <View className="flex-1 bg-slate-900 p-8 pt-12 gap-2">
      <StatusBar style="auto" />

      {/* Account details */}
      <View className="flex gap-6">
        {/* Avatar */}
        <View className="flex flex-row space-x-6 items-center">
          {/* <Image source={require("./assets/user.png")} className="h-16 w-16" /> */}
          <View className="bg-slate-800 p-5 rounded-full">
            <FontAwesome5 name="user" size={24} color="white" />
          </View>

          <View>
            <Text className="text-gray-400 text-base">Total Balance</Text>
            <Text className="text-white font-bold text-2xl">$3984.34</Text>
          </View>
        </View>

        {/* Welcome text */}
        <View className="my-5">
          <Text className="text-white text-3xl font-bold">Welcome</Text>
          <Text className="text-white text-3xl font-bold">Back Alex</Text>
        </View>
      </View>

      {/* Accounts */}
      <View className="">
        <View className="flex-row justify-between m-3">
          <TouchableOpacity>
            <Text className="text-white font-semibold text-lg">Accounts</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className="text-white font-semibold text-lg">Manage</Text>
          </TouchableOpacity>
        </View>

        {/* Cards */}

        <View className={"flex"}>
          {/* Row */}
          <View className={"flex-row justify-between"}>
            <View className={"w-1/2"}>
              <Card icon="Transfer" text="Transfer" />
            </View>
            <View className={"w-1/2"}>
              <Card icon="Topup" text="Topup" />
            </View>
          </View>

          {/* Row */}
          <View className={"flex-row justify-between"}>
            <View className={"w-1/2"}>
              <Card icon="Utilities" text="Utilities" />
            </View>
            <View className={"w-1/2"}>
              <Card icon="ATM" text="ATM" />
            </View>
          </View>
        </View>
      </View>

      {/* Recent transactions */}
      <View>
        <View className="flex-row justify-between">
          <Text className="text-gray-400 font-semibold text-base">
            Recent transactions
          </Text>
          <Text className="text-gray-400 font-semibold text-base">See all</Text>
        </View>
      </View>
    </View>
  );
}
