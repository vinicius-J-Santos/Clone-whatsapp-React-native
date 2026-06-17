import { View, Text, StyleSheet, Image } from 'react-native';

export function Status({ name, date, owner }: { name: string, date: string, owner: string }) {
    return (
        <View style={styles.container}>
            <View style={styles.photoContainer}>
                <Image style={styles.photo} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'}} />
                {owner == 'me' && (
                <View style={styles.addStatus}>
                    <Text style={{color:'#fff', fontSize:20}}>+</Text>
                </View>
                )}
            </View>
            <View style={styles.statusInfo}>
                <Text style={{fontSize:20,color:'#000'}}>{name}</Text>
                <Text style={{fontSize:16,color:'#555'}}>{date}</Text>
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
    photoContainer: {
        position: 'relative',
        width: 50,
        height: 50,
        display: 'flex'
    },
    photo: {
        width: 50,
        height: 50,
        borderRadius: 100,
        borderColor: 'green',
        borderWidth: 3,
    },
    addStatus: {
        position: 'absolute',
        width: 20,
        height: 20,
        right: 0,
        bottom: 0,
        backgroundColor: 'green',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    statusInfo: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        textAlign: 'center',
        justifyContent: 'center'
    }
})