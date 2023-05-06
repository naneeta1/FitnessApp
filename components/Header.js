import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";

const Header = () => {
  return (

    <View style={styles.header}>
      <View style={styles.title}>
        <Text style={styles.bigTitle}>Welcome,<Text style={{fontWeight:'bold'}}> Ryan Francis </Text></Text>
        <Text style={styles.smallTitle}>Start Your day with healthy</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/person.jpg')} style={{ height: "100%", width: "100%" }} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    height: 100,
    },
  header: {
    marginTop:10,
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    height:100,
  },
  title: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: "center",
  },
  bigTitle: {
    fontSize: 24,
    color:'white',
    
  },
  smallTitle: {
    fontSize: 20,
    opacity: 0.6,
    color:'white',
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderColor:'#FF0000',
    borderWidth:1,
    marginRight:20,
  },
});
