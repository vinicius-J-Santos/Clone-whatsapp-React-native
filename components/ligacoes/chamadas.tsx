import { View, Text, StyleSheet, Image } from 'react-native';

export function Chamadas({ name, date, type, answered }: { name: string, date: string, type: string, answered: boolean }) {
    return(
        <View style={styles.container}>
            <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'}} style={{width: 50, height: 50, borderRadius: 100}} />
            <View style={styles.infos}>
                {answered == true
                ? <Text style={{fontSize:20}}>{name}</Text>
                : <Text style={{fontSize:20,color:'red'}}>{name}</Text>}
                <Text style={{fontSize:16}}>{date}</Text>
            </View>
            <View style={styles.callTypes}>
                {type === 'voice'
                ? <Image style={{width: 30, height: 30, margin:5}} source={require('@/images/telefone.png')} />
                : <Image style={{width: 30, height: 30, margin:5}} source={require('@/images/video-chamada.png')} /> }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: 80,
        padding: 10,
        gap: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    infos: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    callTypes: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: '100%',
        width: 'auto'
    }
})