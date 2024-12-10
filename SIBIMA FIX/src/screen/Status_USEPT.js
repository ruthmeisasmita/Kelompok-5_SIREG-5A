import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Status_USEPT = ({navigation}) => {
  return (
      <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Beranda')}>
          <Ionicons name="arrow-back" size={20} color="#FBBF24" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Status USEPT</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../Assetsibima/profil.png')}
            style={styles.profileImage}
          />
          <Text style={styles.cardTitle}>CHA EUNWOO</Text>
        </View>
        <Text style={styles.cardText}>
          <Text style={styles.highlight}>NIM: </Text>
          09031182227026
        </Text>
        <Text style={styles.cardText}>
          <Text style={styles.highlight}>Test Type: </Text>
          USEPT
        </Text>
        <Text style={styles.cardText}>
          <Text style={styles.highlight}>Test Date: </Text>
          21/02/2024
        </Text>
      </View>
      <View style={styles.scoreCard}>
        <View style={styles.scoreTextContainer}>
          <Text style={styles.cardTitle}>Score</Text>
          <Text style={styles.score}>520</Text>
        </View>
        <Text style={styles.cardText}>
          Silakan buka Sistem Informasi Akademik (SIMAK) untuk melihat detail skor
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buka SIMAK</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.congrats}>Selamat, anda lulus USEPT 2024!</Text>
      <Image
        source={require('../../Assetsibima/status_USEPT2.png')}
        style={styles.trophy}
      />
      <TouchableOpacity style={styles.footer}onPress={() => navigation.navigate('Beranda')}>
        <Text style={styles.footerText}>BERANDA</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Status_USEPT


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
    card: {
      backgroundColor: '#7CC3FF',
      borderRadius: 10,
      padding: 20,
      marginVertical: 10,
      width: '100%',
    },
    profileContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    profileImage: {
      borderRadius: 30,
      width: 60,
      height: 60,
      marginRight: 20,
    },
    cardTitle: {
      fontSize: 19,
      color: '#ffffff',
    },
    cardText: {
      color: '#ffffff',
      marginVertical: 5,
    },
    highlight: {
      color: '#f1c40f',
      fontWeight: 'bold',
    },
    scoreCard: {
      backgroundColor: '#7CC3FF',
      borderRadius: 10,
      padding: 20,
      marginVertical: 10,
      width: '100%',
    },
    scoreTextContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    score: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#ffffff',
    },
    button: {
      backgroundColor: '#FBBF24',
      borderRadius: 40,
      padding: 8,
      marginVertical: 10,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
    },
    congrats: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    trophy: {
      width: 100,
      height: 90,
      alignSelf: 'center',
    },
    footer: {
      backgroundColor: '#2E86C1',
      borderRadius: 30,
      padding: 8,
      marginVertical: 20,
      width: '100%',
      alignItems: 'center',
    },
    footerText: {
      color: '#ffffff',
      fontSize: 15,
    },
  });