// Handling Touches

import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function Main() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <MyButton /> */}
      {/* <ViewInDepth /> */}
      {/* <MyPressable /> */}
      <AdvancedPressable />
    </View>
  );
}

// Press a button
function MyButton() {
  return (
    <Button title="Press me" onPress={() => console.log("YOu pressed me")} />
  );
}

// View in depth

function ViewInDepth() {
  const styles = StyleSheet.create({
    view: {
      height: 500,
      width: 500,
      backgroundColor: "crimson",
    },
  });

  return (
    <View
      style={styles.view}
      aria-label="view-in-depth"
      accessibilityHint="Hint"
    />
  );
}

// Pressable: can detect various stages of press interactions on any of it's children.
function MyPressable() {
  const styles = StyleSheet.create({
    pressable: {
      padding: 10,
      color: "white",
      backgroundColor: "rgba(255, 0, 0, 0.5)",
    },
    text: {
      backgroundColor: "red",
    },
  });

  const handlePress = () => {
    console.log("I was pressed");
  };

  const handleLogPress = () => {
    console.log("You Pressed me long!!!");
  };

  const handlePressIn = () => {
    console.log("Press just started");
  };

  const handlePressOut = () => {
    console.log("Press just finished");
  };

  return (
    <Pressable
      style={styles.pressable}
      onPress={handlePress}
      onLongPress={handleLogPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      hitSlop={100}
    >
      <Text style={styles.text}>I am pressable</Text>
    </Pressable>
  );
}

function AdvancedPressable() {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = "";

  if (timesPressed > 1) {
    textLog = timesPressed + "x Pressed";
  } else if (timesPressed > 0) {
    textLog = textLog + "onPress";
  }

  const pressedContent = (pressed: boolean) => (
    <Text style={{ fontSize: 50 }}>{pressed ? "Pressed!" : "Press Me"}</Text>
  );

  return (
    <>
      <Pressable
        unstable_pressDelay={1000}
        onPressIn={() => console.log("Press in after 1000ms delay")}
        disabled={false}
        android_ripple={{
          color: "red",
        }}
        onPress={() => {
          setTimesPressed((prev) => prev + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 240, 255)" : "white",
          },
        ]}
      >
        {/* Pressable Component Accepts only one component as children */}
        {({ pressed }) => pressedContent(pressed)}
      </Pressable>

      <View testID="pressable_press_console">
        <Text>Test</Text>
      </View>
    </>
  );
}

/**
 * Props:
 * - children: either a React node ora {({presses}) => React Node}
 * - disabled: boolean
 * - onHoverIn: ({nativeEvent: MouseEvent}) =>void
 * - onHoverOut: ({nativeEvent: MouseEvent}) =>void
 * - onLongPress: ({nativeEvent: MouseEvent}) => void
 * - onPress; ...
 * - onPressIn; ...
 * - onPressOut; ...
 */
