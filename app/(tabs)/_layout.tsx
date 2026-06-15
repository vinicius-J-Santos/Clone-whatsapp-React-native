import { Tabs } from "expo-router"

export default function RootLayout() {
	return (
		<Tabs>
           	 	<Tabs.Screen name="index" options={{title: "conversas", headerShown: false}} />
           	 	<Tabs.Screen name="atualizacoes" options={{title: "atualizacoes", headerShown: false}} />
           	 	<Tabs.Screen name="comunidades" options={{title: "comunidades", headerShown: false}} />
           	 	<Tabs.Screen name="ligacoes" options={{title: "ligacoes", headerShown: false}} />
        </Tabs>
    )
}