import { View, TouchableOpacity, Image, Text } from "react-native";
import Header from "../common/Header";
import { useState } from "react";
import Main from "../pages/Main";
import Search from "../pages/Search";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Profile from "../pages/Profile";
import { CartSelectors } from "../store/features/cart";
import { WhishListSelectors } from "../store/features/whishlist";

const Home = () => {
  const { cartList } = CartSelectors();
  const { whishList } = WhishListSelectors();
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          height: 50,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          style={{
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setSelectedTab(0)}
        >
          <Image
            source={require("../../assets/home.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setSelectedTab(1)}
        >
          <Image
            source={require("../../assets/search.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <View style={{ width: "20%" }}>
          <TouchableOpacity
            style={{
              width: 50,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "black",
              borderRadius: 50,
              height: 50,
              alignSelf: "center",
            }}
            onPress={() => setSelectedTab(2)}
          >
            <Image
              source={require("../../assets/cart.png")}
              style={{ width: 24, height: 24, tintColor: "white" }}
            />
          </TouchableOpacity>
          {cartList.length ? (
            <View
              style={{
                position: "absolute",
                backgroundColor: "red",
                height: 24,
                width: 24,
                right: 6,
                top: 0,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>{cartList.length}</Text>
            </View>
          ) : null}
        </View>
        <View style={{ width: "20%" }}>
          <TouchableOpacity
            style={{
              width: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              height: 50,
              alignSelf: "center",
            }}
            onPress={() => setSelectedTab(3)}
          >
            <Image
              source={require("../../assets/heart.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
          {whishList.length ? (
            <View
              style={{
                position: "absolute",
                backgroundColor: "red",
                height: 24,
                width: 24,
                right: 10,
                top: 0,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>{whishList.length}</Text>
            </View>
          ) : null}
        </View>
        <TouchableOpacity
          style={{
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setSelectedTab(4)}
        >
          <Image
            source={require("../../assets/user.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
