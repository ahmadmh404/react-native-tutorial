import {
  View,
  Text,
  ActivityIndicator,
  Image,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import React, { useState } from "react";

export default function Main() {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      {/* <ActivityIndicatorEx /> */}
      {/* <ImageEx /> */}
      <ImageBackgroundEx />
    </View>
  );
}

/**
 * Activity Bar:
 * -Displays a circular loading indicator
 * - Props:
 * -- size?: small | large
 * -- color?: string
 * -- animating: boolean
 * -- hideWhenStopped: boolean - Hide the loader when the animating === false.
 */

function ActivityIndicatorEx() {
  const [loading, setLoading] = useState(true);

  return (
    <View>
      <Text>
        {loading === true ? (
          <ActivityIndicator
            size={"large"}
            animating={loading}
            hidesWhenStopped={false}
          />
        ) : (
          "turn the state to true to show the loading indicator."
        )}
      </Text>
    </View>
  );
}

/**
 * Image
 * - equals to and img element in Web
 * - display different types of images.
 * - for network images you need to specify the dimensions of the image
 * - Props:
 * -- source: ImageSource
 */

function ImageEx() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && (
        <View style={{ flex: 1 }}>
          <ActivityIndicator size={"small"} />
        </View>
      )}

      <Image
        resizeMode="cover"
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
          cache: "force-cache",
        }}
        onLoadStart={() => setLoading(true)}
        onLoad={() => setLoading(false)}
        style={{
          ...styles.bigLogo,
          opacity: loading ? 0.5 : 1,
          backfaceVisibility: loading ? "visible" : "visible",
        }}
      />
    </>
  );
}

/**
 * ImageBackground
 * - Serves the same concept as background-image in web dev.
 * - it take the same props as Image as well as children.
 */

function ImageBackgroundEx() {
  return (
    <ImageBackground
      style={styles.image}
      source={{
        uri: "https://images.pexels.com/photos/4738081/pexels-photo-4738081.jpeg?auto=compress&cs=tinysrgb&h=240&fit=crop&crop=focalpoint&dpr=1",
        cache: "force-cache",
      }}
    >
      <View style={styles.subContainer}>
        <Text style={styles.text}>Hello</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  subContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 500,
    height: 500,
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },

  logo: {
    width: 66,
    height: 58,
  },

  bigLogo: {
    width: 200,
    height: 200,
  },

  text: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
  },
});

/**
 * KeyboardAvoidingView:
 * - a component that adjusts the its position, bottom padding or height
 * -  based on the keyboard height to remain visible while the virtual keyboard is opened.
 * - Props:
 *  -- behavior: the area it will adjust itself in: 'padding' | "height" | "position"
 *
 *
 */

function KeyboardAvoidingViewEx() {
  return (
    <KeyboardAvoidingView style={keyboardStyles.container} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={keyboardStyles.inner}>
          <TextInput style={keyboardStyles.textInput} placeholder="Username" />

          <View style={keyboardStyles.btnContainer}></View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const keyboardStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});
