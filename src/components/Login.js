import { View, Image, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import CommonText from "../common/CommonText";
import CommonButton from "../common/CommonButton";

const Login = () => {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState("");
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../assets/anirudhLogo.png")}
        style={{
          width: 200,
          height: 180,
          marginTop: 100,
        }}
      />
      <Text
        style={{
          color: "black",
          fontSize: 24,
          lineHeight: 36,
          marginBottom: 24,
        }}
      >
        Login
      </Text>
      <CommonText
        value={text}
        onChange={onChangeText}
        placeholder="Enter Email Id"
        logo={require("../../assets/mail.png")}
      />
      <CommonText
        value={number}
        onChange={onChangeNumber}
        placeholder="Enter Password"
        logo={require("../../assets/password.png")}
        type="numeric"
      />
      <CommonButton text='LOGIN' />
      <Text
          style={{
            fontSize: 18,
            lineHeight: 36,
            color: "black",
            justifyContent: 'center',
            fontWeight:500,
            marginTop: 20,
            alignSelf:'center',
            textDecorationLine: 'underline'
          }}
        >
          Create New Account?
        </Text>
    </View>
  );
};

export default Login;
