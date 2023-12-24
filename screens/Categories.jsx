import { View, StyleSheet, Text, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const Categories = ({ navigation }) => {
	function renderCategoryItem(itemData) {
		const pressHandler = () => {
			navigation.navigate("MealsOverview", {
				categoryId: itemData.item.id,
			});
		};

		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onPress={pressHandler}
			/>
		);
	}

	return (
		<View>
			<FlatList
				data={CATEGORIES}
				keyExtractor={(item) => item.id}
				renderItem={renderCategoryItem}
				numColumns={2}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default Categories;
