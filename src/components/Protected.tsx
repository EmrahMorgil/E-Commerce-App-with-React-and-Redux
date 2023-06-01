import React from "react";
import { Navigate } from "react-router-dom";
import { IProtected } from "../types/Type";


const Protected: React.FC<IProtected> = ({ loggedIn, children }) => {
  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default Protected;