import { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  TextInputSubmitEditingEvent,
  View,
} from "react-native";

const logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  width: 80,
  height: 80,
};

export default function Main() {
  return (
    <ScrollView maximumZoomScale={5} pagingEnabled>
      {/* <Example1 /> */}
      {/* <Example2 /> */}
      {/* <Example3 /> */}
      <Example4 />
    </ScrollView>
  );
}

// basic text input control
function Example1() {
  const [name, setName] = useState("");

  const handleInputChange = (value: string) => {
    setName(value);
  };

  const handleSubmit = (e: TextInputSubmitEditingEvent) => {
    console.log(e.nativeEvent.text);
  };
  return (
    <ScrollView>
      <Text>Some Text in Text component.</Text>
      <View>
        <Image
          source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
          style={{
            width: 200,
            height: 200,
          }}
        />
      </View>

      <TextInput
        autoCorrect
        value={name}
        onChangeText={handleInputChange}
        onSubmitEditing={handleSubmit}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
    </ScrollView>
  );
}

// using scroll view
// use it to render a small amount of components
function Example2() {
  return (
    <ScrollView maximumZoomScale={1000}>
      <Text style={{ fontSize: 60 }}>Scroll me please</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{ fontSize: 60 }}>If you like a little ore</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{ fontSize: 60 }}>a bit more</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
    </ScrollView>
  );
}
// using list views
/// to render a list of view we use either, FlatList or SectionList

// FlatList:
// -- to render a log list of changing(the number of pieces may change) but similar structured pieces of data.
// --it renders only the elements visible in the screen
// -- two props: data: the source of info, and renderItem: callback fn to render the List Item
function Example3() {
  const style = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 40,
      height: 44,
    },
  });

  return (
    <FlatList
      style={style.container}
      data={listData}
      renderItem={({ item }) => <Text style={style.item}>{item.key}</Text>}
    />
  );
}

// if you want to split your data into logical sections with header sections, then use SectionList
function Example4() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: "bold",
      backgroundColor: "rgba(247,247,247,1.0)",
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

  return (
    <View style={styles.container}>
      <SectionList
        data={sectionData}
        sections={sections}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item) => `basicListEntry-${item}`}
      />
    </View>
  );
}

const listData = [
  { key: "Devin" },
  { key: "Dan" },
  { key: "Ahmad" },
  { key: "Jackson" },
  { key: "Devin" },
  { key: "Dan" },
  { key: "Ahmad" },
  { key: "Jackson" },
  { key: "Devin" },
  { key: "Dan" },
  { key: "Ahmad" },
  { key: "Jackson" },
  { key: "Devin" },
  { key: "Dan" },
  { key: "Ahmad" },
  { key: "Jackson" },
  { key: "Devin" },
  { key: "Dan" },
  { key: "Ahmad" },
  { key: "Jackson" },
  { key: "Devin" },
  { key: "Dan" },
  { key: "Ahmad" },
  { key: "Jackson" },
  { key: "Devin" },
  { key: "Dan" },
  { key: "Ahmad" },
  { key: "Jackson" },
  { key: "Devin" },
  { key: "Dan" },
  { key: "Ahmad" },
  { key: "Jackson" },
];

const sectionData = [
  "Jackson",
  "James",
  "Jillian",
  "Jimmy",
  "Joel",
  "John",
  "Julie",
];

const sections = [
  { title: "D", data: ["Devin", "Dan", "Dominic"] },
  {
    title: "J",
    data: ["Jackson", "James", "Jillian", "Jimmy", "Joel", "John", "Julie"],
  },
];

// on of the most use cases of the list view is when fetching data form a server
