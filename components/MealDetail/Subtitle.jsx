import { View, StyleSheet, Text } from "react-native";

const Subtitle = ({ children }) => {
	return (
		<View style={styles.subtitleContainer}>
			<Text style={styles.subtitle}>{children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	subtitleContainer: {
		padding: 6,
		marginHorizontal: 14,
		marginVertical: 4,
		borderBottomColor: "#e1cae3",
		borderBottomWidth: 2,
	},
	subtitle: {
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
		color: "#e1cae3",
	},
});

export default Subtitle;
