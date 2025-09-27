import { Platform, Text, View } from "react-native";

// Platform Specific Code
// means to separate teh UI by platform
// in case you want to show a specific UI for android and one for IOS
export default function Main() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Example1 />
    </View>
  );
}

// There are two ways.
// -Platform module

function Example1() {
  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: Platform.OS === "web" ? "lightblue" : "yellow",
        ...Platform.select({
          ios: {
            backgroundColor: "silver",
          },
          android: {
            backgroundColor: "green",
          },
          default: {
            backgroundColor: "crimson",
          },
        }),
      }}
    >
      <Text>Hello</Text>
    </View>
  );
}

function Example2() {
  if (Platform.OS === "android") console.log("return android component");
  if (Platform.OS === "ios") console.log("return IOS component");
}

// Android: the Platform.version cn return the OS version.
// IOS: also use parseInt(Platform.Version) to get the major Version number

// --Platform Specific file extension
// you an create two files for the same component but different extension,for example
// - BigInput.ios.tsx
// 2- BigInput.android.tsx

// when calling that component react native will detect the one is relevant for the platform to call.
// import BigInput from './BigINput'

// we can also use container.native.js to tell the metro this is for both IOS and Android
