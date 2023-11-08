import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<Image
			    
				source={require("../../assets/images/uni1.png")}
				style={{ marginTop: 15}}
			/>

			<Text style={{ color: "#f96163", fontSize: 30, fontWeight: "bold" }}>
				Rec Companion
			</Text>

			<Text
				style={{
					fontSize: 20,
					fontWeight: "bold",
					color: "#3c444c",
					marginTop: 5,
					marginBottom:40,
				}}
			>
				Redefining College Convenience
			</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("RecipeList")}
				style={{
					backgroundColor: "#f96163",
					borderRadius: 18,
					paddingVertical: 18,
					width: "60%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Let's Go
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
