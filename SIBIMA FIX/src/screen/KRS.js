import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const KRS = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState("Terbaru");

    // Data kartu berdasarkan tab yang aktif
    const dataTerbaru = [
        'KRS Semester 4',
        'KRS Semester 3',
        'KRS Semester 2',
        'KRS Semester 1',
    ];

    const dataTerlama = [
        'KRS Semester 1',
        'KRS Semester 2',
        'KRS Semester 3',
        'KRS Semester 4',
    ];

    const activeData = activeTab === "Terbaru" ? dataTerbaru : dataTerlama;

    return (
        <ScrollView style={styles.container}>
          <View style={styles.header}>
        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Progres_IPK_SKS')}>
          <Ionicons name="arrow-back" size={20} color="#FBBF24" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Progres IPK & SKS</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
          
          <View style={styles.centered}>
            <View style={styles.blueDivider} />
            <Text style={styles.ipkTitle}>IPK</Text>
            <View style={styles.blueDivider} />
          </View>
          <View style={styles.sortContainer}>
            <Text style={styles.sortText}>Urutkan</Text>
            <View style={styles.sortButtons}>
              <TouchableOpacity
                style={[
                  styles.sortButton,
                  activeTab === "Terbaru" && styles.sortButtonActive,
                ]}
                onPress={() => setActiveTab("Terbaru")}
              >
                <Text
                  style={[
                    styles.sortButtonText,
                    activeTab === "Terbaru" && styles.sortButtonTextActive,
                  ]}
                >
                  Terbaru
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.sortButton,
                  activeTab === "Terlama" && styles.sortButtonActive,
                ]}
                onPress={() => setActiveTab("Terlama")}
              >
                <Text
                  style={[
                    styles.sortButtonText,
                    activeTab === "Terlama" && styles.sortButtonTextActive,
                  ]}
                >
                  Terlama
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cardContainer}>
            {activeData.map((semester, index) => (
              <View key={index} style={styles.card}>
                <Image
                  source={require("../../Assetsibima/PDF.png")}
                  style={styles.icon}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{semester}</Text>
                  <View style={styles.cardButtons}>
                    <TouchableOpacity style={styles.viewButton}>
                      <Text style={styles.viewButtonText}>Lihat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton}>
                      <Text style={styles.deleteButtonText}>Hapus</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      );
}

export default KRS;

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
        marginBottom: 10,
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
    centered: {
      alignItems: 'center',
      paddingVertical: 16,
    },
    blueDivider: {
      borderBottomWidth: 2,
      borderBottomColor: '#3470A2',
      width: '100%',
    },
    ipkTitle: {
      color: '#3470A2',
      fontWeight: 'bold',
      fontSize: 18,
      marginVertical: 8,
    },
    sortContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 18,
      marginTop: 10,
      marginBottom: 10,
    },
    sortText: {
      color: '#000000',
      fontSize: 15,
      fontWeight: 'bold',
      marginRight: 10,
    },
    sortButtons: {
      flexDirection: 'row',
      marginRight: 80,
    },
    sortButton: {
      backgroundColor: '#D9D9D9',
      paddingHorizontal: 16,
      paddingVertical: 4,
      borderRadius: 9999,
      marginRight: 8,
    },
    sortButtonActive: {
      backgroundColor: '#89CFF0',
    },
    sortButtonText: {
      color: '#3470A2',
      fontWeight: 'bold',
    },
    sortButtonTextActive: {
      color: '#FFFFFF',
    },
    cardContainer: {
      paddingHorizontal: 16,
      marginTop: 20,
    },
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: 20,
      padding: 23,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
      elevation: 2,
    },
    icon: {
      width: 48,
      height: 48,
    },
    cardContent: {
      marginLeft: 16,
      flex: 1,
    },
    cardTitle: {
      fontWeight: 'bold',
    },
    cardButtons: {
      flexDirection: 'row',
      marginTop: 8,
    },
    viewButton: {
      backgroundColor: '#F7CE45',
      paddingHorizontal: 16,
      paddingVertical: 4,
      borderRadius: 9999,
      marginRight: 8,
    },
    viewButtonText: {
      color: '#FFFFFF',
    },
    deleteButton: {
      backgroundColor: '#FF5555',
      paddingHorizontal: 16,
      paddingVertical: 4,
      borderRadius: 9999,
    },
    deleteButtonText: {
      color: '#FFFFFF',
    },
  });