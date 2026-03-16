import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function SuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Back button */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ fontSize: 22 }}>‹</Text>
      </TouchableOpacity>

      {/* Image */}
      <Image
        source={require("../assets/success-payment.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>Payment Success, Yayy!</Text>

      {/* Description */}
      <Text style={styles.desc}>
        We will send order details and invoice in your contact no. and
        registered email
      </Text>

      {/* Check Details */}
      <TouchableOpacity style={styles.link}>
        <Text style={styles.linkText}>
          Check Details →
        </Text>
      </TouchableOpacity>

      {/* Download Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Download Invoice</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F5F6FA",
alignItems:"center",
padding:20
},

backBtn:{
alignSelf:"flex-start",
marginTop:5,
width:40,
height:40,
backgroundColor:"#EEE",
borderRadius:10,
alignItems:"center",
justifyContent:"center"
},

image:{
width:260,
height:260,
marginTop:20
},

title:{
fontSize:22,
fontWeight:"600",
marginTop:20,
textAlign:"center"
},

desc:{
textAlign:"center",
color:"#777",
marginTop:10,
paddingHorizontal:20,
lineHeight:20
},

link:{
marginTop:20
},

linkText:{
color:"#5B6EF5",
fontWeight:"500",
fontSize:16
},

button:{
marginTop:40,
backgroundColor:"#5B6EF5",
width:"100%",
padding:18,
borderRadius:20,
alignItems:"center"
},

buttonText:{
color:"#FFF",
fontSize:16,
fontWeight:"600"
}

});