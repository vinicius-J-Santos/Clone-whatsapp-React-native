import { Text, View, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Chamadas } from '@/components/ligacoes/chamadas';

export default function ligacoes() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Ligações</Text>
            </View>
            <View style={styles.calls}>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollview}>
                    <View style={styles.options}>
                        <Pressable style={{borderRadius:100, width:'25%'}}><View style={styles.optionsIcon}><Image source={require('@/images/telefone.png')} style={{width:50,height:50}} /></View></Pressable>
                        <Pressable style={{borderRadius:100, width:'25%'}}><View style={styles.optionsIcon}><Image source={require('@/images/agenda.png')} style={{width:50,height:50}} /></View></Pressable>
                        <Pressable style={{borderRadius:100, width:'25%'}}><View style={styles.optionsIcon}><Image source={require('@/images/teclado-de-discagem.png')} style={{width:50,height:50}} /></View></Pressable>
                        <Pressable style={{borderRadius:100, width:'25%'}}><View style={styles.optionsIcon}><Image source={require('@/images/favorito.png')} style={{width:50,height:50}} /></View></Pressable>
                    </View>
                    <Text style={styles.midText}>Chamadas</Text>
                    <Pressable style={{margin:2}}><Chamadas name="Mãe" date="Hoje as 18:33 da noite" type="voice" answered={true} /></Pressable>
                    <Pressable style={{margin:2}}><Chamadas name="Mãe" date="Hoje as 18:32 da noite" type="video" answered={false} /></Pressable>
                    <Pressable style={{margin:2}}><Chamadas name="Mãe" date="Hoje as 18:31 da noite" type="voice" answered={false} /></Pressable>
                    <Pressable style={{margin:2}}><Chamadas name="Mãe" date="Hoje as 18:30 da noite" type="voice" answered={false} /></Pressable>
                    <Pressable style={{margin:2}}><Chamadas name="Mãe" date="Hoje as 18:29 da noite" type="voice" answered={false} /></Pressable>
                    <Pressable style={{margin:2}}><Chamadas name="Pera" date="13 de junho as 14:15 da tarde" type="video" answered={false} /></Pressable>
                    <Pressable style={{margin:2}}><Chamadas name="Saac" date="10 de junho as 03:02 da madrugada" type="video" answered={true} /></Pressable>
                    <Pressable style={{margin:2}}><Chamadas name="Saac" date="03 de abril as 08:47 da manha" type="video" answered={true} /></Pressable>
                    <Pressable style={{margin:2}}><Chamadas name="Benicyo" date="03 de abril as 00:08 da madrugada" type="voice" answered={true} /></Pressable>
                    <Pressable style={{margin:2}}><Chamadas name="Nost" date="05 de fevereiro as 16:12 da tarde " type="video" answered={false} /></Pressable>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        display: 'flex',
        width: '100%',
        height: '10%',
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
    midText: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
        textAlign: 'left'
    },
    calls: {
        backgroundColor: '#fff',
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    scrollview: {
        flex: 1,
        width: '100%',
    },
    options: {
        flex: 1,
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    optionsIcon: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a5a5a5',
        borderRadius: 100
    }
});