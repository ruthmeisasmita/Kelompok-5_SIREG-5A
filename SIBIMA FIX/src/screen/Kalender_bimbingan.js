import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Kalender_bimbingan = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(8);
  const highlightedDates = [8, 10];

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
            style={[
              styles.day,
              selectedDate === day && styles.selectedDay,
              highlightedDates.includes(day) && styles.highlightedDay,
            ]}
            onPress={() => setSelectedDate(day)}
          >
            <Text style={styles.dayText}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Informasi')}>
            <Ionicons name="arrow-back" size={20} color="#FBBF24" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Kalender Bimbingan</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Calendar Header */}
      <View style={styles.calendarHeaderContainer}>
        <TouchableOpacity onPress={() => console.log('Previous Month')}>
          <Ionicons name="chevron-back-circle" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.calendarTitle}>MEI 2023</Text>
        <TouchableOpacity onPress={() => console.log('Next Month')}>
          <Ionicons name="chevron-forward-circle" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Calendar */}
      <View style={styles.calendarContainer}>
        <View style={styles.weekRow}>
          <Text style={styles.dayName}>Mon</Text>
          <Text style={styles.dayName}>Tue</Text>
          <Text style={styles.dayName}>Wed</Text>
          <Text style={styles.dayName}>Thu</Text>
          <Text style={styles.dayName}>Fri</Text>
          <Text style={styles.dayName}>Sat</Text>
          <Text style={styles.dayName}>Sun</Text>
        </View>
        {renderCalendar()}
      </View>

      {/* Schedule */}
      <Text style={styles.scheduleTitle}>Jadwal Bimbingan</Text>
      <View style={styles.scheduleContainer}>
        <TouchableOpacity>
          <View style={[styles.scheduleItem, styles.scheduleItemBlue]}>
            <Text style={styles.scheduleDate}>Senin, 08 Mei 2024</Text>
            <Text style={styles.scheduleText}>
              Bimbingan bersama Putri Eka Sevtiyuni
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.scheduleItem, styles.scheduleItemBlue]}>
            <Text style={styles.scheduleDate}>Rabu, 10 Mei 2024</Text>
            <Text style={styles.scheduleText}>
              Bimbingan di forum bersama Putri Eka Sevtiyuni
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Kalender_bimbingan;

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
  calendarHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFEDB9',
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 10,
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  calendarContainer: {
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  dayName: {
    fontWeight: '500',
    color: '#000000',
    width: 40,
    textAlign: 'center',
  },
  day: {
    padding: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  dayText: {
    textAlign: 'center',
  },
  selectedDay: {
    backgroundColor: '#FDE68A',
    borderRadius: 20,
  },
  highlightedDay: {
    backgroundColor: '#BFDBFE',
    borderRadius: 20,
  },
  scheduleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  scheduleContainer: {
    marginBottom: 16,
  },
  scheduleItem: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  scheduleItemBlue: {
    backgroundColor: '#99D1FF',
  },
  scheduleDate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  scheduleText: {
    fontSize: 14,
    color: '#1E3A8A',
  },
});
