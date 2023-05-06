import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("login");
  const handleSignInButton = () => {
    navigation.navigate("main");
  };

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOGO HERE</Text>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "login" && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress("login")}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === "login" && styles.activeTabButtonText,
            ]}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "register" && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress("register")}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === "register" && styles.activeTabButtonText,
            ]}
          >
            REGISTER
          </Text>
        </TouchableOpacity>
      </View>
      {activeTab === "login" ? (
        <>
          <View style={styles.inputContainer}>
            <Ionicons name="md-person-outline" size={24} color="white" />
            <TextInput
              label="Username"
              style={styles.input}
              placeholderTextColor="gray"
              placeholder="Username"
              color="white"
              theme={{ colors: { primary: "#BBBBBB" } }}
            />
          </View>
          <View style={styles.inputContainer}>
            <AntDesign name="lock1" size={24} color="white" />
            <TextInput
              label="Password"
              style={styles.input}
              placeholderTextColor="gray"
              secureTextEntry={true}
              placeholder="Password"
              color="white"
              theme={{ colors: { primary: "#BBBBBB" } }}
            />
          </View>
          <TouchableOpacity
            style={styles.signinButton}
            onPress={handleSignInButton}
          >
            <Text style={styles.signinButtonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>
        </>
      ):( <>
        <View style={styles.inputContainer}>
          <Ionicons name="md-person-outline" size={24} color="white" />
          <TextInput
            label="Username"
            style={styles.input}
            placeholderTextColor="gray"
            placeholder="Username"
            color="white"
            theme={{ colors: { primary: "#BBBBBB" } }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="md-person-outline" size={24} color="white" />
          <TextInput
            label="Email"
            style={styles.input}
            placeholderTextColor="gray"
            placeholder="Email"
            color="white"
            theme={{ colors: { primary: "#BBBBBB" } }}
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name="lock1" size={24} color="white" />
          <TextInput
            label="Password"
            style={styles.input}
            placeholderTextColor="gray"
            secureTextEntry={true}
            placeholder="Password"
            color="white"
            theme={{ colors: { primary: "#BBBBBB" } }}
          />
        </View>
        <TouchableOpacity
          style={styles.signinButton}
          onPress={handleSignInButton}
        >
          <Text style={styles.signinButtonText}>Sign Up</Text>
        </TouchableOpacity>
        
      </>)}
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
    backgroundColor: "#5A5A5A",
    marginTop: 30,
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
    color: "white",
    borderBottomColor: "#FF0000",
    borderBottomWidth: 2,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#FFFFFF",
    paddingBottom: 5,
  },
  activeTabButton: {
    borderBottomColor: "#FF0000",
  },
  tabButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },

  input: {
    width: "100%",
    height: 50,
    paddingHorizontal: 20,
    marginBottom: 0,
    fontSize: 16,
  },
  signinButton: {
    backgroundColor: "#FF0000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: 300,
    marginTop: 15,
  },
  signinButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  forgotPassText: {
    marginTop: 20,
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    width: 320,
  },
  icon: {
    marginRight: 10,
  },
});

export default Login;
