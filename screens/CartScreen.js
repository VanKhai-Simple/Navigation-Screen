import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";

export default function CartScreen({ navigation }) {

  const [cart, setCart] = useState([
    {
      id: "1",
      name: "Orange Juice",
      brand: "Lauren's",
      price: 149,
      qty: 2,
      image: require("../assets/juice.png")
    },
    {
      id: "2",
      name: "Skimmed Milk",
      brand: "Baskin's",
      price: 129,
      qty: 2,
      image: require("../assets/milk.png")
    },
    {
      id: "3",
      name: "Aloe Vera Lotion",
      brand: "Marley's",
      price: 1249,
      qty: 1,
      image: require("../assets/lotion.png")
    }
  ]);

  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    ));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const renderItem = ({ item }) => (
    <View style={styles.card}>

      <Image source={item.image} style={styles.image} />

      <View style={{ flex: 1 }}>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>₹ {item.price}</Text>
      </View>

      <View style={styles.qtyBox}>

        <TouchableOpacity onPress={() => decreaseQty(item.id)}>
          <Text style={styles.qtyBtn}>−</Text>
        </TouchableOpacity>

        <Text style={styles.qty}>{item.qty}</Text>

        <TouchableOpacity onPress={() => increaseQty(item.id)}>
          <Text style={styles.qtyBtn}>+</Text>
        </TouchableOpacity>

      </View>

    </View>
  );

  return (
    <View style={styles.container}>

      {/* Header */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ fontSize: 22 }}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Your Cart 👍</Text>

      {/* List */}
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={{ marginTop: 20 }}
      />

      {/* Total */}
      <View style={styles.totalRow}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalPrice}>₹ {total}</Text>
      </View>

      {/* Checkout */}
      <TouchableOpacity 
        style={styles.checkoutBtn} 
        onPress={() => navigation.navigate("Payment")}
        >
            <Text style={styles.checkoutText}>Proceed to checkout</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F5F6FA",
padding:20,
paddingBottom:120,
},

backBtn:{
marginTop:40,
width:40,
height:40,
backgroundColor:"#EEE",
borderRadius:10,
alignItems:"center",
justifyContent:"center"
},

title:{
fontSize:22,
fontWeight:"600",
marginTop:20
},

card:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#F0F0F3",
borderRadius:20,
padding:15,
marginBottom:15
},

image:{
width:50,
height:50,
marginRight:10
},

brand:{
fontSize:12,
color:"#888"
},

name:{
fontSize:16,
fontWeight:"500"
},

price:{
color:"#F08A5D",
marginTop:5
},

qtyBox:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#FFF",
borderRadius:10,
paddingHorizontal:10
},

qtyBtn:{
fontSize:18,
color:"#F08A5D",
paddingHorizontal:8
},

qty:{
marginHorizontal:5
},

totalRow:{
flexDirection:"row",
justifyContent:"space-between",
marginTop:20
},

totalText:{
fontSize:18,
fontWeight:"500"
},

totalPrice:{
fontSize:18,
color:"#F08A5D"
},

checkoutBtn:{
backgroundColor:"#F08A5D",
padding:18,
borderRadius:20,
alignItems:"center",
marginTop:20
},

checkoutText:{
color:"#FFF",
fontSize:16,
fontWeight:"600"
}

});