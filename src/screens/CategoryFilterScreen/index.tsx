import React,{useState} from "react";
import {ScrollView} from "react-native"
import ProductContainer from "../../components/ProductsContainer"
import CategoryFiltering from "../../components/CategoryFiltering"
import TypeFiltering from "../../components/TypeFiltering"
import productsGetir from "../../../assets/productsGetir";
function index(props){
    const [category,setCategory] = useState(props.route.params.category)
    return(
        <ScrollView stickyHeaderIndices={[0]} style={{height:'100%',backgroundColor:'#f5f5f5'}}>
            <CategoryFiltering category={category} />
            <TypeFiltering />
            <ProductContainer />
        </ScrollView>
    )
}
export default index