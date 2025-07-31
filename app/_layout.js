import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './home';
import Deuses from './deuses';
import { Image } from 'react-native';
import MyIcon from '../assets/images/kratos.png';
import gods from '../assets/images/deus.png';
import itens from '../assets/images/mochila.png';
import form from '../assets/images/formulario-de-contato.png';

const Drawer = createDrawerNavigator();

export default function RootLayout() {
    // Primeiro, importe o componente Image e a imagem desejada no topo do arquivo:

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#1a1a1a',
                },
                drawerActiveTintColor: '#ff0000ff',
                drawerInactiveTintColor: '#ffffff',
                drawerLabelStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Drawer.Screen
                name="home"
                component={Home}
                options={{
                    drawerLabel: "kratos",
                    title: "Kratos",
                    drawerIcon: ({ size, color }) => (
                        <Image
                            source={MyIcon}
                            style={{ width: size, height: size, borderRadius: 8 }}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="deuses"
                component={Deuses}
                options={{
                    drawerLabel: "Deuses Derrotados",
                    title: "Deuses",
                    drawerIcon: ({ size, color }) => (
                        <Image
                            source={gods}
                            style={{ width: size, height: size, borderRadius: 8 }}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="itemsFound"
                component={Deuses}
                options={{
                    drawerLabel: "Itens conquistados",
                    title: "Itens",
                    drawerIcon: ({ size, color }) => (
                        <Image
                            source={itens}
                            style={{ width: size, height: size, borderRadius: 8 }}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="forms"
                component={Deuses}
                options={{
                    drawerLabel: "Formulários",
                    title: "Fale conosco",
                    drawerIcon: ({ size, color }) => (
                        <Image
                            source={form}
                            style={{ width: size, height: size, borderRadius: 8 }}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}
