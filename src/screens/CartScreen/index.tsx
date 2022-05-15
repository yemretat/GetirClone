import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import productsGetir from "../../../assets/productsGetir";
import { Product } from "../../models";
import CartItem from "../../components/CartItem";
import ProductItem from "../../components/ProductItem";
import { connect } from "react-redux";

const { height, width } = Dimensions.get("window");

function index({
  cartItems,
  route
}: {
  cartItems: { product: Product; quantity: number }[],route:any;
}) {
  //const [cartItems,setCartItems] = useState<Product[]>()
  const {
    params: { message },
  } = route;

  console.log("Zınk route params are ",route.params)
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const getProductsPrice = () => {
    let total = 0;
    cartItems.forEach((product) => {
      total += product.product.fiyat;
      setTotalPrice(total);
    });
  };
  useEffect(() => {
    getProductsPrice();
    return (() => {
      setTotalPrice(0)
    })
  }, [cartItems]);
  return (
    <View style={{flex:1}}>
          <ScrollView style={{ flex:1}}>
      <FlatList
        style={{backgroundColor: "#F5F5F5" }}
        data={cartItems}
        renderItem={({ item }) => <CartItem product={item} />}
      />
      <Text style={{padding:15,fontWeight:'bold',color:'#5D3EBD'}}>Önerilen Ürünler</Text>
      <ScrollView style={{backgroundColor:'white'}} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
        {productsGetir.map((item,index) => (
          <ProductItem index={item.id} item={item} />
        ))}
      </ScrollView>

    </ScrollView>

    <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: height * 0.12,
          paddingHorizontal: "4%",
          width: "100%",
          backgroundColor: "#f8f8f8",
          position:'absolute',
          bottom:0
        }}
      >
        <TouchableOpacity
          style={{
            flex: 3,
            borderBottomLeftRadius: 8,
            borderTopLeftRadius: 8,
            backgroundColor: "#5D3EBD",
            height: height * 0.06,
            justifyContent: "center",
            alignItems: "center",
            marginTop:-10
            
          }}
        >
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            height: height * 0.06,
            marginTop:-10,
            borderTopRightRadius:8,
            borderBottomRightRadius:8

          }}
        >
          <Text
            style={{
              color: "#5D3EBD",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            <Text>{"\u20BA"}</Text>
            {totalPrice.toFixed(2)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>

  );
}
const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps, null)(index);
