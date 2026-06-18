import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export function Chanels({ name, followers }: { name: string, followers: string }) {
    return(
        <View style={styles.container}>
            <Image style={styles.photo} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'}} />
            <View style={styles.chanelsInfo}>
                <Text style={{fontSize:20,color:'#000'}}>{name}</Text>
                <Text style={{fontSize:16,color:'#555'}}>{followers}</Text>
            </View>
            <View style={styles.button}>
                <Text style={{color:'#fff'}}>Seguir</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: 80,
        padding: 10,
        gap: 10,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    photo: {
        width: 50,
        height: 50,
        borderRadius: 100
    },
    chanelsInfo: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        textAlign: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 50,
        height: 30,
        backgroundColor: '#075E54',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})