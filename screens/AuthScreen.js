// screens/AuthScreen.js
import React from "react";
import { View } from "react-native";
import { Container, Content, Button, Text, Icon } from "native-base";
import * as Google from "expo-google-app-auth"; // Import Google Sign-In from Expo package
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebaseConfig"; // Import the Firebase configuration
import { initializeApp } from "firebase/app";

initializeApp(firebaseConfig);

const AuthScreen = () => {
  const handleSignInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: "YOUR_ANDROID_CLIENT_ID", // Replace with your Android client ID
        iosClientId: "YOUR_IOS_CLIENT_ID", // Replace with your iOS client ID
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        const { idToken, accessToken } = result;
        const credential = firebase.auth.GoogleAuthProvider.credential(
          idToken,
          accessToken
        );

        await firebase.auth().signInWithCredential(credential);
        console.log("Google Sign In Success", result.user);
        // You can handle the sign-in success here, e.g., save user data to Firebase
      } else {
        console.log("Google Sign In Cancelled");
      }
    } catch (error) {
      console.error("Google Sign In Error:", error);
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
          <Button block onPress={handleSignInWithGoogle} iconLeft>
            <Icon name="logo-google" />
            <Text>Sign in with Google</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default AuthScreen;
