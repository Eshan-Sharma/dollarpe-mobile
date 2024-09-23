import React from "react";
import { TextInput, TextInputProps } from "react-native";

export function EmailInput(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      placeholder="Enter your email"
      keyboardType="email-address"
      autoCapitalize="none"
    />
  );
}
