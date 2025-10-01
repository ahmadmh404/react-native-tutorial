import React from "react";
import { Tabs } from "expo-router";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

type Props = {
  name: string;
  icon: any;
  focused: boolean;
};

function TabBarItem({ name, icon, focused }: Props) {
  if (focused) {
    return (
      <ImageBackground
        className="min-w-[120px] flex flex-row flex-1 min-h-16 mt-4 items-center justify-center rounded-full overflow-hidden"
        source={images.highlight}
      >
        <Image source={icon} tintColor={"#151312"} className="size-5" />
        <Text className="text-secondary text-sm font-semibold ml-2">
          {name}
        </Text>
      </ImageBackground>
    );
  } else {
    return (
      <View className="size-full flex justify-center items-center mt-4 rounded-full">
        <Image source={icon} tintColor={"#a8b5db"} className="size-5" />
      </View>
    );
  }
}

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: styles.tabBarIcon,
        tabBarStyle: styles.tabBar,
        animation: "fade",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarItem name="Home" icon={icons.home} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarItem name="Search" icon={icons.search} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarItem name="Saved" icon={icons.save} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarItem name="Profile" icon={icons.person} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#0f0d23",
    borderRadius: 50,
    marginHorizontal: 20,
    marginBottom: 36,
    height: 52,
    position: "absolute",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#0f0d23",
  },

  tabBarIcon: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
