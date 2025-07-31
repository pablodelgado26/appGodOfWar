'use client'
import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import Card from "./components/card";
import { ScrollView } from "react-native-web";


export default function itemsFound() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Itens Descobertos</Text>
            <Text style={styles.text}>Aqui você poderá consultar TODOS os itens de TODOS os jogos da franquia God of War!</Text>
            <View>
                <Card
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-4R2dbvv7Etr9BPrkK5RdQwn3OQl7SuDwQ&s"
                    title='Lâmina do Caos'
                    description='Kratos empunha as Lâminas do Caos, um par de lâminas singularmente serrilhadas, presas por uma corrente. Kratos manipula essas lâminas acorrentadas com extrema rapidez, atacando e imobilizando seus oponentes a qualquer distância.'
                    games='God of War (2005), God of War II, God of War III, God of War: Chains of Olympus, God of War: Ghost of Sparta, God of War: Ascension, God of War (2018)'
                />
                <Card
                    image="https://otakuninja.com/cdn/shop/files/KAT0638-A2.jpg?v=1732127682&width=2040"
                    title='Machado Leviatã'
                    description='O Machado Leviatã, em God of War, é a principal arma de Kratos e uma peça central na mitologia do jogo, sendo forjado pelos irmãos anões Sindri e Brok. Ele é descrito como um machado de duas mãos, com a capacidade de congelar inimigos e mecanismos, além de poder ser arremessado e invocado de volta à mão de Kratos. O Machado também possui runas que concedem diferentes poderes e habilidades, incluindo o uso do gelo. '
                    games='God of War (2018) e God of War Ragnarök.'
                />
                                <Card
                    image="https://m.media-amazon.com/images/I/41P8WzTBSGL._SY1000_.jpg"
                    title='Lâmina do Olimpo'
                    description='A Lâmina do Olimpo (Blade of Olympus) é uma arma lendária na série God of War, criada por Zeus durante a Titanomaquia para banir os Titãs para o Tártaro. Ela é conhecida por sua imensa força, sendo capaz de matar deuses e titãs. A lâmina é uma arma de duas mãos, com uma lâmina dourada e detalhes azuis, e é capaz de liberar energia divina. '
                    games='God of War: Ghost of Sparta, God of War II, God of War III e God of War Ragnarök: Valhalla'
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000000'
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 30,
        fontWeight: "700",
        color: 'white'
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
        color: 'red'
    }
})