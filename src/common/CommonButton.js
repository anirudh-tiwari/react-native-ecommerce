import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";

const CommonButton = ({
  color = "white",
  backgroundColor = "black",
  text = "",
  borderRadius = 8,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={{
        height: 40,
        width: "75%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
      }}
    >
      <Text style={{ color: color }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;
