import { View, Text, Image, StyleSheet } from 'react-native';

export function Contact({ name, message, notification }: { name: string, message: string, notification: number }) {
    return(
        <View style={styles.Contact}>
            <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'}} style={{width: 50, height: 50, borderRadius: 100}} />
            <View style={styles.Info}>
                <Text style={styles.ContactInfos}>{name}</Text>
                <Text style={styles.ContactMessage}>{message}</Text>
            </View>
            {notification > 0 && (
                <View style={styles.ContactNotification}>
                    <Text style={styles.NotificationText}>{notification}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
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
    },
    NotificationText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
})