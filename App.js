import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

export default function App() {
  return (
    <Container>
      <MiddleText>WheelWell App</MiddleText>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const MiddleText = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;
