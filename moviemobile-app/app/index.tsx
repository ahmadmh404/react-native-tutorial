import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="bg-gray-500"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-blue-500">Hello, World.</Text>
    </View>
  );
}
