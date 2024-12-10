import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Logbook_bimbingan = ({ navigation }) => {
  const activities = [
    {
      title: 'Bimbingan pengajuan beasiswa',
      date: '4 Oktober 2023, 10:30 siang',
      color: '#6B7280',
    },
    {
      title: 'Bimbingan KRS semester 2',
      date: '8 Agustus 2023, 18:00 siang',
      color: '#6B7280',
    },
    {
      title: 'Bimbingan hasil studi semester 1',
      date: '10 Januari 2023, 10:00 siang',
      color: '#6B7280',
    },
    {
      title: 'Bimbingan KRS semester 1',
      date: '2 Agustus 2022, 13:45 siang',
      color: '#6B7280',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <View style={styles.arrowContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Informasi')}>
              <Ionicons name="arrow-back" size={20} color="#FBBF24" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.headerTitle}>Logbook Bimbingan</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="ellipsis-vertical" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Aktivitas Terakhir</Text>
        <View style={styles.activityList}>
          {activities.map((activity, index) => (
            <View key={index} style={styles.activityItem}>
              <View style={styles.iconWrapper}>
                <View style={styles.dot} />
                {index < activities.length - 1 && (
                  <View style={[styles.line, { backgroundColor: activity.color }]} />
                )}
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityDate}>{activity.date}</Text>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Unduh Aktivitas</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Logbook_bimbingan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollViewContent: {
    padding: 18,
    paddingBottom: 30, // Menambahkan padding bawah untuk konten
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingHorizontal: 2,
    marginTop: 30,
    marginBottom: 15,
  },
  arrowContainer: {
    width: 25,
    height: 25,
    borderRadius: 20,
    borderColor: '#FBBF24',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
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
  sectionTitle: {
    color: '#225580',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15,
  },
  activityList: {
    marginBottom: 16,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconWrapper: {
    alignItems: 'center',
    position: 'relative',
  },
  dot: {
    width: 30,
    height: 30 ,
    borderRadius: 20,
    backgroundColor: '#FFD700',
  },
  line: {
    position: 'absolute',
    top: 20,
    width: 2,
    height: 73,
    marginTop: 10,
  },
  activityContent: {
    flex: 1,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  activityTitle: {
    fontWeight: 'bold',
    color: '#225580',
    paddingTop: 25,
  },
  activityDate: {
    color: '#9CA3AF',
    marginTop: 4,
  },
  downloadButton: {
    backgroundColor: '#63ABE6',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  downloadButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});