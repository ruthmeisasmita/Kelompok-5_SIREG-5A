import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Janji_bimbingan_diterima = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Chat_dosen_putri')}>
            <Ionicons name="arrow-back" size={20} color="#FBBF24" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Status</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
          <View style={styles.content}>
            <Text style={styles.title}>Permohonan Bimbingan</Text>
            <View style={styles.card}>
              <Image
                source={require("../../Assetsibima/Chat_dosen_putri.png")}
                style={styles.image}
              />
              <Text style={styles.cardTitle}>Jadwal Bimbingan</Text>
              <Text style={styles.cardSubtitle}>Salman Alfarizi</Text>
              <Text style={styles.cardText}>Tanggal : 08 Mei 2024</Text>
              <Text style={styles.cardText}>Jam : 10.00 AM</Text>
              <Text style={styles.cardText}>Lokasi : Indralaya</Text>
              <View style={styles.statusContainer}>
                <Text style={styles.status}>Diterima</Text>
              </View>
              <Text style={styles.cardFooter}>
                Permohonan bimbingan anda telah diterima. Jadwal bimbingan telah diperbarui
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>JADWAL</Text>
          </TouchableOpacity>
        </View>
      );
}

export default Janji_bimbingan_diterima;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 16,
    paddingHorizontal: 2,
    marginTop: 30,
    marginBottom: 15,
    },
    arrowContainer: {
      width: 25, 
      height: 25, 
      borderRadius: 20, 
      borderColor: "#FBBF24", 
      borderWidth: 2, 
      justifyContent: "center",
      alignItems: "center",
      },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 15,
  },
    content: {
      width: '100%',
      padding: 16,
      paddingTop:3,
      
    },
    title: {
      marginTop: 10,
      fontSize: 18,
      fontWeight: 'bold',
      color: '#225580',
    },
    card: {
      backgroundColor: '#87CEFA',
      borderRadius: 20,
      padding: 16,
      marginTop: 10,
      alignItems: 'center',
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 16,
    },
    cardSubtitle: {
      marginTop: 12,
      marginBottom: 12,
      fontSize: 16,
      color: '#000000',
      fontWeight: 'bold',
    },
    cardText: {
      fontSize: 16,
      color: '#000000',
    },
    statusContainer: {
      backgroundColor: '#18E345',
      borderRadius: 16,
      paddingVertical: 4,
      paddingHorizontal: 80,
      marginTop: 16,
    },
    status: {
      color: 'white',
    },
    cardFooter: {
      textAlign: 'center',
      color: '#000000',
      marginTop: 16,
    },
    button: {
      backgroundColor: '#3470A2',
      borderRadius: 16,
      paddingVertical: 12,
      paddingHorizontal: 130,
      marginTop: 80,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

