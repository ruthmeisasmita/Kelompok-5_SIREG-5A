import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Informasi = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
          <View style={styles.header}>
          <View style={styles.arrowContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Beranda')}>
            <Ionicons name="arrow-back" size={20} color="#FBBF24" />
            </TouchableOpacity>
          </View>
            <Text style={styles.headerTitle}>Informasi</Text>
            <View style={styles.headerIcons}>
              <TouchableOpacity>
                <Ionicons name="ellipsis-vertical" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
    
          {/* Kartu Informasi */}
          <View style={styles.card}>
            <Image
              source={require('../../Assetsibima/intruksi_bimbingan.png')} 
              style={styles.cardImage}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Instruksi Bimbingan</Text>
              <Text style={styles.cardText}>
                Ikuti langkah-langkah mudah ini untuk memaksimalkan pengalaman bimbingan Anda. Selamat belajar dan sukses selalu!
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Intruksi_bimbingan')} style={styles.button}>
                <Text style={styles.buttonText}>Lihat</Text>
              </TouchableOpacity>
            </View>
          </View>
    
          <View style={styles.card}>
            <Image
              source={require('../../Assetsibima/jadwal_dosen.png')}
              style={styles.cardImage}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Jadwal Dosen</Text>
              <Text style={styles.cardText}>
                Temukan jadwal dosen Anda dengan cepat dan mudah. Pilih dosen dan
                lihat jadwal kuliah serta rencanakan pertemuan Anda dengan tepat!
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Jadwal_dosen')} style={styles.button}>
                <Text style={styles.buttonText}>Lihat</Text>
              </TouchableOpacity>
            </View>
          </View>
    
          <View style={styles.card}>
            <Image
              source={require('../../Assetsibima/kalender_bimbingan.png')}
              style={styles.cardImage}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Kalender Bimbingan</Text>
              <Text style={styles.cardText}>
                Atur dan pantau jadwal bimbingan Anda dengan mudah. Pilih tanggal
                dan waktu yang sesuai, serta pastikan semua sesi bimbingan terjadi
                dengan rapi. Selalu siap dan terorganisir!
              </Text>
              <TouchableOpacity  onPress={() => navigation.navigate('Kalender_bimbingan')} style={styles.button}>
                <Text style={styles.buttonText}>Lihat</Text>
              </TouchableOpacity>
            </View>
          </View>
    
          <View style={styles.card}>
            <Image
              source={require('../../Assetsibima/logbook_bimbingan.png')}
              style={styles.cardImage}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Logbook Bimbingan</Text>
              <Text style={styles.cardText}>
                Simpan riwayat bimbingan Anda di sini. Logbook ini mencatat setiap
                sesi bimbingan. Akses riwayat bimbingan Anda kapan saja untuk
                referensi dan evaluasi.
              </Text>
              <TouchableOpacity  onPress={() => navigation.navigate('Logbook_bimbingan')} style={styles.button}>
                <Text style={styles.buttonText}>Lihat</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      );
};

export default Informasi

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      padding: 18,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "white",
      padding: 16,
      paddingHorizontal: 2,
      marginTop: 30,
      marginBottom: 2,
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
      fontWeight: "bold",
    },
    headerIcons: {
      flexDirection: "row",
      alignItems: "center",
    },
    card: {
      backgroundColor: "#FFF",
      borderRadius: 20,
      margin: 12,
      padding: 16,
      flexDirection: "row",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 8,
      elevation: 5,
    },
    cardImage: {
      width: 110,
      height: 115,
      borderRadius: 20,
    },
    cardContent: {
      flex: 1,
      marginLeft: 16,
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 4,
    },
    cardText: {
      color: "#6B7280",
      marginBottom: 8,
      fontSize: 11,
    },
    button: {
      backgroundColor: "#BFDBFE",
      paddingVertical: 8,
      paddingHorizontal: 30,
      borderRadius: 16,
      alignSelf: "flex-start",
    },
    buttonText: {
      color: "#1D4ED8",
      fontWeight: "bold",
      fontSize: 13,
    },
  });