
import { Colors } from "@/constants/Colors";
import { Dimensions, StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  scrollContainer:{
   backgroundColor:'#fff',
   height:Dimensions.get("screen").height
  },
  headingText:{
    color:'black',
    fontWeight:'400',
    fontSize:20,
    width:'80%',
    marginLeft:'10%',
    position:'relative',
    bottom:28
},
  scrollHeader:{
    height:Dimensions.get('screen').height*0.4,
  },
  inputField:{
    marginBottom:'2%',
    width:'90%',
    height:45,
    marginLeft:'5%',
    borderRadius:28,
    borderColor:'#3332',
    // // #02e8f0
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    borderWidth:1,
    backgroundColor:'rgba(237, 236, 237, 0.6)'
  },
  textInput:{
    width:'80%',
    height:'100%',
    textAlign:'left',
    fontSize:13.5
  }
,
  oAuth:{
    height:'auto',
    width:'100%',
    marginTop:'5%',
    marginBottom:'5%'


  },
  oAuthContainer:{
    height:'auto',
    width:'100%',
    marginTop:'5%',

  },
  orSection:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
  },
  borderLine:{
    backgroundColor:Colors.darkGrey,
    height:1,
    width:'40%'
  },
  OrText:{}
})

export default styles