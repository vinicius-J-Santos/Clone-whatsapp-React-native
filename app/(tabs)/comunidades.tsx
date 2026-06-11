import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default function comunidades() {
    return (
        <View style={styles.container}>
            <Text>Index</Text>
        </View>
    )
}