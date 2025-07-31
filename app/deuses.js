import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Deuses() {
    const navigation = useNavigation();

    const deusesData = [
        {
            id: 1,
            nome: "Ares",
            titulo: "Deus da Guerra",
            jogo: "God of War (2005)",
            imagem: "https://republicadg.com.br/wp-content/uploads/2025/02/Ares-%E2%80%93-God-of-War-2005-%E2%80%93-PS2-1024x575.png",
            historia: "O primeiro grande inimigo de Kratos. Ares manipulou Kratos para matar sua própria família, levando o espartano a buscar vingança contra todos os deuses."
        },
        {
            id: 4,
            nome: "Atena",
            titulo: "Deusa da Sabedoria",
            jogo: "God of War (2005)",
            imagem: "https://preview.redd.it/athena-concept-art-by-saeed-jalabi-for-the-god-of-war-board-v0-c920ky8xzhbd1.jpg?width=1080&crop=smart&auto=webp&s=4ab3d8aa28d9d5dfa88bba0829a4c8c1145aaaf8",
            historia: "Ironicamente morta por Kratos quando Zeus tentou matá-lo. Atena se sacrificou para salvar Zeus, mas depois retorna como espírito."
        },
        {
            id: 8,
            nome: "Zeus",
            titulo: "Rei dos Deuses",
            jogo: "God of War III (2010)",
            imagem: "https://static.wikia.nocookie.net/godofwar/images/3/3c/Zeus.png/revision/latest/scale-to-width-down/985?cb=20110715095808",
            historia: "O próprio pai de Kratos e rei do Olimpo. A batalha final entre pai e filho resultou na queda de Zeus e do Olimpo."
        },
        {
            id: 9,
            nome: "Poseidon",
            titulo: "Deus dos Mares",
            jogo: "God of War III (2010)",
            imagem: "https://republicadg.com.br/wp-content/uploads/2025/02/poseidon_jz2m-1024x575.png",
            historia: "O deus dos oceanos foi o primeiro a cair durante o assalto de Kratos ao Monte Olimpo, morrendo de forma brutal."
        },
        {
            id: 12,
            nome: "Hércules",
            titulo: "Meio-irmão de Kratos",
            jogo: "God of War III (2010)",
            imagem: "https://republicadg.com.br/wp-content/uploads/2025/02/Hercules-%E2%80%93-God-of-War-3-2010-%E2%80%93-PS3-1024x576.png",
            historia: "O famoso herói dos doze trabalhos, meio-irmão de Kratos, que foi corrompido pelo ciúme e poder, levando a um confronto fatal."
        },
        {
            id: 13,
            nome: "Baldur",
            titulo: "Deus Aesir",
            jogo: "God of War (2018)",
            imagem: "https://republicadg.com.br/wp-content/uploads/2025/02/Baldur-%E2%80%93-God-of-War-2018-PS4-1024x576.png",
            historia: "O filho de Freya que não conseguia sentir dor devido a uma maldição. Sua obsessão em quebrar a maldição o levou à morte."
        },
        {
            id: 14,
            nome: "Magni e Modi",
            titulo: "Filhos de Thor",
            jogo: "God of War (2018)",
            imagem: "https://republicadg.com.br/wp-content/uploads/2025/02/Magni-e-Modi-%E2%80%93-God-of-War-2018-%E2%80%93-PS4-1024x576.png",
            historia: "Os filhos gêmeos de Thor que perseguiram Kratos e Atreus por Midgard, subestimando o poder do Deus da Guerra."
        },
        {
            id: 15,
            nome: "Heimdall",
            titulo: "Guardião de Asgard",
            jogo: "God of War Ragnarök (2022)",
            imagem: "https://static.wikia.nocookie.net/godofwar/images/0/0a/FlkdMs8XgAAQrv5.jpeg/revision/latest/scale-to-width-down/670?cb=20230105114012",
            historia: "O deus com poder de prever todos os ataques, considerado invencível até enfrentar a fúria implacável de Kratos."
        },
        {
            id: 16,
            nome: "Thor",
            titulo: "Deus do Trovão",
            jogo: "God of War Ragnarök (2022)",
            imagem: "https://variety.com/wp-content/uploads/2022/11/thor.png?w=1000&h=667&crop=1&resize=1000%2C667",
            historia: "O poderoso deus nórdico do trovão, conhecido por seu martelo Mjölnir, que finalmente encontrou seu fim nas mãos de Kratos."
        },
        {
            id: 17,
            nome: "Odin",
            titulo: "Pai de Todos",
            jogo: "God of War Ragnarök (2022)",
            imagem: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e45ad40c-1c38-4258-86df-f38aabc42b6f/dfkye7j-d4996d55-487b-413a-912f-16cd1ccbe59d.png/v1/fill/w_1099,h_545,q_80,strp/god_of_war_ragnarok_odin_3d_model_by_baxxre1_dfkye7j-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQ1IiwicGF0aCI6IlwvZlwvZTQ1YWQ0MGMtMWMzOC00MjU4LTg2ZGYtZjM4YWFiYzQyYjZmXC9kZmt5ZTdqLWQ0OTk2ZDU1LTQ4N2ItNDEzYS05MTJmLTE2Y2QxY2NiZTU5ZC5wbmciLCJ3aWR0aCI6Ijw9MTA5OSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.G_mawSWf_jgDTq6w0x6_Lnbi1k9m0MFy1YkGrj6Uu5U",
            historia: "O Pai de Todos e governante de Asgard, cuja obsessão pelo conhecimento e controle levou à sua queda final."
        }
    ];

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()}>
                <Ionicons name="menu" size={28} color="#fff" />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.mainTitle}>Deuses Derrotados</Text>
                <Text style={styles.mainSubtitle}>A Trilha de Destruição de Kratos</Text>
                
                {deusesData.map((deus, index) => (
                    <View key={deus.id} style={styles.deusCard}>
                        <Image
                            source={{ uri: deus.imagem }}
                            style={styles.deusImage}
                            resizeMode="cover"
                        />
                        <View style={styles.deusInfo}>
                            <Text style={styles.deusNome}>{deus.nome}</Text>
                            <Text style={styles.deusTitulo}>{deus.titulo}</Text>
                            <Text style={styles.deusJogo}>{deus.jogo}</Text>
                            <Text style={styles.deusHistoria}>{deus.historia}</Text>
                        </View>
                    </View>
                ))}
                
                <View style={styles.footerContainer}>
                    <Text style={styles.footerTitle}>O Legado de Kratos</Text>
                    <Text style={styles.footerText}>
                        Através de suas jornadas pela mitologia grega e nórdica, Kratos deixou um rastro de destruição que mudou para sempre o destino dos deuses. Cada batalha foi um passo em sua busca por redenção e paz.
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
        paddingTop: 100,
    },
    mainTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
        textAlign: 'center',
    },
    mainSubtitle: {
        fontSize: 18,
        color: '#e63946',
        marginBottom: 32,
        textAlign: 'center',
    },
    deusCard: {
        backgroundColor: '#222',
        borderRadius: 16,
        marginBottom: 24,
        overflow: 'hidden',
        width: '100%',
        maxWidth: 350,
        elevation: 5,
        shadowColor: '#e63946',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    deusImage: {
        width: '100%',
        height: 200,
    },
    deusInfo: {
        padding: 16,
    },
    deusNome: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    deusTitulo: {
        fontSize: 16,
        color: '#e63946',
        marginBottom: 8,
        fontStyle: 'italic',
    },
    deusJogo: {
        fontSize: 14,
        color: '#888',
        marginBottom: 12,
    },
    deusHistoria: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'justify',
        lineHeight: 20,
    },
    footerContainer: {
        backgroundColor: '#222',
        padding: 20,
        borderRadius: 12,
        width: '100%',
        maxWidth: 350,
        marginTop: 16,
        marginBottom: 32,
    },
    footerTitle: {
        fontSize: 20,
        color: '#e63946',
        marginBottom: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    footerText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'justify',
        lineHeight: 22,
    },
});
