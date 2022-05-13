import React from 'react'
import {View,Text} from "react-native"
import productsGetir from '../../../assets/productsGetir'
import ProductItem from "../../components/ProductItem"

function index() {
  return (
    <View>
        <View style={{flexDirection:'row' ,alignItems:'center',backgroundColor:'white'}}>
            {productsGetir.slice(0,2).map((item) => (
                <ProductItem key={item.id} item={item} />
            ))}
        </View>
        <Text style={{color:"gray",fontWeight:'bold', padding:14}}>
            Çubuk
        </Text>
        <View style={{flexDirection:'row' ,alignItems:'center'
      ,flex:1,flexWrap:'wrap',width:'100%',backgroundColor:'white',paddingVertical:10}}>
            {productsGetir.slice(2).map((item) => (
                <ProductItem key={item.id} item={item} />
            ))}
        </View>
    </View>
  )
}

export default index