import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Jadwal_dosen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Informasi')}>
            <Ionicons name="arrow-back" size={20} color="#FBBF24" />
          </TouchableOpacity>
        </View>

        <Text style={styles.headerTitle}>Jadwal Dosen</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* DetailContainer with ScrollView */}
      <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.detailContainer}>
          <Text style={styles.detailTitle}>Detail Jadwal</Text>
          <Text style={styles.detailDate}>Kamis, 10 April 2024</Text>

          <View style={styles.scheduleContainer}>
            {scheduleData.map((item, index) => (
              <View key={index} style={styles.scheduleItem}>
                <View style={[styles.scheduleIndicator, { backgroundColor: item.color }]} />
                <View style={styles.scheduleContent}>
                  <Text style={styles.scheduleTitle}>{item.title}</Text>
                  <Text style={styles.scheduleClass}>Class: {item.class}</Text>
                  <View style={styles.scheduleInfo}>
                    <Ionicons name="location-outline" size={14} color="#6B7280" />
                    <Text style={styles.scheduleText}>{item.location}</Text>
                  </View>
                  <View style={styles.scheduleInfo}>
                    <Ionicons name="time-outline" size={14} color="#6B7280" />
                    <Text style={styles.scheduleText}>{item.time}</Text>
                  </View>
                </View>
                <View style={styles.scheduleProfile}>
                  <Image source={item.profileImage} style={styles.profileImage} />
                  <Text style={styles.profileName}>{item.lecturer}</Text>
                </View>
              </View>
            ))}
          </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default Jadwal_dosen;

const scheduleData = [
  {
    title: 'Statistika',
    class: 'A.22',
    location: 'Kampus Bukit',
    time: '10.00 - 12.00 AM',
    lecturer: 'Allsela Meiriza, S.KOM., M.T',
    profileImage: require('../../Assetsibima/profil_jadwal.png'), 
    color: '#3B82F6',
  },
  {
    title: 'UI & UX',
    class: 'D.12',
    location: 'Kampus Indralaya',
    time: '08.00 - 11.00 AM',
    lecturer: 'Pacu Putra Suarli, M.CS',
    profileImage: require('../../Assetsibima/profil_jadwal.png'), 
    color: '#FBBF24',
  },
  {
    title: 'Praktikum WEB',
    class: 'Lab WEB',
    location: 'Kampus Bukit',
    time: '09.00 - 10.00 AM',
    lecturer: 'Pacu Putra Suarli, M.CS',
    profileImage: require('../../Assetsibima/profil_jadwal.png'), 
    color: '#FB923C',
  },
  {
    title: 'Statistika',
    class: 'D.22',
    location: 'Kampus Indralaya',
    time: '12.00 - 13.30 PM',
    lecturer: 'Allsela Meiriza, S.KOM., M.T',
    profileImage: require('../../Assetsibima/profil_jadwal.png'), 
    color: '#3B82F6',
  },
];

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
    marginRight: 20,
  },
  scrollView: {
    padding: 15,
  },
  detailContainer: {
    flex: 1,
    marginBottom: 18,
  },
  detailTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4B5563',
    marginBottom: 8,
  },
  detailDate: {
    fontSize: 13,
    color: '#9CA3AF',
    marginBottom: 18,
  },
  scheduleContainer: {
    paddingHorizontal: 1,
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  scheduleIndicator: {
    width: 8,
    height: '100%',
    borderRadius: 4,
    marginRight: 10,
  },
  scheduleContent: {
    flex: 1,
  },
  scheduleTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  scheduleClass: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
  scheduleInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  scheduleText: {
    fontSize: 13,
    color: '#6B7280',
    marginLeft: 4,
  },
  scheduleProfile: {
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 4,
  },
  profileName: {
    fontSize: 10,
    color: '#6B7280',
    textAlign: 'center',
  },
});
