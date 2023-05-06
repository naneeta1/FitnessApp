import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Activities = ({ imageSource, title, distance }) => {
  return (
    <View style={styles.card}>
      <View style={styles.image}>{imageSource}</View>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.distance}>{distance}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height:60,
  },
  image: {
   
    borderRadius: 35,
    marginHorizontal: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft:10,

  },
  distance: {
    fontSize: 14,
    color: '#888',
    marginLeft:10,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Activities;
