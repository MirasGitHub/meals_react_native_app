import { Text } from "react-native";
import { View, StyleSheet } from "react-native";

const List = ({ data }) => {
	return data.map((dataItem) => (
		<View key={dataItem} style={styles.listItem}>
			<Text style={styles.itemText}>{dataItem}</Text>
		</View>
	));
};

const styles = StyleSheet.create({
	listItem: {
		borderRadius: 5,
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginVertical: 4,
		marginHorizontal: 12,
		backgroundColor: "#e1cae3",
	},
	itemText: {
		color: "#523854",
		textAlign: "center",
	},
});

export default List;
