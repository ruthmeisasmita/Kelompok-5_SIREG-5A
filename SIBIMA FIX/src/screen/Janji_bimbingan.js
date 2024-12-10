import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Janji_bimbingan = ({navigation}) => {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
          <View style={styles.arrowContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Beranda')}>
            <Ionicons name="arrow-back" size={20} color="#FBBF24" />
            </TouchableOpacity>
          </View>
            <Text style={styles.headerTitle}>Janji Bimbingan</Text>
            <View style={styles.headerIcons}>
            <TouchableOpacity>
                <Ionicons name="ellipsis-vertical" size={24} color="black" />
            </TouchableOpacity>
            </View>
            </View>
          <View style={styles.searchContainer}>
            <Ionicons
              name="search" size={20} color="gray" style={styles.searchIcon}
            />
            <TextInput style={styles.searchInput} placeholder="Cari dosen" />
            <Ionicons
              name="mic" size={20} color="gray" style={styles.voiceIcon}
            />
          </View>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.card}>
              <Image
                source={require('../../Assetsibima/Putri.png')}
                style={styles.avatar}
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Putri Eka Sevtiyuni, M.T</Text>
                <Text style={styles.cardSubtitle}>
                  Dosen Jurusan Sistem Informasi, Fakultas Ilmu Komputer,
                  Universitas Sriwijaya
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Buat_Janji_Putri')} style={styles.button}>
                  <Text style={styles.buttonText}>Buat janji</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.card}>
              <Image
                source={require('../../Assetsibima/Alsella.png')}
                style={styles.avatar}
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Alsela Meiriza, M.T</Text>
                <Text style={styles.cardSubtitle}>
                  Dosen Jurusan Sistem Informasi, Fakultas Ilmu Komputer,
                  Universitas Sriwijaya
                </Text>
                <TouchableOpacity  onPress={() => navigation.navigate('Buat_Janji_Alsela')} style={styles.button}>
                  <Text style={styles.buttonText}>Buat janji</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.card}>
              <Image
                source={require('../../Assetsibima/Endang.png')}
                style={styles.avatar}
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Endang Lestari Ruskan, M.T</Text>
                <Text style={styles.cardSubtitle}>
                  Dosen Jurusan Sistem Informasi, Fakultas Ilmu Komputer,
                  Universitas Sriwijaya
                </Text>
                <TouchableOpacity  onPress={() => navigation.navigate('Buat_Janji_Endang')} style={styles.button}>
                  <Text style={styles.buttonText}>Buat janji</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.card}>
              <Image
                source={require('../../Assetsibima/Pacu.png')}
                style={styles.avatar}
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Pacu Putra, M.SC</Text>
                <Text style={styles.cardSubtitle}>
                  Dosen Jurusan Sistem Informasi, Fakultas Ilmu Komputer,
                  Universitas Sriwijaya
                </Text>
                <TouchableOpacity  onPress={() => navigation.navigate('Buat_Janji_Pacu')} style={styles.button}>
                  <Text style={styles.buttonText}>Buat janji</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
    );
};

export default Janji_bimbingan

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
        marginBottom: 5,
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
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#E5E7EB",
      borderRadius: 25,
      margin: 5,
      paddingHorizontal: 15,
    },
    searchIcon: {
      marginRight: 8,
    },
    searchInput: {
      flex: 1,
      height: 40,
    },
    scrollView: {
      padding: 16,
    },
    card: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 16,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOpacity: 0.15,  
        shadowRadius: 8,      
        shadowOffset: { width: 0, height: 4 },  
        elevation: 4,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 0,
      marginRight: 16,
    },
    cardContent: {
      flex: 1,
    },
    cardTitle: {
      fontSize: 14,
      fontWeight: "bold",
    },
    cardSubtitle: {
      color: "#6B7280",
      marginTop: 4,
      fontSize: 11,
    },
    button: {
      marginTop: 8,
      backgroundColor: "#63ABE6",
      paddingVertical: 5,
      paddingHorizontal: 25,
      borderRadius: 20,
      alignSelf: 'flex-start',
    },
    buttonText: {
      color: "white",
      fontWeight: "bold",
    },
  });