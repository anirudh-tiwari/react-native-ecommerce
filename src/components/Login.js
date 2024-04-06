import { View, Image, Text } from "react-native";
import React, { useState } from "react";
import CommonText from "../common/CommonText";
import CommonButton from "../common/CommonButton";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from "yup";

const Login = () => {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState("");
  navigation = useNavigation();

  const loginValidationSchema = yup.object().shape({
    text: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });

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
        }}
      >
        Login
      </Text>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ text: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <CommonText
              value={values.text}
              onChange={handleChange("text")}
              placeholder="Enter Email Id"
              logo={require("../../assets/mail.png")}
              onBlur={handleBlur("text")}
            />
            {errors.text && (
              <Text style={{ fontSize: 10, color: "red" }}>{errors.text}</Text>
            )}
            <CommonText
              value={values.password}
              onChange={handleChange("password")}
              placeholder="Enter Password"
              logo={require("../../assets/password.png")}
              secureTextEntry={true}
              onBlur={handleBlur("password")}
            />
            {errors.password && (
              <Text style={{ fontSize: 13, color: "red", marginTop: 0, alignSelf: "flex-start", paddingLeft: 48, paddingTop: 8 }}>
                {errors.password}
              </Text>
            )}
            <CommonButton text="LOGIN" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Text
        style={{
          fontSize: 18,
          lineHeight: 36,
          color: "black",
          justifyContent: "center",
          fontWeight: 500,
          marginTop: 32,
          alignSelf: "center",
          textDecorationLine: "underline",
        }}
        onPress={() => navigation.navigate("Home")}
      >
        Create New Account?
      </Text>
    </View>
  );
};

export default Login;
