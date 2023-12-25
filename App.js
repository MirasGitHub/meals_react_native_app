import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import Categories from "./screens/Categories";
import MealsOverview from "./screens/MealsOverview";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: "#523854" },
				sceneContainerStyle: { backgroundColor: "#704C73" },
				headerTintColor: "white",
				drawerContentStyle: { backgroundColor: "#523854" },
				drawerActiveBackgroundColor: "#C897D1",
				drawerActiveTintColor: "black",
				drawerInactiveTintColor: "white",
			}}
		>
			<Drawer.Screen
				name="Categories"
				component={Categories}
				options={{
					title: "All Categories",
					drawerIcon: ({ color, size }) => (
						<Ionicons name="list" color={color} size={size} />
					),
				}}
			/>
			<Drawer.Screen
				name="Favorites"
				component={FavoritesScreen}
				options={{
					drawerIcon: ({ color, size }) => (
						<Ionicons name="star" color={color} size={size} />
					),
				}}
			/>
		</Drawer.Navigator>
	);
}

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<FavoritesContextProvider>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: { backgroundColor: "#523854" },
							contentStyle: { backgroundColor: "#704C73" },
							headerTintColor: "white",
						}}
					>
						<Stack.Screen
							name="Drawer"
							component={DrawerNavigator}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen name="MealsOverview" component={MealsOverview} />
						<Stack.Screen
							name="MealDetail"
							component={MealDetailScreen}
							options={{
								title: "About the Meal",
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</FavoritesContextProvider>
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
});
