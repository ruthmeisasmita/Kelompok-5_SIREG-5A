import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet,} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Forum = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <TouchableOpacity onPress={() => navigation.navigate('Chat_Dosen1')}>
                <Ionicons name="arrow-back" size={20} color="#FBBF24" />
              </TouchableOpacity>
            </View>
    
            {/* Bagian header center dengan teks vertikal */}
            <View style={styles.headerCenter}>
              <Text style={styles.headerTextTop}>Forum Bimbingan</Text>
              <Text style={styles.headerTextBottom}>Putri Eka Sevtiyuni, S.Si., M.T.</Text>
            </View>
    
            <View style={styles.headerRight}>
              <TouchableOpacity>
                <Ionicons
                  name="call"
                  size={24}
                  color="#4B5563"
                  style={styles.iconSpacing}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="videocam" size={24} color="#4B5563" />
              </TouchableOpacity>
            </View>
          </View>
    
          <View style={styles.content}>
            <View style={[styles.card, styles.cardLeft]}>
              <View style={styles.cardTopYellow}>
                <Image
                  source={require("../../Assetsibima/Chat_dosen_putri.png")}
                  style={styles.image}
                />
              </View>
              <View style={styles.cardBottomWhite}>
                <Text style={styles.cardTitle}>Jadwal Bimbingan</Text>
                <Text style={styles.cardText}>
                  Penjadwalan bimbingan telah dibuat. Silakan beri respon pada
                  pilihan tanggal dan waktu yang telah dibuat
                </Text>
                <TouchableOpacity style={[styles.button, styles.buttonYellow]}>
                  <Text style={styles.buttonText}>Beri Respon</Text>
                </TouchableOpacity>
              </View>
            </View>
    
            <View style={[styles.card, styles.cardRight]}>
              <View style={styles.cardTopBlue}>
                <Image
                  source={require("../../Assetsibima/Chat_dosen_putri.png")}
                  style={styles.image}
                />
              </View>
              <View style={styles.cardBottomWhite}>
                <Text style={styles.cardTitle}>Jadwal Bimbingan</Text>
                <Text style={styles.cardText}>
                  Jadwal bimbingan anda telah dilihat. Silakan cek status
                  penjadwalan
                </Text>
                <TouchableOpacity
                  style={[styles.button, styles.buttonBlue, styles.buttonMarginTop]}
                >
                  <Text style={styles.buttonText}>Periksa Sekarang</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
    
          {/* Footer Section */}
          <View style={styles.footer}>
            <TouchableOpacity>
              <Ionicons name="happy-outline" size={24} color="#4B5563" />
            </TouchableOpacity>
    
            <TextInput style={styles.input} placeholder="ketik sesuatu" />
    
            <TouchableOpacity>
              <Ionicons name="camera" size={24} color="#4B5563" style={styles.iconSpacing} />
            </TouchableOpacity>
    
            {/* Wrapper untuk ikon mic dan paper plane */}
            <View style={styles.micAndSend}>
              {/* Ikon mic */}
              <TouchableOpacity style={[styles.buttonMicSend]}>
                <Ionicons name="mic-outline" size={20} color="#FFC727" />
              </TouchableOpacity>
    
              {/* Ikon paper-plane */}
              <TouchableOpacity style={[styles.buttonMicSend]}>
                <Ionicons name="paper-plane" size={20} color="#FFC727" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
}

export default Forum;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        marginTop: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#white",
        marginTop: 38,
        marginBottom:-25,
      },
      headerLeft: {
        width: 25,
        height: 25,
        borderRadius: 20,
        borderColor: "#FBBF24",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
      },
    headerCenter: {
      flexDirection: "column", // Mengatur teks secara vertikal
      alignItems: "center", // Memusatkan teks secara horizontal
      flex: 1, // Menyesuaikan lebar agar tidak mempengaruhi layout
      marginHorizontal: 8, // Memberi jarak antara kiri dan kanan
    },
    headerTextTop: {
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    },
    headerTextBottom: {
      fontSize: 14,
      fontWeight: "bold",
      textAlign: "center",
    },
    headerRight: {
      flexDirection: "row",
      alignItems: "center",
    },
    iconSpacing: {
      marginRight: 16,
    },
    content: {
      padding: 16,
      flexDirection: "column", 
    },
    card: {
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
      width: "58%",
      marginBottom: 7, 
    },
    cardRight: {
      alignSelf: "flex-end", 
    },
    cardLeft: {
      alignSelf: "flex-start",
    },
    cardTopBlue: {
      backgroundColor: "#87CEFA",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 15,
      marginTop:1,
    },
    cardTopYellow: {
      backgroundColor: "#F7CE45",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 15,
      marginTop:1,
    },
    cardBottomWhite: {
      backgroundColor: "#FFFFFF", 
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      padding: 8,
    },
    image: {
      width: 64,
      height: 64,
      borderRadius: 32,
      alignSelf: "center",
    },
    cardTitle: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    },
    cardText: {
      marginTop: 4,
      fontSize: 14,
      color: "#000000",
      textAlign: "center",
    },
    button: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 16,
      alignItems: "center",
      marginTop: 18,
    },
    buttonBlue: {
      backgroundColor: "#87CEFA",
    },
    buttonYellow: {
      backgroundColor: "#F7CE45",
    },
    buttonMicSend: {
      backgroundColor: "#5495D1",
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginTop: 4,
      marginBottom: 4,
    },
    buttonText: {
      color: "#FFFFFF",
      fontSize: 14,
      fontWeight: "bold",
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 3,
        backgroundColor: "#FFFFFF",
        borderTopWidth: 1,
        borderTopColor: "#E5E7EB",
        marginTop: 1,
      },
    input: {
      flex: 1,
      padding: 8,
      marginHorizontal: 8,
      borderWidth: 1,
      borderColor: "#E5E7EB",
      borderRadius: 16,
    },
    micAndSend: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  });