import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { images } from "@/constants/images";
import useFetch from "@/services/use-fetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/movie-card";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/search-bar";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: movies,
    loading: loadingSearch,
    error: errorSearch,
    refetch: searchMovies,
    reset,
  } = useFetch(() => fetchMovies(searchQuery), false);

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const func = setTimeout(async () => {
      if (searchQuery.trim()) {
        await searchMovies();
      } else {
        reset();
      }
    }, 500);

    return () => {
      clearTimeout(func);
    };
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-1 w-full absolute z-0"
        resizeMode="cover"
      />

      <FlatList
        data={movies}
        className="px-5"
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={({ item }) =>
          `item-${item?.id.toString()}-${Math.random()}`
        }
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 20,
          marginHorizontal: 16,
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListHeaderComponent={
          <View className="w-full mt-20 flex justify-center items-center">
            <Image
              source={icons.logo}
              className="w-12 h-10"
              resizeMode="cover"
            />

            <View className="w-full my-5">
              <SearchBar
                value={searchQuery}
                onChangeText={handleSearchQueryChange}
                placeholder="Search movies..."
              />
            </View>

            {loadingSearch && (
              <ActivityIndicator
                size={"large"}
                color={"#0000ff"}
                className="my-3"
              />
            )}

            {errorSearch && (
              <Text className="text-red-500 my-3">
                Error: {errorSearch.message}
              </Text>
            )}

            {/* Display if everything is correct */}
            {!errorSearch &&
              !loadingSearch &&
              searchQuery.trim() &&
              movies?.length > 1 && (
                <Text className="text-lg font-bold text-white mb-3">
                  Search results for{" "}
                  <Text className="text-accent">{searchQuery}</Text>
                </Text>
              )}
          </View>
        }
        ListEmptyComponent={
          !loadingSearch && !errorSearch ? (
            <View className="mt-10 px-5">
              <Text className="text-center text-gray-500">
                {searchQuery.trim()
                  ? "No search results found"
                  : "Search for a movie"}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Search;
