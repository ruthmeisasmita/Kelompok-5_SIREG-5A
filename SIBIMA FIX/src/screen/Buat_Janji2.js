import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Modal, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";

const Buat_Janji2 = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(8);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const renderCalendar = () => {
    const days = [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19, 20, 21],
      [22, 23, 24, 25, 26, 27, 28],
      [29, 30, 31, '', '', '', ''],
    ];

    return days.map((week, index) => (
      <View key={index} style={styles.weekRow}>
        {week.map((day, idx) => (
          <TouchableOpacity
            key={idx}
            style={[styles.day, selectedDate === day && styles.selectedDay]}
            onPress={() => setSelectedDate(day)}
          >
            <Text style={styles.dayText}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>
    ));
  };

  return (
    <SafeAreaProvider>
        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={{ backgroundColor: '#808080aa', flex: 1, justifyContent: 'center' }}>
            <View style={styles.confirmation}>
              <Text style={styles.confirmationText}>
                Apakah anda yakin ingin membuat jadwal bimbingan berikut?
              </Text>
              <View style={styles.details}>
                <Image
                  source={require('../../Assetsibima/Putri.png')}
                  style={styles.image}
                />
                <View>
                  <Text style={styles.detailTextBold}>
                    Putri Eka Sevtiyuni, S.Si., M.T.
                  </Text>
                  <Text style={styles.detailText}>
                    Tanggal : 08 Mei 2024
                  </Text>
                  <Text style={styles.detailText}>Jam : 10.00 AM</Text>
                  <Text style={styles.detailText}>Lokasi : Indralaya</Text>
                </View>
              </View>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={styles.confirmButton}
                  onPress={() => {
                    setIsModalVisible(false);
                    navigation.navigate('Buat_Janji3');
                  }}
                >
                  <Text style={styles.buttonText}>Yakin</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setIsModalVisible(false)}
                >
                  <Text style={styles.buttonText}>Batal</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <View style={styles.arrowContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Buat_Janji_Putri')}>
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

          <View style={styles.calendarContainer}>
            <View style={styles.calendarHeader}>
              <Ionicons name="arrow-back" size={24} color="black" />
              <Text style={styles.calendarTitle}>MEI 2024</Text>
              <Ionicons name="arrow-forward" size={24} color="black" />
            </View>
            <View style={styles.calendar}>
              <View style={styles.weekRow}>
                <Text style={styles.dayName}>Sen</Text>
                <Text style={styles.dayName}>Sel</Text>
                <Text style={styles.dayName}>Rab</Text>
                <Text style={styles.dayName}>Kam</Text>
                <Text style={styles.dayName}>Jum</Text>
                <Text style={styles.dayName}>Sab</Text>
                <Text style={styles.dayName}>Min</Text>
              </View>
              {renderCalendar()}
            </View>
          </View>

          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Jam tersedia</Text>
            <Text style={styles.viewAll}>Lihat semua</Text>
          </View>
          <View style={styles.availableTimes}>
            {['10.00 AM', '11.00 AM', '12.00 PM'].map((time, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.timeSlot,
                  selectedTimeSlot === time && styles.selectedTimeSlot,
                ]}
                onPress={() => setSelectedTimeSlot(time)}
              >
                <Text style={styles.timeText}>{time}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Lokasi</Text>
          <View style={styles.locations}>
            {['Bukit', 'Indralaya'].map((location, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.location,
                  selectedLocation === location && styles.selectedLocation,
                ]}
                onPress={() => setSelectedLocation(location)}
              >
                <Text style={styles.locationText}>{location}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            onPress={() => setIsModalVisible(true)}
            style={styles.nextButton}
          >
            <Text style={styles.nextButtonText}>SELANJUTNYA</Text>
          </TouchableOpacity>
        </ScrollView>
    </SafeAreaProvider>
  );
};

export default Buat_Janji2;

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
    calendarContainer: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
    },
    calendarHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    calendarTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    calendar: {
        marginTop: 10,
        width: '100%',
    },
    weekRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    dayName: {
        fontWeight: 'normal',
        color: '#000000',
        width: 30,
        textAlign: 'center',
    },
    day: {
        padding: 10,
        width: 40,
        textAlign: 'center',
    },
    dayText: {
        textAlign: 'center',
    },
    selectedDay: {
        backgroundColor: '#cce5ff',
        borderRadius: 15,
    },
      confirmation: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5, // Untuk perangkat Android
      },
      confirmationText: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      details: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
      },
      detailText: {
        fontSize: 14,
        color: '#000',
      },
      detailTextBold: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      },
      confirmButton: {
        width: '45%',
        padding: 10,
        borderRadius: 30,
        backgroundColor: '#F4C542',
      },
      cancelButton: {
        width: '45%',
        padding: 10,
        borderRadius: 30,
        backgroundColor: '#F44336',
      },
      buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 14,
      },
    sectionTitleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 27,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    viewAll: {
      fontSize: 14,
      color: '#336699',
    },
    availableTimes: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 20,
    },
    timeSlot: {
        padding: 10,
        backgroundColor: '#cce5ff',
        borderRadius: 10,
    },
    selectedTimeSlot: {
        backgroundColor: '#6699cc',
    },
    timeText: {
        textAlign: 'center',
    },
    locations: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 20,
    },
    location: {
        padding: 10,
        backgroundColor: '#cce5ff',
        borderRadius: 10,
    },
    selectedLocation: {
        backgroundColor: '#6699cc',
    },
    locationText: {
        textAlign: 'center',
    },
    nextButton: {
        padding: 15,
        backgroundColor: '#336699',
        borderRadius: 10,
        marginTop: 40,
        alignItems: 'center',
    },
    nextButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
});