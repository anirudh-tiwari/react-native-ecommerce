import { View, StyleSheet, TextInput, Image } from "react-native";

const CommonText = ({
  onChange = () => {},
  value = "",
  placeholder = "",
  type = "default",
  logo,
}) => {
  return (
    <View style={styles.textStyle}>
      {logo ? <Image source={logo} style={{ width: 24,height: 24, marginRight: 8 }} /> : null}
      <TextInput
        // style={styles.input}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        keyboardType={type}
      />
    </View>
  );
};

export default CommonText;

const styles = StyleSheet.create({
  textStyle: {
    borderWidth: 1,
    borderColor: "#82838e",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: "75%",
    marginBottom: 32,
    flexDirection: 'row',
    alignItems: 'center',  // Center from vertical position
  },
});
