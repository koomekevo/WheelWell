import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  height: 60px;
  border-top-width: 1px;
  border-top-color: #ccc;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TabText = styled.Text`
  font-size: 14px;
`;

const BottomTabBar = ({ tabs, activeTab, onTabPress }) => {
  return (
    <Container>
      {tabs.map((tab, index) => (
        <TabItem
          key={index}
          onPress={() => onTabPress(index)}
          style={{
            backgroundColor: activeTab === index ? "#007BFF" : "transparent",
          }}
        >
          <TabText style={{ color: activeTab === index ? "#fff" : "#000" }}>
            {tab.label}
          </TabText>
        </TabItem>
      ))}
    </Container>
  );
};

export default BottomTabBar;
