import React from "react";
import { Tabs } from "expo-router";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ImageBackground, Text } from "react-native";

type Props = {
  name: string;
  icon: any;
  focused: boolean;
};

function TabBarItem({ name, icon, focused }: Props) {
  return (
    <ImageBackground
      className="flex flex-row flex-1 w-full min-w-[112px] min-h-14 mt-4 justify-center items-center overflow-hidden"
      source={images.highlight}
    >
      <Image source={icon} tintColor={"#151312"} className="size-5" />
      <Text className="text-secondary text-base font-semibold ml-2">
        {name}
      </Text>
    </ImageBackground>
  );
}

const TabsLayout = () => {
  return (
    <Tabs>
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
