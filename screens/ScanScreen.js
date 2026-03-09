import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Background juice */}
      <Image
        source={require("../assets/juice.png")}
        style={styles.backgroundImage}
        resizeMode="contain"
      />

      {/* Back button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>‹</Text>
      </TouchableOpacity>

    <View style={styles.frameContainer}>

              <Image
                  source={require("../assets/scan-frame.png")}
                  style={styles.frame}
                  resizeMode="contain"
              />

              {/* Scan blur */}
              <Image
                  source={require("../assets/scan-line-blur.png")}
                  style={styles.scanBlur}
                  resizeMode="contain"
              />

              {/* Scan line */}
              <Image
                  source={require("../assets/scan-line.png")}
                  style={styles.scanLine}
                  resizeMode="contain"
              />

          </View>



      {/* Product Card */}
      <View style={styles.productCard}>
        <Image
          source={require("../assets/juice.png")}
          style={styles.productThumb}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.brand}>Lauren's</Text>
          <Text style={styles.productName}>Orange Juice</Text>
        </View>

        <TouchableOpacity style={styles.plusButton}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#ECE0D0",
justifyContent:"center",
alignItems:"center"
},

backgroundImage:{
position:"absolute",
width:"100%",
height:"100%"
},

backButton:{
position:"absolute",
top:60,
left:20,
backgroundColor:"#fff",
width:40,
height:40,
borderRadius:10,
alignItems:"center",
justifyContent:"center"
},

backText:{
position:"absolute",
bottom:3,
fontSize:30,
color:"#6e69f6",
},

frameContainer:{
position:"absolute",
width:"70%",
aspectRatio:0.7,
justifyContent:"center",
alignItems:"center"
},

frame:{
width:"100%",
height:"100%",
position:"absolute"
},

scanBlur:{
position:"absolute",
width:"100%",
top:"63%",
opacity:0.6
},

scanLine:{
position:"absolute",
width:"100%",
top:"65%"
},

productCard:{   
position:"absolute",
bottom:40,
backgroundColor:"#fff",
width:"85%",
flexDirection:"row",
alignItems:"center",
padding:15,
borderRadius:20
},

productThumb:{
width:40,
height:40,
marginRight:10
},

brand:{
fontSize:12,
color:"#999"
},

productName:{
fontSize:16,
fontWeight:"600"
},

plusButton:{
backgroundColor:"#5A67F2",
width:40,
height:40,
borderRadius:10,
alignItems:"center",
justifyContent:"center"
},

plusText:{
color:"#fff",
fontSize:22
}

});