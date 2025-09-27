import { useState } from "react";
import { Alert, Button, Text, View, Switch, StyleSheet } from "react-native";

export default function Main() {
  return (
    <>
      {/* <Example1 /> */}
      {/* <Example2 /> */}
      <Example3 />
    </>
  );
}

// Button
/**
 * Built with Pressable
 * Props:
 * - onPress: required - callback function
 * - disabled: boolean
 * - title: required  string
 * - color: hex or string
 * - accessibilityLabel: string
 */

function Example1() {
  return (
    <Button
      title="Press m!"
      disabled={false}
      color={"blue"}
      accessibilityLabel="Hello there "
    />
  );
}

function Example2() {
  return (
    <View style={{ display: "flex", gap: 5 }}>
      <Text style={{ fontSize: 20 }}>Press the button below</Text>
      <Button title="Step on me!" color={"#f194ff"} />

      <Button
        title="Step ot show an alert!"
        onPress={() => Alert.alert("Alert...")}
        color={"#f194ff"}
      />
    </View>
  );
}

/**
 * Switch:
 * - it's a controlled component.
 * -Must provide an onValueChange o update the value prop
 * Props:
 * - value: boolean
 * - onValueChange: (value; boolean) => void.
 * - disabled: boolean.
 * - TrackColor: the slider color.. { true: color, false: color }
 * - thumbColor: for the circle color.
 * - ios_backgroundColor: for IOS Devices
 */

function Example3() {
  const [status, setStatus] = useState(false);

  const handleStatusChange = (status: boolean) => {
    setStatus(status);
  };

  return (
    <View style={styles.container}>
      <Switch
        value={status}
        onValueChange={handleStatusChange}
        trackColor={{ true: "red", false: "blue" }}
        thumbColor={"white"}
        ios_backgroundColor={"crimson"}
      />
      <Text style={{ fontSize: 18 }}>{status ? "On" : "Off"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
