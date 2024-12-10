import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Intruksi_bimbingan = ({navigation}) => {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.arrowContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Informasi')}>
                <Ionicons name="arrow-back" size={20} color="#FBBF24" />
                </TouchableOpacity>
            </View>
                <Text style={styles.headerTitle}>Intruksi Bimbingan</Text>
                <View style={styles.headerIcons}>
                <TouchableOpacity>
                    <Ionicons name="ellipsis-vertical" size={24} color="black" />
                </TouchableOpacity>
                </View>
            </View>
    
          {/* Instruksi Bimbingan Section */}
          <View style={styles.instruksiBimbingan}></View>
            <Text style={styles.instruksiBimbinganTitle}>Peraturan Bimbingan</Text>
          <View style={styles.instruksiBimbingan}></View>
          
          {/* List Instruksi */}
          <View style={styles.listContainer}>
            <Text style={styles.listItem}>
              1. Dosen Penasehat Akademik (PA) menetapkan jadwal konsultasi PA dan menginformasikan kepada mahasiswa PA masing-masing melalui fitur chat.
            </Text>
            <Text style={styles.listItem}>
              2. Jadwal konsultasi PA dalam satu (1) semester minimal 6 kali dijadwalkan setiap bulan.
            </Text>
            <Text style={styles.listItem}>
              3. Setiap proses konsultasi PA wajib menandatangani KRS.
            </Text>
            <Text style={styles.listItem}>
              4. Mahasiswa konsultasi PA mengikuti jadwal yang sudah ditetapkan oleh dosen PA atau dapat membuat janji dengan dosen PA melalui fitur kontak dosen sebelum konsultasi.
            </Text>
            <Text style={styles.listItem}>
              5. Membawa persyaratan saat konsultasi PA seperti KRS.
            </Text>
          </View>
        </View>
      );
};

export default Intruksi_bimbingan

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
        marginBottom: 20,
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
    instruksiBimbingan: {
      borderBottomWidth: 2,
      borderBottomColor: '#007bff',
      paddingBottom: 8,
      marginBottom: 10,
    },
    instruksiBimbinganTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#007bff',
    },
    listContainer: {
      marginTop: 16,
    },
    listItem: {
      fontSize: 16,
      color: '#000',
      marginBottom: 12,
    },
  });