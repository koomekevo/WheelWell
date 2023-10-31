import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import Map from "../../components/Home/Map"; // Import the Map component
import { useDispatch, useSelector } from "react-redux";
import { fetchNearbyMechanics } from "../../actions/mapActions"; // Import your action for fetching nearby mechanics

const MotoristHomeScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const nearbyMechanics = useSelector((state) => state.map.nearbyMechanics);

  useEffect(() => {
    // Fetch nearby mechanics when the component mounts
    if (user) {
      dispatch(fetchNearbyMechanics(user.location));
    }
  }, [dispatch, user]);

  return (
    <View>
      <Text>Motorist Home Screen</Text>
      <Button
        title="Refresh Nearby Mechanics"
        onPress={() => {
          if (user) {
            dispatch(fetchNearbyMechanics(user.location));
          }
        }}
      />
      <Map userType="motorist" mechanics={nearbyMechanics} />
      {/* Pass the userType prop and nearby mechanics to Map component */}
    </View>
  );
};

export default MotoristHomeScreen;
