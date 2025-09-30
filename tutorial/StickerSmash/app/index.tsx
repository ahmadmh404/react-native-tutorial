// import Main from "@/components/lesson-1";
// import Main from "@/components/lesson-2";
// import Main from "@/components/lesson-3";
// import Main from "@/components/lesson-4";
import Main from "@/components/lesson-5";

import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SafeAreaView>
        <View>
          <Main />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
