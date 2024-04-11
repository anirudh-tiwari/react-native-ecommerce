import { View, Text, ScrollView, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import { CartSelectors } from "../store/features/cart";
import ProductItem from "../common/ProductItem";
import { isEmpty } from "lodash";

const Cart = () => {
  const {cartList} = CartSelectors();
  return (
    <SafeAreaView>
      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
       {isEmpty( cartList ) ? 
       <Text>NO Cart added</Text> : 
      <FlatList
          data={cartList}
          renderItem={({ item, index }) => {
            return (
              <ProductItem
                item={item}
                width='100%'
                marginLeft='0'
                marginTop={20}
                hasCart={ true }
              />
            );
          }}
        />
      }
      </View>
    </SafeAreaView>
  );
};

export default Cart;
