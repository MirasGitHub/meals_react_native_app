import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

const MealDetailScreen = ({ route, navigation }) => {
	const favoriteMealsContext = useContext(FavoritesContext);

	const mealId = route.params.mealId;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	const isMealFavorite = favoriteMealsContext.ids.includes(mealId);

	const changeFavoriteStatusHandler = () => {
		if (isMealFavorite) {
			favoriteMealsContext.removeFavorite(mealId);
		} else {
			favoriteMealsContext.addFavorite(mealId);
		}
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						icon={isMealFavorite ? "star" : "star-outline"}
						color="white"
						onPress={changeFavoriteStatusHandler}
					/>
				);
			},
		});
	}, [navigation, changeFavoriteStatusHandler]);

	return (
		<ScrollView style={styles.root}>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<View>
				<MealDetails
					duration={selectedMeal.duration}
					affordability={selectedMeal.affordability}
					complexity={selectedMeal.complexity}
					textStyle={styles.detailText}
				/>
			</View>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={selectedMeal.ingredients} />
					<Subtitle>Steps</Subtitle>
					<List data={selectedMeal.steps} />
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	root: {
		marginBottom: 32,
	},
	image: {
		width: "100%",
		height: 300,
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 24,
		margin: 8,
		color: "white",
	},
	detailText: {
		color: "white",
	},
	listOuterContainer: {
		alignItems: "center",
	},
	listContainer: {
		maxWidth: "80%",
	},
});

export default MealDetailScreen;
