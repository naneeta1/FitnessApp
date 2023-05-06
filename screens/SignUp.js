import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const SignUp = () => {
  const navigation = useNavigation();

  const handleSignInPress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOGO HERE</Text>
      <Text style={styles.heading}>Start Your Workout</Text>
      <Text style={styles.text}>Register Yourself first to start training</Text>
      <View style={styles.dotContainer}>
        <View style={[styles.dot, styles.whiteDot]} />
        <View style={[styles.dot, styles.whiteDot]} />
        <View style={[styles.dot, styles.redDot]} />
      </View>
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already a user?</Text>
        <TouchableOpacity onPress={handleSignInPress}>
          <Text style={styles.signIn}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#515151",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  heading: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  logo: {
    fontSize: 40,
    borderBottomColor: "#FF0000",
    borderBottomWidth: 2,
    marginBottom: 10,
    color: "white",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: "white",
  },
  dotContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  whiteDot: {
    backgroundColor: "#FFFFFF",
  },
  redDot: {
    backgroundColor: "#FF0000",
    width:20,
  },
  signupButton: {
    backgroundColor: "#FF0000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  signupButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    flexDirection:'row',
  },
  footerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  signIn:{
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "red",

  },
});

export default SignUp;
