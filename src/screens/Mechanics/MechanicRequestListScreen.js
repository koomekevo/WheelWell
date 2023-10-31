import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import {
  fetchRequests,
  acceptRequest,
  rejectRequest,
} from "../actions/requestActions"; // Import your action creators
import RequestList from "../../components/Home/Mechanics/RequestList"; // Import your RequestList component

const MechanicRequestListScreen = ({
  requests,
  fetchRequests,
  acceptRequest,
  rejectRequest,
}) => {
  useEffect(() => {
    // Fetch requests when the component mounts
    fetchRequests();
  }, [fetchRequests]);

  return (
    <View>
      <Text>Mechanic Request List</Text>
      {requests.map((request) => (
        <RequestList
          key={request.id}
          request={request}
          onAccept={() => acceptRequest(request.id)}
          onReject={() => rejectRequest(request.id)}
        />
      ))}
    </View>
  );
};

const mapStateToProps = (state) => ({
  requests: state.requests.requests,
});

export default connect(mapStateToProps, {
  fetchRequests,
  acceptRequest,
  rejectRequest,
})(MechanicRequestListScreen);
