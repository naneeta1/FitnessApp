import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import JoinNowCard from "../components/JoinNowCard";

import DailyActivityCard from "../components/DailyActivityCard";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import ActivityToday from "../components/ActivityToday";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <SearchBar />
        <JoinNowCard />
        <DailyActivityCard />
        <ActivityToday />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#515151",
    marginTop: 30,
  },
});
