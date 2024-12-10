import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Buat_Janji_Putri = ({ navigation }) => {
  // State untuk tab yang aktif
  const [activeTab, setActiveTab] = useState('Indralaya');

  // Data jadwal untuk setiap lokasi dan daftar mahasiswa
  const schedules = {
    Indralaya: [
      { day: 'Senin', times: ['10:00 - 12:00 WIB', '08:00 - 10:00 WIB'] },
      { day: 'Selasa', times: ['10:00 - 12:00 WIB', '08:00 - 10:00 WIB'] },
      { day: 'Rabu', times: ['10:00 - 12:00 WIB', '08:00 - 10:00 WIB'] },
    ],
    Bukit: [
      { day: 'Kamis', times: ['10:00 - 12:00 WIB', '08:00 - 10:00 WIB'] },
      { day: 'Jumat', times: ['10:00 - 12:00 WIB', '08:00 - 10:00 WIB'] },
    ],
    Chat: [
      { name: 'SIREG A', info: ['Cha Eun Woo', 'Semester 4']},
      { name: 'SIREG A', info: ['Jeon Wonwoo', 'Semester 4']},
      { name: 'SIREG A', info: ['Lee Jehoon', 'Semester 4']},
      { name: 'SIREG A', info: ['Byeon Woo Seok', 'Semester 4']},
      { name: 'SIREG A', info: ['Jake Sim', 'Semester 2']},
      { name: 'SIREG A', info: ['Lee Jeonghan', 'Semester 2']},
    ],
  };

  // Komponen untuk menampilkan konten berdasarkan tab aktif
  const renderContent = () => {
    if (activeTab === 'Chat') {
      return (
        <ScrollView style={styles.scheduleContainer}>
          {schedules.Chat.map((student, index) => (
            <View key={index} style={styles.chatItem}>
              <Text style={styles.chatName}>{student.name}</Text>
              <Text style={styles.chatInfo}>{student.info[0]}</Text>
              <Text style={styles.chatSemester}>{student.info[1]}</Text>
            </View>
          ))}
        </ScrollView>
      );
    } else {
      return (
        <ScrollView style={styles.scheduleContainer}>
          {schedules[activeTab].map((schedule, index) => (
            <View key={index} style={styles.scheduleItem}>
              <Text style={styles.scheduleDay}>{schedule.day}</Text>
              <View style={styles.scheduleTimes}>
                {schedule.times.map((time, timeIndex) => (
                  <Text key={timeIndex} style={styles.scheduleTime}>{time}</Text>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
            <View style={styles.arrowContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Janji_bimbingan')}>
                    <Ionicons name="arrow-back" size={20} color="#FBBF24" />
                </TouchableOpacity>
            </View>
          <Text style={styles.headerTitle}>Janji Bimbingan</Text>
            <View style={styles.headerIcons}>
                <TouchableOpacity>
                    <Ionicons name="search" size={24} color="black" style={styles.iconSpacing} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="ellipsis-vertical" size={24} color="black" />
                </TouchableOpacity>
            </View>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image source={require('../../Assetsibima/Putri.png')} style={styles.avatar} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Putri Eka Sevtiyuni, S.SI., M.T</Text>
          <View style={styles.profileDetail}>
            <Ionicons name="school" size={14} color="red" />
            <Text style={styles.profileDetailText}>Magister Teknik</Text>
          </View>
          <View style={styles.profileDetail}>
            <Ionicons name="ribbon" size={14} color="red" />
            <Text style={styles.profileDetailText}>8 Years</Text>
          </View>
          <View style={styles.profileDetail}>
            <Ionicons name="person" size={14} color="red" />
            <Text style={styles.profileDetailText}>Dosen Sistem Informasi</Text>
          </View>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity  onPress={() => navigation.navigate('Buat_Janji2')} style={styles.button}>
        <Text style={styles.buttonText}>BUAT JANJI</Text>
      </TouchableOpacity>

      {/* Tabs */}
      <View style={styles.tabs}>
        <View style={styles.tab}>
          <TouchableOpacity onPress={() => setActiveTab('Indralaya')}>
            <Ionicons name="location" size={24} color="black" />
          </TouchableOpacity>
          <Text>Indralaya</Text>
          {activeTab === 'Indralaya' && <View style={styles.activeIndicator} />}
        </View>
        <View style={styles.tab}>
          <TouchableOpacity onPress={() => setActiveTab('Bukit')}>
            <Ionicons name="location" size={24} color="black" />
          </TouchableOpacity>
          <Text>Bukit</Text>
          {activeTab === 'Bukit' && <View style={styles.activeIndicator} />}
        </View>
        <View style={styles.tab}>
          <TouchableOpacity onPress={() => setActiveTab('Chat')}>
            <Ionicons name="chatbox" size={24} color="black" />
          </TouchableOpacity>
          <Text>Daftar Mahasiswa</Text>
          {activeTab === 'Chat' && <View style={styles.activeIndicator} />}
        </View>
      </View>

      {/* Content */}
      {renderContent()}
    </View>
  );
};

export default Buat_Janji_Putri;

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
  iconSpacing: {
    marginRight: 16,
  },
  searchIcon: {
    marginRight: 15,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  profileDetailText: {
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#3470A2',
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 9,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#99D1FF',
    paddingVertical: 7,
  },
  tab: {
    alignItems: 'center',
  },
  activeIndicator: {
    width: '100%',
    height: 3,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: -8,
  },
  scheduleContainer: {
    backgroundColor: '#FFE088',
    borderRadius: 30,
    padding: 20,
    marginTop: 16,
    marginBottom: 45,
  },
  scheduleItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingVertical: 10,
  },
  scheduleDay: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  scheduleTimes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Untuk mengatur jika waktu terlalu panjang
  },
  scheduleTime: {
    fontSize: 14,
    color: '#333',
    paddingHorizontal: 5,
  },
  chatItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingVertical: 10,
  },
  chatName: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
  },
  chatInfo: {
    textAlign: 'center',
    fontSize: 14,
    flex: 1,
  },
  chatSemester: {
    textAlign: 'right',
    fontSize: 14,
    flex: 1,
  },
});
