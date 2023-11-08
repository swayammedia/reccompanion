import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Pressable,
	Dimensions,
	ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { WebView } from 'react-native-webview';	

const Webviewer = ({ navigation, route }) => {
	const { item } = route.params;

	console.log(item);
	return (
		<View style={{ backgroundColor: item.color, flex: 1 }}>
			<SafeAreaView style={{ flex: 1 }}>
			<WebView 
				   source={{
					 uri: 'https://rec-experience.netlify.app/360deg'
				   }}
				   />	
			</SafeAreaView>
			
		</View>
	);
};

export default Webviewer;

const styles = StyleSheet.create({});
