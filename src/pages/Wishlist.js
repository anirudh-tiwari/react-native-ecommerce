import { View, Text, ScrollView, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import ProductItem from "../common/ProductItem";
import { isEmpty } from "lodash";
import { WhishListSelectors } from "../store/features/whishlist";

const Wishlist = () => {
  const {whishList} = WhishListSelectors();
  return (
    <SafeAreaView>
      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
       {isEmpty( whishList ) ? 
       <Text>NO Cart added</Text> : 
      <FlatList
          data={whishList}
          renderItem={({ item, index }) => {
            return (
              <ProductItem
                item={item}
                width='100%'
                marginLeft='0'
                marginTop={20}
                hasWhishList={ true }
              />
            );
          }}
        />
      }
      </View>
    </SafeAreaView>
  );
};

export default Wishlist;
