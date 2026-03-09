import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello 👋</Text>
          <Text style={styles.name}>NVK</Text>
        </View>

        <Image
          source={require("../assets/akaa.jpg")}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.sectionTitle}>Your Insights</Text>

      {/* Grid */}
      <View style={styles.grid}>

        {/* Scan New */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Scan")}
        >

          <Image
            source={require("../assets/scan.png")}
            style={styles.icon}
          />
          
          <Text style={styles.cardTitle}>Scan new</Text>
          <Text style={styles.cardSub}>Scanned 483</Text>
        </TouchableOpacity>

        {/* Counterfeits */}
        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../assets/warning.png")}
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.cardSub}>Counterfeited 32</Text>
        </TouchableOpacity>

        {/* Success */}
        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../assets/success.png")}
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>Success</Text>
          <Text style={styles.cardSub}>Checkouts 8</Text>
        </TouchableOpacity>

        {/* Directory */}
        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../assets/directory.png")}
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>Directory</Text>
          <Text style={styles.cardSub}>History 26</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

container: {
flex: 1,
backgroundColor: "#F5F6FA",
padding: 20,
},

header: {
flexDirection: "row",
justifyContent: "space-between",
alignItems: "center",
marginTop: 40,
},

hello: {
fontSize: 24,
fontWeight: "600",
},

name: {
color: "#666",
marginTop: 4,
},

avatar: {
width: 40,
height: 40,
borderRadius: 20,
},

sectionTitle: {
marginTop: 30,
fontSize: 18,
fontWeight: "500",
},

grid: {
flexDirection: "row",
flexWrap: "wrap",
justifyContent: "space-between",
marginTop: 20,
},

card: {
width: "47%",
backgroundColor: "#EDEEF3",
borderRadius: 20,
padding: 20,
alignItems: "center",
marginBottom: 20,
},

icon: {
width: 40,
height: 40,
marginBottom: 10,
},

cardTitle: {
fontSize: 16,
fontWeight: "500",
},

cardSub: {
fontSize: 12,
color: "#888",
marginTop: 4,
},

});