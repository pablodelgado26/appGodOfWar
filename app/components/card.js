import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ title, description, image, games }) => {
  return (
    <View style={styles.card}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
        <Text style={styles.games}>{games}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: 'red',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    margin: 12,
    borderColor: 'red',
    borderWidth: 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 350,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  games: {
    fontSize: 13,
    color: '#000',
    marginTop: 8,
  },
});

export default Card;