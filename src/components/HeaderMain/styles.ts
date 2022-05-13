import { StyleSheet,Dimensions } from "react-native";
const {height} = Dimensions.get('window')
const styles = StyleSheet.create({
    headerMain:{
        height:height*0.064,
        flexDirection:'row',
        backgroundColor:'#F7D102',
        alignItems:'center',
        justifyContent:'space-between'
    },
    headerOne:{
        height:height*0.064,
        width:'81%',
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:'3%',
        borderTopRightRadius:25,
        borderBottomRightRadius:25
    }
    ,image:{
        height: 30, 
        width: 30,
    },
    headerOneView:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:8,
        paddingLeft:8,
        borderLeftColor:'#F3F2FD',
        borderLeftWidth:2,
        height:height*0.035,

    },
    headerTwo:{
        width:'20%',
        height:height*0.065,
        flexDirection:'column',
        justifyContent:'center',
        paddingRight:10
    }
})
export default styles