import { View, TouchableOpacity, Text, Image } from "react-native";
import { CartDispatchers } from "../store/features/cart";
import { WhishListDispatchers } from "../store/features/whishlist";

const ProductItem = ({ item, onAddToCart, onAddWishlist }) => {
  const { setAddtoCart } = CartDispatchers();
  const { setWhishList } = WhishListDispatchers();

  return (
    <TouchableOpacity
      style={{
        borderRadius: 20,
        elevation: 5, // ADD BOX-SHADOW
        width: 200,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        backgroundColor: "#fff",
        marginBottom: 10,
      }}
    >
      <View style={{ width: "100%" }}>
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: 120,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />

        <Text
          style={{
            marginTop: 10,
            marginLeft: 10,
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          {item.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              marginTop: 5,
              marginLeft: 10,
              fontSize: 18,
              fontWeight: "600",
              marginBottom: 10,
            }}
          >
            {"रु " + item.price}
          </Text>
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              padding: 5,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              marginRight: 15,
            }}
            onPress={() => {
              setAddtoCart(item);
            }}
          >
            <Text style={{ color: "#000" }}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: 40,
            elevation: 5, // ADD BOX-SHADOW
            height: 40,
            backgroundColor: "#fff",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 10,
            right: 10,
          }}
          onPress={() => {
            setWhishList(item);
          }}
        >
          <Image
            source={require("../../assets/heart.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
