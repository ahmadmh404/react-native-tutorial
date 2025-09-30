import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="bg-gray-100"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-light-300">Hello, World.</Text>
    </View>
  );
}
