// src/hooks/auth.js

import { useSelector } from "react-redux"; // Import useSelector from Redux

export function useIsMechanic() {
  // Use the useSelector hook to get the user's role from Redux state
  const userRole = useSelector((state) => state.auth.userRole);

  // Check if the user's role is "mechanic"
  return userRole === "mechanic";
}
