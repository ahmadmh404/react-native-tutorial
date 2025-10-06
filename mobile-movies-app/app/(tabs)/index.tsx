import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import SearchBar from "@/components/search-bar";
import { useRouter } from "expo-router";
import useFetch from "@/services/use-fetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/movie-card";

export default function Index() {
  const router = useRouter();

  const handlePress = () => router.push("/search");

  const {
    data: movies,
    error: moviesError,
    loading: moviesLoading,
  } = useFetch(() => fetchMovies());

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        {moviesError && <Text>Error: {moviesError.message}</Text>}

        {moviesLoading && (
          <ActivityIndicator
            size={"large"}
            color={"#0000ff"}
            className="mt-10 self-center"
          />
        )}

        {movies?.length === 0 && (
          <View className="flex-row justify-center items-stretch">
            <Text className="text-gray-500">
              No movies available at the moment.
            </Text>
          </View>
        )}

        {movies && (
          <View className="flex-1 mt-5">
            <SearchBar onPress={handlePress} placeholder="Search for a movie" />

            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>

              <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={({ item }) =>
                  `item-${item?.id.toString()}-${Math.random()}`
                }
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
