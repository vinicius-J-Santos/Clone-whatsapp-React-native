import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function comunidades() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Comunidades</Text>
            </View>
            <View style={styles.main}>
                <Text style={styles.bigText}>Conecte-se com outras pessoas com o as comunidades</Text>
                <Text style={styles.midText}>Comunidades permitem reunir pessoas em grupos de temas especificos e receber avisos de adimins com facilidade</Text>
                <View style={styles.button}>
                    <Pressable><Text style={{color:"#fff",margin:5}}>Entrar em grupo</Text></Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column'
    },
    header: {
        backgroundColor: '#075E54',
        width: '100%',
        height: '10%',
        textAlign: 'left',
        justifyContent: 'flex-start',
        top: 0,
        zIndex: 1
    },
    title: {
        marginTop: 10,
        marginLeft: 10,
        color: '#d8d8d8',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    main: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        flexDirection: 'column'
    },
    bigText: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
        textAlign: 'center'
    },
    midText: {
        fontSize: 16,
        margin: 5,
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#075E54',
        borderRadius: 50,
        padding: 5,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
