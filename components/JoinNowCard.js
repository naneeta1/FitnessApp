import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const JoinNowCard = () => {
  return (
   
      <View style={styles.card}>
        <ImageBackground source={require('../assets/join-now.jpg')} style={styles.cardBackground}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>More Serious Exercise to Be Healthy</Text>
          <Text style={styles.text}>Get more features and interesting tips</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Join Now</Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  cardBackground: {
    flex: 1,
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
    borderRadius: 20,

  },
  card: {
    backgroundColor: 'white',
    margin:10,
    marginTop:20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  
    height: 200, 
// Set a fixed height of 200
  },
  textContainer: {
    padding:20,
    flex: 1,
    marginRight: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 25,
    marginBottom:40,
    marginRight:200,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:18,
  },
});

export default JoinNowCard;
