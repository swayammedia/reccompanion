import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import Featurecard from "../components/Featurecard";

const Featurelist = () => {
	return (
		<SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
			{/* render header */}
			<Header headerText={"Hi, Swayam "}  />

			{/* Search Filter */}
			<SearchFilter icon="search" placeholder={"Search"} />

			{/* Categories filter */}

			
		

			<View style={{ marginTop: 22, flex: 1 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>All In One Place</Text>
				{/* Recipes list */}

				<Featurecard />
			</View>
		</SafeAreaView>
	);
};

export default Featurelist;

const styles = StyleSheet.create({});
