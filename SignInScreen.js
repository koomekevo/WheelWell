// SignInScreen.js
import React from "react";
import { Button } from "react-native";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-community/google-signin";

const SignInScreen = () => {
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.configure();
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // Handle user information and Firebase authentication
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // User cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Play services not available or outdated
      } else {
        // Other error
      }
    }
  };

  return <Button title="Sign in with Google" onPress={handleGoogleSignIn} />;
};

export default SignInScreen;
