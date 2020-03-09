import React from "react";

export interface ButtonProps {
  label: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ label }) => (
  <button>{label}</button>
);
