import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function atualizacoes() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Atualizações</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.status}>
                    <Text>status</Text>
                    <Text>a</Text>
                    <Text>status dos outros</Text>
                </View>
                <View style={styles.Chanels}>
                    <Text>canais</Text>
                    <Text>a</Text>
                    <Text>outros canais</Text>
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
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

    scrollView: {
        flex: 1,
        width: '100%',
    },
    status: {
        backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Chanels: {
        backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});