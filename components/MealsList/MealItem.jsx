import {
	View,
	Text,
	StyleSheet,
	Pressable,
	Image,
	Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

const MealItem = ({
	id,
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
}) => {
	const navigation = useNavigation();

	const selectMealItemHandler = () => {
		navigation.navigate("MealDetail", {
			mealId: id,
		});
	};

	return (
		<View style={styles.mealItem}>
			<Pressable
				onPress={selectMealItemHandler}
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
			>
				<View style={styles.innerContainer}>
					<View>
						<Image source={{ uri: imageUrl }} style={styles.image} />
						<Text style={styles.title}>{title}</Text>
					</View>
					<MealDetails
						duration={duration}
						affordability={affordability}
						complexity={complexity}
					/>
				</View>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 5,
		backgroundColor: "white",
		elevation: 4,
		backgroundColor: "white",
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
	},
	innerContainer: {
		borderRadius: 5,
	},
	image: {
		width: "100%",
		height: 200,
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 18,
		margin: 8,
	},

	buttonPressed: {
		opacity: 0.5,
	},
});

export default MealItem;
