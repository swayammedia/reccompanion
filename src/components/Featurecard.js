import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
} from "react-native";
import React from "react";
import { colors, recipeList } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Featurecard = () => {
	const navigation = useNavigation();
	return (
		<View>
			<FlatList
				data={recipeList}
				renderItem={({ item }) => (
					<Pressable
						onPress={() => navigation.navigate("RecipeDetail", { item: item })}
						style={{
							backgroundColor: colors.COLOR_LIGHT,
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.1,
							shadowRadius: 7,
							borderRadius: 16,
							marginVertical: 16,
							alignItems: "center",
							paddingHorizontal: 8,
							paddingVertical: 26,
						}}
					>
						<Image
							source={item.image}
							style={{ width: 145, height: 150, resizeMode: "center" }}
						/>
						<Text style={{marginTop:10,fontSize:17  }}>{item.name}</Text>
						<View style={{ flexDirection: "row", marginTop: -4 }}>
							<Text>{item.time}</Text>
							
							<View style={{ flexDirection: "row" }}>
								<Text style={{ marginRight: 4 }}>{item.rating}</Text>
								<FontAwesome
									
									
									
								/>
							</View>
						</View>
					</Pressable>
				)}
				numColumns={2}
				columnWrapperStyle={{
					justifyContent: "space-between",
				}}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default Featurecard;

const styles = StyleSheet.create({});
