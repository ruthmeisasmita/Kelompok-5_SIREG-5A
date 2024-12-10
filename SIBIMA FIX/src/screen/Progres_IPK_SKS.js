import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Progres_IPK_SKS = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Beranda')}>
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
      <View style={styles.profileCard}>
        <View style={styles.profileInfo}>
        <Image
          source={require('../../Assetsibima/profil.png')}
          style={styles.Avatar}
        />
          <View style={styles.profileText}>
            <Text style={styles.profileName}>CHA EUNWOO</Text>
            <Text style={styles.profileSemester}>Semester 4</Text>
          </View>
        </View>
        <View style={styles.sksInfo}>
          <View style={styles.sksItem}>
            <Text>SKS yang Diizinkan</Text>
            <View style={styles.sksBadge}>
              <Text style={styles.sksBadgeText}>24</Text>
            </View>
          </View>
          <View style={styles.sksItem}>
            <Text>Total SKS yang Ditempuh</Text>
            <View style={styles.sksBadge}>
              <Text style={styles.sksBadgeText}>40</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Progres</Text>
      <View style={styles.grid}>
        <View style={styles.card}>
        <Image
          source={require('../../Assetsibima/KHS.png')}
          style={styles.cardImage}
        />
          <Text style={styles.cardTitle}>KHS</Text>
          <TouchableOpacity onPress={() => navigation.navigate('KHS')} style={styles.button}>
            <Text style={styles.buttonText}>Lihat</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
        <Image
          source={require('../../Assetsibima/SKS.png')}
          style={styles.cardImage}
        />
          <Text style={styles.cardTitle}>KRS</Text>
          <TouchableOpacity onPress={() => navigation.navigate('KRS')} style={styles.button}>
            <Text style={styles.buttonText}>Lihat</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Unggah Dokumen</Text>
      <View style={styles.grid}>
        <View style={styles.card}>
        <Image
          source={require('../../Assetsibima/File_KHS.png')}
          style={styles.cardImage}
        />
          <Text style={styles.cardTitle}>Unggah KHS</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Unggah_KHS')} style={styles.button}>
            <Text style={styles.buttonText}>Lihat</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
        <Image
          source={require('../../Assetsibima/File_KRS.png')}
          style={styles.cardImage}
        />
          <Text style={styles.cardTitle}>Unggah KRS</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Unggah_KRS')} style={styles.button}>
            <Text style={styles.buttonText}>Lihat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Progres_IPK_SKS

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
  profileCard: {
    backgroundColor: '#7CC3FF',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileText: {
    marginLeft: 16,
  },
  profileName: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  profileSemester: {
    color: '#FFFFFF',
  },
  sksInfo: {
    backgroundColor: '#99D1FF',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  },
  sksItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  sksBadge: {
    backgroundColor: '#FBBF24',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  sksBadgeText: {
    color: '#000000',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 12,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#BFDBFE',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  buttonText: {
    color: '#1D4ED8',
  },
});