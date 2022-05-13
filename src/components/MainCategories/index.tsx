import React, { useState } from "react";
import { View,StyleSheet } from "react-native";
import CategoryItem from "../CategoryItem";
import categoriesGetir from "../../../assets/categoriesGetir";
function index() {
  const [categories, setCategories] = useState(categoriesGetir);

  return (
    <View style={{ backgroundColor: "#F5F5F5" }}>
              <View style={styles.listContainer}>
        {categories.map((item)=>(
            <CategoryItem key ={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    //backgroundColor: "white",
    width: "100%",
  },
});

export default index;
