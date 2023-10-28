// src/navigation/MainApp.js

import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useSelector } from "react-redux";
import { selectUserRole } from "../actions/authActions";
import AppNavigator from "./AppNavigator";

const MainApp = () => {
  const userRole = useSelector(selectUserRole);

  // This is just a basic example; you should add a loading state or splash screen here.
  if (userRole === "loading") {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Determine which stack to render based on the user's role
  return userRole === "Motorist" ? <AppNavigator /> : <AppNavigator />;
};

export default MainApp;
