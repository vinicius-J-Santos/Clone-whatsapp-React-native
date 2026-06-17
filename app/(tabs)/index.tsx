import { Text, View, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { Contact } from '@/components/index/contact';

export default function index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Uadizap</Text>
                <Text style={styles.searchBar}>preucurar...</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} contentContainerStyle={styles.Main}>
                <Pressable style={styles.pressable}><Contact name="Mãe" message="Saiu pra onde, criatura?!" notification={20}/></Pressable>
                <Pressable style={styles.pressable}><Contact name="Barreto" message="Chegou em casa?" notification={0}/></Pressable>
                <Pressable style={styles.pressable}><Contact name="Saac" message="Eae, bora jogar?" notification={5}/></Pressable>
                <Pressable style={styles.pressable}><Contact name="Benicyo" message="Fala, mano!" notification={2}/></Pressable>
                <Pressable style={styles.pressable}><Contact name="Dudu" message="E meus 20? vai paga nao?" notification={0}/></Pressable>
                <Pressable style={styles.pressable}><Contact name="Atacadão contrata" message="Legal esse curriculo viu" notification={2}/></Pressable>
                <Pressable style={styles.pressable}><Contact name="Arthur" message="Terminou os slides do Renata?" notification={1}/></Pressable>
                <Pressable style={styles.pressable}><Contact name="Nost" message="To com seu IP..." notification={3}/></Pressable>
                <Pressable style={styles.pressable}><Contact name="Miguel" message="A mãe ta perguntando onde você está" notification={0}/></Pressable>
                <Pressable style={styles.pressable}><Contact name="Grupo Geo" message="Coloca luto victor no final kkkk" notification={0}/></Pressable>
                <Pressable style={styles.pressable}><Contact name="Pera" message="Abre o Bloons ai man" notification={0}/></Pressable>
                <Pressable style={styles.pressable}><Contact name="Flip" message="To disc, bora mine" notification={0}/></Pressable>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    pressable: {
        width: '100%',
        marginBottom: 2
    },
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    header: {
        display: 'flex',
        width: '100%',
        height: '15%',
        backgroundColor: '#075E54',
        textAlign: 'left',
        justifyContent: 'flex-start',
        zIndex: 1
    },
    title: {
        marginTop: 5,
        marginLeft: 10,
        color: '#d8d8d8',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    searchBar: {
        marginTop: 10,
        marginLeft: '5%',
        width: '90%',
        height: '25%',
        backgroundColor: '#f0f0f0',
        borderRadius: 15,
        paddingLeft: 20,        
        color: '#999',
        fontSize: 16
    },

    scrollView: {
        flex: 1,
        width: '100%'
    },
    Main: {
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});