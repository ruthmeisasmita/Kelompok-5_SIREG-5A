import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, TextInput,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Milestone = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const milestones = [
    {
      icon: require('../../Assetsibima/Target 1.png'),
      title: 'Target Wisuda',
      description: ['Pelaksanaan: 1 Oktober 2024'],
      color: '#6B7280',
    },
    {
      icon: require('../../Assetsibima/Target 1.png'),
      title: 'Target Skripsi',
      description: [
        'Sidang Agustus 2024',
        'Pengerjaan Agustus 2024',
        'Proposal Maret 2024',
      ],
      color: '#6B7280',
    },
    {
      icon: require('../../Assetsibima/Target 2.png'),
      title: 'MSIB',
      description: ['06 Agustus 2023'],
      color: '#63ABE6',
    },
    {
      icon: require('../../Assetsibima/Target 2.png'),
      title: 'Kuliah Dengan IPK > 3.0',
      description: [
        'Tugas selalu dikerjakan',
        'Aktif di kelas',
        'Belajar mandiri',
      ],
      color: '#63ABE6',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Beranda')}>
            <Ionicons name="arrow-back" size={20} color="#FBBF24" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Milestone</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Informasi Box */}
      <View style={styles.infoBox}>
        <View>
          <Text style={styles.infoText}>
            <Ionicons name="book" size={16} color="#3470A2" /> Semester 4
          </Text>
          <Text style={styles.infoText}>
            <Ionicons name="time" size={16} color="#3470A2" /> Tersisa 3 semester lagi
          </Text>
        </View>
        <View style={styles.gpaBox}>
          <Text style={styles.gpaText}>IPK</Text>
          <View style={styles.gpaValueContainer}>
            <Text style={styles.gpaValue}>3.8</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Target Milestone</Text>

      {/* Daftar Milestone */}
      <View style={styles.milestoneList}>
        {milestones.map((milestone, index) => (
          <View key={index} style={styles.milestoneItem}>
            <View style={styles.milestoneIconWrapper}>
              <Image source={milestone.icon} style={styles.milestoneIcon} />
              {index < milestones.length - 1 && (
                <View
                  style={[styles.milestoneLine, { backgroundColor: milestone.color }]}
                />
              )}
            </View>
            <View style={styles.milestoneContent}>
              <Text style={styles.milestoneTitle}>{milestone.title}</Text>
              {milestone.description.map((desc, i) => (
                <Text key={i} style={styles.milestoneDescription}>
                  {desc}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Tombol Tambah */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>TAMBAH</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Tambah Target</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Target</Text>
              <TextInput style={styles.input} placeholder="Tulis target yang ingin dicapai" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Deskripsi</Text>
              <TextInput style={styles.input} placeholder="Tulis deskripsi" />
            </View>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Tambah Target</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Milestone;

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
  infoBox: {
    backgroundColor: '#D0E6F8',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start', // Menjaga IPK dan nilai di atas
    marginBottom: 16,
  },
  infoText: {
    color: '#000000',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  gpaText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  gpaBox: {
    alignItems: 'center',
    marginLeft: 16, // Memberikan jarak dengan konten lainnya
  },
  gpaValueContainer: {
    backgroundColor: '#FBBF24',
    paddingVertical: 5, // Padding vertikal
    paddingHorizontal: 35, // Padding horizontal untuk memperpanjang
    borderRadius: 20, // Membuat sudut tumpul
  },
  gpaValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: '#225580',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  milestoneList: {
    marginBottom: 16,
  },
  milestoneItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  milestoneIconWrapper: {
    alignItems: 'center',
    position: 'relative',
  },
  milestoneIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  milestoneLine: {
    position: 'absolute',
    top: 20, // Sesuaikan posisi vertikal agar garis tepat di tengah
    width: 2,
    height: 54,
    left: 25, // Agar garis berada di tengah antara dua ikon
    marginTop: 28,
  },
  milestoneContent: {
    flex: 1,
    paddingLeft: 10,
  },
  milestoneTitle: {
    fontWeight: 'bold',
  },
  milestoneDescription: {
    color: '#6B7280',
  },
  addButton: {
    backgroundColor: '#63ABE6',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    width: 320,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: '#E5F1FF',
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  inputLabel: {
    fontWeight: 'bold',
    color: '#225580',
    marginBottom: 5,
    textAlign: 'center',
  },
  input: {
    borderWidth: 0,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    marginTop: 5,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#4B9CE2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

