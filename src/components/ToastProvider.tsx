"use client";

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"; // min : 필요한 버전만 사용

const ToastProvider = () => {
  return <ToastContainer autoClose={2000} />;
};

export default ToastProvider;
