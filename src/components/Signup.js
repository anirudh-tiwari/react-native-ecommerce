import { View, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import CommonText from "../common/CommonText";
import CommonButton from "../common/CommonButton";
import { useNavigation } from "@react-navigation/native";
import { MenuDispatchers, MenuSelectors } from '../store/features/menu';

const Signup = () => {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState("");
	const { activeMenu, activeMenu2 } = MenuSelectors();
  navigation = useNavigation();

	const { setActive, setActive2 } = MenuDispatchers();

  useEffect(() => {
    setTimeout(()=>{
      setActive('Anirudh');
      setActive2('Anirudh 2')
    },2000)
	}, []);

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
          marginTop: 30,
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
        Create New Account
      </Text>
      <CommonText
        value={text}
        onChange={onChangeText}
        placeholder="Enter Name"
        logo={require("../../assets/user.png")}
      />
      <CommonText
        value={text}
        onChange={onChangeText}
        placeholder="Enter Phone Number"
        logo={require("../../assets/phone.png")}
      />
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
      <CommonButton text='Signup' />
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
          onPress={()=>navigation.navigate("Login")}
        >
          Already have account?
        </Text>
    </View>
  );
};

export default Signup;
