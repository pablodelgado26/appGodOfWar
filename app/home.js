import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()}>
                <Ionicons name="menu" size={28} color="#fff" />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/07/75/e5/0775e569fd7b45bbebfa1c6f0fab64fc.jpg' }}
                style={styles.kratosImage}
                resizeMode="contain"
            />
            <Text style={styles.title}>Kratos</Text>
            <Text style={styles.subtitle}>O Deus da Guerra</Text>
            <Text style={styles.description}>
                Kratos é o protagonista da série God of War. Conhecido por sua força, coragem e sede de vingança, ele enfrenta deuses e monstros em busca de redenção. Sua jornada é marcada por batalhas épicas e momentos emocionantes.
            </Text>
            <View style={styles.statsContainer}>
                <Text style={styles.statsTitle}>História Resumida:</Text>
                <Text style={styles.stats}>
                    Kratos, um guerreiro espartano, foi manipulado pelos deuses e perdeu tudo o que amava. Em busca de vingança, ele desafia o Olimpo, enfrentando deuses e criaturas mitológicas, tornando-se o próprio Deus da Guerra.
                </Text>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#1a1a1a',
    },
    menuButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 1000,
        padding: 8,
        borderRadius: 8,
    },
    container: {
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#1a1a1a',
        minHeight: '100%',
    },
    kratosImage: {
        width: 220,
        height: 320,
        marginBottom: 24,
        borderRadius: 16,
        marginTop: 40,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 20,
        color: '#e63946',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'justify',
        marginBottom: 24,
    },
    statsContainer: {
        backgroundColor: '#222',
        padding: 16,
        borderRadius: 12,
        width: '100%',
        maxWidth: 320,
    },
    statsTitle: {
        fontSize: 18,
        color: '#e63946',
        marginBottom: 8,
        fontWeight: 'bold',
    },
    stats: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 4,
        textAlign: 'justify',
    },
});