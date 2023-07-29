// screens/DriverSignUpScreen.js
import React from "react";
import { View } from "react-native";
import { Container, Content, Button, Text, Icon } from "native-base";
import * as Google from "expo-google-app-auth";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebaseConfig";
import { initializeApp } from "firebase/app";

initializeApp(firebaseConfig);

const DriverSignUpScreen = ({ navigation }) => {
  const handleSignUpWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: "YOUR_ANDROID_CLIENT_ID",
        iosClientId: "YOUR_IOS_CLIENT_ID",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        const { idToken, accessToken } = result;
        const credential = firebase.auth.GoogleAuthProvider.credential(
          idToken,
          accessToken
        );

        await firebase.auth().signInWithCredential(credential);
        console.log("Google Sign Up Success", result.user);
        // You can handle the sign-up success here, e.g., save user data to Firebase
      } else {
        console.log("Google Sign Up Cancelled");
      }
    } catch (error) {
      console.error("Google Sign Up Error:", error);
    }
  };

  return (
    <Container>
      <Content
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 16,
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Button block onPress={handleSignUpWithGoogle} iconLeft>
            <Icon name="logo-google" />
            <Text>Sign up with Google (Driver)</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default DriverSignUpScreen;
