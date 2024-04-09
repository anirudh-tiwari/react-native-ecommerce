import { View, Image, FlatList, TouchableOpacity, Text, ScrollView } from "react-native";
import Header from "../common/Header";
import { useEffect, useState } from "react";
import { products } from "./products";
import ProductItem from '../common/ProductItem';
import { CartSelectors } from "../store/features/cart";

const Main = () => {
  const { cartList } = CartSelectors();
  const [categoryList, setCategoryList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);
  const [shoesList, setShoesLits] = useState([]);
  const [trouserList, setTrouserList] = useState([]);
  const [jeansList, setJeansList] = useState([]);
  const [shirtsList, setShirtsList] = useState([]);
  const [slipperList, setSlipperList] = useState([]);
  const [jacketLits, setJacketList] = useState([]);
  useEffect(() => {
    let categories = [];
    products.category.map((item) => {
      categories.push(item.category);
    });
    setTshirtList(products.category[0].data);
    setJeansList(products.category[1].data);
    setShoesLits(products.category[2].data);
    setJacketList(products.category[3].data);
    setSlipperList(products.category[4].data);
    setTrouserList(products.category[5].data);
    setCategoryList(categories);
  }, []);

  return (
    <ScrollView>
      <Header />
      <Image
        source={require("../../assets/banner.jpeg")}
        style={{
          width: "94%",
          height: 200,
          alignSelf: "center",
          marginTop: 20,
        }}
      />
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={categoryList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  height: 40,
                  borderRadius: 20,
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{ color: "#000", marginLeft: 10, marginRight: 10 }}
                >
                  {item} {cartList?.length}1
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text
        style={{
          marginTop: 20,
          fontSize: 18,
          marginLeft: 20,
          fontWeight: "600",
          color: "#000",
        }}
      >
        New T-Shirts
      </Text>
      <View style={{ marginTop: 15 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={tshirtList}
          renderItem={({ item, index }) => {
            return (
              <ProductItem
                item={item}
                // onAddWishlist={(x) => {
                //   dispatch(addToWishlist(x));
                // }}
                // onAddToCart={(x) => {
                //   dispatch(addItemToCart(item));
                // }}
              />
            );
          }}
        />
      </View>
      <Text
        style={{
          marginTop: 20,
          fontSize: 18,
          marginLeft: 20,
          fontWeight: "600",
          color: "#000",
        }}
      >
        New Trousers
      </Text>
      <View style={{ marginTop: 15 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={trouserList}
          renderItem={({ item, index }) => {
            return (
              <ProductItem
                item={item}
                // onAddWishlist={(x) => {
                //   dispatch(addToWishlist(x));
                // }}
                // onAddToCart={(x) => {
                //   dispatch(addItemToCart(item));
                // }}
              />
            );
          }}
        />
      </View>
      <Text
        style={{
          marginTop: 20,
          fontSize: 18,
          marginLeft: 20,
          fontWeight: "600",
          color: "#000",
        }}
      >
        New Jeans
      </Text>
      <View style={{ marginTop: 15 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={jeansList}
          renderItem={({ item, index }) => {
            return (
              <ProductItem
                item={item}
                // onAddWishlist={(x) => {
                //   dispatch(addToWishlist(x));
                // }}
                // onAddToCart={(x) => {
                //   dispatch(addItemToCart(item));
                // }}
              />
            );
          }}
        />
      </View>
      <Text
        style={{
          marginTop: 20,
          fontSize: 18,
          marginLeft: 20,
          fontWeight: "600",
          color: "#000",
        }}
      >
        New Slippers
      </Text>
      <View style={{ marginTop: 15 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={slipperList}
          renderItem={({ item, index }) => {
            return (
              <ProductItem
                item={item}
                // onAddWishlist={(x) => {
                //   dispatch(addToWishlist(x));
                // }}
                // onAddToCart={(x) => {
                //   dispatch(addItemToCart(item));
                // }}
              />
            );
          }}
        />
      </View>
      <Text
        style={{
          marginTop: 20,
          fontSize: 18,
          marginLeft: 20,
          fontWeight: "600",
          color: "#000",
        }}
      >
        New Shoes
      </Text>
      <View style={{ marginTop: 15, marginBottom: 100 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={shoesList}
          renderItem={({ item, index }) => {
            return (
              <ProductItem
                item={item}
                // onAddWishlist={(x) => {
                //   dispatch(addToWishlist(x));
                // }}
                // onAddToCart={(x) => {
                //   dispatch(addItemToCart(x));
                // }}
              />
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Main;
