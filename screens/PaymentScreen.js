import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";

export default function PaymentScreen({ navigation }) {

  const [method, setMethod] = useState("card");

  return (
    <View style={styles.container}>

      {/* Back */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={{fontSize:22}}>‹</Text>
      </TouchableOpacity>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Checkout 💳</Text>

        <View>
          <Text style={styles.total}>₹ 1,527</Text>
          <Text style={styles.gst}>Including GST (18%)</Text>
        </View>
      </View>

      {/* Payment method */}
      <View style={styles.methodRow}>

        <TouchableOpacity
          style={[
            styles.methodBtn,
            method === "card" && styles.activeMethod
          ]}
          onPress={() => setMethod("card")}
        >
          <Text style={styles.methodText}>Credit card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.methodBtn}
          onPress={() => setMethod("apple")}
        >
          <Text style={styles.methodText}>Apple Pay</Text>
        </TouchableOpacity>

      </View>

      {/* Card number */}
      <Text style={styles.label}>Card number</Text>

      <TextInput
        style={styles.input}
        placeholder="5261 4141 0151 8472"
      />

      {/* Cardholder */}
      <Text style={styles.label}>Cardholder name</Text>

      <TextInput
        style={styles.input}
        placeholder="Christie Doe"
      />

      {/* Expiry + CVV */}
      <View style={styles.row}>

        <View style={{flex:1}}>
          <Text style={styles.label}>Expiry date</Text>

          <TextInput
            style={styles.input}
            placeholder="06 / 2024"
          />
        </View>

        <View style={{flex:1}}>
          <Text style={styles.label}>CVV / CVC</Text>

          <TextInput
            style={styles.input}
            placeholder="915"
          />
        </View>

      </View>

      {/* Note */}
      <Text style={styles.note}>
        We will send you an order details to your email after the successful payment
      </Text>

      {/* Pay button */}
      <TouchableOpacity style={styles.payBtn} onPress={() => navigation.navigate("Success")}>
        <Text style={styles.payText}>🔒 Pay for the order</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F6F7FB",
padding:20,
marginBottom:150,
},

backBtn:{
marginTop:5,
width:40,
height:40,
backgroundColor:"#EEE",
borderRadius:10,
alignItems:"center",
justifyContent:"center"
},

header:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginTop:5
},

title:{
fontSize:22,
fontWeight:"600"
},

total:{
fontSize:18,
color:"#2BC36B",
fontWeight:"600"
},

gst:{
fontSize:12,
color:"#888"
},

methodRow:{
flexDirection:"row",
marginTop:20
},

methodBtn:{
flex:1,
backgroundColor:"#EEE",
padding:15,
borderRadius:15,
alignItems:"center",
marginRight:10
},

activeMethod:{
backgroundColor:"#2BC36B"
},

methodText:{
color:"#333",
fontWeight:"500"
},

label:{
marginTop:20,
marginBottom:5,
color:"#555"
},

input:{
backgroundColor:"#EEE",
padding:15,
borderRadius:15
},

row:{
flexDirection:"row",
gap:10
},

note:{
marginTop:20,
fontSize:12,
color:"#999",
textAlign:"center"
},

payBtn:{
backgroundColor:"#2BC36B",
padding:18,
borderRadius:20,
alignItems:"center",
marginTop:20
},

payText:{
color:"#fff",
fontSize:16,
fontWeight:"600"
}

});