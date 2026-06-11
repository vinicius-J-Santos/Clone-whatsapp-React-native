import { Tabs } from "expo-router"

export default function RootLayout() {
	return (
		<Tabs>
           	 	<Tabs.Screen name="index" options={{title: "conversas"}} />
           	 	<Tabs.Screen name="atualizacoes" options={{title: "atualizacoes"}} />
           	 	<Tabs.Screen name="comunidades" options={{title: "comunidades"}} />
           	 	<Tabs.Screen name="ligacoes" options={{title: "ligacoes"}} />
        </Tabs>
    )
}