// screens/DriverSignUpScreen.js
import React, { useState } from "react";
import { View } from "react-native";
import {
  Container,
  Content,
  Button,
  Text,
  Form,
  Item,
  Input,
} from "native-base";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebaseConfig";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const DriverSignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      // Handle successful sign-up, e.g., save user data to Firestore
      console.log("Driver Sign Up Success", userCredential.user);
    } catch (error) {
      console.error("Driver Sign Up Error:", error);
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
        <Form>
          <Item>
            <Input
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </Item>
          <Item>
            <Input
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </Item>
        </Form>
        <View style={{ marginTop: 20 }}>
          <Button block onPress={handleSignUp}>
            <Text>Sign up as Driver</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default DriverSignUpScreen;
