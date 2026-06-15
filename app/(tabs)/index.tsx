import { Text, View, StyleSheet, Image } from 'react-native';

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
    },
    Contact: {
        backgroundColor: '#fff',

        width: '100%',
        height: 80,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#858585',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    Info: {
        display: 'flex',
        flexDirection: 'column',
        margin: 20,
        width: '65%'
    },
    ContactInfos: {
        fontSize: 20,
        color: '#000',
    },
    ContactMessage: {
        fontSize: 16,
        color: '#555'
    },
    ContactNotification: {
        display: 'flex',
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#21a749',
        borderRadius: 100,
        width: 30,
        height: 30
    }
});

export default function index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Uadizap</Text>
                <Text style={styles.searchBar}>preucurar...</Text>
            </View>
            <View style={styles.Main}>
                <View style={styles.Contact}>
                    <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'}} style={{width: 50, height: 50, borderRadius: 100}} />
                    <View style={styles.Info}>
                        <Text style={styles.ContactInfos}>Mãe</Text>
                        <Text style={styles.ContactMessage}>Saiu pra onde, criatura1?!</Text>
                    </View>
                    <View style={styles.ContactNotification}>
                        <Text>20</Text>
                    </View>
                </View>
            </View>
            <Text style={{fontSize:16,fontWeight: 'bold'}}> FIM DA LISTA DE CONTATOS </Text>
        </View>
    )
}