import React from "react";
// bootstrap component
import { Spinner as SpinnerBootstrap, Container } from "react-bootstrap";

const Spinner = () => {
  return (
    <SpinnerBootstrap
      className="spinner d-flex justify-content-center align-content-center"
      animation="border"
    >
      <span className="visually-hidden">Loading...</span>
    </SpinnerBootstrap>
  );
};

export default Spinner;
