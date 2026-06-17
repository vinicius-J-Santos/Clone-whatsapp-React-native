import { Text, View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Status } from '@/components/atualizacoes/status';
import { Chanels } from '@/components/atualizacoes/chanels';

export default function atualizacoes() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Atualizações</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <View style={styles.status}>
                    <Text style={styles.midText}>Status</Text>
                    <Pressable style={styles.pressable}>
                        <Status name="Adicionar status" date="Desaparecerá em 24 horas" owner="me" />
                    </Pressable>
                    <Text style={styles.midText}>Atualizações dos seus contatos</Text>
                    <Pressable style={styles.pressable}><Status name="Mãe" date="Ontem" owner="" /></Pressable>
                    <Pressable style={styles.pressable}><Status name="Pera" date="há 7 horas" owner="" /></Pressable>
                    <Pressable style={styles.pressable}><Status name="Nost" date="há 6 minutos" owner="" /></Pressable>
                    <Pressable style={styles.pressable}><Status name="Saac" date="há 2 minutos" owner="" /></Pressable>
                </View>
                <View style={styles.Chanels}>
                    <Text style={styles.midText}>Canais</Text>
                    <Chanels name="figurinhas de tio" followers="30 mil seguidores" />
                    <Chanels name="STICKERS" followers='873 mil seguidores' />
                    <Chanels name="Frase do dia" followers='258 mil seguidores' />
                    <Chanels name="Netflix BR" followers='10 M seguidores' />
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    pressable: {
        flex: 1,
        width: '100%',
        marginBottom: 2
    },
    container: {
        backgroundColor: '#fff',
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
    midText: {
        marginLeft: 10,
        margin: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        backgroundColor: '#fff',
        alignSelf: 'flex-start'
    },
    status: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    Chanels: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});