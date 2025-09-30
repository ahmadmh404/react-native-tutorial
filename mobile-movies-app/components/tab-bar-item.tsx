import { images } from "@/constants/images";
import { Image, ImageBackground, Text } from "react-native";

type Props = {
  name: string;
  icon: any;
  focused: boolean;
};

export function TabBarItem({ name, icon, focused }: Props) {
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
