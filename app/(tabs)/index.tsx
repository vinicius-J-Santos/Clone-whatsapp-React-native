import { Text, View, StyleSheet, Image } from 'react-native';
import { Contact } from '@/components/index/contact';

export default function index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Uadizap</Text>
                <Text style={styles.searchBar}>preucurar...</Text>
            </View>
            <View style={styles.Main}>
                <Contact name="Mãe" message="Saiu pra onde, criatura?!" notification={20}/>
                <Contact name="Barreto" message="Chegou em casa?" notification={0}/>
                <Contact name="Saac" message="Eae, bora jogar?" notification={5}/>
                <Contact name="Benicyo" message="Fala, mano!" notification={2}/>
                <Contact name="Dudu" message="E meus 20? vai paga nao?" notification={0}/>
                <Contact name="Atacadão contrata" message="Legal esse curriculo viu" notification={2}/>
                <Contact name="Arthur" message="Terminou os slides do Renata?" notification={1}/>
                <Contact name="Nost" message="To com seu IP..." notification={0}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
        top: 0,
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
        margin: '5%',
        width: '90%',
        height: '25%',
        backgroundColor: '#f0f0f0',
        borderRadius: 15,
        paddingLeft: 20,        
        color: '#999',
        fontSize: 16
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