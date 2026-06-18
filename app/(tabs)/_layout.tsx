import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
	return (
		<Tabs screenOptions={{
        tabBarActiveTintColor: "#075E54",
        tabBarInactiveTintColor: "#999"}}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Conversas",
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="chatbubbles"
							size={size}
							color={color}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="atualizacoes"
				options={{
					title: "Atualizações",
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="chatbubble-ellipses"
							size={size}
							color={color}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="comunidades"
				options={{
					title: "Comunidades",
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="people"
							size={size}
							color={color}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="ligacoes"
				options={{
					title: "Ligações",
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="call"
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}