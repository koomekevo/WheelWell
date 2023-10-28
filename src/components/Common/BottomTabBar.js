// src/components/Common/BottomTabBar.js

import React, { useState, useEffect } from "react";
import { View, Text, Button, Alert } from "react-native";
import axios from "axios"; // Import the axios library

const BottomTabBar = () => {
  const [subscriptionStatus, setSubscriptionStatus] = useState("free");

  useEffect(() => {
    // Fetch the user's subscription status from the backend
    const fetchSubscriptionStatus = async () => {
      try {
        const response = await axios.get("your_backend_subscription_endpoint");

        if (response.data.success) {
          setSubscriptionStatus(response.data.status);
        } else {
          Alert.alert("Error", "Failed to fetch subscription status.");
        }
      } catch (error) {
        Alert.alert(
          "Error",
          "An error occurred while fetching subscription status."
        );
      }
    };

    fetchSubscriptionStatus();
  }, []);

  const handleUpgradeSubscription = async () => {
    try {
      // Send a request to upgrade the user's subscription to premium
      const response = await axios.post("your_backend_upgrade_endpoint");

      if (response.data.success) {
        Alert.alert(
          "Success",
          "Your subscription has been upgraded to premium."
        );
        setSubscriptionStatus("premium");
      } else {
        Alert.alert("Error", "Failed to upgrade your subscription.");
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "An error occurred while upgrading your subscription."
      );
    }
  };

  return (
    <View>
      <Text>Bottom Tab Bar</Text>
      <Button
        title="Upgrade Subscription"
        onPress={handleUpgradeSubscription}
        disabled={subscriptionStatus === "premium"}
      />
    </View>
  );
};

export default BottomTabBar;
